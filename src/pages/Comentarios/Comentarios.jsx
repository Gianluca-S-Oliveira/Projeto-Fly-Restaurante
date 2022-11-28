import React from "react";
import { ListaComentarios } from '../../assets/ListaComentarios'
import Coment from '../../components/Coment'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'
const Comentarios = () =>{
    const {ref, inView} = useInView();

    const animation = useAnimation();
    
      useEffect(() =>{
        console.log("use effect", inView)
        if(inView){
          animation.start({
            y:0,
            transition:{
              type:'spring', duration:2, bounce:0.4
            }
          })
        }
        if(!inView){
          animation.start({y:'100vh'})
        }
      }, [inView])
    return(
<div ref={ref} className="menu">


    <motion.div animate={animation} className="menuList lg:p-20  grid grid-cols-1 md:grid-cols-2"> 
    
    { ListaComentarios.map((Comentario, key) =>{
        return <Coment key={key}
        nome={Comentario.nome} 
       icone={Comentario.icone} 
        nota={Comentario.nota} 
        comentario={Comentario.comentario}/>
    })}</motion.div>

</div>
    )
}
export default Comentarios;