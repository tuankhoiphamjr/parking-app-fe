import Parking from "../Parking/Parking";

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
