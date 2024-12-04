import React from "react";

const TopLoginForm = (props: { handleLogin: () => void }) => {
  const { handleLogin } = props;
  return (
    <div className="row my-md-5 align-items-center justify-content-center" id="login">
      <div className="col-12 col-md-12 text-center">
        <aside className="bg-light  shadow-sm bg-gradient rounded-4 p-4 p-sm-5 p-lg-3 p-xl-4">
          <div
            className="row align-items-center justify-content-between 
         text-center"
          >
            <div className="col-sm-12">
              <button className="btn  btn-outline-dark my-2  w-100" onClick={handleLogin}>
                <i className="bi bi-apple me-3"></i> Sign in with Apple
              </button>
              <button className="btn btn-outline-dark my-2  w-100" onClick={handleLogin}>
                <i className="bi bi-google me-3"></i> Sign in with Google
              </button>

              <p className="my-3">OR</p>
              <input
                type="email"
                className="form-control my-2"
                placeholder="name@example.com"
                autoFocus
                required
              />

              <button
                className=" my-2 btn btn-dark w-100"
                id="button-newsletter"
                type="button"
                onClick={handleLogin}
              >
                Sign in with Email
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default TopLoginForm;