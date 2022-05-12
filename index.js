/* eslint-disable no-undef */
const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
   
    
    fs.writeFileSync('build/index.html', src="https://raw.githubusercontent.com/benjaminscheubel/deploy2/main/img/static-assets-upload15450755136710713434.webp");
};

createIndexFile();

module.exports = createIndexFile;