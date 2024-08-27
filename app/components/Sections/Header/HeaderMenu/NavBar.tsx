"use client";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Anchor } from "@/app/components/types/homeSections";
import Button from "@/app/components/Button/Button";

interface NavBarProps {
  activeSection: string;
}

const NavBar: React.FC<NavBarProps>= ({ activeSection }) => {

  return (
    <nav className={styles["nav-bar"]}>
      <Link href={Anchor.header} className={(activeSection ===  Anchor.header || !activeSection) ? styles["link-active"] : undefined}>
        Home
      </Link>
      <Link href={Anchor.about} className={activeSection === Anchor.about ? styles["link-active"] : undefined}>
        About
      </Link>
      <Link href={Anchor.services} className={activeSection === Anchor.services ? styles["link-active"] : undefined}>
        Services
      </Link>
      <Link href={Anchor.testimonials} className={activeSection === Anchor.testimonials ? styles["link-active"] : undefined}>
        Testimonials
      </Link>
      <Button
        href={Anchor.contacts}
        shape="rounded"
        buttonStyle="primary"
        className={activeSection === Anchor.contacts ? styles["link-active"] : undefined}
      >
        Contact us
      </Button>
    </nav>
  );
};
export default NavBar;
