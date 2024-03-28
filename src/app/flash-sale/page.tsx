import CountDownPage from "@/components/shared/countDown/CountDown";
import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";

const page = async () => {
  const res = await fetch(
    "https://grocery-store-backend-lake.vercel.app/api/v1/products",
    {
      method: "GET",
    }
  );
  const products = await res.json();

  return (
    <div className="max-w-[1230px] mx-auto">
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
        <CountDownPage />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product: TProducts) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
