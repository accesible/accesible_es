import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Una web más justa',
    Svg: require('@site/static/img/amor.svg').default,
    description: (
      <>
        Queremos fomentar el desarrollo de sitios accesibles, consigamos entre todos una red más igualitaria.
      </>
    ),
  },
  {
    title: 'Pautas resumidas',
    Svg: require('@site/static/img/ajuste.svg').default,
    description: (
      <>
        Nos centramos en las <a href="/pautas">pautas de accesibilidad</a> más importantes y las resumimos para que no pierdas demasiado tiempo buscando en la documentación oficial.
      </>
    ),
  },
  {
    title: 'Ayúdanos',
    Svg: require('@site/static/img/colabora.svg').default,
    description: (
      <>
        Este es un proyecto abierto donde te invitamos a <a href="manifiesto#cómo-colaborar">colaborar</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
