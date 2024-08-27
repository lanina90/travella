import React from 'react';
import {Anchor} from "@/app/types/homeSections";

const Testimonials = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section style={{ height: "200px" }} ref={ref} id={Anchor.testimonials}>
      Destinations
    </section>
  );
});

export default Testimonials;