"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const brands = ["colorful  ", "freshwater    ", "saltwater    "];

const Filter = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams ?? "");

  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const addBrands = (brand: string) => {
    setSelectedBrand((prev) => (prev = brand));
    if (brand && brand !== selectedBrand) {
      params.set("category", brand);
    } else if (brand && brand === selectedBrand) {
      setSelectedBrand((prev) => (prev = ""));
      params.delete("category");
    }

    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="w-full border  hover:shadow-xl hover:duration-500 transform transition-all ease-in-out rounded-md p-3 h-fit space-y-10 sticky">
      <div className="space-y-2">
        <h5 className="text-lg font-medium text-slate-700">Category</h5>

        {brands.map((brand) => (
          <div
            className=" cursor-pointer hover:text-main duration-400 transition-all transform hover:px-2 ease-in-out duration-700"
            key={brand}
          >
            <input
              type="checkbox"
              className="m-0 p-0"
              checked={selectedBrand === brand}
              onChange={() => addBrands(brand)}
            />{" "}
            <span className="px-1">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
