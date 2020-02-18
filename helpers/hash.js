const bcrypt = require("bcrypt");

const hashPassword = password => {
    const encrpytPassword = bcrypt.hash(password, 10).then(hash => {
        return hash;
    });

    return encrpytPassword;
};

module.exports = hashPassword;