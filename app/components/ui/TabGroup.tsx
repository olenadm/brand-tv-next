import { Tab } from "./Tab";

export type Item = {
    text: string;
    slug?: string;
    segment?: string;
    parallelRoutesKey?: string;
  };
  export const TabGroup = ({
    path,
    parallelRoutesKey,
    items,
  }: {
    path: string;
    parallelRoutesKey?: string;
    items: Item[];
  }) => {
    return (
        <ul className="nav nav-pills mb-2">
        {items.map((item) => (
          <Tab
            key={path + item.slug}
            item={item}
            path={path}
            parallelRoutesKey={parallelRoutesKey}
          />
        ))}
      </ul>
    );
  };  