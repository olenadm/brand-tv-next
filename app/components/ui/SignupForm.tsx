import React from "react";

const SignupForm = (props: {
  handleShow: () => void;
 
}) => {
  const { handleShow } = props;
  return (
    <div className="row mt-5 mb-5 align-items-center justify-content-center">
      <div className="col-12 col-md-12 text-center">
        <aside className="bg-primary bg-gradient rounded-4 p-4 p-sm-5 p-lg-3 p-xl-4">
          <div
            className="row align-items-center justify-content-between 
         text-center text-lg-start"
          >
            <div className="col-sm-7 col-md-12 col-lg-7">
              <div className="fs-3 fw-bold text-white">
                <h5>
                  Enter your email here to create your own FAN WALLET and we
                  will be in touch
                </h5>
              </div>
            </div>
            <div className="col-sm-5 col-md-12 col-lg-5">
              <div className="input-group mb-2">
                {/* <input
                  className="form-control"
                  type="text"
                  placeholder="Email address..."
                  aria-label="Email address..."
                  aria-describedby="button-newsletter"
                />*/}
                <button
                  className="btn btn-outline-light w-100"
                  id="button-newsletter"
                  type="button"
                  onClick={handleShow}
                >
                 <i className="bi bi-plus me-2"></i> Sign Up
                </button>
              </div>
             
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default SignupForm;
