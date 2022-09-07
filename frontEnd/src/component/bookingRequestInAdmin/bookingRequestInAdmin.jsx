import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";
import { BookingRequestInAdminDetails } from "./bookingRequestDetailsView";
import classes from "./bookingRequestInAdmin.module.css";

export const BookingRequestInAdmin = (props) => {
  const [view, setView] = useState(null);
  const [check, setCheck] = useState(false);
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
                dataList={[]}
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
                      onChange={(e) => {
                        // setCarDataObj((prevState) => {
                        //   return {
                        //     ...carDataObj,
                        //     monthlyRate: e.target.value,
                        //   };
                        // });
                      }}
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
                      //value={carDataObj.monthlyRate}
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
                      label="Enter Customer NIC"
                      onChange={(e) => {
                        // setCarDataObj((prevState) => {
                        //   return {
                        //     ...carDataObj,
                        //     monthlyRate: e.target.value,
                        //   };
                        // });
                      }}
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
                      //value={carDataObj.monthlyRate}
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
                      onChange={(e) => {
                        // setCarDataObj((prevState) => {
                        //   return {
                        //     ...carDataObj,
                        //     monthlyRate: e.target.value,
                        //   };
                        // });
                      }}
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
                      //value={carDataObj.monthlyRate}
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
                      onChange={(e) => {
                        // setCarDataObj((prevState) => {
                        //   return {
                        //     ...carDataObj,
                        //     monthlyRate: e.target.value,
                        //   };
                        // });
                      }}
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
                      //value={carDataObj.monthlyRate}
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
                      onChange={(e) => {
                        // setCarDataObj((prevState) => {
                        //   return {
                        //     ...carDataObj,
                        //     monthlyRate: e.target.value,
                        //   };
                        // });
                      }}
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
                      //value={carDataObj.monthlyRate}
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
                  // let file = document.getElementById("carImagesFile").files;
                  // console.log("Car Obj = ", carDataObj);
                  // console.log("check = ", obj);
                  // for (let i = 0; i < file.length; i++) {
                  //   formData.append("carImgFile", file[i], file[i].name);
                  // }
                  // formData.append(
                  //   "dto",
                  //   new Blob([JSON.stringify(carDataObj)], {
                  //     type: "application/json",
                  //   })
                  // );
                  // if (
                  //   window.confirm("Do you want to save this car") == true
                  // ) {
                  //   let response = await CarService.postCar(formData);
                  // }
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
                onClick={async (e) => {
                  // let file = document.getElementById("carImagesFile").files;
                  // console.log("Car Obj = ", carDataObj);
                  // console.log("check = ", obj);
                  // for (let i = 0; i < file.length; i++) {
                  //   formData.append("carImgFile", file[i], file[i].name);
                  // }
                  // formData.append(
                  //   "dto",
                  //   new Blob([JSON.stringify(carDataObj)], {
                  //     type: "application/json",
                  //   })
                  // );
                  // if (
                  //   window.confirm("Do you want to update this car") == true
                  // ) {
                  //   let response = await CarService.putCar(formData);
                  // }
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
                  height: "70%",
                  backgroundColor: "#4BBDE1",
                }}
                onClick={async (e) => {
                  //   console.log("onClick");
                  //   let res = await CarService.fetchCars();
                  //   let rowData = res.data.data;
                  //   let dataList = [];
                  //   let rowNo = 1;
                  //   await rowData.map(async (row) => {
                  //     dataList.push(
                  //       <tr>
                  //         <td>{rowNo++}</td>
                  //         <td>{row.c_RegNo}</td>
                  //         <td>{row.brand}</td>
                  //         <td>{row.type}</td>
                  //         <td>{row.transmissionType}</td>
                  //         <td>{row.fuelType}</td>
                  //         <td>{row.noOfPassengers}</td>
                  //         <td>{row.mileageInKm}</td>
                  //         <td>{row.freeKmPerDay}</td>
                  //         <td>{row.freeKmPerMonth}</td>
                  //         <td>{row.dailyRate}</td>
                  //         <td>{row.monthlyRate}</td>
                  //         <td>{row.carBookedOrNotStatus}</td>
                  //         <td>{row.maintenanceStatus}</td>
                  //         <td>{row.lossDamageWaiver}</td>
                  //         <td>
                  //           <img
                  //             src={baseUrl + "/" + row.images.firstImage}
                  //             width="100px"
                  //           ></img>
                  //         </td>
                  //         <td>
                  //           <img
                  //             src={baseUrl + "/" + row.images.secondImage}
                  //             width="100px"
                  //           ></img>
                  //         </td>
                  //         <td>
                  //           <img
                  //             src={baseUrl + "/" + row.images.thirdImage}
                  //             width="100px"
                  //           ></img>
                  //         </td>
                  //         <td>
                  //           <img
                  //             src={baseUrl + "/" + row.images.fourthImage}
                  //             width="100px"
                  //           ></img>
                  //         </td>
                  //       </tr>
                  //     );
                  //   });
                  //   setCarList(res.data.data);
                  //   setCheck(true);
                  //   setView(
                  //     <CommonTable
                  //       width="100%"
                  //       height="100%"
                  //       tblRows={[
                  //         "Row No",
                  //         "Reg No",
                  //         "Brand",
                  //         "Type",
                  //         "Transmission Type",
                  //         "Fuel Type",
                  //         "No Of Passengers",
                  //         "Mileage In KM",
                  //         "Free KM Per Day",
                  //         "Free KM Per Month",
                  //         "Daily Rate",
                  //         "Monthly Rate",
                  //         "Booked Status",
                  //         "Maintenance Status",
                  //         "loss Damage Waiver",
                  //         "Car Image 1",
                  //         "Car Image 2",
                  //         "Car Image 3",
                  //         "Car Image 4",
                  //       ]}
                  //       dataList={dataList}
                  //       id="carViewAllTableId"
                  //     />
                  //   );
                  setView(<BookingRequestInAdminDetails />);
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
