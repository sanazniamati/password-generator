/** @format */
"use client";

// library
import Image from "next/image";
import { useState } from "react";
import Slider from "rc-slider";

// images & icons
import passwordGif from "../../../../public/assets/gif/password.gif";
import refreshIcon from "../../../../public/assets/icons/refresh.svg";
import copyIcon from "../../../../public/assets/icons/copy.svg";

// components
import Checkbox from "../checkbox/checkbox";

function passwordGenerator() {
  const [passwordLength, setPasswordLength] = useState<number>(10);

  const onChangePasswordLength = (value: any) => {
    setPasswordLength(value);
  };

  return (
    <div className=" bg-white rounded-[20px] max-w-[830px] w-full my-0 mx-auto pt-[25px] px-[80px] pb-[40px] border border-solid border-[#588b54]">
      <div className=" text-center mb-[10px]">
        <Image className=" w-[134px]" src={passwordGif} alt="passwordGif" />
      </div>

      <div className="tac">
        <h2 className=" text-[26px] font-bold ">PASSWORD GENERATOR</h2>
        <p className=" text-base max-w-[470px] my-0 mx-auto mt-[5px] ">
          Ensure online account safety by creating strong and secure passwords
        </p>
      </div>

      <div className=" flex items-center mt-[24px]">
        <div className=" flex flex-1 outline outline-1 outline-[#3f563d] rounded-[14px] mr-[15px] ">
          <input
            className=" text-sm w-full border-none outline-none font-semibold py-[11px] px-[12px] "
            type="text"
            placeholder="your password"
            value="B9QI4PDBYY"
          />
          <Image className=" mr-[10px] cursor-pointer " src={refreshIcon} alt="refresh the password" />
        </div>
        <button className=" bg-[#33cccc] rounded-[14px] font-bold py-[8px] px-[18px] flex justify-center outline-none border-none  ">
          <Image className=" mr-[7px]" src={copyIcon} alt="copy password" />
          Copy
        </button>
      </div>

      <span className="mt-[10px] inline-block text-[#12b40e] ">Weak</span>

      {/* Slider */}
      <div className="mt-[30px]">
        <div>
          <label id="slider-label">Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider max={30} min={5} value={passwordLength} onChange={onChangePasswordLength} className="slider-style" />
      </div>

      {/* checkbox */}
      <div className="elements">
        <Checkbox id="uppercase" label="Uppercase" checked={true} name="upper" />
        <Checkbox id="lowercase" label="Lowercase" checked={false} name="lower" />
        <Checkbox id="numbers" label="Numbers" checked={false} name="numbers" />
        <Checkbox id="special chars" label="Special Characters" checked={true} name="specialChars" />
      </div>
    </div>
  );
}

export default passwordGenerator;
