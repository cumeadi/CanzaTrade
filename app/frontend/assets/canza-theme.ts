// CanzaTrade Design System - TypeScript Theme Configuration
// Provides type-safe access to design system variables

export interface CanzaTheme {
  colors: {
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    accent: {
      primary: string;
    };
    system: {
      success: string;
      error: string;
      warning: string;
    };
    border: {
      primary: string;
      secondary: string;
    };
    overlay: {
      primary: string;
    };
    shadow: {
      primary: string;
    };
    hover: {
      primary: string;
      secondary: string;
    };
    focus: {
      ring: string;
    };
  };
  typography: {
    fonts: {
      primary: string;
      secondary: string;
    };
    sizes: {
      h1: string;
      h2: string;
      h3: string;
      body: string;
      caption: string;
      button: string;
    };
    weights: {
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    lineHeights: {
      tight: number;
      normal: number;
      relaxed: number;
    };
    letterSpacing: {
      tight: string;
      normal: string;
      wide: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Theme Configuration Object
export const canzaTheme: CanzaTheme = {
  colors: {
    background: {
      primary: '#0A192F',    // Deep Navy Blue
      secondary: '#172A45',   // Lighter Navy
    },
    text: {
      primary: '#FFFFFF',     // White
      secondary: '#8892B0',   // Light Slate
    },
    accent: {
      primary: '#64FFDA',     // Vibrant Teal
    },
    system: {
      success: '#00BFA5',     // Green
      error: '#FF5252',       // Red
      warning: '#FFC107',     // Yellow
    },
    border: {
      primary: '#233554',     // Border color
      secondary: '#1E3A5F',   // Lighter border
    },
    overlay: {
      primary: 'rgba(10, 25, 47, 0.8)',
    },
    shadow: {
      primary: 'rgba(10, 25, 47, 0.3)',
    },
    hover: {
      primary: 'rgba(100, 255, 218, 0.1)',
      secondary: 'rgba(136, 146, 176, 0.1)',
    },
    focus: {
      ring: 'rgba(100, 255, 218, 0.4)',
    },
  },
  typography: {
    fonts: {
      primary: 'Inter, sans-serif',
      secondary: 'Roboto, sans-serif',
    },
    sizes: {
      h1: '32px',
      h2: '24px',
      h3: '20px',
      body: '16px',
      caption: '14px',
      button: '16px',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadows: {
    sm: '0 1px 3px rgba(10, 25, 47, 0.12)',
    md: '0 4px 6px rgba(10, 25, 47, 0.15)',
    lg: '0 10px 15px rgba(10, 25, 47, 0.2)',
    xl: '0 20px 40px rgba(10, 25, 47, 0.3)',
  },
  transitions: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

// Utility Functions for Theme Access
export const getThemeColor = (path: string): string => {
  const keys = path.split('.');
  let value: any = canzaTheme;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Theme color not found: ${path}`);
      return '#000000'; // Fallback
    }
  }
  
  return value;
};

export const getThemeSpacing = (size: keyof CanzaTheme['spacing']): string => {
  return canzaTheme.spacing[size];
};

export const getThemeTypography = (element: keyof CanzaTheme['typography']['sizes']): string => {
  return canzaTheme.typography.sizes[element];
};

// CSS Custom Properties Generator
export const generateCSSVariables = (): string => {
  const variables: string[] = [];
  
  // Generate color variables
  Object.entries(canzaTheme.colors).forEach(([category, colors]) => {
    if (typeof colors === 'object') {
      Object.entries(colors).forEach(([name, value]) => {
        variables.push(`--canza-${category}-${name}: ${value};`);
      });
    } else {
      variables.push(`--canza-${category}: ${colors};`);
    }
  });
  
  // Generate typography variables
  Object.entries(canzaTheme.typography.fonts).forEach(([name, value]) => {
    variables.push(`--canza-font-${name}: ${value};`);
  });
  
  Object.entries(canzaTheme.typography.sizes).forEach(([name, value]) => {
    variables.push(`--canza-font-size-${name}: ${value};`);
  });
  
  Object.entries(canzaTheme.typography.weights).forEach(([name, value]) => {
    variables.push(`--canza-font-weight-${name}: ${value};`);
  });
  
  // Generate spacing variables
  Object.entries(canzaTheme.spacing).forEach(([name, value]) => {
    variables.push(`--canza-spacing-${name}: ${value};`);
  });
  
  // Generate border radius variables
  Object.entries(canzaTheme.borderRadius).forEach(([name, value]) => {
    variables.push(`--canza-radius-${name}: ${value};`);
  });
  
  // Generate shadow variables
  Object.entries(canzaTheme.shadows).forEach(([name, value]) => {
    variables.push(`--canza-shadow-${name}: ${value};`);
  });
  
  // Generate transition variables
  Object.entries(canzaTheme.transitions).forEach(([name, value]) => {
    variables.push(`--canza-transition-${name}: ${value};`);
  });
  
  // Generate breakpoint variables
  Object.entries(canzaTheme.breakpoints).forEach(([name, value]) => {
    variables.push(`--canza-breakpoint-${name}: ${value};`);
  });
  
  return `:root {\n  ${variables.join('\n  ')}\n}`;
};

// Theme Hook for React Components (if using React)
export const useCanzaTheme = () => {
  return {
    theme: canzaTheme,
    getColor: getThemeColor,
    getSpacing: getThemeSpacing,
    getTypography: getThemeTypography,
    generateCSSVariables,
  };
};

// Export default theme
export default canzaTheme;
