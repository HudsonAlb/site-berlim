import fs from 'fs';
import path from 'path';

const dir = 'f:/berlim-dev/site-berlim/site-berlim/src/assets/brandsystem';
const files = fs.readdirSync(dir);
console.log('Files list:');
files.forEach(f => {
  const stats = fs.statSync(path.join(dir, f));
  console.log(`${f}: ${stats.size} bytes`);
});
