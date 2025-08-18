# 🚨 Railway Deployment Troubleshooting

This guide helps resolve common issues when deploying CanzaTrade to Railway.

## ❌ Common Build Errors

### 1. Moon Docker Scaffold Failure

**Error:**
```
✕ [skeleton 2/2] RUN moon docker scaffold cli
process "/bin/sh -c moon docker scaffold cli" did not complete successfully: exit code: 1
```

**Cause:** The `moon docker scaffold cli` command is failing due to Moon toolchain issues in Docker.

**Solution:** Use the simplified Dockerfile instead:

1. **Update Railway Configuration:**
   ```json
   {
     "build": {
       "builder": "DOCKERFILE",
       "dockerfilePath": "Dockerfile.railway.simple"
     }
   }
   ```

2. **Alternative: Use the fixed Dockerfile:**
   ```json
   {
     "build": {
       "builder": "DOCKERFILE",
       "dockerfilePath": "Dockerfile.railway"
     }
   }
   ```

### 2. Node.js Version Mismatch

**Error:**
```
WARN  Unsupported engine: wanted: {"node":"~22.12"} (current: {"node":"v18.20.8","pnpm":"10.12.1"})
```

**Cause:** The project requires Node.js 22.12 but Docker is using Node.js 18.

**Solution:** Update Dockerfile to use Node.js 22:

```dockerfile
# Change from:
FROM node:18-alpine AS base

# To:
FROM node:22-alpine AS base
```

### 3. Lockfile Mismatch

**Error:**
```
ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date
```

**Cause:** The pnpm-lock.yaml file is out of sync with package.json files.

**Solution:** Remove `--frozen-lockfile` flag:

```dockerfile
# Change from:
RUN pnpm install --frozen-lockfile

# To:
RUN pnpm install
```

### 4. Build Script Not Found

**Error:**
```
/bin/sh: 1: pnpm: not found
```

**Solution:** Ensure the Dockerfile installs pnpm:
```dockerfile
RUN npm install -g pnpm
```

### 5. Moon Command Not Found

**Error:**
```
/bin/sh: 1: moon: not found
```

**Solution:** Ensure Moon is installed in the Dockerfile:
```dockerfile
RUN npm install -g @moonrepo/cli@1.37.2
```

## 🔧 Alternative Deployment Methods

### Method 1: Use Simplified Dockerfile (Recommended)

The `Dockerfile.railway.simple` avoids Moon complexity:

```dockerfile
# Simple approach without Moon docker scaffold
FROM node:22-alpine AS base
# ... rest of the simplified Dockerfile
```

### Method 2: Use Fixed Dockerfile

The updated `Dockerfile.railway` fixes the scaffold issue:

```dockerfile
# Fixed approach with proper dependency handling
FROM node:22-alpine AS base
# ... rest of the fixed Dockerfile
```

### Method 3: Use Railway's Auto-Detect

Let Railway automatically detect your project:

1. Remove `railway.json` temporarily
2. Let Railway auto-detect the project type
3. Railway will use its default Node.js build process

## 🚀 Quick Fix Steps

### Step 1: Update Railway Configuration

```bash
# Edit railway.json to use the simple Dockerfile
{
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile.railway.simple"
  }
}
```

### Step 2: Redeploy

```bash
# Using Railway CLI
railway up

# Or trigger from Railway dashboard
# Go to your project → Deployments → Deploy Now
```

### Step 3: Monitor Build Logs

Watch the build process in Railway dashboard:
- **Build Logs**: Check for any new errors
- **Deploy Logs**: Monitor application startup
- **Health Checks**: Ensure `/health` endpoint works

## 🔍 Debugging Build Issues

### Check Local Build

Test the build process locally first:

```bash
# Test Moon build
moon run :build

# Test pnpm build
pnpm run build

# Test Docker build
docker build -f Dockerfile.railway.simple -t canzatrade .
```

### Verify Dependencies

Ensure all dependencies are properly installed:

```bash
# Check pnpm installation
pnpm --version

# Check Moon installation
moon --version

# Check Node.js version
node --version
```

### Check File Structure

Verify the project structure matches expectations:

```bash
# Check if all package.json files exist
ls packages/*/package.json
ls packages/*/*/package.json

# Check if source files exist
ls app/src/
ls packages/*/src/
```

## 🐳 Docker-Specific Issues

### Alpine Linux Compatibility

**Problem:** Some Node.js packages may not work on Alpine Linux.

**Solution:** Use a different base image:

```dockerfile
# Instead of node:22-alpine
FROM node:22-slim
# or
FROM node:22-bullseye
```

### Permission Issues

**Problem:** File permission errors during build.

**Solution:** Ensure proper ownership:

```dockerfile
# Set proper ownership
RUN chown -R nextjs:nodejs /app
USER nextjs
```

### Memory Issues

**Problem:** Build fails due to insufficient memory.

**Solution:** 
1. **Increase Railway build memory** in project settings
2. **Optimize Dockerfile** to use less memory
3. **Use multi-stage builds** to reduce final image size

## 📋 Pre-Deployment Checklist

Before deploying to Railway, ensure:

- [ ] **Local build works**: `moon run :build` succeeds
- [ ] **Docker build works**: `docker build` succeeds locally
- [ ] **Dependencies are correct**: All package.json files exist
- [ ] **Environment variables**: Set in Railway dashboard
- [ ] **Health endpoint**: `/health` responds correctly
- [ ] **Node.js version**: Matches project requirements (22.12)
- [ ] **Lockfile sync**: pnpm-lock.yaml is up to date

## 🆘 Getting Help

### Railway Support

- **Railway Docs**: [docs.railway.app](https://docs.railway.app/)
- **Railway Discord**: [discord.gg/railway](https://discord.gg/railway)
- **Railway Community**: [community.railway.app](https://community.railway.app/)

### CanzaTrade Support

- **Issues**: Create GitHub issue with build logs
- **Documentation**: Check DESIGN_SYSTEM.md and RAILWAY_DEPLOYMENT.md
- **Community**: Ask in Railway Discord

### Debug Information

When reporting issues, include:

1. **Full build logs** from Railway
2. **Dockerfile version** being used
3. **Railway configuration** (railway.json)
4. **Local build results**
5. **Environment details** (Node.js version, OS, etc.)

## 🔄 Fallback Deployment

If all else fails, use Railway's auto-detection:

1. **Remove custom Dockerfile** temporarily
2. **Let Railway auto-detect** Node.js project
3. **Use Railway's default** build process
4. **Manually configure** environment variables
5. **Deploy and test** basic functionality

## 📚 Additional Resources

- **[Railway Deployment Guide](RAILWAY_DEPLOYMENT.md)** - Comprehensive deployment instructions
- **[Design System Guide](DESIGN_SYSTEM.md)** - UI/UX documentation
- **[Quick Start Guide](RAILWAY_QUICKSTART.md)** - 3-step deployment
- **[Railway Official Docs](https://docs.railway.app/)** - Platform documentation

---

**🎯 Most issues can be resolved by using the simplified Dockerfile and following the troubleshooting steps above.**
