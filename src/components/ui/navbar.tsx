"use client";
import React, { useState, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
        onClick?: () => void;
    }[];
    className?: string;
    onItemClick?: () => void;
    visible?: boolean; // Received from NavBody
}

// ... MobileNavProps ...

export const NavItems = ({ items, className, onItemClick, visible }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "flex flex-row items-center justify-center space-x-1",
                className,
            )}
        >
            {items.map((item, idx) => (
                <button
                    onMouseEnter={() => setHovered(idx)}
                    onClick={() => {
                        if (item.onClick) item.onClick();
                        if (onItemClick) onItemClick();
                    }}
                    className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer",
                        visible ? "text-black hover:text-black" : "text-gray-300 hover:text-white"
                    )}
                    key={`link-${idx}`}
                >
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className={cn(
                                "absolute inset-0 h-full w-full rounded-full",
                                visible ? "bg-neutral-200" : "bg-white/10"
                            )}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
                        />
                    )}
                    <span className="relative z-20">{item.name}</span>
                </button>
            ))}
        </div>
    );
};

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-0 z-50 w-full pt-4 transition-all duration-700 ease-in-out", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    )
                    : child,
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                width: visible ? "85%" : "100%", // Longer compact state
                y: visible ? 20 : 0,
                backgroundColor: visible ? "rgba(255, 255, 255, 1)" : "transparent",
                backdropFilter: visible ? "blur(10px)" : "none",
                borderRadius: visible ? "2rem" : "0px", // 2rem is plenty rounded but not pill-shaped if it's wide
                padding: visible ? "0.75rem 2rem" : "0.5rem 1rem",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
            }}
            initial={{ width: "100%", y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 0.8, // Fluid transition
            }}
            style={{
                minWidth: visible ? "900px" : "100%",
                // @ts-ignore
                "--nav-text": visible ? "black" : "#e5e7eb", // Passing css var for text color (whiteish initially for dark bg compatibility if needed, or keeping zinc-700)
                // Wait, the user said "texto negro". If it was white before? Hmmm.
                // Let's assume on scroll (visible) it MUST be black.
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start lg:flex", // removed default text color classes to rely on children or variables if we go that route
                visible ? "max-w-7xl" : "max-w-full container",
                className,
            )}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child as React.ReactElement<any>, { visible })
                    : child
            )}
        </motion.div>
    );
};



export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                backgroundColor: visible ? "rgba(255, 255, 255, 0.9)" : "transparent",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "1rem",
                paddingLeft: visible ? "12px" : "1rem",
                borderRadius: visible ? "1rem" : "0px",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between py-2 lg:hidden transition-all duration-300",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-xl dark:bg-neutral-950 overflow-hidden",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <div onClick={onClick} className="cursor-pointer p-2 z-50">
            {isOpen ? (
                <IconX className="text-black dark:text-white" size={24} />
            ) : (
                <IconMenu2 className="text-black dark:text-white" size={24} />
            )}
        </div>
    );
};
