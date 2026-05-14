declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options?: any);
    destroy(): void;
    raf(time: number): void;
    on(event: string, callback: (data: any) => void): void;
    scrollTo(target: any, options?: any): void;
  }
}

declare module 'aos';
