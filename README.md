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

## ⚙️ Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# MongoDB Atlas (optional but recommended for production)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolioDB

# Gmail SMTP (for contact form emails)
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
SMTP_EMAIL=your-email@gmail.com

# Optional: Custom API base URL (leave empty for root-relative)
VITE_API_URL=
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed setup instructions.

## 🌐 API Reference

### Contact Submission

**Endpoint:** `POST /api/contact`

**Request:**
```json
{
  "fullname": "Your Name",
  "email": "your@email.com",
  "message": "Your message here"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🚢 Deployment

### Vercel (Recommended)

The project is optimized for Vercel deployment:

```bash
npm install -g vercel
vercel login
vercel --prod
```

Set environment variables in Vercel Dashboard → Project Settings → Environment Variables.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Other Platforms

The project can be deployed to:
- Netlify
- Firebase Hosting
- AWS Amplify
- Any Node.js-compatible platform

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

## 🐛 Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify `.env` variables are set correctly
- Ensure Vercel dev server is running for local testing

**Not receiving emails?**
- Verify Gmail App Password is set (not regular password)
- Check spam folder
- Confirm `GMAIL_USER` and `GMAIL_PASS` are correct

**Build errors?**
- Clear node_modules: `rm -r node_modules && npm install`
- Clear build cache: `rm -r dist && npm run build`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed troubleshooting.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Sabeeh Uddin**
- Email: usabeeh72@gmail.com
- Phone: +92 331 290 4878
- GitHub: [sab-eeh](https://github.com/sab-eeh)
- LinkedIn: [Sabeeh Uddin](https://www.linkedin.com/in/sabeeh-uddin-91464a252/)
