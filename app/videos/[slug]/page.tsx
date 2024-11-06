import RecommendedVideoList from "@/app/components/ui/RecommendedVideoList";
import Video from "@/app/components/ui/Video";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const video = params.slug;

  // const videoContent = videos.find((vid) => vid.slug === video);

  console.log(video);

  return (
    <>
      <h3 className="mt-3 mb-4">
        Video name
      </h3>
      <div className="ind">
        <Video slug="videos/promvideo" name="Video Name" id={1} />
      </div>

      <RecommendedVideoList  slug='videos/promvideo'/>
    </>
  );
}
