"use client";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { TProducts } from "@/types";

const ProductCard = ({ product }: { product: TProducts }) => {
  return (
    <div className="card bg-base-100 shadow-xl relative">
      <Link href={`/products/${product?._id}`}>
        <figure>
          <Image
            src={product?.image}
            width={400}
            height={200}
            alt="Shoes"
            className="h-52 rounded-t-xl"
          />
          {product?.discount && (
            <div className="p-4 badge badge-neutral absolute top-3 right-3">
              -{product?.discount}%
            </div>
          )}
        </figure>
        <div className="card-body pb-4">
          <h2 className="card-title">{product?.title}</h2>
          {/* <p>{product?.description.length > 125
                ? product?.description.slice(0, 125) + "  •••"
                : product?.description}</p> */}
          <div className="card-actions justify-between items-center mt-4">
            <div>
              <p className="text-lg">
                Price: ${product?.new_price}
                <sup className="text-main">
                  {" "}
                  $<del> {product?.previous_price}</del>
                </sup>
              </p>
            </div>
            <div className="hover:text-main">
              <TiShoppingCart className="size-6" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
