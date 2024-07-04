declare module '@splidejs/react-splide' {
    import * as React from 'react';
  
    interface SplideProps {
      options?: Record<string, any>;
      className?: string;
      tag?: string;
      hasTrack?: boolean;
      extensions?: Record<string, any>;
      transition?: string;
      children?: React.ReactNode;
    }
  
    interface SplideSlideProps {
      className?: string;
      tag?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export class Splide extends React.Component<SplideProps> {}
    export class SplideSlide extends React.Component<SplideSlideProps> {}
  }
  