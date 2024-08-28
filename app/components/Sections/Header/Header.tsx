import React from "react";
import styles from "./styles.module.scss";
import Typography from "@/app/components/Typography/Typography";
import HeaderForm from "@/app/components/Sections/Header/HeaderForm";
import Container from "@/app/components/Container/Container";
import Flex from "@/app/components/Flex/Flex";
import {Anchor} from "@/app/types/homeSections";

const Header = React.forwardRef<HTMLElement, {}>(({}, ref) => {
  return (
    <section id={Anchor.header} className={styles["header-container"]} ref={ref} >
      <video autoPlay muted loop className={styles["header-video"]}>
        <source src="./video_1.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <Container noVerticalPadding>
        <div className={styles["header-content"]}>
          <Flex direction="column" justifyContent="center">
            <Typography element="h1" className={styles["header-content-title"]}>
              Tour Travel & <span className="text-span">Adventure</span> Camping
            </Typography>
            <Typography element="p" className={styles["header-content-description"]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </Flex>
          <HeaderForm/>
        </div>
      </Container>
    </section>
  );
});

export default Header;
