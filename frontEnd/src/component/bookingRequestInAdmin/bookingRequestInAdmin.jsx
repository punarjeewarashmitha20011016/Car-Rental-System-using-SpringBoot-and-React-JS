import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import placeBookingRequest from "../../services/placeBookingRequest/placeBookingRequest";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";
import { BookingRequestInAdminDetails } from "./bookingRequestDetailsView";
import PlaceBookingRequestService from "../../services/placeBookingRequest/placeBookingRequest";

import classes from "./bookingRequestInAdmin.module.css";

export const BookingRequestInAdmin = (props) => {
  const [view, setView] = useState(null);
  const [check, setCheck] = useState(false);
  const [bookingRequestList, setBookingRequestList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [searchBoIdTxt, setSearchBoIdTxt] = useState(null);
  const [dataListForDetailsTbl, setDataListForDetailsTbl] = useState([]);

  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [booking, setBooking] = useState({
    boId: "",
    cusNic: "",
    date: "",
    time: "",
    cost: "",
    bookingDetails: "",
    payments: {
      paymentsId: "",
      boId: "",
      cusNic: "",
      dateOfPayment: "",
      timeOfPayment: "",
      lossDamageWaiver: "",
      lossDamageWaiverPaymentSlip: "",
      cost: "",
    },
  });
  const setDataToTable = (list) => {
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

  const setDataToDetailsTable = (list) => {
    console.log(list);
    let arr = [];
    let rowNo = 1;
    list != null &&
      list.bookingDetails.forEach((data) => {
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
    setDataListForDetailsTbl(arr);
  };
  useEffect(() => {
    const getAllBookingRequest = async () => {
      let res = await placeBookingRequest.placeBookingRequestGetAll();
      bookingRequestList.push(res.data.data);
      setDataToTable(res.data.data);
    };

    getAllBookingRequest();
  }, []);

  const setDataToFields = (data) => {
    let tm = data.time[8] + data.time[9];
    console.log(data);
    if (tm === "PM") {
      var timer = data.time;
      var hours = Number(timer.match(/^(\d+)/)[1]);
      var minutes = Number(timer.match(/:(\d+)/)[1]);
      var AMPM = timer.match(/\s(.*)$/)[1];
      if (AMPM == "PM" && hours < 12) hours = hours + 12;
      if (AMPM == "AM" && hours == 12) hours = hours - 12;
      var sHours = hours.toString();
      var sMinutes = minutes.toString();
      if (hours < 10) sHours = "0" + sHours;
      if (minutes < 10) sMinutes = "0" + sMinutes;
      setTime(sHours + ":" + sMinutes + ":" + data.time[5] + data.time[6]);
    } else {
      setTime(
        data.time[0] +
          data.time[1] +
          data.time[2] +
          data.time[3] +
          data.time[4] +
          data.time[5] +
          data.time[6]
      );
    }

    let dt = data.date;
    if (dt[1] && dt[2] < 10) {
      setDate(dt[0] + "-" + 0 + dt[1] + "-" + 0 + dt[2]);
    } else if (dt[1] < 10) {
      setDate(dt[0] + "-" + 0 + dt[1] + "-" + dt[2]);
    } else if (dt[2] < 10) {
      setDate(dt[0] + "-" + dt[1] + "-" + 0 + dt[2]);
    }
    setBooking({
      boId: data.boId,
      cusNic: data.cusNic,
      date: data.date,
      time: data.time,
      cost: data.cost,
      bookingDetails: data.bookingDetails,
      payments: {
        paymentsId: data.payments.paymentsId,
        boId: data.payments.boId,
        cusNic: data.payments.cusNic,
        dateOfPayment: data.payments.dateOfPayment,
        timeOfPayment: data.payments.timeOfPayment,
        lossDamageWaiver: data.payments.lossDamageWaiver,
        lossDamageWaiverPaymentSlip: data.payments.lossDamageWaiverPaymentSlip,
        cost: data.payments.cost,
      },
    });
  };
  const clearFields = () => {
    setTime("");
    setDate("");
    setDataToTable(null);
    setDataToDetailsTable(null);
    setBooking({
      boId: "",
      cusNic: "",
      date: "",
      time: "",
      cost: "",
      bookingDetails: "",
      payments: {
        paymentsId: "",
        boId: "",
        cusNic: "",
        dateOfPayment: "",
        timeOfPayment: "",
        lossDamageWaiver: "",
        lossDamageWaiverPaymentSlip: "",
        cost: "",
      },
    });
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <Grid container spacing={0} style={{ width: "90%", height: "90%" }}>
          <Grid
            container
            item
            xs={12}
            style={{
              position: "relative",
              height: "12%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={10}
              style={{
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                style={{ height: "80%", width: "90%", display: "flex" }}
                size={"small"}
                placeholder={"Search Booking Request with Booking ID"}
                onChange={(e) => {
                  setSearchBoIdTxt(e.target.value);
                }}
                value={searchBoIdTxt}
              />
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                label={"Search"}
                style={{ width: "80%", height: "80%", display: "flex" }}
                onClick={async (e) => {
                  let res = await placeBookingRequest.placeBookingRequestSearch(
                    searchBoIdTxt
                  );
                  setDataToDetailsTable(res.data.data);
                  setDataToFields(res.data.data);
                }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            style={{
              position: "relative",
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {check === false ? (
              <CommonTable
                style={{ width: "100%", height: "90%" }}
                tblRows={[
                  "Row No",
                  "Booking Id",
                  "Customer Nic",
                  "Request Date",
                  "Request Time",
                  "Cost",
                ]}
                dataList={dataList}
              />
            ) : (
              view
            )}
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{
              position: "relative",
              height: "43%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ValidatorForm style={{ width: "95%", height: "90%" }}>
              <Grid container item xs={12} style={{ height: "100%" }}>
                <Grid
                  container
                  item
                  xs={4}
                  style={{
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" style={{ display: "flex" }}>
                      Booking Request ID
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ height: "70%", position: "relative" }}
                  >
                    <TextValidator
                      label="Enter Booking Request ID"
                      onChange={(e) => {}}
                      name="bookingRequestId"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "90%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      validators={["required"]}
                      errorMessages={[
                        "this field is required",
                        "Booking Request Id is not valid",
                      ]}
                      value={booking.boId}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  xs={4}
                  style={{
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" style={{ display: "flex" }}>
                      Customer NIC
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ height: "70%", position: "relative" }}
                  >
                    <TextValidator
                      disabled={true}
                      label="Enter Customer NIC"
                      onChange={(e) => {}}
                      name="customerNic"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "90%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      validators={["required"]}
                      errorMessages={[
                        "this field is required",
                        "Customer Nic is not valid",
                      ]}
                      value={booking.cusNic}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  xs={4}
                  style={{
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" style={{ display: "flex" }}>
                      Booking Request Date
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ height: "70%", position: "relative" }}
                  >
                    <TextValidator
                      disabled={true}
                      name="bookingRequestDate"
                      size="small"
                      type={"Date"}
                      style={{
                        position: "absolute",
                        width: "90%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      validators={["required"]}
                      value={date}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  xs={6}
                  style={{
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" style={{ display: "flex" }}>
                      Booking Request Time
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ height: "70%", position: "relative" }}
                  >
                    <TextValidator
                      disabled={true}
                      name="bookingRequestTime"
                      size="small"
                      type={"Time"}
                      style={{
                        position: "absolute",
                        width: "90%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      validators={["required"]}
                      value={time}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  xs={6}
                  style={{
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" style={{ display: "flex" }}>
                      Booking Request Cost
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ height: "70%", position: "relative" }}
                  >
                    <TextValidator
                      label="Enter Booking Request Cost"
                      disabled={true}
                      name="bookingRequestCost"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "90%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      validators={["required"]}
                      errorMessages={[
                        "this field is required",
                        "Booking Request Cost is not valid",
                      ]}
                      type={"Number"}
                      value={booking.cost}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </ValidatorForm>
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{
              position: "relative",
              height: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={2.4}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                label={"Save"}
                size={"small"}
                style={{ width: "70%", height: "70%", display: "flex" }}
                onClick={async (e) => {
                  console.log("Booking Obj - ", booking);
                  if (
                    window.confirm(
                      "Do You Want To Accept Booking Request..?"
                    ) == true
                  ) {
                    let res =
                      await PlaceBookingRequestService.placeBookingRequestAccept(
                        booking
                      );
                    clearFields();
                  }
                }}
              />
            </Grid>

            <Grid
              item
              xs={2.4}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                label={"Update"}
                size={"small"}
                style={{
                  width: "70%",
                  height: "70%",
                  display: "flex",
                  backgroundColor: "grey",
                }}
                onClick={async (e) => {}}
              />
            </Grid>
            <Grid
              item
              xs={2.4}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                label={"View All"}
                size={"medium"}
                style={{
                  display: "flex",
                  width: "70%",
                  height: "70%",
                  backgroundColor: "#4BBDE1",
                }}
                onClick={async (e) => {
                  setView(
                    <BookingRequestInAdminDetails
                      dataList={dataListForDetailsTbl}
                    />
                  );
                  setCheck(true);
                }}
                onDblClick={async (e) => {
                  setCheck(false);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
