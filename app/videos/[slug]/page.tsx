import Signup from "@/app/components/ui/Signup";
import Video from "@/app/components/ui/Video";
import VideoDescription from "@/app/components/ui/VideoDescription";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const video = params.slug;

  // const videoContent = videos.find((vid) => vid.slug === video);


  return (
    <>
      <div className="ind">
        <Video slug="videos/promvideo" name="Video Name" id={1} />
        <VideoDescription />

        <Signup />
      </div>
    </>
  );
}
