import React from "react";
import web from "../components/image/pexels-caleb-oquendo-4889278.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name=" Grow your busniess with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
};
export default Home;
