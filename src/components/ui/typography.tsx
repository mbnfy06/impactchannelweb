import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

export function H1({ children, className }: TypographyProps) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-sans text-foreground",
                className
            )}
        >
            {children}
        </h1>
    );
}

export function H2({ children, className }: TypographyProps) {
    return (
        <h2
            className={cn(
                "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-sans text-foreground",
                className
            )}
        >
            {children}
        </h2>
    );
}

export function H3({ children, className }: TypographyProps) {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight font-sans text-foreground",
                className
            )}
        >
            {children}
        </h3>
    );
}

export function P({ children, className }: TypographyProps) {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground", className)}>
            {children}
        </p>
    );
}

export function Mono({ children, className }: TypographyProps) {
    return (
        <span
            className={cn(
                "font-mono text-xs uppercase tracking-wider text-primary",
                className
            )}
        >
            {children}
        </span>
    );
}
