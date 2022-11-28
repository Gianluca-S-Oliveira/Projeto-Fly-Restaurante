import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import {motion} from "framer-motion"

import './cardapio.css';
const Cardapio = ( ) =>{
  
  const {ref, inView} = useInView();
  const animation = useAnimation();
    useEffect(() =>{
      console.log("use effect", inView)
      if(inView){
        animation.start({
          x:0,
          transition:{
            type:'spring', duration:2, bounce:0.3
          }
        })
      }
      if(!inView){
        animation.start({x:'100vw'})
      }
    }, [inView])
    

    return(
      <article ref={ref} >
        <motion.section animate={animation}  id="cardapio" className="  grid  grid-cols-1 lg:grid-cols-3 gap-20 bg-red-900 sm:p-[90px] items-center justify-center fundo" >

<Card  


className="lg:w-[20vw] md:min-w-[30vw] sm:w-[50vw] mx-auto">
<article className="shadow-[0_32px_10px_-0px_rgba(0,0,0,0.3)]  ">
<h3 className="text-center text-xl text-white font-bold bg-[#203828] rounded-b-xl">Seg a Sab</h3>
<div className="flex flex-col  h-44  items-center justify-center text-white py-7  rounded-b-3xl">
<div className="text-5xl  text-white ">
<StaticImage
className="w-[38vw] h-[25vh]  sm:w-[30vw] md:w-[15vh]  md:h-[15vh] mt-20 "
src="../../images/salada.png"



/>
</div>
<h1 className=" sm:text-2xl text-[#203828] font-bold  text-center textos">Salada</h1>
</div>
<Card.Body className=" flex-col items-center justify-center  p-0 h-64">

  {/* ------------------------2------------------ */}
<div className="flex flex-col  h-64   items-center justify-center text-white my-20 bg-[#203828]  rounded-t-3xl">
    <h1 className="text-white text-5xl money">20R$</h1>
    <div className="text-2xl m-7">
        <div className=" flex justify-around ">
    <input className="radio" id="saladaP"  name="options" type="radio"  />  
    <input className="radio" type="radio" id="saladaM"   name="options"/>  
     <input className="radio"type="radio"   id="saladaG" name="options"/>
        </div>  <br/>

  <div className=" flex justify-around sm:text-[1rem]">


    <label className="textos" for="saladaP">Pequena</label>         
<label className="mx-4 textos" for="saladaM">Media</label>
<label className="textos" for="saladaG">Grande </label>
  </div>

    </div>
      <Button className=" w-[80%] mb-3 text-white bg-green-700 md:w-[50%] rounded-2xl  textos"  bg="success" variant="success">COMPRAR</Button>
</div>

</Card.Body>
</article>

</Card>

{/* ------------------------2------------------ */}
<Card className="lg:w-[20vw] md:min-w-[25vw] sm:w-[50vw] mx-auto">
<article className="shadow-[0_32px_10px_-0px_rgba(0,0,0,0.3)]  ">
<h3 className="text-center text-xl text-white font-bold bg-[#203828] rounded-b-xl">Seg a Qua</h3>
<div className="flex flex-col  h-44  items-center justify-center text-white py-7  rounded-b-3xl">
<div className="text-5xl  text-white ">
<StaticImage
className="w-[38vw] h-[25vh]  sm:w-[30vw] md:w-[15vh]  md:h-[15vh] mt-20 "
src="../../images/burg.png"



/>
</div>
<h1 className=" sm:text-2xl text-[#203828] font-bold  text-center textos">Hamburger</h1>
</div>
<Card.Body className=" flex-col items-center justify-center  p-0 h-64">


<div className="flex flex-col  h-64   items-center justify-center text-white my-20 bg-[#203828]  rounded-t-3xl">
    <h1 className="text-white text-5xl money">20R$</h1>
    <div className="text-2xl m-7">
        <div className=" flex justify-around ">
                <input className="radio"  id="burgP" name="options" type="radio"   />  
    <input className="radio" type="radio"  id="burgM" name="options"/>  
     <input className="radio"type="radio"  id="burgG" name="options"/>
        </div>  <br/>

  <div className=" flex justify-around sm:text-[1rem]">


    <label className="textos" for="burgP">Pequena</label>         
<label className="mx-4 textos" for="burgM">Media</label>
<label className="textos" for="burgG">Grande </label>
  </div> 

    </div>
      <Button className=" w-[80%] mb-3 text-white textos bg-green-700 rounded-2xl  md:w-[50%]" bg="success" variant="success">COMPRAR</Button>
</div>

</Card.Body>
</article>

</Card>
{/* ------------------------3------------------ */}
<Card className="lg:w-[20vw] md:min-w-[25vw] sm:w-[50vw] mx-auto">
<article className="shadow-[0_32px_10px_-0px_rgba(0,0,0,0.3)]  ">
<h3 className="text-center text-xl text-white font-bold bg-[#203828] rounded-b-xl">Qua a Sab</h3>
<div className="flex flex-col  h-44  items-center justify-center text-white py-7  rounded-b-3xl">
<div className=" ">
<StaticImage
className="w-[35vw] h-[15vh]  sm:w-[27vw] md:w-[20vh]  md:h-[15vh] mt-20 "
src="../../images/macarrao.png"



/>
</div>
<h1 className="sm:text-2xl text-[#203828] font-bold  text-center textos">Macarrao</h1>
</div>
<Card.Body className=" flex-col items-center justify-center  p-0 h-64">


<div className="flex flex-col  h-64   items-center justify-center text-white my-20 bg-[#203828]  rounded-t-3xl">
    <h1 className="text-white text-5xl money">20R$</h1>
    <div className="text-2xl m-7">
        <div className="  flex justify-around ">
                <input className="radio"  id="macarraoP" name="options" type="radio"   />  
    <input className="radio" type="radio"  id="macarraoM"  name="options"/>  
     <input className="radio"type="radio"  id="macarraoG" name="options"/>
        </div>  <br/> 

  <div className=" flex justify-around sm:text-[1rem] ">


    <label className="textos" for="macarraoP">Pequena</label>         
<label className="mx-4 mt-0 textos" for="macarraoM">Media</label>
<label className="textos" for="macarraoG">Grande </label>
  </div>

    </div>
      <Button className=" w-[80%] mb-3 textos text-white bg-green-700 md:w-[50%] rounded-2xl "  bg="success" variant="success">COMPRAR</Button>
</div>

</Card.Body>
</article>

</Card>
{/* ------------------------4------------------ */}
<Card className="lg:w-[20vw] md:min-w-[25vw] sm:w-[50vw] mx-auto">
<article className="shadow-[0_32px_10px_-0px_rgba(0,0,0,0.3)]  ">
<h3 className="text-center text-xl text-white font-bold bg-[#203828] rounded-b-xl">Sex a Sab</h3>
<div className="flex flex-col  h-44  items-center justify-center text-white py-7  rounded-b-3xl">
<div className="text-5xl  text-white ">
<StaticImage
className="w-[40vw] h-[15vh]  sm:h-[15vh] sm:w-[30vw] md:w-[25vh]  md:h-[15vh] mt-20"
src="../../images/hotdog.png"



/>
</div>
<h1 className=" sm:text-2xl text-[#203828] font-bold  text-center textos ">Hot Dog</h1>
</div>
<Card.Body className=" flex-col items-center justify-center  p-0 h-64">


<div className="flex flex-col  h-64   items-center justify-center text-white my-20 bg-[#203828]  rounded-t-3xl">
    <h1 className="text-white text-5xl money">20R$</h1>
    <div className="text-2xl m-7">
        <div className=" flex justify-around ">
                <input className="radio"  id="dogP" name="options"type="radio"   />  
    <input className="radio" type="radio" id="dogM"  name="options"/>  
     <input className="radio"type="radio" id="dogG"  name="options"/>
        </div>  <br/>

  <div className=" flex justify-around sm:text-[1rem]">


    <label className="textos" for="dogP">Pequena</label>         
<label className="mx-4 textos" for="dogM">Media</label>
<label className="textos" for="dogG">Grande </label>
  </div>

    </div>
      <Button className=" w-[80%] mb-3 text-white textos rounded-2xl  bg-green-700 md:w-[50%]" bg="success" variant="success">COMPRAR</Button>
</div>

</Card.Body>
</article>

</Card>
{/* ------------------------5------------------ */}
<Card className="lg:w-[20vw] md:min-w-[25vw] sm:w-[50vw] mx-auto">
<article className="shadow-[0_32px_10px_-0px_rgba(0,0,0,0.3)]  ">
<h3 className="text-center text-xl text-white font-bold bg-[#203828] rounded-b-xl">Ter a Qui</h3>
<div className="flex flex-col  h-44  items-center justify-center text-white py-7  rounded-b-3xl">
<div className="text-5xl  text-white ">
<StaticImage
className="w-[26vw] h-[15vh]  sm:h-[20vh] sm:w-[23vw] md:w-[17vh]  md:h-[20vh] mt-20"
src="../../images/panqueca.png"



/>
</div>
<h1 className=" sm:text-2xl text-[#203828] font-bold  text-center textos">Panqueca de Espinafre</h1>
</div>
<Card.Body className=" flex-col items-center justify-center  p-0 h-64">


<div className="flex flex-col  h-64   items-center justify-center text-white my-20 bg-[#203828]  rounded-t-3xl">
    <h1 className="text-white text-5xl money">20R$</h1>
    <div className="text-2xl m-7">
        <div className=" flex justify-around ">
                <input className="radio"  id="panquecaP" name="options" type="radio"  />  
    <input className="radio" type="radio"  id="panquecaM" name="options"/>  
     <input className="radio"type="radio" id="panquecaG" name="options" />
        </div>  <br/>

  <div className=" flex justify-around sm:text-[1rem]">


    <label className="textos" for="panquecaP">Pequena</label>         
<label className="mx-4 textos" for="panquecaM">Media</label>
<label className="textos" for="panquecaG">Grande </label>
  </div>

    </div>
      <Button className=" w-[80%] mb-3 text-white textos rounded-2xl  bg-green-700 md:w-[50%]"  bg="success" variant="success">COMPRAR</Button>
</div>

</Card.Body>
</article>

</Card>
{/* ------------------------6------------------ */}
<Card className="lg:max-w-[20vw] md:min-w-[25vw] sm:w-[50vw] mx-auto">
<article className="shadow-[0_32px_10px_-0px_rgba(0,0,0,0.3)]  ">
<h3 className="text-center text-xl text-white font-bold bg-[#203828] rounded-b-xl">Seg a Sab</h3>
<div className="flex flex-col  h-44  items-center justify-center text-white py-7  rounded-b-3xl">
<div className="text-5xl  text-white ">
<StaticImage
className="w-[40vw] h-[15vh]  sm:h-[15vh] sm:w-[30vw] md:w-[25vh]  md:h-[17vh] mt-20"
src="../../images/pizza.png"



/>
</div>
<h1 className=" sm:text-2xl text-[#203822] font-bold  text-center textos">Pizza</h1>
</div>
<Card.Body className=" flex-col items-center justify-center  p-0 h-64">


<div className="flex flex-col  h-64   items-center justify-center text-white my-20 bg-[#203828]  rounded-t-3xl">
    <h1 className="text-white text-5xl money">20R$</h1>
    <div className="text-2xl m-7">
        <div className=" flex justify-around ">
                <input className="radio"  id="pizzaP" name="options" type="radio"  />  
    <input className="radio" type="radio"  id="pizzaM" name="options"/>  
     <input className="radio"type="radio"  id="pizzaG" name="options"/>
        </div>  <br/>

  <div className=" flex justify-around sm:text-[1rem]">


    <label className="textos" for="pizzaP">Pequena</label>         
<label className="mx-4 textos" for="pizzaM" >Media</label>
<label className="textos" for="pizzaG" >Grande </label>
  </div>

    </div>
      <Button className=" w-[80%] mb-3 text-white bg-green-700 rounded-2xl textos md:w-[50%]"  bg="success" variant="success">COMPRAR</Button>
</div>

</Card.Body>
</article>

</Card>







</motion.section>

      </article>
        
        
  
    )
}
export default Cardapio;