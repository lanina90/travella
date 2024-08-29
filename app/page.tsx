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
import {SectionsProvider} from "@/app/providers/SectionsProvider/SectionsProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headerRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const contactsRef = useRef<HTMLElement | null>(null);
  const destinationsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const createAnimation = (ref: React.RefObject<HTMLElement>) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom 80%',
          toggleActions: 'play none none none',
        }
      });

      timeline.fromTo(
        ref.current,
        { opacity: 0.2, y: 170 },
        { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }
      );
    };

    createAnimation(aboutRef);
    createAnimation(servicesRef);
    createAnimation(testimonialsRef);
    createAnimation(contactsRef);
    createAnimation(destinationsRef);
  }, []);

  return (
    <SectionsProvider refs={{
      header: headerRef,
      about: aboutRef,
      services: servicesRef,
      testimonials: testimonialsRef,
      contacts: contactsRef,
      destinations: destinationsRef,
    }}>
      <HeaderMenu />
      <main>
        <Header ref={headerRef} />
        <Destinations ref={destinationsRef} />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Testimonials ref={testimonialsRef} />
        <ContactUs ref={contactsRef} />
      </main>
      <Footer />
    </SectionsProvider>
  );
}
