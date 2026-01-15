# 🎡 Student Topic Wheel

An interactive "Wheel of Fortune" style web application that randomly assigns educational topics to students. Features a beautiful spinning wheel with flashing colors and automatic Google Sheets integration for record-keeping.

![Student Topic Wheel](https://img.shields.io/badge/Status-Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?logo=google-sheets&logoColor=white)

## 🎯 Features

- **🎨 Beautiful Wheel of Fortune Design**: Colorful, playful interface with smooth animations
- **✨ Flashing Colors**: Dynamic color effects while the wheel spins
- **🎲 Random Topic Assignment**: Fair distribution across four educational topics
- **📊 Google Sheets Integration**: Automatically records student names and assigned topics
- **📱 Responsive Design**: Works on desktop and mobile devices
- **⚡ Easy to Use**: Simple one-click interface for students

## 📚 Topics

The wheel assigns one of these four topics:

1. **Feature Scaffolding** - Learn about building structured feature frameworks
2. **Word Embedding** - Explore natural language processing and vector representations
3. **Biased Randomness** - Understand weighted probability and statistical bias
4. **The Math of Perceptrons** - Dive into neural network fundamentals

## 🚀 Quick Start

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd Random-App
   ```

2. **Set up Google Sheets integration**
   - Follow the detailed instructions in [SETUP.md](SETUP.md)
   - Create a Google Sheet
   - Deploy the Google Apps Script
   - Update the URL in `script.js`

3. **Open the app**
   - Open `index.html` in your web browser
   - Or run a local server (see SETUP.md for options)

4. **Spin the wheel!**
   - Enter student name
   - Click "SPIN THE WHEEL!"
   - Watch the magic happen ✨

## 📁 Project Structure

```
Random-App/
├── index.html              # Main HTML file with wheel interface
├── styles.css              # Styles for the wheel and UI
├── script.js               # Wheel logic and animations
├── google-apps-script.gs   # Google Apps Script for Sheets integration
├── SETUP.md               # Detailed setup instructions
└── README.md              # This file
```

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, and JavaScript (no frameworks required!)
- **Canvas API**: For drawing and animating the wheel
- **Google Apps Script**: For serverless backend and Sheets integration
- **Google Sheets API**: For data persistence

## 🎨 Customization

You can easily customize:

- **Topics**: Edit the `topics` array in `script.js`
- **Colors**: Modify the `colors` array in `script.js`
- **Spin Duration**: Adjust `spinDuration` in `script.js`
- **Styling**: Update CSS variables in `styles.css`

See [SETUP.md](SETUP.md) for detailed customization instructions.

## 📖 How It Works

1. Student enters their name
2. Clicks the spin button
3. Wheel spins with flashing color effects
4. Wheel gradually slows down using easing animation
5. Result is displayed with celebration message
6. Student name and topic are automatically saved to Google Sheets
7. Success confirmation is shown

## 🌐 Deployment Options

- **Local**: Open `index.html` directly
- **GitHub Pages**: Free hosting through GitHub
- **Netlify**: One-click deployment
- **Vercel**: Instant deployment from Git
- **Any Web Server**: Standard HTML/CSS/JS files

See [SETUP.md](SETUP.md) for deployment instructions.

## 📊 Google Sheets Output

The app creates a formatted spreadsheet with:

| Timestamp | Student Name | Topic Assigned |
|-----------|--------------|----------------|
| 2026-01-15 10:30:45 | John Doe | word embedding |
| 2026-01-15 10:32:12 | Jane Smith | biased randomness |

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your customizations

## 📝 License

This project is open source and available for educational purposes.

## 🎓 Perfect For

- Classroom assignments
- Random topic selection
- Educational games
- Student engagement activities
- Fair distribution of projects

## 💡 Tips

- Test the Google Sheets integration before using with students
- Keep the Google Sheet open to watch assignments in real-time
- The wheel uses cryptographically random selection for fairness
- All data is saved with timestamps for record-keeping

## 🐛 Troubleshooting

See [SETUP.md](SETUP.md) for common issues and solutions.

---

**Made with ❤️ for educators and students**

Enjoy your Student Topic Wheel! 🎡✨
