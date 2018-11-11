'use strict';
const Phrase = require( '../models/phrase' );
//console.log("loading the phrase Controller")


// this displays all of the players

exports.getAllPhrases = ( req, res ) => {
  console.log('in getAllPhrases')
  Phrase.find( {} )
    .exec()
    .then( ( phrases ) => {
      res.render( 'game', {
        phrases: phrases
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'phrase promise complete' );
    } );
};
