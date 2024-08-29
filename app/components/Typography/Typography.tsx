import React from 'react';
import {TypographyProps} from "@/app/components/Typography/types";

const Typography = React.forwardRef<HTMLElement | null, TypographyProps>(
  (
    { element = "div", children,  ...props },
    ref
  ) => {
    const Tag = element;

    //@ts-ignore
    return <Tag {...props} ref={ref}>{children}</Tag>;
  }
);

Typography.displayName = "Typography";

export default Typography;