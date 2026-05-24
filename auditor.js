const fs = require('fs');

const fileName = 'test-code.js';
const code = fs.readFileSync(fileName, 'utf8');
const lines = code.split('\n');

const results = [];
let currentDepth = 0;
let hasWarnedDepth = false;
const MAX_DEPTH = 3;

lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const trimmedLine = line.trim();

    const opens = (trimmedLine.match(/\{/g) || []).length;
    const closes = (trimmedLine.match(/\}/g) || []).length;

    currentDepth += opens;

    if (currentDepth > MAX_DEPTH) {
        if (!hasWarnedDepth) {
            results.push({
                Line: lineNumber,
                Issue: 'High Complexity',
                Detail: `Depth: ${currentDepth}`,
                Severity: 'High'
            });
            hasWarnedDepth = true;
        }
    }

    if (line.includes('var ')) {
        results.push({ Line: lineNumber, Issue: 'Modernization', Detail: "Use 'let/const' instead of 'var'", Severity: 'Medium' });
    }

    if (/\b(let|const|var)\s+[a-z]\s*=/.test(line)) {
        results.push({ Line: lineNumber, Issue: 'Naming', Detail: 'Single-letter variable', Severity: 'Low' });
    }

    currentDepth -= closes;

    if (currentDepth <= MAX_DEPTH) {
        hasWarnedDepth = false;
    }
});

console.log(`\n=== Audit Report for ${fileName} ===`);
if (results.length > 0) {
    console.table(results);
    console.log(`Total Issues Found: ${results.length}`);
} else {
    console.log(" No issues detected. Code follows standards.");
}