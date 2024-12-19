import React from "react";
import { Placeholder } from "react-bootstrap";

export default function VideoSkeleton() {
  console.log("loading suspense");
  return (
    <>
      <Placeholder as="div" animation="glow">
        <Placeholder
          xs={12}
          className="mt-3 rounded-4 p-5"
          style={{ height: "300px" }}
        />
      </Placeholder>
    </>
  );
}
