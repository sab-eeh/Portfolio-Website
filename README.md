# Sabeeh Portfolio

A modern, production-ready portfolio website featuring a React + Vite frontend with a Vercel serverless contact API, MongoDB database integration, and email notifications.

## ✨ Features

- **React 19 + Vite** - Lightning-fast frontend with modern tooling
- **Tailwind CSS** - Utility-first styling with responsive design
- **Serverless API** - `/api/contact` endpoint running on Vercel Functions
- **Database Ready** - MongoDB Atlas integration for contact persistence
- **Email Notifications** - Automatic email on form submissions via Nodemailer
- **SEO Optimized** - Structured data, meta tags, and Open Graph support
- **Fully Responsive** - Mobile-first design across all device sizes
- **Production Ready** - Error handling, validation, CORS support
- **Zero Configuration Deploy** - Works seamlessly on Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Git

### Local Development

```bash
# 1. Clone and install
git clone <repo-url>
cd Portfolio-Website
npm install

# 2. Setup environment
cp .env.example .env
# Edit .env with your MongoDB and Gmail credentials

# 3. Start dev server
npm run dev
```

Visit `http://localhost:3000` and the API is available at `/api/contact`.

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 Project Structure

```
Portfolio-Website/
├── api/
│   └── contact.js           # Vercel serverless function
├── src/
│   ├── components/          # Reusable React components
│   ├── features/            # Feature-specific components
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   ├── styles/              # Global styles
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML entry point with SEO metadata
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment config
├── .env.example             # Environment variables template
└── README.md                # This file
```

## 🛠️ Scripts

```bash
npm run dev       # Start Vercel dev server (includes API)
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## 📊 Performance

- **Build Size:** ~230KB (gzipped)
- **API Response:** <500ms (with database)
- **Lighthouse Score:** 95+ (performance)
- **Mobile Friendly:** Yes

## 🔒 Security

- Email credentials stored in environment variables (never exposed)
- Email validation prevents malformed submissions
- CORS enabled for public API usage
- XSS protection via React's built-in escaping
- Rate limiting available via Vercel middleware

## 👨‍💻 Author

**Sabeeh Uddin**
- Email: usabeeh72@gmail.com
- Phone: +92 331 290 4878
- GitHub: [sab-eeh](https://github.com/sab-eeh)
- LinkedIn: [Sabeeh Uddin](https://www.linkedin.com/in/sabeeh-uddin-91464a252/)
