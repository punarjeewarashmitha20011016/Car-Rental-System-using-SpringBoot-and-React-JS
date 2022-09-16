import { useEffect, useState } from "react";
import driverService from "../../services/driverService/driverService";
import CommonTable from "../common/table/table";
import classes from "./driverAccount.module.css";
import { driverUserNameStore } from "../../store/driverStore";
import { baseUrl } from "../../baseUrl";
export const DriverAccount = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      if (
        driverUserNameStore.userName != null ||
        driverUserNameStore.userName != ""
      ) {
        let res = await driverService.searchDriverByUsername(
          driverUserNameStore.userName
        );
        let arr = [];
        let data = res.data.data;
        arr.push(
          <tr>
            <td>{"1"}</td>
            <td>{data.nic}</td>
            <td>{data.name}</td>
            <td>{data.licenseNo}</td>
            <td>
              <img
                src={baseUrl + "/" + data.licensePhoto}
                style={{ width: "100px" }}
              />
            </td>
            <td>
              <img
                src={baseUrl + "/" + data.nicPhoto}
                style={{ width: "100px" }}
              />
            </td>
            <td>{data.contactNo}</td>
            <td>{data.address}</td>
            <td>{data.availableStatus}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
          </tr>
        );
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
            "Nic Photo",
            "License No",
            "License Photo",
            "Contact No",
            "Address",
            "Available Status",
            "Email",
            "Password",
          ]}
          dataList={list}
          style={{ width: "90%", height: "90%" }}
        />
      </div>
    </div>
  );
};
