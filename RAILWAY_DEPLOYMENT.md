# CanzaTrade Railway Deployment Guide

## Overview

This guide will walk you through deploying the CanzaTrade application to Railway, a modern container platform that makes it easy to deploy and manage applications.

## Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **GitHub Repository**: Your CanzaTrade code should be in a GitHub repository
3. **Railway CLI** (optional): Install with `npm i -g @railway/cli`

## Quick Deployment Steps

### 1. Connect Your Repository

1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your CanzaTrade repository
5. Click "Deploy Now"

### 2. Configure Environment Variables

In your Railway project dashboard, go to the "Variables" tab and add these environment variables:

```bash
# Required Variables
NODE_ENV=production
ADMIN_PASSWORD=canza123
HOST=0.0.0.0
PORT=3000

# Optional Variables
CCXT_VERBOSE=
CUSTOM_STRATEGIES_PATH=
```

**Note**: Railway will automatically set `DATABASE_URL` and `PORT` for you.

### 3. Configure Build Settings

Railway will automatically detect the `Dockerfile.railway` and use it for building your application.

## Detailed Configuration

### Railway Configuration File

The `railway.json` file in your repository configures how Railway builds and deploys your application:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile.railway"
  },
  "deploy": {
    "startCommand": "node dist/standalone.mjs",
    "healthcheckPath": "/health",
    "healthcheckTimeout": 300,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### Dockerfile for Railway

The `Dockerfile.railway` is optimized for Railway deployment:

- **Multi-stage build** for efficient container size
- **Non-root user** for security
- **Health checks** for monitoring
- **Proper signal handling** with dumb-init
- **Production optimizations**

## Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `ADMIN_PASSWORD` | Admin access password | `canza123` |
| `HOST` | Bind address | `0.0.0.0` |
| `PORT` | Application port | `3000` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `CCXT_VERBOSE` | Enable verbose logging | `true` or empty |
| `CUSTOM_STRATEGIES_PATH` | Path to custom strategies | `/app/strategies` |

### Railway Auto-Set Variables

Railway automatically provides these variables:

| Variable | Description |
|----------|-------------|
| `PORT` | Port assigned by Railway |
| `RAILWAY_STATIC_URL` | Static asset URL |
| `RAILWAY_PUBLIC_DOMAIN` | Public domain for your app |

## Database Configuration

### SQLite (Default)

Railway will automatically handle the SQLite database file in the `/app/data` directory.

### PostgreSQL (Recommended for Production)

For better performance and scalability, consider using Railway's PostgreSQL service:

1. **Add PostgreSQL Service**:
   - In your Railway project, click "New Service"
   - Select "Database" → "PostgreSQL"
   - Railway will automatically set `DATABASE_URL`

2. **Update Prisma Schema**:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

3. **Run Migrations**:
   ```bash
   # In Railway shell or locally
   npx prisma migrate deploy
   ```

## Deployment Process

### 1. Automatic Deployment

Railway automatically deploys your application when you push to your main branch.

### 2. Manual Deployment

```bash
# Using Railway CLI
railway up

# Or trigger from dashboard
# Go to your project → Deployments → Deploy Now
```

### 3. Deployment Status

Monitor your deployment in the Railway dashboard:
- **Build Logs**: View build process and any errors
- **Deploy Logs**: Monitor application startup
- **Health Checks**: Ensure your app is running properly

## Monitoring and Logs

### Health Checks

Railway automatically monitors your application using the health check endpoint:

```bash
# Health check URL
https://your-app.railway.app/health
```

### Logs

Access logs in the Railway dashboard:
1. Go to your project
2. Click on your service
3. Go to "Logs" tab
4. View real-time application logs

### Metrics

Railway provides:
- **CPU Usage**: Monitor resource consumption
- **Memory Usage**: Track memory allocation
- **Network**: Monitor incoming/outgoing traffic
- **Custom Metrics**: Add your own metrics

## Troubleshooting

### Common Issues

#### 1. Build Failures

**Problem**: Docker build fails
**Solution**: Check build logs for missing dependencies or syntax errors

#### 2. Application Won't Start

**Problem**: App crashes on startup
**Solution**: 
- Check environment variables
- Verify database connection
- Review application logs

#### 3. Health Check Failures

**Problem**: Health checks failing
**Solution**:
- Ensure your app responds to `/health` endpoint
- Check if the app is binding to the correct port
- Verify the app is actually running

### Debug Commands

```bash
# Access Railway shell
railway shell

# View environment variables
railway variables

# Check service status
railway status

# View recent deployments
railway deployments
```

## Scaling and Performance

### Auto-scaling

Railway can automatically scale your application based on traffic:
- **CPU-based scaling**: Scale when CPU usage increases
- **Memory-based scaling**: Scale when memory usage is high
- **Custom metrics**: Scale based on your own metrics

### Resource Allocation

Configure resources in your Railway service:
- **CPU**: Allocate CPU cores
- **Memory**: Set memory limits
- **Storage**: Configure persistent storage

## Security Considerations

### Environment Variables

- **Never commit secrets** to your repository
- **Use Railway's encrypted variables** for sensitive data
- **Rotate passwords** regularly

### Network Security

- **HTTPS**: Railway automatically provides SSL certificates
- **CORS**: Configure CORS policies for your frontend
- **Rate Limiting**: Implement rate limiting for API endpoints

### Container Security

- **Non-root user**: The Dockerfile runs as a non-root user
- **Minimal base image**: Uses Alpine Linux for smaller attack surface
- **Regular updates**: Keep base images updated

## Custom Domains

### Adding Custom Domain

1. Go to your Railway project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

### SSL Certificates

Railway automatically provides SSL certificates for all domains.

## Backup and Recovery

### Database Backups

For PostgreSQL:
- Railway automatically creates daily backups
- Manual backups available in dashboard
- Point-in-time recovery supported

For SQLite:
- Database file is stored in `/app/data`
- Consider implementing backup scripts

### Application Recovery

- **Rollback**: Easily rollback to previous deployments
- **Blue-green deployment**: Deploy new versions without downtime
- **Health checks**: Automatic rollback on health check failures

## Cost Optimization

### Resource Management

- **Right-size resources**: Don't over-allocate CPU/memory
- **Auto-scaling**: Use auto-scaling to handle traffic spikes
- **Monitoring**: Monitor usage to identify optimization opportunities

### Railway Pricing

- **Pay-per-use**: Only pay for resources you actually use
- **Free tier**: Available for development and testing
- **Team plans**: Discounts for teams and organizations

## Best Practices

### 1. Environment Management

- Use different environments for dev/staging/prod
- Never use production credentials in development
- Document all environment variables

### 2. Deployment Strategy

- Use feature branches for development
- Test in staging before production
- Implement automated testing in CI/CD

### 3. Monitoring

- Set up alerts for critical metrics
- Monitor application performance
- Track business metrics

### 4. Security

- Regular security audits
- Keep dependencies updated
- Implement proper authentication

## Support and Resources

### Railway Documentation

- [Railway Docs](https://docs.railway.app/)
- [Railway Community](https://community.railway.app/)
- [Railway Discord](https://discord.gg/railway)

### CanzaTrade Support

- Check the main README.md for application-specific help
- Review DESIGN_SYSTEM.md for UI/UX guidance
- Check CONTRIBUTING.md for development guidelines

## Conclusion

Railway provides a robust, scalable platform for deploying CanzaTrade. With automatic deployments, built-in monitoring, and easy scaling, you can focus on building great trading features while Railway handles the infrastructure.

For any deployment issues, check the Railway logs and refer to this guide. The platform is designed to be developer-friendly, so most issues can be resolved quickly with the information provided here.
