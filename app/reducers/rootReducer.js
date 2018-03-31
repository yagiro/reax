import example from './exampleReducer';

const rootReducer = (state = {}, action) => ({
    example: example(state.example, action)
});

export default rootReducer;