# Student Topic Wheel - Setup Guide

## Overview
This app allows students to spin a "Wheel of Fortune" style wheel to randomly receive one of four topics. The student's name and assigned topic are automatically saved to a Google Sheet in your Google Drive.

## Topics
1. Feature scaffolding
2. Word embedding
3. Biased randomness
4. The math of perceptrons

## Google Sheets Setup Instructions

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Student Topic Assignments" (or any name you prefer)
4. Keep this tab open - you'll use it in the next steps

### Step 2: Set up Google Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. You'll see a code editor with a default function
3. **Delete all existing code** in the editor
4. Open the file `google-apps-script.gs` from this project
5. **Copy all the code** from `google-apps-script.gs`
6. **Paste it** into the Apps Script editor
7. Click the **Save** icon (💾) or press Ctrl+S (Cmd+S on Mac)
8. Name your project "Student Topic Wheel Script"

### Step 3: Deploy the Web App
1. In the Apps Script editor, click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Student Topic Wheel v1"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to Student Topic Wheel Script (unsafe)**
   - Click **Allow**
7. **Copy the Web app URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
8. Click **Done**

### Step 4: Configure the Web App
1. Open the file `script.js` in this project
2. Find this line at the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your web app URL from Step 3:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

### Step 5: Test the Application
1. Open `index.html` in a web browser
2. Enter a student name
3. Click "SPIN THE WHEEL!"
4. Watch the wheel spin with flashing colors
5. Check your Google Sheet - you should see a new row with:
   - Timestamp
   - Student Name
   - Topic Assigned

## Running the Application

### Option 1: Local File (Simple)
- Simply double-click `index.html` to open it in your browser
- Enter a name and spin the wheel

### Option 2: Local Web Server (Recommended for best experience)
If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser to: `http://localhost:8000`

### Option 3: Deploy to GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Select the main branch as source
4. Your app will be available at: `https://your-username.github.io/repository-name/`

### Option 4: Deploy to Netlify/Vercel
1. Create an account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Deploy with default settings
4. Your app will be live at a generated URL

## Features

✨ **Interactive Wheel of Fortune Style Wheel**
- Beautiful, colorful design with playful colors
- Smooth spinning animation
- Flashing colors during the spin

🎯 **Random Topic Assignment**
- Fair random distribution
- Four educational topics
- Clear result display

📊 **Automatic Google Sheets Integration**
- Records student name
- Records assigned topic
- Timestamps each assignment
- Formatted spreadsheet with headers

👨‍🎓 **Student-Friendly Interface**
- Simple name input
- One-click spin button
- Clear result display
- Responsive design

## Troubleshooting

### "Saved to Google Sheets" doesn't appear
- Check that you've updated `script.js` with your correct Google Apps Script URL
- Verify the Google Apps Script deployment is set to "Anyone" can access
- Check browser console (F12) for any error messages

### Wheel doesn't spin
- Make sure you've entered a student name
- Check that `script.js` is properly loaded (view browser console)

### Google Sheet not receiving data
- Verify the Google Apps Script URL in `script.js` is correct
- Make sure the script is deployed as a web app
- Check that the access is set to "Anyone"
- View the Execution log in Google Apps Script (View > Executions)

## Customization

### Change Topics
Edit the `topics` array in `script.js`:
```javascript
const topics = [
    "your topic 1",
    "your topic 2",
    "your topic 3",
    "your topic 4"
];
```

### Change Colors
Edit the `colors` array in `script.js`:
```javascript
const colors = [
    "#ff6b6b", // Red
    "#4ecdc4", // Teal
    "#ffe66d", // Yellow
    "#a8e6cf"  // Green
];
```

### Adjust Spin Duration
In `script.js`, change this value (in milliseconds):
```javascript
const spinDuration = 4000; // 4 seconds
```

## Support
If you encounter any issues, please check:
1. Browser console for error messages (press F12)
2. Google Apps Script execution log
3. Verify all setup steps were completed

Enjoy your Student Topic Wheel! 🎓🎡
