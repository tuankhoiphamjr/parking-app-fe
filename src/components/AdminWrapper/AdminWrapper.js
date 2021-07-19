import "./AdminWrapper.css";
import Chart from "../Charts/Chart";
import { useState, useEffect } from "react";
import hello from "../../assets/avatar/avatar.png";
import { reactLocalStorage } from "reactjs-localstorage";
import { CountApi } from "../../api";
import React from "react";

const AdminWrapper = () => {
      const [adminFullName, setAdminFullName] = useState("");
      const [numOfUser, setNumOfUser] = useState();
      const [numOfOwner, setNumOfOwner] = useState();
      const [numOfParking, setNumOfParking] = useState();
      const [numOfEvaluate, setNumOfEvaluate] = useState();
      const [userStatistical, setUserStatistical] = useState([]);
      const [numOfBooking, setNumOfBooking] = useState();
      const [revenue, setRevenue] = useState();
      const [evaluateInDay, setEvaluateInDay] = useState();

      const getUserStatisticalInCurrentMonth = async () => {
            let date = new Date();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            const response = await CountApi.getUserStatistical(month, year);
            if (!response) {
                  console.log("Some thing wrong");
            }
            setUserStatistical(response.data.result);
      };

      const getBookingStatisticalInCurrentDate = async () => {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            const response = await CountApi.getBookingStatistical(
                  day,
                  month,
                  year
            );
            if (!response) {
                  console.log("Some thing wrong");
            }
            setNumOfBooking(response.data.result.numOfBooking);
            setRevenue(response.data.result.revenue);
      };

      const getNumOfEvaluateInCurrentDate = async () => {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            const response = await CountApi.getEvaluateStatistical(
                  day,
                  month,
                  year
            );
            if (!response) {
                  console.log("Some thing wrong");
            }
            setEvaluateInDay(response.data.result);
      };

      const getAdminInfo = async () => {
            try {
                  const jsonValue = await reactLocalStorage.getObject("admin");
                  setAdminFullName(
                        `${JSON.parse(jsonValue).result.firstName} ${
                              JSON.parse(jsonValue).result.lastName
                        }`
                  );
            } catch (error) {
                  console.log("Err when get token from local storage");
                  return false;
            }
      };

      const getCountUser = async () => {
            try {
                  let response = await CountApi.getNumOfUser();
                  if (response?.status) {
                        try {
                              setNumOfUser(response.data.numOfUser);
                              setNumOfOwner(response.data.numOfOwner);
                        } catch (error) {
                              console.log(error);
                        }
                  }
            } catch (error) {
                  console.log("Err when get data from api");
                  return false;
            }
      };

      const getCountParking = async () => {
            try {
                  let response = await CountApi.getNumOfParking();
                  if (response?.status) {
                        try {
                              setNumOfParking(response.data.numOfParking);
                        } catch (error) {
                              console.log(error);
                        }
                  }
            } catch (error) {
                  console.log("Err when get data from api");
                  return false;
            }
      };

      const getCountEvaluate = async () => {
            try {
                  let response = await CountApi.getNumOfEvaluate();
                  if (response?.status) {
                        try {
                              setNumOfEvaluate(response.data.numOfEvaluate);
                        } catch (error) {
                              console.log(error);
                        }
                  }
            } catch (error) {
                  console.log("Err when get data from api");
                  return false;
            }
      };

      useEffect(() => {
            const fetchData = async () => {
                  await getAdminInfo();
                  await getCountUser();
                  await getCountParking();
                  await getCountEvaluate();
                  await getUserStatisticalInCurrentMonth();
                  await getBookingStatisticalInCurrentDate();
                  await getNumOfEvaluateInCurrentDate();
            };
            fetchData();
      }, []);
      return (
            <main>
                  <div className="main__container">
                        <div className="main__title">
                              {/* <img src={hello} alt="hello" /> */}
                              <img alt="hello" />
                              <div className="main__greeting">
                                    <h1>{adminFullName}</h1>
                                    <p>
                                          Chào mừng bạn đã đến với giao diện
                                          Quản lý
                                    </p>
                              </div>
                        </div>

                        <div className="main__cards">
                              <div className="card">
                                    <i className="fas fa-users fa-2x text-lightblue"></i>
                                    <div className="card__inner">
                                          <p className="text-primary-p">
                                                Số lượng người dùng
                                          </p>
                                          <span className="font-bold text-title">
                                                {numOfUser}
                                          </span>
                                    </div>
                              </div>
                              <div className="card">
                                    <i className="fas fa-user-tie fa-2x text-red"></i>
                                    <div className="card__inner">
                                          <p className="text-primary-p">
                                                Số lượng chủ bãi
                                          </p>
                                          <span className="font-bold text-title">
                                                {numOfOwner}
                                          </span>
                                    </div>
                              </div>
                              <div className="card">
                                    <i className="fas fa-parking fa-2x text-yellow"></i>
                                    <div className="card__inner">
                                          <p className="text-primary-p">
                                                Số lượng bãi xe
                                          </p>
                                          <span className="font-bold text-title">
                                                {numOfParking}
                                          </span>
                                    </div>
                              </div>
                              <div className="card">
                                    <i className="fa fa-thumbs-up fa-2x text-green"></i>
                                    <div className="card__inner">
                                          <p className="text-primary-p">
                                                Số lượng đánh giá
                                          </p>
                                          <span className="font-bold text-title">
                                                {numOfEvaluate}
                                          </span>
                                    </div>
                              </div>
                        </div>
                        <div className="charts">
                              <div className="charts__left">
                                    <div className="charts__left__title">
                                          <div>
                                                <h1>Báo cáo hằng tháng</h1>
                                                <p>Số người dùng mới</p>
                                          </div>
                                    </div>
                                    {userStatistical.length > 0 ? (
                                          <Chart
                                                userStatistical={
                                                      userStatistical
                                                }
                                          />
                                    ) : (
                                          <></>
                                    )}
                              </div>
                              <div className="charts__right">
                                    <div className="charts__right__title">
                                          <div>
                                                <h1>Báo cáo hằng ngày</h1>
                                                {/* <p>Vietnam</p> */}
                                          </div>
                                          {/* <i className="fa fa-usd"></i> */}
                                    </div>
                                    <div className="charts__right__cards">
                                          <div className="card1">
                                                <h1>booking</h1>
                                                <p>{numOfBooking} lượt</p>
                                          </div>
                                          <div className="card2">
                                                <h1>doanh thu</h1>
                                                <p>{revenue} VND</p>
                                          </div>
                                          <div className="card3">
                                                <h1>đánh giá</h1>
                                                <p>{evaluateInDay} lượt</p>
                                          </div>
                                          {/* <div className="card4">
                                                <h1>Orders</h1>
                                                <p>$7501</p>
                                          </div> */}
                                    </div>
                              </div>
                        </div>
                  </div>
            </main>
      );
};

export default AdminWrapper;
