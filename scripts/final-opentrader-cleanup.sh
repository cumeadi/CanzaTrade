#!/bin/bash

# Final OpenTrader Cleanup Script
# This script handles remaining OpenTrader references

echo "🧹 Starting final OpenTrader cleanup..."

# Function to replace text in files (macOS compatible)
replace_text() {
    local search="$1"
    local replace="$2"
    local file_pattern="$3"
    
    echo "🔄 Replacing '$search' with '$replace' in $file_pattern files..."
    
    # Use find and sed with macOS-compatible syntax
    find . -type f -name "$file_pattern" -exec sed -i '' "s|$search|$replace|g" {} \;
    
    echo "✅ Completed replacement for $file_pattern files"
}

# 1. Update CLI descriptions and messages
echo "📝 Updating CLI messages..."
replace_text "CLI for OpenTrader" "CLI for CanzaTrade" "*.ts"
replace_text "Output the OpenTrader version" "Output the CanzaTrade version" "*.ts"
replace_text "OpenTrader already running" "CanzaTrade already running" "*.ts"
replace_text "OpenTrader process not started" "CanzaTrade process not started" "*.ts"
replace_text "OpenTrader daemon started" "CanzaTrade daemon started" "*.ts"
replace_text "OpenTrader started as a daemon" "CanzaTrade started as a daemon" "*.ts"
replace_text "OpenTrader already stopped" "CanzaTrade already stopped" "*.ts"
replace_text "OpenTrader has been forcefully stopped" "CanzaTrade has been forcefully stopped" "*.ts"
replace_text "OpenTrader has been gracefully stopped" "CanzaTrade has been gracefully stopped" "*.ts"
replace_text "Failed to stop OpenTrader process" "Failed to stop CanzaTrade process" "*.ts"
replace_text "opentrader down --force" "canzatrade down --force" "*.ts"
replace_text "OpenTrader UI:" "CanzaTrade UI:" "*.ts"

# 2. Update app directory references
echo "📁 Updating app directory references..."
replace_text ".opentrader" ".canzatrade" "*.ts"
replace_text "opentrader down" "canzatrade down" "*.ts"

# 3. Update email and display names
echo "👤 Updating contact information..."
replace_text "onboarding@opentrader.pro" "onboarding@canzatrade.com" "*.ts"
replace_text "displayName: \"OpenTrader\"" "displayName: \"CanzaTrade\"" "*.ts"

# 4. Update repository URLs (optional - you might want to keep these as references)
echo "🔗 Updating repository references..."
replace_text "https://github.com/bludnic/opentrader" "https://github.com/canza-finance/canzatrade" "*.ts"

# 5. Update TODO comments
echo "📝 Updating TODO comments..."
replace_text "import { z } from \"opentrader\"" "import { z } from \"canzatrade\"" "*.ts"

# 6. Update package.json scripts
echo "📦 Updating package.json scripts..."
replace_text "opentrader" "canzatrade" "package.json"

echo ""
echo "🎉 Final cleanup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Delete the old pnpm-lock.yaml: rm pnpm-lock.yaml"
echo "2. Regenerate dependencies: pnpm install"
echo "3. Test the build: moon run :build"
echo "4. Commit the changes: git add . && git commit -m 'Complete OpenTrader to CanzaTrade rename'"
echo "5. Push to trigger Railway deployment"
