import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { baseUrl } from "../../baseUrl";
import CommonButton from "../common/btn";

export const ViewBlock = (props) => {
  return (
    <Grid container style={props.style}>
      <Grid container item xs={12} style={{ height: "60%" }}>
        <Grid item xs={6} style={{ height: "50%" }}>
          <img
            src={baseUrl + "/" + props.imagesArr[0]}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6} style={{ height: "50%" }}>
          <img
            src={baseUrl + "/" + props.imagesArr[1]}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6} style={{ height: "50%" }}>
          <img
            src={baseUrl + "/" + props.imagesArr[2]}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6} style={{ height: "50%" }}>
          <img
            src={baseUrl + "/" + props.imagesArr[3]}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{
          height: "40%",
          backgroundColor: "white",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            height: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{
              display: "flex",
            }}
          >
            {props.heading}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CommonButton
            disabled={true}
            variant={"contained"}
            size={"large"}
            style={{ width: "70%", height: "50%" }}
            label={"Book Now"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
