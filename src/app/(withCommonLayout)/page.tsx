import TrendingProducts from "@/pages/Home/Trending Products/TrendingProducts";
import Category from "@/pages/Home/category/Category";
import FlashSale from "@/pages/Home/flashSale/FlashSale";
import Hero from "@/pages/Home/hero/Hero";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    method: "GET",
  });
  const products = await res.json();
  return (
    <div>
      <Hero />
      <FlashSale flashSales={products} />
      <Category />
      <TrendingProducts trendingProducts={products} />
    </div>
  );
};

export default page;
