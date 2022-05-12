/* eslint-disable no-undef */
const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    fs.writeFileSync('build/index.html', '');
};

createIndexFile();

module.exports = createIndexFile;