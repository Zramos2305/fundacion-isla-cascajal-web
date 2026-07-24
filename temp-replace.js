const fs = require('fs');
const file = 'c:/Users/ZAYRA/Downloads/sitio-web-fundacion-isla (2)/components/contact.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/text-primary/g, 'text-[#0b3b45]');
content = content.replace(/bg-primary\/10/g, 'bg-[#0b3b45]/10');
content = content.replace(/bg-primary\/5/g, 'bg-[#0b3b45]/5');
content = content.replace(/border-primary\/30/g, 'border-[#0b3b45]/30');
content = content.replace(/border-primary\/10/g, 'border-[#0b3b45]/10');
content = content.replace(/group-hover:bg-primary/g, 'group-hover:bg-[#0b3b45]');
content = content.replace(/group-hover:text-primary-foreground/g, 'group-hover:text-white');
content = content.replace(/group-hover:text-primary/g, 'group-hover:text-[#0b3b45]');
content = content.replace(/focus:border-primary/g, 'focus:border-[#0b3b45]');
content = content.replace(/border-primary-foreground/g, 'border-white');

content = content.replace(/className="w-full rounded-xl/g, 'className="w-full bg-[#0b3b45] hover:bg-[#072a31] text-white rounded-xl');

fs.writeFileSync(file, content);
console.log("Done replacing colors in contact.tsx");
