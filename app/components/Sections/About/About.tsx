import React from "react";
import { Anchor } from "@/app/types/homeSections";
import SectionContainer from "@/app/components/Container/Container";
import Typography from "@/app/components/Typography/Typography";
import styles from "./styles.module.scss";

const About = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} id={Anchor.about}>
      <SectionContainer noVerticalPadding verticalPadding={80}>
        <div className={styles["about-section-header"]}>
          <Typography element="h2" className={styles["about-section-title"]}>
            About Travel Agency
          </Typography>
          <Typography element="p" className={styles["about-section-subtitle"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
          </Typography>
        </div>
        <div className={styles["about-section-features"]}>
          <div className={styles["about-section-features-card"]}>
            <img
              src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd4648104_people.png"
              alt={"Flights"}
            />
            <>
              <span className={styles["about-section-features-card-title"]}>3554</span>
              <span className={styles["about-section-features-card-subtitle"]}>Flights</span>
            </>
          </div>
          <div className={styles["about-section-features-card"]}>
            <img
              src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd4648103_medal.png"
              alt={"Certificates"}
            />
            <span className={styles["about-section-features-card-title"]}>280</span>
            <span className={styles["about-section-features-card-subtitle"]}>Certificates</span>
          </div>
          <div className={styles["about-section-features-card"]}>
            <img
              src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd46480fb_Award.png"
              alt={"Awards"}
            />
            <span className={styles["about-section-features-card-title"]}>120</span>
            <span className={styles["about-section-features-card-subtitle"]}>Awards</span>
          </div>
          <div className={styles["about-section-features-card"]}>
            <img
              src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd464810a_star.png"
              alt={"Reviews"}
            />
            <span className={styles["about-section-features-card-title"]}>390</span>
            <span className={styles["about-section-features-card-subtitle"]}>Reviews</span>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
});

export default About;
