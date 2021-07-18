import React, { useEffect, useState } from "react";
import { UserApi } from "../../api";
import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const UserInfo = ({ props }) => {
  const [data, setData] = useState(null);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [alertMSG, setAlertMSG] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const handleBackButton = () => {
    props.history.push("/users");
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
      setAlertType("success")
      setPassword("");
      setRePassword("");
    }
  };

  const onChangeInput = (event, cb) => {
    setShowAlert(false);
    cb(event.target.value);
  };

  useEffect(() => {
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
    console.log(props);
  }, []);
  return (
    <div>
      <button onClick={() => handleBackButton()}>back</button>
      {data && (
        <form>
          <label>
            Ảnh đại diện:
            <img src={data.avatar} width={200} />
          </label>
          <label>
            Họ:
            <input disabled type="text" name="lastName" value={data.lastName} />
          </label>
          <label>
            Tên:
            <input
              disabled
              type="text"
              name="firstName"
              value={data.firstName}
            />
          </label>
          <label>
            Email:
            <input disabled type="email" name="email" value={data.email} />
          </label>
          <label>
            Số điện thoại:
            <input
              disabled
              type="text"
              name="phoneNumber"
              value={data.phoneNumber}
            />
          </label>

          <label>
            Mật khẩu mới:
            <input
              type="password"
              name="password"
              onChange={(event) => onChangeInput(event, setPassword)}
              value={password}
            />
          </label>

          <label>
            Nhập lại mật khẩu mới:
            <input
              type="password"
              name="re-password"
              onChange={(event) => onChangeInput(event, setRePassword)}
              value={rePassword}
            />
          </label>
          <Button onClick={onSubmit} variant="contained" color="primary">
            Submit
          </Button>
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
  );
};

export default UserInfo;
