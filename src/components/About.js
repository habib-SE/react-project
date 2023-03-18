import React, { Component } from "react";
import web from "../components/image/pexels-caleb-oquendo-4889278.jpg"
import Common from "./Common";
export default class About extends Component {
  render() {
    return (
      <div>
        <Common
          name="Welcome to About Page"
          imgsrc={web}
          visit="/contact"
          btname="Contact Now"
        />
      </div>
    );
  }
}
