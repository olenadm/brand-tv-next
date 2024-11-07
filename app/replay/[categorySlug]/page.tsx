import { Category } from "@/app/api/categories/category";
import { categories } from "@/app/api/categories/data";
import VideoList from "@/app/components/ui/VideoList";

export default async function Page(props: {
  params: Promise<{ categorySlug: string; text: string }>;
}) {
  const params = await props.params;
  const category = params.categorySlug;

  const cat = categories.find((cat: Category) => cat.slug === category);
  const catName = cat?.name;

  return (
    <div className="p-3 border rounded-4 mb-5 ms-md-3">
      <VideoList catName={catName} slug="videos/promvideo" />
    </div>
  );
}
