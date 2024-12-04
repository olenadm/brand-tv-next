import React from "react";
import Image from "next/image";

export default function CreateAndShare() {
  return (
    <aside
      className="bg-primary bg-gradient  p-4 p-sm-5 p-lg-3 p-xl-4"
      style={{
        backgroundImage: 'url("/contact-bg.png")!important',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row mt-3 mb-5 align-items-center justify-content-center">
          <div className="col-12 col-md-12 text-center">
            <div
              className="row gx-lg-5 align-items-center justify-content-between 
         text-center text-lg-start"
            >
              <div className="col-sm-4 col-md-12 col-lg-4">
                <div className="fs-3 fw-bold text-white">
                  <h3 className="mb-3">Subscribe here to win more content</h3>

                  <div className="input-group mb-3">
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
              <div className="col-sm-8 col-md-12 col-lg-8 text-center">
                <Image
                  src="/promo.png"
                  alt="Promo"
                  className="img-fluid mb-3 rounded-3 mx-auto"
                  width={700}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
