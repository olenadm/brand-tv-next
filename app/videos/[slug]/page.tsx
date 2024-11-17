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
          <Ratio aspectRatio={1 / 2}>
            <iframe src={videoContent?.url} width="100%" />
          </Ratio>
        </div>

        <VideoDescription name={videoContent?.name} />
        <Signup />
      </div>
    </>
  );
}
