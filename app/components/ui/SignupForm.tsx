import React from "react";

export default function SignupForm() {
  return (
    <div className="row mt-5 mb-5 align-items-center justify-content-center">
      <div className="col-12 col-md-12 text-center">
        <aside className="bg-primary bg-gradient rounded-4 p-4 p-sm-5">
          <div
            className="row align-items-center justify-content-between 
         text-center text-xl-start"
          >
            <div className="col-sm-7">
              <div className="fs-3 fw-bold text-white">
                <h3>
                  Enter your email here to create your own FAN WALLET and we
                  will be in touch
                </h3>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="input-group mb-2">
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
              </div>
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
