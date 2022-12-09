import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initState = {counter:0, showCounter : true}

   const counterSlice = createSlice({
        name:'counter',
        initState,
        reducers:{
            increment(state){
                state.counter++;
            },
            decrement(state){
                state.counter--
            },
            increase(state, action){
                state.counter = state.counter + action.amount;
            },
            toggle(state){
                state.showCounter = !state.showCounter;
            }
        }
    })
const store = configureStore({
    reducer : counterSlice.reducer
})
const counterAction = counterSlice.actions;

export default store;