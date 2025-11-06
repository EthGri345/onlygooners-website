# OnlyGoon ($OG)

> Premium exclusive access platform featuring an innovative lockbox design.

## Overview

OnlyGoon is an enterprise-grade landing page that serves as an exclusive gateway to our Telegram community. The site features a unique lockbox design with chains converging at an interactive padlock, embodying security and exclusivity.

## Features

### 🔒 Interactive Lockbox
- Premium lockbox design with chains extending from each corner
- Converging at a central interactive padlock
- Smooth hover effects and animations
- Fully responsive on all devices

### 🎫 Telegram Gateway
- Click the padlock to access exclusive Telegram community
- Secure external link handling
- Visual feedback on interaction

### 📋 One-Click Copy
- Contract address displayed prominently
- Copy to clipboard with single click
- Visual confirmation of successful copy

### 💎 Premium Design
- Dark, modern aesthetic
- Gold and silver accent colors
- Smooth animations and transitions
- Mobile-first responsive design

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **SVG Graphics** - Scalable vector assets

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development server runs at `http://localhost:3000`

### Environment Setup

Create `.env.local` file:

```bash
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/your_channel
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddress
```

## Project Structure

```
onlygoon/
├── app/                    # Next.js App Router
├── components/             # React components
├── docs/                   # Documentation
├── public/                 # Static assets
└── Configuration files
```

## Configuration

### Update Telegram Link
Edit `components/Padlock.tsx`:
```typescript
const telegramLink = "https://t.me/your_actual_channel";
```

### Update Contract Address
Edit `components/ContactAddress.tsx`:
```typescript
const contractAddress = "0xYourActualContractAddress";
```

## Documentation

Comprehensive documentation available in `/docs`:
- [Project Overview](docs/PROJECT_OVERVIEW.md)
- [Developer Guide](docs/DEVELOPER_GUIDE.md)
- [Progress Log](docs/PROGRESS_LOG.md)

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

## Performance

- Optimized with Next.js SSR
- Minimal dependencies
- Hardware-accelerated animations
- Lazy loading where applicable

## Security

- Secure external link handling (`noopener,noreferrer`)
- Input validation and sanitization
- Type-safe development with TypeScript
- No exposed sensitive data

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms
Compatible with any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Contributing

Please read the [Developer Guide](docs/DEVELOPER_GUIDE.md) before contributing.

## License

ISC

## Support

For issues and questions, please open an issue in the repository.

---

**Built with** ⚡ by the OnlyGoon development team

**$OG** - Premium. Exclusive. Secure.
