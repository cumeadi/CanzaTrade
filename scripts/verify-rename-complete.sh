#!/bin/bash

# Verification script to ensure OpenTrader to CanzaTrade rename is complete

echo "🔍 Verifying OpenTrader to CanzaTrade rename completion..."

# Function to check for remaining references
check_references() {
    local pattern="$1"
    local description="$2"
    
    echo "Checking for $description..."
    local count=$(grep -r "$pattern" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.moon --exclude="*.md" --exclude="*.sh" 2>/dev/null | wc -l | tr -d ' ')
    
    if [ "$count" -eq 0 ]; then
        echo "✅ No $description found"
    else
        echo "❌ Found $count $description:"
        grep -r "$pattern" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.moon --exclude="*.md" --exclude="*.sh" 2>/dev/null | head -5
        if [ "$count" -gt 5 ]; then
            echo "... and $((count - 5)) more"
        fi
    fi
    echo ""
}

# Check for various OpenTrader references
check_references "@opentrader/" "package references"
check_references "OpenTrader" "OpenTrader text references"
check_references "opentrader" "lowercase opentrader references"
check_references "onboarding@opentrader.pro" "old email addresses"

# Check for CanzaTrade references to ensure they exist
echo "Checking for CanzaTrade references..."
canza_count=$(grep -r "@canzatrade/" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.moon 2>/dev/null | wc -l | tr -d ' ')
echo "✅ Found $canza_count @canzatrade/ references"

# Check package.json files specifically
echo ""
echo "📦 Checking package.json files for consistency..."
for pkg in packages/*/package.json app/package.json; do
    if [ -f "$pkg" ]; then
        name=$(grep '"name":' "$pkg" | head -1 | sed 's/.*"name": *"\([^"]*\)".*/\1/')
        if [[ "$name" == @opentrader/* ]]; then
            echo "❌ $pkg still has old name: $name"
        elif [[ "$name" == @canzatrade/* ]] || [[ "$name" == "canzatrade" ]]; then
            echo "✅ $pkg has correct name: $name"
        else
            echo "⚠️  $pkg has unexpected name: $name"
        fi
    fi
done

# Check for any remaining issues
echo ""
echo "🔍 Final verification..."
remaining=$(grep -r "@opentrader\|OpenTrader\|opentrader" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.moon --exclude="*.md" --exclude="*.sh" --exclude="RENAME_COMPLETION_SUMMARY.md" 2>/dev/null | wc -l | tr -d ' ')

if [ "$remaining" -eq 0 ]; then
    echo "🎉 All OpenTrader references have been successfully renamed to CanzaTrade!"
    echo "✅ Ready for Railway deployment"
else
    echo "❌ Found $remaining remaining references that need attention"
    echo "Please review and fix these before deploying to Railway"
fi

echo ""
echo "📋 Next steps:"
echo "1. If all checks pass, commit your changes"
echo "2. Push to trigger Railway deployment"
echo "3. Monitor the build logs for any remaining issues"
