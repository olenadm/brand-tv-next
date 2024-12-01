import { TabGroup } from '@/app/components/ui/TabGroup';
import { maincategories } from '@/app/api/categories/data';


export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ categorySlug: string }>;
}) {
   const params = await props.params;

  const { children } = props;

  const category = { slug: params.categorySlug };
  //const categories = categories;

  return (
    <div>
      <div className="row">
        <div className="col ms-lg-3 subitems mt-1">
          <TabGroup
          path={`/replay/${category.slug}`}
          items={[
            {
              text: 'All',
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...maincategories.map((x : any) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        /> 

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
