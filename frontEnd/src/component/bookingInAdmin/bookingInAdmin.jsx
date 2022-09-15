import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import bookingService from "../../services/bookingService/bookingService";
import placeBookingRequest from "../../services/placeBookingRequest/placeBookingRequest";
import CommonButton from "../common/btn";

import classes from "./bookingInAdmin.module.css";
import { CartList } from "./cartList";
import { MainFields } from "./mainField";
import { ViewCurrentBookings } from "./viewCurrentBookings";

export const BookingInAdmin = (props) => {
  const [check, setCheck] = useState(false);
  const [view, setView] = useState(null);
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
  const [addToList, setAddToList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [dataListForDetailsTbl, setDataListForDetailsTbl] = useState([]);

  const setDataToTable = async (list) => {
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

  useEffect(() => {
    const loadData = async () => {
      let res =
        await placeBookingRequest.placeBookingRequestGetAllPendingBookings();
      if (res != null) {
        let data = res.data.data;
        setDataListForDetailsTbl(data);
        setDataToTable(data);
      }
    };
    loadData();
  }, []);

  const btnClickBoolReturn = (bookingData, data) => {
    setBooking(bookingData);
    setAddToListObj(data);
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <Grid
          container
          spacing={0}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            container
            item
            xs={12}
            style={{
              height: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container item xs={10} style={{ height: "100%" }}>
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
                  label={"Place Booking"}
                  size={"small"}
                  style={{ width: "80%", height: "70%", display: "flex" }}
                  onClick={async (e) => {
                    let bookingDetailsArr = [];
                    addToList.forEach((e) => {
                      let bookingDetails = {
                        bookingId: e.boId,
                        car_RegNo: e.c_RegNo,
                        driverNic: e.driverNic,
                        carType: e.carType,
                        rentalType: e.rentalType,
                        tripInKm: e.tripInKM,
                        extraKmDriven: e.extraKmDriven,
                        dateOfPickup: e.dateOfPickup,
                        timeOfPickup: e.timeOfPickup,
                        pickupVenue: e.pickupVenue,
                        returnedDate: e.returnedDate,
                        returnedTime: e.returnedTime,
                        returnedVenue: e.returnVenue,
                        damageStatus: e.damageStatus,
                        lossDamage: e.lossDamageWaiver,
                        cost: e.cost,
                      };
                    });
                    let bookingObj = {
                      boId: booking.boId,
                      cusNic: booking.cusNic,
                      date: booking.date,
                      time: booking.time,
                      cost: booking.cost,
                      bookingDetails: bookingDetailsArr,
                      payments: booking.payments,
                    };
                    if (
                      window.confirm("Do you want to Place this booking..?") ==
                      true
                    ) {
                      let res = bookingService.placeBooking(bookingObj);
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
                  variant={"outlined"}
                  label={"Add To List"}
                  size={"small"}
                  style={{
                    width: "80%",
                    height: "70%",
                    display: "flex",
                  }}
                  onClick={(e) => {
                    if (addToList.length != 0) {
                      for (let i = 0; i < addToList.length; i++) {
                        if (addToList[i].boId == addToListObj.boId) {
                          addToList.splice(i, 1);
                          addToList.push(addToListObj);
                        } else {
                          addToList.push(addToListObj);
                        }
                      }
                    } else {
                      addToList.push(addToListObj);
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
                  variant={"outlined"}
                  color={"error"}
                  label={"Clear List"}
                  size={"medium"}
                  style={{ display: "flex", width: "80%", height: "70%" }}
                  onClick={async (e) => {
                    setAddToList([]);
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
                  variant={"outlined"}
                  label={"View List"}
                  size={"medium"}
                  color={"success"}
                  style={{
                    display: "flex",
                    width: "80%",
                    height: "70%",
                  }}
                  onClick={async (e) => {
                    let arr = [];
                    let row = 1;
                    addToList.forEach((e) => {
                      arr.push(
                        <tr>
                          <td>{row++}</td>
                          <td>{e.boId}</td>
                          <td>{e.c_RegNo}</td>
                          <td>{e.driverNic}</td>
                          <td>{e.carType}</td>
                          <td>{e.tripInKM}</td>
                          <td>{e.extraKmDriven}</td>
                          <td>{e.rentalType}</td>
                          <td>{e.dateOfPickup}</td>
                          <td>{e.timeOfPickup}</td>
                          <td>{e.pickupVenue}</td>
                          <td>{e.returnedDate}</td>
                          <td>{e.returnedTime}</td>
                          <td>{e.returnVenue}</td>
                          <td>{e.damageStatus}</td>
                          <td>{e.lossDamageWaiver}</td>
                          <td>{e.cost}</td>
                        </tr>
                      );
                    });
                    setCheck(true);
                    setView(<CartList dataList={arr} />);
                  }}
                  onDblClick={async (e) => {
                    setCheck(false);
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
                  color={"success"}
                  label={"View Bookings"}
                  size={"medium"}
                  style={{ display: "flex", width: "80%", height: "70%" }}
                  onClick={(e) => {
                    setCheck(true);
                    setView(
                      <ViewCurrentBookings
                        dataList={dataList}
                        dataListForDetailsTbl={dataListForDetailsTbl}
                      />
                    );
                  }}
                  onDblClick={(e) => {
                    setCheck(false);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} style={{ height: "90%" }}>
            <Grid
              item
              xs={12}
              style={{
                height: "95%",
                width: "95%",
                display: "flex",
                justifyContent: "center",
                alignItems: "top",
              }}
            >
              <div className={classes.subContainer}>
                <Grid
                  container
                  item
                  xs={12}
                  style={{
                    height: "90%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {check === false ? (
                    <MainFields btnClickBoolReturn={btnClickBoolReturn} />
                  ) : (
                    view
                  )}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
