import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import CommonButton from "../common/btn";

import classes from "./bookingInAdmin.module.css";

export const BookingInAdmin = (props) => {
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
                  onClick={async (e) => {}}
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
                  onClick={async (e) => {}}
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
                  onClick={async (e) => {}}
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
                  onClick={async (e) => {}}
                  onDblClick={async (e) => {}}
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
                  onClick={(e) => {}}
                  onDblClick={(e) => {}}
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
                <Grid container item xs={12} style={{ height: "90%" }}>
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
                          options={[]}
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
                            // setCarDataObj((prevState) => {
                            //   return {
                            //     ...carDataObj,
                            //     maintenanceStatus: value,
                            //   };
                            // });
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
                          <Typography style={{ marginLeft: "14%" }}>
                            Customer Nic
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
                            placeholder={"Enter Customer Id"}
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
                            Driver Nic
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
                            placeholder={"Enter Driver Nic"}
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
                            Car Type
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
                            placeholder={"Enter Car Type"}
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
                            Rental Type
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
                            placeholder={"Enter Rental Type"}
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
                            Trip In KM
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
                            placeholder={"Enter Trip In KM"}
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
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                          }}
                        >
                          <TextValidator
                            size={"small"}
                            type={"Date"}
                            style={{
                              width: "138%",
                              marginLeft: "27%",
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
                            Time Of Pickup
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{
                            height: "65%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                          }}
                        >
                          <TextValidator
                            size={"small"}
                            type={"Time"}
                            style={{
                              width: "168%",
                              marginLeft: "33%",
                            }}
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
                            Pickup Venue
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
                            placeholder={"Enter Pickup Venue"}
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
                            Return Date
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{
                            height: "65%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                          }}
                        >
                          <TextValidator
                            size={"small"}
                            type={"Date"}
                            style={{
                              width: "138%",
                              marginLeft: "27%",
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
                            Return Time
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{
                            height: "65%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                          }}
                        >
                          <TextValidator
                            size={"small"}
                            type={"Time"}
                            style={{
                              width: "168%",
                              marginLeft: "33%",
                            }}
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
                          <Typography style={{ marginLeft: "14%" }}>
                            Return Venue
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
                            placeholder={"Enter Return Venue"}
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
                            options={["Damaged", "Not Damaged"]}
                            style={{
                              position: "absolute",
                              width: "72%",
                              display: "flex",
                              inset: "12% 0% 0 0",
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
                            onChange={(e, value) => {}}
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
                            size={"small"}
                            placeholder={"Enter Loss Damage Waiver"}
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
                            size={"small"}
                            placeholder={"Enter Loss Damage Waiver Slip Path"}
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
                            Cost
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
                            type={"Number"}
                            placeholder={"Enter Cost"}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </ValidatorForm>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
