'use strict';
const mongoose = require( 'mongoose' );

//var userSchema = mongoose.Schema( {any:{}})

var introsSchema = mongoose.Schema( {

  intros: String

} );

module.exports = mongoose.model( 'Intros', introsSchema );
