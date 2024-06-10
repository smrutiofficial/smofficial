import React from 'react';

const slider_div = () => {
    return (
        <div className="flex flex-row w-full h-4/5 container_sli">
            <div className="w-1/2 flex flex-col justify-center items-center relative img_sli">
                <div className="bg-[#d9d8ea] w-[65%] h-full overflow-hidden absolute c1">
                    <img className='w-full h-full object-cover' src="/demo1.jpg" alt="" />
                </div>
                <div className="bg-[#373559] w-[65%] h-full absolute c2"></div>
            </div>
            {/* ------------------------ */}
            <div className="w-1/2  contain_slider flex flex-col justify-center pl-20">
                <p className="text-2xl font-medium text-[#373559]">Monday 05 Jan,2023</p>
                <p className="pt-5 font-bold text-4xl w-[85%] text-[#373559]">Found at the bottom of each websites page, footers typically contain supplementary.</p>
                <p className="pt-5 text-[#56516a] w-[80%] text-2xl font-medium">A blog a truncation of weblog is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web <span className=" text-[#373559] font-bold">..... Read more</span></p>
            </div>
        </div>
    )
}

export default slider_div