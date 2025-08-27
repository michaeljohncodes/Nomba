// import React from "react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import navLogo from "../assets/images/nomba-full-logo.png";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className=" max-w-[1440px] mx-auto">
      <div className="header  max-w-[1440px] text-black flex justify-between items-center fixed w-full top-0 z-150 backdrop-blur-lg bg-[#1C1B22]/15 mx-auto py-[15px] px-[50px] max-[430px]:px-[10px] ">
        <div className=" w-[10%] flex max-[835px]:w-[50%] ">
          <Link to="/">
            <nav>
              <img src={navLogo} alt="logo" className=" w-[80%]" />
            </nav>
          </Link>
        </div>
        <div className=" nav flex justify-between w-[40%] font-medium max-[835px]:hidden ">
          <Link to="products">
            <nav>Products</nav>
          </Link>
          <Link to="BusinessType">
            <nav>Business Types</nav>
          </Link>
          <Link to="Developers">
            <nav>Developers</nav>
          </Link>
          <Link to="Company">
            <nav>Company</nav>
          </Link>
        </div>
        <div className=" cta rounded-[100px] py-[10px] px-[10px] w-auto flex justify-between gap-[10px] items-center font-medium max-[835px]:hidden">
          <Link
            to={"/"}
            className=" link border-transparent rounded-[25px] px-[20px] py-[8px] cursor-pointer"
          >
            Sign-In
          </Link>
          <Link
            to={"/"}
            className=" link border-transparent rounded-[25px] px-[20px] py-[8px] cursor-pointer"
          >
            Get Started
          </Link>
        </div>
        <div
          className=" hidden max-[835px]:block cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <AiOutlineClose size={30} color="#b90808" />
          ) : (
            <CiMenuKebab size={30} color="#121212" />
          )}
        </div>
      </div>
      <div className="h-[50px]"></div>

      {menu && (
        <div className=" border text-[25px] flex flex-col fixed bg-[#ffffff] z-100 top-0 h-screen w-full pt-50 items-center gap-[50px] text-[#121212] font-semibold max-[430px]:gap-[25px] max-[430px]:text-[18px]">
          <Link
            to="#"
            onClick={() => setMenu(!menu)}
            className=" border rounded-[20px] px-[40px] py-[5px] border-transparent hover:text-[#b90808] transition-colors duration-150 ease-in-out cursor-pointer"
          >
            <nav>Products</nav>
          </Link>
          <Link
            to="#"
            onClick={() => setMenu(!menu)}
            className=" border rounded-[20px] px-[40px] py-[5px] border-transparent hover:text-[#b90808] transition-colors duration-150 ease-in-out cursor-pointer"
          >
            <nav>Business Types</nav>
          </Link>
          <Link
            to="#"
            onClick={() => setMenu(!menu)}
            className=" border rounded-[20px] px-[40px] py-[5px] border-transparent hover:text-[#b90808] transition-colors duration-150 ease-in-out cursor-pointer"
          >
            <nav>Developers</nav>
          </Link>
          <Link
            to="#"
            onClick={() => setMenu(!menu)}
            className=" border rounded-[20px] px-[40px] py-[5px] border-transparent hover:text-[#b90808] transition-colors duration-150 ease-in-out cursor-pointer"
          >
            <nav>Company</nav>
          </Link>

          <Link
            to={"/"}
            className=" border-[2px] px-[40px] py-[15px] hover:bg-[#121212] hover:text-[#ffffff] hover:rounded-[10px]  transition-colors duration-150 ease-in-out cursor-pointer"
          >
            Sign-In
          </Link>
          <Link
            to={"/"}
            className=" border-[2px] px-[40px] py-[15px] hover:bg-[#121212] hover:text-[#ffffff] hover:rounded-[10px] transition-colors duration-150 ease-in-out cursor-pointer"
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
