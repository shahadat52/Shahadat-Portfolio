import React from 'react';
import banner from '../../../assets/banner image.png'
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner grid grid-cols-4  text-[#00CDAC] '>
            <div className='col-span-2 mt-[25%] mx-[10%]'>
                <h4 className='font-bold ml-1 text-[50px]'>Assalamu Alaikum!</h4>
                <h4 className='font-bold ml-1'>Hi, I'm  </h4>
                <h1 className='text-[40px] font-bold my-2'>Shahadat Hossain</h1>
                <h1>Javascript Developer</h1>
                <p>I'm a web developer & MERN stack focused on crafting clean and user-friendly experiences, I'm passionate about building excellent software that improves the lives of those around me.</p>
                <div className='mt-10'>
                    <button className='btn btn-outline bg-[#00CDAC]'><span>Download Resume</span></button>
                    <button className='ml-10 btn btn-outline bg-[#00CDAC]'><span>Contract Me</span></button>
                </div>
            </div>
            <div className='col-span-2  mt-0'>
                <img className='h-screen  ml-[25%]' src={banner} alt="" />
            </div>

        </div>
    );
};

export default Banner;