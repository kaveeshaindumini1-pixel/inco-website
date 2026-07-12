const fs = require('fs');

const base = 'c:/Users/user/Desktop/new inco web/';

['index.html', 'script.js'].forEach(f => {
    let content = fs.readFileSync(base + f, 'utf8');
    
    // Replace Sinhala Rupee symbol with "Rs."
    content = content.replace(/රු/g, 'Rs.');
    
    fs.writeFileSync(base + f, content);
});

console.log('Currency symbol updated to Rs.');
