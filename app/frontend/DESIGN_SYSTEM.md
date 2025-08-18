# CanzaTrade Design System Documentation

## Overview

The CanzaTrade Design System is a comprehensive, cohesive design framework that transforms the CanzaTrade frontend into a professional, branded trading platform. This system provides consistent colors, typography, components, and utilities that ensure visual harmony across the entire application.

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [File Structure](#file-structure)
3. [Color System](#color-system)
4. [Typography System](#typography-system)
5. [Component Library](#component-library)
6. [Utility Classes](#utility-classes)
7. [Responsive Design](#responsive-design)
8. [Usage Examples](#usage-examples)
9. [Best Practices](#best-practices)
10. [Migration Guide](#migration-guide)

## Design Philosophy

### Core Principles
- **Professional Excellence**: Clean, modern interface reflecting Canza Finance's brand identity
- **African Market Focus**: Prioritized display of African currency pairs and regional trading patterns
- **Accessibility First**: High contrast colors, clear typography, and keyboard navigation support
- **Responsive Design**: Mobile-first approach that works seamlessly across all device sizes
- **Performance Optimized**: Efficient CSS with minimal redundancy and smooth animations

### Brand Alignment
- **Colors**: Deep navy blues with vibrant teal accents
- **Typography**: Inter for headings, Roboto for body text
- **Layout**: Clean grid system with intuitive information hierarchy
- **Interactions**: Smooth transitions and hover effects

## File Structure

```
app/frontend/assets/
├── canza-theme.css          # Core design system variables and base styles
├── canza-components.css     # Component library and utilities
├── canza-theme.ts          # TypeScript theme configuration
├── canza-favicon.svg       # Canza-branded favicon
└── canza-dashboard-new.html # Example implementation

app/frontend/
├── index.html              # Main application file
└── DESIGN_SYSTEM.md        # This documentation
```

## Color System

### Primary Colors
```css
:root {
  --background-primary: #0A192F;    /* Deep Navy Blue */
  --background-secondary: #172A45;   /* Lighter Navy */
  --text-primary: #FFFFFF;          /* White */
  --text-secondary: #8892B0;        /* Light Slate */
  --accent-primary: #64FFDA;        /* Vibrant Teal */
}
```

### System Colors
```css
:root {
  --system-success: #00BFA5;        /* Green for profits */
  --system-error: #FF5252;          /* Red for losses */
  --system-warning: #FFC107;        /* Yellow for warnings */
}
```

### Semantic Colors
```css
:root {
  --border-primary: #233554;        /* Card borders */
  --border-secondary: #1E3A5F;      /* Hover borders */
  --hover-primary: rgba(100, 255, 218, 0.1);   /* Primary hover */
  --hover-secondary: rgba(136, 146, 176, 0.1);  /* Secondary hover */
  --focus-ring: rgba(100, 255, 218, 0.4);       /* Focus indicators */
}
```

## Typography System

### Font Families
```css
:root {
  --font-primary: 'Inter, sans-serif';      /* Headings */
  --font-secondary: 'Roboto, sans-serif';   /* Body text */
}
```

### Typographic Scale
```css
:root {
  --font-size-h1: 32px;      /* Main headings */
  --font-size-h2: 24px;      /* Section headings */
  --font-size-h3: 20px;      /* Subsection headings */
  --font-size-body: 16px;    /* Body text */
  --font-size-caption: 14px; /* Captions and labels */
  --font-size-button: 16px;  /* Button text */
}
```

### Font Weights
```css
:root {
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

## Component Library

### Button System

#### Primary Button
```html
<button class="btn btn-primary">Buy NGN</button>
```
- **Use Case**: Primary actions like Buy, Sell, Confirm
- **Style**: Teal background with dark text
- **States**: Hover, focus, active, loading, disabled

#### Secondary Button
```html
<button class="btn btn-secondary">Cancel</button>
```
- **Use Case**: Secondary actions like Cancel, Close
- **Style**: Transparent with teal border and text
- **States**: Hover, focus, active, disabled

#### Tertiary Button
```html
<button class="btn btn-tertiary">View Details</button>
```
- **Use Case**: Minor actions, navigation
- **Style**: Transparent with secondary text
- **States**: Hover, focus, active

#### Button Sizes
```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Card System
```html
<div class="card">
  <h4>Card Title</h4>
  <p>Card content goes here</p>
</div>
```

**Features:**
- Consistent padding and border radius
- Hover effects with subtle shadows
- Responsive design
- Border color customization

### Form Elements
```html
<div class="form-group">
  <label class="form-label">Amount (USDT)</label>
  <input type="number" class="form-input" placeholder="0.00">
</div>
```

**Features:**
- Consistent styling across all form elements
- Focus states with teal accent
- Proper spacing and typography
- Placeholder text styling

### Trading-Specific Components

#### Portfolio Card
```html
<div class="portfolio-card">
  <h3>Portfolio Value</h3>
  <div class="portfolio-value">$2,847,392.50</div>
  <div class="portfolio-change profit">+$45,230.75 (+1.62%)</div>
</div>
```

#### Watchlist
```html
<div class="watchlist">
  <div class="watchlist-header">
    <h3>Watchlist</h3>
    <button class="btn btn-tertiary">+ Add</button>
  </div>
  <div class="watchlist-item">
    <div>
      <div class="watchlist-pair">NGN/USDT</div>
      <div class="watchlist-name">Nigerian Naira</div>
    </div>
    <div>
      <div class="watchlist-price profit">₦1,245.67</div>
      <div class="watchlist-change profit">+2.34%</div>
    </div>
  </div>
</div>
```

#### Chart Container
```html
<div class="chart-container">
  <div class="chart-header">
    <h3>NGN/USDT Chart</h3>
    <div class="chart-timeframes">
      <button class="timeframe-btn">1H</button>
      <button class="timeframe-btn active">1D</button>
      <button class="timeframe-btn">1W</button>
    </div>
  </div>
  <div class="chart-placeholder">
    <!-- Chart content -->
  </div>
</div>
```

#### Bot Management
```html
<div class="bot-list">
  <div class="bot-item">
    <div class="bot-info">
      <div class="bot-name">NGN Grid Bot</div>
      <div class="bot-pair">NGN/USDT</div>
    </div>
    <span class="bot-status active">Active</span>
  </div>
</div>
```

**Status Types:**
- `.bot-status.active` - Green background
- `.bot-status.paused` - Yellow background
- `.bot-status.stopped` - Red background

## Utility Classes

### Layout Utilities
```css
.container          /* Centered container with max-width */
.container-fluid   /* Full-width container */
.grid              /* CSS Grid layout */
.grid-cols-1       /* 1 column grid */
.grid-cols-2       /* 2 column grid */
.grid-cols-3       /* 3 column grid */
```

### Flexbox Utilities
```css
.flex              /* Display flex */
.flex-col          /* Flex direction column */
.flex-row          /* Flex direction row */
.items-center      /* Align items center */
.justify-between   /* Justify content space-between */
.gap-md            /* Gap between flex items */
```

### Spacing Utilities
```css
.spacing-xs        /* 4px margin */
.spacing-sm        /* 8px margin */
.spacing-md        /* 16px margin */
.spacing-lg        /* 24px margin */
.spacing-xl        /* 32px margin */
```

### Text Utilities
```css
.text-center       /* Text align center */
.text-left         /* Text align left */
.text-right        /* Text align right */
.text-primary      /* Primary text color */
.text-secondary    /* Secondary text color */
.text-accent       /* Accent text color */
```

### Background Utilities
```css
.bg-primary        /* Primary background */
.bg-secondary      /* Secondary background */
```

## Responsive Design

### Breakpoints
```css
/* Small devices */
@media (max-width: 640px) { }

/* Medium devices */
@media (max-width: 768px) { }

/* Large devices */
@media (max-width: 1024px) { }

/* Extra large devices */
@media (max-width: 1280px) { }
```

### Responsive Grid
```css
/* Desktop: 3 columns */
.grid-cols-3

/* Tablet: 2 columns */
@media (max-width: 1024px) {
  .grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile: 1 column */
@media (max-width: 768px) {
  .grid-cols-3 { grid-template-columns: 1fr; }
}
```

## Usage Examples

### Complete Dashboard Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="canza-theme.css">
    <link rel="stylesheet" href="canza-components.css">
</head>
<body>
    <div class="container">
        <div class="grid grid-cols-3 gap-lg">
            <!-- Left Column -->
            <div class="flex flex-col gap-lg">
                <div class="portfolio-card">
                    <!-- Portfolio content -->
                </div>
                <div class="watchlist">
                    <!-- Watchlist content -->
                </div>
            </div>
            
            <!-- Center Column -->
            <div class="flex flex-col gap-lg">
                <div class="chart-container">
                    <!-- Chart content -->
                </div>
                <div class="order-entry">
                    <!-- Order form -->
                </div>
            </div>
            
            <!-- Right Column -->
            <div class="flex flex-col gap-lg">
                <div class="bot-list">
                    <!-- Bot management -->
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### Form Implementation
```html
<div class="order-entry">
    <div class="order-form-grid">
        <div class="form-group">
            <label class="form-label">Order Type</label>
            <select class="form-input">
                <option>Market Buy</option>
                <option>Limit Buy</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Amount</label>
            <input type="number" class="form-input" placeholder="0.00">
        </div>
    </div>
    <div class="order-actions">
        <button class="btn btn-primary">Buy</button>
        <button class="btn btn-secondary">Cancel</button>
    </div>
</div>
```

## Best Practices

### 1. Consistent Spacing
- Use the spacing utility classes (`gap-lg`, `spacing-md`, etc.)
- Maintain consistent margins and padding throughout components
- Follow the 8px grid system

### 2. Color Usage
- Always use CSS custom properties for colors
- Use semantic color classes (`.profit`, `.loss`, `.warning`)
- Ensure sufficient contrast for accessibility

### 3. Typography
- Use appropriate heading levels (h1, h2, h3, etc.)
- Apply consistent font weights and sizes
- Use caption class for secondary information

### 4. Component Structure
- Follow the established component patterns
- Use semantic HTML elements
- Maintain consistent class naming conventions

### 5. Responsive Design
- Design mobile-first
- Test on various screen sizes
- Use responsive utility classes

## Migration Guide

### From Old System to New Design System

#### 1. Update CSS Imports
```html
<!-- Old -->
<link rel="stylesheet" href="canza-trade.css">

<!-- New -->
<link rel="stylesheet" href="canza-theme.css">
<link rel="stylesheet" href="canza-components.css">
```

#### 2. Update Button Classes
```html
<!-- Old -->
<button class="btn btn-primary">Action</button>

<!-- New (same classes, updated styling) -->
<button class="btn btn-primary">Action</button>
```

#### 3. Update Layout Classes
```html
<!-- Old -->
<div class="dashboard-grid">

<!-- New -->
<div class="grid grid-cols-3 gap-lg">
```

#### 4. Update Component Classes
```html
<!-- Old -->
<div class="portfolio-overview">

<!-- New -->
<div class="portfolio-card">
```

### CSS Custom Properties Migration
```css
/* Old */
--canza-primary-bg: #0a0e1a;

/* New */
--background-primary: #0A192F;
```

## Browser Support

- **Modern Browsers**: Full support for all features
- **CSS Grid**: Required for layout system
- **CSS Custom Properties**: Required for theming
- **Flexbox**: Required for component layouts

## Performance Considerations

- CSS is optimized for minimal redundancy
- Transitions use hardware acceleration where possible
- Responsive breakpoints are optimized for common device sizes
- Font loading is optimized with proper font-display properties

## Accessibility Features

- High contrast color combinations
- Proper focus indicators
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly markup
- Reduced motion support

## Future Enhancements

### Planned Features
1. **Theme Switching**: Light/dark mode toggle
2. **Custom Color Schemes**: User-configurable themes
3. **Advanced Animations**: Micro-interactions and transitions
4. **Component Variants**: Additional button and card styles
5. **Icon System**: Consistent icon library integration

### Customization Options
1. **CSS Custom Properties**: Easy theme modification
2. **Component Classes**: Flexible styling options
3. **Utility Classes**: Rapid prototyping and development
4. **Responsive Utilities**: Adaptive layout system

## Support and Maintenance

### CSS Architecture
- Modular component-based structure
- Consistent naming conventions
- Easy to maintain and extend
- Clear separation of concerns

### Updates and Changes
- All changes documented in this file
- Version control for design system files
- Backward compatibility maintained where possible
- Regular review and optimization

---

## Conclusion

The CanzaTrade Design System provides a comprehensive, professional foundation for building a cohesive trading platform. By following the established patterns and using the provided components and utilities, developers can create consistent, accessible, and visually appealing interfaces that align with Canza Finance's brand identity.

For questions or support, refer to the component examples and utility class documentation above. The system is designed to be intuitive and easy to use while maintaining high standards for accessibility and performance.
