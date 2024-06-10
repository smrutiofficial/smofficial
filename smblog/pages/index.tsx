import React from 'react';
import Navbar from "../components/Nav";
import "../app/globals.css";
import Slider from "../components/Slider"
import Post from "../components/Post"

const index = () => {
    return (
        <>
            <Navbar />
            <section className="w-screen h-screen overflow-hidden">
                <p className="font-bold text-5xl pt-28 pl-32 text-[#373559]">Welcome ,Smruti !</p>
                <Slider />
            </section>
            <section className="w-screen h-[100%]  flex flex-row pt-[6rem]">
                <div className="w-[75%]  h-full flex flex-col items-center e1 gap-10">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                {/* -------------------------- */}
                <div className="w-[25%] border-2 border-green-500 h-full e2">

                </div>
            </section>
        </>
    )
}

export default index;