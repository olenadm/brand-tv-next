import React from "react";
import { Col} from "react-bootstrap";
import Video from "./Video";

export default function VideoList(props:{catName: string | undefined}) {
    const {catName} = props;
    const category =  catName? catName : 'All';
  return (
    <>
      <h6 className="mt-2 mb-3 text-muted ms-3 fw-normal">Featured / {category}</h6>

      <div className="row">
        {Array.from({ length: 16 }).map((_, i) => (
          <Col key={i} sm={3} md={6} lg={3}>
            <Video slug='promvideo' name='Video' id={i +1}/>
            <a href="#" className="btn btn-info mb-3 text-center w-100 text-white bg-gradient mb-4">CTA</a>

          </Col>
        ))}
      </div>
    </>
  );
}
