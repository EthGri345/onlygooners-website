# OnlyGoon - Project Overview

## Executive Summary
OnlyGoon is a premium, enterprise-grade landing page featuring an innovative lockbox design with interactive elements. The site serves as an exclusive gateway to a Telegram community, branded with the $OG ticker.

## Business Objectives
- Create a premium, exclusive brand experience
- Provide secure gateway to Telegram community
- Display contract address with easy copy functionality
- Establish $OG ticker brand presence
- Ensure mobile-first, responsive design

## Technical Stack

### Framework & Core
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type-safe development

### Styling & Design
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Custom animations** - Premium interactive effects

### Development Tools
- **npm** - Package management
- **ESNext** - Modern JavaScript features
- **Strict TypeScript** - Enhanced type safety

## Architecture

### Component Structure
```
onlygoon/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles & animations
├── components/
│   ├── Lockbox.tsx        # Main lockbox with chains
│   ├── Padlock.tsx        # Interactive padlock
│   ├── ContactAddress.tsx # Copyable contract address
│   └── Ticker.tsx         # $OG ticker display
└── docs/                  # Project documentation
```

### Design Principles
1. **Modular Components** - Each component is self-contained and reusable
2. **Type Safety** - Full TypeScript coverage for reliability
3. **Performance** - Optimized with Next.js SSR and client components
4. **Accessibility** - ARIA labels and semantic HTML
5. **Security** - Input validation and secure external links

## Key Features

### 1. Interactive Lockbox Design
- Chains extending from each corner to center
- SVG-based scalable graphics
- Hover effects with glow animations
- Responsive anchor points

### 2. Premium Padlock
- Detailed SVG illustration with gradients
- Interactive hover states
- Click-to-enter functionality
- Smooth animations and transitions
- Opens Telegram link in new tab

### 3. One-Click Copy Address
- Clipboard API integration
- Visual feedback on copy success
- Formatted address display
- Error handling
- Accessible button design

### 4. $OG Ticker Display
- Prominent brand positioning
- Gradient text effects
- Ambient glow animations
- Sparkle accents
- Responsive sizing

## Design System

### Color Palette
- **Primary Black**: `#000000` - Background base
- **Gold**: `#d4af37` - Primary accent
- **Silver**: `#c0c0c0` - Chain details
- **Dark Gray**: `#1a1a1a` - UI elements

### Typography
- System font stack for performance
- Bold weights for ticker and headings
- Monospace for contract address

### Spacing & Layout
- Mobile-first responsive design
- Fluid scaling with Tailwind utilities
- Centered layouts with max-width constraints

## Performance Considerations
- Client-side rendering for interactive components
- Optimized SVG assets
- CSS animations over JavaScript
- Minimal external dependencies
- Code splitting via Next.js

## Security Measures
- `noopener,noreferrer` on external links
- Input sanitization (when applicable)
- Secure clipboard API usage
- Content Security Policy ready
- No exposed sensitive data

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

## Future Enhancements
- Real contract address integration
- Actual Telegram channel link
- Analytics integration
- SEO optimization
- Performance monitoring
- A/B testing framework

## Deployment Considerations
- Static export capability
- CDN optimization
- Environment variables for configuration
- CI/CD pipeline ready
- Monitoring and error tracking

---

**Version**: 1.0.0
**Last Updated**: 2025-11-06
**Status**: Production Ready
