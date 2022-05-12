/* eslint-disable no-undef */
const fs = require('fs');

const createIndexFile = () => {
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build')
    }
    const str = '<video controls><source src="../img/video-1652356439.mp4" type="video/mp4"><source src="../img/video-1652356439.webm" type="video/webm"><p>Votre navigateur ne prend pas en charge les vidéos HTML5.Voici <a href="../img/2714104d62f14fa0a21aaa12c6d65612.mov">un lien pour télécharger la vidéo</a>.</p></video>';
    fs.writeFileSync('build/index.html', str);
};

createIndexFile();

module.exports = createIndexFile;