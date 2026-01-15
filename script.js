// Configuration
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkdlzym8mp53HG8ZC78dWVAQXqNGouHfi92uCPSfPYIpe3HvxJpMV0timLAu8ofMZQyA/exec';

const topics = [
    "feature scaffolding",
    "word embedding",
    "biased randomness",
    "the math of perceptrons"
];

const colors = [
    "#ff6b6b", // Red
    "#4ecdc4", // Teal
    "#ffe66d", // Yellow
    "#a8e6cf"  // Green
];

// Wheel variables
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spinButton');
const resultDiv = document.getElementById('result');
const statusDiv = document.getElementById('status');
const studentNameInput = document.getElementById('studentName');

let currentRotation = 0;
let isSpinning = false;
let flashInterval = null;
let currentColors = [...colors];

// Draw the wheel
function drawWheel(rotation = 0, flash = false) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
    const anglePerSegment = (2 * Math.PI) / topics.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw segments
    for (let i = 0; i < topics.length; i++) {
        const startAngle = rotation + (i * anglePerSegment);
        const endAngle = rotation + ((i + 1) * anglePerSegment);

        // Use flashing colors if spinning
        const segmentColor = flash && Math.random() > 0.5 ? adjustBrightness(currentColors[i], 50) : currentColors[i];

        // Draw segment
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = segmentColor;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Draw text
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + anglePerSegment / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px Arial';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // Split text into multiple lines for better readability
        const words = topics[i].split(' ');
        const lineHeight = 22;
        const textRadius = radius * 0.65;

        if (words.length === 1) {
            ctx.fillText(topics[i], textRadius, 5);
        } else if (words.length === 2) {
            ctx.fillText(words[0], textRadius, -8);
            ctx.fillText(words[1], textRadius, 14);
        } else {
            for (let j = 0; j < words.length; j++) {
                const y = (j - (words.length - 1) / 2) * lineHeight;
                ctx.fillText(words[j], textRadius, y);
            }
        }

        ctx.restore();
    }

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 6;
    ctx.stroke();

    // Draw center dot
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#667eea';
    ctx.fill();
}

// Helper function to adjust brightness
function adjustBrightness(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.min(255, Math.max(0, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.min(255, Math.max(0, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.min(255, Math.max(0, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Get winning topic based on rotation
function getWinningTopic(rotation) {
    const anglePerSegment = (2 * Math.PI) / topics.length;
    // The pointer is at the top (12 o'clock position)
    // We need to adjust for the rotation and find which segment is at the top
    const normalizedRotation = (rotation % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const adjustedRotation = (2 * Math.PI - normalizedRotation + Math.PI / 2) % (2 * Math.PI);
    const segmentIndex = Math.floor(adjustedRotation / anglePerSegment) % topics.length;
    return topics[segmentIndex];
}

// Spin the wheel
function spinWheel() {
    const studentName = studentNameInput.value.trim();

    if (!studentName) {
        alert('Please enter your name first!');
        studentNameInput.focus();
        return;
    }

    if (isSpinning) return;

    isSpinning = true;
    spinButton.disabled = true;
    resultDiv.classList.remove('show');
    statusDiv.textContent = '';
    statusDiv.className = 'status';

    // Random number of rotations (between 5 and 8 full rotations)
    const extraRotations = 5 + Math.random() * 3;
    const randomAngle = Math.random() * 2 * Math.PI;
    const totalRotation = (extraRotations * 2 * Math.PI) + randomAngle;

    const spinDuration = 4000; // 4 seconds
    const startTime = Date.now();
    const startRotation = currentRotation;

    // Start flashing effect
    let flashState = false;
    flashInterval = setInterval(() => {
        flashState = !flashState;
    }, 100);

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / spinDuration, 1);

        // Easing function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 4);

        currentRotation = startRotation + (totalRotation * easeOut);
        drawWheel(currentRotation, progress < 1);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Spinning complete
            clearInterval(flashInterval);
            isSpinning = false;
            spinButton.disabled = false;

            const winningTopic = getWinningTopic(currentRotation);
            showResult(studentName, winningTopic);
        }
    }

    animate();
}

// Show result and save to Google Sheets
function showResult(studentName, topic) {
    resultDiv.innerHTML = `
        <div>🎉 Congratulations, <strong>${studentName}</strong>! 🎉</div>
        <div style="margin-top: 10px;">Your topic is: <strong style="color: #e74c3c; font-size: 1.2em;">${topic}</strong></div>
    `;
    resultDiv.classList.add('show');

    // Save to Google Sheets
    saveToGoogleSheets(studentName, topic);
}

// Save to Google Sheets
async function saveToGoogleSheets(studentName, topic) {
    statusDiv.textContent = 'Saving to Google Sheets...';
    statusDiv.className = 'status';

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: studentName,
                topic: topic,
                timestamp: new Date().toISOString()
            })
        });

        // Note: With mode: 'no-cors', we can't read the response
        // We'll assume success if no error was thrown
        statusDiv.textContent = '✓ Saved to Google Sheets successfully!';
        statusDiv.className = 'status success';

        setTimeout(() => {
            statusDiv.textContent = '';
        }, 3000);
    } catch (error) {
        console.error('Error saving to Google Sheets:', error);
        statusDiv.textContent = '⚠ Could not save to Google Sheets. Please check the console.';
        statusDiv.className = 'status error';
    }
}

// Event listeners
spinButton.addEventListener('click', spinWheel);

studentNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        spinWheel();
    }
});

// Initial draw
drawWheel();
