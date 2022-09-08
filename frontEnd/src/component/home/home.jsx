import React, { Fragment } from "react";
import classes from "./home.module.css";
import img from "../../assets/img/img.jpg";
import CommonButton from "../common/btn/index";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import NavBar from "../navBar/navBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  return (
    <Fragment>
      <section className={classes.homeContainer}>
        <img src={img} alt="" />
        <div className={classes.textContainer}>
          <div className={classes.mainTopic}>
            <h1>
              Easy Car Rental
              <br />
              <span>Service</span>
            </h1>
          </div>
          <p className={classes.paragraph}>
            Best Car Rental Rates. No Hidden Extra Charges
          </p>
          <div className={classes.btnContainer}>
            {window.location.pathname == "/customer" ? (
              <Link
                to="/viewCarsForCustomer"
                style={{
                  textDecoration: "none",
                  display: "flex",
                }}
                onClick={(e) => {
                  console.log("e");
                }}
              >
                <CommonButton
                  variant="outlined"
                  label="View Cars"
                  size="large"
                  style={{ color: "white", border: "1px solid white" }}
                />
              </Link>
            ) : (
              <Link
                to="/viewCars"
                style={{
                  textDecoration: "none",
                  display: "flex",
                }}
                onClick={(e) => {
                  console.log("e");
                }}
              >
                <CommonButton
                  variant="outlined"
                  label="View Cars"
                  size="large"
                  style={{ color: "white", border: "1px solid white" }}
                />
              </Link>
            )}
          </div>
          <div className={classes.socialLinksContainer}>
            <a
              href="https://www.facebook.com/punarjeewa.rashmitha"
              target="_blank"
            >
              <FaFacebookF className={classes.fab} />
            </a>
            <a href="https://twitter.com/Punarjeewa2001" target="_blank">
              <FaTwitter className={classes.fab} />
            </a>
            <a
              href="https://www.linkedin.com/in/punarjeewa-rashmitha-59a4a3223/"
              target="_blank"
            >
              <FaLinkedinIn className={classes.fab} />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
