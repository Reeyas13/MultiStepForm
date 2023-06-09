import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Third = () => {
  const [online, setOnline] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);
  useEffect(() => {
    localStorage.setItem("online", JSON.stringify(online));
    localStorage.setItem("profile", JSON.stringify(profile));
    localStorage.setItem("storage", JSON.stringify(storage));
  }, [online, storage, profile]);
  return (
    <>
      <div className="mt-10">
        <h2 className="text-[#052653] text-2xl sm:text-4xl font-semibold">
          Pick add-ons{" "}
        </h2>
        <p className="text-gray-400 mt-3 sm:text-[19px]">
          Add-ons help enhance your gaming experience
        </p>
        <br />
        <div>
          <div
            id="onlineService"
            className="w-[100%] rounded-lg  flex gap-6 border border-[#DEDDE2] hover:border-[#524E98] sm:h-[80px] items-center "
          >
            <input
              type="checkbox"
              name=""
              className="h-4 w-4 ml-5 "
              onClick={() => {
                setOnline(!online);
                const onlineService = document.getElementById("onlineService");
                onlineService.classList.toggle("border-[#DEDDE2]");
                onlineService.classList.toggle("border-[#524e98]");
              }}
            />
            <div>
              <p className="text-[#001840] font-bold text-lg">Online Serivce</p>
              <p className="text-[#A1A1AB] sm:text-base ">
                Access to multiplayer games
              </p>
            </div>
            <div className="sm:ml-56 sm:mr-2">
              <p className="text-[#6D62D9]  ml-2"> +1$/mo</p>
            </div>
          </div>
          <div
            id="largerStorage"
            className="w-[100%] rounded-lg mt-2 flex gap-6 border border-[#DEDDE2] hover:border-[#524E98] sm:h-[80px] items-center "
          >
            <input
              type="checkbox"
              name=""
              className="h-4 w-4 ml-5 "
              onClick={() => {
                setStorage(!storage);
                const largerStorage = document.getElementById("largerStorage");
                largerStorage.classList.toggle("border-[#DEDDE2]");
                largerStorage.classList.toggle("border-[#524e98]");
              }}
            />
            <div>
              <p className="text-[#001840] font-bold text-lg">Larger Storage</p>
              <p className="text-[#A1A1AB]">Extra 1TB of cloudsave </p>
            </div>
            <div className="sm:ml-56 sm:mr-2">
              <p className="text-[#6D62D9] sm:ml-10">+2$/mo</p>
            </div>
          </div>
          <div
            id="customizableProfile"
            className="w-[100%] rounded-lg mt-2 flex gap-6 border border-[#DEDDE2] hover:border-[#524E98] sm:h-[80px] items-center "
          >
            <input
              type="checkbox"
              name=""
              className="h-4 w-4 ml-5 "
              onClick={() => {
                setProfile(!profile);
                const customizableProfile = document.getElementById(
                  "customizableProfile"
                );
                customizableProfile.classList.toggle("border-[#DEDDE2]");
                customizableProfile.classList.toggle("border-[#524e98]");
              }}
            />
            <div>
              <p className="text-[#001840] font-bold text-lg">
                Customizable profile
              </p>
              <p className="text-[#A1A1AB]">Custom theme on your profile</p>
            </div>
            <div className="sm:ml-56 sm:mr-2">
              <p className="text-[#6D62D9]  ">+2$/mo</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bottom-[-11%] left-1 sm:left-auto sm:top-[70%] absolute flex ">
        <Link to="/second">
          <button className="p-3 w-[125px] h-[48px] sm:mr-auto mr-[30%] rounded-md border md:mr-[14rem] xl:mr-[19rem]  ">
            Prev
          </button>
        </Link>

        <Link to="/fourth">
          <button className="hover:bg-[#154B8B] bg-[#03295A] sm:ml-auto ml-[70%] p-3 w-[125px] text-white h-[48px] rounded-md ">
            Next Step
          </button>
        </Link>
      </div>
    </>
  );
};

export default Third;
