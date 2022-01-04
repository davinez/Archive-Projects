import React from 'react';
import styles from '../styles/About.module.css';

function About() {
  return (
    <main className={styles['container']}>
      <h1>Prueba técnica</h1>

      <h4>Este proyecto tiene como puntos:</h4>
      <ul className={styles['list']}>
        <li>Diseño Web Responsivo</li>
        <li>Uso del Framekork React</li>
        <li>Conexión con una API (Pokedex)</li>
        <li>Integracion de la libreria Redux para manejo de estados</li>
        <li>Despliegue del proyecto en alguna plataforma en la nube</li>
      </ul>
    </main>
  );
}

export default About;
