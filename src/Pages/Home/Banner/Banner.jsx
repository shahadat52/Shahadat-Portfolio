import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner image.png";
import "./Banner.css";
import TextAnimation from "./TextAnimation/TextAnimation";

const Banner = () => {
  return (
    <div>
        <h4 className="font-bold ml-1 text-[50px] text-center text-cyan-400">Assalamu Alaikum!</h4>
    <div className="banner  grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-cyan-400">
      <div className="col-span-1 mt-[25%] mx-[10%]">
        
        {/* <h4 className='font-bold ml-1'>I'm  </h4> */}
        <h1 className="text-[40px] font-bold mt-2"> I'm Shahadat Hossain <TextAnimation/> </h1>
        
        <p className="text-justify">
          I'm a web developer & MERN stack focused on crafting clean and
          user-friendly experiences, I'm passionate about building excellent
          web application that improves the lives of those around me.
        </p>
        <div className="mt-10">
          <a
            href="https://drive.google.com/drive/folders/1sdUelSiiQzH3Po21wzPVzXrDnYF8YfMk"
            className="btn btn-outline text-cyan-400"
          >
            <span>Download Resume</span>
          </a>
          <a href="#contract" className="ml-10 btn btn-outline text-cyan-400">
            <span>Contract Me</span>
          </a>
        </div>
      </div>
      <div className="col-span-1  mt-0">
        <img className="h-screen  ml-[25%]" src={banner} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Banner;
