"use client";

import React, {useState} from "react";
import styles from "./styles.module.scss";
import { Anchor } from "@/app/types/homeSections";
import Button from "@/app/components/Button/Button";
import {useSections} from "@/app/providers/SectionsProvider/SectionsProvider";
import classNames from "classnames";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('header')
  const refs = useSections();

  const scrollToRef = (key, offset = 0) => {
    const ref = refs[key];
    if (ref && ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scroll({
        top: offsetPosition + offset,
        behavior: "smooth",
      });
      ref.current.style.opacity = 1
      setActiveLink(key)
    }
  };

  return (
    <nav className={styles["nav-bar"]}>
      <a
        href={Anchor.header}
        onClick={(e) => {
          e.preventDefault();
          scrollToRef('header');
        }}
        className={classNames({[styles["link-active"]]: activeLink === 'header'})}
      >Home</a>
      <a
        href={Anchor.about}
        onClick={(e) => {
          e.preventDefault();
          scrollToRef('about', -90);
        }}
        className={classNames({[styles["link-active"]]: activeLink === 'about'})}
      >About</a>
      <a
        href={Anchor.services}
        onClick={(e) => {
          e.preventDefault();
          scrollToRef('services', -90);
        }}
        className={classNames({[styles["link-active"]]: activeLink === 'services'})}
      >Services</a>
      <a
        href={Anchor.testimonials}
        onClick={(e) => {
          e.preventDefault();
          scrollToRef('testimonials', -90);
        }}
        className={classNames({[styles["link-active"]]: activeLink === 'testimonials'})}
      >Testimonials</a>
      <Button
        shape="rounded"
        buttonStyle="primary"
        onClick={(e) => {
          e.preventDefault();
          scrollToRef('contacts', -90);
        }}
      >
        Contact us
      </Button>
    </nav>
  );
};
export default NavBar;
