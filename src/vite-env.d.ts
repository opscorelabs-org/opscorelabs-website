/// <reference types="vite/client" />

// Declare iconify-icon custom element for TypeScript
import type * as React from 'react';

type IconifyIconElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement> & {
    icon?: string;
    style?: React.CSSProperties;
  },
  HTMLElement
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': IconifyIconElementProps;
    }
  }
}

// Some TS/React setups read intrinsic elements from the React module typings.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': IconifyIconElementProps;
    }
  }
}
