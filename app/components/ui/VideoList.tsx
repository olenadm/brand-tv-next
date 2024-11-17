import React from "react";
import { Col } from "react-bootstrap";
import Video from "./Video";
import VideoDescription from "./VideoDescription";
import { videos } from "@/app/api/categories/data";
import { VideoType } from "@/app/api/categories/video";

export default function VideoList(props: {
  catName: string | undefined;
  slug: string | undefined;
  catSlug: string;
  subCatSlug?: string;
}) {
  const { catName, slug, catSlug } = props;
  const category = catName ? catName : "All";
  let videos_s: VideoType[] = videos.filter((vid) => vid.cat.includes(catSlug));

  if (category === "All") {
    videos_s = videos;
  }

  return (
    <>
      <h4 className="mt-2 mb-3 text-default ms-3 fw-normal">{category}</h4>

      <div className="row">
        {videos_s
          ? videos_s.map((vid) => (
              <Col key={vid.id} sm={3} md={6} lg={3}>
                <Video
                  slug={`${slug}/${vid.id}`}
                  name={vid.name}
                  id={vid.id}
                  videoUrl={vid.url}
                />
                <VideoDescription name={vid.name} />
              </Col>
            ))
          : "No videos in this category"}
      </div>
    </>
  );
}
