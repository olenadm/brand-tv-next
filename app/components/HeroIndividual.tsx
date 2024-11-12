
import Signup from "./ui/Signup";
import Video from "./ui/Video";
const HeroIndividual: React.FC = () => {
  return (
    <>
      <header className="pt-4 pb-5 hero border-bottom" id='top'>
        <div className="container px-md-5">
          <div className="row gx-md-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-4 col-xxl-4  order-1">
              <div className="my-3 mt-lg-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder mb-2 text-primary">
                  Our company
                </h1>
                <p className="lead fw-normal text-primary-50 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  est, ut esse a labore aliquam beatae expedita. Blanditiis
                  impedit numquam libero molestiae et fugit cupiditate,
                  quibusdam expedita, maiores eaque quisquam.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-primary btn-md px-4 me-sm-3 text-white rounded-5"
                    href="#features"
                  >
                    Join <i className="bi bi-plus"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-md px-4 rounded-5" href="#!">
                    Learn More
                  </a>
                
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-8  d-xl-block text-center order-0 order-lg-2">
            <Video slug='videos/promvideo' name='Video' id={1}/>
            </div>
          </div>
          <Signup/>
        </div>
      </header>
    </>
  );
};

export default HeroIndividual;
