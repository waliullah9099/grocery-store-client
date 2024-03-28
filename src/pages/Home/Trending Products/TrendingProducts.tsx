"use client";
import ProductCard from "@/components/shared/ui/ProductCard";
import { TProducts } from "@/types";
import Link from "next/link";

const TrendingProducts = ({
  trendingProducts,
}: {
  trendingProducts: TProducts[];
}) => {
  const sortedProsucts = trendingProducts.sort((a, b) => b.rating - a.rating);

  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="my-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold my-5">
            Trending <span className="text-main"> Products</span>
          </h1>
          <p className="text-lg text-gray-400 w-2/3">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
        </div>
        <Link href="/products">
          <button className="btn px-8 btn-active border-main bg-main hover:bg-transparent hover:shadow-md transition-all hover:scale-105">
            View All
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedProsucts?.slice(0, 6)?.map((product: TProducts) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
