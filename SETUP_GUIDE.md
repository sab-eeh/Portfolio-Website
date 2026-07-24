# Portfolio Website - Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ 
- MongoDB (local or Atlas)
- npm or yarn

---

## 📍 LOCAL DEVELOPMENT SETUP

### Step 1: Install MongoDB Locally

#### Windows
1. Download MongoDB Community Edition from https://www.mongodb.com/try/download/community
2. Run the installer and follow the steps
3. MongoDB will run as a service by default
4. Verify installation by opening PowerShell and typing: `mongosh`

#### Mac
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Linux (Ubuntu)
```bash
curl -fsSL https://www.mongodb.com/docs/manual/tools/installation-ubuntu-lts/ | bash
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

---

### Step 2: Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

### Step 3: Backend Setup

```bash
cd Backend
npm install
node server.js
```

Backend will run on: `http://localhost:5000`

The server will automatically use `.env.local` for local development settings.

---

## 🔧 Configuration Files

### Backend `.env` (Production)
Used for **Railway deployment**
```env
MONGODB_URI=mongodb+srv://ssabeeh:***@cluster1.vgcnc5y.mongodb.net/portfolioDB?...
GMAIL_USER=usabeeh72@gmail.com
GMAIL_PASS=zlpotncofrtsetss
PORT=5000
NODE_ENV=production
```

### Backend `.env.local` (Development)
**New file** - Used for **local development**
```env
MONGODB_URI=mongodb://localhost:27017/portfolioDB
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
PORT=5000
NODE_ENV=development
```

### Frontend `.env` (Production)
```env
VITE_API_URL=https://portfolio-website-production-1869.up.railway.app
```

### Frontend `.env.local` (Development)
```env
VITE_API_URL=http://localhost:5000
```

---

## ✅ Troubleshooting

### MongoDB Connection Error: ECONNREFUSED

**Error Message:**
```
Error: querySrv ECONNREFUSED _mongodb._tcp.cluster1.vgcnc5y.mongodb.net
```

**Causes & Solutions:**

#### 1. MongoDB Not Running Locally
**Check if MongoDB is running:**
```bash
# Windows (PowerShell)
Get-Service | Where-Object {$_.Name -like "*MongoDB*"}

# Mac/Linux
brew services list  # or systemctl status mongod
```

**Start MongoDB:**
```bash
# Windows
net start MongoDB  # or mongod (if not installed as service)

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

#### 2. Wrong Connection String
Make sure `.env.local` has:
```env
MONGODB_URI=mongodb://localhost:27017/portfolioDB
```
NOT the Atlas URI.

#### 3. MongoDB Atlas IP Whitelist (If using Cloud)
1. Go to https://cloud.mongodb.com/
2. Select your cluster
3. Go to "Network Access"
4. Add your IP address: https://cloud.mongodb.com/v2/[projectId]#security/networkAccess

---

### Port Already in Use

If port 5000 is already in use:
```bash
# Windows (PowerShell)
netstat -ano | findstr :5000
taskkill /PID [PID] /F

# Mac/Linux
lsof -i :5000
kill -9 [PID]
```

Or change the port in `.env.local`:
```env
PORT=5001
```

---

### CORS Errors

Error: `Access to fetch from origin 'http://localhost:5173' blocked by CORS`

**Solution:**
- Make sure `.env.local` is being loaded in Backend
- Check `ALLOWED_ORIGINS` in `server.js` includes `localhost:5173`
- Ensure backend is running on the correct port

---

## 🌐 PRODUCTION DEPLOYMENT

### Frontend (Vercel)

1. Push code to GitHub
2. Connect Vercel: https://vercel.com
3. Import your repository
4. Vercel auto-detects Next.js/Vite configuration
5. Add environment variables:
   ```
   VITE_API_URL=https://portfolio-website-production-1869.up.railway.app
   ```
6. Deploy!

Vercel will use `.env` (production) automatically.

---

### Backend (Railway)

1. Create account: https://railway.app
2. Connect GitHub repository
3. Select Backend folder as root
4. Add environment variables (from `.env`):
   ```
   MONGODB_URI=mongodb+srv://ssabeeh:***@cluster1.vgcnc5y.mongodb.net/...
   GMAIL_USER=usabeeh72@gmail.com
   GMAIL_PASS=zlpotncofrtsetss
   NODE_ENV=production
   ```
5. Railway automatically detects Node.js and starts the server

---

## 📋 Complete Workflow

```
Development Flow:
┌─────────────────────────────────────────┐
│  Local Machine                          │
├─────────────────────────────────────────┤
│  Frontend (Vite)       Port 5173        │
│  ↓ VITE_API_URL=localhost:5000         │
│  Backend (Express)     Port 5000        │
│  ↓                                      │
│  MongoDB (Local)       Port 27017       │
└─────────────────────────────────────────┘

Production Flow:
┌──────────────────────────────────────────────┐
│  Frontend (Vercel)  frontend.vercel.app      │
│  ↓ VITE_API_URL=railway-backend-url         │
│  Backend (Railway)  railway-backend.app      │
│  ↓                                           │
│  MongoDB Atlas      cloud.mongodb.com        │
└──────────────────────────────────────────────┘
```

---

## 🔍 Verify Everything Works

### 1. Test Backend Health
```bash
curl http://localhost:5000/health
# Response: {"status":"ok","environment":"development",...}
```

### 2. Test CORS
Open browser console and check:
```javascript
fetch('http://localhost:5000/health').then(r => r.json()).then(console.log)
```

### 3. Test Contact Form
1. Open http://localhost:5173
2. Go to Contact section
3. Fill in and submit form
4. Should see success message

### 4. Check Logs
**Backend logs should show:**
```
==================================================
🚀 Portfolio Backend Server
==================================================
✓ Server running on port 5000
✓ Environment: development
✓ Allowed Origins: http://localhost:5173, ...
==================================================

✓ MongoDB Connected Successfully
Database: portfolioDB
Host: localhost:27017
```

---

## 📚 Additional Resources

- MongoDB Installation: https://www.mongodb.com/docs/manual/installation/
- Mongoose Docs: https://mongoosejs.com/
- Express.js: https://expressjs.com/
- Vite: https://vitejs.dev/
- Railway: https://railway.app/
- Vercel: https://vercel.com/

---

## ⚡ Commands Summary

```bash
# Frontend
cd Frontend && npm install && npm run dev

# Backend (Development)
cd Backend && npm install && node server.js

# Backend (Production Build)
cd Backend && npm run build

# Check MongoDB
mongosh
db.collection.find()  # List databases
```

---

**Note:** Never commit `.env.local` files with real credentials. Use `.gitignore` to exclude them!
