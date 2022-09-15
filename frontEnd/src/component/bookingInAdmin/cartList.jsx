import CommonTable from "../common/table/table";

export const CartList = (props) => {
  return (
    <CommonTable
      style={{ width: "90%", height: "90%" }}
      dataList={props.dataList}
      tblRows={[
        "Row No",
        "Booking Id",
        "Car_RegNo",
        "Driver Nic",
        "Car Type",
        "Trip In KM",
        "Extra KM Driven",
        "Rental Type",
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
  );
};
