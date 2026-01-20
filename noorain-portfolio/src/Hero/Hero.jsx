import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero =() => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Thara Noorain</h1>
            <p className={styles.description}> Aspiring to a cyber security engineer with knowledge of network security and secure web applications. I have experience using Python for automation and React for building responsive user interfaces. I am passionate about learning new security technologies and protecting digital systems from cyber threats!
            </p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} /> 
            <div className={styles.bottomBlur} />
            </section>
    );
};