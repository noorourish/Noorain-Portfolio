import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
        src={getImageUrl("aboutImage.png")} 
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.abouttems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Cyber Security Engineer</h3>
              <p>Learning network security, python automation,
              and secure web development and React
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend & Securty Basics</h3>
              <p>
                Learning secure backend systems and APIs with Python
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cyber Security Learner</h3>
              <p>
                Learning to identify vulnerabilities and secure applications
              </p>
            </div>
          </li>
          </ul>
      </div>
    </section>
  );
};

