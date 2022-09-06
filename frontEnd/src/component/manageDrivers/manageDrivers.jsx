import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import CommonButton from "../common/btn";
import classes from "./manageDrivers.module.css";
export const ManageDrivers = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <Grid
          container
          spacing={0}
          style={{
            position: "relative",
            display: "flex",
            width: "90%",
            height: "90%",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              height: "80%",
            }}
          >
            <ValidatorForm
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <Grid
                container
                style={{
                  height: "25%",
                  width: "100%",
                }}
              >
                <Grid
                  item
                  xs={4}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      Nic
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      label="Enter Your Nic Number"
                      onChange={(e) => {
                        // setCustomerObj((prevState) => {
                        //   return {
                        //     ...customerObj,
                        //     nic: e.target.value,
                        //   };
                        // });
                      }}
                      name="nicNumber"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //   value={customerObj.nic}
                      //   validators={["required"]}
                      //   errorMessages={[
                      //     "this field is required",
                      //     "Nic Number is not valid",
                      //   ]}
                    />
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={4}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      Name
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      label="Enter Your Name"
                      onChange={(e) => {
                        // setCustomerObj((prevState) => {
                        //   return {
                        //     ...customerObj,
                        //     nic: e.target.value,
                        //   };
                        // });
                      }}
                      name="driverName"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //   value={customerObj.nic}
                      //   validators={["required"]}
                      //   errorMessages={[
                      //     "this field is required",
                      //     "Nic Number is not valid",
                      //   ]}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      License No
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      label="Enter Your License Number"
                      onChange={(e) => {
                        // setCustomerObj((prevState) => {
                        //   return {
                        //     ...customerObj,
                        //     nic: e.target.value,
                        //   };
                        // });
                      }}
                      name="licenseNumber"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //   value={customerObj.nic}
                      //   validators={["required"]}
                      //   errorMessages={[
                      //     "this field is required",
                      //     "Nic Number is not valid",
                      //   ]}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      Contact No
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      label="Enter Your Contact Number"
                      onChange={(e) => {
                        // setCustomerObj((prevState) => {
                        //   return {
                        //     ...customerObj,
                        //     nic: e.target.value,
                        //   };
                        // });
                      }}
                      name="contactNumber"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //   value={customerObj.nic}
                      //   validators={["required"]}
                      //   errorMessages={[
                      //     "this field is required",
                      //     "Nic Number is not valid",
                      //   ]}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      Email Address
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      label="Enter Your Email Address"
                      onChange={(e) => {
                        // setCustomerObj((prevState) => {
                        //   return {
                        //     ...customerObj,
                        //     nic: e.target.value,
                        //   };
                        // });
                      }}
                      name="emailAddress"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //   value={customerObj.nic}
                      //   validators={["required"]}
                      //   errorMessages={[
                      //     "this field is required",
                      //     "Nic Number is not valid",
                      //   ]}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      Password
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      label="Enter Your Password"
                      onChange={(e) => {
                        // setCustomerObj((prevState) => {
                        //   return {
                        //     ...customerObj,
                        //     nic: e.target.value,
                        //   };
                        // });
                      }}
                      name="password"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //   value={customerObj.nic}
                      //   validators={["required"]}
                      //   errorMessages={[
                      //     "this field is required",
                      //     "Nic Number is not valid",
                      //   ]}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      Availabiliity Status
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <Autocomplete
                      autoHighlight
                      filterSelectedOptions
                      disablePortal
                      id="combo-box-demo"
                      options={["Available", "Not Available"]}
                      style={{
                        position: "absolute",
                        width: "60%",
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
                        // setCarDataObj((prevState) => {
                        //   return {
                        //     ...carDataObj,
                        //     type: value,
                        //   };
                        // });
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      Address
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      label="Enter Your Address"
                      onChange={(e) => {
                        // setCustomerObj((prevState) => {
                        //   return {
                        //     ...customerObj,
                        //     nic: e.target.value,
                        //   };
                        // });
                      }}
                      name="address"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //   value={customerObj.nic}
                      //   validators={["required"]}
                      //   errorMessages={[
                      //     "this field is required",
                      //     "Nic Number is not valid",
                      //   ]}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      Nic Picture
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      placeholder="License Picture"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        console.log(e.target.files[0].name);
                        // setFormData((prevState) => {
                        //   let data = formData;
                        //   data.append(
                        //     "licensePhoto",
                        //     e.target.files[0],
                        //     e.target.files[0].name
                        //   );
                        //   console.log(data.getAll("nicPhoto"));
                        //   return data;
                        // });
                      }}
                      name="licensePicture"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //value={customerObj.licensePhoto}
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
                  item
                  xs={6}
                  style={{
                    height: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    style={{
                      position: "relative",
                      height: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                      }}
                    >
                      License Picture
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      placeholder="License Picture"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        console.log(e.target.files[0].name);
                        // setFormData((prevState) => {
                        //   let data = formData;
                        //   data.append(
                        //     "licensePhoto",
                        //     e.target.files[0],
                        //     e.target.files[0].name
                        //   );
                        //   console.log(data.getAll("nicPhoto"));
                        //   return data;
                        // });
                      }}
                      name="licensePicture"
                      size="small"
                      style={{
                        position: "absolute",
                        width: "60%",
                        height: "50%",
                        display: "flex",
                        inset: "0 0 0 0",
                        margin: "auto",
                      }}
                      //value={customerObj.licensePhoto}
                      validators={["required"]}
                      type={"file"}
                      errorMessages={[
                        "this field is required",
                        "User Name is not valid",
                      ]}
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
              display: "flex",
              height: "20%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={4}
              style={{
                height: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                color={"primary"}
                label={"Save"}
                size={"medium"}
                style={{ display: "flex", width: "50%" }}
                onClick={async (e) => {
                  //   setFormData((prevState) => {
                  //     return formData.append(
                  //       "dto",
                  //       new Blob([JSON.stringify(customerObj)], {
                  //         type: "application/json",
                  //       })
                  //     );
                  //   });
                  //   if (
                  //     window.confirm("Do you want to save this customer") ==
                  //     true
                  //   ) {
                  //     let response = await CustomerService.createPost(
                  //       formData
                  //     );
                  //   }
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                height: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                variant={"contained"}
                label={"Update"}
                size={"medium"}
                style={{
                  display: "flex",
                  width: "50%",
                  backgroundColor: "grey",
                }}
                onClick={async (e) => {
                  //   setFormData((prevState) => {
                  //     return formData.append(
                  //       "dto",
                  //       new Blob([JSON.stringify(customerObj)], {
                  //         type: "application/json",
                  //       })
                  //     );
                  //   });
                  //   if (
                  //     window.confirm("Do you want to update this customer") ==
                  //     true
                  //   ) {
                  //     let response = await CustomerService.createPut(
                  //       formData
                  //     );
                  //   }
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                height: "50%",
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
                style={{ display: "flex", width: "50%" }}
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
                onClick={async (e) => {
                  // console.log("onClick");
                  // let res = await CarService.fetchCars();
                  // let rowData = res.data.data;
                  // let dataList = [];
                  // let rowNo = 1;
                  // await rowData.map(async (row) => {
                  //   dataList.push(
                  //     <tr>
                  //       <td>{rowNo++}</td>
                  //       <td>{row.c_RegNo}</td>
                  //       <td>{row.brand}</td>
                  //       <td>{row.type}</td>
                  //       <td>{row.transmissionType}</td>
                  //       <td>{row.fuelType}</td>
                  //       <td>{row.noOfPassengers}</td>
                  //       <td>{row.mileageInKm}</td>
                  //       <td>{row.freeKmPerDay}</td>
                  //       <td>{row.freeKmPerMonth}</td>
                  //       <td>{row.dailyRate}</td>
                  //       <td>{row.monthlyRate}</td>
                  //       <td>{row.carBookedOrNotStatus}</td>
                  //       <td>{row.maintenanceStatus}</td>
                  //       <td>{row.lossDamageWaiver}</td>
                  //       <td>
                  //         <img
                  //           src={baseUrl + "/" + row.images.firstImage}
                  //           width="100px"
                  //         ></img>
                  //       </td>
                  //       <td>
                  //         <img
                  //           src={baseUrl + "/" + row.images.secondImage}
                  //           width="100px"
                  //         ></img>
                  //       </td>
                  //       <td>
                  //         <img
                  //           src={baseUrl + "/" + row.images.thirdImage}
                  //           width="100px"
                  //         ></img>
                  //       </td>
                  //       <td>
                  //         <img
                  //           src={baseUrl + "/" + row.images.fourthImage}
                  //           width="100px"
                  //         ></img>
                  //       </td>
                  //     </tr>
                  //   );
                  // });
                  // setCarList(res.data.data);
                  // setCheck(true);
                  // setView(
                  //   <CommonTable
                  //     width="100%"
                  //     height="100%"
                  //     tblRows={[
                  //       "Row No",
                  //       "Reg No",
                  //       "Brand",
                  //       "Type",
                  //       "Transmission Type",
                  //       "Fuel Type",
                  //       "No Of Passengers",
                  //       "Mileage In KM",
                  //       "Free KM Per Day",
                  //       "Free KM Per Month",
                  //       "Daily Rate",
                  //       "Monthly Rate",
                  //       "Booked Status",
                  //       "Maintenance Status",
                  //       "loss Damage Waiver",
                  //       "Car Image 1",
                  //       "Car Image 2",
                  //       "Car Image 3",
                  //       "Car Image 4",
                  //     ]}
                  //     dataList={dataList}
                  //     id="carViewAllTableId"
                  //   />
                  // );
                }}
                onDblClick={async (e) => {
                  // setCheck(false);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
