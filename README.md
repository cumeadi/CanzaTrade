# 🚀 CanzaTrade - Professional Trading Platform

[![Railway](https://img.shields.io/badge/Deploy%20on-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

> **CanzaTrade** is a professional, African market-focused trading platform built on the robust OpenTrader foundation. Experience seamless trading with our modern design system and enterprise-grade infrastructure.

## ✨ Features

### 🎨 **Modern Design System**
- **Canza Finance Branding** - Professional navy blue theme with vibrant teal accents
- **Responsive Dashboard** - Three-column layout optimized for trading workflows
- **African Markets Focus** - Prioritized display of African currency pairs (NGN/USDT, KES/USDT, GHS/USDT, ZAR/USDT, EGP/USDT)
- **Accessibility First** - High contrast colors, clear typography, and keyboard navigation

### 💼 **Trading Capabilities**
- **Multi-Exchange Support** - Connect to multiple cryptocurrency exchanges
- **Advanced Bot Trading** - Grid bots, DCA strategies, and custom algorithms
- **Real-time Data** - Live market data, order books, and trade feeds
- **Portfolio Management** - Comprehensive portfolio tracking and analytics
- **Risk Management** - Stop-loss, take-profit, and position sizing tools

### 🏗️ **Technical Excellence**
- **TypeScript** - Full type safety and modern development experience
- **Monorepo Architecture** - Efficient package management with Moon
- **Prisma ORM** - Type-safe database operations and migrations
- **Docker Ready** - Containerized deployment with Railway
- **Health Monitoring** - Built-in health checks and monitoring

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** and **pnpm**
- **Git** for version control
- **Railway account** for deployment (optional)

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/canzatrade.git
cd canzatrade

# Install dependencies
pnpm install

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
moon run prisma:migrate

# Start development server
moon run :dev
```

### Railway Deployment (Recommended)

```bash
# Deploy to Railway in one command
./deploy-railway.sh
```

**Or follow the [3-step quick start guide](RAILWAY_QUICKSTART.md):**

1. **Connect to Railway** - Link your GitHub repository
2. **Set Environment Variables** - Configure in Railway dashboard  
3. **Deploy** - Railway handles the rest automatically

## 🎯 What Makes CanzaTrade Special

### 🌍 **African Markets First**
CanzaTrade is built specifically for African traders and markets:

- **Local Currency Pairs**: NGN/USDT, KES/USDT, GHS/USDT, ZAR/USDT, EGP/USDT
- **Regional Exchanges**: Optimized for Baki and other African exchanges
- **Local Time Zones**: African market hours and trading patterns
- **Cultural Context**: Designed with African trading preferences in mind

### 🎨 **Professional Design System**
Our cohesive design system ensures a professional, trustworthy experience:

- **Color Palette**: Deep navy blues with vibrant teal accents
- **Typography**: Inter for headings, Roboto for body text
- **Components**: Consistent button styles, cards, and form elements
- **Responsive**: Works seamlessly across all device sizes

### 🚀 **Enterprise-Grade Infrastructure**
Built for reliability and scale:

- **Health Monitoring**: Automatic health checks and restart policies
- **Auto-scaling**: Handles traffic spikes automatically
- **SSL Certificates**: HTTPS enabled by default
- **Database Management**: Automatic migrations and seeding
- **Logging & Monitoring**: Comprehensive observability

## 🏗️ Architecture

```
canzatrade/
├── app/                          # Main application
│   ├── frontend/                # React frontend with design system
│   ├── src/                     # Backend source code
│   └── bin/                     # CLI and startup scripts
├── packages/                     # Shared packages
│   ├── bot/                     # Trading bot engine
│   ├── db/                      # Database layer
│   ├── exchanges/               # Exchange integrations
│   ├── indicators/              # Technical indicators
│   └── trpc/                    # API layer
├── Dockerfile.railway           # Railway deployment
├── railway.json                 # Railway configuration
└── docs/                        # Documentation
```

## 🎨 Design System

CanzaTrade features a comprehensive design system built for professional trading:

### **Color System**
```css
:root {
  --background-primary: #0A192F;    /* Deep Navy Blue */
  --background-secondary: #172A45;   /* Lighter Navy */
  --accent-primary: #64FFDA;        /* Vibrant Teal */
  --system-success: #00BFA5;        /* Green for profits */
  --system-error: #FF5252;          /* Red for losses */
}
```

### **Component Library**
- **Buttons**: Primary, secondary, and tertiary variants
- **Cards**: Consistent styling with hover effects
- **Forms**: Professional input styling and validation
- **Tables**: Clean data presentation
- **Status Indicators**: Bot status, trade status, alerts

### **Responsive Design**
- **Desktop**: 3-column dashboard layout
- **Tablet**: 2-column layout with full-width right column
- **Mobile**: Single column with optimized spacing

## 🚀 Deployment Options

### **Railway (Recommended)**
- **Zero Configuration**: Automatic Docker builds
- **Auto-scaling**: Handles traffic spikes
- **SSL Certificates**: HTTPS enabled by default
- **Health Monitoring**: Built-in monitoring and alerts

### **Docker**
```bash
# Build and run locally
docker build -f Dockerfile.railway -t canzatrade .
docker run -p 3000:3000 canzatrade
```

### **Traditional Hosting**
```bash
# Build the application
moon run :build

# Start production server
node app/dist/standalone.mjs
```

## 📊 Dashboard Features

### **Left Column - Portfolio & Watchlist**
- **Portfolio Overview**: Real-time portfolio value and P&L
- **Watchlist**: African currency pairs with live prices
- **Quick Actions**: New bot, quick trade, reports

### **Center Column - Trading Interface**
- **Interactive Charts**: Large chart area for technical analysis
- **Order Entry**: Streamlined buy/sell forms
- **Market Information**: 24h high/low, volume, market cap

### **Right Column - Management**
- **Active Bots**: Bot status and performance monitoring
- **Recent Trades**: Live trade feed with timestamps
- **Market Alerts**: Price alerts and notifications

## 🔧 Configuration

### **Environment Variables**
```bash
# Required
NODE_ENV=production
ADMIN_PASSWORD=your-secure-password
HOST=0.0.0.0
PORT=3000

# Database (Railway sets this automatically)
DATABASE_URL=your-database-url

# Optional
CCXT_VERBOSE=true
CUSTOM_STRATEGIES_PATH=/app/strategies
```

### **Database Setup**
CanzaTrade supports both SQLite and PostgreSQL:

- **SQLite**: Works out of the box (default)
- **PostgreSQL**: Recommended for production (add as Railway service)

## 📚 Documentation

- **[Design System](DESIGN_SYSTEM.md)** - Complete design system documentation
- **[Railway Deployment](RAILWAY_DEPLOYMENT.md)** - Comprehensive deployment guide
- **[Quick Start](RAILWAY_QUICKSTART.md)** - 3-step deployment guide
- **[API Reference](packages/trpc/README.md)** - API documentation

## 🛠️ Development

### **Available Scripts**
```bash
# Development
moon run :dev              # Start development server
moon run :build            # Build for production
moon run :typecheck        # Type checking
moon run :lint             # Lint code

# Database
moon run prisma:migrate    # Run migrations
moon run prisma:generate   # Generate Prisma client

# Deployment
./deploy-railway.sh        # Deploy to Railway
```

### **Project Structure**
- **Monorepo**: Managed with Moon for efficient development
- **TypeScript**: Full type safety across all packages
- **Testing**: Comprehensive test suite with Vitest
- **Linting**: Oxlint for fast, reliable linting

## 🌟 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### **Development Setup**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### **Code Standards**
- **TypeScript**: Strict type checking enabled
- **Prettier**: Consistent code formatting
- **ESLint**: Code quality and style enforcement
- **Conventional Commits**: Standardized commit messages

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

### **Community Resources**
- **Discord**: [Railway Community](https://discord.gg/railway)
- **Documentation**: [Railway Docs](https://docs.railway.app/)
- **Issues**: GitHub Issues for bug reports

### **Getting Help**
1. **Check Documentation**: Start with the guides above
2. **Search Issues**: Look for similar problems
3. **Create Issue**: Provide detailed information
4. **Community**: Ask in Railway Discord

## 🎉 Acknowledgments

- **OpenTrader Foundation**: Built on the robust OpenTrader platform
- **Canza Finance**: Brand identity and design inspiration
- **Railway**: Deployment platform and infrastructure
- **Open Source Community**: All the amazing tools and libraries

---

## 🚀 Ready to Trade?

**Deploy CanzaTrade to Railway in under 5 minutes:**

[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app)

**Or start locally:**

```bash
git clone https://github.com/your-username/canzatrade.git
cd canzatrade
./deploy-railway.sh
```

---

**Built with ❤️ for African markets and global traders**

*CanzaTrade - Professional Trading Platform by Canza Finance*
