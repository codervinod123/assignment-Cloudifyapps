import React,{useState} from 'react'

import { CgPlayButtonO } from "react-icons/cg";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";

import que1 from "../assets/Questions/que1.jpg"
import que2 from "../assets/Questions/que2.jpg"
import que3 from "../assets/Questions/que3.jpg"
import que4 from "../assets/Questions/que4.jpg"
import que5 from "../assets/Questions/que5.jpg"
import que6 from "../assets/Questions/que6.jpg"
import que7 from "../assets/Questions/que7.jpg"
import que8 from "../assets/Questions/que8.jpg"
import que9 from "../assets/Questions/que9.jpg"
import que10 from "../assets/Questions/que10.jpg"

import ans1 from "../assets/answers/ans1.jpg"
import ans2 from "../assets/answers/ans2.jpg"
import ans3 from "../assets/answers/ans3.jpg"
import ans4 from "../assets/answers/ans4.jpg"
import ans5 from "../assets/answers/ans5.jpg"
import ans6 from "../assets/answers/ans6.jpg"
import ans7 from "../assets/answers/ans7.jpg"
import ans8 from "../assets/answers/ans8.jpg"
import ans9 from "../assets/answers/ans9.jpg"
import ans10 from "../assets/answers/ans10.jpg"

const questions = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10];
const answer = [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10];


const QuestionPaper = () => {

    
  
  const [active, setActive] = useState(1);
  const [flipResult, setFlipResult] = useState(false);
  const [start, setStart] = useState(true);

  const handleNext = () => {
    setActive(active + 1);
    setFlipResult((prev) => {
      if (prev == true) return false;
    });
  }

  const handlePrev = () => {
    setActive(active - 1);
    setFlipResult((prev) => {
      if (prev == true) return false;
    });
  }

  const handleRefresh=()=>{
     setStart(!start);
     setActive(1);
  }


  return (
    <>
      {start ?
        <div className='flex flex-col justify-center items-center mt-16  h-[336px] w-[700px] mx-auto'>
          <h1 className='text-4xl text-center font-bold text-white'>Addition and Subtraction</h1>
          <h1 className='text-4xl text-center font-bold text-white'>Facts within 20</h1>
          <p className='text-center py-2 text-white font-semibold max-w-[60%]'>Test your knowledge with the fllowing questions,Tap a card to flip it and uncover the answer, good luck</p>
          <button onClick={() => setStart(!start)} className='px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full flex justify-center items-center gap-x-2 hover:scale-105 transition-all duration-500 group'><CgPlayButtonO size={"1.5rem"} className='group-hover:rotate-180' />Let's Play</button>
        </div>

        : active <= 10 ? (

          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center py-4 gap-x-2'>
              <div className='text-white font-semibold'>{active}/10</div>
              {
                questions.map((_val, i) => {
                  return (
                    <div key={i} className={`h-[5px] w-[5px] rounded-full ${active === i + 1 ? "bg-white" : "bg-gray-600"}`}>

                    </div>
                  )
                })
              }
            </div>

            <div className='flex items-center gap-x-6 h-[60%] w-[60%]'>

              <button disabled={active<=1?true:false} onClick={handlePrev} className={`cursor-pointer p-3 h-[3rem] w-[3rem] rounded-full flex justify-center items-center ${
                active > 1 ? "bg-gray-400 hover:bg-yellow-400" : "bg-gray-300 cursor-not-allowed"
              } `}><GrFormPrevious size={"2rem"} color={'white'} /></button>
               <div className='flex justify-center items-center  shadow-lg bg-white rounded-lg p-1'>
                <img onClick={() => setFlipResult(!flipResult)} className='w-[70%]' src={flipResult ? answer[active - 1] : questions[active - 1]} alt="" />
               </div>
              <button onClick={handleNext} className='cursor-pointer p-3 h-[3rem] w-[3rem] rounded-full bg-gray-400 hover:bg-yellow-400 flex justify-center items-center'><GrFormNext size={"2rem"} color={'white'} /></button>

            </div>
          </div>) : (

          <div div className='flex flex-col justify-center items-center mt-16 h-[336px] w-[700px] mx-auto'>
            <div className='flex flex-col gap-y-4 items-center w-full h-full'>

              <FaRegCheckCircle color={"white"} size={"8rem"} />
              <h1 className='text-3xl text-center font-bold text-white'>Hope you learned something new !</h1>
              <button onClick={handleRefresh} className='px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full flex justify-center items-center gap-x-2 hover:scale-105 transition-all duration-500 group'>
                <IoIosRefresh size={"1.5rem"} className='group-hover:rotate-270 transition-all duration-500' />
                Play Again
              </button>
            </div>
          </div>
        )

      }



    </>
  )
}

export default QuestionPaper
