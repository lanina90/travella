'use client'

import React, {useEffect, useState} from 'react';
import styles from "./styles.module.scss"
import classNames from "classnames";
import SectionContainer from "@/app/components/Container/Container";
import Image from "next/image";
import MobileNavBar from "@/app/components/Sections/Header/HeaderMenu/MobileNavBar";
import NavBar from "@/app/components/Sections/Header/HeaderMenu/NavBar";
import useScreenClassContext from "@/app/hooks/useScreenClassContext";
import Link from "next/link";
import {Anchor} from "@/app/types/homeSections";


const HeaderMenu = ({activeSection} : {activeSection: string}) => {

  const [scrolled, setScrolled] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const screenClass = useScreenClassContext();

  useEffect(() => {
    setShowMobileMenu(["xs", "sm", "md"].includes(screenClass));
  }, [screenClass]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames(styles['header-menu'], scrolled && styles.sticky)}>
      <SectionContainer noVerticalPaddig className={styles['header-menu-container']}>
       <div className={styles['header-menu-logo']}>
         <Link href={Anchor.header}>
           <Image
             src={"https://cdn.prod.website-files.com/666001600530be8dd46480e1/66600f7a7288e52e8dd93cf3_logo.svg"}
             alt="logo"
             fill/>
         </Link>
       </div>
        {showMobileMenu ? <MobileNavBar activeSection={activeSection}/> : <NavBar activeSection={activeSection}/>}
      </SectionContainer>
    </header>
  );
};

export default React.memo(HeaderMenu);