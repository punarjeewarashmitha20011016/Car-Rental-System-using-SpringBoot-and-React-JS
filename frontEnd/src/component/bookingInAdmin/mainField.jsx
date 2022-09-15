import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import React from "react";
import CommonButton from "../common/btn";
import { useState } from "react";
import placeBookingRequest from "../../services/placeBookingRequest/placeBookingRequest";
import { useEffect } from "react";
export const MainFields = (props) => {
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
  const [carRegNoList, setCarRegNoList] = useState([]);
  const [addToListObj, setAddToListObj] = useState({
    boId: "",
    c_RegNo: "",
    driverNic: "",
    carType: "",
    tripInKM: "",
    extraKmDriven: "",
    rentalType: "",
    dateOfPickup: "",
    timeOfPickup: "",
    pickupVenue: "",
    returnedDate: "",
    returnedTime: "",
    returnVenue: "",
    damageStatus: "",
    lossDamageWaiver: "",
    cost: "",
  });
  const [dateOfPickup, setDateOfPickup] = useState(null);
  const [timeOfPickup, setTimeOfPickup] = useState(null);
  const [returnedDate, setReturnedDate] = useState(null);
  const [returnedTime, setReturnedTime] = useState(null);

  const setDateAndTime = (data, type) => {
    let tm = data.time[8] + data.time[9];
    console.log("type = ", type);
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
      if (type === "Pickup") {
        setTimeOfPickup(
          sHours + ":" + sMinutes + ":" + data.time[5] + data.time[6]
        );
      } else {
        setReturnedTime(
          sHours + ":" + sMinutes + ":" + data.time[5] + data.time[6]
        );
      }
    } else {
      if (type === "Pickup") {
        setTimeOfPickup(
          data.time[0] +
            data.time[1] +
            data.time[2] +
            data.time[3] +
            data.time[4]
        );
      } else {
        setReturnedTime(
          data.time[0] +
            data.time[1] +
            data.time[2] +
            data.time[3] +
            data.time[4]
        );
      }
    }

    let dt = data.date;
    if (dt[1] && dt[2] < 10) {
      if (type === "Pickup") {
        setDateOfPickup(dt[0] + "-" + 0 + dt[1] + "-" + 0 + dt[2]);
      } else {
        setReturnedDate(dt[0] + "-" + 0 + dt[1] + "-" + 0 + dt[2]);
      }
    } else if (dt[1] < 10) {
      if (type === "Pickup") {
        setDateOfPickup(dt[0] + "-" + 0 + dt[1] + "-" + dt[2]);
      } else {
        setReturnedDate(dt[0] + "-" + 0 + dt[1] + "-" + dt[2]);
      }
    } else if (dt[2] < 10) {
      if (type === "Pickup") {
        setDateOfPickup(dt[0] + "-" + dt[1] + "-" + 0 + dt[2]);
      } else {
        setReturnedDate(dt[0] + "-" + dt[1] + "-" + 0 + dt[2]);
      }
    }
  };

  useEffect(() => {
    props.btnClickBoolReturn(booking, addToListObj);
  }, [addToListObj]);
  return (
    <ValidatorForm style={{ width: "100%", height: "100%" }}>
      <Grid item container xs={12} style={{ height: "20%" }}>
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
          <TextValidator
            placeholder="Enter Booking Id"
            size={"small"}
            onChange={(e) => {
              setBooking((prevState) => {
                return {
                  ...booking,
                  boId: e.target.value,
                };
              });
            }}
            value={booking.boId}
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
            variant={"outlined"}
            color={"success"}
            style={{ width: "90%", height: "50%" }}
            label={"Search Pending Booking"}
            onClick={async (e) => {
              let carRegNoArr = [];
              let res =
                await placeBookingRequest.placeBookingRequestGetAllPendingBookings();
              let data = res.data.data;
              data.forEach((e) => {
                if (booking.boId == e.boId) {
                  setBooking((prevState) => {
                    return {
                      ...booking,
                      boId: e.boId,
                      cusNic: e.cusNic,
                      date: e.date,
                      time: e.time,
                      cost: e.cost,
                      bookingDetails: e.bookingDetails,
                      payments: e.payments,
                    };
                  });
                  e.bookingDetails.forEach((e) => {
                    console.log(e);
                    carRegNoArr.push(e.car_RegNo);
                  });
                }
              });
              setCarRegNoList(carRegNoArr);
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
          <Autocomplete
            autoHighlight
            filterSelectedOptions
            disablePortal
            id="combo-box-demo"
            options={carRegNoList}
            style={{
              position: "relative",
              width: "90%",
              height: "50%",
              display: "flex",
              inset: "0 0 0 0",
              margin: "auto",
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                size={"small"}
                label="Car_RegNo"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  inset: "0 0 0 0",
                  margin: "auto",
                }}
              />
            )}
            onChange={(e, value) => {
              booking.bookingDetails.forEach((e) => {
                if (e.car_RegNo === value) {
                  console.log(e);
                  setDateAndTime(
                    {
                      date: e.dateOfPickup,
                      time: e.timeOfPickup,
                    },
                    "Pickup"
                  );
                  setDateAndTime(
                    {
                      date: e.returnedDate,
                      time: e.returnedTime,
                    },
                    "Returned"
                  );
                  setAddToListObj((prevState) => {
                    return {
                      ...addToListObj,
                      boId: e.bookingId,
                      c_RegNo: e.car_RegNo,
                      driverNic: e.driverNic,
                      carType: e.carType,
                      tripInKM: "",
                      extraKmDriven: "",
                      rentalType: e.rentalType,
                      dateOfPickup: e.dateOfPickup,
                      timeOfPickup: e.timeOfPickup,
                      pickupVenue: e.pickupVenue,
                      returnedDate: e.returnedDate,
                      returnedTime: e.returnedTime,
                      returnVenue: e.returnedVenue,
                      damageStatus: "",
                      lossDamageWaiver: e.lossDamage,
                      cost: e.cost,
                    };
                  });
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
          <TextValidator
            placeholder="Enter Total Cost In Booking"
            size={"small"}
            type={"Number"}
            disabled={true}
            value={booking.cost}
          />
        </Grid>
      </Grid>

      <Grid item container xs={12} style={{ height: "20%" }}>
        <Grid
          item
          container
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Customer Nic</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              size={"small"}
              placeholder={"Enter Customer Id"}
              value={booking.cusNic}
              disabled={true}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Driver Nic</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              placeholder={"Enter Driver Nic"}
              value={addToListObj.driverNic}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Car Type</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              placeholder={"Enter Car Type"}
              value={addToListObj.carType}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Rental Type</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              size={"small"}
              disabled={true}
              placeholder={"Enter Rental Type"}
              value={addToListObj.rentalType}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container xs={12} style={{ height: "20%" }}>
        <Grid
          item
          container
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Trip In KM</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              size={"small"}
              placeholder={"Enter Trip In KM"}
              onChange={(e) => {
                setAddToListObj((prevState) => {
                  return {
                    ...addToListObj,
                    tripInKM: e.target.value,
                  };
                });
              }}
              value={addToListObj.tripInKM}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>
              Extra KM Driven
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              size={"small"}
              placeholder={"Enter Extra KM Driven"}
              onChange={(e) => {
                setAddToListObj((prevState) => {
                  return {
                    ...addToListObj,
                    extraKmDriven: e.target.value,
                  };
                });
              }}
              value={addToListObj.extraKmDriven}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>
              Date Of Pickup
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              position: "relative",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              type={"Date"}
              style={{
                position: "absolute",
                width: "72%",
                height: "70%",
                inset: "0 0 0 0",
                margin: "auto",
              }}
              value={dateOfPickup}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>
              Time Of Pickup
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              position: "relative",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              type={"Time"}
              style={{
                position: "absolute",
                width: "72%",
                height: "70%",
                inset: "0 0 0 0",
                margin: "auto",
              }}
              value={timeOfPickup}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container xs={12} style={{ height: "20%" }}>
        <Grid
          item
          container
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Pickup Venue</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              placeholder={"Enter Pickup Venue"}
              value={addToListObj.pickupVenue}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Return Date</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              position: "relative",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              type={"Date"}
              style={{
                position: "absolute",
                width: "72%",
                height: "70%",
                inset: "0 0 0 0",
                margin: "auto",
              }}
              value={returnedDate}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Return Time</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              position: "relative",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              type={"Time"}
              style={{
                position: "absolute",
                width: "72%",
                height: "70%",
                inset: "0 0 0 0",
                margin: "auto",
              }}
              value={returnedTime}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Return Venue</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              placeholder={"Enter Return Venue"}
              value={addToListObj.returnVenue}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container xs={12} style={{ height: "20%" }}>
        <Grid
          item
          container
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>
              Damaged Status
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              position: "relative",
            }}
          >
            <Autocomplete
              autoHighlight
              filterSelectedOptions
              disablePortal
              id="combo-box-demo"
              options={["Damaged", "Not Damaged"]}
              style={{
                position: "absolute",
                width: "72%",
                height: "70%",
                inset: "0 0 0 0",
                margin: "auto",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size={"small"}
                  label="Status"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    inset: "0 0 0 0",
                    margin: "auto",
                  }}
                />
              )}
              onChange={(e, value) => {
                setAddToListObj((prevState) => {
                  return {
                    ...addToListObj,
                    damageStatus: value,
                  };
                });
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>
              Loss Damage Waiver
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              placeholder={"Enter Loss Damage Waiver"}
              value={addToListObj.lossDamageWaiver}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>
              Loss Damage Waiver Slip Path
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              placeholder={"Enter Loss Damage Waiver Slip Path"}
              value={booking.payments.lossDamageWaiverPaymentSlip}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "35%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Typography style={{ marginLeft: "14%" }}>Cost</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextValidator
              disabled={true}
              size={"small"}
              type={"Number"}
              placeholder={"Enter Cost"}
              value={addToListObj.cost}
            />
          </Grid>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
};
