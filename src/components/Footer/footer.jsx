import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { AiFillInstagram,AiFillTwitterSquare,AiFillFacebook} from "react-icons/ai"



const Footer = () =>{
    return(
      <div className="h-[30vh] bg-green-900">
          <footer className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-slate-900 py-[25vh] flex flex-col justify-evenly  h-[30vh] ">

                      <h1 className="text-white text-3xl text-center">INFORMAÇÕES</h1>
        <div className="text-white text-center m-10 lg:text-2xl text-sm" >
           <p className="">Horário de funcionamento: 11:00 -  15:00 de Seg a Sáb.</p>           

<p>Localização: Rua Alfredo Lopes 1717 - CEP 13560460 </p>

<p>Telefone: (16) 98765-1234 - Whatsapp </p>
        </div>
                 
  
                    </div>  
                    <div className="p-10 text-center bg-slate-900  flex flex-col align-center justify-center border-l-4 border-slate-500/50 ">
                      <h1 className="text-4xl text-center text-white ">&copy;Contra o Filé LTDA </h1>
                      
                           
                     
                  <div className="text-white flex text-center mt-[10vh]  justify-evenly text-9xl lg:text-4xl px-[45%]">
                    <AiFillInstagram /> 
                    <AiFillTwitterSquare/> 
                    <AiFillFacebook/></div>                   
                        </div>         
                    
                        
                       
             </footer>
      </div>

    )
}
export default Footer;