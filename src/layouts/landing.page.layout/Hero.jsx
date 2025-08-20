import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/phone-mockup-full.png";
import companyLogos from "../../assets/images/logos-list.png";
import storeIcon from "../../assets/images/store.png";
import customerCare from "../../assets/images/customer-service-line.png";

const Hero = () => {
  return (
    <div className=" hero w-full mx-auto flex flex-col gap-[60px] items-center justify-between px-[50px] py-[40px] ">
      <div className=" w-full mx-auto flex gap-[30px] items-center justify-between">
        <main className=" hero_content flex flex-col gap-[20px] w-[40%]">
          <Link
            to={"/"}
            className=" border border-[#12121230] rounded-[25px] px-[20px] py-[5px] w-[60%] font-medium text-[10px] flex items-center gap-[10px]"
          >
            <img src={storeIcon} alt="" />
            <p>Trusted by 300,000 businesses across Africa.</p>
          </Link>
          <h1 className=" font-bold w-[80%]">Get better at Banking with</h1>
          <h1 className=" font-bold text-[#FFCC00] bg-[#121212] w-[42%]">
            nomba
          </h1>
          <h5 className=" border-[#12121230] rounded-[25px] w-[100%] font-medium text-[12px]">
            We are all about making money matters simple for businesses, to
            ensure smooth payments and happy customers.
          </h5>
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

        <main className=" max-w-[50%]">
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
