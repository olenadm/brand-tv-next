import DescriptionAlert from "../components/ui/DescriptionAlert";
import Video from "../components/ui/Video";
import VideoDescription from "../components/ui/VideoDescription";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const video = params.slug;

  // const videoContent = videos.find((vid) => vid.slug === video);

  console.log(video);

  return (
    <>
      <div className="ind mt-3">
        <Video slug="promvideo" name="Video Name" id={1} />
        <VideoDescription />
        <DescriptionAlert />
      </div>
    </>
  );
}
