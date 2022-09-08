import HomePage from "../pages/homePage";
import { Route, Routes, useLocation } from "react-router-dom";
import React, { Fragment, useCallback, useState } from "react";
import NavBar from "../component/navBar/navBar";
import LoginPage from "../pages/loginPage";
import { CustomerSignupPage } from "../pages/customerSignupPage";
import { AdminDashboardPage } from "../pages/adminDashboardPage";
import { ManageCarsPage } from "../pages/manageCarsPage";
import { CustomerInAdminPage } from "../pages/customerInAdminPage";
import { ManageDriversPage } from "../pages/manageDriversPage";
import { IncomePage } from "../pages/incomePage";
import { BookingRequestInAdminPage } from "../pages/bookingRequestInAdminPage";
import { BookingInAdminPage } from "../pages/bookingInAdminPage";
import { ViewAllBookingPage } from "../pages/viewAllBookingDetailsPage";
import { NotificationsPage } from "../pages/notificationsPage";
import { ViewCarsPage } from "../pages/viewCarsPage";
import { ViewMyBookingsPage } from "../pages/viewMyBookingsPage";
import { ViewMyAccount } from "../component/viewMyAccountInCustomer/viewMyAccount";
import { PlaceBookingRequestPage } from "../pages/placeBookingRequestPage";
import { CustomerNotificationsPage } from "../pages/customerNotificationsPage";
import { DriverSchedulePage } from "../pages/driverSchedulePage";
import { DriverAccountPage } from "../pages/driverAccountPage";
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
    "/customer",
    "/viewCarsForCustomer",
    "/viewMyBookings",
    "/viewMyAccount",
    "/placeBookingRequest",
    "/customerNotifications",
  ];

  const driverNavPaths = ["/driverSchedule", "/driverAccount"];

  const setNavBar = (data) => {
    console.log("data = " + data.navBtns[0].path);
    return <NavBar navBtnsList={data} />;
  };

  const location = useLocation();

  const checkNavPaths = () => {
    let mainContainer = document.getElementById("mainContainer");
    if (location.pathname == "/" || location.pathname == "/viewCars") {
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
              { path: "/customer", btn: "Home" },
              { path: "/viewCarsForCustomer", btn: "View Cars" },
              { path: "/viewMyBookings", btn: "View My Bookings" },
              { path: "/viewMyAccount", btn: "View My Account" },
              {
                path: "/placeBookingRequest",
                btn: "Place Booking Request",
              },
              {
                path: "/customerNotifications",
                btn: "Notifications",
              },
            ],
            style: { display: "flex" },
          });
        }
      }
      for (let i = 0; i < driverNavPaths.length; i++) {
        if (driverNavPaths[i] === location.pathname) {
          return setNavBar({
            navBtns: [
              { path: "/driverSchedule", btn: "Schedule" },
              { path: "/driverAccount", btn: "My Account" },
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

          <Route exact path="/customer" element={<HomePage />} />

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

          <Route exact path="/manageDrivers" element={<ManageDriversPage />} />
          <Route exact path="/income" element={<IncomePage />} />
          <Route
            exact
            path="/bookingRequest"
            element={<BookingRequestInAdminPage />}
          />
          <Route exact path="/booking" element={<BookingInAdminPage />} />

          <Route
            exact
            path="/viewAllBookings"
            element={<ViewAllBookingPage />}
          />

          <Route exact path="/notifications" element={<NotificationsPage />} />

          <Route
            exact
            path="/viewCarsForCustomer"
            element={<ViewCarsPage />}
          ></Route>

          <Route exact path="/viewCars" element={<ViewCarsPage />}></Route>

          <Route
            exact
            path="/viewMyBookings"
            element={<ViewMyBookingsPage />}
          ></Route>

          <Route
            exact
            path="/viewMyAccount"
            element={<ViewMyAccount />}
          ></Route>

          <Route
            exact
            path="/placeBookingRequest"
            element={<PlaceBookingRequestPage />}
          ></Route>

          <Route
            exact
            path="/customerNotifications"
            element={<CustomerNotificationsPage />}
          ></Route>

          <Route
            exact
            path="/driverSchedule"
            element={<DriverSchedulePage />}
          ></Route>

          <Route
            exact
            path="/driverAccount"
            element={<DriverAccountPage />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
