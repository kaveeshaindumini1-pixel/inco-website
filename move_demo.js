const fs = require('fs');

const path = 'c:/Users/user/Desktop/new inco web/index.html';
let content = fs.readFileSync(path, 'utf8');

// Extract the demo block
const demoRegex = /\s*<!-- Live posture card -->[\s\S]*?<div class="device-card mini-card">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
// Wait, the regex needs to accurately match the </div> structure.
// Instead of regex, since I can see the exact lines (51 to 85), let's just split by lines.
const lines = content.split('\n');

const demoLines = lines.slice(50, 85);
const demoStr = demoLines.join('\n');

// Remove demo from hero
lines.splice(50, 35); // Remove 35 lines starting from line 50 (index 50)

// Now we need to find the showcase image wrap
const showcaseIdx = lines.findIndex(line => line.includes('<div class="showcase-img-wrap">'));
if (showcaseIdx !== -1) {
    // Replace the showcase img wrap (5 lines) with the demo block
    lines.splice(showcaseIdx, 5, demoStr);
}

// Write back
fs.writeFileSync(path, lines.join('\n'));
console.log('Moved demo card to showcase section.');
