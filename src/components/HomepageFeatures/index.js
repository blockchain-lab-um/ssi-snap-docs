import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Self-Sovereign Identity",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Take your online identity to the next level and start using Decentralized Identifiers (DIDs) and
        Verifiable Credentials (VCs) in the most popular crypto wallet.
      </>
    ),
  },
  {
    title: "Easy-to-Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        SSI Snap expands MetaMask capabilities and does not require additional application or extension
        for Self-Sovereign Identity.
      </>
    ),
  },
  {
    title: "Fast Integration",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Decentralized applications (dApps) only need to call a few additional
        MetaMask's RPC methods to utilize the power of DIDs and VCs.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="feature-title">{title}</h3>
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
