# Firebase Hosting Deployment Guide

This guide will help you deploy the Elara privacy policy page to Firebase Hosting.

## Prerequisites

1. Firebase CLI installed globally:

```bash
npm install -g firebase-tools
```

2. Firebase project set up (you should already have this for your mobile app)

## Setup Steps

### 1. Login to Firebase

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

### 2. Update Firebase Project ID

Open the `.firebaserc` file and replace `your-firebase-project-id` with your actual Firebase project ID.

You can find your project ID in:

- Firebase Console > Project Settings
- Or run: `firebase projects:list`

Example `.firebaserc`:

```json
{
  "projects": {
    "default": "elara-app-12345"
  }
}
```

### 3. Initialize Firebase Hosting (Optional - Skip if already done)

If you haven't initialized Firebase Hosting before:

```bash
firebase init hosting
```

Select:

- Use existing project
- Public directory: `public`
- Configure as single-page app: No
- Don't overwrite existing files

### 4. Deploy to Firebase Hosting

Deploy only the hosting (privacy policy page):

```bash
firebase deploy --only hosting
```

Or to deploy just a specific file:

```bash
firebase deploy --only hosting:privacy-policy.html
```

## Access Your Privacy Policy

After deployment, your privacy policy will be available at:

- **Main URL:** `https://your-project-id.web.app/privacy-policy.html`
- **Short URL:** `https://your-project-id.web.app/privacy` (thanks to rewrite rules)
- **Custom Domain:** If you have a custom domain configured

## File Structure

```
Elara/
├── public/
│   ├── index.html           # Landing page
│   └── privacy-policy.html  # Privacy policy page
├── firebase.json            # Firebase hosting configuration
└── .firebaserc             # Firebase project reference
```

## Viewing Deployment Status

Check your deployment status:

```bash
firebase hosting:channel:list
```

View your live site:

```bash
firebase open hosting:site
```

## Rolling Back (if needed)

To rollback to a previous version:

```bash
firebase hosting:rollback
```

## Custom Domain (Optional)

To set up a custom domain:

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Wait for SSL certificate provisioning (can take up to 24 hours)

## Troubleshooting

### Error: Not logged in

```bash
firebase logout
firebase login
```

### Error: No project ID

Make sure `.firebaserc` has the correct project ID.

### Error: Permission denied

Make sure your Google account has proper permissions for the Firebase project.

## Important Notes

- The privacy policy is now accessible via web and can be linked from your mobile app
- You can update the content anytime by editing `public/privacy-policy.html` and redeploying
- Hosting is free for up to 10GB storage and 360MB/day transfer on the Spark (free) plan
- The page is responsive and works on all devices

## Update Privacy Policy

To update the privacy policy:

1. Edit `public/privacy-policy.html`
2. Run: `firebase deploy --only hosting`
3. Changes will be live in seconds

## Support

For Firebase Hosting documentation:
https://firebase.google.com/docs/hosting

For issues with deployment, check:

- Firebase Console > Hosting > Usage
- View deployment history and logs
