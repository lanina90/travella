import React from 'react';
import {TTestimonial} from "@/app/utils/data";
import styles from "./styles.module.scss";
import Image from "next/image";
import Flex from "@/app/components/Flex/Flex";
import Typography from "@/app/components/Typography/Typography";

const TestimonialCard = ({img, name,feedback} : Omit<TTestimonial, "id">) => {

  return (
    <Flex direction="column" alignItems="center"  className={styles["testimonials-card"]}>
      <div className={styles["testimonials-card-image"]}>
        <Image src={img} alt={name} fill />
      </div>
      <Flex direction="column" alignItems="center">
        <Typography element="h3">{name}</Typography>
        <Typography element="p">{feedback}</Typography>
      </Flex>
    </Flex>
  );
};

export default TestimonialCard;