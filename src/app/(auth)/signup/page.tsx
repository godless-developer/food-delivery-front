"use client";
import { useEffect, useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState(""); // email state нэмнэ!

  const FormSteps = [
    <FirstPage
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      setEmail={setEmail} // дамжуулна
    />,
    <SecondPage
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      email={email} // дамжуулна
    />,
  ];

  useEffect(() => {
    setCurrentStep(0);
  }, []);

  return (
    <div
      className="w-[50%] cursor-default h-screen flex items-center justify-center"
      key={currentStep}
    >
      {FormSteps[currentStep]}
    </div>
  );
}
