import Image from "next/image";

const Category = async () => {
  const products = await fetch("http://localhost:5000/api/v1/products", {
    method: "GET",
  });
  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="my-8">
        <h1 className="text-3xl font-semibold my-5 text-center">
          Top <span className="text-main"> Categories</span>
        </h1>
        <p className="text-lg w-2/4 text-center mx-auto text-gray-400">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="relative group">
          <Image
            src={
              "https://i.ibb.co/dfXNMkV/photo-1540996772485-94e7e92bc1f0.jpg"
            }
            className="rounded hover:scale-95 transition-all h-[550px]"
            height={500}
            width={500}
            alt="category iamge"
          />
          <h2 className="text-pure text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
            Predatory Fish
          </h2>
        </div>
        <div className="space-y-5">
          <div className="relative group">
            <Image
              src={"https://i.ibb.co/yVrk1Xf/pexels-photo-2792153.jpg"}
              className="rounded hover:scale-95 transition-all h-[265px]"
              height={400}
              width={500}
              alt="category iamge"
            />{" "}
            <h2 className="text-pure text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
              Freshwater Fish
            </h2>
          </div>
          <div className="relative group">
            <Image
              src={
                "https://i.ibb.co/QJkYV48/istockphoto-1458602861-1024x1024.jpg"
              }
              className="rounded hover:scale-95 transition-all h-[265px]"
              height={400}
              width={500}
              alt="category iamge"
            />{" "}
            <h2 className="text-pure text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
              Saltwater Fish
            </h2>
          </div>
        </div>
        <div className="relative group">
          <Image
            src={"https://i.ibb.co/GHWF8dv/pexels-photo-3133396.webp"}
            className="rounded hover:scale-95 transition-all h-[550px]"
            height={700}
            width={500}
            alt="category iamge"
          />{" "}
          <h2 className="text-pure text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
            Colorful Fish
          </h2>
        </div>
      </div>
      {/* <div className="text-center mt-6">
        <Link href="/products">
          <button className="btn px-8 btn-active border-main bg-main hover:bg-transparent hover:shadow-md transition-all hover:scale-105">
            View All
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Category;
