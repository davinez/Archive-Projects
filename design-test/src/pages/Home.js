import React from 'react';
import styles from '../styles/Home.module.scss';
import { data } from '../data';
import dealImage from '../assets/deal.png';
import micro from '../assets/micro.png';

function Home() {
  return (
    <main className={styles.container}>
      <div class={styles.background}></div>

      <div className={styles.centerElements}>
        <div className={styles.searchbarContainer}>
          <p className={styles.searchbarHeader}>
            INNOVATIVE SOLUTION FOR SOURCING CANDIDATES
          </p>
          <p className={styles.searchbarTitle}>
            Help us find <strong>the missing puzzle, get rewarded</strong>{' '}
            properly.
          </p>
          <div>
            <input placeholder="Keyword,job title or company" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={dealImage} alt="deal representation" />
        </div>
      </div>

      <p className={styles.cardsHeader}>RECENTLY ADDED JOBS:</p>

      <div className={styles.cardsContainer}>
        {data && (
          <>
            {/* llenar y generar una 'carta' por cada objeto contenido en el estado */}
            {data.map((card) => (
              <div key={card.id} className={styles['card']}>
                <img src={micro} alt="Logo de empresa" />

                <div className={styles['cardBody']}>
                  <p className={styles['name']}>{card.name}</p>
                  <p className={styles['empresa']}>{card.empresa}</p>
                  <p className={styles['ubicacion']}>{card.ubicacion}</p>
                </div>

                <div className={styles['cardFooter']}>
                  <p className={styles['salario']}>{card.salario}</p>
                  <p className={styles['footer']}>of hiring reward</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}

export default Home;
