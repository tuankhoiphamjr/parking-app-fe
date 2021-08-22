import React, { useEffect, useState } from "react";
import { UserApi } from "../../api";
import { Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import "./UserInfo.css";

const UserInfo = ({ props }) => {
      const [data, setData] = useState(null);
      const [password, setPassword] = useState("");
      const [rePassword, setRePassword] = useState("");
      const [alertMSG, setAlertMSG] = useState("");
      const [showAlert, setShowAlert] = useState(false);
      const [alertType, setAlertType] = useState("success");
      const handleBackButton = () => {
            props.history.push("/home/users");
      };

      const onSubmit = async () => {
            if (password.length < 6 || rePassword.length < 6) {
                  setAlertMSG("Mật khẩu phải có ít nhất 6 kí tự");
                  setShowAlert(true);
                  setAlertType("error");
            } else if (password !== rePassword) {
                  setAlertMSG("Mật khẩu mới không trùng nhau");
                  setShowAlert(true);
                  setAlertType("error");
            } else {
                  let pathnameArraySplit = props.location.pathname.split("/");
                  let id = pathnameArraySplit[pathnameArraySplit.length - 1];

                  await UserApi.updateNewPassword(id, password);
                  setAlertMSG("Đổi mật khẩu thành công");
                  setShowAlert(true);
                  setAlertType("success");
                  setPassword("");
                  setRePassword("");
            }
      };

      const onChangeInput = (event, cb) => {
            setShowAlert(false);
            cb(event.target.value);
      };

      useEffect(() => {
            console.log(props);
            let pathnameArraySplit = props.location.pathname.split("/");
            let id = pathnameArraySplit[pathnameArraySplit.length - 1];
            const getData = async () => {
                  let data = await UserApi.getUserInfoById(id);
                  setData(data);
            };

            if (!props.location.data) {
                  getData();
            } else {
                  setData(props.location.data);
            }
      }, []);
      return (
            <main>
                  <div className="main__container">
                        <Button
                              onClick={() => handleBackButton()}
                              variant="contained"
                              color="secondary"
                        >
                              back
                        </Button>
                        {data && (
                              <form className="userInfoDetail">
                                    <ul className="formDetail">
                                          <li className="userDetail">
                                                <span className="userDetailTitle">
                                                      Ảnh đại diện:
                                                </span>

                                                <img
                                                      src={data.avatar}
                                                      className="avatar"
                                                />
                                          </li>
                                          <li className="userDetail"></li>
                                          <li className="userDetail">
                                                <span className="userDetailTitle">
                                                      Họ:
                                                </span>
                                                <TextField
                                                      disabled
                                                      type="text"
                                                      variant="outlined"
                                                      name="lastName"
                                                      label="Disabled"
                                                      size="small"
                                                      value={data.lastName}
                                                />
                                          </li>
                                          <li className="userDetail">
                                                <span className="userDetailTitle">
                                                      Tên:
                                                </span>
                                                <TextField
                                                      disabled
                                                      type="text"
                                                      variant="outlined"
                                                      name="lastName"
                                                      label="Disabled"
                                                      size="small"
                                                      value={data.firstName}
                                                />
                                          </li>
                                          <li className="userDetail">
                                                <span className="userDetailTitle">
                                                      Email:
                                                </span>
                                                <TextField
                                                      disabled
                                                      type="text"
                                                      variant="outlined"
                                                      name="lastName"
                                                      label="Disabled"
                                                      size="small"
                                                      value={data.email}
                                                />
                                          </li>
                                          <li className="userDetail">
                                                <span className="userDetailTitle">
                                                      Số điện thoại:
                                                </span>
                                                <TextField
                                                      disabled
                                                      type="text"
                                                      variant="outlined"
                                                      name="lastName"
                                                      label="Disabled"
                                                      size="small"
                                                      value={data.phoneNumber}
                                                />
                                          </li>
                                          <li className="userDetail">
                                                <span className="userDetailTitle">
                                                      Mật khẩu mới:
                                                </span>
                                                <TextField
                                                      variant="outlined"
                                                      name="lastName"
                                                      label="Mật khẩu"
                                                      size="small"
                                                      type="password"
                                                      name="password"
                                                      onChange={(event) =>
                                                            onChangeInput(
                                                                  event,
                                                                  setPassword
                                                            )
                                                      }
                                                      value={password}
                                                />
                                          </li>
                                          <li className="userDetail">
                                                <span className="userDetailTitle">
                                                      Nhập lại mật khẩu mới:
                                                </span>
                                                <TextField
                                                      variant="outlined"
                                                      name="lastName"
                                                      label="Mật khẩu mới"
                                                      size="small"
                                                      type="password"
                                                      name="re-password"
                                                      onChange={(event) =>
                                                            onChangeInput(
                                                                  event,
                                                                  setRePassword
                                                            )
                                                      }
                                                      value={rePassword}
                                                />
                                          </li>
                                    </ul>
                                    <div className="formButton">
                                          <Button
                                                onClick={onSubmit}
                                                variant="contained"
                                                color="primary"
                                          >
                                                Submit
                                          </Button>
                                    </div>
                              </form>
                        )}
                        {showAlert && (
                              <Alert
                                    onClose={() => {
                                          setShowAlert(false);
                                    }}
                                    variant="filled"
                                    severity={alertType}
                              >
                                    {alertMSG}
                              </Alert>
                        )}
                  </div>
            </main>
      );
};

export default UserInfo;
