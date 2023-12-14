import { createReducer } from "@reduxjs/toolkit";

export const cartReducer=createReducer({

    cartItems:[],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0,
   
},
{
addToCart:(state,action)=>{
    let item=action.payload;
    let isItemExist=state.cartItems.find(element=>element.id===item.id)
    if(isItemExist){
      state.cartItems.forEach((element)=>{
        if(element.id===item.id)
            element.quantity+=1;
        console.log(item.quantity);
      })
    }else{
        state.cartItems.push(item)

    }
},
decrement:(state,action)=>{
    let item=action.payload;
    let isItemExist=state.cartItems.find(element=>element.id===item.id)
    if(isItemExist){
      state.cartItems.forEach((element)=>{
        if(element.id===item.id){

            element.quantity>1? element.quantity-=1:element.quantity=1;
        console.log(item.quantity);
        }
      })
    }
},
deleteCart:(state,action)=>{
    state.cartItems=state.cartItems.filter((element)=>
       
            element.id !== action.payload,
        
    )
},
calculate:(state,action)=>{
    let sum=0;
    state.cartItems.forEach((element)=>sum+=element.price*element.quantity);
    state.subTotal=sum;
    state.shipping=state.subTotal >1000? 0:200;
    state.tax=(state.subTotal+state.shipping)*18
    state.total=(state.subTotal+state.shipping+state.tax)
}

}

)