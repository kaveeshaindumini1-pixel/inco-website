const fs = require('fs');
const path = 'c:/Users/user/Desktop/new inco web/style.css';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\.nav-logo-img { height: 42px !important;/g, '.nav-logo-img { height: 64px !important;');

fs.writeFileSync(path, content);
console.log('Increased logo size to 64px in style.css');
