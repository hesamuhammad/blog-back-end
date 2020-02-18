const bcrypt = require("bcrypt");

const comparedPassword = (plainPassword, hashPassword) => {
    const compared = bcrypt
        .compare(plainPassword, hashPassword)
        .then(result => {
            return result;
        });

    return compared;
};

module.exports = comparedPassword