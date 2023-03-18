import React from "react";

const Navebar = () => {
  return (
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                Habib Technical
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="/navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ms-auto mb-2 ml-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/About">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Service">
                      Service
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navebar;
