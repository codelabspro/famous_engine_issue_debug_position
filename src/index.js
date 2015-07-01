'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var CustomNode = require('./CustomNode');
var Position = require('famous/components/Position');
var Animation = require('./components/Animation');
var KeyCodes = require('./utilities/KeyCodes');
var tilesData = require('./data/tiles_data.json');
var MyScene = require('./MyScene');
// Boilerplate code to make your life easier
FamousEngine.init();


var myscene = new MyScene('body', { tilesData: tilesData });
