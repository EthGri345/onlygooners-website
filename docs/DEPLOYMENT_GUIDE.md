# OnlyGoon - Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Prerequisites
- Vercel account (free tier available)
- GitHub repository (already set up: `git@github.com:EthGri345/onlygooners-website.git`)

### One-Click Deploy

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Repository**
   - Click "Add New..." → "Project"
   - Import `EthGri345/onlygooners-website`

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./onlygoon`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - Your site will be live at `https://onlygooners-website.vercel.app`

### Custom Domain (Optional)
1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Configure DNS records as instructed

---

## Environment Configuration

### Before Production Deployment

Update the following placeholder values:

#### 1. Telegram Link
**File**: `components/Padlock.tsx:14`
```typescript
// Current (placeholder):
const telegramLink = "https://t.me/your_channel_placeholder";

// Replace with:
const telegramLink = "https://t.me/YOUR_ACTUAL_CHANNEL";
```

**Better Approach**: Use environment variable
```typescript
const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK || "https://t.me/your_channel_placeholder";
```

Then add to `.env.local`:
```bash
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/YOUR_ACTUAL_CHANNEL
```

And in Vercel dashboard → Settings → Environment Variables:
- Key: `NEXT_PUBLIC_TELEGRAM_LINK`
- Value: `https://t.me/YOUR_ACTUAL_CHANNEL`

#### 2. Contract Address
**File**: `components/ContactAddress.tsx:8`
```typescript
// Current (placeholder):
const contractAddress = "0x0000000000000000000000000000000000000000";

// Replace with:
const contractAddress = "0xYOUR_ACTUAL_CONTRACT_ADDRESS";
```

**Better Approach**: Use environment variable
```typescript
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x0000000000000000000000000000000000000000";
```

Then add to `.env.local`:
```bash
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYOUR_ACTUAL_CONTRACT_ADDRESS
```

And in Vercel:
- Key: `NEXT_PUBLIC_CONTRACT_ADDRESS`
- Value: `0xYOUR_ACTUAL_CONTRACT_ADDRESS`

---

## Alternative Deployment Options

### Netlify

1. **Sign in to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect GitHub account

2. **Import Repository**
   - "Add new site" → "Import existing project"
   - Select `onlygooners-website`

3. **Build Settings**
   - Base directory: `onlygoon`
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Deploy**
   - Click "Deploy site"

### AWS Amplify

1. **AWS Amplify Console**
   - Navigate to AWS Amplify Console
   - Click "New app" → "Host web app"

2. **Connect Repository**
   - Select GitHub
   - Choose repository: `onlygooners-website`

3. **Build Settings**
   ```yaml
   version: 1
   applications:
     - appRoot: onlygoon
       frontend:
         phases:
           preBuild:
             commands:
               - npm ci
           build:
             commands:
               - npm run build
         artifacts:
           baseDirectory: .next
           files:
             - '**/*'
         cache:
           paths:
             - node_modules/**/*
   ```

4. **Deploy**

### Self-Hosted / VPS

#### Prerequisites
- Node.js 18+ installed
- PM2 (process manager)
- Nginx (reverse proxy)

#### Steps

1. **Clone Repository**
```bash
git clone git@github.com:EthGri345/onlygooners-website.git
cd onlygooners-website/onlygoon
```

2. **Install Dependencies**
```bash
npm ci --production
```

3. **Build**
```bash
npm run build
```

4. **Install PM2**
```bash
npm install -g pm2
```

5. **Start Application**
```bash
pm2 start npm --name "onlygoon" -- start
pm2 save
pm2 startup
```

6. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **SSL with Certbot**
```bash
sudo certbot --nginx -d yourdomain.com
```

---

## Production Checklist

### Pre-Deployment
- [ ] Update Telegram link in code or environment variables
- [ ] Update contract address in code or environment variables
- [ ] Test production build locally: `npm run build && npm start`
- [ ] Verify all links work correctly
- [ ] Test on mobile devices
- [ ] Check browser console for errors

### Post-Deployment
- [ ] Verify site loads correctly
- [ ] Test padlock click (Telegram redirect)
- [ ] Test copy address functionality
- [ ] Check mobile responsiveness
- [ ] Verify SEO metadata (view source)
- [ ] Test on multiple browsers
- [ ] Set up analytics (optional)
- [ ] Configure custom domain (optional)

---

## Performance Optimization

### CDN Configuration
Vercel and Netlify automatically configure CDN. For self-hosted:
- Use Cloudflare for CDN and DDoS protection
- Enable HTTP/2
- Configure caching headers

### Monitoring
Recommended tools:
- **Vercel Analytics** (if using Vercel)
- **Google Analytics** - User tracking
- **Sentry** - Error monitoring
- **Web Vitals** - Performance metrics

### Security Headers
Add to `next.config.js`:
```javascript
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};
```

---

## Troubleshooting

### Build Failures
1. **Check Node version**: Must be 18.x or higher
2. **Clear cache**: `rm -rf .next node_modules && npm install`
3. **Verify dependencies**: `npm audit`

### Runtime Errors
1. **Check environment variables** are set correctly
2. **View browser console** for JavaScript errors
3. **Check build logs** in deployment platform

### Performance Issues
1. **Enable caching** in CDN settings
2. **Optimize images** if added in future
3. **Monitor bundle size**: `npm install -D @next/bundle-analyzer`

---

## Rollback Procedure

### Vercel
1. Go to deployment dashboard
2. Find previous successful deployment
3. Click "Promote to Production"

### Git Rollback
```bash
git revert HEAD
git push origin main
```

Or to specific commit:
```bash
git reset --hard <commit-hash>
git push -f origin main
```

---

## Support & Maintenance

### Regular Updates
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Test after updates
npm run build
```

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error alerts (Sentry)
- Review analytics weekly

---

**Deployment Status**: Ready for Production ✅
**Recommended Platform**: Vercel
**Estimated Deploy Time**: 3-5 minutes
**Last Updated**: 2025-11-06
