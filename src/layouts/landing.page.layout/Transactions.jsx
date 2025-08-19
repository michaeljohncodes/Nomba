import React from "react";
import transactionImage1 from "../../assets/images/transaction-img1.png";
import transactionImage2 from "../../assets/images/transaction-img2.png";
import transactionImage3 from "../../assets/images/transaction-img3.png";
import transactionImage4 from "../../assets/images/transaction-img4.png";
import arrow from "../../assets/images/arrow.png";
import transactionImage5 from "../../assets/images/transaction-img5.png";
import subImage1 from "../../assets/images/sub1.png";
import subImage2 from "../../assets/images/sub2.png";
import subImage3 from "../../assets/images/sub3.png";

const Transactions = () => {
  return (
    <div className="transactions w-full mx-auto py-[70px] px-[50px] flex flex-col justify-center gap-[70px] items-center ">
      <div className=" flex flex-col justify-center items-center gap-[20px]">
        <h2 className=" w-[60%] text-center font-bold">
          {" "}
          Seamless transactions at a snap with Nomba.
        </h2>
        <p className=" w-[55%] text-center">
          We are all about making money matters simple for businesses, to ensure
          smooth payments and happy customers.
        </p>
      </div>

      <div className=" flex flex-col justify-center items-center gap-[100px]">
        <main className="flex justify-between gap-[30px] w-[80%]">
          <div className=" min-w-[45%] flex flex-col justify-end items-center gap-[50px] rounded-[40px] bg-[#F4F4F4] px-[50px] pt-[50px] ">
            <h3 className=" font-semibold w-[65%] text-center">
              Move money anywhere in minutes.
            </h3>
            <img src={transactionImage1} alt="" />
          </div>
          <div className=" min-w-[45%] flex flex-col justify-between items-center gap-[20px] ">
            <div>
              <img src={transactionImage2} alt=" image here " />
            </div>
            <div className=" bg-[#F4F4F4] rounded-[20px]">
              <img src={transactionImage3} alt=" image here " />
            </div>
          </div>
        </main>

        <main className="flex justify-between gap-[50px] w-[80%] pr-[100px]">
          <div className=" max-w-[50%] flex flex-col justify-center items-start gap-[20px] rounded-[40p]">
            <h2 className=" font-bold w-[70%]">
              Send money as easy as sending a text message
            </h2>
            <h4 className=" font-medium w-[70%]">
              Money arrives when they need it. Rest easy knowing you can swiftly
              and securely send funds when they need it most.
            </h4>
            <div className=" flex items-center gap-[20px]">
              <p className=" font-medium ">Learn more about Transfers</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className=" max-w-[40%] flex flex-col justify-between items-center gap-[20px] ">
            <div className=" relative">
              <img src={transactionImage4} alt=" image here " className="relative" />
              <img src={subImage1} alt="" className=" absolute top-[100px] left-[-100px] z-50 w-[40%]" />
              <img src={subImage2} alt="" className=" absolute top-[50px] right-[-50px] z-50 w-[30%]" />
              <img src={subImage3} alt="" className=" absolute bottom-[100px] right-[-50px] z-50" />
            </div>
          </div>
        </main>

        <main className="flex justify-between gap-[50px] w-[80%]">
          <div className=" max-w-[45%] flex flex-col justify-between items-center gap-[20px] ">
            <div>
              <img src={transactionImage5} alt=" image here " />
            </div>
          </div>
          <div className=" w-[45%] flex flex-col justify-center items-start gap-[20px] rounded-[40p]">
            <h2 className=" font-bold w-[70%]">
              Make payments securely through the Nomba QR
            </h2>
            <h4 className=" font-medium w-[90%]">
              Using the Nomba App or the QR card(s) provides you, our customers,
              with advanced protection during each and every transactions.
            </h4>
            <div className=" flex items-center gap-[20px]">
              <p className=" font-medium ">Learn more about Nomba QR</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transactions;
