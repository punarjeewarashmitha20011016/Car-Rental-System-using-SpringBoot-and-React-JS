import CommonTable from "../common/table/table";
import classes from "./driverSchedule.module.css";

export const DriverSchedule = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <CommonTable
          tblRows={[
            "Row No",
            "Nic",
            "Name",
            "Booking Id",
            "License No",
            "Available Status",
            "Pickup Date",
            "Pickup Time",
            "Return Date",
            "Return Time",
          ]}
          dataList={[]}
          style={{ width: "90%", height: "90%" }}
        />
      </div>
    </div>
  );
};
