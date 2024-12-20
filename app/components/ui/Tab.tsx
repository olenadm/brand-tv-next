"use client";

import type { Item } from "./TabGroup";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const Tab = ({
  path,
  parallelRoutesKey,
  item,
}: {
  path: string;
  parallelRoutesKey?: string;
  item: Item;
}) => {
  const segment = useSelectedLayoutSegment(parallelRoutesKey);

  const href = item.slug ? path + "/" + item.slug : path;
  const isActive =
    // Example home pages e.g. `/brand-tv`
    (!item.slug && segment === null) ||
    segment === item.segment ||
    // Nested pages e.g. `/brand-tv/films`
    segment === item.slug;

  return (
    <li className="nav-item">
      <Link href={href} className={isActive ? "nav-link active bg-primary rounded-5" : "rounded-5 nav-link text-primary"}>
        {item.text}
      </Link>
    </li>
  );
};
