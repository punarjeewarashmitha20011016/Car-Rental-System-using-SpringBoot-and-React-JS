import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import CommonButton from "../common/btn";

import classes from "./bookingInAdmin.module.css";
import { CartList } from "./cartList";
import { MainFields } from "./mainField";

export const BookingInAdmin = (props) => {
  const [check, setCheck] = useState(false);
  const [view, setView] = useState(null);
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
                  onClick={async (e) => {
                    setCheck(true);
                    setView(<CartList />);
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
                  {check === false ? <MainFields /> : view}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
