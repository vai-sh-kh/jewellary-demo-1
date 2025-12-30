/**
 * Unified theme configuration for the jewelry site
 * Consolidated from all HTML pages
 */

export const theme = {
  colors: {
    primary: "#ec9c13",
    primaryHover: "#d68b0e",
    primaryDark: "#b08d1a",
    primaryLight: "#F4C430",
    
    backgroundLight: "#f8f7f6",
    backgroundDark: "#221b10",
    backgroundCard: "#1a1a1a",
    
    accentDark: "#2d2416",
    accentBrown: "#483a23",
    surfaceDark: "#26201a",
    borderDark: "#3d3224",
    
    textMuted: "#c9b592",
    textGold: "#c9b592",
    textSecondary: "#d4c5a9",
    textBody: "#a8a29e",
  },
  
  fonts: {
    sans: ["Manrope", "sans-serif"],
    serif: ["Playfair Display", "serif"],
    serifAlt: ["Cormorant Garamond", "serif"],
  },
  
  borderRadius: {
    DEFAULT: "0.25rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
  
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  
  // Mobile-first typography scale
  typography: {
    base: "16px", // Mobile base font size
    lineHeight: {
      tight: "1.2",
      normal: "1.5",
      relaxed: "1.6",
    },
    // Fluid typography using clamp()
    h1: "clamp(2rem, 5vw, 4rem)", // 32px → 64px
    h2: "clamp(1.5rem, 4vw, 3rem)", // 24px → 48px
    h3: "clamp(1.25rem, 3vw, 2rem)", // 20px → 32px
    h4: "clamp(1.125rem, 2.5vw, 1.5rem)", // 18px → 24px
  },
  
  // Mobile-first spacing scale (4-point grid)
  spacing: {
    mobile: {
      xs: "0.5rem", // 8px
      sm: "0.75rem", // 12px
      md: "1rem", // 16px
      lg: "1.5rem", // 24px
      xl: "2rem", // 32px
      "2xl": "3rem", // 48px
    },
    tablet: {
      xs: "0.75rem", // 12px
      sm: "1rem", // 16px
      md: "1.5rem", // 24px
      lg: "2rem", // 32px
      xl: "3rem", // 48px
      "2xl": "4rem", // 64px
    },
    desktop: {
      xs: "1rem", // 16px
      sm: "1.5rem", // 24px
      md: "2rem", // 32px
      lg: "3rem", // 48px
      xl: "4rem", // 64px
      "2xl": "6rem", // 96px
    },
  },
  
  // Touch target sizes (accessibility standards)
  touchTargets: {
    minimum: "44px", // Minimum touch target size
    recommended: "48px", // Recommended touch target size
  },
} as const;

