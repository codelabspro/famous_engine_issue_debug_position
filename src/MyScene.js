var FamousEngine = require('famous/core/FamousEngine');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Position = require('famous/components/Position');
var Transitionable = require('famous/transitions/Transitionable');
var Size = require('famous/components/Size')
var KeyCodes = require('./utilities/KeyCodes.js');
var Transitionable = require('famous/transitions/Transitionable');
var CustomNode = require('./CustomNode');
function MyScene(selector, data) {
  this.context = FamousEngine.createScene(selector);
  this.rootNode = this.context.addChild();

  this.tilesData = data.tilesData;
  this.selectedTileIndex = 0;

  this.tiles = [];

  var farBuildings = this.rootNode.addChild(new CustomNode('url(images/parallax_far_buildings.png)', '#B3E5FC', 0, 0, 1800, 500));
  var plane = this.rootNode.addChild(new CustomNode('url(images/plane_100x100.png)', '#B3E5FC', 200, 200, 100, 100));
  window.addEventListener('keydown', function(e) {
    console.log('keydown occured');
    if (e.keyCode === KeyCodes.RIGHT_ARROW) {
      console.log('Right arrow was pressed');
      var newPosition = Position(plane);
      newPosition.set(1000, 0, -300, { duration: 3000, curve: 'outQuad' });
    }
  }.bind(this));

}

module.exports = MyScene;
