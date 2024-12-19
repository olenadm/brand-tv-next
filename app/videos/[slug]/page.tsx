import Signup from "@/app/components/ui/Signup";
import { videos } from "@/app/api/categories/data";

import VideoPlayer from "@/app/components/ui/VideoPlayer";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const video = params.slug;

  const videoContent = videos.find((vid) => vid.id === video);

  return (
    <>
      <div className="ind">
        <VideoPlayer url={videoContent?.url} name={videoContent?.name} />

        <Signup />
      </div>
    </>
  );
}
