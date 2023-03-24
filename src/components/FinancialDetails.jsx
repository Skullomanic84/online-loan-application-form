import { useState } from 'react';
import InputGroup from "../constant/InputGroup";
import InputGroupIcon from "../constant/InputGroupIcon";
import RadioGroupInput from "../constant/RadioGroup"
import SelectInput from "../constant/SelectInput";
import { BsSearch, BsCalendar3 } from "react-icons/bs";
import InputIconRight from "../constant/InputIconRight";
import { BsInfoCircle } from "react-icons/bs";

function FinancialDetails() {
  const [value, setValue] = useState(1);
  const [choice, setChoice] = useState(1);
   const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <div className="flex flex-col w-full p-5 sm:p-10 space-y-6 justify-center">
      {/*employer sector */}
      <SelectInput
        className=""
        label="Employer Sector:"
        value={value}
        setValue={setValue}
        options={[
          { id: 1, caption: "Private Sector" },
          { id: 2, caption: "Public Sector" },
          { id: 3, caption: "Freelancer" },
        ]}
      />

      {/* employer input */}
      <InputIconRight
        name="employer"
        label="Your employer:"
        placeholder={"eg. African Bank"}
        decoration={<BsSearch size="1rem" />}
      />

      {/*eEmployment Status */}
      <SelectInput
        className=""
        label="Employment Status:"
        value={value}
        setValue={setValue}
        options={[
          { id: 1, caption: "Full Time" },
          { id: 2, caption: "Part Time" },
          { id: 3, caption: "Contract" },
        ]}
      />

      {/* employer start date */}
      <InputIconRight
        name="startDate"
        label="Employment start date:"
        placeholder={"eg. 01 June 2010"}
        decoration={<BsCalendar3 size="1rem" />}
      />

      {/*Bank selection */}
      <SelectInput
        className=""
        label="Your Bank:"
        value={value}
        setValue={setValue}
        options={[
          { id: 1, caption: "Absa Bank" },
          { id: 2, caption: "African Bank" },
          { id: 3, caption: "Capitec Bank" },
        ]}
      />

      {/*Payment Frequency */}
      <SelectInput
        className=""
        label="How often do you get paid?"
        value={value}
        setValue={setValue}
        options={[
          { id: 1, caption: "Private" },
          { id: 2, caption: "Fort Night" },
          { id: 3, caption: "Monthly" },
        ]}
      />

      {/* gross income input */}
      <InputGroup
        name="gross"
        label="Your Gross Salary Before Tax:"
        type="text"
        placeholder={"eg. R15,000"}
      />
      {/* net income input */}
      <InputGroup
        name="netIncome"
        label="Your Net Income:"
        placeholder={"eg. R12,256"}
      />
      {/* net income input */}
      <InputGroup
        name="expenses"
        label="Your Living Expenses:"
        placeholder={"eg. R7,000"}
      />
      {/* id section */}
      <InputGroupIcon
        name="Idnumber"
        label="Your ID number:"
        placeholder={"eg.790101382081"}
        decoration={<BsInfoCircle size="1rem" />}
      />

      {/* maintenance option */}
      <RadioGroupInput
        name="name"
        label="Do you pay maintenance?"
        value={choice}
        onChange={(val) => setChoice(val)}
        options={[
          { id: "1", caption: "Yes" },
          { id: "2", caption: "No" },
        ]}
      />
    </div>
  );
}
export default FinancialDetails;
