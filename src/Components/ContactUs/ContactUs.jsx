import React from "react";
import { useLocation } from "react-router-dom";

function ContactUs() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>ContactUs</h1>
    </div>
  );
}

export default ContactUs;
