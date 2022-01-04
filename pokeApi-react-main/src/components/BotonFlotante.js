import React, { useState } from 'react';
import plus from '../assets/plus.svg';
import styles from '../styles/BotonFlotante.module.css';

// Misma Logica que el 'menu de hamburguesa'
function BotonFlotante() {
  const [botonAbierto, setBotonAbierto] = useState(false);

  const handleToggle = () => {
    setBotonAbierto((prev) => !prev);
  };

  return (
    <>
      <div onClick={handleToggle} className={styles['boton-flotante']}>
        <img src={plus} alt="plus" />
        <div
          className={
            botonAbierto ? styles['boton-abierto'] : styles['boton-cerrado']
          }
        >
          Contenido
        </div>
      </div>
    </>
  );
}

export default BotonFlotante;
