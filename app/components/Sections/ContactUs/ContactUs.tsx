import React from 'react';
import {Anchor} from "@/app/types/homeSections";

const ContactUs = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section style={{ height: "200px" }} ref={ref} id={Anchor.contacts}>
      Destinations
    </section>
  );
});

export default ContactUs;