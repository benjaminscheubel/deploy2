/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fs = require('fs');
const createIndexFile = require('../index');

test("hello_world", () => {
    createIndexFile();

    // eslint-disable-next-line no-undef
    const content = fs.readFileSync(`${__dirname}/../build/index.html`, 'utf-8');

    expect(content).toEqual("''");
})