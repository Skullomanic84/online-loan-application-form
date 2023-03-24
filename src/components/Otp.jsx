import React, { useState, useRef } from "react";

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const handleChange = (event, index) => {
    const value = event.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index === 0 && value !== "") {
      inputRef2.current.focus();
    } else if (index === 1 && value !== "") {
      inputRef3.current.focus();
    } else if (index === 2 && value !== "") {
      inputRef4.current.focus();
    }
  };

  const handlePaste = (event) => {
    const paste = event.clipboardData.getData("text");
    const newOtp = [...otp];
    for (let i = 0; i < paste.length; i++) {
      newOtp[i] = paste[i];
    }
    setOtp(newOtp);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <p className="text-[14px] text-[#fff] font-bold py-6">
          An OTP (One time PIN) has been sent to a mobile number ending with
          <span className="text-[#88BC47]"> * * * * * * * 894</span>
        </p>
        <p className="text-[14px] text-[#fff] font-bold">
          The OTP will be valid for 5 minutes. If you have not received the
          message please click on{" "}
          <span className="text-[#18BAFF] border border-b border-l-0 border-r-0 border-t-0">
            Resend OTP
          </span>
        </p>
      </div>
      <div className="flex items-center py-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={
              index === 0
                ? inputRef1
                : index === 1
                ? inputRef2
                : index === 2
                ? inputRef3
                : inputRef4
            }
            type="text"
            maxLength="1"
            className="w-16 h-16 text-center text-4xl border rounded-lg mx-2 focus:outline-none focus:border-blue-500"
            value={digit}
            onChange={(event) => handleChange(event, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
