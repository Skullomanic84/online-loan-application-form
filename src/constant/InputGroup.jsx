function InputGroup({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled,
}) {
  return (
    <div className="flex w-full items-center">
      <div className="flex-1 w-32 ">
        <label
          htmlFor={name}
          className="block text-[#fff] font-[200] md:text-right mb-1 md:mb-0 pr-6"
        >
          {label}
        </label>
      </div>
      <div className="flex-1 w-64 relative">
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          aria-label={label}
          className={`peer w-full py-3 px-3 text-base rounded-full border shadow-sm border-gray-200 focus:border-[#259CD8] text-black-400 focus:outline-none focus:ring-0 appearance-none transition-colors duration-300 ${
            disabled ? "bg-gray-100" : ""
          }`}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default InputGroup;
