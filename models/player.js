'use strict';
const mongoose = require( 'mongoose' );

//var userSchema = mongoose.Schema( {any:{}})

var playerSchema = mongoose.Schema( {
  name:String,
  role: String

} );

module.exports = mongoose.model( 'Player', playerSchema );
