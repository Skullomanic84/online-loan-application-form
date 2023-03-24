
function InputGroupIcon({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  decoration,
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <div className="flex w-full items-center">
      <div className="flex-1 w-32">
        <label
          htmlFor={name}
          className="block text-[#fff] font-[200] md:text-right mb-1 md:mb-0 pr-6"
        >
          {label}
        </label>
      </div>
      <div className="flex-1 w-64 md:items-center flex items-stretch w-full relative">
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          aria-label={label}
          className={`peer block w-full py-3 px-3 text-gray-600 bg-white rounded-full border shadow-sm border-gray-200 focus:border-[#259CD8] focus:outline-none focus:ring-0 appearance-none  transition-colors duration-300 ${
            disabled ? "bg-gray-200" : ""
          } ${inputClassName}`}
          disabled={disabled}
        />
        <div
          className={`absolute flex items-center justify-center top-1 right-0 px-3 py-3 text-gray-600  ${
            disabled ? "bg-gray-200" : ""
          } ${decorationClassName}`}
        >
          {decoration}
        </div>
      </div>
    </div>
  );
}

export default InputGroupIcon;
