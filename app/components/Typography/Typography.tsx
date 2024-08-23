import React from 'react';
import {TypographyProps} from "@/app/components/Typography/types";

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { element, children,  ...props },
    ref
  ) => {
    const Tag = element || "div";

    return <Tag {...props} ref={ref}>{children}</Tag>;
  }
);

Typography.displayName = "Typography";

export default Typography;