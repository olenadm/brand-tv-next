import React from "react";

export default function LoginButtons() {
  return (
    <div>
      <button className="btn btn-dark my-1  w-100">
        Sign in with Apple <i className="bi bi-apple ms-3"></i>
      </button>
      <button className="btn btn-dark my-1  w-100">
        Sign in with Google <i className="bi bi-google ms-3"></i>
      </button>
      <button className="btn btn-dark my-1  w-100">
        Sign in with Facebook <i className="bi bi-facebook ms-3"></i>
      </button>
    </div>
  );
}
