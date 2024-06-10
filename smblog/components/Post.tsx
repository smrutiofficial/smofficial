import React from 'react';
import { TbMessage } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import Image from 'next/image';

const Post = ({ blog }: { blog: any }) => {
    return (
        <div className="relative w-[86%] bg-[#373559] h-[22rem] clipk flex justify-center items-center">
            <div className="clipk_sub absolute w-[99%] bg-[#E2E3FE] h-[97%]">
                <div className="conwrp flex h-full w-full relative">
                    <div className="imgcon_p relative w-[40%] bg-[#B2B3DE] h-full border-r-[6px] border-[#373559] overflow-hidden">
                        <Image
                            className='w-full h-full object-cover'
                            src={blog.picture}
                            alt=""
                            width={100}
                            height={100}
                        />
                        <div className="catagory absolute bottom-0 right-0 bg-[#373559] w-3/4 py-4 text-white font-bold flex justify-center">
                            <p>TECHNOLOGY</p>
                        </div>
                    </div>
                    <div className="comhy bg-[#E2E3FE] w-[60%] h-full flex flex-col justify-center items-center">
                        <p className="font-bold text-3xl w-[80%] pb-[1rem]">{blog.title}</p>
                        <p className="w-[80%] pb-[2rem]">{blog.detail} <span className="font-bold">.... Read more</span></p>
                        <div className="detail flex flex-row gap-10 w-[80%]">
                            <p className="flex flex-row gap-2 justify-center items-center font-medium"><MdAccessTime /> {blog.date}</p>
                            <p className="flex flex-row gap-2 justify-center items-center font-medium"><TbMessage /> Comment</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post;