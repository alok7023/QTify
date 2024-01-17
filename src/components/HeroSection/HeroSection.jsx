import React from "react";
import styles from "./HeroSection.module.css";
import HeroImg from "../../assets/hero.svg";

const HeroSection = () => {
  return (
    <>
      <div className={styles.Hero}>
        <div className={styles.HeroTitle}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img src={HeroImg} alt="HeroImg" height="212px" width="212px" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
