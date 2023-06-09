import React, { useEffect, useState } from "react";
import image from "../assets/bgsidebardesktop.svg";
import mimage from "../assets/bg-sidebar-mobile.svg";
import { Link, Route, Routes } from "react-router-dom";
import First1 from "./First1";
import Second2 from "./Second2";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";

const MasterPage = () => {
 

  return (
    <>
      <div className="w-[1000px] h-[600px] rounded-md bg-[#ffffff] hidden  mx-auto mt-[103px] sm:flex gap-12">
        <div
          className="w-[275px] h-[570px] mx-3 mt-3 rounded-md "
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex">
            <div id="one" className="h-[40px] ml-6 mt-10 w-[40px] rounded-full border items-center justify-center flex  ">
              <label htmlFor="">1</label>{" "}
            </div>
            <div className="ml-6 mt-9">
              <p className="text-white font-thin">STEP 1</p>
              <p className="font-bold text-white">YOUR INFO</p>
            </div>
          </div>
          <div className="flex">
            <div id="two" className="h-[40px] ml-6 mt-10 w-[40px] rounded-full border items-center justify-center flex ">
              <label htmlFor="">2</label>{" "}
            </div>
            <div className="ml-6 mt-9">
              <p className="text-white font-thin">STEP 2</p>
              <p className="font-bold text-white"> SELECT PLAN</p>
            </div>
          </div>
          <div className="flex">
            <div id="three" className="h-[40px] ml-6 mt-10 w-[40px] rounded-full border items-center justify-center flex ">
              <label htmlFor="">3</label>{" "}
            </div>
            <div className="ml-6 mt-9">
              <p className="text-white font-thin">STEP 3</p>
              <p className="font-bold text-white">ADD-ONS</p>
            </div>
          </div>
          <div className="flex">
            <div id="four" className="h-[40px] ml-6 mt-10 w-[40px] rounded-full border items-center justify-center flex ">
              <label htmlFor="">4</label>{" "}
            </div>
            <div className="ml-6 mt-9">
              <p className="text-white font-thin">STEP 4</p>
              <p className="font-bold text-white">SUMMARY</p>
            </div>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<First1 />} />
            <Route path="/second" element={<Second2 />} />
            <Route path="/third" element={<Third />} />
            <Route path="/fourth" element={<Fourth />} />
            <Route path="fifth" element = {<Fifth /> } / >
          </Routes>

         
        </div>
      </div>
      <div className="sm:hidden ">
        <div
          className="w-[100%] h-[175px]   "
          style={{
            backgroundImage: `url(${mimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center justify-center">
            <div className="h-[40px] mx-5 mt-10 w-[40px] rounded-full border items-center justify-center flex bg-[#BFE1FD]">
              <label htmlFor="">1</label>{" "}
            </div>
            <div className="h-[40px] mx-5 mt-10 w-[40px] rounded-full border items-center justify-center flex bg-[#BFE1FD]">
              <label htmlFor="">2</label>{" "}
            </div>
            <div className="h-[40px] mx-5 mt-10 w-[40px] rounded-full border items-center justify-center flex bg-[#BFE1FD]">
              <label htmlFor="">3</label>{" "}
            </div>
            <div className="h-[40px] mx-5 mt-10 w-[40px] rounded-full border items-center justify-center flex bg-[#BFE1FD]">
              <label htmlFor="">4</label>{" "}
            </div>
          </div>
        </div>
        <div className="w-[90%] left-[5%] rounded-md bg-white  h-[505px] absolute top-[15%]">
          <div className="m-5">
            <Routes>
              <Route path="/" element={<First1 />} />
              <Route path="/second" element={<Second2 />} />
              <Route path="/third" element={<Third />} />
              <Route path="/fourth" element={<Fourth />} />
              <Route path  = "fifth" element = {<Fifth />} / >
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterPage;
