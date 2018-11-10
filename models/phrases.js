'use strict';
const mongoose = require( 'mongoose' );

//var userSchema = mongoose.Schema( {any:{}})

var phrasesSchema = mongoose.Schema( {

  phrases: String

} );

module.exports = mongoose.model( 'Phrases', phrasesSchema );
