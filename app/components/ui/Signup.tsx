import React from "react";

export default function Signup() {
  return (
    <div className="row mt-5 mb-5 align-items-center justify-content-center">
      <div className="col-12 col-md-12 text-center">
        <aside className="bg-primary bg-gradient rounded-4 p-4 p-sm-5">
          <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
            <div className="mb-4 mb-xl-0">
              {/* <div className="fs-3 fw-bold text-white">
                    New products, delivered to you.
                  </div> */}
              <div className="text-white-50">Contact us at hi@brandtv.ai</div>
            </div>
            <div className="ms-xl-4">
              {/* <div className="input-group mb-2">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email address..."
                      aria-label="Email address..."
                      aria-describedby="button-newsletter"
                    />
                    <button
                      className="btn btn-outline-light"
                      id="button-newsletter"
                      type="button"
                    >
                      Sign up
                    </button>
                  </div> */}
              <div className="small text-white-50">
                Brand TV Ltd. Copyright 2024
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
