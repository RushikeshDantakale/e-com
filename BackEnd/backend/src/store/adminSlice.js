import {createSlice} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const renderData = true;


const renderSlice = createSlice({
    name: 'render',
    initialState:renderData,
    reducers : {
        changeRender(state){
            return !state;
        }
    }
}
);





export const {changeRender} = renderSlice.actions;



const rootReducer = combineReducers({
   render : renderSlice.reducer,
  });

  export default rootReducer;