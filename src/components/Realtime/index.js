import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Aos from "aos";
import "aos/dist/aos.css";

const Realtime = () => {
  useEffect(() => {
    Aos.init({ duration: 1400, delay: 200 });
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <h3 style={{ color: "#e7533f", marginTop: 20 }}>
          REALTIME INDICATORS AT YOUR FINGERTIPS
        </h3>
        <h1 style={{ fontSize: "40px", fontWeight: "900" }}>
          Realtime Charts for
          <br />
          any asset.
        </h1>
        <p>
          With TradingWolf, you can request any chart.
          <br />
          Is it stocks, cryptocurrencies, trading Forex,
          <br />
          indices, or commodities? Even more options available.
          <br />
          Simply add our indicators and easily recognize patterns,
          <br />
          the fast money, and straightforward entry or exit moments.
        </p>
      </div>
      <div data-aos="zoom-in" className={styles.tradeimg}>
        <img
          className={styles.imagesection}
          src={require("@site/static/img/real-time-indicator-1.png").default}
          alt="Hometrade"
          width="343"
          height="400"
        />
      </div>
    </div>
  );
};
export default Realtime;
