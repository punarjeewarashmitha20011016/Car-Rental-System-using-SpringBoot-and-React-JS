import { Grid } from "@mui/material";
import { borderBottom } from "@mui/system";
import React, { Fragment } from "react";
import NavBar from "../navBar/navBar";
import { Cards } from "./cards";

import { FaUsers } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { VscVmActive } from "react-icons/vsc";
import { RiTaxiFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";

import classes from "./adminDashboard.module.css";
import classesCards from "./cards.module.css";
import { useEffect } from "react";
import { useState } from "react";
import bookingService from "../../services/bookingService/bookingService";
import carService from "../../services/carService/carService";
import driverService from "../../services/driverService/driverService";

export const AdminDashboard = (props) => {
  const [dashboardData, setDashboardData] = useState({
    noOfRegisteredUsers: "",
    totalBookingsOfTheDay: "",
    noOfAvailableAndRecievedCars: "",
    noOfBookingsActivePerDay: "",
    noOfAvailableAndOccupiedDrivers: "",
    noOfCarsThatNeedMaintenanceAndUnderMaintenance: "",
  });
  useEffect(() => {
    const loadData = async () => {
      let todaysBookings = await bookingService.getCountOfTodayBookings();
      let pendingBookings =
        await bookingService.getCountOfTodayPendingBookings();

      let underAndNeedMaintenanceCars =
        await carService.countAllCarsUnderAndNeedMaintenance();
      let countAllCars = await carService.countAllCars();
      let availableDrivers = await driverService.countRegisteredDrivers();
      setDashboardData((prevState) => {
        return {
          ...dashboardData,
          totalBookingsOfTheDay: todaysBookings.data.data,
          noOfBookingsActivePerDay: pendingBookings.data.data,
          noOfCarsThatNeedMaintenanceAndUnderMaintenance:
            underAndNeedMaintenanceCars.data.data,
          noOfAvailableAndRecievedCars: countAllCars.data.data,
          noOfAvailableAndOccupiedDrivers: availableDrivers.data.data,
        };
      });
    };
    loadData();
  }, []);
  return (
    <Fragment>
      <section className={classes.dashboardContainer}>
        <div className={classes.container}>
          <Grid container spacing={0} style={{ width: "100%", height: "100%" }}>
            <Grid
              item
              xs={4}
              style={{
                borderRight: "2px solid black",
                borderBottom: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cards
                style={classesCards.card1}
                Value={"10"}
                Text={"Number Of Registered Users"}
                font={<FaUsers style={{ fontSize: "500%", color: "white" }} />}
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                borderRight: "2px solid black",
                borderBottom: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cards
                style={classesCards.card2}
                Value={dashboardData.totalBookingsOfTheDay}
                Text={"Total Bookings Of The Day"}
                font={
                  <FaBriefcase style={{ fontSize: "500%", color: "white" }} />
                }
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                borderBottom: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cards
                style={classesCards.card3}
                Value={dashboardData.noOfAvailableAndRecievedCars}
                Text={"Number of available and reserved cars"}
                font={
                  <AiFillCar style={{ fontSize: "500%", color: "white" }} />
                }
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                borderRight: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cards
                style={classesCards.card4}
                Value={dashboardData.noOfBookingsActivePerDay}
                Text={"Number of Bookings active per day"}
                font={
                  <VscVmActive style={{ fontSize: "500%", color: "white" }} />
                }
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                borderRight: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cards
                style={classesCards.card5}
                Value={dashboardData.noOfAvailableAndOccupiedDrivers}
                Text={"Number of available and occupied drivers"}
                font={
                  <RiTaxiFill style={{ fontSize: "500%", color: "white" }} />
                }
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Cards
                style={classesCards.card6}
                Value={
                  dashboardData.noOfCarsThatNeedMaintenanceAndUnderMaintenance
                }
                Text={"Number of cars that need and under maintenance"}
                font={<FaTools style={{ fontSize: "500%", color: "white" }} />}
              />
            </Grid>
          </Grid>
        </div>
      </section>
    </Fragment>
  );
};
