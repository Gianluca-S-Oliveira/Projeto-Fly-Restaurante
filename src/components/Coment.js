import React from "react";

function Comentarios({nome, nota,comentario}){
    return (
        <div className="menuItem border-2 border-green-700 m-10 rounded-xl px-10 hover:cursor-pointer hover:shadow-2xl shadow-black">
            <h3 className="text-center py-4 text-3xl font-semibold">{nome}</h3>
            <h1 className="text-green-600 text-5xl text-center  pb-4 font-bold"> {nota}</h1>
        
            <hr />
            <p className="py-5 px-2 text-center text-xl">"{comentario}"</p>
        </div>
    )
}
export default Comentarios;