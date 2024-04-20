/** @format */
"use client";

// library
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ToastContainer, toast } from "react-toastify";

// images & icons
import passwordGif from "../../../../public/assets/gif/password.gif";
import refreshIcon from "../../../../public/assets/icons/refresh.svg";
import copyIcon from "../../../../public/assets/icons/copy.svg";

// components
import Checkbox from "../checkbox/checkbox";

const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()?";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState<number>(10);
  const [lowerCase, setLowerCase] = useState<boolean>(true);
  const [upperCase, setUpperCase] = useState<boolean>();
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);

  useEffect(() => {
    generatePassword();
  }, [passwordLength]);

  const onChangePasswordLength = (value: any) => {
    setPasswordLength(value);
  };

  const generatePassword = () => {
    let characterList = "";

    if (lowerCase) {
      characterList += lowercaseList;
    }
    if (upperCase) {
      characterList += uppercaseList;
    }
    if (numbers) {
      characterList += numbersList;
    }
    if (symbols) {
      characterList += symbolsList;
    }

    // console.log(characterList);

    let tempPassword = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      tempPassword += characterList.charAt(characterIndex);
    }

    setPassword(tempPassword);
  };

  const copyPassword = async () => {
    const copiedText = await navigator.clipboard.readText();
    if (password.length && copiedText !== password) {
      navigator.clipboard.writeText(password);
      toast.success("Password Copied to clipboard", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className=" bg-white rounded-[20px] max-w-[830px] w-full my-0 mx-auto pt-[25px] px-[80px] pb-[40px] border border-solid border-[#588b54]">
        <div className=" flex  justify-center text-center mb-[10px]">
          <Image className=" w-[134px]" src={passwordGif} alt="passwordGif" />
        </div>

        <div className=" flex flex-col items-center">
          <h2 className=" text-[26px] font-bold ">PASSWORD GENERATOR</h2>
          <p className=" text-base max-w-[470px] my-0 mx-auto mt-[5px] text-center ">
            Ensure online account safety by creating strong and secure passwords
          </p>
        </div>

        <div className=" flex items-center mt-[24px]">
          <div className=" flex flex-1 outline outline-1 outline-[#3f563d] rounded-[14px] mr-[15px] ">
            <input
              className=" text-sm w-full border-none outline-none font-semibold py-[11px] px-[12px] "
              type="text"
              placeholder="your password"
              value={password}
            />
            <Image
              className=" mr-[10px] cursor-pointer "
              src={refreshIcon}
              alt="refresh the password"
              onClick={generatePassword}
            />
          </div>
          <button
            onClick={copyPassword}
            className=" bg-[#33cccc] rounded-[14px] font-bold py-[8px] px-[18px] flex justify-center outline-none border-none  "
          >
            <Image className=" mr-[7px]" src={copyIcon} alt="copy password" />
            Copy
          </button>
        </div>

        <span className="mt-[10px] inline-block text-[#12b40e] font-medium ">Weak</span>

        {/* Slider */}
        <div className="mt-[30px]">
          <div>
            <label id="slider-label">Password Length: </label>
            <span>{passwordLength}</span>
          </div>
          <Slider
            max={30}
            min={5}
            defaultValue={passwordLength}
            value={passwordLength}
            onChange={onChangePasswordLength}
            className=" mt-[22px] mb-[30px]"
          />
        </div>

        {/* checkbox */}
        <div className="elements">
          <Checkbox
            id="uppercase"
            label="Uppercase"
            checked={upperCase}
            name="upper"
            onChange={() => setUpperCase(!upperCase)}
          />
          <Checkbox
            id="lowercase"
            label="Lowercase"
            checked={lowerCase}
            name="lower"
            onChange={() => setLowerCase(!lowerCase)}
          />
          <Checkbox
            id="numbers"
            label="Numbers"
            checked={numbers}
            name="numbers"
            onChange={() => setNumbers(!numbers)}
          />
          <Checkbox
            id="symbols"
            label="Symbols"
            checked={symbols}
            name="symbols"
            onChange={() => setSymbols(!symbols)}
          />
        </div>

        {/* <button type="button" onClick={generatePassword}>
        Generate Password
      </button> */}
      </div>
      <ToastContainer />
    </>
  );
}

export default PasswordGenerator;
