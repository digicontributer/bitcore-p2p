'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on digibyte-p2p Module {0}'
};

module.exports = require('digibyte').errors.extend(spec);
