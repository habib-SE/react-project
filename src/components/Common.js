import React, { Component } from 'react'


export default class Common extends Component {
 
  render() {
    return (
      <div>
         <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 max-auto">
              <div className="row">
                <div className="col-lg-5 pt-5 m-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {this.props.name}
                    <strong className="brand-name"> Habib Technical</strong>
                  </h1>
                  <h2>We are the team of telented develpoer making website </h2>
                  <div className="btn mt-3">
                    <a className="btn btn-get-started" href={this.props.visit}>
                      {this.props.btname}
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 m-4 p-5 order-1 order-lg-2 header-image d-flex">
                  <img src={this.props.imgsrc} className="img-fluid animated" alt="home photose" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
