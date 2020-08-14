const fs = require('fs');

const json = JSON.parse(fs.readFileSync('pxt.json'));
const missing = [];
const existing = [];

for (const file of (json.files || [])) {
    if (fs.existsSync(file)) {
        existing.push(file);
    } else {
        missing.push(file);
    }
}

if (missing.length) {
    console.warn(`pxt.json lists files that are missing:
    ${missing.join(",\n    ")}
`);
    json.files = existing;
    fs.writeFileSync('pxt.json', JSON.stringify(json, undefined, 4));
}