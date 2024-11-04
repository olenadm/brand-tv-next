import Image from "next/image";
const HeroIndividual: React.FC = () => {
  return (
    <>
      <header className="py-4 bg-body-tertiary" id='top'>
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-4 col-xl-4 col-xxl-4">
              <div className="my-5 text-center text-xl-start h-100">
                <h1 className="display-5 fw-bolder mb-2">
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
                    className="btn btn-primary btn-lg px-4 me-sm-3 text-white"
                    href="#features"
                  >
                    Join <i className="bi bi-plus"></i>
                  </a>
                
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-8  d-xl-block text-center">
              <Image
                className="img-fluid rounded-5 my-5  float-end w-100"
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
    </>
  );
};

export default HeroIndividual;
