import * as React from "react"
import Layout from "../components/Layout"

import Home from "../pages/Home/home.jsx"
import Valores from "../pages/Valores/Valores.jsx"
import Cardapio from "../pages/Cardapio/Cardapio.jsx"
import Whats from "../pages/Contato/whats.jsx"
import Comentarios from "../pages/Comentarios/Comentarios.jsx"

const IndexPage = () => (
  <Layout>
    <Home/>
    <Valores/>    
    <Cardapio/>
      <Whats/>
      <Comentarios/>
  </Layout>

)


export default IndexPage
