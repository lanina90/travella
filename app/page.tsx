"use client"

import Destinations from "@/app/components/Sections/Destinations/Destinations";
import About from "@/app/components/Sections/About/About";
import Header from "@/app/components/Sections/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import HeaderMenu from "@/app/components/Sections/Header/HeaderMenu/HeaderMenu";
import React, {useEffect, useRef, useState} from "react";
import Services from "@/app/components/Sections/Services/Services";
import Testimonials from "@/app/components/Sections/Testimonials/Testimonials";
import ContactUs from "@/app/components/Sections/ContactUs/ContactUs";
import {Anchor} from "@/app/types/homeSections";


export default function Home() {
  const headerRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const contactsRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <HeaderMenu/>
      <main>
        <Header ref={headerRef}/>
        <Destinations/>
        <About ref={aboutRef}/>
        <Services ref={servicesRef}/>
        <Testimonials ref={testimonialsRef}/>
        <ContactUs ref={contactsRef}/>
      </main>
      <Footer/>
    </>
  );
}
