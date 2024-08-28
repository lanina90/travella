import React from 'react';
import {Anchor} from "@/app/types/homeSections";
import SectionContainer from "@/app/components/Container/Container";
import Typography from "@/app/components/Typography/Typography";

const ContactUs = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} id={Anchor.contacts}>
      <SectionContainer>
        <Typography element="h2" className="heading-center">
          Lets create amazing Travel <span className="d-block">experience together</span>
        </Typography>
      </SectionContainer>
    </section>
  );
});

export default ContactUs;