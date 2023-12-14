import "../styles/Cart.scss";
import React from 'react';
import "../styles/Cart.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
    const {cartItems}=useSelector((state)=>state.cart);
    const {subTotal}=useSelector((state)=>state.cart);
    const {shipping}=useSelector((state)=>state.cart);
    const {total}=useSelector((state)=>state.cart);
    const {tax}=useSelector((state)=>state.cart);
    console.log(cartItems);
    const img1="https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg";
    const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFLcTftUDbZUFvuep0wL84Zm1gn11vFG-tf2nwnIwZg&s"

    
    
  return (
    <div className="whole-cart">
    <div className="cart-list">
        <main> {
       
        }
        </main>
      <aside>
      <h3>subtotal:{subTotal}</h3>
      <h3>shipping:{shipping}</h3>
      <h3>tax:{tax}</h3>
      <h3>Total:{total}</h3>
      </aside>
      </div>
      <div className="cart">
      {
        cartItems.length>0? cartItems.map((element,index)=>{
            return(
               <div className="cart-index">
               <CartItem key={index} name={element.name} id={element.id} price={element.price} imgSrc={element.image} qty={element.quantity}/>
              
               
               </div>
              
            )
        }):<h1>No items yet</h1>
        
       }
       
      
  
    </div>
    </div>
  )
}

export default Cart

