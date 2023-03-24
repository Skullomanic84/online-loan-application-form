import Image from "next/image";
import { useState } from "react";


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-[#002B60]">
      <div className="container flex items-center justify-between mx-auto">
        <div className="w-1/3">
          <Image
            src="/logo.svg"
            alt="African bank logo"
            width={187}
            height={48}
            className="p-2"
            priority
          />
        </div>

        <div className="w-1/3 text-[#fff] font-light text-[12px]">
          <div className="block md:hidden">
            <Image
              src="/sun.png"
              alt="African bank logo"
              width={32}
              height={48}
              className="m-2"
              priority
            />
            <p className="text-[8px] opacity-[0.78]">Light/Dark</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
