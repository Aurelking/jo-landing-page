"use client";
import { motion } from "framer-motion";
import React from "react";

// --- SVG Icon Components ---

export const GraduationCapIcon = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
        <path d="M32 8L4 24L32 40L60 24L32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
        <path d="M16 32V46C16 46 24 54 32 54C40 54 48 46 48 46V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M56 24V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="56" cy="46" r="2.5" fill="currentColor" />
    </svg>
);

export const CompassIcon = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
        <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.05" />
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <polygon points="32,14 36,30 32,34 28,30" fill="currentColor" fillOpacity="0.7" />
        <polygon points="32,50 28,34 32,30 36,34" fill="currentColor" fillOpacity="0.3" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
        {/* Cardinal points */}
        <text x="32" y="11" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold" opacity="0.6">N</text>
        <text x="32" y="57" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold" opacity="0.4">S</text>
        <text x="7" y="34" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold" opacity="0.4">O</text>
        <text x="57" y="34" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold" opacity="0.4">E</text>
    </svg>
);

export const OpenBookIcon = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
        <path d="M32 16C32 16 26 10 14 10C8 10 4 12 4 12V52C4 52 8 50 14 50C26 50 32 56 32 56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.05" />
        <path d="M32 16C32 16 38 10 50 10C56 10 60 12 60 12V52C60 52 56 50 50 50C38 50 32 56 32 56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.05" />
        <path d="M32 16V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        {/* Page lines */}
        <line x1="12" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <line x1="12" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <line x1="12" y1="34" x2="24" y2="34" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <line x1="40" y1="22" x2="52" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <line x1="40" y1="28" x2="50" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <line x1="40" y1="34" x2="52" y2="34" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
    </svg>
);

export const PathwayIcon = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
        {/* Winding path */}
        <path d="M12 56C12 56 20 44 32 38C44 32 48 20 48 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" opacity="0.5" />
        <path d="M8 56C8 56 18 42 30 36C42 30 44 18 44 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" opacity="0.3" />
        {/* Start point */}
        <circle cx="10" cy="56" r="4" fill="currentColor" fillOpacity="0.6" />
        {/* End point (star) */}
        <path d="M46 8L48 4L50 8L54 8L51 11L52 15L48 13L44 15L45 11L42 8Z" fill="currentColor" fillOpacity="0.7" />
    </svg>
);

export const LightbulbIdeaIcon = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
        <path d="M24 44V48C24 52 28 54 32 54C36 54 40 52 40 48V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 10C22 10 16 18 16 26C16 32 20 36 24 40C26 42 24 44 24 44H40C40 44 38 42 40 40C44 36 48 32 48 26C48 18 42 10 32 10Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
        <line x1="26" y1="48" x2="38" y2="48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <line x1="27" y1="51" x2="37" y2="51" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        {/* Light rays */}
        <line x1="32" y1="2" x2="32" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="52" y1="10" x2="49" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="12" y1="10" x2="15" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="8" y1="26" x2="12" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <line x1="56" y1="26" x2="52" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
);

export const RocketIcon = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
        <path d="M36 28C36 28 44 20 44 12C44 8 40 4 36 4C32 4 24 12 20 20L28 28L36 28Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
        <circle cx="36" cy="16" r="3" fill="currentColor" fillOpacity="0.5" />
        <path d="M20 20L12 24L20 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 28L32 36L36 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Flame */}
        <path d="M16 40C16 40 12 48 14 52C16 56 20 56 22 52C24 48 20 40 20 40" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" strokeLinecap="round" />
        <path d="M10 44C10 44 8 50 10 52C12 54 14 52 14 50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    </svg>
);

export const TargetGoalIcon = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
        <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.03" />
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="currentColor" fillOpacity="0.05" />
        <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2" opacity="0.7" fill="currentColor" fillOpacity="0.08" />
        <circle cx="32" cy="32" r="3.5" fill="currentColor" fillOpacity="0.8" />
        {/* Arrow hitting target */}
        <path d="M50 14L36 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M44 14H50V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// --- Floating Decoration Component ---

interface FloatingIconProps {
    icon: React.ReactNode;
    className?: string;
    duration?: number;
    delay?: number;
    yRange?: number;
    rotateRange?: number;
}

export const FloatingIcon = ({
    icon,
    className = "",
    duration = 6,
    delay = 0,
    yRange = 15,
    rotateRange = 8,
}: FloatingIconProps) => (
    <motion.div
        className={`absolute -z-10 pointer-events-none select-none ${className}`}
        animate={{
            y: [0, -yRange, 0],
            rotate: [-rotateRange / 2, rotateRange / 2, -rotateRange / 2],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    >
        {icon}
    </motion.div>
);
