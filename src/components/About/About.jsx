import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
            src={getImageUrl("about/sdIcon.png")} 
            alt="Software Developer icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
              Building scalable, user-centric applications with a strong emphasis on clean code, system design, and end-to-end feature implementation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
            src={getImageUrl("about/mlIcon.png")} 
            alt="ML/AI icon" />
            <div className={styles.aboutItemText}>
              <h3>ML/AI Programmer</h3>
              <p>
              I'm an ML/AI programmer with experience in developing intelligent systems and data-driven solutions
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
            src={getImageUrl("about/devopsIcon.png")} 
            alt="Devops icon" 
             />
            <div className={styles.aboutItemText}>
              <h3>DevOps</h3>
              <p>
              Experience in automating deployment pipelines and maintaining robust, high-availability systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
            src={getImageUrl("about/compIcon.png")} 
            alt="Competitive Programmer icon" />
            <div className={styles.aboutItemText}>
              <h3>Competitive Programmer</h3>
              <p>
              Experience in solving complex algorithmic challenges and optimizing code for performance.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;