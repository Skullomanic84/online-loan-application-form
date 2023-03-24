import { RadioGroup } from "@headlessui/react";

const RadioGroupInput = ({ label, name, value, options, onChange, disabled }) => {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      disabled={disabled}
      name={name}
      className="flex w-full items-center"
    >
      <div className="flex-1 w-32">
        <RadioGroup.Label className="block text-[#fff] font-[200] md:text-right mb-1 md:mb-0 pr-6">
          {label}
        </RadioGroup.Label>
      </div>

      <div className="flex-1 w-64">
        <div className="flex gap-8 ">
          {options.map((o) => (
            <RadioGroup.Option key={o.id} value={o.id}>
              {({ checked }) => (
                <div className="flex items-center justify-between text-[#fff] font-[200]">
                  <div className="mr-4">{o.caption}</div>
                  <div
                    className={`
                    flex h-5 w-5 items-center justify-center rounded-full transition-all duration-200 outline-none ring-1 cursor-pointer
                    ${!checked && !disabled ? "ring-[#003B61]" : ""}
                    ${checked && !disabled ? "ring-[#003B61]" : ""} 
                    ${disabled ? "bg-gray-200 ring-[#003B61]" : "bg-white"}  
                  `}
                  >
                    <span
                      className={`
                      w-3 h-3 rounded-full
                      ${checked ? "scale-100" : "scale-0"}
                      ${checked && !disabled ? "bg-[#259CD8]" : "bg-gray-400"}
                      transition-transform duration-200 ease-out`}
                    />
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </div>
    </RadioGroup>
  );
};

export default RadioGroupInput;
