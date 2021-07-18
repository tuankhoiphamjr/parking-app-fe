import React, { useEffect, useState } from "react";
import { UserApi } from "../../api";
import { Button } from "@material-ui/core";

const UserInfo = ({ props }) => {
  const [data, setData] = useState(null);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleBackButton = () => {
    props.history.push("/users");
  };

  const onChangeInput = (event, cb) => {
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

  useEffect(() => {
    console.log(rePassword);
  }, [password, rePassword]);
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
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default UserInfo;
