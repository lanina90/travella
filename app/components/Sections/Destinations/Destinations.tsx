"use client";

import React, {useEffect, useRef, useState} from "react";
import SectionContainer from "@/app/components/Container/Container";
import Typography from "@/app/components/Typography/Typography";
import styles from "./styles.module.scss";
import Button from "@/app/components/Button/Button";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Flex from "@/app/components/Flex/Flex";
import useIsMobile from "@/app/hooks/useIsMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/scrollbar';
import { data } from "@/app/utils/data";
import Image from "next/image";
import SwiperCore from "swiper";
import { Scrollbar } from 'swiper/modules';
import useScreenClassContext from "@/app/hooks/useScreenClassContext";

const Controls = ({ nextArrowClick, prevArrowClick }: { nextArrowClick: () => void; prevArrowClick: () => void }) => {
  return (
    <Flex gap={20} className={styles["destinations-section-slider-controls"]}>
      <Button onClick={prevArrowClick} layout="icon" shape="circular" buttonStyle="primary">
        <ArrowBack fontSize="medium" />
      </Button>
      <Button onClick={nextArrowClick} layout="icon" shape="circular" buttonStyle="primary">
        <ArrowForward fontSize="medium" />
      </Button>
    </Flex>
  );
};

const Destinations = React.forwardRef<HTMLElement, {}>((props, ref) => {
  const isMobile = useIsMobile();
  const swiperRef = useRef<SwiperCore | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(1)
  const screenClass = useScreenClassContext()

  useEffect(() => {
    if (screenClass) {
      if (["xs"].includes(screenClass)) {
        setSlidesToShow(1)
      } else if (["sm"].includes(screenClass)){
        setSlidesToShow(2)
      } else if (["md", "lg"].includes(screenClass)){
        setSlidesToShow(4)
      } else if (["lg"].includes(screenClass)){
        setSlidesToShow(4)
      } else {
        setSlidesToShow(5)
      }

    }
  }, [screenClass]);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current?.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current?.slidePrev();
    }
  };

  return (
    <section ref={ref} id="#destination">
      <SectionContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <Typography element="h2" className={styles["destinations-section-title"]}>
            Popular Destination
          </Typography>
          {!isMobile && <Controls nextArrowClick={handleNextSlide} prevArrowClick={handlePrevSlide} />}
        </Flex>
        <div className={styles["destinations-section-slider"]}>
          <Swiper
            spaceBetween={20}
            slidesPerView={slidesToShow}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
          >
            {data?.destinations?.map(({ id, img, city }) => (
              <SwiperSlide key={id}>
                <div className={styles["slide"]}>
                  <Image src={img} fill alt={city} className={styles["slide-img"]} />
                  <div className={styles["slide-img-overlay"]} />
                  <Typography element="h3" className={styles["slide-text"]}>
                    {city}
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </SectionContainer>
    </section>
  );
});

export default Destinations;
