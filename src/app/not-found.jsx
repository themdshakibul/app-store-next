import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-5xl font-black">This in not found pages</h2>
      <Link href={"/"}>
        <button className="btn btn-success">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
