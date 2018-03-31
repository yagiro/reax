import { RANDOMIZE_COLOR } from '../actions/actionTypes';

const colorChars = [ 'a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9' ];

function getRandomColor () {
    let randomColor = "#";
    for (let i = 0; i < 6; ++i) {
        let randomColorChar = colorChars[getRandomInt(0, colorChars.length)];
        randomColor += randomColorChar;
    }
    return randomColor;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const initialState = {
    color: getRandomColor()
};

const exampleReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case RANDOMIZE_COLOR:
            let randomColor = getRandomColor();
            newState = Object.assign({}, state, {
                color: randomColor
            });
            console.log('Randomized color ' + randomColor);
            break;
    }
    return newState;
};

export default exampleReducer;