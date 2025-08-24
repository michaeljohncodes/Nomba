import React from "react";
import apple from "../../src/assets/images/apple-logo.png";
import google from "../../src/assets/images/google-logo.png";
import whiteLogo from "../../src/assets/images/white-logo.png";
import { Link } from "react-router-dom";
import footerImage1 from "../assets/images//footer-image1.png";
import footerImage2 from "../assets/images//footer-image2.png";

const Footer = () => {
  return (
    <div className=" footer relative w-full mx-auto py-[70px] px-[70px] flex flex-col justify-between gap-[100px] max-[835px]:gap-[70px]">
      <img
        src={footerImage1}
        alt=""
        className=" absolute top-[0px] left-[0px] w-[15%]"
      />
      <img
        src={footerImage2}
        alt=""
        className=" absolute bottom-[0px] right-[0px] w-[10%] h-[25%]"
      />
      <main className=" flex flex-col justify-center items-center gap-[40px] text-center max-[835px]:gap-[30px]">
        <p className=" text-[60px] font-semibold max-[835px]:text-[40px]">
          Get a free <span className=" text-[#FFCC00]">Nomba</span> account
        </p>
        <p className=" text-[22px] max-[835px]:text-[18px]">
          Change how you spend, manage and save money.
        </p>
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

      <main className=" flex flex-wrap justify-between gap-[100px] w-full max-[835px]:gap-x-[20px]">
        <div className=" flex flex-col gap-[20px] text-[22px] max-[835px]:text-[16px]">
          <p className=" text-[#919191]"> Products</p>
          <p>Accept Payments</p>
          <p>Make Payments</p>
          <p>Terminal </p>
        </div>
        <div className=" flex flex-col gap-[20px] text-[22px] max-[835px]:text-[16px]">
          <p className=" text-[#919191]">Nomba</p>
          <p>Blog </p>
          <p>About us</p>
          <p>Work with Nomba</p>
        </div>
        <div className=" flex flex-col gap-[20px] text-[22px] max-[835px]:text-[16px]">
          <p className=" text-[#919191]"> Business Types</p>
          <p>Mobile Money Agents</p>
          <p>Small Business</p>
          <p>Large Business</p>
        </div>
        <div className=" flex flex-col gap-[20px] text-[22px] max-[835px]:text-[16px]">
          <p className=" text-[#919191]">Contact us</p>
          <p>018888866</p>
          <p>015200061</p>
          <p>support@nomba.com</p>
        </div>
      </main>

      <main className=" flex flex-col justify-start gap-[50px] text-[22px] max-[835px]:text-[16px] max-[835px]:flex max-[835px]:gap-[] ">
        <div className=" flex flex-col gap-[20px] text-[22px] max-[835px]:text-[16px]">
          <p className=" text-[#919191]">Follow us</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>YouTube</p>
          <p>Facebook</p>
        </div>
        <div className=" flex flex-col gap-[30px]">
          <img src={whiteLogo} alt="" className=" w-[15%]" />
          <div className=" flex gap-[20px]">
            <p>Privacy Policy</p>
            <p>Terms of services</p>
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
