import React, { forwardRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { cn } from "../../lib/utils";

const Text = forwardRef(function Text(props, ref) {
    const { lang } = useLanguage();
    const isArabic = lang === "ar";
    const { children, className, as, onClick } = props;

    if (as === "h1") {
        return (
            <h1
                ref={ref}
                className={cn(
                    "text-[30px] ",
                    isArabic ? "font-arabic md:text-[85px] text-[55px] leading-[100%]" : "md:text-[65px] font-logirent leading-[100%]",
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
                "text-[18px] leading-[30px]  ",
                isArabic ? "font-zarid md:text-[28px] font-normal md:leading-[38px]" : "md:text-[24px] font-normal md:leading-[38px] font-ubuntu",
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



