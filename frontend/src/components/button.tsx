import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  asChild,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-ink text-white hover:-translate-y-0.5 hover:bg-black",
        variant === "secondary" &&
          "border border-line bg-white/70 text-ink backdrop-blur hover:-translate-y-0.5 hover:border-gold/40",
        variant === "ghost" && "text-ink hover:bg-black/5",
        className,
      )}
      {...props}
    />
  );
}
