import CommonTable from "../common/table/table";
import classes from "./driverAccount.module.css";
export const DriverAccount = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <CommonTable
          tblRows={[
            "Row No",
            "Nic",
            "Name",
            "Nic Photo",
            "License No",
            "License Photo",
            "Contact No",
            "Address",
            "Available Status",
            "Email",
            "Password",
          ]}
          dataList={[]}
          style={{ width: "90%", height: "90%" }}
        />
      </div>
    </div>
  );
};
