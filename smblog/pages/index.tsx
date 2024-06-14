import React from 'react';
import Navbar from "../components/Nav";
import "../app/globals.css";
import Slider from "../components/Slider"
import Post from "../components/Post"
import Image from 'next/image';
import { blogs } from './Blog';
import Popular from '@/components/popular';
import Catagoribtn from "@/components/catagorybtn";
import Pagenation from "@/components/pagenation";
import { IoSend } from "react-icons/io5";
import { RiInstagramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";

const index = () => {
    const uniqueCategories = Array.from(new Set(blogs.map((blog: any) => blog.catagory)));

    function calculateContainers(totalItems: number, maxItemsPerContainer: number) {
        // Calculate the number of containers needed
        const containers = Math.ceil(totalItems / maxItemsPerContainer);
        return containers;
    }

    const totalItems = blogs.length;
    const maxItemsPerContainer = 6;

    const numberOfContainers = calculateContainers(totalItems, maxItemsPerContainer);

    return (
        <>
            <Navbar />
            <section className="w-screen h-screen overflow-hidden">
                <div className="bgani w-screen h-screen absolute top-0 left-0 overflow-hidden">
                    <Image
                        className='w-full h-full object-cover z-0 opacity-50'
                        src={"/bg.gif"}
                        width={100}
                        height={100}
                        alt=''
                    />
                    {/* social media */}
                    <div className="bg-[#373559] h-fit w-fit absolute z-5 top-[25%] right-[6%] flex justify-center items-center socialop">
                        <div className="relative w-[90%] my-1 bg-[#e2e3fe] text-[#373559] flex flex-col justify-center items-center gap-4 py-6 px-4 text-2xl socialop">
                            <VscGithubInverted />
                            <IoLogoLinkedin />
                            <RiInstagramLine />
                            <BsTwitter />
                        </div>
                    </div>
                </div>
                <p className="font-bold relative opacity-100 z-5 text-5xl pt-28 pl-32 text-[#373559]">Welcome ,Smruti !</p>
                <Slider />
            </section>
            <section className="w-screen h-[100%]  flex flex-row pt-[6rem]">
                <div className="w-[75%]  h-full flex flex-col items-center e1 gap-10">
                    {blogs.slice(0, 6).map((blog: any, index: number) => (
                        <Post key={index} blog={blog} />
                    ))}
                </div>
                {/* -------------------------- */}
                <div className="w-[25%] h-full e2">
                    <div className="cprofilepic relative h-[32rem] flex justify-center items-center">
                        <div className="pic_poi absolute rounded-lg transform -translate-x-10 -translate-y-10 bg-[#B2B3DE] h-[70%] w-[70%]"></div>
                        <div className="bgdiv relative flex justify-center items-center rounded-lg bg-[#5D5B9A] h-[70%] w-[70%]">
                            <div className="imagety bg-black w-[85%] h-[85%] rounded-lg overflow-hidden relative">
                                <p className="text-white absolute bottom-11 left-6">STUDENT</p>
                                <p className="text-white absolute text-lg bottom-4 font-bold left-6">SMRUTI P. ROUT</p>
                                <Image
                                    className="w-full h-full object-cover"
                                    src="/self_w.png"
                                    width={100}
                                    height={100}
                                    alt=""
                                // layout="fill"
                                />

                            </div>
                            <div className="prof bg-[#5D5B9A] w-[80%] py-5 text-center font-bold text-white rounded-lg absolute bottom-[3rem] right-8 transform -rotate-90 translate-x-[50%] translate-y-[4%]">
                                <p className="text-2xl">DEVELOPER</p>
                            </div>
                        </div>
                    </div>
                    {/* popular post section */}
                    <div className="tag w-full h-[100%] flex flex-col justify-center">
                        <div className="titpo bg-[#373559] w-[80%] py-5 text-white">
                            <p className="text-center text-2xl font-medium">Popular Post</p>
                        </div>
                        {/* posts */}
                        <Popular />
                        <Popular />
                        <Popular />
                        {/* catagory */}
                        <div className="titpo bg-[#373559] w-[80%] py-5 text-white mt-10">
                            <p className="text-center text-2xl font-medium">Catagories</p>
                        </div>
                        {/* catagories item */}
                        <div className="w-[80%] h-[100%] py-5 px-4 mt-2 justify-center items-center flex flex-row flex-wrap gap-4">

                            {uniqueCategories.map((category: string, index: number) => (
                                <Catagoribtn key={index} data={category} />
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            {/* pagenation */}
            <div className="h-[10rem] flex flex-row justify-center items-center">
                <div className="flex flex-row gap-4 border-4 bg-[#e2e3fe] border-[#373559] w-fit py-5 px-6">
                    <p className="font-bold">PREV</p>
                    <Pagenation count={numberOfContainers} />
                    <p className="font-bold">NEXT</p>
                </div>
            </div>
            {/* addvatisement */}
            <div className=" h-[20rem] flex justify-center items-center promo">
                <div className="bg-[#373559] w-[90%] h-[90%] flex flex-col items-start gap-[1rem] text-[#fff] pl-[10%] justify-center">
                    <p className="text-3xl font-bold">You have a new Project Idea</p>
                    <p className='text-xl'>Contact me now and get a 10% discount on Your new Project</p>
                    <button className="py-4 px-6 mt-5 flex gap-5 items-center justify-center text-base font-bold bg-[#e2e3fe] text-[#373559]">Contact Me <IoSend /></button>
                </div>
            </div>
            {/* footer */}
        </>
    )
}

export default index;