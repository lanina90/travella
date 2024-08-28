import React from "react";
import { TOffer } from "@/app/utils/data";
import Image from "next/image";
import styles from "./styles.module.scss";
import Flex from "@/app/components/Flex/Flex";
import Typography from "@/app/components/Typography/Typography";

const ServiceCard = ({ rating, title, img, price, location }: Omit<TOffer, "id">) => {
  return (
    <div className={styles["service-card"]}>
      <Image src={img} alt={title} fill className={styles["service-card-image"]} />
      <Flex justifyContent="center" alignItems="center" className={styles["service-card-rating"]}>
        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd4648107_rating.png"
          alt="rating"
          className={styles["service-card-rating-image"]}
        />
        <div className={styles["service-card-rating-text"]}>{rating}</div>
      </Flex>
      <Flex
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        className={styles["service-card-content"]}
      >
        <Typography element="h3" className={styles["service-card-content-title"]}>
          {title}
        </Typography>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex justifyContent="flex-start" alignItems="center">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd4648100_location.png"
              alt="location"
            />
            <Typography element="p" className={styles["service-card-content-location"]}>
              {location}
            </Typography>
          </Flex>
          <div className={styles["service-card-content-price"]}>${price}</div>
        </Flex>
      </Flex>
    </div>
  );
};

export default ServiceCard;
