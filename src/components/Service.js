import React, { Component } from "react";
import Card from "./Card";

export default class Service extends Component {
  render() {
    return (
      <div>
        <div className="text-center mt-4 crd-group">
         <h1>Our Services</h1> 
        </div>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
