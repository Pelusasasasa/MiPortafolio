import React from 'react';
import "../css/contact.css";

const Contact = () => {
  return (
    <section className='contact-section'>
      <form action="">
        <legend>Formulario de Contacto</legend>
        <fieldset>
          <div className="form-input">
            <input type="text" id='nombre' name='nombre' placeholder='Nombre' />
          </div>
          <div className="form-input">
            <input type="text" name="telefono" id="telefono" placeholder='Telefono' />
          </div>
          <div className="form-input">
            <input type="email" placeholder='Email' name="email" id="email" />
          </div>
          <div className="form-input">
            <textarea name="descripcion" id="descripcion" placeholder='Descripcion' cols="50" rows="10"></textarea>
          </div>
        </fieldset>
      </form>

      <main>
            <legend>Redes Sociales</legend>
      </main>
    </section>
  )
}

export default Contact