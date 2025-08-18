// CanzaTrade Dashboard JavaScript
// Professional Trading Platform for Canza Finance

(function() {
    'use strict';

    // CanzaTrade Configuration
    const CANZA_CONFIG = {
        refreshInterval: 5000, // 5 seconds
        defaultCurrency: 'NGN',
        supportedPairs: ['NGN/USDT', 'KES/USDT', 'GHS/USDT', 'ZAR/USDT', 'EGP/USDT'],
        apiEndpoints: {
            prices: '/api/prices',
            portfolio: '/api/portfolio',
            trades: '/api/trades',
            bots: '/api/bots'
        }
    };

    // Utility Functions
    const Utils = {
        formatCurrency: function(amount, currency = 'USD') {
            const formatters = {
                'USD': new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
                'NGN': new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }),
                'KES': new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }),
                'GHS': new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS' }),
                'ZAR': new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }),
                'EGP': new Intl.NumberFormat('en-EG', { style: 'currency', currency: 'EGP' })
            };
            
            return formatters[currency] ? formatters[currency].format(amount) : amount.toFixed(2);
        },

        formatPercentage: function(value) {
            const sign = value >= 0 ? '+' : '';
            return `${sign}${value.toFixed(2)}%`;
        },

        animateValue: function(element, start, end, duration = 1000) {
            const startTime = performance.now();
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const current = start + (end - start) * progress;
                element.textContent = Utils.formatCurrency(current);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        },

        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    };

    // Portfolio Management
    class PortfolioManager {
        constructor() {
            this.portfolio = {
                totalValue: 2847392.50,
                change: 45230.75,
                changePercent: 1.62
            };
            this.init();
        }

        init() {
            this.updateDisplay();
            this.startAutoRefresh();
        }

        updateDisplay() {
            const valueElement = document.querySelector('.portfolio-value');
            const changeElement = document.querySelector('.portfolio-change');
            
            if (valueElement) {
                valueElement.textContent = Utils.formatCurrency(this.portfolio.totalValue);
            }
            
            if (changeElement) {
                const sign = this.portfolio.change >= 0 ? '+' : '';
                changeElement.textContent = `${sign}${Utils.formatCurrency(this.portfolio.change)} (${Utils.formatPercentage(this.portfolio.changePercent)})`;
                changeElement.className = `portfolio-change ${this.portfolio.change >= 0 ? 'profit' : 'loss'}`;
            }
        }

        startAutoRefresh() {
            setInterval(() => {
                this.simulateUpdate();
            }, CANZA_CONFIG.refreshInterval);
        }

        simulateUpdate() {
            // Simulate portfolio changes for demo purposes
            const change = (Math.random() - 0.5) * 10000;
            this.portfolio.change += change;
            this.portfolio.totalValue += change;
            this.portfolio.changePercent = (this.portfolio.change / (this.portfolio.totalValue - this.portfolio.change)) * 100;
            
            this.updateDisplay();
        }
    }

    // Watchlist Management
    class WatchlistManager {
        constructor() {
            this.watchlist = [
                { pair: 'NGN/USDT', name: 'Nigerian Naira', price: 1245.67, change: 2.34, symbol: '₦' },
                { pair: 'KES/USDT', name: 'Kenyan Shilling', price: 158.92, change: -0.87, symbol: '₵' },
                { pair: 'GHS/USDT', name: 'Ghanaian Cedi', price: 12.45, change: 1.12, symbol: '₵' },
                { pair: 'ZAR/USDT', name: 'South African Rand', price: 18.67, change: 0.23, symbol: 'R' },
                { pair: 'EGP/USDT', name: 'Egyptian Pound', price: 31.25, change: 3.45, symbol: '£' }
            ];
            this.init();
        }

        init() {
            this.updateDisplay();
            this.startPriceUpdates();
        }

        updateDisplay() {
            const watchlistContainer = document.querySelector('.watchlist');
            if (!watchlistContainer) return;

            const items = watchlistContainer.querySelectorAll('.watchlist-item');
            items.forEach((item, index) => {
                if (this.watchlist[index]) {
                    const pair = this.watchlist[index];
                    const priceElement = item.querySelector('.profit, .loss, .neutral');
                    const changeElement = item.querySelector('.profit, .loss, .neutral');
                    
                    if (priceElement) {
                        priceElement.textContent = `${pair.symbol}${pair.price.toFixed(2)}`;
                        priceElement.className = pair.change >= 0 ? 'profit' : 'loss';
                    }
                    
                    if (changeElement && changeElement !== priceElement) {
                        changeElement.textContent = `${pair.change >= 0 ? '+' : ''}${pair.change.toFixed(2)}%`;
                        changeElement.className = pair.change >= 0 ? 'profit' : 'loss';
                    }
                }
            });
        }

        startPriceUpdates() {
            setInterval(() => {
                this.simulatePriceChanges();
            }, CANZA_CONFIG.refreshInterval);
        }

        simulatePriceChanges() {
            this.watchlist.forEach(pair => {
                const change = (Math.random() - 0.5) * 2; // ±1% change
                pair.change += change;
                pair.price *= (1 + change / 100);
            });
            
            this.updateDisplay();
        }
    }

    // Bot Management
    class BotManager {
        constructor() {
            this.bots = [
                { name: 'NGN Grid Bot', pair: 'NGN/USDT', status: 'active', performance: '+12.5%' },
                { name: 'KES DCA Bot', pair: 'KES/USDT', status: 'active', performance: '+8.3%' },
                { name: 'GHS RSI Bot', pair: 'GHS/USDT', status: 'paused', performance: '+5.7%' },
                { name: 'ZAR Grid Bot', pair: 'ZAR/USDT', status: 'stopped', performance: '-2.1%' }
            ];
            this.init();
        }

        init() {
            this.updateDisplay();
        }

        updateDisplay() {
            const botContainer = document.querySelector('.card h4:contains("Active Bots")');
            if (!botContainer) return;

            const botList = botContainer.parentElement.querySelector('.bot-status');
            if (!botList) return;

            // Update bot statuses
            this.bots.forEach((bot, index) => {
                const statusElement = botList[index];
                if (statusElement) {
                    statusElement.textContent = bot.status;
                    statusElement.className = `bot-status ${bot.status}`;
                }
            });
        }

        getBotStatus(botName) {
            const bot = this.bots.find(b => b.name === botName);
            return bot ? bot.status : 'unknown';
        }
    }

    // Order Entry Management
    class OrderEntryManager {
        constructor() {
            this.init();
        }

        init() {
            this.bindEvents();
            this.setupCalculations();
        }

        bindEvents() {
            const amountInput = document.querySelector('input[placeholder="0.00"]');
            const priceInput = document.querySelector('input[placeholder="1,245.67"]');
            const totalInput = document.querySelector('input[readonly]');

            if (amountInput && priceInput && totalInput) {
                const calculateTotal = Utils.debounce(() => {
                    const amount = parseFloat(amountInput.value) || 0;
                    const price = parseFloat(priceInput.value.replace(/,/g, '')) || 0;
                    const total = amount * price;
                    
                    if (total > 0) {
                        totalInput.value = Utils.formatCurrency(total, 'NGN');
                    } else {
                        totalInput.value = 'Calculated...';
                    }
                }, 300);

                amountInput.addEventListener('input', calculateTotal);
                priceInput.addEventListener('input', calculateTotal);
            }
        }

        setupCalculations() {
            // Add any additional calculation logic here
        }
    }

    // Market Data Manager
    class MarketDataManager {
        constructor() {
            this.marketData = {
                'NGN/USDT': {
                    high: 1267.89,
                    low: 1198.45,
                    volume: '45.2M',
                    marketCap: '2.1T'
                }
            };
            this.init();
        }

        init() {
            this.updateDisplay();
        }

        updateDisplay() {
            // Update market information display
            const marketInfo = document.querySelector('.card h4:contains("Market Information")');
            if (!marketInfo) return;

            const dataElements = marketInfo.parentElement.querySelectorAll('div > div:last-child');
            if (dataElements.length >= 4) {
                const pair = 'NGN/USDT';
                const data = this.marketData[pair];
                
                if (data) {
                    dataElements[0].textContent = `₦${data.high.toFixed(2)}`;
                    dataElements[1].textContent = `₦${data.low.toFixed(2)}`;
                    dataElements[2].textContent = `₦${data.volume}`;
                    dataElements[3].textContent = `₦${data.marketCap}`;
                }
            }
        }
    }

    // Main Application Class
    class CanzaTradeApp {
        constructor() {
            this.portfolio = null;
            this.watchlist = null;
            this.bots = null;
            this.orderEntry = null;
            this.marketData = null;
            this.init();
        }

        init() {
            // Initialize all managers
            this.portfolio = new PortfolioManager();
            this.watchlist = new WatchlistManager();
            this.bots = new BotManager();
            this.orderEntry = new OrderEntryManager();
            this.marketData = new MarketDataManager();

            // Add global event listeners
            this.bindGlobalEvents();
            
            console.log('🚀 CanzaTrade initialized successfully');
        }

        bindGlobalEvents() {
            // Handle theme switching (future feature)
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 't') {
                    this.toggleTheme();
                }
            });

            // Handle responsive layout changes
            window.addEventListener('resize', Utils.debounce(() => {
                this.handleResize();
            }, 250));
        }

        toggleTheme() {
            // Future theme switching functionality
            console.log('Theme toggle requested');
        }

        handleResize() {
            // Handle responsive layout adjustments
            const width = window.innerWidth;
            const dashboard = document.querySelector('.dashboard-grid');
            
            if (dashboard) {
                if (width <= 768) {
                    dashboard.style.gridTemplateColumns = '1fr';
                } else if (width <= 1200) {
                    dashboard.style.gridTemplateColumns = '1fr 1fr';
                } else {
                    dashboard.style.gridTemplateColumns = '1fr 2fr 1fr';
                }
            }
        }
    }

    // Initialize CanzaTrade when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new CanzaTradeApp();
        });
    } else {
        new CanzaTradeApp();
    }

    // Export for global access (if needed)
    window.CanzaTrade = {
        Utils,
        PortfolioManager,
        WatchlistManager,
        BotManager,
        OrderEntryManager,
        MarketDataManager,
        CanzaTradeApp
    };

})();
