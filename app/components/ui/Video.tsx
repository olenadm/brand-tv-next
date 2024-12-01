"use client";

import React from "react";
import { Card, CardBody, Ratio } from "react-bootstrap";
import Link from "next/link";

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
        <CardBody className='px-0'>
          <Ratio aspectRatio={1 / 2}>
            <iframe
              src={`${videoUrl}?embedparameter=value&controls=false`}
              width="100%"
            />
          </Ratio>

          <Link
            href={slug_url}
            scroll={true}
            title={name}
            className="my-2 mx-2 text-center d-block bg-gradientd-block btn btn-primary"
          >
            Watch Video
          </Link>
        </CardBody>
      </Card>
    </>
  );
}
