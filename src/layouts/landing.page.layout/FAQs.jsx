import React, { useState } from "react";

const FAQs = () => {
  const [answerOne, setAnswerOne] = useState(false);
  const [answerTwo, setAnswerTwo] = useState(false);
  const [answerThree, setAnswerThree] = useState(false);
  const [answerFour, setAnswerFour] = useState(false);
  const [answerFive, setAnswerFive] = useState(false);

  return (
    <div className=" faq w-full mx-auto py-[50px] px-[40px] border flex flex-col justify-center gap-[70px] items-center text-center max-[430px]:gap-[40px] max-[430px]:px-[10px] ">
      <div className=" flex flex-col justify-center items-center gap-[20px] ">
        <p className=" text-[60px] font-semibold w-[70%] max-[835px]:text-[40px] max-[835px]:w-[80%] max-[430px]:w-[60%] max-[430px]:text-[20px]">
          Some of the things you may want to know
        </p>
        <p className=" text-[22px] font-medium w-[50%] max-[835px]:text-[20px] max-[835px]:w-[80%] max-[430px]:w-[70%] max-[430px]:text-[12px]">
          We have provided answers to common questions to save you the trouble
          of asking
        </p>
      </div>
      <main className="flex flex-col gap-[20px] w-[60%] text-[22px] max-[835px]:text-[16px] max-[430px]:text-[10px] max-[835px]:w-[80%] max-[430px]:w-[80%] ">
        <div className=" flex justify-between items-center font-bold ">
          <p className="">How does Nomba work?</p>
          <button
            className=" hover:cursor-pointer"
            onClick={() => setAnswerOne(!answerOne)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b pb-[10px]">
          {answerOne ? "Answer one comes here" : ""}
        </div>
        <div className="flex justify-between items-center font-bold">
          <p className="">Is there a fee for opening a Nomba account?</p>
          <button
            className="hover:cursor-pointer"
            onClick={() => setAnswerTwo(!answerTwo)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b pb-[10px]">
          {answerTwo ? "Answer two comes here" : ""}
        </div>
        <div className=" flex justify-between items-center font-bold">
          <p className=" ">Can a personal bank account be used for business?</p>
          <button
            className="hover:cursor-pointer"
            onClick={() => setAnswerThree(!answerThree)}
          >
            {" "}
            +{" "}
          </button>
        </div>{" "}
        <div className=" border-b pb-[10px]">
          {answerThree ? "Answer three comes here" : ""}
        </div>
        <div className=" flex justify-between items-center font-bold">
          <p className="">Is Nomba safe to use?</p>
          <button
            className="hover:cursor-pointer"
            onClick={() => setAnswerFour(!answerFour)}
          >
            {" "}
            +{" "}
          </button>
        </div>{" "}
        <div className=" border-b pb-[10px]">
          {answerFour ? "Answer four comes here" : ""}
        </div>
        <div className=" flex justify-between items-center font-bold">
          <p className=" ">How do i access my account?</p>
          <button
            className="hover:cursor-pointer"
            onClick={() => setAnswerFive(!answerFive)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b pb-[10px]">
          {answerFive ? "Answer Five comes here" : ""}
        </div>
      </main>
      <div className=" flex justify-between items-center">
        <p className="text-[22px] max-[835px]:text-[18px] max-[430px]:text-[12px]">
          Got more questions?
          <br /> Click here for more
          <strong> Frequently Asked Questions</strong>
        </p>
      </div>
    </div>
  );
};

export default FAQs;
