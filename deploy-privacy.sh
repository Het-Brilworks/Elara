#!/bin/bash

# Elara Privacy Policy Deployment Script
# This script deploys only the privacy policy page to Firebase Hosting

echo "🚀 Starting Elara Privacy Policy Deployment..."
echo ""

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null
then
    echo "❌ Firebase CLI not found!"
    echo "📦 Installing Firebase CLI..."
    npm install -g firebase-tools
fi

# Check if user is logged in
echo "🔐 Checking Firebase authentication..."
firebase projects:list &> /dev/null
if [ $? -ne 0 ]; then
    echo "🔑 Please login to Firebase..."
    firebase login
fi

# Check if .firebaserc exists and has project ID
if [ ! -f ".firebaserc" ]; then
    echo "❌ .firebaserc file not found!"
    exit 1
fi

if grep -q "your-firebase-project-id" ".firebaserc"; then
    echo "⚠️  Warning: Please update your Firebase project ID in .firebaserc"
    echo "   Replace 'your-firebase-project-id' with your actual project ID"
    exit 1
fi

# Deploy hosting
echo "📤 Deploying to Firebase Hosting..."
firebase deploy --only hosting

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Your privacy policy is now live!"
    echo "   Access it at: https://[your-project-id].web.app/privacy-policy.html"
    echo "   Or short URL: https://[your-project-id].web.app/privacy"
    echo ""
    echo "💡 Tip: You can view your site with: firebase open hosting:site"
else
    echo ""
    echo "❌ Deployment failed!"
    echo "   Check the error message above for details"
    exit 1
fi
