const fs = require('fs');

const base = 'c:/Users/user/Desktop/new inco web/';

['index.html', 'style.css', 'script.js'].forEach(f => {
    let content = fs.readFileSync(base + f, 'utf8');
    
    // Change bright blue (#2563EB) to a softer blue (#3B82F6)
    content = content.replace(/#2563EB/ig, '#3B82F6');
    // And RGB values
    content = content.replace(/37,\s*99,\s*235/g, '59, 130, 246');
    
    fs.writeFileSync(base + f, content);
});

console.log('Blue color updated to a softer shade.');
