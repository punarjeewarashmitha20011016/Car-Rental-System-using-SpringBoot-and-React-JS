import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../../baseUrl";
import bookingService from "../../services/bookingService/bookingService";
import CommonTable from "../common/table/table";
import classes from "./income.module.css";
import { IncomeCards } from "./incomeCards";
export const Income = (props) => {
  const [income, setIncome] = useState({
    dailyIncome: "",
    monthlyIncome: "",
    annualIncome: "",
  });
  const [incomeList, setIncomeList] = useState();
  useEffect(() => {
    const loadData = async () => {
      try {
        let dailyIncome = await bookingService.getDailyIncome();
        let monthlyIncome = await bookingService.getMonthlyIncome();
        let annualIncome = await bookingService.getAnnualIncome();
        if (
          dailyIncome == undefined &&
          monthlyIncome != undefined &&
          annualIncome != undefined
        ) {
          setIncome((prevState) => {
            return {
              ...income,
              dailyIncome: 0,
              monthlyIncome: monthlyIncome.data.data,
              annualIncome: annualIncome.data.data,
            };
          });
        } else if (
          dailyIncome == undefined &&
          monthlyIncome == undefined &&
          annualIncome != undefined
        ) {
          setIncome((prevState) => {
            return {
              ...income,
              dailyIncome: 0,
              monthlyIncome: 0,
              annualIncome: annualIncome.data.data,
            };
          });
        } else if (
          dailyIncome != undefined &&
          monthlyIncome == undefined &&
          annualIncome != undefined
        ) {
          setIncome((prevState) => {
            return {
              ...income,
              dailyIncome: dailyIncome.data.data,
              monthlyIncome: 0,
              annualIncome: annualIncome.data.data,
            };
          });
        } else if (
          dailyIncome != undefined &&
          monthlyIncome == undefined &&
          annualIncome == undefined
        ) {
          setIncome((prevState) => {
            return {
              ...income,
              dailyIncome: dailyIncome.data.data,
              monthlyIncome: 0,
              annualIncome: 0,
            };
          });
        } else if (
          dailyIncome != undefined &&
          monthlyIncome != undefined &&
          annualIncome == undefined
        ) {
          setIncome((prevState) => {
            return {
              ...income,
              dailyIncome: dailyIncome.data.data,
              monthlyIncome: monthlyIncome.data.data,
              annualIncome: 0,
            };
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    const setDataToTable = async () => {
      let res = await bookingService.getAllBookings();
      let data = res.data.data;
      let arr = [];
      let rowNo = 0;
      data.forEach((e) => {
        arr.push(
          <tr>
            <td>{rowNo++}</td>
            <td>{e.payments.paymentId}</td>
            <td>{e.payments.cusNic}</td>
            <td>{e.payments.dateOfPayment}</td>
            <td>{e.payments.timeOfPayment}</td>
            <td>{e.payments.lossDamageWaiver}</td>
            <td>
              <img
                src={
                  baseUrl + "/uploads/" + e.payments.lossDamageWaiverPaymentSlip
                }
                width="100px"
              ></img>
            </td>
            <td>{e.payments.cost}</td>
          </tr>
        );
      });
      setIncomeList(arr);
    };
    loadData();
    setDataToTable();
  }, []);
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
              <IncomeCards
                header={"Daily Income"}
                incomeValue={income.dailyIncome}
              />
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
              <IncomeCards
                header={"Monthly Income"}
                incomeValue={income.monthlyIncome}
              />
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
              <IncomeCards
                header={"Annual Income"}
                incomeValue={income.annualIncome}
              />
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
                "Customer Nic",
                "Date Of Payment",
                "Time of Payment",
                "Loss Damage Waiver",
                "Loss Damage Waiver Slip",
                "Cost",
              ]}
              dataList={incomeList}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
