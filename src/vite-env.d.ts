/// <reference types="vite/client" />

// Declare iconify-icon custom element for TypeScript
declare namespace JSX {
  interface IntrinsicElements {
    'iconify-icon': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        icon?: string;
        style?: React.CSSProperties;
      },
      HTMLElement
    >;
  }
}
