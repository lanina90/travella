import React from 'react';
import {Anchor} from "@/app/components/types/homeSections";

const About = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section style={{ height: "200px" }} ref={ref} id={Anchor.about}>
      Destinations
    </section>
  );
});

export default About;