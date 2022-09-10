import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { baseUrl } from "../../baseUrl";
import DriverService from "../../services/driverService/driverService";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";
import classes from "./manageDrivers.module.css";
export const ManageDrivers = (props) => {
  const [driver, setDriver] = useState({
    nic: "",
    name: "",
    licenseNo: "",
    licensePhoto: "",
    nicPhoto: "",
    contactNo: "",
    address: "",
    availableStatus: "",
    email: "",
    password: "",
  });
  const [view, setView] = useState(null);
  const [check, setCheck] = useState(false);
  const [formData, setFormData] = useState(new FormData());
  const [checkDisable, setCheckDisable] = useState(true);
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
            {check === false ? (
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
                          setDriver((prevState) => {
                            return {
                              ...driver,
                              nic: e.target.value,
                            };
                          });
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
                        value={driver.nic}
                        validators={[
                          "required",
                          "matchRegexp:^(([0-9]{12})||([0-9]{9}(V)))$",
                        ]}
                        errorMessages={[
                          "this field is required",
                          "Nic Number is not valid",
                        ]}
                        onKeyDown={(e) => {
                          e.key === "Tab" && e.preventDefault();
                          if (
                            e.target.value.match(
                              "^(([0-9]{12})||([0-9]{9}(V)))$"
                            )
                          ) {
                            if (e.key === "Enter") {
                              document.getElementById("driverNameField");
                              setCheckDisable(false);
                            }
                          } else {
                            setCheckDisable(true);
                          }
                        }}
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
                        id={"driverNameField"}
                        label="Enter Your Name"
                        onChange={(e) => {
                          setDriver((prevState) => {
                            return {
                              ...driver,
                              name: e.target.value,
                            };
                          });
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
                        value={driver.name}
                        validators={["required", "matchRegexp:^[A-z ]{3,}$"]}
                        errorMessages={[
                          "this field is required",
                          "Name is not valid",
                        ]}
                        onKeyDown={(e) => {
                          e.key === "Tab" && e.preventDefault();
                          if (e.target.value.match("^[A-z ]{3,}$")) {
                            if (e.key === "Enter") {
                              document.getElementById("driverLicenseNoField");
                              setCheckDisable(false);
                            }
                          } else {
                            setCheckDisable(true);
                          }
                        }}
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
                        id={"driverLicenseNoField"}
                        label="Enter Your License Number"
                        onChange={(e) => {
                          setDriver((prevState) => {
                            return {
                              ...driver,
                              licenseNo: e.target.value,
                            };
                          });
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
                        value={driver.licenseNo}
                        validators={["required", "matchRegexp:^[B][0-9]{7}$"]}
                        errorMessages={[
                          "this field is required",
                          "License Number is not valid",
                        ]}
                        onKeyDown={(e) => {
                          e.key === "Tab" && e.preventDefault();
                          if (e.target.value.match("^[B][0-9]{7}$")) {
                            if (e.key === "Enter") {
                              document.getElementById("driverContactField");
                              setCheckDisable(false);
                            }
                          } else {
                            setCheckDisable(true);
                          }
                        }}
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
                        id={"driverContactField"}
                        label="Enter Your Contact Number"
                        onChange={(e) => {
                          setDriver((prevState) => {
                            return {
                              ...driver,
                              contactNo: "0" + parseInt(e.target.value),
                            };
                          });
                        }}
                        name="contactNumber"
                        size="small"
                        type="Number"
                        style={{
                          position: "absolute",
                          width: "60%",
                          height: "50%",
                          display: "flex",
                          inset: "0 0 0 0",
                          margin: "auto",
                        }}
                        value={driver.contactNo}
                        validators={["required", "matchRegexp:^[0-9]{10}$"]}
                        errorMessages={[
                          "this field is required",
                          "Contact Number is not valid",
                        ]}
                        onKeyDown={(e) => {
                          e.key === "Tab" && e.preventDefault();
                          if (e.target.value.match("^[0-9]{10}$")) {
                            if (e.key === "Enter") {
                              document.getElementById("driverEmailField");
                              setCheckDisable(false);
                            }
                          } else {
                            setCheckDisable(true);
                          }
                        }}
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
                        id={"driverEmailField"}
                        label="Enter Your Email Address"
                        onChange={(e) => {
                          setDriver((prevState) => {
                            return {
                              ...driver,
                              email: e.target.value,
                            };
                          });
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
                        value={driver.email}
                        validators={["required", "isEmail"]}
                        errorMessages={[
                          "this field is required",
                          "Email is not valid",
                        ]}
                        onKeyDown={(e) => {
                          e.key === "Tab" && e.preventDefault();
                          if (
                            e.target.value.match(
                              "^[A-z0-9.]{5,30}[@][A-z]{3,7}[.](com|lk|uk|[a-z]){1,}$"
                            )
                          ) {
                            if (e.key === "Enter") {
                              document.getElementById("driverPasswordField");
                              setCheckDisable(false);
                            }
                          } else {
                            setCheckDisable(true);
                          }
                        }}
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
                        id={"driverPasswordField"}
                        label="Enter Your Password"
                        onChange={(e) => {
                          setDriver((prevState) => {
                            return {
                              ...driver,
                              password: e.target.value,
                            };
                          });
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
                        value={driver.password}
                        validators={[
                          "required",
                          "matchRegexp:^[A-z.!@#$%&() ]{2,}$",
                        ]}
                        errorMessages={[
                          "this field is required",
                          "Password is not valid",
                        ]}
                        onKeyDown={(e) => {
                          e.key === "Tab" && e.preventDefault();
                          if (e.target.value.match("^[A-z.!@#$%&() ]{2,}$")) {
                            if (e.key === "Enter") {
                              document.getElementById(
                                "driverAvailabilityStatusField"
                              );
                              setCheckDisable(false);
                            }
                          } else {
                            setCheckDisable(true);
                          }
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
                        Availability Status
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
                        id="driverAvailabilityStatusField"
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
                          setDriver((prevState) => {
                            return {
                              ...driver,
                              availableStatus: value,
                            };
                          });
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
                          setDriver((prevState) => {
                            return {
                              ...driver,
                              address: e.target.value,
                            };
                          });
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
                        value={driver.address}
                        validators={[
                          "required",
                          "matchRegexp:^[A-z0-9,.  ]*[/]?[0-9]*[ ]?[A-z,. ]*$",
                        ]}
                        errorMessages={[
                          "this field is required",
                          "Address is not valid",
                        ]}
                        onKeyDown={(e) => {
                          e.key === "Tab" && e.preventDefault();
                          if (
                            e.target.value.match(
                              "^[A-z0-9,.  ]*[/]?[0-9]*[ ]?[A-z,. ]*$"
                            )
                          ) {
                            if (e.key === "Enter") {
                              document.getElementById("driverNicPictureField");
                              setCheckDisable(false);
                            }
                          } else {
                            setCheckDisable(true);
                          }
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
                        id={"driverNicPictureField"}
                        placeholder="Nic Picture"
                        onChange={(e) => {
                          console.log("e");
                          console.log(e.target.files[0]);
                          console.log(e.target.files[0].name);

                          formData.append(
                            "nicPhoto",
                            e.target.files[0],
                            e.target.files[0].name
                          );
                        }}
                        name="nicPicture"
                        size="small"
                        style={{
                          position: "absolute",
                          width: "60%",
                          height: "50%",
                          display: "flex",
                          inset: "0 0 0 0",
                          margin: "auto",
                        }}
                        validators={["required"]}
                        type={"file"}
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
                          formData.append(
                            "licensePhoto",
                            e.target.files[0],
                            e.target.files[0].name
                          );
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
                        validators={["required"]}
                        type={"file"}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </ValidatorForm>
            ) : (
              view
            )}
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
              xs={3}
              style={{
                height: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                disabled={checkDisable}
                variant={"contained"}
                color={"primary"}
                label={"Save"}
                size={"medium"}
                style={{ display: "flex", width: "50%" }}
                onClick={async (e) => {
                  console.log("Form = ", formData.getAll("nicPhoto"));
                  console.log("Driver DTO = ", driver);
                  formData.append(
                    "dto",
                    new Blob([JSON.stringify(driver)], {
                      type: "application/json",
                    })
                  );
                  if (
                    window.confirm("Do you want to save this Driver") == true
                  ) {
                    let response = await DriverService.postDriver(formData);
                  }
                }}
              />
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                disabled={checkDisable}
                variant={"contained"}
                label={"Update"}
                size={"medium"}
                style={{
                  display: "flex",
                  width: "50%",
                  backgroundColor: "grey",
                }}
                onClick={async (e) => {
                  console.log("Form = ", formData.getAll("nicPhoto"));
                  console.log("Driver DTO = ", driver);
                  formData.append(
                    "dto",
                    new Blob([JSON.stringify(driver)], {
                      type: "application/json",
                    })
                  );
                  if (
                    window.confirm("Do you want to update this Driver") == true
                  ) {
                    let response = await DriverService.putDriver(formData);
                  }
                }}
              />
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                height: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CommonButton
                disabled={checkDisable}
                variant={"contained"}
                color={"error"}
                label={"Delete"}
                size={"medium"}
                style={{ display: "flex", width: "50%" }}
                onClick={async (e) => {
                  if (
                    window.confirm("Do you want to delete this Driver") == true
                  ) {
                    let response = await DriverService.deleteDriver(driver.nic);
                  }
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
                label={"View All"}
                size={"medium"}
                style={{
                  display: "flex",
                  width: "50%",
                  height: "40%",
                  backgroundColor: "#4BBDE1",
                }}
                onClick={async (e) => {
                  console.log("onClick");
                  let res = await DriverService.fetchDrivers();
                  let rowData = res.data.data;
                  let dataList = [];
                  let rowNo = 1;
                  await rowData.map(async (row) => {
                    dataList.push(
                      <tr>
                        <td>{rowNo++}</td>
                        <td>{row.nic}</td>
                        <td>{row.name}</td>
                        <td>{row.licenseNo}</td>
                        <td>{"0" + row.contactNo}</td>
                        <td>{row.email}</td>
                        <td>{row.password}</td>

                        <td>
                          <img
                            src={baseUrl + "/" + row.nicPhoto}
                            width="100px"
                          ></img>
                        </td>
                        <td>
                          <img
                            src={baseUrl + "/" + row.licensePhoto}
                            width="100px"
                          ></img>
                        </td>
                      </tr>
                    );
                  });
                  setCheck(true);
                  setView(
                    <CommonTable
                      height={"90%"}
                      tblRows={[
                        "Row No",
                        "Nic",
                        "Name",
                        "License No",
                        "Contact No",
                        "Email",
                        "Password",
                        "Nic Photo",
                        "License Photo",
                      ]}
                      dataList={dataList}
                    />
                  );
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
