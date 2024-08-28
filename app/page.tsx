"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Destinations from "@/app/components/Sections/Destinations/Destinations";
import About from "@/app/components/Sections/About/About";
import Header from "@/app/components/Sections/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import HeaderMenu from "@/app/components/Sections/Header/HeaderMenu/HeaderMenu";
import React, {useEffect, useRef} from "react";
import Services from "@/app/components/Sections/Services/Services";
import Testimonials from "@/app/components/Sections/Testimonials/Testimonials";
import ContactUs from "@/app/components/Sections/ContactUs/ContactUs";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headerRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const contactsRef = useRef<HTMLElement | null>(null);
  const destinationsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const animateIn = (ref: React.RefObject<HTMLElement>) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    animateIn(headerRef);
    animateIn(aboutRef);
    animateIn(servicesRef);
    animateIn(testimonialsRef);
    animateIn(contactsRef);
    animateIn(destinationsRef);
  }, []);

  return (
    <>
      <HeaderMenu/>
      <main>
        <Header ref={headerRef}/>
        <Destinations ref={destinationsRef}/>
        <About ref={aboutRef}/>
        <Services ref={servicesRef}/>
        <Testimonials ref={testimonialsRef}/>
        <ContactUs ref={contactsRef}/>
      </main>
      <Footer/>
    </>
  );
}
