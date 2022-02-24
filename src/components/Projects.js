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
              <h2>Titulo</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae laborum fugit, ipsa iusto ipsam earum natus,
                 repudiandae unde ad sint aperiam nisi odit fugiat tempore. Iusto perferendis eaque eos totam.
              </p>
              <button>Page</button>
              <button>Github</button>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Projects