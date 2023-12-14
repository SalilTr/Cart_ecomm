import "../styles/Home.scss";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
const ProductCard = ({ name, id, price, imgSrc, quantity }) => {
  const dispatch = useDispatch();
  const Addhandler = (options) => {
    console.log(quantity);

    toast.success("added  to cart");
    dispatch({
      type: "addToCart",
      payload: options,
    });
  };
  return (
    <div className="product">
      <img src={imgSrc} alt="noh" />
      <p>{name}</p>
      <h4>${price}</h4>
      <button
        onClick={() => Addhandler({ name, id, price, imgSrc, quantity: 1 })}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
