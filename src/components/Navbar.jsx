import React,{useState} from 'react'
import logo from "../assets/logo.svg"
import { GiSpeaker } from "react-icons/gi";
import { GiSpeakerOff } from "react-icons/gi";

const Navbar = () => {
    const [mikeState,setMikeState]=useState(false);

    return (
        <nav className='flex justify-between p-[25px] h-[78px] '>
            <div className='flex justify-center items-center gap-x-2'>
                <div className=' h-[40px] w-[40px] bg-black rounded-full flex justify-center items-center'>
                    <img className='h-[20px] text-black' src={logo} alt="" />
                </div>
                <div className='flex flex-col  text-white font-semibold'>
                    <span className='text-[12px]'>Cloudifyapp pvt.Ltd</span>
                    <span className='text-[10px]'>By John Doe</span>
                </div>
            </div>
            <div className='cursor-pointer hover:bg-slate-400 h-8 w-8 rounded transition-all duration-500' onClick={() => setMikeState(!mikeState)}>
                {
                    mikeState ? <GiSpeaker size={"2rem"} /> : <GiSpeakerOff size={"2rem"} />
                }
            </div>
        </nav>
    )
}

export default Navbar
