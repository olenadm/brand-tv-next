import { Category } from "@/app/api/categories/category";
import { maincategories, categories } from "@/app/api/categories/data";
import VideoList from "@/app/components/ui/VideoList";

export default async function Page(props: {
    params: Promise<{ categorySlug: string; subCategorySlug: string }>;
}) {
  const params = await props.params;
  const category = params.categorySlug;
  const subcategory = params.subCategorySlug;

  console.log(subcategory);

  const subcat = maincategories.find((subc:Category) => subc.slug === subcategory);
  const cat = categories.find((cat: Category) => cat.slug === category);
  const catName = subcat?.name;
  const catSlug =  cat ? cat.slug : 'All';
  const subcatSlug =  subcat ? subcat.slug : 'All';

  console.log(category)

  return (
    <div className='p-3 border rounded-4 mb-5 ms-md-3'>
     
     <VideoList catName={catName} catSlug={catSlug} subCatSlug={subcatSlug} slug="/videos" />
           
    </div>
  );
}
