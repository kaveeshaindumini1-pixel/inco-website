const fs = require('fs');

const base = 'c:/Users/user/Desktop/new inco web/';

['index.html', 'style.css', 'script.js'].forEach(f => {
    let content = fs.readFileSync(base + f, 'utf8');
    
    // Replace theme colors (Hex)
    content = content.replace(/#C8FF00/ig, '#2563EB');
    // Replace theme colors (RGB)
    content = content.replace(/200,\s*255,\s*0/g, '37, 99, 235');
    
    // Replace font link in HTML
    if (f === 'index.html') {
        content = content.replace(
            /family=DM\+Sans.*?display=swap/,
            'family=Inter:wght@300;400;500;600;700;800&display=swap'
        );
        content = content.replace(/font-family="Syne,sans-serif"/g, 'font-family="Inter,sans-serif"');
        content = content.replace(/font-family="DM Sans,sans-serif"/g, 'font-family="Inter,sans-serif"');
    }
    
    // Replace font families in CSS
    if (f === 'style.css') {
        content = content.replace(
            /--display:\s*'Syne',\s*sans-serif;/,
            "--display: 'Inter', sans-serif;"
        );
        content = content.replace(
            /--body:\s*'DM Sans',\s*sans-serif;/,
            "--body: 'Inter', sans-serif;"
        );
    }
    
    fs.writeFileSync(base + f, content);
});

console.log('Update complete!');
