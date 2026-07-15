"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Renders the logo as a white silhouette for dark backgrounds */
  light?: boolean;
  size?: "sm" | "md" | "lg";
  heightClassName?: string;
}

const SIZE_HEIGHTS: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-8",
  md: "h-8 sm:h-9",
  lg: "h-10 sm:h-12",
};

export default function Logo({
  className,
  light = false,
  size = "md",
  heightClassName,
}: LogoProps) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      <img
        src="/images/logo-new.png"
        alt="TAXCCOUNTS Logo"
        className={cn(
          "w-auto object-contain transition-[filter] duration-300",
          light && "brightness-0 invert",
          heightClassName ?? SIZE_HEIGHTS[size]
        )}
      />
    </div>
  );
}
