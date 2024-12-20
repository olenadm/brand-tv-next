import React from "react";
import Image from "next/image";

export default function CreateAndShare() {
  return (
    <aside className="bg-primary-gradient">
      <div
        className="p-4 p-sm-5 p-lg-3 p-xl-4"
        style={{
          backgroundImage: 'url("/contact-bg.png")!important',
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container position-relative">
          <div className="row mt-3 mb-5 align-items-center justify-content-center">
            <div className="col-12 col-md-12 text-center">
              <div
                className="row gx-lg-5 align-items-center justify-content-between 
         text-center text-lg-start "
              >
                <div className="col-sm-7">
                  <div className="text-white">
                    <h2 className="mb-4 fs-1">
                      Empower your campaigns with <br /> AI-driven creativity
                    </h2>
                    <p className="fs-4 mb-2">
                      Generate personalized content, boost engagement, and
                      transform your strategy in minutes.
                    </p>
                    <p className="lead">Start your journey today!</p>
                    <a
                      className="btn btn-lg btn-dark icon-link icon-link-hover"
                      href="#"
                    >
                      Try it Now <i className="bi bi-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="position-absolute top-0 end-0 me-n6 mb-n5 d-none d-sm-block">
                    <Image
                      src="/rocket-02.png"
                      alt="Promo"
                      className="img-fluid rocket mx-auto"
                      width={360}
                      height={360}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
