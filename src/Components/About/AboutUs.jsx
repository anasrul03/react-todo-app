import React from "react";
import { useLocation, useParams } from "react-router-dom";

function AboutUs() {
  const params = useParams();
  console.log(params, "params");
  return (
    <div>
      <h1>AboutUs</h1>;
    </div>
  );
}

export default AboutUs;
