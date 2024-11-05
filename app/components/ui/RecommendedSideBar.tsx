import React from "react";
import { Col } from "react-bootstrap";
import Video from "./Video";

export default function RecommendedSideBar() {
  return (
    <>
      <h6 className="mt-4 mb-3 text-muted ms-3">You might like</h6>

      <aside className="bg-secondary bg-gradient rounded-4 p-3 p-sm-4">
        <div className="row">
          {Array.from({ length: 8 }).map((_, i) => (
            <Col key={i} sm={12}>
              <Video slug="promvideo" name="Vid" id={i + 1} />
            </Col>
          ))}
        </div>
      </aside>
    </>
  );
}
