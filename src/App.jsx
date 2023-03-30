import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import AppWrapper from "./Components/Common/AppWrapper";
import Layout from "./Components/Common/Layout";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/About/AboutUs";
import Nav from "./Components/Nav/Nav";
import { useEffect, useState } from "react";
import Login from "./Components/Login/Login";

function App() {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [name, setName] = useState("");

  // console.log(location, "location");
  console.log(params.get("name"));

  useEffect(() => {
    setName(params.get("name") || "");
  }, [params]);

  // useEffect(() => {
  //   if (location.pathname === "/about") {
  //     navigate("/login");
  //   }
  // }, [location, navigate]);

  return (
    <AppWrapper>
      <Layout>
        {name}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/:user_id/:staff" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </AppWrapper>
  );
}

export default App;
