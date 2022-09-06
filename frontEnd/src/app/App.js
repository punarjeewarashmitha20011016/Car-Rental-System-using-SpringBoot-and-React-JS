import HomePage from "../pages/homePage";
import { Route, Routes, useLocation } from "react-router-dom";
import React, { Fragment, useCallback, useState } from "react";
import NavBar from "../component/navBar/navBar";
import LoginPage from "../pages/loginPage";
import { CustomerSignupPage } from "../pages/customerSignupPage";
import { AdminDashboardPage } from "../pages/adminDashboardPage";
import { ManageCarsPage } from "../pages/manageCarsPage";
import { CustomerInAdminPage } from "../pages/customerInAdminPage";

function App() {
  const adminNavPaths = [
    "/adminDashboard",
    "/manageCars",
    "/customerInAdmin",
    "/manageDrivers",
    "/income",
    "/bookingRequest",
    "/booking",
    "/viewAllBookings",
    "/notifications",
  ];

  const customerNavPaths = [
    "/home",
    "/viewCars",
    "/viewMyBookings",
    "/viewMyAccount",
    "/placeBookingRequest",
  ];

  const setNavBar = (data) => {
    console.log("data = " + data.navBtns[0].path);
    return <NavBar navBtnsList={data} />;
  };

  const location = useLocation();

  const checkNavPaths = () => {
    let mainContainer = document.getElementById("mainContainer");
    if (location.pathname == "/") {
      if (mainContainer != null) {
        mainContainer.style.height = "92%";
      }
      return setNavBar({
        navBtns: [{ path: "/", btn: "Home" }],
        style: { display: "flex" },
      });
    } else {
      if (mainContainer != null) {
        mainContainer.style.height = "92%";
      }
      for (let i = 0; i < adminNavPaths.length; i++) {
        if (adminNavPaths[i] == location.pathname) {
          return setNavBar({
            navBtns: [
              { path: "/adminDashboard", btn: "Home" },
              { path: "/manageCars", btn: "Car" },
              { path: "/customerInAdmin", btn: "Customer" },
              { path: "/manageDrivers", btn: "Driver" },
              { path: "/income", btn: "Income" },
              { path: "/bookingRequest", btn: "Booking Request" },
              { path: "/booking", btn: "Booking" },
              { path: "/viewAllBookings", btn: "View All Bookings" },
              { path: "/notifications", btn: "Notifications" },
            ],
            style: { display: "flex" },
          });
        }
      }
      for (let i = 0; i < customerNavPaths.length; i++) {
        if (customerNavPaths[i] == location.pathname) {
          return setNavBar({
            navBtns: [
              { path: "/home", btn: "Home" },
              { path: "/viewCars", btn: "View Cars" },
              { path: "/viewMyBookings", btn: "View My Bookings" },
              { path: "/viewMyAccount", btn: "View My Account" },
              {
                path: "/placeBookingRequest",
                btn: "Place Booking Request",
              },
            ],
            style: { display: "flex" },
          });
        }
      }
    }
  };
  return (
    <div
      style={{ position: "relative", width: "100vw", height: "100vh" }}
      id="mainRootContainer"
    >
      {checkNavPaths()}

      <main
        style={{ position: "relative", height: "92%", width: "100%" }}
        id="mainContainer"
      >
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/customerSignup"
            element={<CustomerSignupPage />}
          />
          <Route
            exact
            path="/adminDashboard"
            element={<AdminDashboardPage />}
          />
          <Route exact path="/manageCars" element={<ManageCarsPage />} />
          <Route
            exact
            path="/customerInAdmin"
            element={<CustomerInAdminPage />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
