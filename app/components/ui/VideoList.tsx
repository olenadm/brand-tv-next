import React from "react";
import { Col } from "react-bootstrap";
import Video from "./Video";
import VideoDescription from "./VideoDescription";
import { videos } from "@/app/api/categories/data";
import { VideoType } from "@/app/api/categories/video";
import { Suspense } from "react";
import VideoSkeleton from "./VideoSkeleton";

export default function VideoList(props: {
  catName: string | undefined;
  slug: string | undefined;
  catSlug: string;
  subCatSlug?: string;
}) {
  const { catName, slug, catSlug, subCatSlug } = props;
  const category = catName ? catName : "All";
  let videos_s: VideoType[] = videos.filter((vid) => vid.cat.includes(catSlug));

  if (category === "All") {
    videos_s = videos;
  }

  if (subCatSlug) {
    videos_s = videos_s.filter((vid) => vid.anotherCat?.includes(subCatSlug));
  }

  return (
    <>
      <h4 className="mt-2 mb-3 text-default ms-3 fw-normal">{category}</h4>

      <div className="row">
        {videos_s.length > 0 ? (
          videos_s.map((vid) => (
            <Col key={vid.id} sm={3} md={6} lg={3}>
              <Suspense fallback={<VideoSkeleton />}>
                <div className="row">
                  <Col xs={6} lg={12} >
                    <Video
                      slug={`${slug}/${vid.id}`}
                      name={vid.name}
                      id={vid.id}
                      videoUrl={vid.url}
                    />
                  </Col>
                  <Col xs={6} lg={12}>
                    <VideoDescription name={vid.name} />
                  </Col>
                </div>
              </Suspense>
            </Col>
          ))
        ) : (
          <p className="p-3">No videos in this category</p>
        )}
      </div>
    </>
  );
}
