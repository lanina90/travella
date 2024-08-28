"use client"

import React, {useEffect, useRef, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@/app/components/Button/Button";
import styles from "./styles.module.scss"
import NavBar from "@/app/components/Sections/Header/HeaderMenu/NavBar";
import { gsap } from 'gsap';

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
      });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        y: '-200%',
        opacity: 0,
        ease: 'power3.in',
      });
    }
  }, [isOpen, menuRef]);

  const expendMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles["nav-bar-mobile"]}>
      <Button shape="rectangular" layout={"icon"} className={styles["nav-bar-mobile-button"]} onClick={expendMenu}>
        <MenuIcon/>
      </Button>
      <div className={styles["nav-bar-mobile-expended"]} ref={menuRef}>
        <NavBar/>
      </div>
    </div>
  );
};

export default MobileNavBar;