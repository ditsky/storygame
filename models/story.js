'use strict';
const mongoose = require( 'mongoose' );

//var userSchema = mongoose.Schema( {any:{}})

var storySchema = mongoose.Schema( {

  story: String

} );

module.exports = mongoose.model( 'Story', storySchema );
