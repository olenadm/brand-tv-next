import { TabGroup } from "../components/ui/TabGroup";
import { Container } from "react-bootstrap";
import Sidebar from "../components/sidebar/Sidebar";
import Image from "next/image";
import RecommendedVideoList from "@/app/components/ui/RecommendedVideoList";
import HeroIndividual from "../components/HeroIndividual";

export const categories = [
  {
    name: "Our Company",
    slug: "cat-1",
    subcats: [
      { name: "Films 2", slug: "films-2" },
      { name: "Films 3", slug: "films-3" },
    ],
  },
  {
    name: "Films",
    slug: "films",
    subcats: [
      { name: "Films 4", slug: "films-4" },
      { name: "Films 5", slug: "films-5" },
    ],
  },
  {
    name: "Professional",
    slug: "professional",
    subcats: [
      { name: "Films 6", slug: "films-6" },
      { name: "Films 7", slug: "films-7" },
    ],
  },
  {
    name: "Promotional Videos",
    slug: "prom",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <HeroIndividual />

      <Container className="ps-lg-4">
        <div className="row">
          <div className="col px-lg-3 mt-4">
            <TabGroup
              path="/brand-tv"
              items={[
                {
                  text: "All",
                },
                ...categories.map((x) => ({
                  text: x.name,
                  slug: x.slug,
                })),
              ]}
            />

            <div>{children}</div>
            <RecommendedVideoList />
          </div>
        </div>
      </Container>
    </>
  );
}
