'use client'

import React from "react";
import { Card, CardBody } from "react-bootstrap";
import Link from "next/link";
 


export default function Video(props: {
  slug: string | undefined;
  name: string | undefined;
  id: number | undefined;
}) {

  const { slug } = props;
  const url = `/${slug}/`;

  return (
    <>
      <Card className="rounded-3 mb-3 videoplaceholder text-center">
        <CardBody className="d-flex justify-content-center align-items-center">
          <div>
            
            <Link
              href={url}
              scroll={true}
                         
              className="btn btn-default play my-4 text-center bg-gradient"
            >
              <i className="bi bi-play-fill"></i>
            </Link>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
