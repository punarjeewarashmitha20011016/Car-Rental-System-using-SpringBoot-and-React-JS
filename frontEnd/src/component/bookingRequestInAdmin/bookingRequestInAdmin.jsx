import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import placeBookingRequest from "../../services/placeBookingRequest/placeBookingRequest";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";
import { BookingRequestInAdminDetails } from "./bookingRequestDetailsView";
import classes from "./bookingRequestInAdmin.module.css";

export const BookingRequestInAdmin = (props) => {
  const [view, setView] = useState(null);
  const [check, setCheck] = useState(false);
  const [bookingRequestList, setBookingRequestList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [searchBoIdTxt, setSearchBoIdTxt] = useState(null);
  const [dataListForDetailsTbl, setDataListForDetailsTbl] = useState([]);
  const setDataToTable = (list) => {
    let arr = [];
    let rowNo = 1;
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
