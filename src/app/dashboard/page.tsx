import { TProducts } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AllProduct = async () => {
  const res = await fetch(
    "https://grocery-store-backend-lake.vercel.app/api/v1/products",
    {
      method: "GET",
    }
  );
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <Link href="/">
        <h1 className="font-semibold text-2xl p-4 bg-base-300">
          Sea<span className="text-main"> Sprout</span>
        </h1>
      </Link>
      <div className=" flex gap-6">
        <Link
          href={"/products"}
          className="shadow-2xl h-screen bg-base-300 flex-[1] sticky top-0 left-0"
        >
          <h2 className="p-2 px-4 mt-4 text-lg font-semibold bg-[#999]">
            All Product
          </h2>
        </Link>
        <div className="overflow-x-auto flex-[6] border-2 rounded border-dashed border-base-300 p-4 m-4">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: TProducts, index: number) => (
                <tr key={product?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <Image
                      src={product?.image}
                      width={200}
                      height={50}
                      alt="image"
                      className="h-14 w-20 rounded "
                    />
                  </td>
                  <td className="text-lg">{product?.title}</td>
                  <td className="text-lg font-medium">{product?.category}</td>
                  <td className="text-lg font-medium">${product?.new_price}</td>
                  <td className="text-lg font-medium text-main">
                    {product?.discount}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
