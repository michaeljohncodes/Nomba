import React, { useState } from "react";

const FAQs = () => {
  const [answerOne, setAnswerOne] = useState(false);
  const [answerTwo, setAnswerTwo] = useState(false);
  const [answerThree, setAnswerThree] = useState(false);
  const [answerFour, setAnswerFour] = useState(false);
  const [answerFive, setAnswerFive] = useState(false);

  return (
    <div className=" faq w-full mx-auto py-[70px] px-[20px] border flex flex-col justify-center gap-[70px] items-center text-center ">
      <div className=" flex flex-col justify-center items-center gap-[20px]">
        <p className=" text-[60px] font-semibold w-[70%] max-[835px]:text-[40px] max-[835px]:w-[80%]">
          Some of the things you may want to know
        </p>
        <p className=" text-[22px] font-medium w-[50%] max-[835px]:text-[20px] max-[835px]:w-[80%]">
          We have provided answers to common questions to save you the trouble
          of asking
        </p>
      </div>
      <main className="flex flex-col gap-[20px] w-[60%] font-medium max-[835px]:w-[80%] ">
        <div className=" flex justify-between items-center w-full">
          <p className=" text-[22px] max-[835px]:text-[16px]">
            How does Nomba work?
          </p>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerOne(!answerOne)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b text-[20px] pb-[10px] max-[835px]:text-[16px]">
          {answerOne ? "Answer one comes here" : ""}
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-[22px] max-[835px]:text-[16px]">
            Is there a fee for opening a Nomba account?
          </p>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerTwo(!answerTwo)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b text-[20px] pb-[10px] max-[835px]:text-[16px]">
          {answerTwo ? "Answer two comes here" : ""}
        </div>
        <div className=" flex justify-between items-center">
          <p className=" text-[22px] max-[835px]:text-[16px]">
            Can a personal bank account be used for business?
          </p>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerThree(!answerThree)}
          >
            {" "}
            +{" "}
          </button>
        </div>{" "}
        <div className=" border-b text-[20px] pb-[10px] max-[835px]:text-[16px]">
          {answerThree ? "Answer three comes here" : ""}
        </div>
        <div className=" flex justify-between items-center">
          <p className=" text-[22px] max-[835px]:text-[16px]">
            Is Nomba safe to use?
          </p>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerFour(!answerFour)}
          >
            {" "}
            +{" "}
          </button>
        </div>{" "}
        <div className=" border-b text-[20px] pb-[10px] max-[835px]:text-[16px]">
          {answerFour ? "Answer four comes here" : ""}
        </div>
        <div className=" flex justify-between items-center">
          <p className=" text-[22px] max-[835px]:text-[16px]">
            How do i access my account?
          </p>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerFive(!answerFive)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b text-[20px] pb-[10px] max-[835px]:text-[16px]">
          {answerFive ? "Answer Five comes here" : ""}
        </div>
      </main>
      <div className=" flex justify-between items-center">
        <p className="text-[22px] max-[835px]:text-[18px]">
          Got more questions? Click here for more
          <strong> Frequently Asked Questions</strong>
        </p>
      </div>
    </div>
  );
};

export default FAQs;
