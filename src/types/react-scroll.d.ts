declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    spy?: boolean;
    activeClass?: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
  }

  export const Link: React.FC<LinkProps>;

  export const Element: React.FC<any>;

  export const animateScroll: any;

  export const scrollSpy: any;

  export const scroller: any;

  export const Events: any;
}