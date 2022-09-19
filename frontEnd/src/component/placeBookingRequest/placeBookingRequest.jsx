import {
  Autocomplete,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import carService from "../../services/carService/carService";
import PlaceBookingRequestService from "../../services/placeBookingRequest/placeBookingRequest";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";
import BookingService from "../../services/bookingService/bookingService";

import classes from "./placeBookingRequest.module.css";
import { useEffect } from "react";
import { cusNicStore } from "../../store/cusNicStore";
import { carRegNoStore } from "../../store/carRegNoStore";
import { addToList } from "../../store/addToListArr";

export const PlaceBookingRequest = (props) => {
  const [carRegField, setCarRegField] = useState(null);
  const [carRegNoForAutoComplete, setCarRegNoForAutoComplete] = useState([]);
  const [addToListObj, setAddToListObj] = useState({
    boId: "",
    carRegNo: carRegNoStore.carRegNo,
    cusNic: cusNicStore.cusNic,
    driverNic: "",
    carType: "",
    rentalType: "",
    dateOfPickup: "",
    timeOfPickup: "",
    pickupVenue: "",
    returnedDate: "",
    returnedTime: "",
    returnVenue: "",
    lossDamageWaiver: "",
    cost: "",
  });
  const [dataList, setDataList] = useState([]);
  let formData = new FormData();
  const [checkTicked, setCheckedTick] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(true);
  const [paymentsId, setPaymentsId] = useState(null);

  const [dateOfPickup, setDateOfPickup] = useState(null);
  const [timeOfPickup, setTimeOfPickup] = useState(null);
  const [returnedDate, setReturnedDate] = useState(null);
  const [returnedTime, setReturnedTime] = useState(null);

  const [totalCostOfBooking, setTotalCostOfBooking] = useState(null);

  let dateOfPickupDup = null;
  let returnDateDup = null;

  const setBookingAlgorithm = () => {
    let bookingDetailArr = [];
    addToList.forEach((data) => {
      console.log("Obj = ", data);
      let bookingDetailsObj = {
        bookingId: data.boId,
        car_RegNo: data.carRegNo,
        driverNic: data.driverNic,
        carType: data.carType,
        rentalType: data.rentalType,
        dateOfPickup: data.dateOfPickup,
        timeOfPickup: data.timeOfPickup,
        pickupVenue: data.pickupVenue,
        returnedDate: data.returnedDate,
        returnedTime: data.returnedTime,
        returnedVenue: data.returnVenue,
        lossDamage: data.lossDamageWaiver,
        cost: data.cost,
      };
      bookingDetailArr.push(bookingDetailsObj);
    });
    let booking = {
      boId: addToListObj.boId,
      cusNic: addToListObj.cusNic,
      date: new Date().toISOString().substring(0, 10),
      time: new Date().toLocaleTimeString(),
      cost: totalCostOfBooking,
      bookingDetails: bookingDetailArr,
      payments: {
        paymentsId: paymentsId,
        boId: addToListObj.boId,
        cusNic: addToListObj.cusNic,
        dateOfPayment: new Date().toISOString().substring(0, 10),
        timeOfPayment: new Date().toLocaleTimeString(),
        lossDamageWaiver: totalCostOfLossDamageWaiver(),
        lossDamageWaiverPaymentSlip: "",
        cost: totalCostOfBooking,
      },
    };
    console.log(booking);
    formData.append(
      "dto",
      new Blob([JSON.stringify(booking)], {
        type: "application/json",
      })
    );
    let imgFile = document.getElementById(
      "lossDamageWaiverSlipPathFieldInPlaceBookingRequest"
    ).files;
    formData.append("lossDamageWaiverSlip", imgFile[0], imgFile[0].name);
  };
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
        let t = sHours + ":" + sMinutes + ":" + data.time[5] + data.time[6];
        setTimeOfPickup(t);
      } else {
        let t = sHours + ":" + sMinutes + ":" + data.time[5] + data.time[6];
        setReturnedTime(t);
      }
    } else {
      if (type === "Pickup") {
        let d =
          data.time[0] +
          data.time[1] +
          data.time[2] +
          data.time[3] +
          data.time[4];
        setTimeOfPickup(d);
      } else if (type === "Returned") {
        let d =
          data.time[0] +
          data.time[1] +
          data.time[2] +
          data.time[3] +
          data.time[4];
        setReturnedTime(d);
      }
    }
    let dt = data.date;
    if (dt[1] && dt[2] < 10) {
      if (type === "Pickup") {
        let d = dt[0] + "-" + 0 + dt[1] + "-" + 0 + dt[2];
        setDateOfPickup(d);
        dateOfPickupDup = d;
      } else {
        let d = dt[0] + "-" + 0 + dt[1] + "-" + 0 + dt[2];
        setReturnedDate(d);
        returnDateDup = d;
      }
    } else if (dt[1] < 10) {
      if (type === "Pickup") {
        let d = dt[0] + "-" + 0 + dt[1] + "-" + dt[2];
        setDateOfPickup(d);
        dateOfPickupDup = d;
      } else {
        let d = dt[0] + "-" + 0 + dt[1] + "-" + dt[2];
        setReturnedDate(d);
        returnDateDup = d;
      }
    } else if (dt[2] < 10) {
      if (type === "Pickup") {
        let d = dt[0] + "-" + dt[1] + "-" + 0 + dt[2];
        setDateOfPickup(d);
        dateOfPickupDup = d;
      } else {
        let d = dt[0] + "-" + dt[1] + "-" + 0 + dt[2];
        setReturnedDate(d);
        returnDateDup = d;
      }
    }
  };

  const getAvailableDriver = async () => {
    let res = await PlaceBookingRequestService.getAvailableDriver();
    console.log("checked = ", checkTicked);
    checkTicked == true
      ? setAddToListObj((prevState) => {
          return {
            ...addToListObj,
            driverNic: res.data.data.nic,
          };
        })
      : setAddToListObj((prevState) => {
          return {
            ...addToListObj,
            driverNic: null,
          };
        });
  };
  const setDataToTable = () => {
    let arr = [];
    let rowNo = 1;
    console.log("addToList = ", addToList);
    addToList.forEach((data) => {
      console.log("datal = ", data);
      arr.push(
        <tr>
          <td>{rowNo++}</td>
          <td>{data.boId}</td>
          <td>{data.carRegNo}</td>
          <td>{data.cusNic}</td>
          <td>{data.carType}</td>
          <td>{data.rentalType}</td>
          <td>{data.dateOfPickup}</td>
          <td>{data.timeOfPickup}</td>
          <td>{data.pickupVenue}</td>
          <td>{data.returnedDate}</td>
          <td>{data.returnedTime}</td>
          <td>{data.returnVenue}</td>
          <td>{data.lossDamageWaiver}</td>
          <td>{data.cost}</td>
        </tr>
      );
    });
    setDataList(arr);
  };
  const updateTableRows = (data) => {
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].props.children[2].props.children === data.carRegNo) {
        let row = dataList[i].props.children[0];
        dataList.splice(i, 1);
        dataList.push(
          <tr>
            <td>{row}</td>
            <td>{data.boId}</td>
            <td>{data.carRegNo}</td>
            <td>{data.cusNic}</td>
            <td>{data.carType}</td>
            <td>{data.rentalType}</td>
            <td>{data.dateOfPickup}</td>
            <td>{data.timeOfPickup}</td>
            <td>{data.pickupVenue}</td>
            <td>{data.returnedDate}</td>
            <td>{data.returnedTime}</td>
            <td>{data.returnVenue}</td>
            <td>{data.lossDamageWaiver}</td>
            <td>{data.cost}</td>
          </tr>
        );
      }
    }
  };
  const calculateTotalCost = () => {
    let total = 0;
    addToList.forEach((data) => {
      total += data.cost;
    });
    setTotalCostOfBooking(total);
  };

  function getTotalDaysRentingTheCar(dateOfPickup, returnDate) {
    console.log(dateOfPickup + " = " + returnDate);
    let count = dateOfPickup;
    let count2 = 0;
    while (count < returnDate) {
      count++;
      count2++;
      console.log(count);
    }
    console.log(count2);
    return count2;
  }

  function getTotalMonthsRentingTheCar(dateOfPickup, returnDate) {
    let count = dateOfPickup;
    let count2 = 0;
    while (count < returnDate) {
      count++;
      count2++;
      console.log(count);
    }
    console.log(count2);
    return count2;
  }

  function totalCostOfLossDamageWaiver() {
    let total = 0;
    for (let i = 0; i < addToList.length; i++) {
      total += addToList[i].lossDamageWaiver;
    }
    return total;
  }
  const calculateTotalCostPerCar = async () => {
    let totalCost = 0;
    for (let i = 0; i < addToList.length; i++) {
      if (addToList[i].carRegNo == addToListObj.carRegNo) {
        let car = await searchCarDetails(addToListObj.carRegNo);
        let calculatedCostOfRentingDates = undefined;
        console.log(addToList[i].dateOfPickup);
        var pickupDate = addToList[i].dateOfPickup.split("-");
        var day1 = pickupDate[2];
        var month1 = pickupDate[1];

        var returnDate = addToList[i].returnedDate.split("-");
        var day2 = returnDate[2];
        var month2 = returnDate[1];
        if (addToList[i].rentalType == "Monthly") {
          let rate = car.monthlyRate;
          console.log(rate);
          let months = getTotalMonthsRentingTheCar(month1, month2);
          calculatedCostOfRentingDates = rate * months;
        } else if (addToList[i].rentalType == "Daily") {
          let rate = car.dailyRate;
          console.log(rate);
          console.log(addToList[i].dateOfPickup);
          let days = getTotalDaysRentingTheCar(day1, day2);
          console.log(days);
          calculatedCostOfRentingDates = rate * days;
        }
        let total =
          parseFloat(addToList[i].lossDamageWaiver) +
          calculatedCostOfRentingDates;
        totalCost += total;
        addToList[i].cost = total;
      }
    }
    setAddToListObj((prevState) => {
      return {
        ...addToListObj,
        cost: totalCost,
      };
    });
    console.log(totalCost);
    return totalCost;
  };

  const searchCarDetails = async (regNo) => {
    let res = await carService.searchCar(regNo);
    console.log("res = ", res);
    return res.data.data;
  };

  const checkCarAlreadyExists = () => {
    for (let i = 0; i < addToList.length; i++) {
      if (addToList[i].carRegNo == addToListObj.carRegNo) {
        return true;
      }
    }
    return false;
  };

  let bookingId = null;
  useEffect(() => {
    setCarRegField(
      <TextValidator
        disabled={true}
        id={"carRegNoFieldInPlaceBookingRequest"}
        placeholder="Enter Car_RegNo"
        size={"small"}
        onChange={async (e) => {}}
        value={addToListObj.carRegNo}
        validators={["required", "matchRegexp:^[A-Z]{3}[-][0-9]{3}$"]}
        errorMessages={["this field is required", "Car Reg No is not valid"]}
        onKeyDown={(e) => {
          e.key === "Tab" && e.preventDefault();
          e.target.value.match("^[A-Z]{3}[-][0-9]{3}$") &&
            e.key === "Enter" &&
            document.getElementById("customerNicFieldInPlaceBookingRequest");
        }}
        style={{
          position: "absolute",
          width: "80%",
          height: "100%",
          inset: "0 0 0 0",
          margin: "auto",
        }}
      />
    );
    clearFields();
    const setBookingIdAndCarDetailsToField = async () => {
      await setBookingIdToField();
      let resCar = await carService.searchCar(carRegNoStore.carRegNo);
      let carObj = resCar.data.data;
      setAddToListObj((prevState) => {
        return {
          ...addToListObj,
          boId: bookingId,
          cusNic: cusNicStore.cusNic,
          carRegNo: carRegNoStore.carRegNo,
          carType: carObj.type,
          lossDamageWaiver: carObj.lossDamageWaiver,
        };
      });
    };
    setDataToTable();
    setBookingIdAndCarDetailsToField();
  }, []);

  const setBookingIdToField = async () => {
    let boIdInBooking = undefined;
    let boIdInBookingRequest = undefined;
    let boIdInPendingBooking = undefined;

    let paymentIdInBooking = undefined;
    let paymentIdInPendingBooking = undefined;
    let paymentIdInBookingRequest = undefined;

    /*Generating Booking Id from Booking Table*/
    let resBooking = await BookingService.generateBookingId();
    boIdInBooking = resBooking.data.data;
    console.log("boIdInBooking = ", boIdInBooking);

    /*Generating Payments Id from Payments Table*/
    let resPayment = await BookingService.generatePaymentsId();
    paymentIdInBooking = resPayment.data.data;
    console.log("paymentIdInBooking = ", paymentIdInBooking);

    /*Searching BoId And PaymentsId from PendingBooking and Booking Request Tables for
     * Checking Whether Generated Booking Id Is Available In One Of The Tables*/

    let placeBookingRequestGet =
      await PlaceBookingRequestService.placeBookingRequestGetAll();
    let placeBookingRequestGetAll = placeBookingRequestGet.data.data;

    let placeBookingRequestPendingGetAll =
      await PlaceBookingRequestService.placeBookingRequestGetAllPendingBookings();
    let getAllPendingBookings = placeBookingRequestPendingGetAll.data.data;

    try {
      if (placeBookingRequestGetAll.length != 0) {
        let max1 = undefined;
        let max2 = undefined;

        if (placeBookingRequestGetAll.length != 1) {
          for (let i = 0; i < placeBookingRequestGetAll.length; i++) {
            console.log(placeBookingRequestGetAll[i]);
            let temp = parseInt(
              placeBookingRequestGetAll[i].boId.split("-")[1]
            );
            console.log("Temp1 = " + temp);
            console.log("Length = " + placeBookingRequestGetAll.length);
            for (let j = i + 1; j < placeBookingRequestGetAll.length; j++) {
              console.log("Length2 = " + j);
              let temp2 = parseInt(
                placeBookingRequestGetAll[j].boId.split("-")[1]
              );
              console.log("Temp2 = " + temp2);
              if (temp < temp2) {
                temp = temp2;
                console.log("TEMP2 = " + temp);

                if (temp < 10) {
                  max1 = "BO-00" + temp;
                } else if (temp < 100) {
                  max1 = "BO-0" + temp;
                } else {
                  max1 = "BO-" + temp;
                }
              }
            }
          }
        } else {
          max1 = placeBookingRequestGetAll[0].boId;
        }
        boIdInBookingRequest = max1;

        if (placeBookingRequestGetAll.length != 1) {
          for (let i = 0; i < placeBookingRequestGetAll.length; i++) {
            let temp = parseInt(
              placeBookingRequestGetAll[i].payments.paymentsId.split("-")[1]
            );
            for (let j = i + 1; j < placeBookingRequestGetAll.length; j++) {
              let temp2 = parseInt(
                placeBookingRequestGetAll[j].payments.paymentsId.split("-")[1]
              );
              if (temp < temp2) {
                temp = temp2;
                if (temp < 10) {
                  max2 = "POR-00" + temp;
                } else if (temp < 100) {
                  max2 = "POR-0" + temp;
                } else {
                  max2 = "POR-" + temp;
                }
              }
            }
          }
        } else {
          max2 = placeBookingRequestGetAll[0].payments.paymentsId;
        }

        paymentIdInBookingRequest = max2;
      }
      if (getAllPendingBookings.length != 0) {
        let max1 = undefined;
        let max2 = undefined;

        if (getAllPendingBookings.length != 1) {
          for (let i = 0; i < getAllPendingBookings.length; i++) {
            let temp = parseInt(getAllPendingBookings[i].boId.split("-")[1]);
            for (let j = i + 1; j < getAllPendingBookings.length; j++) {
              let temp2 = parseInt(getAllPendingBookings[j].boId.split("-")[1]);
              if (temp < temp2) {
                temp = temp2;
                if (temp < 10) {
                  max1 = "BO-00" + temp;
                } else if (temp < 100) {
                  max1 = "BO-0" + temp;
                } else {
                  max1 = "BO-" + temp;
                }
              }
            }
          }
        } else {
          max1 = getAllPendingBookings[0].boId;
        }

        boIdInPendingBooking = max1;

        if (getAllPendingBookings.length != 1) {
          for (let i = 0; i < getAllPendingBookings.length; i++) {
            let temp = parseInt(
              getAllPendingBookings[i].payments.paymentsId.split("-")[1]
            );
            for (let j = i + 1; j < getAllPendingBookings.length; j++) {
              let temp2 = parseInt(
                getAllPendingBookings[j].payments.paymentsId.split("-")[1]
              );
              if (temp < temp2) {
                temp = temp2;
                if (temp < 10) {
                  max2 = "POR-00" + temp;
                } else if (temp < 100) {
                  max2 = "POR-0" + temp;
                } else {
                  max2 = "POR-" + temp;
                }
              }
            }
          }
        } else {
          max2 = getAllPendingBookings[0].payments.paymentsId;
        }
        paymentIdInPendingBooking = max2;
      }
    } catch (e) {
      console.log(
        boIdInBooking +
          " Is Not Consists In Any Of The Booking Request Or Pending Booking Databases"
      );
    } finally {
      console.log("boIdInBookingRequest - " + boIdInBookingRequest);
      console.log("boIdInPendingBooking - " + boIdInPendingBooking);

      let idBookingInt = parseInt(boIdInBooking.split("-")[1]);
      let idRequestInt = undefined;
      let idPendingInt = undefined;

      if (boIdInBookingRequest != undefined) {
        idRequestInt = parseInt(boIdInBookingRequest.split("-")[1]);
      }
      if (boIdInPendingBooking != undefined) {
        idPendingInt = parseInt(boIdInPendingBooking.split("-")[1]);
      }
      console.log("idBookingInt - " + idBookingInt);
      console.log("idRequestInt - " + idRequestInt);
      console.log("idPendingInt - " + idPendingInt);

      if (idBookingInt == (idPendingInt | idRequestInt)) {
        console.log("condition 1");
        let boId = undefined;
        let id = parseInt(boIdInBooking.split("-")[1]);
        id = id + 1;
        if (id < 10) {
          boId = "BO-00" + id;
        } else if (id < 100) {
          boId = "BO-0" + id;
        } else {
          boId = "BO-" + id;
        }
        bookingId = boId;
      } else if (idBookingInt < (idPendingInt | idRequestInt)) {
        console.log("boid in booking is less than");
        if ((idRequestInt > idPendingInt) | (idPendingInt == undefined)) {
          console.log("check");
          let boId = undefined;
          let id = parseInt(boIdInBookingRequest.split("-")[1]);
          id = id + 1;
          if (id < 10) {
            boId = "BO-00" + id;
          } else if (id < 100) {
            boId = "BO-0" + id;
          } else {
            boId = "BO-" + id;
          }
          bookingId = boId;
        } else if (
          (idPendingInt > idRequestInt) |
          (idRequestInt == undefined)
        ) {
          let boId = undefined;
          let id = parseInt(boIdInPendingBooking.split("-")[1]);
          id = id + 1;
          if (id < 10) {
            boId = "BO-00" + id;
          } else if (id < 100) {
            boId = "BO-0" + id;
          } else {
            boId = "BO-" + id;
          }
          bookingId = boId;
        }
        console.log("no check");
      } else if (idBookingInt > idPendingInt && idBookingInt > idRequestInt) {
        console.log(
          "condition last = bookingid :" +
            idBookingInt +
            " / pending : " +
            idPendingInt +
            " / request : " +
            idRequestInt
        );
        bookingId = boIdInBooking;
      } else if (idPendingInt == undefined && idRequestInt == undefined) {
        console.log("condition last last last");
        bookingId = boIdInBooking;
      } else if (idBookingInt > idPendingInt || idBookingInt > idRequestInt) {
        bookingId = boIdInBooking;
      }

      /*Generating Customer Id When Payments Id Consists In One of The Pending Or Request Table*/

      console.log("BookingRequestPayment - " + paymentIdInBookingRequest);
      console.log("PendingBookingPayment - " + paymentIdInPendingBooking);

      let idBookingPaymentInt = parseInt(paymentIdInBooking.split("-")[1]);
      let idRequestPaymentInt = undefined;
      let idPendingPaymentInt = undefined;

      if (paymentIdInBookingRequest != undefined) {
        idRequestPaymentInt = parseInt(paymentIdInBookingRequest.split("-")[1]);
      }
      if (paymentIdInPendingBooking != undefined) {
        idPendingPaymentInt = parseInt(paymentIdInPendingBooking.split("-")[1]);
      }
      console.log("idBookingPaymentInt - " + idBookingPaymentInt);
      console.log("idRequestPaymentInt - " + idRequestPaymentInt);
      console.log("idPendingPaymentInt - " + idPendingPaymentInt);

      if (idBookingPaymentInt == (idPendingPaymentInt | idRequestPaymentInt)) {
        console.log("condition 1");
        let pId = undefined;
        let id = parseInt(paymentIdInBooking.split("-")[1]);
        id = id + 1;
        if (id < 10) {
          pId = "POR-00" + id;
        } else if (id < 100) {
          pId = "POR-0" + id;
        } else {
          pId = "POR-" + id;
        }
        setPaymentsId(pId);
      } else if (
        idBookingPaymentInt <
        (idPendingPaymentInt | idRequestPaymentInt)
      ) {
        console.log("boid in booking is less than");
        if (
          (idRequestPaymentInt > idPendingPaymentInt) |
          (idPendingPaymentInt == undefined)
        ) {
          let pId = undefined;
          let id = parseInt(paymentIdInBookingRequest.split("-")[1]);
          id = id + 1;
          if (id < 10) {
            pId = "POR-00" + id;
          } else if (id < 100) {
            pId = "POR-0" + id;
          } else {
            pId = "POR-" + id;
          }
          setPaymentsId(pId);
        } else if (
          (idPendingPaymentInt > idRequestPaymentInt) |
          (idRequestPaymentInt == undefined)
        ) {
          let pId = undefined;
          let id = parseInt(paymentIdInPendingBooking.split("-")[1]);
          id = id + 1;
          if (id < 10) {
            pId = "POR-00" + id;
          } else if (id < 100) {
            pId = "POR-0" + id;
          } else {
            pId = "POR-" + id;
          }
          setPaymentsId(pId);
        }
      } else if (
        idBookingPaymentInt > (idPendingPaymentInt && idRequestPaymentInt)
      ) {
        console.log("condition last");
        setPaymentsId(paymentIdInBooking);
      } else if (
        idPendingPaymentInt == undefined &&
        idRequestPaymentInt == undefined
      ) {
        setPaymentsId(paymentIdInBooking);
      } else if (
        idBookingPaymentInt > idPendingPaymentInt ||
        idBookingPaymentInt > idRequestPaymentInt
      ) {
        setPaymentsId(paymentIdInBooking);
      }
    }
  };

  const clearFields = () => {
    console.log("Car Reg No Store = ", carRegNoStore.carRegNo);
    console.log("Cus Nic Store = ", cusNicStore.cusNic);
    setAddToListObj({
      boId: bookingId,
      carRegNo: "",
      cusNic: cusNicStore.cusNic,
      driverNic: "",
      carType: "",
      rentalType: "",
      dateOfPickup: "",
      timeOfPickup: "",
      pickupVenue: "",
      returnedDate: "",
      returnedTime: "",
      returnVenue: "",
      lossDamageWaiver: "",
      cost: "",
    });
    setDateOfPickup("");
    setTimeOfPickup("");
    setReturnedDate("");
    setReturnedTime("");
    dateOfPickupDup = null;
    returnDateDup = null;
    let lossDamageSlipField = document.getElementById(
      "lossDamageWaiverSlipPathFieldInPlaceBookingRequest"
    );
    if (lossDamageSlipField != undefined) {
      lossDamageSlipField.innerHTML = "";
    }
    formData = new FormData();
  };
  const searchBooking = async () => {
    carRegNoForAutoComplete.splice(0, carRegNoForAutoComplete.length);
    let res = await PlaceBookingRequestService.placeBookingRequestSearch(
      addToListObj.boId
    );
    let data = res.data.data;
    setPaymentsId(res.data.data.payments.paymentsId);
    carRegNoForAutoComplete.length == 0 &&
      data.bookingDetails.forEach((e) => {
        carRegNoForAutoComplete.push(e.car_RegNo);
      });
    setCarRegField(
      <Autocomplete
        autoHighlight
        filterSelectedOptions
        disablePortal
        id="carRegNoFieldInPlaceBookingRequest"
        options={carRegNoForAutoComplete}
        style={{
          position: "absolute",
          width: "80%",
          height: "100%",
          inset: "0 0 0 0",
          margin: "auto",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            size={"small"}
            label="Type"
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
          data.bookingDetails.forEach(async (list) => {
            if (list.car_RegNo === value) {
              console.log(list);
              setDateAndTime(
                {
                  date: list.dateOfPickup,
                  time: list.timeOfPickup,
                },
                "Pickup"
              );
              setDateAndTime(
                {
                  date: list.returnedDate,
                  time: list.returnedTime,
                },
                "Returned"
              );
              setAddToListObj((prevState) => {
                return {
                  ...addToListObj,
                  carRegNo: value,
                  carType: list.carType,
                  rentalType: list.rentalType,
                  dateOfPickup: dateOfPickupDup,
                  timeOfPickup: list.timeOfPickup,
                  pickupVenue: list.pickupVenue,
                  returnedDate: returnDateDup,
                  returnedTime: list.returnedTime,
                  returnVenue: list.returnedVenue,
                  lossDamageWaiver: list.lossDamage,
                  cost: list.cost,
                };
              });
            }
          });
        }}
      />
    );

    setAddToListObj({
      boId: data.boId,
      carRegNo: carRegNoStore.carRegNo,
      cusNic: cusNicStore.cusNic,
      driverNic: "",
      carType: "",
      rentalType: "",
      dateOfPickup: "",
      timeOfPickup: "",
      pickupVenue: "",
      returnedDate: "",
      returnedTime: "",
      returnVenue: "",
      lossDamageWaiver: "",
      cost: "",
    });
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <Grid container spacing={0} style={{ width: "90%", height: "90%" }}>
          <Grid item xs={12} style={{ height: "60%" }}>
            <ValidatorForm style={{ width: "100%", height: "100%" }}>
              <Grid container item xs={12} style={{ height: "25%" }}>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Booking Id</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Booking Id"
                      size={"small"}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      onChange={(e) => {
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            boId: e.target.value,
                          };
                        });
                      }}
                      value={addToListObj.boId}
                      validators={["required", "matchRegexp:^(BO-)[0-9]{3}$"]}
                      errorMessages={[
                        "this field is required",
                        "Booking Id is not valid",
                      ]}
                      onKeyDown={(e) => {
                        e.key === "Tab" && e.preventDefault();
                        if (e.target.value.match("^(BO-)[0-9]{3}$")) {
                          e.key === "Enter" &&
                            document
                              .getElementById(
                                "carTypeFieldInPlaceBookingRequest"
                              )
                              .focus();
                        }
                        e.key === "Control" && searchBooking();
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Car_RegNo</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    {carRegField}
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Customer Nic</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      disabled={true}
                      id={"customerNicFieldInPlaceBookingRequest"}
                      placeholder="Enter Customer Nic"
                      size={"small"}
                      onChange={(e) => {
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            cusNic: e.target.value,
                          };
                        });
                      }}
                      value={addToListObj.cusNic}
                      validators={[
                        "required",
                        "matchRegexp:^^(([0-9]{9}[Vv]{1})||([0-9]{12}))$",
                      ]}
                      errorMessages={[
                        "this field is required",
                        "Customer Nic is not valid",
                      ]}
                      onKeyDown={(e) => {
                        e.key === "Tab" && e.preventDefault();
                        e.target.value.match(
                          "^(([0-9]{9}[Vv]{1})||([0-9]{12}))$"
                        ) &&
                          e.key === "Enter" &&
                          document.getElementById(
                            "driverCheckBoxInPlaceBookingRequest"
                          );
                      }}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Tick If You Need A Driver</Typography>
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
                    <Checkbox
                      id={"driverCheckBoxInPlaceBookingRequest"}
                      onChange={(e) => {
                        setCheckedTick(e.target.checked);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container item xs={12} style={{ height: "25%" }}>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Car Type</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <Autocomplete
                      autoHighlight
                      filterSelectedOptions
                      disablePortal
                      id="carTypeFieldInPlaceBookingRequest"
                      options={["Luxury", "Semi-Luxury"]}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size={"small"}
                          label="Type"
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
                            carType: value,
                          };
                        });
                      }}
                      value={addToListObj.carType}
                    />
                  </Grid>
                </Grid>

                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Rental Type</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <Autocomplete
                      autoHighlight
                      filterSelectedOptions
                      disablePortal
                      id="combo-box-demo"
                      options={["Daily", "Monthly"]}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size={"small"}
                          label="Type"
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
                            rentalType: value,
                          };
                        });
                      }}
                      value={addToListObj.rentalType}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Date of Pickup</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      size={"small"}
                      type={"Date"}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      onChange={(e) => {
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            dateOfPickup: e.target.value,
                          };
                        });
                        setDateOfPickup(e.target.value);
                      }}
                      value={dateOfPickup}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Time Of Pickup</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      size={"small"}
                      type={"Time"}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      onChange={(e) => {
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            timeOfPickup: e.target.value,
                          };
                        });
                        setTimeOfPickup(e.target.value);
                      }}
                      value={timeOfPickup}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container item xs={12} style={{ height: "25%" }}>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Pickup Venue</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Pickup Venue"
                      size={"small"}
                      onChange={(e) => {
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            pickupVenue: e.target.value,
                          };
                        });
                      }}
                      value={addToListObj.pickupVenue}
                      validators={["required", "matchRegexp:^[A-z]{2,}$"]}
                      errorMessages={[
                        "this field is required",
                        "Pickup Venue is not valid",
                      ]}
                      onKeyDown={(e) => {
                        e.key === "Tab" && e.preventDefault();
                        e.target.value.match("^[A-z]{2,}$") &&
                          e.key === "Enter" &&
                          document.getElementById(
                            "returnedDateInPlaceBookingRequest"
                          );
                      }}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Return Date</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      id={"returnedDateInPlaceBookingRequest"}
                      size={"small"}
                      type={"Date"}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            returnedDate: e.target.value,
                          };
                        });
                        setReturnedDate(e.target.value);
                      }}
                      value={returnedDate}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Return Time</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      size={"small"}
                      type={"Time"}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      onChange={(e) => {
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            returnedTime: e.target.value,
                          };
                        });
                        setReturnedTime(e.target.value);
                      }}
                      value={returnedTime}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Return Venue</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Return Venue"
                      size={"small"}
                      onChange={(e) => {
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            returnVenue: e.target.value,
                          };
                        });
                      }}
                      value={addToListObj.returnVenue}
                      validators={["required", "matchRegexp:^[A-z]{2,}$"]}
                      errorMessages={[
                        "this field is required",
                        "Return Venue is not valid",
                      ]}
                      onKeyDown={(e) => {
                        e.key === "Tab" && e.preventDefault();
                        e.target.value.match("^[A-z]{2,}$") &&
                          e.key === "Enter" &&
                          document.getElementById(
                            "lossDamageWaiverFieldInPlaceBookingRequest"
                          );
                      }}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container item xs={12} style={{ height: "25%" }}>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Loss Damage Waiver</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      disabled={true}
                      id={"lossDamageWaiverFieldInPlaceBookingRequest"}
                      placeholder="Enter Loss Damage Waiver"
                      size={"small"}
                      onChange={(e) => {}}
                      type={"Number"}
                      value={addToListObj.lossDamageWaiver}
                      validators={["required", "matchRegexp:^[0-9]{1,}$"]}
                      errorMessages={[
                        "this field is required",
                        "Loss Damage Waiver is not valid",
                      ]}
                      onKeyDown={(e) => {
                        e.key === "Tab" && e.preventDefault();
                        e.target.value.match("^[0-9]{1,}$") &&
                          e.key === "Enter" &&
                          document.getElementById(
                            "lossDamageWaiverSlipPathFieldInPlaceBookingRequest"
                          );
                      }}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Loss Damage Waiver Slip Path</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      id={"lossDamageWaiverSlipPathFieldInPlaceBookingRequest"}
                      size={"small"}
                      type={"file"}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Cost Per One Car Booking</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Cost Per One Car Booking"
                      size={"small"}
                      type={"Number"}
                      onChange={(e) => {
                        setAddToListObj((prevState) => {
                          return {
                            ...addToListObj,
                            cost: e.target.value,
                          };
                        });
                      }}
                      value={addToListObj.cost}
                      validators={["required", "matchRegexp:^[0-9]{0,}$"]}
                      errorMessages={[
                        "this field is required",
                        "Cost Per One Car Booking is not valid",
                      ]}
                      onKeyDown={(e) => {
                        e.key === "Tab" && e.preventDefault();
                        e.target.value.match("^[0-9]{0,}$") &&
                          e.key === "Enter" &&
                          document.getElementById(
                            "totalCostPerBookingInPlaceBookingRequest"
                          );
                      }}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={3} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>Cost</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      id={"totalCostPerBookingInPlaceBookingRequest"}
                      placeholder="Enter Total Cost Per Booking"
                      size={"small"}
                      type={"Number"}
                      disabled={true}
                      onChange={(e) => {}}
                      value={totalCostOfBooking}
                      validators={["required", "matchRegexp:^[0-9]{0,}$"]}
                      errorMessages={[
                        "this field is required",
                        "Total Cost Per Booking is not valid",
                      ]}
                      onKeyDown={(e) => {
                        e.key === "Tab" && e.preventDefault();
                        e.target.value.match("^[0-9]{0,}$") &&
                          e.key === "Enter" &&
                          document.getElementById(
                            "requestBookingBtnInPlaceBookingRequest"
                          );
                      }}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </ValidatorForm>
          </Grid>

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
            <CommonTable
              tblRows={[
                "Row No",
                "Booking Id",
                "Car_RegNo",
                "Driver Nic",
                "Car Type",
                "Rental Type",
                "Date of Pickup",
                "Time of Pickup",
                "Pickup Venue",
                "Return Date",
                "Return Time",
                "Return Venue",
                "Loss Damage",
                "Cost",
              ]}
              dataList={dataList}
              style={{ width: "90%", height: "90%" }}
            />
          </Grid>
          <Grid item container xs={12} style={{ height: "10%" }}>
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
                disabled={checkDisabled}
                id={"requestBookingBtnInPlaceBookingRequest"}
                variant={"contained"}
                color={"primary"}
                size={"small"}
                label={"Request Booking"}
                style={{ width: "70%" }}
                onClick={async (e) => {
                  setBookingAlgorithm();
                  if (
                    window.confirm("Do you want to Place this Booking") == true
                  ) {
                    let res =
                      PlaceBookingRequestService.placeBookingRequest(formData);
                    if (res.status == 200) {
                      setCheckDisabled(true);
                      addToList.splice(0, addToList.length);
                      alert(res.data.message);
                      setDataToTable();
                      await setBookingIdToField();
                      clearFields();
                    }
                  } else {
                    alert("Placing Booking Request is Unsuccessful");
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
                size={"small"}
                label={"Update Booking"}
                style={{ width: "70%", backgroundColor: "grey" }}
                onClick={async (e) => {
                  setBookingAlgorithm();
                  if (
                    window.confirm("Do you want to Update this Booking") == true
                  ) {
                    let res =
                      await PlaceBookingRequestService.updateBookingRequest(
                        formData
                      );
                    if (res.status == 200) {
                      setCheckDisabled(true);
                      addToList.splice(0, addToList.length);
                      alert(res.data.message);
                      setDataToTable();
                      await setBookingIdToField();
                      clearFields();
                    }
                  } else {
                    alert(
                      "Updating Booking " +
                        addToListObj.boId +
                        " is Unsuccessful"
                    );
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
                color={"error"}
                size={"small"}
                label={"Delete Booking"}
                style={{ width: "70%" }}
                onClick={async (e) => {
                  if (
                    window.confirm(
                      "Do you want to remove request for booking " +
                        addToListObj.boId +
                        " id..?"
                    ) == true
                  ) {
                    let res =
                      await PlaceBookingRequestService.deleteBookingRequest(
                        addToListObj.boId
                      );
                    if (res.status == 200) {
                      alert(res.data.message);
                      setDataToTable();
                      await setBookingIdToField();
                      clearFields();
                    }
                  } else {
                    alert(
                      "Deleting Booking Request of Booking Id " +
                        addToListObj.boId +
                        " is Unsuccessful"
                    );
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
                color={"primary"}
                size={"small"}
                label={"Add To List"}
                style={{ width: "70%" }}
                onClick={async (e) => {
                  console.log(addToListObj);
                  setCheckDisabled(false);
                  if (checkCarAlreadyExists() == true) {
                    console.log("exists");
                    for (let i = 0; i < addToList.length; i++) {
                      if (addToList[i].carRegNo == addToListObj.carRegNo) {
                        addToList[i] = addToListObj;
                      }
                    }
                    getAvailableDriver();
                    await calculateTotalCostPerCar();
                    updateTableRows(addToListObj);
                  } else {
                    console.log("not exists");
                    getAvailableDriver();
                    addToList.push(addToListObj);
                    await calculateTotalCostPerCar();
                    setDataToTable();
                    calculateTotalCost();
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
                size={"small"}
                label={"Clear List"}
                style={{ width: "70%" }}
                onClick={async (e) => {
                  addToList.splice(0, addToList.length);
                  setDataToTable();
                  clearFields();
                  await setBookingIdToField();
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
