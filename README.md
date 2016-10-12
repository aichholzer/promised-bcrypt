# promised-bcrypt
[![Build Status](https://travis-ci.org/aichholzer/promised-bcrypt.svg?branch=master)](https://travis-ci.org/aichholzer/promised-bcrypt)
[![Dependency status](https://gemnasium.com/badges/github.com/aichholzer/promised-bcrypt.svg)](https://gemnasium.com/github.com/aichholzer/promised-bcrypt)
[![Downloads](https://img.shields.io/npm/dt/promised-bcrypt.svg)](https://www.npmjs.com/package/promised-bcrypt)
[![Always useful](https://img.shields.io/badge/always-useful-ff6400.svg)](https://github.com/aichholzer/promised-bcrypt)

Promised bcrypt goodness.


### Install
```
npm install -s promised-bcrypt
```

### API
- `.hash(string, rounds)` - {rounds} defaults to `10`.
- `.compare(string, hash)`
- `.genSalt(rounds)` - {rounds} defaults to `10`.
- `.getRounds(hash)`

All of these return a `Promise`.<br />

### Use
```
const bcrypt = require('promised-bcrypt');
bcrypt.hash('Hello')
    .then(hash => {
        console.log(hash);
    });

// '$2a$10$LriA/LnuQRIh63uyGU8t6TFwp)9y^wnLd3fw0duLnhe0SN.vS.Pka'
```

```
const bcrypt = require('promised-bcrypt');
bcrypt.compare('Hello', hash)
    .then(pass => {
        console.log(pass);
    });

// true
```

```
const bcrypt = require('promised-bcrypt');
bcrypt.getRounds(hash)
    .then(rounds => {
        console.log(rounds);
    });

// 10
```


### Contribute
```
fork https://github.com/aichholzer/promised-bcrypt
```

### Further reading

[https://github.com/kelektiv/node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)

### License

[MIT](https://github.com/aichholzer/promised-bcrypt/blob/master/LICENSE)
