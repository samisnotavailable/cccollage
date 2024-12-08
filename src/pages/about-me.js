import React, {useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx(styles.statementContainer)}>
      <div className="container">
      <img
          src="img/wait.png" 
          alt="pandora's box"
          className={styles.pandora} 
        />
        <h1 className="hero__title">AuThor's StaTemEnt</h1>
        <p>My name is Diende. I'm an artist, but also a graphic designer and web developer by compromise. This compromise, however, has its tradeoffs, such as being able to make a website such as this. 
          I'm not a big fan of how the internet has come to be, especially for artists, who essentially have to fight for an eyescroll's attention just to get noticed. Not only do artists have to compete
          by creating content out of their art, but they also have to compete with AI-generated images spammed across the internet, further devaluing human-made art in the pursuit of content. <Highlight color="black">cccollage</Highlight> is my way of contributing against this, by creating an
          accessible means to learn about the craft of collage-making while also putting other collage artists directly on the spotlight.</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Crash Course Collage—your source and directory for all things collage!">
      <HomepageHeader />
      <main className={clsx(styles.aboutContainer)}>
      <div className="container">
      <img
          src="img/pandora.png" 
          alt="diende"
          className={styles.avatar}
        />
        <h1 className="hero__title">Profile</h1>
        <p>When I'm not making art, I'm probably updating this website. If I'm not updating this website, I'm probably working. If I'm not working, I'm probably resting. If I'm not resting, I'm probably writing.
          If I'm not writing, I'm probably thinking about it. You can follow me on Instagram as <a href="https://www.instagram.com/diendenoel/">@diendenoel</a> and you may email me at <a href="mailto:diendeworks@gmail.com">diendeworks@gmail.com</a>. 
          Personal website is currently in development.</p>
      </div>
      </main>
    </Layout>
  );
}
