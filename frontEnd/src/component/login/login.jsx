import React, { Fragment, useEffect, useState } from "react";
import classes from "./login.module.css";
import logo1 from "../../assets/shapes/small icon-01.png";
import logo2 from "../../assets/shapes/small icon-02.png";
import logo3 from "../../assets/shapes/small icon-03.png";
import logo4 from "../../assets/shapes/small icon-04.png";
import logo5 from "../../assets/shapes/small icon-05.png";
import logo6 from "../../assets/shapes/small icon-06.png";
import logo7 from "../../assets/shapes/small icon-07.png";
import logo8 from "../../assets/shapes/small icon-08.png";
import logo9 from "../../assets/shapes/small icon-09.png";
import logo10 from "../../assets/shapes/small icon-10.png";
import logo11 from "../../assets/shapes/small icon-11.png";
import logo12 from "../../assets/shapes/small icon-12.png";
import logo13 from "../../assets/shapes/small icon-13.png";
import logo14 from "../../assets/shapes/small icon-14.png";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Grid from "@mui/material/Grid";
import CommonButton from "../common/btn/index";
import { Typography } from "@material-ui/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import customerService from "../../services/customerService/customerService";
import DriverService from "../../services/driverService/driverService";
import AdminService from "../../services/adminService/adminService";

import Context from "../../store/auth-context";
import { cusNicStore } from "../../store/cusNicStore";

const Login = (props) => {
  const imgArr = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo12,
    logo13,
    logo14,
    logo4,
    logo5,
    logo12,
    logo13,
    logo5,
  ];
  let count = 0;
  const [loginObj, setLoginObj] = useState({
    userName: "",
    password: "",
  });
  let navigate = useNavigate();
  const checkLogin = async () => {
    if (loginObj.userName != "" && loginObj.password != "") {
      let responseCustomer = await customerService.searchCustomerForLogin(
        loginObj.userName,
        loginObj.password
      );

      let responseCustomerObj =
        await customerService.searchCustomerByEmailAndPassword(
          loginObj.userName,
          loginObj.password
        );

      let responseDriver = await DriverService.searchDrivers(
        loginObj.userName,
        loginObj.password
      );
      let responseAdmin = await AdminService.searchAdmins(
        loginObj.userName,
        loginObj.password
      );

      console.log("working = " + responseCustomer.data.data);
      if (responseCustomer.data.data == true) {
        cusNicStore.cusNic = responseCustomerObj.data.data.nic;
        return "customer";
      } else if (responseDriver.data.data == true) {
        return "driver";
      } else if (responseAdmin.data.data == true) {
        return "admin";
      }
    } else {
      alert("Login Unsuccessful");
    }
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/login") {
      document.getElementById("mainContainer").style.height = "100%";
    }
  });
  return (
    <div className={classes.loginContainer}>
      {imgArr.map((e) => {
        count += 1;
        return (
          <div key={count}>
            <img src={e} alt="" />
          </div>
        );
      })}
      {(count = 0)}

      <div className={classes.container}>
        <Grid
          container
          spacing={1}
          style={{ position: "relative", width: "90%", height: "80%" }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" component="h3">
              WebPos
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ height: "50%" }}>
            <ValidatorForm style={{ width: "100%", height: "90%" }}>
              <Grid
                item
                xs={12}
                md={12}
                sm={12}
                lg={12}
                style={{ height: "50%", position: "relative" }}
              >
                <TextValidator
                  label="User Name"
                  onChange={(e) => {
                    setLoginObj((prevState) => {
                      return {
                        ...loginObj,
                        userName: e.target.value,
                      };
                    });
                  }}
                  name="userName"
                  size="small"
                  style={{
                    position: "absolute",
                    boxShadow: "0 0px 10px -5px black",
                    width: "60%",
                    height: "50%",
                    display: "flex",
                    inset: "40% 0 0 0",
                    margin: "auto",
                  }}
                  value={loginObj.userName}
                  validators={["required"]}
                  errorMessages={[
                    "this field is required",
                    "User Name is not valid",
                  ]}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ height: "50%", position: "relative" }}
              >
                <TextValidator
                  label="Password"
                  onChange={(e) => {
                    setLoginObj((prevState) => {
                      return {
                        ...loginObj,
                        password: e.target.value,
                      };
                    });
                  }}
                  name="password"
                  size="small"
                  style={{
                    position: "absolute",
                    boxShadow: "0 0px 10px -5px black",
                    width: "60%",
                    height: "50%",
                    display: "flex",
                    inset: "10% 0 0 0",
                    margin: "auto",
                  }}
                  value={loginObj.password}
                  validators={["required"]}
                  errorMessages={[
                    "this field is required",
                    "Password is not valid",
                  ]}
                />
              </Grid>
            </ValidatorForm>
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              position: "relative",
              height: "15%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Link
              to="/customerSignup"
              style={{
                textDecoration: "none",
                width: "30%",
                height: "80%",
                display: "flex",
              }}
            >
              <CommonButton
                variant={"outlined"}
                label={"Sign Up"}
                size={"large"}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  boxShadow: "0 0px 10px -5px black",
                }}
                color={"success"}
              />
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "15%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <CommonButton
              variant={"outlined"}
              label={"Login"}
              size={"large"}
              style={{
                textDecoration: "none",
                width: "30%",
                height: "80%",
                display: "flex",
                boxShadow: "0 0px 10px -5px black",
              }}
              color={"success"}
              onClick={async (e) => {
                let check = undefined;
                await checkLogin().then(async (res) => {
                  check = res;
                  if (check === "customer") {
                    console.log("Check = " + check);
                    navigate("/customer");
                  } else if (check === "admin") {
                    console.log("Check = " + check);
                    navigate("/adminDashboard");
                  } else if (check === "driver") {
                    console.log("Check = " + check);
                    navigate("/driverSchedule");
                  }
                });
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Login;
