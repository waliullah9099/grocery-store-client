import Image from "next/image";
import { MdOutlineLocalShipping, MdDeliveryDining } from "react-icons/md";

interface TProducts {
  params: {
    productId: string;
  };
}

const page = async ({ params }: TProducts) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params?.productId}`,
    {
      method: "GET",
    }
  );

  const product = await res.json();
  console.log(product);

  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="flex gap-5">
        <Image
          src={product.image}
          width={400}
          height={500}
          className="rounded-md shadow-md flex-[2]"
          alt="Description"
        />
        <div className="p-5 flex-[3]">
          <h1 className="text-2xl font-semibold"> {product.title}</h1>
          <div className="flex gap-6 text-2xl mt-3 items-center border-b-2 border-base-300 border-dashed pb-5 w-3/4">
            <p className="border-r-2 border-base-300 border-dashed pr-4">
              Price: ${product.new_price}
              <sup className="text-main">
                {" "}
                $<del> {product?.previous_price}</del>
              </sup>
            </p>
            <p className="border-r-2 border-base-300 border-dashed pr-4">
              Rating: {product.rating}
            </p>
            <p>🤍</p>
          </div>
          <p className="my-6 pr-6">{product.description}</p>
          <div className="flex items-center gap-2">
            <MdOutlineLocalShipping className="size-6" />
            <p>
              Delivery In Dhaka{" "}
              <span className="text-lg font-semibold">
                ${product.Delivery_cost_inside}
              </span>{" "}
              Otherwise{" "}
              <span className="text-lg font-semibold">
                ${product.Delivery_cost_outside}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdDeliveryDining className="size-6" />
            <p>
              Delivery In{" "}
              <span className="text-lg font-semibold">
                {product.Deliver_days}
              </span>{" "}
              Days,
              <span className="text-sm text-main"> Shipping & Return</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
