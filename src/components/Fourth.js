import React from "react";
import { Link } from "react-router-dom";

const Fourth = () => {
  const monthly = JSON.parse(localStorage.getItem("monthly1"));
  const arcade = JSON.parse(localStorage.getItem("arcade1"));
  const pro = JSON.parse(localStorage.getItem("pro1"));
  const advanced = JSON.parse(localStorage.getItem("Advanced1"));
  const online = JSON.parse(localStorage.getItem("online"));
  const storage = JSON.parse(localStorage.getItem("storage"));
  const profile = JSON.parse(localStorage.getItem("profile"));
  const mArcade = 9;
  const mAdvanced = 12;
  const mPro = 15;
  const YArcade = 9;
  const YAdvanced = 12;
  const YPro = 15;
  let price = 0;
  const money = () => {
    if (monthly) {
      if (pro) {
        return <>${15}/mo</>;
      } else if (arcade) {
        return <>${9}/mo</>;
      } else if (advanced) {
        return <>${12}/mo</>;
      }
    } else {
      if (pro) {
        return <>${150}/yr</>;
      } else if (arcade) {
        return <>${90}/yr</>;
      } else if (advanced) {
        return <>${120}/yr</>;
      }
    }
  };
  //price//
   if(monthly){
    if (pro) {
      price=15
      if(online){
        price+=1
      }
      if(storage){
        price+=2
      }
      if(profile){
        price+=2
      }
      
    } 
    else if (arcade) {
      price=9
      if(online){
        price+=1
      }
      if(storage){
        price+=2
      }
      if(profile){
        price+=2
      }
      
    } else if (advanced) {
      price=12
      if(online){
        price+=1
      }
      if(storage){
        price+=2
      }
      if(profile){
        price+=2
      }
      
    }


   }else{

    if (pro) {
      price=150
      if(online){
        price+=10
      }
      if(storage){
        price+=20
      }
      if(profile){
        price+=20
      }
      
    } 
    else if (arcade) {
      price=90
      if(online){
        price+=10
      }
      if(storage){
        price+=20
      }
      if(profile){
        price+=20
      }
      
    } else if (advanced) {
      price=120
      if(online){
        price+=10
      }
      if(storage){
        price+=20
      }
      if(profile){
        price+=20
      }
      
    }
   }

  return (
    <>
    <div className="mt-10">
      <h2 className="text-[#052653] text-2xl sm:text-4xl font-semibold">
        Finishing up{" "}
      </h2>
      <p className="text-gray-400 mt-3 sm:text-[19px]">
        Double-check everything looks Ok before confirming
      </p>
      <br />
      <div className="w-full flex items-center ">
        <div>
          <p className="mx-5 text-[#052653] font-semibold ">
            {arcade === true && "arcade"}
            {pro === true && "Pro"} {advanced === true && "Advanced"}(
            {monthly ? "monthly" : "Yeary"}){" "}
          </p>
          <Link to="/second">
            <p className="underline mx-8 text-[#A5A5B1] ">change</p>
          </Link>
        </div>
        <div className=" sm:ml-[19.8rem] ml-[4.2rem] mr-3 text-[#052653] font-semibold ">
          {money()}
        </div>
      </div>
      <div className="h-[125px] items-center flex mt-2 w-full bg-[#F8F9FE] ">
        <div className="block">
          <div className="flex">
            {online ? (
              <>
                <p className="underline mx-8 text-[#A5A5B1] ">Online service</p>
                <p className="lg:ml-[17.69rem] md:ml-[14rem] ml-[6rem]">
                  {monthly ? "+1$/mo" : "+10$/yr"}
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex">
            {storage ? (
              <>
                <p className="underline mx-8 text-[#A5A5B1] ">Larger storage</p>
                <p className="lg:ml-[17.69rem] md:ml-[14rem] ml-[6rem]">{monthly ? "+2$/mo" : "+20$/yr"}</p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex">
            {profile ? (
              <>
                <p className="underline mx-8 text-[#A5A5B1] ">
                  Customixable profile
                </p>
                <p className="lg:ml-[17.69rem] md:ml-[14rem] ml-[6rem]">{monthly ? "+2$/mo" : "+20$/yr"}</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className=" mt-5 flex items-center">
        <p className="sm:mx-5 text-base sm:text-base text-[#052653] sm:font-semibold ">
          total ({monthly ? "per month" : "per year"})
        </p>
        <p className="sm:ml-[17rem] ml-[11rem] font-semi-bold sm:text-xl text-lg text-[#5B53DB]">${price}{monthly ? "/mo" : "/yr"}</p>
      </div>
    </div>
    <div className=" bottom-[-11%] left-1 sm:left-auto sm:top-[70%] absolute flex ">
        <Link to="/third">
          <button
            

            className="p-3 w-[125px] h-[48px] sm:mr-auto mr-[30%] rounded-md border md:mr-[14rem] xl:mr-[19rem]  "
          >
            Prev
          </button>
        </Link>

        <Link to="/fifth">
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

export default Fourth;
