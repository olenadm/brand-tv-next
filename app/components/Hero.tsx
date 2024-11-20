import { Ratio } from "react-bootstrap";
import Signup from "./ui/Signup";
const Hero: React.FC = () => {
  return (
    <>
      <header className="py-4 bg-body-tertiary h-100 hero rounded-bottom-5">
        <div className="container px-md-5">
          <div className="row gx-md-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6 order-1">
              <div className="my-3 my-lg-5 text-center text-xl-start h-100">
                <h1 className="display-5 fw-bolder mb-2">
                  Our mission
                </h1>
                <p className="lead fw-normal text-primary-50 mb-4">
                Brand TV brings your video and fans together in one place, to build a vibrant community, where followers become fans and fans become advocates. 
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  {/* <a
                    className="btn btn-primary btn-lg px-4 me-sm-3 text-white"
                    href="#features"
                  >
                    Get Started
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6  text-center  order-0 order-lg-2">
              <Ratio aspectRatio={1 / 2}>
                <iframe
                  src="https://player.vimeo.com/video/1030054596?h=6943a233d4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="100%"
                  height="400px"
                  allowFullScreen
                />
              </Ratio>
            </div>
          </div>
        </div>
      </header>

      {/* <Signup /> */}
    </>
  );
};

export default Hero;
