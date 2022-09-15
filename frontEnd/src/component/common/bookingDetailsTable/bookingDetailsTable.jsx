import CommonTable from "../table/table";

export const BookingDetailsTable = (props) => {
  return (
    <CommonTable
      dataList={props.dataList}
      tblRows={props.tblRows}
      style={{ width: "90%", height: "90%" }}
    />
  );
};
