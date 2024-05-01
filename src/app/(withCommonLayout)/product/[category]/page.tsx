import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";

const page = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    cache: "no-store",
  });
  let filteredProducts: TProducts[] = [];
  const products = await res.json();
  console.log(category, products);
  //   const filteredProducts = products.filter(
  //     (product: TProducts) => product.category === category
  //   );
  if (products !== undefined) {
    const sorted = products.filter(
      (product: TProducts) =>
        product.category.toLowerCase() === category.toLowerCase()
    );
    filteredProducts = sorted;
  }
  console.log(filteredProducts);

  return (
    <div className="max-w-[1230px] mx-auto my-12 ">
      <div className="my-8">
        <h1 className="text-3xl font-semibold my-5 text-center">
          Total Product Of
          <span className="text-main capitalize"> {category}</span> Category
        </h1>
        <p className="text-lg w-3/4 text-center mx-auto text-gray-400">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {filteredProducts?.map((product: TProducts) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
