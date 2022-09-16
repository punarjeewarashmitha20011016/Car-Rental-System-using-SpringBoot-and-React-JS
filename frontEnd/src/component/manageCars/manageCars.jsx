import { Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Typography } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";

import classes from "./manageCars.module.css";

import CarService from "../../services/carService/carService";
import { baseUrl } from "../../baseUrl";
import bookingService from "../../services/bookingService/bookingService";

export const ManageCars = (props) => {
  const [view, setView] = useState(null);
  const [carDataObj, setCarDataObj] = useState({
    c_RegNo: "",
    brand: "",
    type: "",
    transmissionType: "",
    fuelType: "",
    images: {},
    noOfPassengers: "",
    mileageInKm: "",
    freeKmPerDay: "",
    freeKmPerMonth: "",
    priceForExtraKm: "",
    dailyRate: "",
    monthlyRate: "",
    carBookedOrNotStatus: "",
    maintenanceStatus: "",
    lossDamageWaiver: "",
  });
  const formData = new FormData();
  const [check, setCheck] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(true);

  const loadCarSchedule = async () => {
    let res = await bookingService.getCarSchedule();
    let data = res.data.data;
    let arr = [];
    let rowNo = 0;
    data.forEach((e) => {
      arr.push(
        <tr>
          <td>{rowNo++}</td>
          <td>{e.c_RegNo}</td>
          <td>{e.bookedStatus}</td>
          <td>{e.bookedDate}</td>
          <td>{e.bookedTime}</td>
          <td>{e.returnedDate}</td>
          <td>{e.returnedTime}</td>
        </tr>
      );
    });
    return arr;
  };
  return (
    <Fragment>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <Grid
            container
            spacing={0}
            style={{
              position: "relatve",
              width: "95%",
              height: "95%",
            }}
          >
            <Grid container item xs={12} style={{ height: "80%" }}>
              {console.log("view = ", view)}
              {check === false ? (
                <ValidatorForm
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Grid container item xs={12} style={{ height: "100%" }}>
                    <Grid
                      container
                      item
                      xs={3}
                      style={{
                        height: "25%",
                        position: "relative",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Registration Number
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Your Registration Number"
                          onChange={(e) => {
                            console.log(e.target.value);
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                c_RegNo: e.target.value,
                              };
                            });
                          }}
                          name="registrationNumber"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          validators={[
                            "required",
                            "matchRegexp:^(CAR-)[0-9]{3}$",
                          ]}
                          errorMessages={[
                            "this field is required",
                            "Car Reg Number is not valid",
                          ]}
                          value={carDataObj.c_RegNo}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^(CAR-)[0-9]{3}$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById("carBrandFieldInCarManage")
                                  .focus();
                            }
                          }}
                          id={"carRegNoFieldInCarManage"}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Brand
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Car Brand"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                brand: e.target.value,
                              };
                            });
                          }}
                          name="carBrand"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          validators={["required", "matchRegexp:^[A-z]{2,}$"]}
                          errorMessages={[
                            "this field is required",
                            "Car Brand is not valid",
                          ]}
                          value={carDataObj.brand}
                          id={"carBrandFieldInCarManage"}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[A-z]{2,}$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById("carTypeFieldInCarManage")
                                  .focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Car Type
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <Autocomplete
                          autoHighlight
                          filterSelectedOptions
                          disablePortal
                          id={"carTypeFieldInCarManage"}
                          options={["Luxury", "Semi-Luxury"]}
                          style={{
                            position: "absolute",
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
                            console.log("type = ", value);
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                type: value,
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
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Transmission Type
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <Autocomplete
                          autoHighlight
                          filterSelectedOptions
                          disablePortal
                          id={"carTransmissionFieldInCarManage"}
                          options={["Manual", "Auto"]}
                          style={{
                            position: "absolute",
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
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                transmissionType: value,
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
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Fuel Type
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <Autocomplete
                          autoHighlight
                          filterSelectedOptions
                          disablePortal
                          id={"carFuelFieldInCarManage"}
                          options={["Diesel", "Petrol"]}
                          style={{
                            position: "absolute",
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
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                fuelType: value,
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
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          No Of Passenges
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          type="Number"
                          label="Enter No Of Passengers"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                noOfPassengers: e.target.value,
                              };
                            });
                          }}
                          name="noOfPassengers"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          validators={["required", "matchRegexp:^[0-9]+$"]}
                          errorMessages={[
                            "this field is required",
                            "No Of Passengers are not valid",
                          ]}
                          value={carDataObj.noOfPassengers}
                          id={"carNoOfPassengersFieldInCarManage"}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[0-9]+$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById(
                                    "carMileageInKmFieldInCarManage"
                                  )
                                  .focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Mileage In KM
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Mileage In KM"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                mileageInKm: e.target.value,
                              };
                            });
                          }}
                          name="mileageInKM"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          validators={[
                            "required",
                            "matchRegexp:^[0-9]+[.]?[0-9]*$",
                          ]}
                          errorMessages={[
                            "this field is required",
                            "Mileage In KM is not valid",
                          ]}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[0-9]+[.]?[0-9]*$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById(
                                    "carFreeKmPerDayFieldInCarManage"
                                  )
                                  .focus();
                            }
                          }}
                          value={carDataObj.mileageInKm}
                          id={"carMileageInKmFieldInCarManage"}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Free KM Per Day
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Free KM Per Day"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                freeKmPerDay: e.target.value,
                              };
                            });
                          }}
                          name="freeKmPerDay"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          validators={[
                            "required",
                            "matchRegexp:^[0-9]+[.]?[0-9]*$",
                          ]}
                          errorMessages={[
                            "this field is required",
                            "Free KM Per Day is not valid",
                          ]}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[0-9]+[.]?[0-9]*$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById(
                                    "carFreeKmPerMonthFieldInCarManage"
                                  )
                                  .focus();
                            }
                          }}
                          value={carDataObj.freeKmPerDay}
                          id={"carFreeKmPerDayFieldInCarManage"}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Free KM Per Month
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Free KM Per Month"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                freeKmPerMonth: e.target.value,
                              };
                            });
                          }}
                          name="freeKmPerMonth"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          validators={[
                            "required",
                            "matchRegexp:^[0-9]+[.]?[0-9]*$",
                          ]}
                          errorMessages={[
                            "this field is required",
                            "Free KM Per Month is not valid",
                          ]}
                          value={carDataObj.freeKmPerMonth}
                          id={"carFreeKmPerMonthFieldInCarManage"}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[0-9]+[.]?[0-9]*$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById(
                                    "carPriceForExtraKmFieldInCarManage"
                                  )
                                  .focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Price For Extra KM
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Price For Extra KM"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                priceForExtraKm: e.target.value,
                              };
                            });
                          }}
                          name="priceForExtraKm"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          errorMessages={[
                            "this field is required",
                            "Price For Extra KM is not valid",
                          ]}
                          validators={[
                            "required",
                            "matchRegexp:^[0-9]+[.]?[0-9]*$",
                          ]}
                          value={carDataObj.priceForExtraKm}
                          id={"carPriceForExtraKmFieldInCarManage"}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[0-9]+[.]?[0-9]*$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById(
                                    "carDailyRateFieldInCarManage"
                                  )
                                  .focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Daily Rate
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Daily Rate"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                dailyRate: e.target.value,
                              };
                            });
                          }}
                          name="dailyRate"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          errorMessages={[
                            "this field is required",
                            "Daily Rate is not valid",
                          ]}
                          value={carDataObj.dailyRate}
                          id={"carDailyRateFieldInCarManage"}
                          validators={[
                            "required",
                            "matchRegexp:^[0-9]+[.]?[0-9]*$",
                          ]}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[0-9]+[.]?[0-9]*$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById(
                                    "carMonthlyRateFieldInCarManage"
                                  )
                                  .focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Monthly Rate
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Monthly Rate"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                monthlyRate: e.target.value,
                              };
                            });
                          }}
                          name="monthlyRate"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          errorMessages={[
                            "this field is required",
                            "Monthly Rate is not valid",
                          ]}
                          value={carDataObj.monthlyRate}
                          id={"carMonthlyRateFieldInCarManage"}
                          validators={[
                            "required",
                            "matchRegexp:^[0-9]+[.]?[0-9]*$",
                          ]}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[0-9]+[.]?[0-9]*$")) {
                              e.key === "Enter" &&
                                document
                                  .getElementById(
                                    "carBookStatusFieldInCarManage"
                                  )
                                  .focus();
                            }
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Booked Status
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <Autocomplete
                          autoHighlight
                          filterSelectedOptions
                          disablePortal
                          id="carBookStatusFieldInCarManage"
                          options={["Booked", "Not Booked"]}
                          style={{
                            position: "absolute",
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
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                carBookedOrNotStatus: value,
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
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Maintenance Status
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <Autocomplete
                          autoHighlight
                          filterSelectedOptions
                          disablePortal
                          id="carMaintenanceStatusFieldInCarManage"
                          options={[
                            "Under Maintenance",
                            "No Maintenance Required",
                          ]}
                          style={{
                            position: "absolute",
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
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                maintenanceStatus: value,
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
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Car Images
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <input
                          multiple
                          onChange={(e) => {
                            console.log(e.target.files[0]);
                            console.log(e.target.files[0].name);
                          }}
                          name="carImages"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          id="carImagesFile"
                          type={"file"}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={3}
                      style={{ height: "25%", position: "relative" }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "30%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          style={{ display: "flex", marginLeft: "20%" }}
                        >
                          Loss Damage Waiver
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ height: "70%", position: "relative" }}
                      >
                        <TextValidator
                          label="Enter Loss Damage Waiver"
                          type="Number"
                          onChange={(e) => {
                            setCarDataObj((prevState) => {
                              return {
                                ...carDataObj,
                                lossDamageWaiver: e.target.value,
                              };
                            });
                          }}
                          name="lossDamageWaiver"
                          size="small"
                          style={{
                            position: "absolute",
                            width: "90%",
                            height: "50%",
                            display: "flex",
                            inset: "0 0 0 0",
                            margin: "auto",
                          }}
                          errorMessages={[
                            "this field is required",
                            "Loss Damage Waiver is not valid",
                          ]}
                          value={carDataObj.lossDamageWaiver}
                          id={"carLossDamageWaiverFieldInCarManage"}
                          validators={[
                            "required",
                            "matchRegexp:^[0-9]+[.]?[0-9]*$",
                          ]}
                          onKeyDown={(e) => {
                            e.key === "Tab" && e.preventDefault();
                            if (e.target.value.match("^[0-9]+[.]?[0-9]*$")) {
                              if (e.key === "Enter") {
                                setCheckDisabled(false);
                              }
                            }
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </ValidatorForm>
              ) : (
                view
              )}
            </Grid>
            <Grid container item xs={12} style={{ height: "20%" }}>
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
                  id={"carSaveBtnId"}
                  disabled={checkDisabled}
                  variant={"contained"}
                  label={"Save"}
                  size={"small"}
                  style={{ width: "70%", height: "40%", display: "flex" }}
                  onClick={async (e) => {
                    let file = document.getElementById("carImagesFile").files;
                    console.log("Car Obj = ", carDataObj);
                    for (let i = 0; i < file.length; i++) {
                      formData.append("carImgFile", file[i], file[i].name);
                    }
                    formData.append(
                      "dto",
                      new Blob([JSON.stringify(carDataObj)], {
                        type: "application/json",
                      })
                    );
                    if (
                      window.confirm("Do you want to save this car") == true
                    ) {
                      let response = await CarService.postCar(formData);
                      setCheckDisabled(true);
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
                  disabled={checkDisabled}
                  variant={"contained"}
                  label={"Update"}
                  size={"small"}
                  style={{
                    width: "70%",
                    height: "40%",
                    display: "flex",
                    backgroundColor: "grey",
                  }}
                  onClick={async (e) => {
                    let file = document.getElementById("carImagesFile").files;
                    console.log("Car Obj = ", carDataObj);
                    for (let i = 0; i < file.length; i++) {
                      formData.append("carImgFile", file[i], file[i].name);
                    }
                    formData.append(
                      "dto",
                      new Blob([JSON.stringify(carDataObj)], {
                        type: "application/json",
                      })
                    );
                    if (
                      window.confirm("Do you want to update this car") == true
                    ) {
                      let response = await CarService.putCar(formData);
                      setCheckDisabled(true);
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
                  disabled={checkDisabled}
                  variant={"contained"}
                  color={"error"}
                  label={"Delete"}
                  size={"medium"}
                  style={{ display: "flex", width: "70%", height: "40%" }}
                  onClick={async (e) => {
                    if (
                      window.confirm("Do you want to delete this car") == true
                    ) {
                      let response = await CarService.deleteCar(
                        carDataObj.c_RegNo
                      );
                      setCheckDisabled(true);
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
                  label={"View All"}
                  size={"medium"}
                  style={{
                    display: "flex",
                    width: "70%",
                    height: "40%",
                    backgroundColor: "#4BBDE1",
                  }}
                  onClick={async (e) => {
                    console.log("onClick");
                    let res = await CarService.fetchCars();
                    let rowData = res.data.data;
                    let dataList = [];
                    let rowNo = 1;
                    await rowData.map(async (row) => {
                      dataList.push(
                        <tr>
                          <td>{rowNo++}</td>
                          <td>{row.c_RegNo}</td>
                          <td>{row.brand}</td>
                          <td>{row.type}</td>
                          <td>{row.transmissionType}</td>
                          <td>{row.fuelType}</td>
                          <td>{row.noOfPassengers}</td>
                          <td>{row.mileageInKm}</td>
                          <td>{row.freeKmPerDay}</td>
                          <td>{row.freeKmPerMonth}</td>
                          <td>{row.dailyRate}</td>
                          <td>{row.monthlyRate}</td>
                          <td>{row.carBookedOrNotStatus}</td>
                          <td>{row.maintenanceStatus}</td>
                          <td>{row.lossDamageWaiver}</td>
                          <td>
                            <img
                              src={baseUrl + "/" + row.images.firstImage}
                              width="100px"
                            ></img>
                          </td>
                          <td>
                            <img
                              src={baseUrl + "/" + row.images.secondImage}
                              width="100px"
                            ></img>
                          </td>
                          <td>
                            <img
                              src={baseUrl + "/" + row.images.thirdImage}
                              width="100px"
                            ></img>
                          </td>
                          <td>
                            <img
                              src={baseUrl + "/" + row.images.fourthImage}
                              width="100px"
                            ></img>
                          </td>
                        </tr>
                      );
                    });

                    setCheck(true);
                    setView(
                      <CommonTable
                        width="100%"
                        height="100%"
                        tblRows={[
                          "Row No",
                          "Reg No",
                          "Brand",
                          "Type",
                          "Transmission Type",
                          "Fuel Type",
                          "No Of Passengers",
                          "Mileage In KM",
                          "Free KM Per Day",
                          "Free KM Per Month",
                          "Daily Rate",
                          "Monthly Rate",
                          "Booked Status",
                          "Maintenance Status",
                          "loss Damage Waiver",
                          "Car Image 1",
                          "Car Image 2",
                          "Car Image 3",
                          "Car Image 4",
                        ]}
                        dataList={dataList}
                        id="carViewAllTableId"
                      />
                    );
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
                  variant={"outlined"}
                  color={"success"}
                  label={"View Schedule"}
                  size={"medium"}
                  style={{ display: "flex", width: "70%", height: "40%" }}
                  onClick={async (e) => {
                    let list = await loadCarSchedule();
                    console.log(list);
                    console.log("onClick");
                    setCheck(true);
                    setView(
                      <CommonTable
                        width="100%"
                        height="100%"
                        tblRows={[
                          "Row No",
                          "Reg No",
                          "Booked Status",
                          "Booked Date",
                          "Booked Time",
                          "Return Date",
                          "Return Time",
                        ]}
                        dataList={[]}
                        id="carViewAllTableId"
                      />
                    );
                  }}
                  onDblClick={(e) => {
                    console.log("onDblClick");
                    setCheck(false);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};
