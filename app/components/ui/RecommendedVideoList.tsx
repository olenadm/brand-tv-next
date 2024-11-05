import React from "react";
import { Col } from "react-bootstrap";
import Video from "./Video";

export default function RecommendedVideoList() {
  return (
    <>
      <h6 className="mt-2 mb-3 text-muted ms-3">Recommended</h6>

      <aside className="bg-secondary bg-gradient rounded-4 p-3 p-sm-4">
        <div className="row">
          {Array.from({ length: 16 }).map((_, i) => (
            <Col key={i} sm={3} md={6} lg={3}>
              <Video slug="promvideo" name="Vid" id={i + 1} />
            </Col>
          ))}
        </div>
      </aside>
    </>
  );
}
