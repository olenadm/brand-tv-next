import React from "react";

export default function JoinOurComunity() {
  return (
    <section className="bg-secondary py-5 text-center text-md-start">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-8 mb-2">
            <h2 className="text-dark lh-md fs-3">
              Create an account to access exclusive features, save your
              preferences, and personalize your experience. 
            </h2>
            <h2 className='fw-bold fs-1'>Fast, easy, and  <span className='text-primary'>free !</span></h2>
          </div>
          <div className="col-sm-4">
            <a
              className="btn btn-lg btn-dark icon-link icon-link-hover w-100"
              href="#"
            > <i className="bi bi-node-plus me-3 mb-2"></i>
              Join Our Community
             
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
