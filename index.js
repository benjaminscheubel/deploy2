/* eslint-disable no-undef */
const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    const str = '<img class="fit-picture"src="https://raw.githubusercontent.com/benjaminscheubel/deploy2/main/img/static-assets-upload15450755136710713434.webp" alt="GOKU SAIYAN ROSE">';
    fs.writeFileSync('build/index.html', str);
};

createIndexFile();

module.exports = createIndexFile;