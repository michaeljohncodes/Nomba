// import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/images/nomba-full-logo.png";

const Header = () => {
  return (
    <div className="header text-black flex justify-between items-center w-full mx-auto py-[15px] px-[50px] ">
      <div className=" w-[10%] flex ">
        <Link to="/">
          <nav>
            <img src={navLogo} alt="logo" className=" w-[80%]" />
          </nav>
        </Link>
      </div>

      <div className=" nav flex justify-between w-[40%] font-medium ">
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

      <div className=" cta rounded-[100px] py-[10px] px-[10px] w-auto flex justify-between gap-[10px] items-center font-medium">
        <Link
          to={"/"}
          className=" link border-transparent rounded-[25px] px-[20px] py-[8px]"
        >
          Sign in
        </Link>
        <Link
          to={"/"}
          className=" link border-transparent rounded-[25px] px-[20px] py-[8px]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Header;
