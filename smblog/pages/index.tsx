import React from 'react';
import Navbar from "../components/Nav";
import "../app/globals.css";
import Slider from "../components/Slider"
import Post from "../components/Post"
import Image from 'next/image';
import { blogs } from './Blog';


const index = () => {
    return (
        <>
            <Navbar />
            <section className="w-screen h-screen overflow-hidden">
                <div className="bgani w-screen h-screen absolute top-0 left-0 overflow-hidden">
                    <Image
                        className='w-full h-full object-cover '
                        src={"/bg.gif"}
                        width={100}
                        height={100}
                        alt=''
                    />
                </div>
                <p className="font-bold text-5xl pt-28 pl-32 text-[#373559]">Welcome ,Smruti !</p>
                <Slider />
            </section>
            <section className="w-screen h-[100%]  flex flex-row pt-[6rem]">
                <div className="w-[75%]  h-full flex flex-col items-center e1 gap-10">
                    {blogs.map((blog: any, index: number) => (
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
                </div>
            </section>
        </>
    )
}

export default index;