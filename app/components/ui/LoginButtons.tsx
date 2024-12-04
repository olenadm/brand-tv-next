import React from "react";

export default function LoginButtons() {
  return (
    <>
      <button className="btn  btn-outline-dark my-2  w-100">
        <i className="bi bi-apple me-3"></i> Sign in with Apple
      </button>
      <button className="btn btn-outline-dark my-2  w-100">
        <i className="bi bi-google me-3"></i> Sign in with Google
      </button>
    </>
  );
}
