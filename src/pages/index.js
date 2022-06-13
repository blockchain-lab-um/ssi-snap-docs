import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="home_container">
      <a className="home_slogan">Experience SSI with MetaMask</a>
      <h1 className="">{siteConfig.title}</h1>
      <br />
      <div className={styles.buttons}>
        <Link
          className="button home_button"
          to="https://blockchain-lab-um.github.io/course-dapp/"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`SSI Snap Docs`} description="SSI Snap Documentation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
