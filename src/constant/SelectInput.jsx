import { useMemo, Fragment, useState } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";

const SelectInput = ({
  value,
  label,
  setValue,
  options,
  className = "",
  disabled,
}) => {
  const selectedOption = useMemo(
    () => options.find((o) => o.id === value),
    [options, value]
  );

  return (
    <div className="flex w-full items-center">
      <Listbox value={value} onChange={setValue} disabled={disabled}>
        <div className="flex-1 w-32">
          <label
            htmlFor={label}
            className="block text-[#fff] md:text-right mb-1 md:mb-0 pr-6"
          >
            {label}
          </label>
        </div>
        <div className={`flex-1 w-64 relative  ${className}`}>
          <Listbox.Button
            className={`relative w-full cursor-pointer py-3 px-3 text-left rounded-full border shadow-sm border-gray-200 focus:border-[#259CD8] focus:ring-[#259CD8] text-black-400 appearance-none transition-colors duration-300
          ${
            disabled
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white cursor-pointer"
          }
        
        `}
          >
            <span className="block truncate">{selectedOption.caption}</span>
            <span className="absolute flex top-[.115rem] right-0 flex items-center  px-4 py-[1rem] text-gray-600 border-gray-200 border-l">
              <FaChevronDown
                size="0.80rem"
                className="text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-[-1] max-h-60 w-full overflow-auto bg-white text-black-500 rounded-[20px] shadow-sm focus:border-[#259CD8] border-b border-l border-r border-t-0 shadow-sm border-gray-200">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-3 pl-10 pr-4 ${
                      active ? "bg-[#88BC47]" : ""
                    }`
                  }
                  value={option.id}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected
                            ? "font-medium text-[#002B60]"
                            : "font-normal"
                        }`}
                      >
                        {option.caption}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <FaCheck size="0.5rem" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectInput;
