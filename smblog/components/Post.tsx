import React from 'react';
import { TbMessage } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";

const Post = () => {
    return (
        <div className="relative w-[86%] bg-[#373559] h-[22rem] clipk flex justify-center items-center">
            <div className="clipk_sub absolute w-[99%] bg-[#E2E3FE] h-[97%]">
                <div className="conwrp flex h-full w-full relative">
                    <div className="imgcon_p relative w-[40%] bg-[#B2B3DE] h-full border-r-[6px] border-[#373559]">
                        <div className="catagory absolute bottom-0 right-0 bg-[#373559] w-3/4 py-4 text-white font-bold flex justify-center">
                            <p>TECHNOLOGY</p>
                        </div>
                    </div>
                    <div className="comhy bg-[#E2E3FE] w-[60%] h-full flex flex-col justify-center items-center">
                        <p className="font-bold text-3xl w-[80%] pb-[1rem]">Found at the bottom of each website</p>
                        <p className="w-[80%] pb-[2rem]">A blog is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reve <span className="font-bold">.... Read more</span></p>
                        <div className="detail flex flex-row gap-10 w-[80%]">
                            <p className="flex flex-row gap-2 justify-center items-center font-medium"><MdAccessTime /> Monday 05 Jan,2023</p>
                            <p className="flex flex-row gap-2 justify-center items-center font-medium"><TbMessage /> Comment</p>
                        </div>
                    </div>
         
                </div>
            </div>
        </div>
    )
}

export default Post;