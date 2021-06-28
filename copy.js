const fs = require('fs-extra');
const path = require('path');

const build = () => {
    const src = path.join(__dirname, 'webapp');
    const dest = path.join(__dirname, '../Desktop/webapp');

    fs.copySync(src, dest, { overwrite: true }, (err) => {
        if (err) throw err;
        console.log('The directory has been copied successfully');
    });
};

build();
