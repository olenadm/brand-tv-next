import { TabGroup } from "@/app/components/ui/TabGroup";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
          <TabGroup
            path="/"
            items={[
              {
                text: 'Home',
              },
              {
                text: 'Recommended',
                slug: 'Recommended',
              },
              {
                text: 'Videos',
                slug: 'videos',
              },
            ]}
          />
  
          {children}
        </div>
      
    );
  }