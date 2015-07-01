var FamousEngine = require('famous/core/FamousEngine');
var Transitionable = require('famous/transitions/Transitionable');

// A component that will animate a node's position in x.
function Animation (node) {
    // store a reference to the node
    this.node = node;
    // get an id from the node so that we can update
    this.id = node.addComponent(this);
    // create a new transitionable to drive the animation
    this.xPosition = new Transitionable(100);
}

Animation.prototype.start = function start () {
    // request an update to start the animation
    this.node.requestUpdate(this.id);
    // begin driving the animation
    this.xPosition.from(100).to(1000, {duration: 1000});
    this.node.requestUpdate(this.id);
};

Animation.prototype.onUpdate = function onUpdate () {
    // while the transitionable is still transitioning
    // keep requesting updates
    if (this.xPosition.isActive()) {
        // set the position of the component's node
        // every frame to the value of the transitionable
        this.node.setPosition(this.xPosition.get());
        this.node.requestUpdateOnNextTick(this.id);
    }
};
module.exports = Animation;
