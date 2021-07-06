


const initialState = {
    counter : 0,
    data : {},
    items : []

};

const reducers = (state, action) => {
    state = state || initialState;

    switch(action.type) {
        case counterTypes.increment:
            return {
                ...state,
                counter: state.counter+1
            }
        case counterType.decrement:
            return {
                ...state,
                counter:state.counter-1
            }
        
            case counterTypes.add:
                return {
                    ...state,
                    data:action.payload

                }
    }
}