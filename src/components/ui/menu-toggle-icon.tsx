'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function MenuToggleIcon({
    open,
    onClick,
    className,
    duration = 300,
}: {
    open: boolean;
    onClick?: () => void;
    className?: string;
    duration?: number;
}) {
    return (
        <div
            onClick={onClick}
            className={cn('relative flex items-center justify-center cursor-pointer', className)}
        >
            <motion.span
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: duration / 1000 }}
                className="absolute w-5 h-0.5 bg-foreground rounded-full"
            />
            <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: duration / 1000 }}
                className="absolute w-5 h-0.5 bg-foreground rounded-full"
            />
            <motion.span
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: duration / 1000 }}
                className="absolute w-5 h-0.5 bg-foreground rounded-full"
            />
        </div>
    );
}
