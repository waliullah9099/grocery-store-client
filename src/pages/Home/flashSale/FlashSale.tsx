"use client";
import ProductCard from "@/components/shared/ui/ProductCard";
import { TProducts } from "@/types";
import Link from "next/link";

const FlashSale = ({ flashSales }: { flashSales: TProducts[] }) => {
  return (
    <div className="max-w-[1230px] mx-auto my-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Flash Sale</h1>
        <Link href="/products">
          <button className="btn px-8 btn-active border-main bg-main hover:bg-transparent hover:shadow-md transition-all hover:scale-105">
            View All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4">
        {flashSales?.slice(4, 8)?.map((sale: TProducts) => (
          <ProductCard key={sale?._id} product={sale} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
