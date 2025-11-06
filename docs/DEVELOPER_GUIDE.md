# OnlyGoon - Developer Guide

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Installation

1. **Clone the repository** (after git init):
```bash
git clone <repository-url>
cd onlygoon
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open browser**:
Navigate to `http://localhost:3000`

### Build Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter (when configured)
npm run lint
```

## Project Structure

### Directory Layout
```
onlygoon/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Landing page route
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Lockbox.tsx         # Main lockbox container
│   ├── Padlock.tsx         # Interactive padlock
│   ├── ContactAddress.tsx  # Copy-enabled address
│   └── Ticker.tsx          # $OG ticker display
├── docs/                   # Documentation
├── public/                 # Static assets (add as needed)
├── node_modules/           # Dependencies
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Component Documentation

### Lockbox Component
**File**: `components/Lockbox.tsx`

**Purpose**: Main container displaying the lockbox frame with chains converging at center.

**Props**: None

**State**:
- `isHovered`: Boolean tracking hover state for chain animations

**Key Features**:
- Four SVG chains from corners to center
- Responsive anchor points at corners
- Gradient effects and shadows
- Hover-responsive animations

**Customization**:
```typescript
// Adjust chain thickness
strokeWidth={isHovered ? "1.2" : "0.8"}

// Modify corner anchor size
className="w-8 h-8 md:w-12 md:h-12"
```

### Padlock Component
**File**: `components/Padlock.tsx`

**Purpose**: Interactive padlock that serves as entry point to Telegram.

**Props**:
- `isHovered: boolean` - Passed from parent Lockbox

**State**:
- `isClicked`: Animation trigger on click
- `showTooltip`: Displays "Click to Enter" on hover

**Configuration**:
```typescript
// Update Telegram link
const telegramLink = "https://t.me/your_actual_channel";
```

**Accessibility**:
- Semantic button element
- ARIA label for screen readers
- Keyboard accessible
- Focus ring indicator

### ContactAddress Component
**File**: `components/ContactAddress.tsx`

**Purpose**: Displays contract address with one-click copy functionality.

**Props**: None

**State**:
- `copied`: Tracks copy success state

**Configuration**:
```typescript
// Update contract address
const contractAddress = "0xYourActualContractAddress";
```

**Features**:
- Clipboard API integration
- Address formatting (truncation)
- Visual feedback (checkmark)
- Error handling
- Responsive text sizing

### Ticker Component
**File**: `components/Ticker.tsx`

**Purpose**: Premium display of $OG ticker symbol.

**Props**: None

**Features**:
- Gradient text effects
- Ambient glow on hover
- Sparkle animations
- Responsive sizing

## Styling System

### Tailwind Configuration
Located in `tailwind.config.ts`:

**Custom Animations**:
```typescript
animation: {
  'float': 'float 3s ease-in-out infinite',
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'shimmer': 'shimmer 2s linear infinite',
}
```

**Usage**:
```tsx
className="animate-pulse-slow"
```

### Global Styles
Located in `app/globals.css`:

**Custom Classes**:
- `.glow-gold` - Gold glow effect
- `.glow-silver` - Silver glow effect
- `.animate-pulse-glow` - Pulsing glow animation

**CSS Variables**:
```css
--background: #000000
--foreground: #ffffff
--gold: #d4af37
--silver: #c0c0c0
--dark-gray: #1a1a1a
```

## Configuration Files

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path aliases: `@/*` maps to root
- Modern ES2020 target
- Full type checking

### Next.js (`next.config.js`)
- React strict mode enabled
- SWC minification
- Ready for environment variables

### Tailwind (`tailwind.config.ts`)
- Custom theme extensions
- Content paths configured
- Animation definitions

## State Management

Currently using local component state via React hooks:
- `useState` for simple state
- Event handlers for interactions
- Props for parent-child communication

**Future Considerations**:
- Add Context API for global state
- Consider Zustand for complex state
- Implement React Query for data fetching

## Performance Optimization

### Current Optimizations
1. **Client Components**: Interactive parts marked with "use client"
2. **SVG Graphics**: Scalable without quality loss
3. **CSS Animations**: Hardware-accelerated transforms
4. **Code Splitting**: Automatic via Next.js
5. **Minimal Dependencies**: Only essential packages

### Monitoring
Add these tools for production:
- Vercel Analytics
- Web Vitals tracking
- Error monitoring (Sentry)
- Performance profiling

## Testing Strategy

### Recommended Tools
```bash
# Unit testing
npm install -D jest @testing-library/react @testing-library/jest-dom

# E2E testing
npm install -D @playwright/test

# Type checking
npm run type-check
```

### Test Coverage Goals
- Component rendering
- Click interactions
- Copy functionality
- Responsive behavior
- Accessibility compliance

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
Create `.env.local`:
```bash
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/your_channel
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourAddress
```

### Build Optimization
```bash
# Production build
npm run build

# Analyze bundle
npm install -D @next/bundle-analyzer
```

## Maintenance

### Updating Dependencies
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Major version updates
npm install next@latest react@latest
```

### Code Quality
```bash
# Add ESLint
npm install -D eslint eslint-config-next

# Add Prettier
npm install -D prettier eslint-config-prettier

# Run formatting
npx prettier --write .
```

## Troubleshooting

### Common Issues

**Build Errors**:
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Type Errors**:
- Update type definitions: `npm update @types/react @types/node`

**Styling Issues**:
- Rebuild Tailwind: `npm run dev` (restarts build process)

## Contributing Guidelines

1. **Code Style**:
   - Use TypeScript for all new files
   - Follow existing component patterns
   - Add comments for complex logic

2. **Commits**:
   - Clear, descriptive messages
   - Reference issues when applicable
   - Atomic commits (one feature/fix per commit)

3. **Pull Requests**:
   - Update documentation
   - Add tests for new features
   - Ensure build passes

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Maintained by**: Development Team
**Last Updated**: 2025-11-06
