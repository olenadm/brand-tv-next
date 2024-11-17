import VideoList from "../components/ui/VideoList";

export default function Page() {
  return (
    <div className="p-3 border rounded-4 mb-5">
      <VideoList catName="All" slug="videos/" catSlug="All" />
    </div>
  );
}
