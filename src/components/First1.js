import React, { useState } from "react";
import { Link} from "react-router-dom";
const First1 = () => {
  const [uname, setName] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const nameHandeler = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("userName", newName);
  };
  const emailHandeler = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem("uEmail", newEmail);
  };
  const phoneHandeler = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    localStorage.setItem("uPhone", newPhone);
  };
  return (
    <>
      <div className="mt-10">
        <h2 className="text-[#052653] text-2xl sm:text-4xl font-semibold">
          Personal Info
        </h2>
        <p className="text-gray-400 mt-3 sm:text-[19px]">
          Please provide your name,email address,and your phone number
        </p>
        <br />
        <p className="sm:text-xl text-base text-[#162D49]">Name</p>
        <input
          type="text"
          name=""
          id=""
          onChange={nameHandeler}
          className="mt-2 md:w-[554px]  border-2 md:h-[48px] p-2 w-[95%] h-[40px] rounded-md hover:border-[#564F9C] outline-none focus:border-[#564F9C]"
        />
        <p className="sm:text-xl text-base text-[#162D49]">Email Address</p>
        <input
          type="email"
          name=""
          id=""
          onClick={emailHandeler}
          className="mt-2 md:w-[554px]  border-2 md:h-[48px] p-2 w-[95%] h-[40px] rounded-md hover:border-[#564F9C] outline-none focus:border-[#564f9c]"
        />
        <p className="sm:text-xl text-base text-[#162D49]">Phone Number</p>
        <input
          type="number"
          onClick={phoneHandeler}
          name=""
          id=""
          className="mt-2 md:w-[554px]  border-2 md:h-[48px] p-2 w-[95%] h-[40px] rounded-md hover:border-[#564F9C] outline-none focus:border-[#564f9c]"
        />
      </div>
      <div className=" bottom-[-11%] left-1 sm:left-auto sm:top-[70%] absolute flex ">
        <Link to="">
          <button
            id="prev"
            disabled
            className="p-3 w-[125px] h-[48px] sm:mr-auto mr-[30%] rounded-md border md:mr-[14rem] xl:mr-[19rem]  "
          >
            Prev
          </button>
        </Link>

        <Link to="second">
          <button
            className="hover:bg-[#154B8B] bg-[#03295A] sm:ml-auto ml-[70%] p-3 w-[125px] text-white h-[48px] rounded-md "
          >
            Next Step
          </button>
        </Link>
      </div>
    </>
  );
};

export default First1;
