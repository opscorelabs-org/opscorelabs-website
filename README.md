# OpsCore Labs Website

A cutting-edge, high-tech website for OpsCore Labs LLC featuring blockchain-inspired animations, 3D effects, matrix-style digital rain, and interactive glowing elements.

## 🚀 Features

- **Epic Animations**: Blockchain node networks, matrix digital rain, 3D rotating globe
- **Glowing Design**: Multi-layered glow effects with floating orbs and chain animations
- **3D Graphics**: Interactive Three.js globe with distortion effects
- **Mobile Responsive**: Perfect scaling from mobile to desktop with responsive typography
- **Performance Optimized**: 60fps animations with proper z-index layering
- **Contact Form**: Google Forms integration for reliable email handling
- **GitHub Pages Ready**: Automatic CI/CD deployment with GitHub Actions

## 🛠️ Tech Stack

- **React 18** - Modern UI framework with hooks and context
- **TypeScript** - Type-safe development with strict configuration
- **Vite** - Lightning-fast build tool with HMR and optimization
- **Tailwind CSS** - Utility-first styling with custom animations
- **Three.js + React Three Fiber** - 3D graphics and WebGL animations
- **Framer Motion** - Smooth animations and gesture handling
- **Canvas API** - Custom blockchain and matrix animations
- **Zustand** - Lightweight state management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/opscorelabs-org/opscorelabs-website.git
   cd opscorelabs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and configure your email service:
   ```env
   # For Formspree (recommended)
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   
   # For EmailJS (alternative)
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🚀 Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Preview production build**
   ```bash
   npm run preview
   ```

## 📧 Email Service Setup (FREE with Google Forms)

### Google Forms Integration (Recommended - 100% FREE)

1. **Create a Google Form**
   - Go to [forms.google.com](https://forms.google.com)
   - Create a new form with fields: Name, Email, Company, Message
   - Get the form URL and field IDs

2. **Configure Environment**
   ```env
   VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
   VITE_GOOGLE_FORM_ID=YOUR_FORM_ID
   ```

3. **Update Field IDs**
   - Edit `src/services/emailService.ts`
   - Replace the field IDs with your actual Google Form field IDs

**📖 Detailed Setup Guide:** See [GOOGLE_FORMS_SETUP.md](GOOGLE_FORMS_SETUP.md) for complete instructions.

### Benefits of Google Forms:
- ✅ **Completely FREE** - No monthly fees or limits
- ✅ **Reliable** - Google's infrastructure
- ✅ **Email Notifications** - Get notified of new submissions
- ✅ **Data Storage** - All responses saved in Google Sheets
- ✅ **Mobile Friendly** - Works on all devices

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

3. **Automatic deployment**
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at `https://yourusername.github.io/opscorelabs-website`

### Custom Domain

1. Add a `CNAME` file to the `public` folder:
   ```
   yourdomain.com
   ```

2. Configure DNS settings to point to your GitHub Pages URL

## ✨ Epic Animations

This website features cutting-edge animations that create an immersive tech experience:

### 🔗 Blockchain Node Network
- **15 connected nodes** that move and pulse across the screen
- **Dynamic connections** between nearby nodes
- **Glowing effects** with color transitions
- **Real-time movement** with collision detection

### 🌧️ Matrix Digital Rain
- **Japanese characters** and binary code falling
- **Glowing cyan text** with trail effects
- **Smooth animation** at 0.8x speed for elegance
- **Low intensity** to avoid overwhelming the content

### 🌍 3D Rotating Globe
- **Three.js WebGL** globe with distortion effects
- **Auto-rotation** with smooth camera movement
- **Purple glow** with transparency effects
- **Interactive controls** (disabled for background use)

### ✨ Multi-Layer Glow System
- **Floating orbs** with staggered animations
- **Chain glow effects** with moving patterns
- **Gradient overlays** in multiple directions
- **Flowing animations** with conic gradients

## 🎨 Customization

### Colors and Theme

Edit `src/styles/globals.css` to customize the color scheme:

```css
:root {
  --color-glow-primary: #00d4ff;    /* Primary glow color */
  --color-glow-secondary: #ff006e;  /* Secondary glow color */
  --color-glow-accent: #8338ec;     /* Accent glow color */
}
```

### Team Members

Update `src/utils/constants.ts` to add your team members:

```typescript
export const TEAM_PLACEHOLDERS = [
  {
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio',
    image: '/your-photo.jpg',
  },
  // Add more team members...
];
```

### Services

Modify the services in `src/utils/constants.ts`:

```typescript
export const SERVICES = [
  {
    title: 'Your Service',
    description: 'Service description',
    icon: '🎨',
  },
  // Add more services...
];
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Logo, Card, etc.)
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Hero, Services, Team, Contact
│   └── animations/   # Epic animations (Blockchain, Matrix, 3D Globe, ChainGlow)
├── hooks/            # Custom React hooks (mouse position, intersection observer)
├── services/         # Email services (Google Forms integration)
├── utils/            # Helper functions and constants
├── types/            # TypeScript type definitions
└── styles/           # Global styles with custom animations and glow effects
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email contact@opscorelabs.com or create an issue in this repository.

---

© 2024 OpsCore Labs LLC. All rights reserved.