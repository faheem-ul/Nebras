import React, { forwardRef } from "react";

import { cn } from "../../lib/utils";

const Text = forwardRef(function Text(props, ref) {
    const { children, className, as, onClick } = props;

    if (as === "h1") {
        return (
            <h1
                ref={ref}
                className={cn(
                    "font-logirent text-[32px] leading-[40px] md:text-[65px] md:leading-[100%]",
                    className
                )}
                onClick={onClick}
            >
                {children}
            </h1>
        );
    }

    if (as === "h2") {
        return (
            <h2
                ref={ref}
                className={cn(
                    "",
                    className
                )}
                onClick={onClick}
            >
                {children}
            </h2>
        );
    }

    return (
        <p
            ref={ref}
            className={cn(
                "font-kosans text-[18px] leading-[24px] md:text-[24px] font-normal md:leading-[38px]",
                className
            )}
            onClick={onClick}
        >
            {children}
        </p>
    );
});

Text.displayName = "Text";

export default Text;
