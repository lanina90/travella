import React from "react";
import styles from "./styles.module.scss";
import SectionContainer from "@/app/components/Container/Container";
import { Anchor } from "@/app/types/homeSections";
import Image from "next/image";
import Typography from "@/app/components/Typography/Typography";
import Flex from "@/app/components/Flex/Flex";
import {useSections} from "@/app/providers/SectionsProvider/SectionsProvider";
import Link from "next/link";

const Footer = () => {
  const {header} = useSections();

  const scrollToRef = (offset = 0) => {
    const ref = header;
    if (ref && ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scroll({
        top: offsetPosition + offset,
        behavior: "smooth",
      });
      ref.current.style.opacity = 1
    }
  };
  
  return (
    <footer id={"footer"}>
      <SectionContainer>
        <div className={styles["footer-grid"]}>
          <Flex direction="column" gap={20}>
            <a
              href={Anchor.header}
              onClick={(e) => {
                e.preventDefault();
                scrollToRef();
              }}
            >
              <Image
                src={"https://cdn.prod.website-files.com/666001600530be8dd46480e1/66600f7a7288e52e8dd93cf3_logo.svg"}
                alt="logo"
                width={170}
                height={32}
              />
            </a>
            <Typography element="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </Typography>
          </Flex>
          <Flex direction="column" gap={20}>
          </Flex>
          <Flex direction="column" gap={20}>
            <Typography element="h3" style={{ marginTop: 0 }}>
              Social Media
            </Typography>
            <Flex direction="row" justifyContent="flex-start">
              <Link href="https://www.facebook.com/" className={styles["footer-social"]}>
                <img
                  src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd4648101_facebook-white.png"
                  loading="lazy"
                  alt="Facebook"
                />
              </Link>
              <Link href="https://www.instagram.com/" className={styles["footer-social"]}>
                <img
                  src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd46480fe_instagram-white.png"
                  loading="lazy"
                  alt="instagram"
                />
              </Link>
              <Link href="https://www.twitter.com/" className={styles["footer-social"]}>
                <img
                  src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd46480f6_twitter-white.png"
                  loading="lazy"
                  alt="twitter"
                />
              </Link>
              <Link href="https://www.linkedin.com/" className={styles["footer-social"]}>
                <img
                  src="https://cdn.prod.website-files.com/666001600530be8dd46480e1/666001600530be8dd46480ff_linkedin-white.png"
                  loading="lazy"
                  alt="Linkdin"
                />
              </Link>
            </Flex>
          </Flex>
        </div>
      </SectionContainer>
      <div className={styles["footer-copyright"]}>Powered By Kateryna Lanina.</div>
    </footer>
  );
};

export default Footer;
