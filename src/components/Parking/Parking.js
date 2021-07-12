import "./Parking.css";
import { dateTimeFormat } from "../../api";
import {
      ExpandMore,
      LocalParking,
      ExploreOutlined,
      AccessTimeOutlined,
      CompareArrowsOutlined,
      SupervisedUserCircleOutlined,
      DescriptionOutlined,
      AlarmOnOutlined,
      HourglassEmptyOutlined,
      MonetizationOnOutlined,
      ImageOutlined,
      ExpandLess,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Parking = ({ parking, acceptParkingButton }) => {
      const date = dateTimeFormat.dateDBFormat(parking.registerDate);
      const toggleShowMore = async (e) => {
            let toggleShowIcon;
            if (e.target.tagName === "SPAN" || e.target.tagName === "svg") {
                  toggleShowIcon = e.target.parentElement;
            } else {
                  toggleShowIcon = e.target;
            }
            let toggleShowInfo =
                  toggleShowIcon.parentElement.childNodes[0].childNodes[0]
                        .childNodes[0].childNodes;
            for (let i = 0; i < toggleShowInfo.length; i++) {
                  if (toggleShowInfo[i].className.includes("extraInfo")) {
                        toggleShowInfo[i].classList.toggle("active");
                  }
            }
            toggleShowIcon.classList.toggle("active");
            if (toggleShowIcon.childNodes[0].innerHTML === "Thu gọn") {
                  toggleShowIcon.childNodes[0].innerHTML = "Hiển thị thêm ...";
            } else {
                  toggleShowIcon.childNodes[0].innerHTML = "Thu gọn";
            }
      };
      return (
            <div className="parkingWrapper">
                  <div className="parkingTop">
                        <div className="parkingLeft">
                              <ul className="parkingInfos">
                                    <li className="parkingInfo">
                                          <div className="parkingTitleBox">
                                                <LocalParking className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Tên bãi:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {parking.parkingName}
                                          </span>
                                    </li>
                                    <li className="parkingInfo">
                                          <div className="parkingTitleBox">
                                                <ExploreOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Địa chỉ:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {parking.parkingAddress}
                                          </span>
                                    </li>
                                    <li className="parkingInfo">
                                          <div className="parkingTitleBox">
                                                <AccessTimeOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Ngày đăng ký:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {date}
                                          </span>
                                    </li>
                                    <li className="parkingInfo">
                                          <div className="parkingTitleBox">
                                                <CompareArrowsOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Diện tích:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {parking.superficies} m2
                                          </span>
                                    </li>
                                    <li className="parkingInfo">
                                          <div className="parkingTitleBox">
                                                <SupervisedUserCircleOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Số chỗ trống:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {parking.initialSlots}
                                          </span>
                                    </li>
                                    <li className="parkingInfo">
                                          <div className="parkingTitleBox">
                                                <DescriptionOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Mô tả ngắn:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {parking.description}
                                          </span>
                                    </li>
                                    <li className="parkingInfo extraInfo">
                                          <div className="parkingTitleBox">
                                                <AlarmOnOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Giờ mở cửa:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {parking.openTime} -{" "}
                                                {parking.closeTime}
                                          </span>
                                    </li>
                                    <li className="parkingInfo extraInfo">
                                          <div className="parkingTitleBox">
                                                <HourglassEmptyOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Khoảng tính giá:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {parking.unitHour} giờ
                                          </span>
                                    </li>
                                    <li className="parkingInfo extraInfo">
                                          <div className="parkingTitleBox">
                                                <MonetizationOnOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Giá:</b>
                                                </span>
                                          </div>
                                          <div className="parkingPrice">
                                                {parking.priceByVehicle.map(
                                                      (p) => (
                                                            <div
                                                                  key={p.key}
                                                                  className="parkingPriceByVehicle"
                                                            >
                                                                  <span className="parkingVehicle">
                                                                        {p.key ===
                                                                        1
                                                                              ? "Xe máy:"
                                                                              : ""}
                                                                        {p.key ===
                                                                        2
                                                                              ? "Ô tô:"
                                                                              : ""}
                                                                        {p.key ===
                                                                        3
                                                                              ? "Xe tải:"
                                                                              : ""}
                                                                        {p.key ===
                                                                        4
                                                                              ? "Xe đạp:"
                                                                              : ""}
                                                                  </span>
                                                                  <span className="parkingVehiclePrice">
                                                                        {
                                                                              p.value
                                                                        }{" "}
                                                                        đồng
                                                                  </span>
                                                            </div>
                                                      )
                                                )}
                                          </div>
                                    </li>
                                    <li className="parkingInfo extraInfo">
                                          <div className="parkingTitleBox">
                                                <ImageOutlined className="parkingInfoIcon" />
                                                <span className="parkingTitle">
                                                      <b>Hình ảnh:</b>
                                                </span>
                                          </div>
                                          <span className="parkingDetail">
                                                {parking.images.length > 0
                                                      ? parking.images.map(
                                                              (i) => "hello"
                                                        )
                                                      : ""}
                                          </span>
                                    </li>
                              </ul>
                        </div>
                        <div className="parkingRight">
                              <Button
                                    variant="contained"
                                    color="primary"
                                    className="parkingAccept"
                                    onClick={() =>
                                          acceptParkingButton(
                                                parking._id,
                                                parking.ownerId
                                          )
                                    }
                              >
                                    Chấp nhận
                              </Button>
                              <Button
                                    variant="contained"
                                    color="secondary"
                                    className="parkingDecline"
                              >
                                    Từ chối
                              </Button>
                        </div>
                  </div>
                  <div className="parkingBottom" onClick={toggleShowMore}>
                        <span className="parkingShowMore">
                              Hiển thị thêm ...
                        </span>
                        <ExpandMore className="parkingShowIcon moreIcon" />
                        <ExpandLess className="parkingShowIcon lessIcon" />
                  </div>
            </div>
      );
};

export default Parking;
