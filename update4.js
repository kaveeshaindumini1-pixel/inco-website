const fs = require('fs');
const path = 'c:/Users/user/Desktop/new inco web/style.css';
let content = fs.readFileSync(path, 'utf8');

// If .nav-logo-img exists, we can replace it, otherwise append.
if (content.includes('.nav-logo-img { height:')) {
    content = content.replace(/\.nav-logo-img\s*{\s*height:\s*\d+px/g, '.nav-logo-img { height: 42px');
} else {
    content += '\n\n/* Logo Size Override */\n.nav-logo-img { height: 42px !important; width: auto; display: block; }\n';
}

fs.writeFileSync(path, content);
console.log('Increased logo size in style.css');
