import { Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import bookingService from "../../services/bookingService/bookingService";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";
import { ViewAllBookingDetails } from "./ViewAllBookingDetails";
import classes from "./viewAllBookings.module.css";
export const ViewAllBookings = (props) => {
  const [check, setCheck] = useState(false);
  const [view, setView] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [searchTxt, setSearchTxt] = useState(null);
  const [dataListOfDetailsTable, setDataToDetailsTable] = useState([]);
  useEffect(() => {
    const getAllBookings = async () => {
      let res = await bookingService.getAllBookings();
      let list = res.data.data;
      let arr = [];
      let rowNo = 1;
      list != null &&
        list.forEach((data) => {
          arr.push(
            <tr>
              <td>{rowNo++}</td>
              <td>{data.boId}</td>
              <td>{data.cusNic}</td>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>{data.cost}</td>
            </tr>
          );
        });
      setDataList(arr);
    };
    getAllBookings();
  });
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <Grid
          container
          spacing={0}
          style={{
            width: "95%",
            height: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            style={{ height: "20%", display: "flex" }}
          >
            <Grid
              item
              xs={7}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                size={"small"}
                style={{ width: "85%", display: "flex" }}
                placeholder={"Search Current Booking Details"}
                onChange={(e) => {
                  setSearchTxt(e.target.value);
                }}
                value={searchTxt}
              />
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                color={"primary"}
                label={"Search"}
                style={{ width: "80%" }}
                onClick={async () => {
                  let res = await bookingService.getAllBookings();
                  let data = res.data.data;
                  data.forEach((e) => {
                    if (searchTxt === e.boId) {
                      let arr = [];
                      let rowNo = 1;
                      e.bookingDetails.length != 0 &&
                        e.bookingDetails.forEach((data) => {
                          arr.push(
                            <tr>
                              <td>{rowNo++}</td>
                              <td>{data.bookingId}</td>
                              <td>{data.car_RegNo}</td>
                              <td>{data.driverNic}</td>
                              <td>{data.carType}</td>
                              <td>{data.rentalType}</td>
                              <td>{data.dateOfPickup}</td>
                              <td>{data.timeOfPickup}</td>
                              <td>{data.pickupVenue}</td>
                              <td>{data.returnedDate}</td>
                              <td>{data.returnedTime}</td>
                              <td>{data.returnedVenue}</td>
                              <td>{data.lossDamage}</td>
                              <td>{data.cost}</td>
                            </tr>
                          );
                        });
                      setDataToDetailsTable(arr);
                    }
                  });
                }}
              />
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                color={"success"}
                label={"View Booking Details"}
                style={{ width: "80%" }}
                onClick={(e) => {
                  setCheck(true);
                  setView(
                    <ViewAllBookingDetails dataList={dataListOfDetailsTable} />
                  );
                }}
                onDblClick={(e) => {
                  setCheck(false);
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {check === false ? (
              <CommonTable
                tblRows={[
                  "Row No",
                  "Booking Id",
                  "Customer Nic",
                  "Booked Date",
                  "Booked Time",
                  "Cost",
                ]}
                dataList={dataList}
                style={{ width: "90%", height: "90%", display: "flex" }}
              />
            ) : (
              view
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
