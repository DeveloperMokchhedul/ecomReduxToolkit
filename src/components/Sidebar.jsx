import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";

function Sidebar() {
    const [show, setShow] = useState(false)
    console.log(show);
    
    return (
        <>
            <div onClick={()=>setShow(!show)} >
            <FiAlignJustify className='text-3xl  p-1 bg-white fixed top-4 right-4 rounded-lg' />
            </div>
            <div className={`w-[100%] sm:w-[300px] , bg-slate-300 h-full fixed top-0 ${show ? "left-0":"left-[-100%]"} transition-all duration-200 lg:left-0`}>

            </div>

        </>
    )
}

export default Sidebar
