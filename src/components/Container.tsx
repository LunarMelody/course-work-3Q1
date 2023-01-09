import type { VariantProps } from "class-variance-authority";
import type { FunctionComponent, HTMLAttributes } from "react";

import { cva } from "class-variance-authority";
import { useId } from "react";

type ContainerVariants = VariantProps<typeof containerVariants>;

const containerVariants = cva("mx-auto", {
  variants: {
    maxWidth: {
      adaptive: "container",
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
    },
    width: {
      full: "w-full",
      fit: "w-fit",
      min: "w-min",
      max: "w-max",
    },
    minHeight: {
      full: "h-full",
      fit: "h-fit",
      min: "h-min",
      max: "h-max",
    },
  },
  defaultVariants: {
    maxWidth: "lg",
    width: "full",
  },
});

type ContainerProps = HTMLAttributes<HTMLDivElement> &
  ContainerVariants & {
    containerId?: string;
  };
type Component = FunctionComponent<ContainerProps>;

export const Container: Component = ({
  className,
  maxWidth,
  minHeight,
  width,
  children,
  containerId,
  ...props
}) => {
  const randomId = useId();
  const usedId = containerId ?? randomId;

  return (
    <div
      data-is-container={true}
      data-container-id={usedId}
      className={containerVariants({ className, maxWidth, minHeight, width })}
      {...props}
    >
      {children}
    </div>
  );
};
