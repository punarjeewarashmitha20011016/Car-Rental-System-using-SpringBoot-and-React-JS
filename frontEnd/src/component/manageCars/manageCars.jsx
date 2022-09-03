import { Grid } from "@mui/material";
import React from "react";
import { Fragment } from "react";

import classes from "./manageCars.module.css";

export const ManageCars = (props) => {
  return (
    <Fragment>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <Grid
            container
            spacing={0}
            style={{
              position: "relatve",
              width: "90%",
              height: "90%",
              border: "1px solid red",
            }}
          >
            <Grid item xs={12}></Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};
