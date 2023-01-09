import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";

export interface AsProp<C extends ElementType> {
  as?: C;
}

export type PolymorphicPropsWithoutRef<
  P = Record<string, unknown>,
  C extends ElementType = "div",
> = PropsWithChildren<P> & AsProp<C> & ComponentPropsWithoutRef<C>;

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export type RefProp<C extends ElementType> = {
  ref?: PolymorphicRef<C>;
};

export type PolymorphicPropsWithRef<
  P = Record<string, unknown>,
  C extends ElementType = "div",
> = PropsWithChildren<P> & AsProp<C> & ComponentPropsWithoutRef<C> & RefProp<C>;
