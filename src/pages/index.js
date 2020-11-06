import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Una web más justa',
    imageUrl: 'img/confiar.svg',
    description: (
      <>
        Queremos <strong>fomentar el desarrollo de sitios accesibles</strong>, por una red más igualitaria con todos.
      </>
    ),
  },
  {
    title: 'Pautas resumidas',
    imageUrl: 'img/ajuste.svg',
    description: (
      <>
        Nos centramos en las <strong>pautas de accesibilidad más importantes</strong> y las resumimos para que sean fáciles de entender.
      </>
    ),
  },
  {
    title: 'Proyecto colaborativo',
    imageUrl: 'img/apoyo.svg',
    description: (
      <>
        Somos un proyecto abierto donde cualquier persona puede colaborar.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.customFields.heroTitle}</h1>
          <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Comenzar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
