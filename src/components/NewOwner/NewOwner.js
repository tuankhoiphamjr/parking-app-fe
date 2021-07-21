import { useState, useEffect } from "react";
import { NewOwnerApi } from "../../api";
import Parkings from "../Parkings/Parkings";
import "./NewOwner.css";
import React from "react";

const NewOwner = () => {
      const [listParking, setListParking] = useState([]);
      const getListParking = async () => {
            try {
                  let response = await NewOwnerApi.getListNewParking();
                  if (response?.status) {
                        try {
                              setListParking(response.data.result);
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

      const acceptParkingButton = async (parkingId, ownerId) => {
            try {
                  const data = { ownerId: ownerId };
                  let response = await NewOwnerApi.acceptParking(
                        parkingId,
                        data
                  );
                  if (response?.status) {
                        try {
                              let result = await getListParking();
                              if (!result) {
                                    console.log("Accept parking fail!");
                              }
                        } catch (error) {
                              console.log(error);
                        }
                  }
            } catch (error) {
                  console.log("Err when accept parking");
                  return false;
            }
      };

      useEffect(() => {
            const fetchData = async () => {
                  await getListParking();
            };
            fetchData();
      }, []);
      return (
            <main>
                  <div className="main__container">
                        <div className="main-container-title">
                              <h1>Quản lý bãi xe mới</h1>
                        </div>
                        <div className="parkingListWrapper">
                              {listParking.length > 0 ? (
                                    <Parkings
                                          listParking={listParking}
                                          acceptParkingButton={
                                                acceptParkingButton
                                          }
                                    />
                              ) : (
                                    "No Parking need verified"
                              )}
                        </div>
                  </div>
            </main>
      );
};

export default NewOwner;
