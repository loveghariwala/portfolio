import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  gradient?: boolean;
}

export const Heading = ({
  children,
  className,
  as: Component = "h2",
  size = "md",
  gradient = false,
}: HeadingProps) => {
  const sizes = {
    xs: "text-lg",
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-4xl",
    lg: "text-4xl md:text-6xl",
    xl: "text-5xl md:text-7xl",
    "2xl": "text-6xl md:text-9xl tracking-tighter",
  };

  return (
    <Component
      className={cn(
        "font-heading font-bold",
        sizes[size],
        gradient && "gradient-text",
        className
      )}
    >
      {children}
    </Component>
  );
};
