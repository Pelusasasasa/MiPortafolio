import React from 'react'
import "../css/about.css"
const About = () => {

  const mostrarTexto = (e)=>{
    const etiqueta = document.querySelector(`#${e}`)
    console.log(etiqueta)
   etiqueta.children[1].classList.remove('none')
  }
  const sacarTexto = (e)=>{
    const etiqueta = document.querySelector(`#${e}`)
    console.log(etiqueta)
   etiqueta.children[1].classList.add('none')
  }
  return (
    <section className='about-section'>
      <div className="text">
        <p>Soy un desarrolador front-end interesado en toda la tecnologia web,</p>
        <p>me encuentro aprendiendo las tecnologias Full Stack,actualizandome a las</p>
        <p>  mejoras actuales. Me considero una persona extrovertida que se adapta</p>
        <p> a distintos grupos de personas,donde no tengo problemmas para relacionarme</p>
      </div>
      <div className='seccionTarjeta'>
        <div className="tarjet" id='js'  onMouseLeave={(e)=>{sacarTexto("js")}} onMouseEnter={(e)=>{mostrarTexto("js")}}>
          <img src="img/javascript.ico" alt="" />
          <p  className='informacionHabilidad none'>JAVASCRIPT</p>
        </div>
        <div className="tarjet" id='mongo' onMouseLeave={(e)=>{sacarTexto("mongo")}} onMouseEnter={(e)=>{mostrarTexto("mongo")}}>
          <img src="img/mongodb.ico" alt="" />
          <p  className='informacionHabilidad none'>MONGODB</p>
        </div>
        <div className="tarjet" id='node' onMouseLeave={(e)=>{sacarTexto("node")}} onMouseEnter={(e)=>{mostrarTexto("node")}}>
          <img src="img/node.ico" alt="" />
          <p  className='informacionHabilidad none'>NODE</p>
        </div>
        <div className="tarjet" id='react' onMouseLeave={(e)=>{sacarTexto("react")}} onMouseEnter={(e)=>{mostrarTexto("react")}}>
          <img src="img/react.ico" alt="" />
          <p  className='informacionHabilidad none'>REACT</p>
        </div>
        <div className="tarjet" id='sass' onMouseLeave={(e)=>{sacarTexto("sass")}} onMouseEnter={(e)=>{mostrarTexto("sass")}}>
          <img src="img/sass.ico" alt="" />
          <p  className='informacionHabilidad none'>SASS</p>
        </div>
        <div className="tarjet" id='css' onMouseLeave={(e)=>{sacarTexto("css")}} onMouseEnter={(e)=>{mostrarTexto("css")}}>
          <img src="img/css.ico" alt="" />
          <p  className='informacionHabilidad none'>CSS</p>
        </div>
        <div className="tarjet" id='html' onMouseLeave={(e)=>{sacarTexto("html")}} onMouseEnter={(e)=>{mostrarTexto("html")}}>
          <img src="img/html.ico" alt="" />
          <p  className='informacionHabilidad none'>HTML</p>
        </div>
        <div className="tarjet" id='express' onMouseLeave={(e)=>{sacarTexto("express")}} onMouseEnter={(e)=>{mostrarTexto("express")}}>
          <img src="img/express.ico" alt="" />
          <p  className='informacionHabilidad none'>EXPRESS</p>
        </div>
    </div>
    </section>
  )
}

export default About