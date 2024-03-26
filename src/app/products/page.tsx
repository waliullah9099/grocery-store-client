const page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    method: "GET",
  });
  const products = await res.json();
  console.log(products);
  return (
    <>
      <div className="my-5">
        <h1 className="text-3xl font-semibold my-5 text-center">
          All Product Of Sea<span className="text-main"> Sprout</span>
        </h1>
        <p className="text-lg w-2/4 text-center mx-auto text-gray-400">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
    </>
  );
};

export default page;
