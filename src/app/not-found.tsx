import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col mt-[12%] space-y-4 justify-center items-center">
      <h1 className="text-base-300 text-3xl font-semibold">404</h1>
      <h1 className=" text-2xl font-bold">Page Not Found</h1>
      <Link href={"/"} className="text-main underline">
        <button>Retuns Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
