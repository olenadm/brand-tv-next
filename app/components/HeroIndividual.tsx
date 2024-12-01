import { videos } from "../api/categories/data";
import Ratio from "react-bootstrap/Ratio";
import SignupForm from "./ui/SignupForm";
import Link from "next/link";
import Image from "next/image";

const HeroIndividual: React.FC = () => {
  const video = videos.find((vid) => vid.id === "1");

  return (
    <>
      <header className="pt-4 pb-5 hero border-bottom" id="top">
        <div className="container">
          <div className="row">
            <div className="col text-end">
              <span className="me-2 text-50">Powered by</span>
              <Link href="/">
                <Image
                  src="/brand-tv-banner.jpeg"
                  alt="Logo"
                  className="float-end d-block"
                  width={90}
                  height={30}
                />
              </Link>
            </div>
          </div>
          <div className=" row align-items-center justify-content-between">
            <div className="col-sm-6 col-md-12 col-lg-6">
              <h2 className="mb-4 text-primary">
                Welcome to Replay Sports Cards new Community Channal powered by
                BrandTV!
              </h2>
              <p className="lead fw-normal text-primary-50 mb-4">
                Make sure you sign up to get our latest promotions and offers.
                And take part to receive exclusive community rewards and
                discounts,
              </p>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
              {" "}
              <SignupForm />
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12  text-center">
              <Ratio aspectRatio={1 / 2}>
                <iframe src={`${video?.url}`} width="100%" allowFullScreen />
              </Ratio>
            </div>
          </div>

          {/*<div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-4 col-xxl-4  order-1">
              <div className="my-3 mt-lg-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder mb-2 text-primary">
                  Our company
                </h1>
                <p className="lead fw-normal text-primary-50 mb-4">
                  Welcome to Replay Sports Cards new Community Channale powered by BrandTV.
                </p>
                <p className="lead fw-normal text-primary-50 mb-4">
                 Make sure you sign up to get our latest promotions and offers. 
                 And take part to receive exclusive community rewards and discounts,
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-primary btn-md px-4 me-sm-3 text-white rounded-5"
                    href="#features"
                  >
                    Sign Up <i className="bi bi-plus"></i>
                  </a>
                
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-8  d-xl-block text-center order-0 order-lg-2">
              <Ratio aspectRatio={1 / 2}>
                <iframe src={`${video?.url}`} width="100%" allowFullScreen />
              </Ratio>
            </div>
          </div>*/}
        </div>
      </header>
    </>
  );
};

export default HeroIndividual;
