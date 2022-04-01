import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Una web más justa',
    Svg: require('@site/static/img/amor.svg').default,
    description: (
      <>
        Queremos fomentar el desarrollo de sitios accesibles, consigamos una red más igualitaria.
      </>
    ),
  },
  {
    title: 'Pautas resumidas',
    Svg: require('@site/static/img/ajuste.svg').default,
    description: (
      <>
        Nos centramos en las pautas de accesibilidad más importantes y las resumimos para que sean fáciles de entender.
      </>
    ),
  },
  {
    title: 'Ayúdanos',
    Svg: require('@site/static/img/colabora.svg').default,
    description: (
      <>
        Este es un proyecto abierto donde cualquier persona puede <a href="manifiesto#cómo-colaborar">colaborar</a>.
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
        <h3>{title}</h3>
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
