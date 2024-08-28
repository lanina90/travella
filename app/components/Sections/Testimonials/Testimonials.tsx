import React from 'react';
import {Anchor} from "@/app/types/homeSections";
import Typography from "@/app/components/Typography/Typography";
import SectionContainer from "@/app/components/Container/Container";

const Testimonials = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section style={{ height: "200px" }} ref={ref} id={Anchor.testimonials}>
      <SectionContainer>
        <Typography element="h2" className="heading-center">
          Why Travelers Choose Us
        </Typography>
      </SectionContainer>
    </section>
  );
});

export default Testimonials;