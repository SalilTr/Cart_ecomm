import { AiFillDelete } from "react-icons/ai";
import "../styles/Cart.scss";
import { useDispatch } from "react-redux";
const CartItem = ({ imgSrc, name, price, qty, id }) => {
const dispatch=useDispatch()
  
  const increment = (id) => {
    dispatch({
      type:"addToCart",
      payload:{id}
    })
    dispatch({
      type:"calculate",
      
    })
    
  };
  const decrement = () => {
    dispatch({
      type:"decrement",
      payload:{id}
    })
    dispatch({
      type:"calculate",
      
    })
    console.log("deleted");
    
  };
  const deleteCart = () => {
    dispatch({
      type:"deleteCart",
      payload:{id}
    })
  };
  return ( 
    <div className="cart-item">
      <article>
        <img src={imgSrc} alt="noh" />
        <h3>{name}</h3>
        <h3>${price}</h3>
      </article>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>increment</button>

      <button onClick={() => decrement(id)}>decrement</button>

      <AiFillDelete onClick={() => deleteCart(id)} />
    </div>
  );
 
};
export default CartItem;
