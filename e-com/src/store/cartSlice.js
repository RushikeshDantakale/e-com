import {createSlice} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const initialState = [];

const productView = '' ; 

const isLogin = {
    logIn:false,
    user : null
};

const wishlistItems = [];

const categoryClicked = '';

const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers : {
        add(state,action){

            
            state.push({...action.payload, count:1});
           

        },
        remove(state,action){

            return state.filter((item) => item._id !== action.payload);

        },
        countAdd(state,action){

        const item = state.filter((item)=> {
                return item._id === action.payload;
           });
           item[0].count++;
        
        },
        countMinus(state,action){

            const item = state.filter((item)=> {
                    return item._id === action.payload;
               });
               item[0].count--;
            
            },
       
    }
}
);

const productSlice = createSlice({

    name: 'product',
    initialState : productView,
    reducers : {
        
        view(state,action){
            
            return state = action.payload;

        }
    }
});

const logInSlice = createSlice({
    name : 'logIn',
    initialState : isLogin,
    reducers : {
        isLogIn(state , action){
            return state = {...state , logIn: action.payload};
        },
        user(state,action){
            return state = {...state , user: action.payload};
        },
        logOut(state){
            return state = {
                logIn:false,
                user : null
            };
        }
    }
});


const wishListSlice = createSlice({
    name : 'wishlist',
    initialState : wishlistItems,
    reducers : {
        wishlistAdd(state,action){

            state.push(action.payload);
        },
        wishlistRemove(state,action){

            return state.filter((item) => item._id !== action.payload);

        }
    }
});

const categoryClickSlice = createSlice({
    name : 'categoryClicked' ,
    initialState : categoryClicked,
    reducers : {
        changeCategory(state , action){
            return state = action.payload;
        }
    }
})

export const {add , remove , countAdd ,countMinus, checkout} = cartSlice.actions;

export const {view} = productSlice.actions;

export const {isLogIn , user ,logOut} = logInSlice.actions;

export const {wishlistAdd, wishlistRemove} =wishListSlice.actions;

export const {changeCategory} = categoryClickSlice.actions;
// export default cartSlice.reducer;

const rootReducer = combineReducers({
   cartReducer : cartSlice.reducer,
    productReducer : productSlice.reducer,
    logIn : logInSlice.reducer,
    wishlist : wishListSlice.reducer,
    categoryClick : categoryClickSlice.reducer,

  });

  export default rootReducer;