/* eslint-disable no-undef */
const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    var img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/benjaminscheubel/deploy2/main/img/static-assets-upload15450755136710713434.webp";
    fs.writeFileSync('build/index.html', img.src);
};

createIndexFile();

module.exports = createIndexFile;