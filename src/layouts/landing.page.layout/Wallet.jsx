import React from "react";
import scanImage from "../../assets/images/bar-code.png";
import { Link } from "react-router-dom";
import walletImageOne from "../../assets/images/image-39.png";
import walletImageTwo from "../../assets/images/max-1.png";
import walletImageThree from "../../assets/images/image-40.png";

const Wallet = () => {
  return (
    <div className=" wallet w-full mx-auto py-[70px] px-[20px] flex flex-col gap-[60px] items-center max-[430px]:gap-[30px] max-[430px]:px-[10px] ">
      <p className=" text-[40px] w-[60%] text-center font-semibold max-[835px]:w-[80%] max-[430px]:text-[25px] max-[430px]:w-[90%]">
        Join 300,000+ people with a nomba wallet in their pockets
      </p>

      <div className=" flex justify-center gap-[20px] items-center w-[33%] px-[20px] py-[10px] max-[835px]:w-[60%] max-[430px]:w-[70%]">
        <img
          src={scanImage}
          alt="scan image"
          className=" w-[25%] max-[835px]"
        />
        <p className=" text-[22px] w-[60%] text-left max-[430px]:w-full max-[430px]:text-[15px]">
          Scan with your mobile phone to download the Nomba app.
        </p>
      </div>

      <div className=" flex justify-between max-[430px]:gap-[5px] ">
        <div className=" flex flex-col justify-end items-center text-center gap-[20px] max-[835px]:flex ">
          <img src={walletImageOne} alt="" />
          <p className=" text-[30px] w-[75%] max-[835px]:text-[20px] max-[835px]:w-[80%] max-[430px]:text-[12px] max-[430px]:w-full">
            Apply for a Nomba account in 15 minutes.
          </p>
        </div>
        <div className=" flex flex-col justify-end items-center text-center gap-[20px] max-[835px]:flex">
          <img
            src={walletImageTwo}
            alt=""
            className=" max-[835px]:max-w-[85%] max-[430px]:min-w-[90%]"
          />
          <p className=" text-[30px] w-[75%] max-[835px]:text-[20px] max-[835px]:w-[80%] max-[430px]:text-[12px] max-[430px]:w-full">
            Organise your money however you like.
          </p>
        </div>
        <div className=" flex flex-col justify-end items-center text-center gap-[20px] max-[835px]:flex">
          <img src={walletImageThree} alt="" />
          <p className=" text-[30px] w-[75%] max-[835px]:text-[20px] max-[835px]:w-[80%] max-[430px]:text-[12px] max-[430px]:w-full">
            See your money move daily with Trends.
          </p>
        </div>
      </div>

      <div className=" text-[#121212] font-medium">
        <Link
          to={"/"}
          className=" border-transparent rounded-[25px] bg-[#FFCC00] px-[25px] py-[15px] max-[430px]:py-[8px] max-[430px]:text-[12px]"
        >
          Get a personal account
        </Link>
      </div>
    </div>
  );
};

export default Wallet;
