import CommonTable from "../common/table/table";

export const ViewAllBookingDetails = (props) => {
  return (
    <CommonTable
      dataList={props.dataList}
      tblRows={[
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
      style={{ width: "90%", height: "90%" }}
    />
  );
};
