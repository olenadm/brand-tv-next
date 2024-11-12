import React from "react";
import { Col } from "react-bootstrap";
import Video from "./Video";

export default function VideoList(props: {
  catName: string | undefined;
  slug: string | undefined;
}) {
  const { catName, slug } = props;
  const category = catName ? catName : "All";
  return (
    <>
      <h4 className="mt-2 mb-3 text-default ms-3 fw-normal">{category}</h4>

      <div className="row">
        {Array.from({ length: 8 }).map((_, i) => (
          <Col key={i} sm={3} md={6} lg={3}>
            <Video slug={slug} name="Video" id={i + 1} />
          </Col>
        ))}
      </div>
    </>
  );
}
