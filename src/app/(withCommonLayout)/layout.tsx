import Footer from "@/components/shared/Footer/Footer";
import Headers from "@/components/shared/Header/Header";
import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {/* <Headers /> */}
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
