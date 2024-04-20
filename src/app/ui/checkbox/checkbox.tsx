/** @format */

import React from "react";

function checkbox({ id, label, checked, name, onChange }: any) {
  return (
    <div className="flex items-center justify-between flex-row-reverse mt-[8px] ">
      <input
        className=" appearance-none w-[20px] h-[20px] rounded-[4px] mr-[8px] border border-solid border-[#292d32] outline-none cursor-pointer checked:bg-[#33cccc] checked:relative checked:border checked:border-solid checked:border-[#33cccc]
         checked:before:text-[20.8px] checked:before:content-['\2714'] checked:before:text-white checked:before:absolute checked:before:right-0.5 checked:before:top-[-4px]
          disabled:border-[#c0c0c0] disabled:bg-[#c0c0c0] 
           focus:shadow-[0px_0px_20px_rgba(51, 204, 204, 1)]
          "
        id={id}
        type="checkbox"
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <label className=" text-[14px] cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default checkbox;
