import React, { useState ,useEffect } from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";
import Switch1 from "./Switch1";
import { Link } from "react-router-dom";

const Second2 = () => {
  const [arcade1 ,setArcade1]= useState(false)
  const [advanced1 ,setAdvanced1]= useState(false)
  const [pro1 ,setPro1]= useState(false)
  const [monthly,setMonthly] = useState(true)
  const box1Handler = () => {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    box1.classList.toggle("border-[#DBDBDD]");
    box2.classList.remove("border-[#544E94]");
    box3.classList.remove("border-[#544E94]");
    box1.classList.toggle("border-[#544E94]");
    setArcade1(!arcade1)
    // localStorage.setItem("arcade1",arcade1)
  };
  const box2Handler = () => {
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box1 = document.getElementById("box1");
    box1.classList.remove("border-[#544E94]");
    box3.classList.remove("border-[#544E94]");
    box2.classList.toggle("border-[#DBDBDD]");
    box2.classList.toggle("border-[#544E94]");
    setAdvanced1(!advanced1)
  };
  const box3Handler = () => {
    const box3 = document.getElementById("box3");
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    box1.classList.remove("border-[#544E94]");
    box2.classList.remove("border-[#544E94]");

    box3.classList.toggle("border-[#DBDBDD]");
    box3.classList.toggle("border-[#544E94]");
    setPro1(!pro1)
  };
  useEffect(() => {
    localStorage.setItem("arcade1", JSON.stringify(arcade1));
    localStorage.setItem("Advanced1", JSON.stringify(advanced1));
    localStorage.setItem("pro1", JSON.stringify(pro1));
  }, [arcade1,advanced1,pro1]);

  return (
    <>
      <div className="mt-10">
        <h2 className="text-[#052653] text-2xl sm:text-4xl font-semibold">
          Select your plan{" "}
        </h2>
        <p className="text-gray-400 mt-3 sm:text-[19px]">
          you have the option of monthly or yealy billing{" "}
        </p>
        <br />
        <div className=" sm:flex block h-[160px] w-auto mt-3 gap-10 ">
          <div
            className="sm:w-[150px] sm:h-[160px] h-[76px] flex sm:block border-2 rounded-md border-[#DBDBDD] hover:border-[#544E94] focus:border-[#544E94] outline-none"
            id="box1"
            onClick={box1Handler}
          >
            
            <img src={arcade} alt="" className="mx-3  m-3 " />
            <br />
            <div>
              
            <p className=" mt-2 mx-3 font-bold text-xl text-[#0A1E36]">
              Arcade
            </p>
            <p className=" mt-1 mx-3 text-[#A4A4AC]">9$/mo</p>
            </div>
          </div>
          <div
            className="sm:w-[150px]  sm:h-[160px] h-[76px] flex sm:block border-2 rounded-md border-[#DBDBDD] hover:border-[#544E94] focus:border-[#544E94] outline-none"
            id="box2"
            onClick={box2Handler}
          >
            <img src={advanced} alt="" className="mx-3  m-3" />
            <br />
            <div>

            <p className=" mt-2 mx-3 font-bold text-xl text-[#0A1E36]">
              Advanced
            </p>
            <p className=" mt-1 mx-3 text-[#A4A4AC]">12$/mo</p>
            </div>
          </div>
          <div
            className="sm:w-[150px] sm:h-[160px] h-[76px]  flex sm:block border-2 rounded-md border-[#DBDBDD] hover:border-[#544E94] focus:border-[#544E94] outline-none"
            id="box3"
            onClick={box3Handler}
          >
            <img src={pro} alt="" className="mx-3  m-3" />
            <br />
            <div>

            <p className=" mt-2 mx-3 font-bold text-xl text-[#0A1E36]">Pro</p>
            <p className=" mt-1 mx-3 text-[#A4A4AC]">15$/mo</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="justify-center items-center  flex gap-3 mt-12 sm:mt-0 w-[90%] ml-5 rounded-3xl bg-[#F8F9FE]">
        <span className="mt-3">Monthly</span>
        <label >
        <Switch1  />
        </label>
        <span className="mt-3">Yearly</span>
      </div>
      <div className=" bottom-[-11%] left-1 sm:left-auto sm:top-[70%] absolute flex ">
        <Link to="/">
          <button
            className="p-3 w-[125px] h-[48px] sm:mr-auto mr-[30%] rounded-md border md:mr-[14rem] xl:mr-[19rem]  "
          >
            Prev
          </button>
        </Link>

        <Link to="/third">
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

export default Second2;
