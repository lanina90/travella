"use client";

import React from "react";
import styles from "./styles.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { Anchor } from "@/app/types/homeSections";
import Button from "@/app/components/Button/Button";


const NavBar = () => {

  return (
    <nav className={styles["nav-bar"]}>
      <ScrollLink
        to={Anchor.header}
        smooth={true}
        duration={500}
        spy={true}
        activeClass={styles["link-active"]}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to={Anchor.about}
        smooth={true}
        duration={500}
        offset={-90}
        spy={true}
        activeClass={styles["link-active"]}
      >
        About
      </ScrollLink>
      <ScrollLink
        to={Anchor.services}
        smooth={true}
        duration={500}
        offset={-50}
        spy={true}
        activeClass={styles["link-active"]}
      >
        Services
      </ScrollLink>
      <ScrollLink
        to={Anchor.testimonials}
        smooth={true}
        duration={500}
        offset={-20}
        spy={true}
        activeClass={styles["link-active"]}
      >
        Testimonials
      </ScrollLink>
      <ScrollLink
        to={Anchor.contacts}
        smooth={true}
        duration={500}
        offset={-90}
        spy={true}
        activeClass={styles["link-active"]}
      >
        <Button
          shape="rounded"
          buttonStyle="primary"
        >
          Contact us
        </Button>
      </ScrollLink>
    </nav>
  );
};
export default NavBar;
