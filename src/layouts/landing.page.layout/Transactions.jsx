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
import transactionImage1B from "../../assets/images/float-image4.png";

const Transactions = () => {
  return (
    <div className="transactions w-full mx-auto py-[50px] px-[50px] flex flex-col justify-center gap-[70px] items-center max-[430px]:px-[30px] ">
      <div className=" flex flex-col justify-center items-center gap-[20px]">
        <p className=" text-[40px] w-[60%] text-center font-bold max-[835px]:w-[90%] max-[430px]:text-[20px]">
          {" "}
          Seamless transactions at a snap with Nomba.
        </p>
        <p className=" w-[55%] text-center max-[835px]:w-[70%] max-[430px]:w-full max-[430px]:text-[12px]">
          We are all about making money matters simple for businesses, to ensure
          smooth payments and happy customers.
        </p>
      </div>

      <div className=" flex flex-col justify-center items-center gap-[70px] max-[835px]:gap-[50px]">
        <main className="flex justify-between gap-[10px] w-[80%] max-[430px]:w-full">
          <div className="min-w-[45%] flex flex-col justify-end items-center gap-[20px] rounded-[40px] bg-[#F4F4F4] px-[50px] pt-[50px] max-[835px]:gap-[10px] max-[430px]:rounded-[10px] max-[430px]:px-[5px] max-[430px]:pt-[15px] ">
            <p className=" text-[30px] font-semibold w-[80%] text-center max-[835px]:text-[25px] max-[430px]:text-[14px] max-[430px]:w-full">
              Move money anywhere in minutes.
            </p>
            <img src={transactionImage1} alt="" />
          </div>
          <div className=" min-w-[45%] flex flex-col justify-between items-center gap-[20px] ">
            <div className=" relative">
              <img src={transactionImage2} alt=" image here " />
              <img
                src={transactionImage1B}
                alt=""
                className=" absolute top-[120px] right-[-30px] max-[835px]:w-[30%] max-[835px]:top-[80px] max-[430px]:top-[50px] max-[430px]:right-[-10px]"
              />
            </div>
            <div className=" bg-[#F4F4F4] rounded-[20px] max-[430px]:rounded-[5px]">
              <img src={transactionImage3} alt=" image here " />
            </div>
          </div>
        </main>

        <main className=" flex justify-between gap-[70px] w-[80%] max-[430px]:w-full">
          <div className=" min-w-[40%] flex flex-col justify-center items-start gap-[20px] rounded-[40p] max-[430px]min-w-[50%] max-[430px]:gap-[10px]">
            <p className=" text-[40px] font-bold w-[80%] max-[835px]:text-[25px] max-[430px]:text-[15px] max-[430px]:w-full">
              Send money as easy as sending a text message
            </p>
            <p className=" text-[22px] font-medium w-[95%] max-[835px]:text-[16px] max-[430px]:text-[10px] max-[430px]:w-full">
              Money arrives when they need it. Rest easy knowing you can swiftly
              and securely send funds when they need it most.
            </p>
            <div className=" flex items-center gap-[20px] max-[430px]:gap-[5px]">
              <p className=" font-medium max-[835px]:text-[13px] max-[430px]:text-[6px] ">
                Learn more about Transfers
              </p>
              <img src={arrow} alt="" className=" max-[430px]:w-[10%]" />
            </div>
          </div>
          <div className=" relative min-w-[40%] items-center gap-[20px] ">
            <img
              src={transactionImage4}
              alt=" image here "
              className="relative"
            />
            <img
              src={subImage1}
              alt=""
              className=" absolute top-[100px] left-[-50px] z-50 w-[40%] max-[430px]:left-[-20px] max-[430px]:top-[30px] max-[430px]:w-[30%]"
            />
            <img
              src={subImage2}
              alt=""
              className=" absolute top-[50px] right-[-20px] z-50 w-[30%] max-[430px]:top-[20px] max-[430px]:w-[25%]"
            />
            <img
              src={subImage3}
              alt=""
              className=" absolute bottom-[100px] right-[-20px] z-50 max-[835px]:bottom-[50px] max-[835px]:right-[-40px] max-[430px]:w-[70%] max-[430px]:right-[-15px] max-[430px]:bottom-[15px]"
            />
          </div>
        </main>

        <main className=" flex justify-between gap-[20px] w-[80%] max-[430px]:w-full">
          <div className=" max-w-[45%] flex flex-col justify-between items-center gap-[20px] ">
            <div>
              <img src={transactionImage5} alt=" image here " />
            </div>
          </div>
          <div className=" w-[45%] flex flex-col justify-center items-start gap-[20px] rounded-[40p] max-[430px]:min-w-[50%] max-[430px]:gap-[10px]">
            <p className=" text-[40px] font-bold w-[90%] max-[835px]:text-[25px] max-[430px]:text-[15px] max-[430px]:w-full">
              Make payments securely through the Nomba QR
            </p>
            <p className=" text-[22px] font-medium w-[95%] max-[835px]:text-[16px] max-[430px]:text-[10px]">
              Using the Nomba App or the QR card(s) provides you, our customers,
              with advanced protection during each and every transactions.
            </p>
            <div className=" flex items-center gap-[20px]">
              <p className=" font-medium max-[835px]:text-[13px] max-[430px]:text-[6px] ">
                Learn more about Nomba QR
              </p>
              <img src={arrow} alt="" className=" max-[430px]:w-[10%]" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transactions;
