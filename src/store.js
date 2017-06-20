import { createStore } from 'redux'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state
    }

    return state
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())