import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '開源又好用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        510208開發的軟體又簡單又好用，同時它們是開源的，你可以隨意修改，並在合法狀態下發布它，或整進你的軟體！
      </>
    ),
  },
  {
    title: '專注於重要的事情',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我們許多軟體，讓你在開源之海中，可以找到這好幾盞明燈，相信我，不是所有軟體都需要付錢唷！
      </>
    ),
  },
  {
    title: '不須額外思考',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我們盡量做到讓你使用不需要額外想怎麼下載？怎麼安裝？
        只要輕輕一按，軟體主介面就輕鬆出現，再用人性化的快捷鍵一敲，你想做甚麼？做完了！
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
