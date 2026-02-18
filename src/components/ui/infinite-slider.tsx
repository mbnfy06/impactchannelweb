"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    direction?: "horizontal" | "vertical";
    reverse?: boolean;
    className?: string;
    speed?: number;
    speedOnHover?: number;
};

export function InfiniteSlider({
    children,
    gap = 16,
    reverse = false,
    className,
    speed = 50, // pixels per second
}: InfiniteSliderProps) {
    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    const duration = width > 0 ? (width / 2 + gap) / speed : 10;

    useEffect(() => {
        let controls;

        const start = reverse ? -width / 2 - gap : 0;
        const end = reverse ? 0 : -width / 2 - gap;

        controls = animate(xTranslation, [start, end], {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width, gap, reverse, duration]);

    return (
        <div className={cn("overflow-hidden flex", className)}>
            <motion.div
                className="flex"
                style={{ x: xTranslation, gap: `${gap}px` }}
                ref={ref}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
