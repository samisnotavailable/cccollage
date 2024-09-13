import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Your Guide to Collage',
    Svg: require('@site/static/img/guide-to-collage.svg').default,
    description: (
      <>
        This is both a starter and companion guide to collage, for beginners and
        experienced alike, giving you history, sources, tips, and more!
      </>
    ),
  },
  {
    title: 'Look, Cut, & Paste',
    Svg: require('@site/static/img/second.svg').default,
    description: (
      <>
        Simple and easy to follow along, with each page packing all the info
        you need in order to know what you need to know about collage.
      </>
    ),
  },
  {
    title: 'My Dedication to the Craft',
    Svg: require('@site/static/img/third.svg').default,
    description: (
      <>
        Designed and written in a way that aims to help you respect and fall
        in love with the craft of collage and the people who make them, just as I have.
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
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
