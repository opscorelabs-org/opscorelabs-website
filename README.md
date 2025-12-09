# OpsCore Labs Website

A modern, professional website for OpsCore Labs LLC featuring interactive 3D Rubik's cube, technology stack showcases, and a clean, enterprise-focused design.

## 🚀 Features

- **Interactive 3D Rubik's Cube**: Draggable 3D cube animation in the hero section
- **Technology Stack Showcase**: Animated marquee displays of technologies across multiple categories
- **Mobile Responsive**: Perfect scaling from mobile to desktop with responsive typography
- **Performance Optimized**: Smooth animations with CSS and React hooks
- **Contact Form**: FormSubmit integration for reliable email handling
- **GitHub Pages Ready**: Automatic CI/CD deployment with GitHub Actions

## 🛠️ Tech Stack

- **React 18** - Modern UI framework with hooks
- **TypeScript** - Type-safe development with strict configuration
- **Vite** - Lightning-fast build tool with HMR and optimization
- **Tailwind CSS** - Utility-first styling with custom animations
- **CSS Animations** - Custom animations for marquee effects and 3D transforms

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/opscorelabs-org/opscorelabs-website.git
   cd opscorelabs-website
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```
   
   **Note**: Make sure you have Node.js (v16+) installed. If `yarn` is not installed, you can install it globally:
   ```bash
   npm install -g yarn
   ```

## 🚀 Development

1. **Start the development server**
   
   Using npm:
   ```bash
   npm run dev
   ```
   
   Or using yarn:
   ```bash
   yarn dev
   ```

2. **Build for production**
   
   Using npm:
   ```bash
   npm run build
   ```
   
   Or using yarn:
   ```bash
   yarn build
   ```

3. **Preview production build**
   
   Using npm:
   ```bash
   npm run preview
   ```
   
   Or using yarn:
   ```bash
   yarn preview
   ```

## 📧 Email Service Setup

### FormSubmit Integration (Current Implementation)

The contact form uses [FormSubmit](https://formsubmit.co/) which is free and requires no backend setup.

1. **How it works**
   - The form submits directly to `contact@opscorelabs.com` via FormSubmit
   - After the first submission, FormSubmit will send an activation email
   - Click the activation link in the email to enable the form permanently

2. **Customization**
   - Edit `src/components/sections/Contact.tsx` to change the form action URL
   - The form includes auto-response and template configuration

### Benefits of FormSubmit:
- ✅ **Completely FREE** - No monthly fees or limits
- ✅ **No Backend Required** - Works directly from the frontend
- ✅ **Email Notifications** - Get notified of new submissions
- ✅ **Spam Protection** - Built-in spam filtering
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

## ✨ Key Features

This website features modern, professional animations and interactions:

### 🎲 Interactive 3D Rubik's Cube
- **Auto-rotating cube** in the hero section
- **Mouse/touch drag** to manually rotate
- **Smooth animations** with CSS 3D transforms
- **Responsive sizing** for mobile devices

### 🎠 Technology Stack Marquee
- **Draggable marquees** for each technology category
- **Smooth scrolling** animations
- **Touch-friendly** for mobile devices
- **Multiple categories**: Cloud/DevOps, Blockchain, Frontend, Backend, Mobile, AI/ML, Cybersecurity

### 🎨 Modern Design
- **Clean, professional** layout
- **Glass morphism** navigation
- **Smooth scroll** behavior
- **Responsive grid** layouts

## 🎨 Customization

### Colors and Theme

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  brand: {
    600: '#2563eb', // Primary brand color
    // ... other shades
  }
}
```

### Services

Modify the services in `src/components/sections/Services.tsx`:

```typescript
const services = [
  {
    title: 'Your Service',
    description: 'Service description',
    icon: <YourIcon />,
    bgColor: 'bg-blue-50',
    iconColor: 'text-brand-600',
  },
  // Add more services...
];
```

### Technology Stack

Update the technology stacks in `src/components/sections/Technology.tsx`:

```typescript
const techStacks = [
  {
    title: 'Your Category',
    speed: 0.5,
    items: [
      { icon: 'logos:your-icon', name: 'Technology Name' },
      // Add more technologies...
    ],
  },
];
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   └── sections/     # Hero, Stats, Services, Technology, Process, About, Contact
├── hooks/            # Custom React hooks (mobile menu, navbar scroll, rubiks cube, marquee drag, contact form)
├── styles/           # Global styles with custom animations and CSS
└── main.tsx          # Application entry point
```

## 📝 Scripts

Using npm:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

Using yarn:
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

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

© 2025 OpsCore Labs LLC. All rights reserved.