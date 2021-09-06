import React from "react";
import { useState, useEffect } from "react";
import {
      BrowserRouter as Router,
      Route,
      Switch,
      useRouteMatch,
} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { CountApi, UserApi, NewOwnerApi } from "../../api";
import routes from "../Routes";
import { useDispatch, useSelector } from "react-redux";
import { adminActions } from "../../redux/actions";

const Home = ({ checkLoginSuccess, removeCookie }) => {
      const [sideBarOpen, setSideBarOpen] = useState(false);
      const dispatch = useDispatch();
      let match = useRouteMatch();
      const user = useSelector((state) => state.user);
      // const redirect = user.firstName === undefined;
      const { accessToken, result } = user;

      const getCountUser = async () => {
            try {
                  let userResponse = await CountApi.getNumOfUser();
                  let parkingResponse = await CountApi.getNumOfParking();
                  let evaluateResponse = await CountApi.getNumOfEvaluate();

                  if (
                        userResponse?.status &&
                        parkingResponse?.status &&
                        evaluateResponse?.status
                  ) {
                        try {
                              const data = {
                                    numOfUser: userResponse.data.numOfUser,
                                    numOfOwner: userResponse.data.numOfOwner,
                                    numOfParking:
                                          parkingResponse.data.numOfParking,
                                    numOfEvaluate:
                                          evaluateResponse.data.numOfEvaluate,
                              };
                              dispatch(adminActions.numberUser(data));
                        } catch (error) {
                              console.log(error);
                        }
                  }
            } catch (error) {
                  console.log("Err when get data from api");
                  return false;
            }
      };

      const getUserData = async () => {
            let userData = await await UserApi.getAllUserInfo();
            userData = userData.filter((element) => element.role !== "admin");
            dispatch(adminActions.getAllUserInfo({ userData }));
      };

      const getListParking = async () => {
            try {
                  let response = await NewOwnerApi.getListNewParking();
                  if (response?.status) {
                        try {
                              const listParking = response.data.result;
                              dispatch(
                                    adminActions.getAllParkingNeedVerified({
                                          listParking,
                                    })
                              );
                              return true;
                        } catch (error) {
                              console.log(error);
                        }
                  }
            } catch (error) {
                  console.log("Err when get data from api");
                  return false;
            }
      };

      const fetchData = async () => {
            await checkLoginSuccess();
            await getCountUser();
            await getUserData();
            await getListParking();
      };

      useEffect(() => {
            fetchData();
      }, []);

      const openSideBar = () => {
            setSideBarOpen(true);
      };

      const closeSideBar = () => {
            setSideBarOpen(false);
      };

      const showContentMenu = (routes, props) => {
            let result = null;

            if (routes.length > 0) {
                  result = routes.map((route, index) => {
                        return (
                              <Route
                                    key={index}
                                    props={props}
                                    path={`${match.path}${route.path}`}
                                    exact={route.exact}
                                    component={route.main}
                              />
                        );
                  });
            }
            return result;
      };

      return (
            <div className="admin-wrapper">
                  <NavBar sideBarOpen={sideBarOpen} openSideBar={openSideBar} />
                  <Switch>{showContentMenu(routes)}</Switch>

                  <SideBar
                        sideBarOpen={sideBarOpen}
                        closeSideBar={closeSideBar}
                        removeCookie={removeCookie}
                  />
            </div>
      );
};

export default Home;
