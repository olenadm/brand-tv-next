import React from "react";
import { Col } from "react-bootstrap";
import Video from "./Video";

export default function RecommendedVideoList(props:{slug: string | undefined}) {
  const {slug} = props;
  return (
    <>
      <h4 className="mt-2 mb-3 text-default ms-3">Recommended</h4>

      <aside className="bg-secondary bg-gradient rounded-4 p-3 p-sm-4 mb-3">
        <div className="row">
          {Array.from({ length: 16 }).map((_, i) => (
            <Col key={i} sm={3} md={6} lg={3}>
              <Video slug={slug} name="Vid" id={i + 1} />
            </Col>
          ))}
        </div>
      </aside>
    </>
  );
}
