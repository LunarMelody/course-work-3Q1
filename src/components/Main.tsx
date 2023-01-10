import type { VariantProps } from "class-variance-authority";
import type { FC, HTMLAttributes } from "react";

import { cva } from "class-variance-authority";

type MainVariantProps = VariantProps<typeof mainVariants>;

const mainVariants = cva("p-4", {
  variants: {
    display: {
      flex: "flex",
      grid: "grid",
      block: "block",
    },
    flexDir: {
      col: "flex-col",
      row: "flex-row",
    },
    color: {
      lighter: "bg-base-100",
      default: "bg-base-200",
      darker: "bg-base-300",
    },
    width: {
      full: "w-full",
    },
    height: {
      fit: "h-fit",
      full: "h-[var(--view-height-no-header)]",
      auto: "h-auto",
    },
    minHeight: {
      fit: "min-h-fit",
      full: "min-h-[var(--view-height-no-header)]",
    },
  },
  defaultVariants: {
    color: "default",
    width: "full",
    height: "full",
    display: "block",
  },
});

type MainProps = HTMLAttributes<HTMLElement> & MainVariantProps;

export const Main: FC<MainProps> = ({
  color,
  width,
  height,
  minHeight,
  className,
  children,
  display,
  flexDir,
  ...props
}) => {
  const mainCls = mainVariants({
    className,
    color,
    height,
    minHeight,
    width,
    display,
    flexDir,
  });

  return (
    <main {...props} className={mainCls}>
      {children}
    </main>
  );
};

export default Main;
