"use client";
import React from "react";
import { InfiniteSlider } from "./infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
    return (
        <div
            {...props}
            className={cn(
                "overflow-hidden py-4 w-full relative z-10",
                className
            )}
        >
            {/* Increased height and removed mask for debugging visibility */}
            <InfiniteSlider gap={42} reverse speed={25} className="h-24 py-2">
                {logos.map((logo, idx) => (
                    <img
                        // Provide key with index to ensure uniqueness if logos are duplicated
                        key={`logo-${logo.alt}-${idx}`}
                        alt={logo.alt}
                        className="h-16 w-auto select-none grayscale hover:grayscale-0 transition-all duration-300 object-contain mx-4 cursor-pointer"
                        src={logo.src}
                        loading="eager" // Load eager to ensure visibility immediately
                    />
                ))}
            </InfiniteSlider>
        </div>
    );
}
