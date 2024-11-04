const fs = require('fs');

module.exports = {
    deleteFile(filePath) {
        return new Promise((resolve, reject) => {
            fs.unlink(filePath, (err) => {
                if (err && err.code !== 'ENOENT') {
                    return reject(err);
                }
                resolve({ success: true });
            });
        });
    }
};
