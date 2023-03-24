import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import PersonalDetails from "./PersonalDetails";
import Otp from './Otp';
import Offer from './Offer';
import FinancialDetails from "./FinancialDetails";


const steps = [
  { id: "1", title: "Personal Details", component:<PersonalDetails />},
  { id: "2", title: "One Time PIN", component:<Otp /> },
  { id: "3", title: "Financial Details", component:<FinancialDetails />},
  { id: "4", title: "Offer", component:<Offer /> },
];

export default function FormStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const isLastStep = currentStep === steps.length - 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };


  return (
    <div className="flex flex-col justify-between my-3 mx-[30px] mx-auto">
      <div className="flex mt-6 text-bold">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`${
              currentStep === index
                ? "text-[#fff] underline underline-offset-8 "
                : "text-[#C4D82E] text-lg"
            } flex items-center  w-full text-[#053F65] flex-wrap`}
          >
            <span className="text-sm font-bold pr-[5px]">{step.title}</span>

            {currentStep > index ? (
              <CheckCircleIcon className="h-5 w-5 ml-1 text-[#C4D82E] " />
            ) : null}

            <div className="flex-1 px-1  text-gray-400">
              <svg
                className="w-9 h-9 text-[#053F65]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        {/* form fields go here */}
        {steps[currentStep].component}
      </div>
      <div className="flex items-center justify-evenly">
        <div className="flex items-center">
          {currentStep > 0 && (
            <button
              onClick={handlePreviousStep}
              className="shadow-sm ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-full text-white bg-[#4D85A9] hover:bg-[#4D85A9] focus:outline-none  focus:ring-offset-0 focus:ring-[#4D85A9]"
            >
              Back
            </button>
          )}
          <button
            onClick={isLastStep ? handleSubmit : handleNextStep}
            className="shadow-sm ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-full text-white bg-[#88BC47] hover:[#88BC47] focus:outline-none  focus:ring-offset-0 focus:ring-[#88BC47]"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4 items-center justify-center">
        <div className="flex justify-center items-center">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`${
                currentStep === index ? "bg-green-500" : "bg-gray-200"
              } w-2 h-2 rounded-full mx-1 `}
            />
          ))}
        </div>
        <div className="mt-4 text-[#fff] text-sm">
          Step {steps[currentStep].id} of 5
        </div>
      </div>
    </div>
  );
}
