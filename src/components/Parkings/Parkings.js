import Parking from "../Parking/Parking";
import React from "react";

const Parkings = ({listParking, acceptParkingButton}) => {
      return (
            <>
                  {listParking.map((parking) => (
                        <Parking
                              key={parking._id}
                              parking={parking}
                              acceptParkingButton={acceptParkingButton}
                        />
                  ))}
            </>
      );
};

export default Parkings;
