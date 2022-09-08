import React, { Fragment, useEffect } from "react";
import CommonTable from "../common/table/table";
import CustomerService from "../../services/customerService/customerService";
import { baseUrl } from "../../baseUrl";
import classes from "./viewMyAccount.module.css";
import { useState } from "react";

export const ViewMyAccount = (props) => {
  const [cusData, setCusData] = useState(null);
  const fetchCustomers = async () => {
    let res = await CustomerService.fetchCustomers();
    let rowNo = 1;
    res.data.data.map((row) => {
      setCusData([
        <tr>
          <td>{rowNo++}</td>
          <td>{row.nic}</td>
          <td>{row.name}</td>
          <td>{row.licenseNo}</td>
          <td>{"0" + row.contactNo}</td>
          <td>{row.email}</td>
          <td>{row.password}</td>

          <td>
            <img src={baseUrl + "/" + row.nicPhoto} width="100px"></img>
          </td>
          <td>
            <img src={baseUrl + "/" + row.licensePhoto} width="100px"></img>
          </td>
        </tr>,
      ]);
    });
  };
  useEffect(() => {
    fetchCustomers();
  }, []);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            height: "90%",
          }}
        >
          <CommonTable
            height={"90%"}
            tblRows={[
              "Row No",
              "Nic",
              "Name",
              "License No",
              "Contact No",
              "Email",
              "Password",
              "Nic Photo",
              "License Photo",
            ]}
            dataList={cusData}
          />
        </div>
      </div>
    </div>
  );
};
