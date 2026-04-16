"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: (e: any) => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(99,102,241,0.3)] dark:shadow-[0_0_20px_rgba(129,140,248,0.2)]",
    secondary: "bg-background text-foreground border border-border hover:bg-muted shadow-sm",
    outline: "border-2 border-primary/50 text-primary hover:bg-primary/5",
    ghost: "text-foreground hover:bg-muted",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-medium",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.button>
  );
};
