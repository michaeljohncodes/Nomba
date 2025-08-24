import React from "react";
import floatImage1 from ".././../assets/images/float-image1.png";
import floatImage2 from ".././../assets/images/float-image2.png";
import floatImage3 from ".././../assets/images/float-image3.png";
import floatImage4 from ".././../assets/images/float-image4.png";
import floatImage5 from ".././../assets/images/float-image5.png";
import floatImage6 from ".././../assets/images/float-image6.png";
import floatImage7 from ".././../assets/images/float-image7.png";

const Floats = () => {
  return (
    <div className=" floats w-full mx-auto py-[70px] px-[50px] flex flex-col  items-center ">
      <main className=" border w-full flex justify-between gap-x-[40px] items-center overflow-scroll py-[50px] max-[835px]:w-full max-[835px]:flex max-[835px]:overflow-scroll max-[1440px]:overflow-scroll max-[835px]:snap-start max-[835px]:gap-[20px] ">
        <img src={floatImage1} alt="" className="" />

        <img src={floatImage2} alt="" />

        <img src={floatImage3} alt="" />

        <img src={floatImage4} alt="" />

        <img src={floatImage5} alt="" />

        <img src={floatImage6} alt="" />

        <img src={floatImage7} alt="" />
      </main>
    </div>
  );
};

export default Floats;
