"use client";
import { cn } from "../../lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import { useEffect, useState } from "react";
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
    speedOnHover,
}: InfiniteSliderProps) {
    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    // const [mustFinish, setMustFinish] = useState(false);
    // const [rerender, setRerender] = useState(false);

    // Simplified: Removed unused first useEffect logic for 'mustFinish' state
    // to prevent conflicts and build errors. focusing on the main continuous loop below.

    // Calculate duration based on speed and width
    // speed = distance / time => time = distance / speed
    // Distance is width / 2 because we duplicate content
    // Simplified: Removed unused duration variable that was causing build errors
    // const duration = width > 0 ? (width / 2 + gap) / speed : 10;

    // Hover handling if speedOnHover is provided
    const [isHovered, setIsHovered] = useState(false);
    const currentSpeed = isHovered && speedOnHover ? speedOnHover : speed;
    const currentDuration = width > 0 ? (width / 2 + gap) / currentSpeed : 10;

    useEffect(() => {
        let controls;
        // finalPosition was unused here because we recalculate start/end below
        // let finalPosition = -width / 2 - gap;

        if (reverse) {
            // If reverse, we move from negative to 0
            // But standard infinite loop usually goes 0 -> -width
            // To reverse, we can just invert the range? 
            // Actually standard: 0 -> -50%
            // Reverse: -50% -> 0
            // finalPosition assignment removed as it was causing build error (unused)
            // Range inversion logic handled below
            // Simpler approach for reverse: just standard loop but standard direction logic handled by negative speed or different range?
            // Let's stick to standard 0 -> -width/2 for normal.

            // For reverse in this specific implementation pattern:
            // It's often easier to just change the flex direction or negative values. 
            // But let's try to animate 0 -> finalPosition (positive?)
            // Framer motion loop: 0 -> -100 is left. 0 -> 100 is right.
        }

        // Correction: The common pattern for infinite slider is:
        // Translate X from 0 to -50% (of total width which is 2x content).
        // If reverse, translate from -50% to 0.

        const start = reverse ? -width / 2 - gap : 0;
        const end = reverse ? 0 : -width / 2 - gap;

        controls = animate(xTranslation, [start, end], {
            ease: "linear",
            duration: currentDuration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width, gap, reverse, currentDuration]);

    return (
        <div className={cn("overflow-hidden flex", className)}>
            <motion.div
                className="flex"
                style={{ x: xTranslation, gap: `${gap}px` }}
                ref={ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
