import React from "react";

import { BsWhatsapp} from "react-icons/bs"
import './whats.css'    
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'


  
const Whats = () =>{ 
     const {ref, inView} = useInView();

const animation = useAnimation();

useEffect(() =>{

    console.log("use effect", inView)
    if(inView){
      animation.start({
        opacity: 1, scale: 1,
        transition:{
          duration:1
        }
      })
    }
    if(!inView){
      animation.start({opacity: 0, scale: 0.3})
    }
  }, [inView])
  
return(


   

        <article ref={ref} id="contato" className=" mt-10 teste w-full h-[110vh]  ">      
     <motion.div animate={animation} className=" flex flex-col lg:p-20 sm:p-1 h-[90vh] ">      
        
    
    <h1 className="text-5xl font-['Righteous'] text-shadow-2 decoration-2 text-white text-center my-auto mx-auto lg:text-right lg:text-[10vh] texto-h1">Atendemos principalmente pelo <span className="text-green-500">WHATSAPP</span></h1>
    <a href="https://api.whatsapp.com/send?phone=5511983060031" target="blank">
<button className="mx-auto  shadow-2xl  
 shadow-black-900/10  
 px-3 py-3 text-white text-4xl text-center rounded-full flex  bg-green-500 zap"> 
 <div className="text-4xl shadow-lg  shadow-black-900/90 border-solid border-2 bg-green-500 rounded-full py-2 px-4  flex justify-center align-text-center">
    <BsWhatsapp className="animate-spin"/></div> 
    <p className="my-auto font-bold px-4 text-center ">SOLICITAR</p></button>
    </a>
</motion.div>


  
    </article>



)  




}
export default Whats;