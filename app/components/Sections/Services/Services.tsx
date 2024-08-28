import React, {useCallback, useState} from 'react';
import {Anchor} from "@/app/types/homeSections";
import SectionContainer from "@/app/components/Container/Container";
import Typography from "@/app/components/Typography/Typography";
import styles from "./styles.module.scss"
import {ServicesTabs as ServicesTabsList} from "@/app/types/servicesTabs";
import ServicesTabs from "@/app/components/Sections/Services/ServicesTabs";
import Flex from "@/app/components/Flex/Flex";

const Services = React.forwardRef<HTMLElement, {}>((props, ref) => {
  const [activeTab, setActiveTab] = useState(ServicesTabsList.county)

  const handleTabChange = useCallback(
    (event, value) => {
      setActiveTab(value);
    },
    [setActiveTab]
  );

  return (
    <section ref={ref} id={Anchor.services}>
      <SectionContainer>
        <Typography element="h2" className="heading-center">
          Go anywhere <span className="d-block">with our latest tour offers</span>
        </Typography>
        <Flex direction="column" gap={50} className={styles["service-content"]}>
          <ServicesTabs activeTab={activeTab} handleTabChange={handleTabChange}/>
          <div>flgf;lkg</div>
        </Flex>
      </SectionContainer>
    </section>
  );
});

export default Services;