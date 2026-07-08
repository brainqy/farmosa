const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const releaseVersion = String(packageJson.releaseVersion ?? packageJson.version ?? '0');
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const baseDate = `${year}${month}${day}`;

let nextVersion;
if (releaseVersion.startsWith(baseDate)) {
  const suffix = parseInt(releaseVersion.slice(baseDate.length) || '0', 10) + 1;
  nextVersion = `${baseDate}${String(suffix).padStart(2, '0')}`;
} else {
  nextVersion = `${baseDate}01`;
}

packageJson.releaseVersion = nextVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8');
console.log(`Bumped releaseVersion to ${nextVersion}`);
