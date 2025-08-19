# 🚀 **CanzaTrade - Professional Trading Platform**

> **CanzaTrade** is a powerful open-source crypto trading bot designed to automate your trading strategies on various cryptocurrency exchanges, with a focus on African markets and stablecoin pairs.

## ✨ **Features**

### 🎯 **African Market Focus**
- **Priority watchlist** for African currency pairs (NGN/USDT, KES/USDT, GHS/USDT, ZAR/USDT, EGP/USDT)
- **Baki exchange integration** for local market access
- **Stablecoin trading** with African fiat currencies

### 🏗️ **Architecture**
- **Monorepo structure** using Moonrepo for efficient package management
- **Modular design** with separate packages for different functionalities
- **TypeScript** throughout for type safety and developer experience
- **Prisma ORM** for database management with SQLite support

### 🔧 **Core Components**
- **Trading Engine** - Automated strategy execution
- **Market Data** - Real-time price feeds and analysis
- **Portfolio Management** - Asset tracking and P&L calculation
- **Bot Templates** - Pre-built trading strategies
- **Backtesting** - Strategy validation and optimization

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 22+ 
- pnpm 8+
- Git

### **Installation**
```bash
# Clone the repository
git clone https://github.com/cumeadi/CanzaTrade.git
cd CanzaTrade

# Install dependencies
pnpm install

# Build the application
pnpm run build

# Start development server
pnpm run dev
```

### **Database Setup**
```bash
# Run database migrations
pnpm run prisma:migrate

# Seed the database
pnpm run prisma:seed
```

## 🌐 **Deployment Options**

### **🚀 Vercel (Recommended & Live)**
- **✅ LIVE NOW**: https://canzatrade-mldpx1xv7-chika-umeadi-s-projects.vercel.app
- **Global CDN** for fast worldwide access
- **Serverless functions** with automatic scaling
- **Full trading UI** deployed and accessible
- **Continuous deployment** on every push

```bash
# Quick deployment
./deploy-vercel.sh

# Or manual deployment
vercel --prod
```

### **🐳 Docker**
- **Containerized deployment** for any environment
- **Multi-stage builds** for optimized images
- **Environment-specific configurations**

```bash
# Build Docker image
docker build -t canzatrade .

# Run container
docker run -p 3000:3000 canzatrade
```

### **🖥️ Self-Hosted**
- **Full control** over infrastructure
- **Custom environment** configurations
- **On-premises deployment** options

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Deep navy blues and dark grays for backgrounds
- **Text**: White and light gray for high readability
- **Accents**: Vibrant teal/green for buttons and CTAs
- **Charts**: Green for positive, red for negative changes

### **Typography**
- **Headings**: Primary brand font with varied weights
- **Body Text**: Secondary brand font for optimal readability
- **Hierarchy**: Clear visual structure with consistent spacing

### **Components**
- **Trading Interface**: Professional, intuitive design
- **Dashboard**: Multi-column layout for efficient workflow
- **Responsive Design**: Optimized for all device sizes

## 📊 **Dashboard Features**

### **Left Column**
- **Watchlist**: African currency pairs and stablecoins
- **Portfolio Overview**: Current value, P&L, and allocation

### **Center Column**
- **Interactive Chart**: Large, detailed trading pair visualization
- **Order Entry**: Streamlined trading interface

### **Right Column**
- **Active Bots**: Trading bot status and performance
- **Recent Trades**: Live feed of executed trades

## 🌍 **Live Platform Access**

### **Production URLs**
- **Main Trading Platform**: https://canzatrade-mldpx1xv7-chika-umeadi-s-projects.vercel.app
- **Dashboard**: https://canzatrade-mldpx1xv7-chika-umeadi-s-projects.vercel.app/dashboard
- **API Status**: https://canzatrade-mldpx1xv7-chika-umeadi-s-projects.vercel.app/api
- **Health Check**: https://canzatrade-mldpx1xv7-chika-umeadi-s-projects.vercel.app/api/health

### **What's Live Now**
- ✅ **Full Trading UI** - Complete CanzaTrade platform
- ✅ **African Market Dashboard** - Currency pairs and portfolio
- ✅ **Professional Design** - Canza Finance branding
- ✅ **Responsive Interface** - Works on all devices
- ✅ **API Endpoints** - Health monitoring and status

## ⚙️ **Configuration**

### **Environment Variables**
```bash
DATABASE_URL=file:./dev.db
ADMIN_PASSWORD=canza123
HOST=0.0.0.0
PORT=3000
NODE_ENV=production
```

### **Database**
- **SQLite** for development and small deployments
- **PostgreSQL** support for production scaling
- **Automatic migrations** and seeding

## 🔧 **Development**

### **Available Scripts**
```bash
pnpm run build          # Build the application
pnpm run dev            # Start development server
pnpm run lint           # Run linting
pnpm run typecheck      # Type checking
pnpm run test           # Run tests
```

### **Package Structure**
```
packages/
├── backtesting/        # Strategy backtesting engine
├── bot/               # Core trading bot functionality
├── bot-processor/     # Bot execution engine
├── bot-templates/     # Pre-built trading strategies
├── db/                # Database models and migrations
├── exchanges/         # Exchange integrations
├── indicators/        # Technical analysis indicators
├── logger/            # Logging system
├── prisma/            # Database ORM
├── tools/             # Utility functions
├── trpc/              # API layer
├── tsconfig/          # TypeScript configuration
└── types/             # Type definitions
```

## 📚 **Documentation**

- **[Design System](./DESIGN_SYSTEM.md)** - Complete design guidelines
- **[Vercel Deployment](./VERCEL_DEPLOYMENT.md)** - Deployment guide
- **[API Reference](./docs/api.md)** - API documentation
- **[Contributing](./CONTRIBUTING.md)** - Development guidelines

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:

- **Code Style** and standards
- **Testing** requirements
- **Pull Request** process
- **Issue Reporting** guidelines

## 📄 **License**

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Canza Finance** for the vision and branding
- **OpenTrader** for the original trading platform foundation
- **Open Source Community** for the amazing tools and libraries

---

## 🎉 **Ready to Trade!**

**Your CanzaTrade platform is now live and accessible worldwide!**

- **Visit**: https://canzatrade-mldpx1xv7-chika-umeadi-s-projects.vercel.app
- **Dashboard**: https://canzatrade-mldpx1xv7-chika-umeadi-s-projects.vercel.app/dashboard
- **Start trading** with African currency pairs
- **Manage your portfolio** with professional tools

**Built with ❤️ for African markets and global traders** 🚀
