import Image from "next/image";
import { Alert, AlertLink } from "react-bootstrap";
const Hero: React.FC = () => {
  return (
    <>
      <header className="py-4 bg-body-tertiary h-100">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start h-100">
                <h1 className="display-5 fw-bolder mb-2">
                  Lorem ipsum headline
                </h1>
                <p className="lead fw-normal text-primary-50 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  est, ut esse a labore aliquam beatae expedita. Blanditiis
                  impedit numquam libero molestiae et fugit cupiditate,
                  quibusdam expedita, maiores eaque quisquam.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3 text-white"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a className="btn btn-outline-primary btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <Image
                className="img-fluid rounded-5 my-5"
                src="https://dummyimage.com/600x300/ccc/fff"
                alt="..."
                width="600"
                height="300"
                priority
              />
            </div>
          </div>
        </div>
      </header>
      <section className="border-top border-bottom">
        <div className="container px-5 py-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-6 col-md-3 text-center">
              <Image
                className="img-fluid mx-auto mb-3 mb-md-0"
                src="/transistor-logo-gray-900.svg"
                alt="..."
                width="158"
                height="48"
              />
            </div>
            <div className="col-6 col-md-3 text-center">
              <Image
                className="img-fluid mx-auto  mb-3 mb-md-0"
                src="/savvycal-logo-gray-900.svg"
                alt="..."
                width="158"
                height="48"
              />
            </div>
            <div className="col-6 col-md-3 text-center">
              <Image
                className="img-fluid mx-auto  mb-3 mb-md-0"
                src="/statamic-logo-gray-900.svg"
                alt="..."
                width="158"
                height="48"
              />
            </div>
            <div className="col-6 col-md-3 text-center">
              <Image
                className="img-fluid mx-auto  mb-3 mb-md-0"
                src="/tuple-logo-gray-900.svg"
                alt="..."
                width="158"
                height="48"
              />
            </div>
          </div>
          <div className="row  gx-5 align-items-center justify-content-center">
            <div className="col text-center">
              <Alert variant="light" className="mt-5 d-inline-block">
                Over 2500 companies use our tools to better their business.{" "}
                <AlertLink href="/" className="align-items-center">
                  Read more <i className="bi bi-arrow-right"></i>
                </AlertLink>
              </Alert>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light border-bottom">
        <div className="container px-5 py-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">
                A better way to start sharing your media.
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-collection"></i>
                  </div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-building"></i>
                  </div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2"></i>
                  </div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2"></i>
                  </div>
                  <h2 className="h5">Featured title</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the
                    heading. Here is just a bit more text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-5 py-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-12 col-md-12 text-center">
              <aside className="bg-primary bg-gradient rounded-4 p-4 p-sm-5">
                <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                  <div className="mb-4 mb-xl-0">
                    <div className="fs-3 fw-bold text-white">
                      New products, delivered to you.
                    </div>
                    <div className="text-white-50">
                      Sign up for our newsletter for the latest updates.
                    </div>
                  </div>
                  <div className="ms-xl-4">
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
                      We care about privacy, and will never share your data.
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
