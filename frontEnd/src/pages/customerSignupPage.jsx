import React from "react";
import { CustomerSignup } from "../component/customerSignup/customerSignup";

export const CustomerSignupPage = (props) => {
  document.getElementById("mainContainer").style.height = "100%";
  return <CustomerSignup />;
};
