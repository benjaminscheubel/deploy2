/* eslint-disable no-undef */
const fs = require('fs');
const createIndexFile = require('../index');

test("hello_world", () => {
    createIndexFile();

    // eslint-disable-next-line no-undef
    const content = fs.readFileSync(`${__dirname}/../build/index.html`, 'utf-8');

    expect(content).toEqual('<video controls><source src="https://raw.githubusercontent.com/benjaminscheubel/deploy2/main/img/video-1652356439.mp4" type="video/mp4"><source src="https://raw.githubusercontent.com/benjaminscheubel/deploy2/main/img/video-1652356439.ogv" type="video/ogg"><source src="https://raw.githubusercontent.com/benjaminscheubel/deploy2/main/img/video-1652356439.webm" type="video/webm"><p>Votre navigateur ne prend pas en charge les vidéos HTML5.Voici <a href="../img/2714104d62f14fa0a21aaa12c6d65612.mov">un lien pour télécharger la vidéo</a>.</p></video>');
})