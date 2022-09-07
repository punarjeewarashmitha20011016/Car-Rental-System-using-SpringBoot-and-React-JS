import CommonTable from "../common/table/table";

export const ViewCurrentBookingDetailsTable = (props) => {
  return (
    <CommonTable
      dataList={[]}
      tblRows={[
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
      style={{ width: "90%", height: "90%" }}
    />
  );
};
