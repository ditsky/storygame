'use strict';
const Player = require( '../models/player' );
//console.log("loading the player Controller")


// this displays all of the players
exports.getAllPlayers = ( req, res ) => {
  console.log('in getAllplayers')
  Player.find( {} )
    .exec()
    .then( ( players ) => {
      res.render( 'game', {
        players: players
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'player promise complete' );
    } );
};

exports.savePlayer = ( req, res ) => {
  console.log("in savePlayer!")
  //console.dir(req)
  let newPlayer = new Player( {
    name: req.body.playername,
    role: req.body.role
  } )

  console.log("player = "+newPlayer)

  newPlayer.save()
    .then( () => {
      res.redirect( '/game' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
