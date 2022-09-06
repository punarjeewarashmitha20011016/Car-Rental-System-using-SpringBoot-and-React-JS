import { Grid } from "@mui/material";
import React from "react";
import CommonTable from "../common/table/table";
import classes from "./income.module.css";
import { IncomeCards } from "./incomeCards";
export const Income = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <Grid
          container
          spacing={0}
          style={{ position: "relative", width: "90%", height: "90%" }}
        >
          <Grid container item xs={12} style={{ height: "40%" }}>
            <Grid
              container
              item
              xs={4}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IncomeCards header={"Daily Income"} incomeValue={"10"} />
            </Grid>
            <Grid
              container
              item
              xs={4}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IncomeCards header={"Monthly Income"} incomeValue={"10"} />
            </Grid>
            <Grid
              container
              item
              xs={4}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IncomeCards header={"Annual Income"} incomeValue={"10"} />
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              height: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CommonTable
              style={{ border: "1px solid black", width: "90%" }}
              height="90%"
              tblRows={[
                "Row No",
                "Payments Id",
                "Booking Id",
                "Customer Nic",
                "Date Of Payment",
                "Time of Payment",
                "Loss Damage Waiver",
                "Loss Damage Waiver Slip",
                "Cost",
              ]}
              dataList={[]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
