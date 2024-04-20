/** @format */

import Image from "next/image";
import passwordGif from "../../../../public/assets/gif/password.gif";

function passwordGenerator(props) {
  return (
    <div className=" bg-white rounded-[20px] max-w-[830px] w-full my-0 mx-auto pt-[25px] px-[80px] pb-[40px] border border-solid border-[#588b54]">
      <div className=" text-center mb-[10px]">
        <Image className=" w-[134px]" src={passwordGif} alt="passwordGif" />
      </div>
    </div>
  );
}

export default passwordGenerator;
