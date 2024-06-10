import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Nav = () => {
    return (
        <nav className='flex flex-row px-32 py-2 justify-between items-center fixed top-0 left-0 w-full bg-opacity-25 backdrop-blur-md border border-opacity-25 border-solid border-white rounded-lg '>
            <div className="logo">
                <p className="text-3xl text-[#373559] font-bold">Smruti<span className="text-[#5D5B9A] font-bold">.Blog</span></p>
            </div>
            <div className="flex flex-row justify-center items-center gap-6 h-auto rcomp">
                <button className="px-10 py-3 bg-[#B2B3DE] text-[#373559] font-bold custom-clip-path ">Portfolio</button>
                <div className="flex flex-row justify-center items-center gap-5 profile">
                    <div className="bg-[#373559] w-12 h-12 overflow-hidden pic">
                        <img src="/self.png" alt="" />
                    </div>
                    <p className="text-xl text-[#373559] font-medium">Smruti P. Rout</p>
                    <p><IoIosArrowDown /></p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;