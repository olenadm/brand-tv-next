
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./globals.scss";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
