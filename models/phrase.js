'use strict';
const mongoose = require( 'mongoose' );

var phraseSchema = mongoose.Schema( {
  phrase: String
});

module.exports = mongoose.model( 'Phrase', phraseSchema );
