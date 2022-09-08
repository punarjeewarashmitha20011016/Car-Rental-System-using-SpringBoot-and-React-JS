import {
  Autocomplete,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import CommonButton from "../common/btn";
import CommonTable from "../common/table/table";
import classes from "./placeBookingRequest.module.css";
export const PlaceBookingRequest = (props) => {
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
                      alignItems: "center",
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Booking Id"
                      size={"small"}
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
                    <Typography>Car_RegNo</Typography>
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
                    <TextValidator
                      placeholder="Enter Car_RegNo"
                      size={"small"}
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
                    <Typography>Customer Nic</Typography>
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
                    <TextValidator
                      placeholder="Enter Customer Nic"
                      size={"small"}
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
                    <Checkbox />
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Autocomplete
                      autoHighlight
                      filterSelectedOptions
                      disablePortal
                      id="combo-box-demo"
                      options={["Luxury", "Semi-Luxury"]}
                      style={{
                        position: "absolute",
                        width: "78%",
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
                        // setCarDataObj((prevState) => {
                        //   return {
                        //     ...carDataObj,
                        //     maintenanceStatus: value,
                        //   };
                        // });
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
                    <Typography>Rental Type</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                        width: "78%",
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
                        // setCarDataObj((prevState) => {
                        //   return {
                        //     ...carDataObj,
                        //     maintenanceStatus: value,
                        //   };
                        // });
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
                    <Typography>Date of Pickup</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      size={"small"}
                      type={"Date"}
                      style={{
                        position: "absolute",
                        width: "78%",
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
                    <Typography>Time Of Pickup</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      size={"small"}
                      type={"Time"}
                      style={{
                        position: "absolute",
                        width: "78%",
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
                    <Typography>Pickup Venue</Typography>
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
                    <TextValidator
                      placeholder="Enter Pickup Venue"
                      size={"small"}
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      size={"small"}
                      type={"Date"}
                      style={{
                        position: "absolute",
                        width: "78%",
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
                    <Typography>Return Time</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      height: "60%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      size={"small"}
                      type={"Time"}
                      style={{
                        position: "absolute",
                        width: "78%",
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
                    <Typography>Return Venue</Typography>
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
                    <TextValidator
                      placeholder="Enter Return Venue"
                      size={"small"}
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Loss Damage Waiver"
                      size={"small"}
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Pickup Venue"
                      size={"small"}
                      type={"file"}
                      style={{
                        width: "78%",
                        position: "absolute",
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Cost Per One Car Booking"
                      size={"small"}
                      type={"Number"}
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextValidator
                      placeholder="Enter Total Cost Per Booking"
                      size={"small"}
                      type={"Number"}
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
              dataList={[]}
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
                variant={"contained"}
                color={"primary"}
                size={"small"}
                label={"Request Booking"}
                style={{ width: "70%" }}
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
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
