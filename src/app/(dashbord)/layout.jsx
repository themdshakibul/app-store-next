import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const DeshbordLayout = ({ children }) => {
  return (
    <section>
      <div className="flex items-center justify-center gap-5">
        <aside className="h-screen w-120 bg-base-300 shadow-sm p-5 space-y-5">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={50} height={50} />
            <h2 className="text-3xl font-bold">Ph - App Store</h2>
          </div>
          <Link href={"/"} className="btn btn-success font-bold text-white">
            Back to Home <FaArrowRightLong />
          </Link>
        </aside>
        {children}
      </div>
    </section>
  );
};

export default DeshbordLayout;
