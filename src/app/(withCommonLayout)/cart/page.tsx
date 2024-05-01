"use client";
import ItemDetails from "@/components/ui/ItemDetails";
import { useAppSelector } from "@/redux/hook";

const Page = () => {
  const products = useAppSelector((store) => store.cart.products);
  const { seletedItems, totalPrice } = useAppSelector((store) => store.cart);

  return (
    <div className="max-w-[1230px] mx-auto px-2 min-h-screen">
      <h1 className="text-3xl text-center font-semibold my-5">
        Show All <span className="text-main"> Cart Products</span>
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"> */}

      {products.length > 0 ? (
        <div>
          {products.map((item, index) => (
            <ItemDetails key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <span className="text-center text-orange-600">
            There is no data in cart store
          </span>
        </div>
      )}
      <div className="bg-slate-50 rounded-md fixed w-72 top-40 -right-1 h-72 border shadow-lg p-3">
        <h1 className="text-2xl font-bold text-center mb-4">Order Summery</h1>
        <h3 className="font-semibold pb-1">Selected Items: {seletedItems}</h3>
        <h3 className="font-semibold pb-1">Total Price: {totalPrice}</h3>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Page;
