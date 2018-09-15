const { promisify } = require('util');
const { join } = require('path');
const copy = promisify(require('fs').copyFile);
const rename = promisify(require('fs').rename);
const rimraf = require('rimraf');

async function predeploy() {
    const cwd = process.cwd();
    const CNAME = {
        from: join(cwd, 'static', 'CNAME'),
        to: join(cwd, 'dist', 'CNAME')
    }
    const NOT_FOUND = {
        from: join(cwd, 'dist', '404', 'index.html'),
        to: join(cwd, 'dist', '404.html'),
        dir: join(cwd, 'dist', '404')
    }

    try {
        await Promise.all([ copy(CNAME.from, CNAME.to), rename(NOT_FOUND.from, NOT_FOUND.to) ])
        rimraf(NOT_FOUND.dir, (e) => {
            if (e) throw e;
        })
    } catch (e) {
        console.log('Something went wrong... cancelling deployment');
        process.exit();
    }
}

predeploy();