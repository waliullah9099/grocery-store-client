import ProductCard from "@/components/shared/ui/ProductCard";
import { TProducts } from "@/types";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    method: "GET",
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div className="max-w-[1230px] mx-auto my-12 flex gap-6">
      <div className="flex-[1] h-screen sticky top-0 left-0">
        <div className="border border-base-300 shadow rounded py-6 px-4">
          <h1 className="border-l-2 border-neutral-500 text-xl pl-2 w-4/5">
            Price Range
          </h1>
          <div className="form-control my-3">
            <label className="label justify-start gap-3 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox border border-neutral-700 size-5 rounded"
              />
              <span className="label-text text-neutral-700 font-medium">
                $20.00 - $40.00
              </span>
            </label>
          </div>
          <div className="form-control my-3">
            <label className="label justify-start gap-3 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox border border-neutral-700 size-5 rounded"
              />
              <span className="label-text text-neutral-700 font-medium">
                $41.00 - $70.00
              </span>
            </label>
          </div>
          <div className="form-control my-3">
            <label className="label justify-start gap-3 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox border border-neutral-700 size-5 rounded"
              />
              <span className="label-text text-neutral-700 font-medium">
                $71.00 - $100.00
              </span>
            </label>
          </div>
          <div className="form-control my-3">
            <label className="label justify-start gap-3 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox border border-neutral-700 size-5 rounded"
              />
              <span className="label-text text-neutral-700 font-medium">
                $101.00 - $400.00
              </span>
            </label>
          </div>
        </div>

        <div className="border border-base-300 shadow rounded py-6 px-4 mt-6">
          <h1 className="border-l-2 border-neutral-500 text-xl pl-2 w-4/5">
            Rating
          </h1>
          <div className="form-control my-3">
            <label className="label justify-start gap-3 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox border border-neutral-700 size-5 rounded"
              />
              <span className="label-text text-neutral-700 font-medium">
                1 Star
              </span>
            </label>
          </div>
          <div className="form-control my-3">
            <label className="label justify-start gap-3 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox border border-neutral-700 size-5 rounded"
              />
              <span className="label-text text-neutral-700 font-medium">
                2 Star
              </span>
            </label>
          </div>
          <div className="form-control my-3">
            <label className="label justify-start gap-3 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox border border-neutral-700 size-5 rounded"
              />
              <span className="label-text text-neutral-700 font-medium">
                3 Star
              </span>
            </label>
          </div>
          <div className="form-control my-3">
            <label className="label justify-start gap-3 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox border border-neutral-700 size-5 rounded"
              />
              <span className="label-text text-neutral-700 font-medium">
                4 Star
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className=" flex-[5]">
        <div className="mt-8 mb-12">
          <h1 className="text-3xl font-semibold mt-5 mb-2 text-start">
            Our Collection Of Sea<span className="text-main"> Sprout</span>
          </h1>
          <p className="text-lg text-gray-400">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {products?.map((product: TProducts) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
