'use strict';
const mongoose = require( 'mongoose' );

//var userSchema = mongoose.Schema( {any:{}})

var gameSchema = mongoose.Schema( {
  roomname: String,
  password: String,
  numplayers: String,
  hostname: String
} );

module.exports = mongoose.model( 'Game', gameSchema );
