import { videos } from "../api/categories/data";
import Ratio from "react-bootstrap/Ratio";

const HeroIndividual = (props: { handleLogin: () => void; login: boolean }) => {
  const video = videos.find((vid) => vid.id === "1");
  //const { handleLogin, login } = props;

  return (
    <>
      <header
        className="py-3 py-md-5 py-lg-5 hero border-bottom h-100"
        id="top"
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-sm-6">
              <h1 className="mt-3 mb-4 fw-light lh-2">
                Join the Replay Sports Channel and receive
                <p className="fw-bold display-2">
                  Fan <span className="text-primary">Benefits!</span>
                </p>
              </h1>
              <p className="lead mb-0">
                Let your brand shine with our innovative community.
              </p>
              <ul className="list-inline d-flex flex-wrap gap-2 gap-xl-3 mt-3 mt-lg-4">
                <li className="list-inline-item heading-color">
                  {" "}
                  <i className="bi bi-check-circle text-success me-1"></i>
                  Flexible solutions
                </li>
                <li className="list-inline-item heading-color">
                  {" "}
                  <i className="bi bi-check-circle text-success me-1"></i>
                  Great involvement
                </li>
                <li className="list-inline-item heading-color">
                  {" "}
                  <i className="bi bi-check-circle text-primary me-1"></i>
                  Community and benefits
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <div className="p-3 p-md-4 rounded-4 blurred bg-transp border  position-relative">
                <Ratio aspectRatio="16x9">
                  <iframe
                    src={`${video?.url}`}
                    width="100%"
                    height="330"
                    allowFullScreen
                    className="rounded-4"
                  />
                </Ratio>

                <div className="position-absolute top-0 start-0 mt-5 ms-md-n4 d-none d-md-block">
                  <div className="mt-4 bg-body shadow rounded-pill d-inline-flex align-items-center ps-2 pe-4 py-2">
                    <div className="avatar rounded-circle flex-shrink-0 bg-primary text-white text-center d-flex  align-items-center justify-content-center">
                      <i className="bi bi-rocket-takeoff"></i>
                    </div>
                    <div className="ps-3">
                      <span className="small heading-color fw-bold">
                        Share our videos
                      </span>
                      <p className="small mb-0">🔥 Lorem ipsum!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroIndividual;
