import React from "react";
import { Col } from "react-bootstrap";
import Video from "./Video";
import VideoDescription from "./VideoDescription";

export default function RecommendedSideBar(props: {
  slug: string | undefined;
}) {
  const { slug } = props;
  return (
    <>
      <h4 className="mt-0 mb-3 text-default ms-3">You might like</h4>

      <aside className="bg-secondary bg-gradient rounded-4 p-2 p-sm-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="row" key={i}>
            <Col sm={4}>
              <Video slug={slug} name="Vid" id={i + 1} />
            </Col>
            <Col sm={8}>
              <VideoDescription />
            </Col>
          </div>
        ))}
      </aside>
    </>
  );
}
