import { ActionTypes } from "../constants/action-types";

//Initial state
const initialState = {
    numberCart: 0,
    carts: []
}

export const cartReducer = (state=initialState, {type, payload}) => {

    switch(type){

        case ActionTypes.GET_NUMBER_CART:
            return {...state}

        case ActionTypes.ADD_TO_CART:
            if(state.numberCart === 0){
                let item = {...payload, quantity: 1};
                state.carts.push(item);
            }else {
                let check = false;
                state.carts.map((item,index)=>{
                    if(item.id === payload.id){
                        state.carts[index].quantity++;
                        check = true;
                    }
                });

                if(!check){
                    let _item = {...payload, quantity: 1};
                    state.carts.push(_item);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1,
            }
        
        case ActionTypes.INCREASE_QUANTITY:
            state.carts.map((item,index)=>{
                if(item.id === payload.id){
                    state.carts[index].quantity++;
                }
            });
            return {...state}

        case ActionTypes.DECREASE_QUANTITY:
            //if item's quantity > 1, then decrement the quantity
            //if item's quantity = 1, then remove the item from carts array
            const cartIndex = state.carts.findIndex(item => item.id === payload.id)
            if(state.carts[cartIndex].quantity > 1){
                state.carts[cartIndex].quantity -= 1
            }else if(state.carts[cartIndex].quantity === 1){
                //Removing that item from carts
                state.carts = state.carts.filter(item => item.id !== payload.id);
                state.numberCart -= 1
            }

            return {...state}

        default:
            return state;
    }
}