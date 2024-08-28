"use client";

import React, {useEffect, useState} from 'react';
import {Anchor} from "@/app/types/homeSections";
import Typography from "@/app/components/Typography/Typography";
import SectionContainer from "@/app/components/Container/Container";
import {data} from "@/app/utils/data";
import TestimonialCard from "@/app/components/Sections/Testimonials/TestimonialCard";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import useScreenClassContext from "@/app/hooks/useScreenClassContext";


const Testimonials = React.forwardRef<HTMLElement, {}>((props, ref) => {
  const [slidesToShow, setSlidesToShow] = useState(1)
  const screenClass = useScreenClassContext()

  useEffect(() => {
    if (screenClass) {
      if (["xs"].includes(screenClass)) {
        setSlidesToShow(1)
      } else if (["sm", "md"].includes(screenClass)){
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }
  }, [screenClass]);

  return (
    <section ref={ref} id={Anchor.testimonials}>
      <SectionContainer noVerticalPadding className={styles["testimonials-container"]}>
        <Typography element="h2" className="heading-center">
          Why Travelers Choose Us
        </Typography>
        <div className={styles["testimonials-cards"]}>
          <Swiper
            spaceBetween={20}
            slidesPerView={slidesToShow}
            loop={true}
            modules={[Pagination]}
            pagination={{ clickable: true}}
          >
            {data.testimonials.map(({id, img, name,feedback}) => (
              <SwiperSlide key={id}>
                <TestimonialCard {...{img, name,feedback}}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionContainer>
    </section>
  );
});

export default Testimonials;