import React from 'react'
import "../css/projects.css"
const Projects = () => {
  return (
    <main>

    <h1>Projects</h1>
    <section className='section-projects'>

      <div className="contenedor">
        <div className="carta">
          <div className="lado frente">
            <img src="img/AppCripto.png" alt="" />
          </div>
          <div className="lado atras">
              <h2>Cripto App</h2>
              <p>Es un projecto sencillo hecho en react que muestra las primeras 100 criptomonedas en el ranking y muestra informacion sobre ellas donde al tocar sobre un renglon salamos a otra donde nos da mas informacion sobre la misma.
              </p>
              <div className="button">
                <button><a href="#">Page</a></button>
                <button><a target="_blank" href="https://github.com/Pelusasasasa/MiPortafolio">Github</a></button>
              </div>
          </div>
        </div>
      </div>

        <div className="contenedor">
          <div className="carta">
            <div className="lado frente">
              <img src="img/sistemaFacturacion.png" alt="" />
            </div>
            <div className="lado atras">
                <h2>Sistema de Facturacion</h2>
                <p>Se trata de una aplicacion hecha en electron.js para un sistema de facturacion,control de stock y distintos funcionamientos para comercio donde se conecta a un servidor en la red interna.
                </p>
               <div className="button">
                <button><a target="_blank" href="https://github.com/Pelusasasasa/sistemaFacturacion">Github</a></button>
               </div>
            </div>
          </div>
        </div>

        <div className="contenedor">
          <div className="carta">
            <div className="lado frente">
              <img src="img/Servidor.png" alt="" />
            </div>
            <div className="lado atras">
                <h2>Servidor</h2>
                <p>Servidor usando express,node.js y mongodb con librerias como mongoose para trabajar datos de un sistema de facturacion de un comercio con su propia api rest.
                </p>
                <div className="button">
                  <button><a target="_blank" href="https://github.com/Pelusasasasa/servidor">Github</a></button>
                </div>
            </div>
          </div>
        </div>
    </section>
    </main>
  )
}

export default Projects