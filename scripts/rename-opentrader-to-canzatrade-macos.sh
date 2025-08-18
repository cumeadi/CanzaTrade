#!/bin/bash

# CanzaTrade Renaming Script for macOS
# This script renames all OpenTrader references to CanzaTrade

echo "🚀 Starting OpenTrader to CanzaTrade renaming process..."

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

# 1. Replace package names in package.json files
echo "📦 Updating package names..."
replace_text "@opentrader/" "@canzatrade/" "package.json"

# 2. Replace in tsconfig.json files
echo "⚙️  Updating TypeScript configurations..."
replace_text "@opentrader/" "@canzatrade/" "tsconfig.json"

# 3. Replace in .changeset files
echo "📝 Updating changeset files..."
replace_text "@opentrader/" "@canzatrade/" "*.json"

# 4. Replace in source code files
echo "💻 Updating source code references..."
replace_text "@opentrader/" "@canzatrade/" "*.ts"
replace_text "@opentrader/" "@canzatrade/" "*.tsx"
replace_text "@opentrader/" "@canzatrade/" "*.js"
replace_text "@opentrader/" "@canzatrade/" "*.jsx"

# 5. Replace in documentation files
echo "📚 Updating documentation..."
replace_text "@opentrader/" "@canzatrade/" "*.md"
replace_text "OpenTrader" "CanzaTrade" "*.md"
replace_text "opentrader" "canzatrade" "*.md"

# 6. Replace in import statements and other references
echo "🔗 Updating import statements..."
replace_text "from '@opentrader/" "from '@canzatrade/" "*.ts"
replace_text "from '@opentrader/" "from '@canzatrade/" "*.tsx"
replace_text "from '@opentrader/" "from '@canzatrade/" "*.js"
replace_text "import '@opentrader/" "import '@canzatrade/" "*.ts"
replace_text "import '@opentrader/" "import '@canzatrade/" "*.tsx"
replace_text "import '@opentrader/" "import '@canzatrade/" "*.js"

# 7. Replace in README and other text files
echo "📖 Updating text content..."
replace_text "OpenTrader" "CanzaTrade" "*.md"
replace_text "opentrader" "canzatrade" "*.md"
replace_text "Open-Trader" "Canza-Trade" "*.md"

echo ""
echo "🎉 Renaming process completed!"
echo ""
echo "📋 Next steps:"
echo "1. Review the changes: git diff"
echo "2. Test the build: moon run :build"
echo "3. Commit the changes: git add . && git commit -m 'Rename OpenTrader to CanzaTrade'"
echo "4. Push to trigger Railway deployment"
echo ""
echo "⚠️  Note: You may need to manually review some files for edge cases"
echo "🔍 Check for any remaining 'opentrader' references: grep -r 'opentrader' . --exclude-dir=node_modules --exclude-dir=.git"
