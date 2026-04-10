import Image from "next/image";
import Link from "next/link";

import navLogo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/apps"}>Apps</Link>
      </li>
      <li>
        <Link href={"/installation"}>Installition</Link>
      </li>
      <li>
        <Link href={"/dashbord"}>Dashbord</Link>
      </li>
    </>
  );

  return (
    <section>
      <div className="bg-base-100 shadow-sm">
        <div className="container mx-auto px-2 navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <Image width={40} height={40} alt="" src={navLogo} />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-blue-700 font-bold text-white">
              <FaGithub /> Contribute
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
