// mutations/index.js

import { INCREMENT, DECREMENT } from '../constants';

export default {
    [INCREMENT] (state) {
        state.count ++
    },
    [DECREMENT] (state) {
        state.count --
    }
}
