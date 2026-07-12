const fs = require('fs');

const path = 'c:/Users/user/Desktop/new inco web/style.css';
let content = fs.readFileSync(path, 'utf8');

content += '\n\n/* Highlight Spec Titles */\n.sk {\n  color: #3B82F6 !important;\n  font-weight: 700 !important;\n  font-size: 14px !important;\n}\n';

fs.writeFileSync(path, content);
console.log('Appended highlight styles to style.css');
