'use strict';


const bcrypt = require('../lib');
const should = require('should');
const _string = 'Hello, I am full of promises!';
let _hash = '';

it('Hash', done => {

    bcrypt.hash(_string)
        .then(hash => {
            _hash = hash;
            should(hash).be.a.String();
            done();
        });
});

it('Compare', done => {

    bcrypt.compare(_string, _hash)
        .then(pass => {
            should(pass).be.eql(true);
            return bcrypt.compare('Not the right string.', _hash);
        })
        .then(pass => {
            should(pass).be.eql(false);
            done();
        });
});

it('Generate salt', done => {

    bcrypt.genSalt()
        .then(salt => {
            should(salt).be.a.String();
            done();
        });
});

it('Get rounds', done => {

    bcrypt.getRounds(_hash)
        .then(rounds => {
            should(rounds).be.eql(10);
            done();
        });
});

it('Get rounds (invalid hash)', done => {

    bcrypt.getRounds('This is an invalid hash.')
        .then(rounds => {})
        .catch(error => {
            should(error.message).be.a.String();
            should(error.message).be.eql('invalid hash provided');
            done();
        });
});
