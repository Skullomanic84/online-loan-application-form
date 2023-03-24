import React from 'react';
import InputGroup from '../constant/InputGroup';
import InputGroupIcon from '../constant/InputGroupIcon';
import { BsInfoCircle } from "react-icons/bs";

const PersonalDetails = () => {
  return (
    <div className="flex flex-col w-full p-5 sm:p-10 space-y-6">
      <InputGroup
        name="name"
        label="Your name:"
        type="text"
        placeholder={"Jacob Mahlangu"}
      />
      <InputGroup
        name="cellNumber"
        label="Your cell number:"
        placeholder={"+27 0662492280"}
      />

      <InputGroupIcon
        name="Idnumber"
        label="Your ID number:"
        placeholder={"eg.790101382081"}
        decoration={<BsInfoCircle size="1rem" />}
      />
    </div>
  );
}

export default PersonalDetails