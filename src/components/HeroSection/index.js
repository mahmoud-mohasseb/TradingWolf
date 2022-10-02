import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdOutlineAutoGraph } from "react-icons/md";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1400, delay: 200 });
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <h3 style={{ color: "#e7533f", marginTop: 20 }}>
          NEXT-GENERATION TRADING INDICATORS
        </h3>
        <h1 style={{ fontSize: "40px", fontWeight: 800, marginTop: 50 }}>
          IMPROVE TRADING SKILLS
          <br />
          WITH SMART ALGORITHMS
        </h1>
        <Link className={styles.button2} to="/docs/intro">
          Documentation
          <MdOutlineAutoGraph />
        </Link>
      </div>
      <div data-aos="zoom-in" className={styles.tradeimg}>
        <img
          className={styles.imagesection}
          src={require("@site/static/img/home.png").default}
          alt="Hometrade"
          width="343"
          height="400"
        />
      </div>
    </div>
  );
};
export default HeroSection;
