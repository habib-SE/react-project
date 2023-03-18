import React, { Component } from "react";
import web from "../components/image/photo.jpg"
export default class Card extends Component {
  render() {
    return (
      <>
        <div className="row row-col-10 row-col-md-3 m-3 ms-5 me-5 d-flex">
          <div className="col">
            <div className="card h-100">
              <img src={web} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a className="btn btn-primary" href="/" role="button">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={web} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.</p>
                  <a className="btn btn-primary" href="/" role="button">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={web} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a className="btn btn-primary" href="/" role="button">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={web} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a className="btn btn-primary" href="/" role="button">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
