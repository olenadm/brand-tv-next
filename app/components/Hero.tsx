import Video from "./ui/Video";
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
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6  text-center  order-0 order-lg-2">
              <Video slug="promvideo" name="Video" id={1} />
            </div>
          </div>
        </div>
      </header>

      <Signup />
    </>
  );
};

export default Hero;
