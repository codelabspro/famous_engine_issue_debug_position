var famousCodes = require('famous/utilities/KeyCodes');

var allKeyCodes = {
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    PAGE_UP: 33,
    PAGE_DOWN: 34

};

for (var key in famousCodes) {
    allKeyCodes[key] = famousCodes[key];
}

module.exports = allKeyCodes;
