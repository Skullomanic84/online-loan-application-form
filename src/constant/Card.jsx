import React from "react";

const ProductCard = ({
  installment,
  repayment,
  amountOne,
  subtitle,
  buttonText,
  featureone,
  featuretwo,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row rounded-[10px] overflow-hidden shadow-sm
    m-3"
    >
      <div className="p-6 bg-[#FFFFFF]">
        <div className="text-[#012034] text-[14px] font-bold">{subtitle}</div>
        <div className="text-[#003254] text-[24px] font-[900]">{amountOne}</div>
        <button className="hidden md:block shadow-md inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-[#88BC47] hover:[#88BC47] focus:outline-none  focus:ring-offset-0 focus:ring-[#88BC47] sm:">
          {buttonText}
        </button>
      </div>

      <div className="bg-[#F5F7F8] px-6 py-4">
        <p className="text-[#012034] font-light text-[14px]">{repayment}</p>
        <p className="text-[#003254] text-[18px] font-[900]">{installment}</p>
        {/* feature section with icon */}
        <div className="mb-2">
          <div className="">
            <div className=""></div>
            <div className="">
              <p className="text-[#012034] text-[14px] font-[700]">
                {featureone}
              </p>
            </div>
          </div>
          <div className="">
            <div className=""></div>
            <div className="">
              <p className="text-[#012034] text-[14px] font-[700]">
                {featuretwo}
              </p>
            </div>
          </div>
        </div>
        <button className="block md:hidden shadow-md inline-flex justify-center py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-full text-white bg-[#88BC47] hover:[#88BC47] focus:outline-none focus:ring-offset-0 focus:ring-[#88BC47]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
