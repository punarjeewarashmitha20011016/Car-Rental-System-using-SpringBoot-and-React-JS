import CommonButton from "../common/btn";
import React from "react";
import classes from "./navBar.module.css";
import { FaUserPlus } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoNotificationsSharp } from "react-icons/io5";

const NavBar = (props) => {
  const liStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
    marginLeft: "1%",
    marginRight: "1%",
  };
  let btnsList = undefined;
  console.log("navBtnsList = " + props.navBtnsList.navBtns[0].btn);

  if (props.navBtnsList.navBtns.length != 0) {
    btnsList = props.navBtnsList.navBtns;
    console.log("btnList", btnsList);
  }

  const setNavBtnsToNavBar = () => {
    console.log("check 1");
    if (btnsList.length != 0) {
      console.log("Btn List = " + btnsList.length);
      let arr = new Array();
      btnsList.map((e) => {
        console.log(e);
        if (btnsList.length == 1) {
          if (e.btn === "Home") {
            console.log("Home Check");
            arr.push(
              <Link to={`${e.path}`} style={liStyles}>
                <li style={{ display: "flex", color: "black" }} key={e.path}>
                  {e.btn}
                </li>
              </Link>
            );
          }
        } else {
          if (e.btn === "Notifications") {
            arr.push(
              <Link to={`/${e.path}`} style={liStyles}>
                <li style={{ display: "flex", color: "black" }} key={e.path}>
                  {e.btn}
                </li>
                <IoNotificationsSharp
                  style={{ color: "black", fontSize: "130%", marginLeft: "2%" }}
                />
              </Link>
            );
          } else {
            arr.push(
              <Link to={`${e.path}`} style={liStyles}>
                <li style={{ display: "flex", color: "black" }} key={e.path}>
                  {e.btn}
                </li>
              </Link>
            );
          }
        }
      });
      console.log("arr = ", arr);
      return arr;
    }
  };
  return (
    <header
      className={classes.navBarContainer}
      style={props.navBtnsList.navBtns.style}
      id="navBar"
    >
      <div className={classes.mainTopicContainer}>
        <h2 style={{ fontWeight: "initial" }}>Easy Car Rentals</h2>
      </div>
      <nav id="nav">
        {setNavBtnsToNavBar().map((e) => {
          console.log(e);
          return e;
        })}
      </nav>
      <div className={classes.loginAndSigninBtnContainer}>
        <Link to={"/signup"}>
          <CommonButton className={classes.CommonButton}>
            <FaUserPlus className={classes.fa} />
          </CommonButton>
        </Link>

        <Link
          to={"/login"}
          onClick={(e) => {
            document.getElementById("navBar").style.display = "none";
            document.getElementById("mainContainer").style.height = "100%";
          }}
        >
          <CommonButton className={classes.CommonButton}>
            <MdLogout className={classes.fa} />
          </CommonButton>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
