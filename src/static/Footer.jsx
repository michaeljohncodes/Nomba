import React from "react";
import apple from "../../src/assets/images/apple-logo.png";
import google from "../../src/assets/images/google-logo.png";
import whiteLogo from "../../src/assets/images/white-logo.png";
import { Link } from "react-router-dom";
import footerImage1 from "../assets/images//footer-image1.png";
import footerImage2 from "../assets/images//footer-image2.png";

const Footer = () => {
  return (
    <div className=" footer relative w-full mx-auto py-[70px] px-[70px] flex flex-col justify-between gap-[100px]">
      <img
        src={footerImage1}
        alt=""
        className=" absolute top-[0px] left-[0px] w-[15%]"
      />
      <img
        src={footerImage2}
        alt=""
        className=" absolute bottom-[0px] right-[-30px] w-[15%] h-[50%]"
      />
      <main className=" flex flex-col justify-center items-center gap-[40px]">
        <h1 className=" font-semibold">
          Get a free <span className=" text-[#FFCC00]">Nomba</span> account
        </h1>
        <h4 className=" text-[25px]">
          Change how you spend, manage and save money.
        </h4>
        <div className=" flex gap-[50px]">
          <Link to="/">
            <button className=" flex items-center gap-[10px] rounded-[10px] bg-[#252525] px-[20px] py-[10px] hover:cursor-pointer">
              <img src={apple} alt=".." className=" w-[20%]" />
              App Store
            </button>
          </Link>
          <Link to="/">
            <button className=" flex items-center gap-[10px] rounded-[10px] bg-[#252525] px-[20px] py-[10px] hover:cursor-pointer">
              <img src={google} alt=".." className=" w-[20%]" />
              Google Play
            </button>
          </Link>
        </div>
      </main>

      <main className=" flex justify-between gap-[100px] w-full">
        <div className=" flex flex-col gap-[20px]">
          <h4 className=" text-[#919191]"> Products</h4>
          <h4>Accept Payments</h4>
          <h4>Make Payments</h4>
          <h4>Terminal </h4>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <h4 className=" text-[#919191]">Nomba</h4>
          <h4>About us</h4>
          <h4>Blog </h4>
          <h4>Work with Nomba</h4>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <h4 className=" text-[#919191]"> Business Types</h4>
          <h4>Mobile Money Agents</h4>
          <h4>Small Business</h4>
          <h4>Large Business</h4>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <h4 className=" text-[#919191]">Contact us</h4>
          <h4>018888866</h4>
          <h4>015200061</h4>
          <h4>support@nomba.com</h4>
        </div>
      </main>

      <main className=" flex flex-col justify-start gap-[50px]">
        <div className=" flex flex-col gap-[20px]">
          <h4 className=" text-[#919191]">Follow us</h4>
          <h4>Instagram</h4>
          <h4>Twitter</h4>
          <h4>YouTube</h4>
          <h4>Facebook</h4>
        </div>
        <div className=" flex flex-col gap-[30px]">
          <img src={whiteLogo} alt="" className=" w-[15%]" />
          <div className=" flex gap-[20px]">
            <h4>Privacy Policy</h4>
            <h4>Terms of services</h4>
          </div>
        </div>
      </main>

      <main className=" flex justify-between align-top gap-[50px] font-normal border-t border-t-[#5e5c5c] pt-[50px] ">
        <div className=" flex flex-col gap-[20px]">
          <p>🇳🇬 Nigeria</p>
          <p>16 Billings Way Oregun Ikeja, Lagos, Nigeria </p>
          <p>19b Bosun Adekoya Street, Lekki Phase 1, Lagos, Nigeria.</p>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <p>🇺🇸 United States</p>
          <p>1776 Sacremento St Apt 311 SAN Francisco CA 94109</p>
        </div>
        <p>© 2022 Nomba, all rights reserved</p>
      </main>
    </div>
  );
};

export default Footer;
