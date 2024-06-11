import React from 'react';
import Image from 'next/image';

const slider_div = ({blog}:{blog:any}) => {
    return (
        <div className="flex flex-row w-full h-4/5 container_sli">
            <div className="w-1/2 flex flex-col justify-center items-center relative img_sli">
                <div className="bg-[#d9d8ea] w-[65%] h-full overflow-hidden absolute c1">
                    <Image 
                    className='w-full h-full object-cover' 
                    src={blog.picture} 
                    alt="" 
                    width={100}
                    height={100}
                    />
                </div>
                <div className="bg-[#373559] w-[65%] h-full absolute c2"></div>
            </div>
            {/* ------------------------ */}
            <div className="w-1/2  contain_slider flex flex-col justify-center pl-20">
                <p className="text-2xl font-medium text-[#373559]">{blog.date}</p>
                <p className="pt-5 font-bold text-4xl w-[85%] text-[#373559]">{blog.title}</p>
                <p className="pt-5 text-[#56516a] w-[80%] text-2xl font-medium">{blog.detail}<span className=" text-[#373559] font-bold">..... Read more</span></p>
            </div>
        </div>
    )
}

export default slider_div