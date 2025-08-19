import React from "react";
import custImage1 from "../../assets/images/testImage1.png";
import testImage2 from "../../assets/images/testImage2.png";
import testImage3 from "../../assets/images/testImage3.png";

const Testimonials = () => {
  return (
    <div className=" testimonial w-full mx-auto py-[70px] px-[50px] flex flex-col gap-[60px] items-center ">
      <h4>TESTIMONIALS</h4>
      <h1 className=" w-[50%] text-center font-medium">
        What our customer are saying about Nomba
      </h1>
      <main className=" flex flex-col justify-between gap-[50px] w-full px-[20px]">
        <section className=" flex justify-between gap-[10px]">
          <div className=" w-[55%] rounded-[20px] relative">
            <img src={custImage1} alt="" />
            <p className=" absolute top-[20px] left-[20px]">CUSTOMER STORIES</p>
            <h3 className=" w-[70%] absolute bottom-[60px] left-[20px]">
              “I use Nomba to help my business succeed daily”
            </h3>
            <p className=" absolute bottom-[20px] left-[20px]">
              Folake Chibueze, WireCake
            </p>
          </div>

          <div className=" flex flex-col justify-between w-[42%] p-[30px] rounded-[20px] bg-[#FFCC00] text-[#121212]">
            <p className=" ">FACTS & NUMBERS</p>
            <div className=" flex flex-col gap-[5px]">
              <p className=" w-[70%] text-[100px] font-semibold ">250,000+</p>
              <p className=" text-[30px] w-[90%] font-medium">
                Businesses and consumer use the Nomba tools and services on a
                daily.
              </p>
            </div>
          </div>
        </section>

        <section className=" flex justify-between gap-[10px] ">
          <div className=" w-[42%] rounded-[20px] flex flex-col justify-between py-[20px] px-[25px] gap-[50px] bg-[#D897DF] text-[#121212]">
            <div className=" flex flex-col gap-[20px]">
              <p className=" font-medium">CUSTOMER STORIES</p>
              <h3 className=" w-full font-medium">
                How Cofe place saved 15 hours and reinvested into their business
                growth both home and abroad
              </h3>
            </div>
            <img src={testImage2} alt=" image here" />
          </div>

          <div className=" w-[55%] rounded-[20px] flex flex-col justify-between p-[30px] bg-[#303030]">
            <div className=" flex flex-col gap-[20px]">
              <p className="">REVIEWS</p>
              <h2 className=" w-[85%] ">
                “The good thing about Nomba is it saves a lot of time and money
                so i can do other things - the running of the business part
                itself.”
              </h2>
            </div>
            <div className=" flex items-center gap-[20px] ">
              <img src={testImage3} alt="" />
              <p className="">Kenzo Adekanju</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Testimonials;
