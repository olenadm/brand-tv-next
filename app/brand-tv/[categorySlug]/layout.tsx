// import { TabGroup } from '@/app/components/ui/TabGroup';
// import { categories } from "../layout";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ categorySlug: string }>;
}) {
  // const params = await props.params;

  const { children } = props;

  //const category = { slug: params.categorySlug };
  //const categories = categories;

  return (
    <div className="row">
      <div className="col">
        {/* <TabGroup
          path={`/brand-tv/${category.slug}`}
          items={[
            {
              text: 'All',
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...categories.map((x : any) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        /> */}

        <div>{children}</div>
      </div>
    </div>
  );
}
