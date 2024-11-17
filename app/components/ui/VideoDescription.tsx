import React from "react";

export default function VideoDescription(props: {
  name: string | undefined;
  
}) {
  const { name } = props;

  return (
    <div className="description">
      <h5 className="mt-0">{name}</h5>
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
