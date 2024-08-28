import React, { useCallback, useState } from "react";
import { Anchor } from "@/app/types/homeSections";
import SectionContainer from "@/app/components/Container/Container";
import Typography from "@/app/components/Typography/Typography";
import styles from "./styles.module.scss";
import { ServicesTabs as ServicesTabsList } from "@/app/types/servicesTabs";
import Flex from "@/app/components/Flex/Flex";
import { data } from "@/app/utils/data";
import ServiceCard from "@/app/components/Sections/Services/ServiceCard";
import ServicesTabs from "@/app/components/Sections/Services/ServicesTabs";

const Services = React.forwardRef<HTMLElement, {}>((props, ref) => {
  const [activeTab, setActiveTab] = useState(ServicesTabsList.county);

  const handleTabChange = useCallback(
    (event, value) => {
      setActiveTab(value);
    },
    [setActiveTab]
  );

  return (
    <section ref={ref} id={Anchor.services}>
      <SectionContainer noVerticaPadding verticalPadding={80}>
        <Typography element="h2" className="heading-center">
          Go anywhere <span className="d-block">with our latest tour offers</span>
        </Typography>
        <Flex direction="column" gap={50} className={styles["service-content"]}>
          <ServicesTabs activeTab={activeTab} handleTabChange={handleTabChange} />
          <div className={styles["service-cards"]}>
            {activeTab === ServicesTabsList.county
              ? data.offers.county?.map(({ id, rating, title, img, price, location }) => (
                  <ServiceCard key={id} {...{ rating, title, img, price, location }} />
                ))
              : null}
            {activeTab === ServicesTabsList.camping
              ? data.offers.camping?.map(({ id, rating, title, img, price, location }) => (
                <ServiceCard key={id} {...{ rating, title, img, price, location }} />
              ))
              : null}
            {activeTab === ServicesTabsList.adventure
              ? data.offers.adventure?.map(({ id, rating, title, img, price, location }) => (
                <ServiceCard key={id} {...{ rating, title, img, price, location }} />
              ))
              : null}
            {activeTab === ServicesTabsList.hiking
              ? data.offers.hiking?.map(({ id, rating, title, img, price, location }) => (
                <ServiceCard key={id} {...{ rating, title, img, price, location }} />
              ))
              : null}
            {activeTab === ServicesTabsList.group
              ? data.offers.group_trip?.map(({ id, rating, title, img, price, location }) => (
                <ServiceCard key={id} {...{ rating, title, img, price, location }} />
              ))
              : null}
          </div>
        </Flex>
      </SectionContainer>
    </section>
  );
});

export default Services;
