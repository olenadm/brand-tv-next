import React from "react";

export default function VideoDescription() {
  return (
    <div className="description">
      <h4 className="mt-0">Video name</h4>
      <h6 className='mb-1'>
        Actors:{" "}
        <span>
          Lorem ipsum, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt{" "}
        </span>
      </h6>
      <p className="text-muted">1 day ago, 235 views</p>
    </div>
  );
}
