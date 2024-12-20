import React from "react";

export default function VideoSkeleton() {
  return (
    <div className="placeholder-glow mb-3">
      <span
        className="placeholder col-12 rounded-4 mb-2"
        style={{ height: "300px" }}
      ></span>
      <span className="placeholder col-8 rounded-3"></span>
      <span className="placeholder col-6 rounded-3"></span>
    </div>
  );
}
