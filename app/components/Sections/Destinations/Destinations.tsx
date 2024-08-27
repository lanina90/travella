import React from 'react';
import {Anchor} from "@/app/components/types/homeSections";

const Destinations = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section style={{ height: "200px" }} ref={ref}>
      Destinations
    </section>
  );
});

export default Destinations;