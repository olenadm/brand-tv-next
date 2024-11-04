import { categories } from "../layout";
import VideoList from "@/app/components/ui/VideoList";

export default async function Page(props: {
  params: Promise<{ categorySlug: string; text: string }>;
}) {
  const params = await props.params;
  const category = params.categorySlug;

  const cat = categories.find((cat) => cat.slug === category);
  const catName = cat?.name;

  return (
    <>
    
      <VideoList catName={catName} />

     
    </>
  );
}
