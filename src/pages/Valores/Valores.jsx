import React from "react";

import { MdGroups,MdAgriculture,MdFoodBank} from "react-icons/md"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'
import './valores.css'
const Valores = ( ) =>{
  // ve se o o compoennte esta na vista
  const {ref, inView} = useInView();

const animation = useAnimation();

  useEffect(() =>{
    console.log("use effect", inView)
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:'spring', duration:1, bounce:0.3
        }
      })
    }
    if(!inView){
      animation.start({x:'-100vw'})
    }
  }, [inView])

    return(
        <article ref={ref} id="valores">
         <section className="we-offer-area text-center bg-green-900 font-['Righteous'] mt-[-3vh] ">
  <motion.div 
  animate={animation}
  className="container">

    <div className="cursor-pointer grid  grid-cols-1 lg:grid-cols-3 gap-10">

      <div >
        <div className="item ">
          <i className="px-1">< MdGroups className="text-7xl"/></i>
          <h4>ACESSIBILIDADE GARANTIDA A TODOS</h4>
          <p className="py-6 font-light"> 
          Comida vegana não precisa ser cara e inacessível, nós democratizamos o acesso a esse tipo de produto
          </p>
        
        </div>
      </div>

      <div>
        <div className="item">
          <i className="px-1">< MdAgriculture className="text-7xl"/></i>
          <h4 className="text-1xl"> PRODUTORES LOCAIS E ORGÂNICOS</h4>
          <p className="p-4 ">
          Trabalhamos com produtos de agricultura familiar e incentivamos a produção de 
          comida local.
          </p>
        </div>
      </div>
   
     

      <div >
        <div className="item">
          <i className="px-1" >< MdFoodBank className="text-7xl"/></i>
          <h4>COMIDA SAUDÁVEL E FRESCA</h4>
          <p className="py-4" >
          Não importa se você começou ontem no veganismo ou já está no caminho a tempos, temos algo que vai agradar o seu paladar.
          </p>
        </div>
      </div>

    </div>
  </motion.div>
</section>
        </article>
        
  
    )
}
export default Valores;