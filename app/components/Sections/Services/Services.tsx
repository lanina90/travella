import React from 'react';
import {Anchor} from "@/app/types/homeSections";

const Services = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section style={{ height: "200px" }} ref={ref} id={Anchor.services}>
      Destinations
    </section>
  );
});

export default Services;