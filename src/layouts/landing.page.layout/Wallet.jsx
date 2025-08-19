import React from "react";
import scanImage from "../../assets/images/bar-code.png";
import { Link } from "react-router-dom";
import walletImageOne from "../../assets/images/image-39.png";
import walletImageTwo from "../../assets/images/max-1.png";
import walletImageThree from "../../assets/images/image-40.png";

const Wallet = () => {
  return (
    <div className=" wallet w-full mx-auto py-[70px] px-[20px] flex flex-col gap-[60px] items-center ">
      <h2 className=" w-[50%] text-center">
        Join 300,000+ people with a nomba wallet in their pockets
      </h2>

      <div className=" flex justify-center gap-[20px] items-center w-[30%] px-[20px] py-[10px]">
        <img src={scanImage} alt="scan image" className=" w-[25%]" />
        <h4 className=" text-[10px] w-[60%] text-left">
          Scan with your mobile phone to download the Nomba app.
        </h4>
      </div>

      <div className=" flex gap-[30px]">
        <div className=" flex flex-col justify-end items-center gap-[20px]">
          <img src={walletImageOne} alt="" />
          <p>Apply for a Nomba account in 15 minutes.</p>
        </div>
        <div className=" flex flex-col justify-end items-center gap-[20px]">
          <img src={walletImageTwo} alt="" />
          <p>Organise your money however you like.</p>
        </div>
        <div className=" flex flex-col justify-end items-center gap-[20px]">
          <img src={walletImageThree} alt="" />
          <p>See your money move daily with Trends.</p>
        </div>
      </div>

      <div className=" text-[#121212] font-medium">
        <Link
          to={"/"}
          className=" link border-transparent rounded-[25px] bg-[#FFCC00] px-[25px] py-[8px]"
        >
          Get a personal account
        </Link>
      </div>
    </div>
  );
};

export default Wallet;
