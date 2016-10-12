'use strict';


const bcrypt = require('bcrypt');

module.exports = {

    hash: (string, rounds = 10) => new Promise((yes, no) => {
        bcrypt.hash(string, rounds, (error, hash) => error ? no(error) : yes(hash));
    }),

    compare: (string, hash) => new Promise((yes, no) => {
        bcrypt.compare(string, hash, (error, result) => error ? no(error) : yes(result));
    }),

    genSalt: (rounds = 10) => new Promise((yes, no) => {
        bcrypt.genSalt(rounds, (error, salt) => error ? no(error) : yes(salt));
    }),

    getRounds: hash => new Promise((yes, no) => {
        try {
            yes(bcrypt.getRounds(hash));
        } catch (error) {
            no(error);
        }
    })
};
