import React,{useState} from 'react'
import logo from "../assets/Branding.svg"
import { GiSpeaker } from "react-icons/gi";
import { GiSpeakerOff } from "react-icons/gi";

const Navbar = () => {
    const [mikeState,setMikeState]=useState(false);

    return (
        <nav className='flex justify-between p-[25px] h-[78px] '>
            <div className='flex justify-center items-center gap-x-2 cursor-pointer'>
                <img className='h-[30px] text-black' src={logo} alt="" />
            </div>
            <div className='cursor-pointer text-white hover:bg-slate-400 h-8 w-8 rounded transition-all duration-500' onClick={() => setMikeState(!mikeState)}>
                {
                    mikeState ? <GiSpeaker size={"2rem"} /> : <GiSpeakerOff size={"2rem"} />
                }
            </div>
        </nav>
    )
}

export default Navbar
