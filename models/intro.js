'use strict';
const mongoose = require( 'mongoose' );

//var userSchema = mongoose.Schema( {any:{}})

var introSchema = mongoose.Schema( {
  intro: String
});

module.exports = mongoose.model( 'Intro', introSchema );
