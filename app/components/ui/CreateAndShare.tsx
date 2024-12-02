import React from "react";
import Image from "next/image";

export default function CreateAndShare() {
  return (
    <div className="row mt-5 mb-5 align-items-center justify-content-center">
      <div className="col-12 col-md-12 text-center">
        <aside className="bg-primary bg-gradient rounded-4 p-4 p-sm-5 p-lg-3 p-xl-4">
          <div
            className="row gx-lg-5 align-items-center justify-content-between 
         text-center text-lg-start"
          >
            <div className="col-sm-6 col-md-12 col-lg-6">
              <div className="fs-3 fw-bold text-white">
                <h3>Create and share more content like this to win rewards</h3>

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
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
              <div className="small text-white-50">
                <Image
                  src="/promo.PNG"
                  alt="Promo"
                  className="img-fluid mb-3"
                  width={700}
                  height={350}
                />
                Brand TV Ltd. Copyright 2024
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
