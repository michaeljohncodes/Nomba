import React, { useState } from "react";
import AnswerOne from "../faqStates/AnswerOne";

const FAQs = () => {
  const [answerOne, setAnswerOne] = useState(false);
  const [answerTwo, setAnswerTwo] = useState(false);
  const [answerThree, setAnswerThree] = useState(false);
  const [answerFour, setAnswerFour] = useState(false);
  const [answerFive, setAnswerFive] = useState(false);

  return (
    <div className=" faq w-full mx-auto py-[70px] px-[20px] border flex flex-col justify-center gap-[70px] items-center text-center ">
      <h1 className=" font-medium w-[60%]">
        Some of the things you may want to know
      </h1>
      <h4 className=" font-medium w-[40%]">
        We have provided answers to common questions to save you the trouble of
        asking
      </h4>
      <main className="flex flex-col gap-[40px] w-[60%] font-medium ">
        <div className=" flex justify-between items-center w-full">
          <h4>How does Nomba work?</h4>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerOne(!answerOne)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b text-[20px] pb-[10px]">
          {answerOne ? "Answer one comes here" : ""}
        </div>
        <div className="flex justify-between items-center">
          <h4>Is there a fee for opening a Nomba account?</h4>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerTwo(!answerTwo)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b text-[20px] pb-[10px]">
          {answerTwo ? "Answer two comes here" : ""}
        </div>
        <div className=" flex justify-between items-center">
          <h4>Can a personal bank account be used for business?</h4>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerThree(!answerThree)}
          >
            {" "}
            +{" "}
          </button>
        </div>{" "}
        <div className=" border-b text-[20px] pb-[10px]">
          {answerThree ? "Answer three comes here" : ""}
        </div>
        <div className=" flex justify-between items-center">
          <h4>Is Nomba safe to use?</h4>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerFour(!answerFour)}
          >
            {" "}
            +{" "}
          </button>
        </div>{" "}
        <div className=" border-b text-[20px] pb-[10px]">
          {answerFour ? "Answer four comes here" : ""}
        </div>
        <div className=" flex justify-between items-center">
          <h4>How do i access my account?</h4>
          <button
            className=" text-[30px] hover:cursor-pointer"
            onClick={() => setAnswerFive(!answerFive)}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className=" border-b text-[20px] pb-[10px]">
          {answerFive ? "Answer Five comes here" : ""}
        </div>
      </main>
      <div className=" flex justify-between items-center">
        <h4>
          Got more questions? Click here for more
          <strong> Frequently Asked Questions</strong>
        </h4>
      </div>
    </div>
  );
};

export default FAQs;
