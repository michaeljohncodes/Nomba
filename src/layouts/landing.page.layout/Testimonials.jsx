import React from "react";
import custImage1 from "../../assets/images/testImage1.png";
import testImage2 from "../../assets/images/testImage2.png";
import testImage3 from "../../assets/images/testImage3.png";

const Testimonials = () => {
  return (
    <div className=" testimonial w-full mx-auto py-[30px] px-[50px] flex flex-col gap-[60px] items-center max-[835px]:gap-[40px] max-[430px]:px-[5px] max-[430px]:gap-[20px] ">
      <p className=" text-[22px] max-[835px]:text-[14px] max-[430px]:text-[10px]">
        TESTIMONIALS
      </p>
      <p className=" text-[60px] w-[70%] text-center font-medium max-[835px]:text-[30px] max-[430px]:w-[80%] max-[430px]:text-[18px]">
        What our customers are saying about Nomba
      </p>
      <main className=" flex flex-col justify-between gap-[50px] w-full px-[20px] max-[430px]:gap-[20px]">
        <section className=" flex justify-between gap-[10px]">
          <div className=" w-[55%] rounded-[20px] relative">
            <img src={custImage1} alt="" />
            <p className=" absolute top-[20px] left-[20px] max-[835px]:text-[13px] max-[430px]:text-[6px] max-[430px]:left-[5px] max-[430px]:top-[10px]">
              CUSTOMER STORIES
            </p>
            <p className=" text-[30px] w-[70%] absolute bottom-[60px] left-[20px] max-[835px]:text-[20px] max-[835px]:bottom-[50px] max-[430px]:text-[10px] max-[430px]:bottom-[20px] max-[430px]:left-[5px]">
              “I use Nomba to help my business succeed daily”
            </p>
            <p className=" absolute bottom-[20px] left-[20px] max-[835px]:text-[12px] max-[430px]:text-[6px] max-[430px]:bottom-[5px] max-[430px]:left-[5px]">
              Folake Chibueze, WireCake
            </p>
          </div>

          <div className=" flex flex-col justify-between w-[42%] p-[30px] rounded-[20px] bg-[#FFCC00] text-[#121212] max-[430px]:p-[5px] max-[430px]:rounded-[5px]">
            <p className=" font-medium max-[835px]:text-[13px] max-[430px]:text-[6px]">
              FACTS & NUMBERS
            </p>
            <div className=" flex flex-col gap-[5px]">
              <p className=" w-[70%] text-[100px] font-semibold max-[835px]:text-[50px] max-[430px]:text-[30px] ">
                250,000+
              </p>
              <p className=" text-[30px] w-[90%] font-medium max-[835px]:text-[18px] max-[430px]:text-[12px] max-[430px]:w-full">
                Businesses and consumer use the Nomba tools and services on a
                daily.
              </p>
            </div>
          </div>
        </section>

        <section className=" flex justify-between gap-[10px] ">
          <div className=" w-[42%] rounded-[20px] flex flex-col justify-between py-[20px] px-[25px] gap-[50px] bg-[#D897DF] text-[#121212] max-[430px]:p-[10px] max-[430px]:rounded-[10px] max-[430px]:gap-[10px]">
            <div className=" flex flex-col gap-[20px]">
              <p className=" font-medium max-[835px]:text-[13px] max-[430px]:text-[6px]">
                CUSTOMER STORIES
              </p>
              <p className=" w-full font-semibold text-[25px] max-[835px]:text-[18px] max-[430px]:text-[10px]">
                How Cofe place saved 15 hours and reinvested into their business
                growth both home and abroad
              </p>
            </div>
            <img src={testImage2} alt=" image here" />
          </div>

          <div className=" w-[55%] rounded-[20px] flex flex-col justify-between p-[30px] bg-[#303030] max-[430px]:p-[10px] max-[430px]:rounded-[10px]">
            <div className=" flex flex-col gap-[20px]">
              <p className=" max-[835px]:text-[13px] max-[430px]:text-[8px]">
                REVIEWS
              </p>
              <p className=" text-[40px] w-[95%] max-[835px]:text-[22px] max-[430px]:text-[14px] ">
                “The good thing about Nomba is it saves a lot of time and money
                so i can do other things - the running of the business part
                itself.”
              </p>
            </div>
            <div className=" flex items-center gap-[20px] ">
              <img src={testImage3} alt="" className=" max-[430px]:w-[10%]" />
              <p className=" max-[835px]:text-[13px] max-[430px]:text-[8px]">
                Kenzo Adekanju
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Testimonials;
