const fs = require('fs');
const path = require('path');

const baseDir = 'D:/New folder';

const swdDir = path.join(baseDir, 'stone wall design');
const files = fs.readdirSync(swdDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));

console.log(`Found ${files.length} files in ${swdDir}`);
files.forEach((f, i) => {
  const full = path.join(swdDir, f);
  const size = fs.statSync(full).size;
  console.log(`${i+1}. ${f} (${size} bytes)`);
});

