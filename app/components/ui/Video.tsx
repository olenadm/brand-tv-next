"use client";

import React from "react";
import { Card, CardBody } from "react-bootstrap";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

export default function Video(props: {
  slug: string | undefined;
  name: string | undefined;
  id: string | undefined;
  videoUrl: string | undefined;
}) {
  const { slug, name, videoUrl } = props;
  const slug_url = `${slug}`;

  return (
    <>
      <Card className="rounded-3 mb-3 videoplaceholder text-center">
        <CardBody className="p-2">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            className="reactPlayer rounded"
            light
            style={{}}
            onError={(e) => console.error("Player error:", e)}
            config={{
              playerOptions: { responsive: true },
            }}
            controls={false}
          />

          <Link
            href={slug_url}
            scroll={false}
            title={name}
            className="my-2 text-center d-block bg-gradientd-block btn btn-primary"
          >
            Watch Video
          </Link>
        </CardBody>
      </Card>
    </>
  );
}
