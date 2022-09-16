import { useEffect, useState } from "react";
import placeBookingRequest from "../../services/placeBookingRequest/placeBookingRequest";
import { BookingTable } from "../common/bookingTable/bookingTable";
import { cusNicStore } from "../../store/cusNicStore";
export const ViewMyBookings = (props) => {
  const [data, setData] = useState(null);
  const [detailsRows, setDetailsRowsMethod] = useState(null);
  const setDetailsRows = (rowNo, data) => {
    setDetailsRowsMethod(
      <tr>
        <td>{rowNo++}</td>
        <td>{data.bookingId}</td>
        <td>{data.car_RegNo}</td>
        <td>{data.driverNic}</td>
        <td>{data.carType}</td>
        <td>{data.rentalType}</td>
        <td>{data.tripInKm}</td>
        <td>{data.extraKmDriven}</td>
        <td>{data.dateOfPickup}</td>
        <td>{data.timeOfPickup}</td>
        <td>{data.pickupVenue}</td>
        <td>{data.returnedDate}</td>
        <td>{data.returnedTime}</td>
        <td>{data.returnedVenue}</td>
        <td>{data.damageStatus}</td>
        <td>{data.lossDamage}</td>
        <td>{data.cost}</td>
      </tr>
    );
    return;
  };
  useEffect(() => {
    const loadData = async () => {
      let res = await placeBookingRequest.getCustomerOwnBookings(
        cusNicStore.cusNic
      );
      data == null && setData(res.data.data);
    };
    loadData();
  }, []);

  return (
    data != null && (
      <BookingTable
        tblRows={[
          "Row No",
          "Booking Id",
          "Status",
          "Customer Nic",
          "Booked Date",
          "Booked Time",
          "Cost",
        ]}
        resData={data}
        setDetailsRows={setDetailsRows}
        setDetailsRowsToTable={detailsRows}
        tblRowsForDetailsTable={[
          "Row No",
          "Booking Id",
          "Car_RegNo",
          "Driver Nic",
          "Car Type",
          "Rental Type",
          "Date of Pickup",
          "Time of Pickup",
          "Pickup Venue",
          "Returned Date",
          "Returned Time",
          "Returned Venue",
          "Loss Damage",
          "Cost",
        ]}
      />
    )
  );
};
