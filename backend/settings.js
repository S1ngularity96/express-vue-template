
const path = require('path');
module.exports = {
    PROJECT_DIR: __dirname,
    DATABASE: {
        NAME: 'database.sqlite',
        ERRINFO: 'database.error.info',
        MAX_RECOVER_ATTEMPTS: 5
    },
    Ports: {
        Front: {
            Prod: 80,
            Dev: 8000
        },
        Backend: {
            Prod: 80,
            Dev: 8080
        }
    },
    PUBLIC: {
        DIR: path.join(__dirname, "public"),
    },
    CREATE_DIRS: function () { },
    CREATE_DEFAULT_USER: async function () { }
};
