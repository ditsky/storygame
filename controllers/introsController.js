'use strict';
const Intro = require( '../models/intro' );
//console.log("loading the story Controller")


// this displays all of the players

exports.getAllIntros = ( req, res ) => {
  console.log('in getAllIntros')
  Intro.find( {} )
    .exec()
    .then( ( intros ) => {
      res.render( 'game', {
        intros: intros
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'intro promise complete' );
    } );
};
