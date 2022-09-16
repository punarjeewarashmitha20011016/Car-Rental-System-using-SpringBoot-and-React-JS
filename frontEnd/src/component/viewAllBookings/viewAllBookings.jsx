import { useEffect } from "react";
import { useState } from "react";
import bookingService from "../../services/bookingService/bookingService";
import { BookingTable } from "../common/bookingTable/bookingTable";
export const ViewAllBookings = (props) => {
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
      let res = await bookingService.getAllBookings();
      let list = res.data.data;
      let arr = [];
      let rowNo = 1;
      list != null &&
        list.forEach((data) => {
          arr.push(
            <tr>
              <td>{rowNo++}</td>
              <td>{data.boId}</td>
              <td>{data.cusNic}</td>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>{data.cost}</td>
            </tr>
          );
        });
      setData(arr);
    };
    loadData();
  }, []);

  return (
    data != null && (
      <BookingTable
        tblRows={[
          "Row No",
          "Booking Id",
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
          "Trip In KM",
          "Extra KM Driven",
          "Date of Pickup",
          "Time of Pickup",
          "Pickup Venue",
          "Returned Date",
          "Returned Time",
          "Returned Venue",
          "Damage Status",
          "Loss Damage",
          "Cost",
        ]}
      />
    )
  );
};
