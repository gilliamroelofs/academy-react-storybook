/// <reference types="vite/client" />

declare module '*.scss' {
    const styles: { [className: string]: string }
    export default styles
  }
  