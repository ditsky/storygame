'use strict';
const Story = require( '../models/story' );
//console.log("loading the story Controller")


// this displays all of the players

exports.getAllStories = ( req, res ) => {
  console.log('in getAllStories')
  Story.find( {} )
    .exec()
    .then( ( stories ) => {
      res.render( 'game', {stories: stories});
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'story promise complete' );
    } );
};

exports.saveStory = ( req, res ) => {
  console.log("in saveStory!")
  let newStory = new Story( {
    story: req.body.story
  } )

  newStory.save()
    .then( () => {
      res.redirect( '/game' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
