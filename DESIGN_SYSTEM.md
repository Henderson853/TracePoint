# TracePoint Tailwind CSS Design System

## Overview
A complete production-ready modern admin dashboard design system using Tailwind CSS with a green/navy color palette, clean typography, soft shadows, and responsive layout patterns suited for school logistics, inventory management, and investigation workflows.

---

## Color Palette

### Primary Colors
- **Primary Green**: `#16a34a` - Main brand color, used for primary actions and highlights
- **Primary Strong**: `#009b3a` - Darker green for hover states
- **Primary Light**: `#4ade80` - Lighter green for accessibility
- **Primary Soft**: `#eaf8ef` - Very light green background for soft UI elements

### Supporting Colors
- **Navy Dark**: `#0f1923` - Deep navy for brand/hero backgrounds
- **Navy Text**: `#17212b` - Navy for secondary text
- **Blue Primary**: `#2563eb` - Info/secondary action color
- **Blue Soft**: `#edf4ff` - Light blue backgrounds
- **Purple**: `#8154d8` - Accent/tertiary color

### Status & Semantic Colors
- **Success**: `#087a2f` text on `#eaf8ef` background
- **Warning**: `#d69b00` text on `#fff8df` background
- **Danger**: `#dc3545` text on `#fff5f5` background
- **Info**: `#2563eb` text on `#edf4ff` background

### Neutrals & Surfaces
- **Background**: `#f4f6f9` - App background (light gray)
- **Surface**: `#ffffff` - Card/panel backgrounds
- **Surface Alt**: `#f8fafb` - Alternate surface for inputs/hover
- **Border**: `#e3e7eb` - Border color
- **Text Primary**: `#111827` - Primary text color
- **Text Muted**: `#6b7280` - Secondary/muted text

---

## Typography

### Font Stack
```
font-sans: Inter, Segoe UI, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif
```

### Sizes & Weights
- **H1**: 3xl (2rem), bold (700), -0.02em letter-spacing
- **H2**: 2xl (1.5rem), bold (700), -0.02em letter-spacing
- **H3**: xl (1.25rem), bold (700), -0.02em letter-spacing
- **Body**: sm/base, regular (400)
- **Labels**: xs (0.75rem), medium (500), uppercase, 0.14em tracking
- **Tags**: 10px, bold (700), uppercase, 0.14em tracking

---

## Spacing & Sizing

### Border Radius
- **Dashboard**: 12px (default)
- **Panel**: 16px (larger surfaces)
- **XL**: 18px (hero sections)

### Shadows
- **Card**: `0 2px 6px rgba(0,0,0,0.025)` - Subtle shadows for cards
- **Panel**: `0 6px 18px rgba(0,0,0,0.06)` - Larger panel shadows
- **Soft**: `0 10px 24px rgba(15,25,35,0.05)` - Hover/elevated state
- **Focus**: `0 0 0 3px rgba(22, 163, 74, 0.15)` - Focus ring (green)

### Layout Spacing
- Content grid gap: 1.5rem (6 units)
- Card grid: 3-col on xl, 2-col on md, 1-col on mobile
- Padding: 1.5rem - 2rem (standard)
- Header height: auto (responsive)

---

## Component Patterns

### Buttons
#### Primary Button
```
.btn-primary
bg-primary text-white shadow-soft hover:bg-primary-strong
```

#### Secondary Button
```
.btn-secondary
border border-border bg-surface text-neutral-800 hover:bg-surface-alt
```

#### Danger Button
```
.btn-danger
bg-danger text-white hover:bg-red-600
```

#### Ghost Button
```
.btn-ghost
text-neutral-700 hover:bg-surface-alt
```

### Form Controls
- **Field wrapper**: `.form-field` - flex column, gap-2
- **Labels**: text-sm, font-medium, text-neutral-700
- **Input/Select/Textarea**:
  - rounded-dashboard, border-border
  - bg-surface-alt (input background)
  - px-3.5 py-2.5, text-sm
  - Focus: border-primary, ring-4 ring-primary/10

### Cards & Panels
- **Card**: rounded-dashboard, border-border, bg-surface, shadow-card
- **Panel**: rounded-panel, border-border, bg-surface, shadow-panel
- **Hover states**: subtle shadow lift, -translate-y-0.5

### Status Badges
```
.badge-success: bg-success-soft text-success
.badge-warning: bg-warning-soft text-warning
.badge-danger: bg-danger-soft text-danger
.badge-info: bg-info-soft text-info
```

### Alerts
```
.alert-success: border-primary/20 bg-primary-soft text-success
.alert-warning: border-warning/30 bg-warning-soft text-warning
.alert-danger: border-danger/20 bg-danger-soft text-danger
```

---

## Layout Patterns

### Dashboard Shell
```
.app-shell (min-h-screen bg-background)
  .container (mx-auto max-w-[1600px])
    .sidebar (hidden lg:flex, w-72, rounded-panel)
    .main (flex-1)
      .header (mb-6, flex gap-4, rounded-panel)
      .content (.page, space-y-6)
```

### Navigation
- **Sidebar**: 288px width, hidden on mobile
- **Links**: flex items-center gap-3, rounded-dashboard, py-2.5
- **Active state**: bg-primary-soft, text-primary, shadow-card
- **Hover**: bg-surface-alt, text-neutral-900

### Hero Section
- Max-width: 56rem (896px)
- Padding: p-6 sm:p-8
- Eyebrow: uppercase, 11px, 0.2em tracking, text-primary
- Title: clamp(2rem, 5vw, 3rem), bold, -0.02em tracking
- CTA: btn-primary with icon

### Card Grid
- Default: `grid-cols-1 md:grid-cols-2 xl:grid-cols-3`
- Gap: 1.25rem
- Card height: auto (content-driven)

### Tables
- Rounded container: rounded-dashboard, border-border
- Header: bg-surface-alt, text uppercase, 11px, 0.1em tracking
- Body rows: divide-y divide-border, hover:bg-surface-alt
- Cells: px-4 py-3

---

## Responsive Design

### Breakpoints (Tailwind Default)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Key Responsive Rules
- Sidebar: hidden on mobile, flex on lg+
- Grid: 1-col mobile → 2-col md → 3-col xl
- Header: stack on mobile, row on sm+
- Padding: 1rem mobile → 1.5rem lg+
- Typography: h1 text-3xl mobile → text-5xl xl

---

## Usage Example

### Complete Dashboard Page
```jsx
<div className="space-y-6">
  {/* Header Section */}
  <div>
    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 mb-2">
      Section Label
    </p>
    <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
      Page Title
    </h1>
  </div>

  {/* Stats Cards */}
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {stats.map((stat) => (
      <div key={stat.label} className="rounded-panel border border-border bg-surface p-5 shadow-card">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
          {stat.label}
        </p>
        <p className="mt-2 text-3xl font-bold text-neutral-900">{stat.value}</p>
      </div>
    ))}
  </div>

  {/* Content Panel */}
  <div className="rounded-panel border border-border bg-surface p-6 shadow-panel">
    <h2 className="text-lg font-bold text-neutral-900 mb-4">Section Title</h2>
    {/* Content */}
  </div>

  {/* Action Buttons */}
  <div className="flex flex-col gap-3 sm:flex-row">
    <button className="btn-primary">Primary Action</button>
    <button className="btn-secondary">Secondary Action</button>
    <button className="btn-danger">Delete</button>
  </div>
</div>
```

---

## Key Design Decisions

1. **Light Gray Background** (#f4f6f9) for reduced eye strain and modern dashboard feel
2. **White Card Surfaces** for clarity and content hierarchy
3. **Green Primary** (#16a34a) for trust, growth, and action-oriented workflows
4. **Soft Shadows** for subtle depth without visual clutter
5. **Rounded Corners** (12-16px) for approachability and modern aesthetic
6. **Generous Spacing** for clarity and reduced cognitive load
7. **Uppercase Labels** for clear section identification
8. **Semantic Color Mapping** (success=green, danger=red, warning=yellow, info=blue)
9. **Focus Rings** (3px, green) for accessibility
10. **Responsive Mobile-First** with hidden elements on small screens

---

## Build & Tailwind Config

### PostCSS Configuration
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Tailwind Content Paths
```
'./index.html',
'./src/**/*.{js,ts,jsx,tsx}'
```

### Extends in tailwind.config.js
- Custom color tokens (primary, success, warning, danger, neutral, surface)
- Custom shadows (card, panel, soft, focus)
- Custom border-radius (dashboard, panel)
- Brand gradient background image

---

## Files Included

- **tailwind.config.js** - Theme configuration with extended colors, shadows, spacing
- **postcss.config.js** - PostCSS plugin setup for Tailwind processing
- **src/index.css** - Base styles, component utilities, responsive rules
- **src/App.jsx** - Dashboard shell layout with sidebar, header, router
- **src/components/Navigation.jsx** - Sidebar navigation with active states
- **src/pages/Home.jsx** - Landing dashboard with stats cards and alerts
- **src/pages/CasePage.jsx** - Case detail view with status and next steps
- **src/pages/SuspectsPage.jsx** - Suspect card grid with selection
- **src/pages/EvidencePage.jsx** - Evidence chain viewer with metrics
- **src/pages/InvestigationPage.jsx** - Form submission with success state
- **src/components/CaseCard.jsx** - Case card panel component

---

## Maintenance & Extending

### Adding New Colors
Add to `tailwind.config.js` theme.extend.colors:
```js
colors: {
  'custom-teal': '#12b981',
  'custom-teal-soft': '#d1fae5',
}
```

### Adding New Component Utilities
Add to `src/index.css` @layer components:
```css
.custom-card {
  @apply rounded-dashboard border border-border bg-surface p-6 shadow-card;
}
```

### Custom Spacing Variants
Extend `theme.extend.spacing` in tailwind.config.js

---

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- No IE11 support (ES6 modules, CSS Grid, Flexbox required)

---

## Next Steps
1. Integrate with backend API endpoints
2. Add authentication/login page matching hero gradient pattern
3. Implement dark mode by extending tailwind.config.js darkMode
4. Add more page-specific component variations
5. Create a component library/Storybook for design consistency
