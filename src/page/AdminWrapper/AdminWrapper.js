import "./AdminWrapper.css";
import Chart from "../../components/Charts/Chart";
import { useState, useEffect } from "react";
import hello from "../../assets/avatar/images.png";
import { CountApi } from "../../api";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TodayOutlined, RotateLeftOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

const AdminWrapper = ({ props }) => {
      const [numOfUser, setNumOfUser] = useState();
      const [numOfOwner, setNumOfOwner] = useState();
      const [numOfParking, setNumOfParking] = useState();
      const [numOfEvaluate, setNumOfEvaluate] = useState();
      const [userStatistical, setUserStatistical] = useState([]);
      const [numOfBooking, setNumOfBooking] = useState();
      const [revenue, setRevenue] = useState();
      const [evaluateInDay, setEvaluateInDay] = useState();
      const [date, setDate] = useState(new Date());
      const [calendarOpen, setCalendarOpen] = useState(false);

      const user = useSelector((state) => state.user);
      const { result } = user;

      const getUserStatisticalInCurrentMonth = async (date) => {
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            const response = await CountApi.getUserStatistical(month, year);
            if (!response) {
                  console.log("Some thing wrong");
            }
            setUserStatistical(response.data.result);
      };

      const getBookingStatisticalInCurrentDate = async (date) => {
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

      const getNumOfEvaluateInCurrentDate = async (date) => {
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

      const openCalendar = () => {
            setCalendarOpen(!calendarOpen);
      };

      const resetCalendar = () => {
            setDate(new Date());
      };

      const fetchCountData = async () => {
            await getCountUser();
            await getCountParking();
            await getCountEvaluate();
      };

      const fetchStatisticData = async (date) => {
            await getUserStatisticalInCurrentMonth(date);
            await getBookingStatisticalInCurrentDate(date);
            await getNumOfEvaluateInCurrentDate(date);
      };
      useEffect(() => {
            console.log(props);
            const fetchData = async (date) => {
                  await fetchCountData();
                  await fetchStatisticData(date);
            };
            fetchData(date);
      }, []);

      useEffect(() => {
            fetchStatisticData(date);
      }, [date]);
      return (
            <main>
                  <div
                        className={
                              calendarOpen
                                    ? "schedule scheduleOpen"
                                    : "schedule"
                        }
                        onClick={openCalendar}
                  >
                        <TodayOutlined className="scheduleIcon" />
                  </div>
                  <div className={calendarOpen ? "calendar" : "calendarClose"}>
                        <Calendar onChange={setDate} value={date} />
                        <RotateLeftOutlined
                              className="resetIcon"
                              onClick={resetCalendar}
                        />
                  </div>
                  <div
                        className={
                              calendarOpen
                                    ? "main__container main__container__close"
                                    : "main__container"
                        }
                  >
                        <div className="main__title">
                              <img src={hello} alt="hello" />
                              <div className="main__greeting">
                                    <h1>{`${result.firstName} ${result.lastName}`}</h1>
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
