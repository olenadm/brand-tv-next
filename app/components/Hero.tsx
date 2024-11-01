import Image from "next/image";
import { Alert } from "react-bootstrap";
const Hero: React.FC = () => {
  return (
    <>
      <header className="py-5 bg-body-tertiary h-100">
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
                  <a className="btn btn-outline-light btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <Image
                className="img-fluid rounded-5 my-5"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
                width="600"
                height="400"
                priority
              />
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container px-5 py-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-3">
              <Image
                className="img-fluid"
                src="/transistor-logo-gray-900.svg"
                alt="..."
                width="158"
                height="48"
              />
            </div>
            <div className="col-3">
              <Image
                className="img-fluid"
                src="/savvycal-logo-gray-900.svg"
                alt="..."
                width="158"
                height="48"
              />
            </div>
            <div className="col-3">
              <Image
                className="img-fluid"
                src="/statamic-logo-gray-900.svg"
                alt="..."
                width="158"
                height="48"
              />
            </div>
            <div className="col-3">
              <Image
                className="img-fluid"
                src="/tuple-logo-gray-900.svg"
                alt="..."
                width="158"
                height="48"
              />
            </div>
          </div>
          <div className="row  gx-5 align-items-center justify-content-center">
            <div className="col text-center">
                <Alert variant="light" className='mt-5 d-inline-block'>Over 2500 companies use our tools to better their business.</Alert>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
