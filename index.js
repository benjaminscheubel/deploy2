/* eslint-disable no-undef */
const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    const str = '<a href="https://cdn.discordapp.com/attachments/905140310571630642/972845964652081163/2714104d62f14fa0a21aaa12c6d65612.mov">link text</a>';
    fs.writeFileSync('build/index.html', str);
};

createIndexFile();

module.exports = createIndexFile;