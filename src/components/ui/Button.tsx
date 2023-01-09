import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ElementType } from "react";
import type { PolymorphicPropsWithRef } from "~/types/react";

import { cva } from "class-variance-authority";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

const buttonVariants = cva("daisy-btn", {
  variants: {
    variant: {
      solid: "",
      outline: "daisy-btn-outline",
    },
    color: {
      default: null,
      primary: "daisy-btn-primary",
      secondary: "daisy-btn-secondary",
      accent: "daisy-btn-accent",
      ghost: "daisy-btn-ghost",
      link: "daisy-btn-link",
    },
    stateColor: {
      info: "daisy-btn-info",
      success: "daisy-btn-success",
      warning: "daisy-btn-warning",
      error: "daisy-btn-error",
    },
    size: {
      lg: "daisy-btn-lg",
      normal: null,
      sm: "daisy-btn-sm",
      xs: "daisy-btn-xs",
    },
    width: {
      normal: null,
      block: "daisy-btn-block",
      wide: "daisy-btn-wide",
    },
  },
  defaultVariants: {
    color: "default",
    size: "normal",
    variant: "solid",
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps;

export const Button = <C extends ElementType = "button">({
  variant,
  color,
  stateColor,
  size,
  width,
  className,
  children,
  as,
  ref,
  ...props
}: PolymorphicPropsWithRef<ButtonProps, C>) => {
  const Component = as ?? "button";

  const cls = buttonVariants({ variant, color, stateColor, size, width, className });

  return (
    <Component ref={ref} className={cls} {...props}>
      {children}
    </Component>
  );
};
