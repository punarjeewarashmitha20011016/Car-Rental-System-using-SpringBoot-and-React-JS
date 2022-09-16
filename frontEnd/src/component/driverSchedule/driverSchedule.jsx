import { useState } from "react";
import { useEffect } from "react";
import bookingService from "../../services/bookingService/bookingService";
import { driverUserNameStore } from "../../store/driverStore";
import CommonTable from "../common/table/table";
import classes from "./driverSchedule.module.css";

export const DriverSchedule = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      if (
        driverUserNameStore.userName != null ||
        driverUserNameStore.userName != ""
      ) {
        let res = await bookingService.getDriverSchedule(
          driverUserNameStore.userName
        );
        let arr = [];
        let data = res.data.data;
        data.forEach((e) => {
          arr.push(
            <tr>
              <td>{e.nic}</td>
              <td>{e.name}</td>
              <td>{e.boId}</td>
              <td>{e.availableStatus}</td>
              <td>{e.pickupDate}</td>
              <td>{e.pickupTime}</td>
              <td>{e.returnedDate}</td>
              <td>{e.returnedTime}</td>
            </tr>
          );
        });
        setList(arr);
      }
    };
    loadData();
  }, []);
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
          dataList={list}
          style={{ width: "90%", height: "90%" }}
        />
      </div>
    </div>
  );
};
