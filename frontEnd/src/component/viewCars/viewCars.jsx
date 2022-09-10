import { Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import CarService from "../../services/carService/carService";
import { ViewBlock } from "./viewBlock";

import classes from "./viewCars.module.css";
export const ViewCars = (props) => {
  const [view, setView] = useState([]);
  const [check, setCheck] = useState(false);
  const fetchCarsForViews = () => {
    fetch();
    console.log("aa1 =", view.length);
  };
  const fetch = async () => {
    let res = await CarService.fetchCars();
    console.log("res = ", res.data.data);
    view.length == 0 &&
      res.data.data.forEach((e) => {
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
                let container = document.getElementById("carImgContainer");
                console.log("container  = ", container);
                container.style.left = "10%";
              }}
            />
          </Grid>
          <Grid
            item
            container
            xs={10}
            style={{
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              position: "relative",
              overflow: "hidden",
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
                let container = document.getElementById("carImgContainer");
                console.log("container  = ", container);
                container.style.right = "10%";
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
