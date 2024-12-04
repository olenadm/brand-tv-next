import VideoList from "../components/ui/VideoList";

export default function Page() {
  return (
    <div className="p-2 p-lg-3 border rounded-4 mb-md-5 mt-lg-3 shadow-sm">
      <VideoList catName="All" slug="videos/" catSlug="All" />
    </div>
  );
}
