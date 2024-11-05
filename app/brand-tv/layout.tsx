import { TabGroup } from "../components/ui/TabGroup";
import { Container } from "react-bootstrap";
import Sidebar from "../components/sidebar/Sidebar";
import RecommendedVideoList from "@/app/components/ui/RecommendedVideoList";
import HeroIndividual from "../components/HeroIndividual";
import { categories } from "../api/categories/data";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <HeroIndividual />

      <Container className="ps-md-5 ">
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
