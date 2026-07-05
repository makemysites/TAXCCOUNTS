"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
  heightClassName?: string;
}

export default function Logo({ className, light = false, heightClassName = "h-8 sm:h-9" }: LogoProps) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      <img
        src="/images/logo-new.png"
        alt="TAXCCOUNTS Logo"
        className={cn("w-auto object-contain", heightClassName)}
      />
    </div>
  );
}
