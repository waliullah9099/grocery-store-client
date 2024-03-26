import Footer from "@/components/shared/Footer/Footer";
import Hero from "@/pages/Home/hero/Hero";
import FlashSale from "@/pages/flashSale/FlashSale";

const page = () => {
  return (
    <div>
      <Hero />
      <FlashSale />
      <Footer />
    </div>
  );
};

export default page;
