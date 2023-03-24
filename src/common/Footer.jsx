import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="bg-[#002B60]">
      <div className="container flex items-center justify-center mx-auto">
        <div className="w-1/3 hidden md:block">
          <Image
            src="/footer-logo.svg"
            alt="African bank logo"
            width={187}
            height={48}
            className="p-2"
            priority
          />
        </div>
        <div className="w-1/3 block md:hidden">
          <Image
            src="/Symbols.svg"
            alt="African bank logo"
            width={32}
            height={48}
            className="m-2"
            priority
          />
        </div>
        <div className="w-2/3 flex-grow">
          <p className="text-[#fff] font-light text-[12px]">
            Copyright 2018 African Bank. An authorised ﬁnancial services and
            registered credit provider Reg No. 2014/176899/06 (NCRCP7638)
          </p>
        </div>
        <div className="w-1/3">
          <Link
            href="#"
            className="text-[#fff] font-light text-[12px]border border-b border-l-0 border-r-0 border-t-0"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
