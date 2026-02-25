# Baby Week Images Upload Script

This script uploads all 42 baby week images (Week 1-43) to Firebase Storage and creates corresponding documents in Firestore.

## What It Does

1. **Uploads Images to Firebase Storage**: Each week's image is uploaded to the `baby/` folder in Firebase Storage with the naming format: `week_X.png`

2. **Creates Firestore Documents**: For each week, a document is created in the `baby` collection with:
   - `week`: Number (1-43)
   - `imageUrl`: String (Firebase Storage download URL)
   - `createdAt`: Timestamp (server timestamp)

## Files Created

### Services

- **`Firebase/services/BabyWeekService.ts`**: Core service handling Firebase Storage uploads and Firestore operations
  - `uploadBabyWeekImage()`: Upload image to Storage
  - `createBabyWeekDocument()`: Create Firestore document
  - `uploadBabyWeek()`: Combined upload operation
  - `getAllBabyWeeks()`: Fetch all baby weeks
  - `getBabyWeekByNumber()`: Fetch specific week

### Scripts

- **`scripts/uploadBabyWeeks.ts`**: Upload utility functions
  - `uploadAllBabyWeeks()`: Upload all 42 weeks with progress tracking
  - `uploadSingleBabyWeek()`: Upload a single week

### Hooks

- **`Firebase/hooks/useBabyWeeks.ts`**: React Query hooks
  - `useAllBabyWeeks()`: Query hook for all weeks
  - `useBabyWeekByNumber(week)`: Query hook for specific week
  - `useUploadBabyWeek()`: Mutation hook for uploads

### UI

- **`app/(user)/upload-baby-weeks.tsx`**: Upload screen with:
  - Upload all weeks button
  - Progress tracking
  - Results display
  - Quick upload individual weeks

## How to Use

### Method 1: Using the Upload Screen (Recommended)

1. Navigate to the upload screen in your app:

   ```typescript
   router.push("/(user)/upload-baby-weeks");
   ```

2. Tap "Upload All Weeks (1-43)" button

3. Confirm the upload in the alert dialog

4. Monitor progress - it will show:
   - Current week being uploaded
   - Progress count (e.g., 15/42)
   - Progress bar

5. View results when complete:
   - Successful uploads count
   - Failed uploads count

### Method 2: Programmatically

```typescript
import { uploadAllBabyWeeks } from "@/scripts/uploadBabyWeeks";

// Upload all weeks with progress tracking
await uploadAllBabyWeeks(
  (current, total, week) => {
    console.log(`Uploading week ${week} (${current}/${total})`);
  },
  (successful, failed) => {
    console.log(`Complete! Success: ${successful}, Failed: ${failed}`);
  },
);
```

### Method 3: Upload Single Week

```typescript
import { uploadSingleBabyWeek } from "@/scripts/uploadBabyWeeks";

// Upload just week 20
await uploadSingleBabyWeek(20);
```

## Using the Data in Your App

### Get All Baby Weeks

```typescript
import { useAllBabyWeeks } from '@/Firebase/hooks/useBabyWeeks';

function BabyWeeksScreen() {
  const { data: weeks, isLoading } = useAllBabyWeeks();

  if (isLoading) return <Loading />;

  return (
    <ScrollView>
      {weeks?.map(week => (
        <Image key={week.id} source={{ uri: week.imageUrl }} />
      ))}
    </ScrollView>
  );
}
```

### Get Specific Week

```typescript
import { useBabyWeekByNumber } from '@/Firebase/hooks/useBabyWeeks';

function BabyWeekDisplay({ weekNumber }: { weekNumber: number }) {
  const { data: week, isLoading } = useBabyWeekByNumber(weekNumber);

  if (isLoading) return <Loading />;
  if (!week) return <Text>Week not found</Text>;

  return (
    <View>
      <Text>Week {week.week}</Text>
      <Image source={{ uri: week.imageUrl }} />
    </View>
  );
}
```

## Firebase Configuration Required

### Firestore Rules

Add this rule to allow read access to baby weeks:

```javascript
match /baby/{weekId} {
  allow read: if request.auth != null;
  allow write: if request.auth != null; // Remove after initial upload
}
```

### Storage Rules

Add this rule to allow access to baby images:

```javascript
match /baby/{weekImage} {
  allow read: if request.auth != null;
  allow write: if request.auth != null; // Remove after initial upload
}
```

## Important Notes

1. **One-Time Operation**: This upload is meant to be run once to populate your database with the baby week images. After uploading, you may want to remove write permissions.

2. **Network Required**: Uploads require a stable internet connection. All 42 images will take several minutes to upload.

3. **Error Handling**: The script continues even if individual uploads fail. Check the results to see if any weeks failed.

4. **Storage Costs**: Each image is approximately 100-500KB. Total storage used will be around 5-20MB.

5. **Week Numbering**: Week 1 & 2 share the same image (week 1). Weeks run from 1-43 to cover full pregnancy duration.

## Troubleshooting

### Upload fails with "Permission denied"

- Check Firebase Storage rules allow write access
- Verify user is authenticated

### "Could not load asset" error

- Ensure all images exist in `assets/baby/` folder
- Check image file names match exactly (case-sensitive)

### Upload stuck or slow

- Check internet connection
- Firebase Storage uploads are sequential to avoid overwhelming the connection
- Try uploading individual weeks if bulk upload times out

## Dependencies

Required packages:

- `@react-native-firebase/storage` - Firebase Storage
- `@react-native-firebase/firestore` - Firestore database
- `expo-asset` - Asset handling
- `@tanstack/react-query` - Data fetching hooks

All dependencies are already installed via `npm install @react-native-firebase/storage` and `npx expo install expo-asset expo-file-system`.
