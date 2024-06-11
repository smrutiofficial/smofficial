import React from 'react'

const catagorybtn = ({data}:{data:string}) => {
    return (
        <div className="magiccut bg-[#373559] w-auto h-5 py-5 flex relative justify-center items-center">
            <div className="magiccut bg-[#E2E3FE] w-[94%] h-[88%] absolute"></div>
            <p className='px-4 py-2 text[#373559] relative'>{data}</p>
        </div>
    )
}

export default catagorybtn