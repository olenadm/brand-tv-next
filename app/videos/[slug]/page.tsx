import Signup from "@/app/components/ui/Signup";
import { videos } from "@/app/api/categories/data";

import VideoDescription from "@/app/components/ui/VideoDescription";
import { Ratio } from "react-bootstrap";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const video = params.slug;

  console.log(video);

  const videoContent = videos.find((vid) => vid.id === video);

  return (
    <>
      <div className="ind">
        <div className="mb-3">
          
          <Ratio aspectRatio="16x9">
          
            <iframe
              src={videoContent?.url}
              width="100%"
              height="300"
              allowFullScreen
              className="rounded-3"
            />
          </Ratio>
        </div>

        <div className="mx-3 px-md-5 mt-3">
          <VideoDescription name={videoContent?.name} />
        </div>
        <Signup />
      </div>
    </>
  );
}
