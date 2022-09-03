import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Fragment } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Typography } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";

import classes from "./manageCars.module.css";
import CommonButton from "../common/btn";
import { useEffect } from "react";
import CommonTable from "../common/table/table";

export const ManageCars = (props) => {
  const [view, setView] = useState();
  const setDynamicallyViewWhenBtnClicked = () => {
    return view != null && view;
  };
  const mainView = () => {
    return (
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Your Registration Number"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Car Brand"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <Autocomplete
                disablePortal
                className={classes.autoComplete}
                id="combo-box-demo"
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <Autocomplete
                disablePortal
                className={classes.autoComplete}
                id="combo-box-demo"
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <Autocomplete
                disablePortal
                className={classes.autoComplete}
                id="combo-box-demo"
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
                No Of Passengers
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                type="Number"
                label="Enter No Of Passengers"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Mileage In KM"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Free KM Per Day"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Free KM Per Month"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Price For Extra KM"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Daily Rate"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Monthly Rate"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={["Under Maintenance", "No Maintenance Required"]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                placeholder="Car Images"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  console.log(e.target.files[0].name);
                  // setFormData((prevState) => {
                  //   let data = formData;
                  //   data.append(
                  //     "nicPhoto",
                  //     e.target.files[0],
                  //     e.target.files[0].name
                  //   );
                  //   return data;
                  // });
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
                // value={customerObj.nicPhoto}
                validators={["required"]}
                type={"file"}
                errorMessages={[
                  "this field is required",
                  "User Name is not valid",
                ]}
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
            <Grid item xs={12} style={{ height: "70%", position: "relative" }}>
              <TextValidator
                label="Enter Loss Damage Waiver"
                type="Number"
                onChange={(e) => {
                  // setCustomerObj((prevState) => {
                  //   return {
                  //     ...customerObj,
                  //     nic: e.target.value,
                  //   };
                  // });
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
                //value={customerObj.nic}
                validators={["required"]}
                errorMessages={[
                  "this field is required",
                  "Nic Number is not valid",
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </ValidatorForm>
    );
  };
  useEffect(() => {
    setView(mainView());
  }, []);

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
              {view != null && setDynamicallyViewWhenBtnClicked()}
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
                  variant={"contained"}
                  label={"Save"}
                  size={"small"}
                  style={{ width: "80%", height: "40%", display: "flex" }}
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
                    width: "80%",
                    height: "40%",
                    display: "flex",
                    backgroundColor: "grey",
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
                  label={"Delete"}
                  size={"medium"}
                  style={{ display: "flex", width: "70%", height: "40%" }}
                  onClick={async (e) => {
                    //   if (
                    //     window.confirm("Do you want to delete this customer") ==
                    //     true
                    //   ) {
                    //     let response = await CustomerService.deleteCustomer(
                    //       customerObj.nic
                    //     );
                    //   }
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
                  onClick={(e) => {
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
                        dataList={[]}
                        id="carViewAllTableId"
                      />
                    );
                  }}
                  onDblClick={(e) => {
                    setView(mainView());
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
                  onClick={(e) => {
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
                    setView(mainView());
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
