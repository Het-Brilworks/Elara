# Elara

A calming, personalized wellness app that supports women through their **fertility**, **prenatal**, and **postnatal** journey. Elara offers guided yoga sessions, meditation, mood/journal tracking, baby-growth insights, and a smart, stage-aware experience — all wrapped in a soft, intuitive interface.

> Repository layout: this repo contains the **Elara mobile app** (Expo/React Native, at the repo root) and a **standalone account-deletion web page** (`account-delete-page/`) required for Google Play Store compliance.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Core Functionality](#core-functionality)
- [Database Structure (Firestore)](#database-structure-firestore)
- [Setup Guide](#setup-guide)
  - [Prerequisites](#prerequisites)
  - [1. Clone & Install](#1-clone--install)
  - [2. Firebase Project Setup](#2-firebase-project-setup)
  - [3. Environment Variables](#3-environment-variables)
  - [4. Run the App](#4-run-the-app)
  - [5. Building & Submitting (EAS)](#5-building--submitting-eas)
- [Account Deletion Page](#account-deletion-page)
- [Available Scripts](#available-scripts)
- [Design System](#design-system)
- [License](#license)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Expo](https://expo.dev) (SDK 54) + React Native 0.81 |
| Language | TypeScript |
| Navigation | [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing) |
| Backend / Auth / DB | [Firebase](https://firebase.google.com/) — `@react-native-firebase/auth`, `@react-native-firebase/firestore` |
| Server State | [TanStack React Query](https://tanstack.com/query) |
| Icons | `lucide-react-native`, `@expo/vector-icons` |
| Animations | `react-native-reanimated`, `react-native-worklets` |
| Storage | `@react-native-async-storage/async-storage` |
| Build/Release | [EAS Build & Submit](https://docs.expo.dev/eas/) |

---

## Project Structure

```
Elara/
├── app/                          # Expo Router file-based routes
│   ├── index.tsx                 # Entry redirect (auth/profile-completion aware)
│   ├── wellcome.tsx               # Welcome / landing screen
│   ├── auth.tsx                  # Login + Sign up screen
│   ├── onboarding.tsx            # Journey stage selection (fertility/prenatal/postnatal)
│   ├── providers.tsx             # React Query provider
│   ├── _layout.tsx               # Root stack layout
│   └── (user)/                   # Authenticated route group
│       ├── _layout.tsx           # Auth guard — redirects to /auth if signed out
│       └── (tabs)/                # Bottom tab navigator
│           ├── _layout.tsx        # Tab bar (Home, Yoga, Baby, Meditation, Profile)
│           ├── home.tsx           # Dashboard: mood, journal, streaks
│           ├── yoga.tsx           # Yoga session library
│           ├── baby.tsx           # Baby growth/week tracker (prenatal only)
│           ├── meditation.tsx     # Meditation hub
│           ├── tracker.tsx        # Health tracker (hidden tab, screen exists)
│           └── profile.tsx        # User profile & settings
├── components/                   # Reusable UI components
├── constants/                    # colors.ts, theme.ts (design tokens)
├── Firebase/
│   ├── firebase.ts               # Firebase Web SDK init (env-driven config)
│   ├── services/                 # Firestore/Auth data-access functions
│   │   ├── AuthService.ts        # login, register, logout, profile completion
│   │   ├── UserService.ts        # user profile CRUD + realtime subscription
│   │   └── JournalService.ts     # mood/journal entries, streak calculation
│   └── hooks/                    # React Query hooks wrapping the services above
│       ├── useAuth.ts
│       ├── useUser.ts
│       └── useJournal.ts
├── assets/images/                # App icons, splash, onboarding illustrations
├── design/                       # Exported design context (theme JSON, mockups)
├── account-delete-page/          # Standalone Vite web app for account deletion
├── app.json                      # Expo app config (bundle IDs, plugins, icons)
├── eas.json                      # EAS Build/Submit profiles
└── google-services.json          # Firebase Android config (not committed with real values in forks)
```

---

## Core Functionality

### 1. Onboarding & Authentication
- **Welcome screen** (`wellcome.tsx`) — branded landing page with "Get Started" / "Log In" entry points.
- **Auth screen** (`auth.tsx`) — combined Sign Up / Login form (email + password) backed by Firebase Auth. On registration, a corresponding `users/{uid}` Firestore document is created.
- **Journey onboarding** (`onboarding.tsx`) — first-time users pick their stage: **Fertility Support**, **Prenatal Yoga**, or **Postnatal Recovery**. This selection is saved to `selectedJourney` and flips `isProfileCompleted` to `true`.
- **Routing guard** — `app/index.tsx` inspects auth state + profile completion to redirect to `/wellcome`, `/onboarding`, or `/(user)/(tabs)/home`. `app/(user)/_layout.tsx` protects the authenticated route group and bounces signed-out users back to `/auth`.

### 2. Home Dashboard (`home.tsx`)
- Personalized greeting (time-of-day aware) with avatar/initials.
- Current journey + week indicator (e.g. "Your Prenatal Journey · Week 24").
- "Today's Recommended Session" card.
- **Mood check-in** — one-tap logging of daily mood (Joyful, Angry, Lazy, Happy), persisted per calendar day.
- **Daily journal** — free-text notes saved alongside the day's mood.
- **Weekly streak tracker** — visualizes the current Sun–Sat week with checkmarks for days a journal/mood entry exists, plus current streak and personal-best streak counters.

### 3. Yoga Library (`yoga.tsx`)
- Filterable by stage (All Stages, Trimester 1/2/3) via `FilterChip`.
- "Recommended for You" and "Second Trimester Focus" curated sections using `YogaSessionCard` / `SmallYogaCard`.
- Floating "Ask Expert" action button.

### 4. Baby Growth (`baby.tsx`, prenatal journey only)
- Displays current pregnancy week and a size-comparison message.
- Daily hydration/health tips and fetal development notes.
- Tab is conditionally shown only when `selectedJourney === "prenatal"`.

### 5. Meditation Hub (`meditation.tsx`)
- Landing surface for guided meditation content (placeholder pending content integration).

### 6. Health Tracker (`tracker.tsx`)
- Symptom/mood/recovery milestone tracking surface. Screen exists but its tab is currently hidden in `(tabs)/_layout.tsx`.

### 7. Profile (`profile.tsx`)
- Displays name, email, avatar, journey tag, and pregnancy week tag.
- Menu sections: **Account Settings** (Edit Profile, Notifications, Privacy & Security) and **Support & About** (Help, About App).
- **Sign out** with a confirmation modal (`ConfirmationModal`).

### 8. Account Deletion (Play Store compliance)
- A separate, minimal web app (`account-delete-page/`) lets a user authenticate with email/password and permanently delete their Firebase Auth account — satisfying Google Play's account-deletion requirement. Deployed independently to Vercel.

---

## Database Structure (Firestore)

Elara uses **Cloud Firestore** as its primary datastore. There are no server-side Cloud Functions — all reads/writes happen directly from the client via `@react-native-firebase/firestore`, guarded by Firestore Security Rules (configure these in the Firebase Console/CLI; no `firestore.rules` is checked into this repo).

```
users (collection)
└── {uid} (document)                         ← Firebase Auth UID
    ├── email: string
    ├── name: string
    ├── photoURL?: string
    ├── pregnancyWeek?: number
    ├── dueDate?: Timestamp
    ├── selectedJourney?: "fertility" | "prenatal" | "postnatal"
    ├── isVerified: boolean
    ├── isProfileCompleted: boolean
    ├── createdAt: Timestamp (server)
    ├── updatedAt?: Timestamp (server)
    │
    └── journal (subcollection)
        └── {DD-MM-YYYY} (document)          ← one doc per calendar day
            ├── mood: string                  ("Joyful" | "Angry" | "Lazy" | "Happy")
            ├── info?: string                  (free-text journal note)
            ├── created_at: Timestamp (server)
            └── updated_at: Timestamp (server)
```

**Notes on the schema:**
- The `journal` document ID is deterministically derived from the date (`DD-MM-YYYY`), so writing a mood or note for "today" is always an upsert (`.set(..., { merge: true })`) — there's at most one journal entry per user per day.
- **Streaks** (`calculateStreakStats`) are computed client-side by reading all journal doc IDs, sorting them, and counting consecutive-day runs — there is no separate `streaks` collection.
- **Realtime updates**: `subscribeToUserProfile` and `subscribeToTodayJournal` use Firestore's `onSnapshot` for live UI updates (e.g. mood changes reflecting instantly).
- Profile pictures currently store the raw local `imageUri` on `photoURL` — `@react-native-firebase/storage` upload is stubbed (see `TODO` in `Firebase/services/UserService.ts`) and not yet wired in.
- Auth is handled by **Firebase Authentication** (email/password provider); the `users` collection mirrors/extends the Auth user with app-specific profile fields.

---

## Setup Guide

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npx expo` works without a global install)
- A [Firebase](https://console.firebase.google.com/) project with **Authentication (Email/Password)** and **Cloud Firestore** enabled
- For native builds: Xcode (iOS) and/or Android Studio (Android), or an [EAS](https://expo.dev/eas) account for cloud builds
- [EAS CLI](https://docs.expo.dev/eas/) if you plan to build/submit: `npm install -g eas-cli`

### 1. Clone & Install

```bash
git clone <repo-url>
cd Elara
npm install
```

### 2. Firebase Project Setup

1. Create (or reuse) a Firebase project at [console.firebase.google.com](https://console.firebase.google.com/).
2. Enable **Authentication → Sign-in method → Email/Password**.
3. Enable **Firestore Database** (start in production mode and write your own security rules — the `users/{uid}` doc should only be readable/writable by the matching authenticated user, and likewise for the nested `journal` subcollection).
4. Register an **Android app** with package name `com.brilworksdigital.Elara`, download `google-services.json`, and place it at the repo root (already referenced by `app.json → android.googleServicesFile`).
5. Register a **Web app** (used for the `firebase` JS SDK config in `Firebase/firebase.ts`) and copy its config values for the next step.
6. If building for iOS, also register an iOS app with the matching bundle identifier (`com.brilworksdigital.Elara`) and add `GoogleService-Info.plist` (not currently referenced in `app.json` — add an `ios.googleServicesFile` entry if needed).

### 3. Environment Variables

`Firebase/firebase.ts` reads its config from `EXPO_PUBLIC_*` environment variables. Create a `.env` file at the repo root:

```bash
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_DATABASE_URL=
EXPO_PUBLIC_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

Populate these with the values from your Firebase **Web app** config (Project Settings → General → Your apps → SDK setup and configuration).

> Note: native Firebase modules (`@react-native-firebase/auth`, `@react-native-firebase/firestore`) get their config from `google-services.json` / `GoogleService-Info.plist` automatically; the env vars above are for the JS SDK (`firebase` package) used by `Firebase/firebase.ts`.

### 4. Run the App

```bash
npx expo start          # Metro bundler — scan the QR with Expo Go, or press i/a
npm run android          # Run on a connected Android device/emulator
npm run ios              # Run on iOS simulator
npm run web              # Run in a browser
```

Since this project uses native Firebase modules, a **development build** (not Expo Go) is required for full functionality once native modules are linked:

```bash
npx expo prebuild         # Generates native ios/ and android/ projects
npm run android            # or npm run ios
```

### 5. Building & Submitting (EAS)

Build profiles are defined in `eas.json` (`development`, `preview`, `production`):

```bash
npm run build:android:develop        # Internal Android dev client build
npm run build:ios:develop            # Internal iOS dev client build
npm run build:android:production     # Production Android build
npm run build:ios:production         # Production iOS build
npm run submit:android:production    # Submit to Play Console
npm run submit:ios:production        # Submit to App Store Connect
npm run update:production            # Push an OTA update via EAS Update
```

---

## Account Deletion Page

`account-delete-page/` is an independent Vite + TypeScript web app (no React Native/Expo dependency) that fulfills the Play Store's account-deletion requirement.

```bash
cd account-delete-page
cp .env.example .env      # Fill in VITE_FIREBASE_* values (Firebase Web app config)
npm install
npm run dev                # Local dev server
npm run build               # Production build -> dist/
```

It uses the Firebase Web SDK directly to re-authenticate the user (email + password) and call `deleteUser`, permanently removing their Firebase Auth account. It's deployed to Vercel independently of the mobile app (see `.vercel/project.json`).

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run start` / `npx expo start` | Start the Metro dev server |
| `npm run android` | Run on Android |
| `npm run ios` | Run on iOS |
| `npm run web` | Run in the browser |
| `npm run prebuild` | Generate native `ios/`/`android/` projects |
| `npm run lint` | ESLint + Prettier check |
| `npm run format` | ESLint + Prettier auto-fix |
| `npm run build:*` | EAS build variants (see [above](#5-building--submitting-eas)) |
| `npm run submit:*` | EAS submit to app stores |
| `npm run update:production` | Push an EAS OTA update |

---

## Design System

Design tokens live in `constants/colors.ts` and `constants/theme.ts`, generated from the exported design context in `design/context.md`:

- **Brand color:** Maroon/Burgundy `#7B2F4C` (primary), with soft sage green (`#A8B5A0`) and dusty rose (`#D4A5A5`) accents.
- **Journey stage colors:** Fertility (peach), Prenatal (mint green), Postnatal (lavender) — used to visually distinguish onboarding cards and journey tags throughout the app.
- **Typography:** Nunito (primary/headings) + DM Sans (secondary/body), with a defined type scale (`headline_large` → `label_small`).
- **Spacing/Radii/Shadows:** Token-based scale (`xs`–`xl` spacing, `sm`–`full` radii) shared across light/dark themes.
- Full mockups for each screen are available under `design/*.png` (Dashboard, Yoga Library, Meditation Hub, Health Tracker, Community Forum, Expert Consultations, User Profile, Onboarding).

---

## License

Proprietary — Brilworks Software
