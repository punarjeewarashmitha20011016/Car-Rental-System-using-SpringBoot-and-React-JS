import { Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import CarService from "../../services/carService/carService";
import { carRegNoStore } from "../../store/carRegNoStore";
import { ViewBlock } from "./viewBlock";
import { useNavigate } from "react-router-dom";

import classes from "./viewCars.module.css";
export const ViewCars = (props) => {
  const [view, setView] = useState([]);
  const [check, setCheck] = useState(false);
  const [leftRightNav, setLeftRightNav] = useState({
    left: 0,
  });
  let navigate = useNavigate();
  const fetchCarsForViews = () => {
    console.log("aa1 =", view.length);
    fetch();
  };
  const setEventToBtn = (e) => {
    carRegNoStore.carRegNo = e.data.c_RegNo;
    navigate("/placeBookingRequest");
  };
  useEffect(() => {
    check == true && setCheck(false);
  }, []);
  const fetch = async () => {
    let res = await CarService.fetchCars();
    console.log("res = ", res.data.data);
    let checkForBtnDisable = false;
    view.splice(0, view.length);
    setCheck(false);
    view.length != null &&
      res.data.data.forEach((e) => {
        console.log("e.carBookedOrNotStatus = ", e);
        if (
          e.carBookedOrNotStatus === "Not Booked" &&
          e.maintenanceStatus === "No Maintenance Required"
        ) {
          checkForBtnDisable = false;
        } else if (
          e.carBookedOrNotStatus === "Not Booked" &&
          e.maintenanceStatus === "Under Maintenance"
        ) {
          checkForBtnDisable = true;
        } else if (
          e.carBookedOrNotStatus === "Booked" &&
          e.maintenanceStatus === "No Maintenance Required"
        ) {
          checkForBtnDisable = true;
        } else if (
          e.carBookedOrNotStatus === "Booked" &&
          e.maintenanceStatus === "Under Maintenance"
        ) {
          checkForBtnDisable = true;
        }
        let images = e.images;
        let heading = e.images.firstImage.split("/")[1].split(".")[0];
        view.push(
          <ViewBlock
            style={{
              position: "relative",
              height: "80%",
              width: "250px",
              marginLeft: "100px",
              display: "flex",
              boxShadow: "0 0px 8px 0px",
            }}
            imagesArr={[
              images.firstImage,
              images.secondImage,
              images.thirdImage,
              images.fourthImage,
            ]}
            heading={heading}
            checkForButtonDisable={checkForBtnDisable}
            setEventToBtn={setEventToBtn}
            carObj={e}
          />
        );
      });
    view.length != 0 && setCheck(true);
  };
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <Grid
          container
          spacing={0}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            position: "relative",
          }}
        >
          <Grid
            item
            xs={1}
            style={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdOutlineNavigateBefore
              style={{ fontSize: "4em", cursor: "pointer" }}
              onClick={(e) => {
                console.log(leftRightNav);
                let leftNav = leftRightNav.left + 10;
                setLeftRightNav((prevState) => {
                  return {
                    ...leftRightNav,
                    left: leftNav,
                  };
                });
              }}
            />
          </Grid>
          <Grid
            item
            container
            xs={10}
            style={{
              height: "80%",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "500%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                left: leftRightNav.left + "px",
              }}
              id={"carImgContainer"}
            >
              {check === false
                ? fetchCarsForViews()
                : view.map((e) => {
                    return e;
                  })}
            </div>
          </Grid>
          <Grid
            item
            xs={1}
            style={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdOutlineNavigateNext
              style={{ fontSize: "4em", cursor: "pointer" }}
              onClick={(e) => {
                console.log(leftRightNav.right);
                let rightNav = leftRightNav.left - 10;
                setLeftRightNav((prevState) => {
                  return {
                    ...leftRightNav,
                    left: rightNav,
                  };
                });
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
