"use client";

import { forwardRef, HTMLAttributes } from "react";
import { motion } from "motion/react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "base" | "accent" | "premium";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "base",
      hover = true,
      padding = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      base: "card-base",
      accent: "card-base card-accent",
      premium:
        "card-base card-accent bg-gradient-to-b from-[var(--color-card)] to-[var(--color-bg-elevated)]",
    };

    const paddingStyles = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    const hoverStyles = hover ? "" : "hover:border-[var(--color-border)] hover:shadow-none hover:transform-none";

    return (
      <motion.div
        ref={ref}
        className={`${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";