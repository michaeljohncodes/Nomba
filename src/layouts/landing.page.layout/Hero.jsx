import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/phone-mockup-full.png";
import companyLogos from "../../assets/images/logos-list.png";
import storeIcon from "../../assets/images/store.png";
import customerCare from "../../assets/images/customer-service-line.png";

const Hero = () => {
  return (
    <div className=" border hero w-full mx-auto flex flex-col gap-[60px] items-center justify-between px-[50px] py-[40px] max-[835px]:justify-center ">
      <div className=" w-full mx-auto flex flex-wrap-reverse gap-[30px] items-center justify-between max-[835px]:justify-center">
        <main className=" hero_content flex flex-col gap-[20px] w-[40%] max-[835px]:w-[100%] max-[835px]:items-center max-[835px]:mx-auto max-[835px]:text-center  ">
          <Link
            to={"/"}
            className=" border-[2px] border-[#12121230] rounded-[25px] px-[20px] py-[5px] w-fit font-medium text-[10px] flex items-center gap-[10px] max-[835px]:text-[15px] "
          >
            <img src={storeIcon} alt="" />
            <p>Trusted by 300,000 businesses across Africa.</p>
          </Link>
          <p className=" text-[60px] font-bold w-[80%] max-[835px]:w-full max-[835px]:text-center max-[835px]:text-[40px] ">
            Get better at Banking with
          </p>
          <p className=" text-[60px] font-bold text-[#FFCC00] bg-[#121212] w-fit">
            nomba
          </p>
          <p className=" text-[16px] border-[#12121230] rounded-[25px] w-[100%] font-medium max-[835px]:w-[70%] ">
            We are all about making money matters simple for businesses, to
            ensure smooth payments and happy customers.
          </p>
          <div className=" flex gap-[20px] font-bold items-center">
            <Link
              to={"/"}
              className=" link border-transparent rounded-[25px] bg-[#FFCC00] px-[20px] py-[15px]"
            >
              Get started for free
            </Link>
            <Link
              to={"/"}
              className=" border flex items-center gap-[10px] border-[rgba(18,18,18,0.25)] rounded-[25px] px-[20px] py-[15px]"
            >
              <img src={customerCare} alt="" />
              <p> Schedule a call</p>
            </Link>
          </div>
        </main>

        <main className=" w-[50%] max-[835px]:w-[80%] max-[835px]:h-full ">
          <img src={heroImage} alt="hero_image" />
        </main>
      </div>

      <div>
        <img src={companyLogos} alt="company logos" />
      </div>
    </div>
  );
};

export default Hero;
