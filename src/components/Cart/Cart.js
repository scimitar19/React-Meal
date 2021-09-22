import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

let all = 0;
let Total = 0;

const Cart = (props) => {
  //const amountFromApp = props.amountAppToCart;
  // console

  const amountPerItem = props.amountAppToCart;
  const toCarting = props.mealAppToCart;
  const names = toCarting.map((value, index) => value);
  console.log(toCarting);
  console.log("^^FROMCART^^");

  // let array = [];
  // for (let i = 0; i < toCarting.length; i++) {
  //   array.push([amountPerItem]);
  //   toCarting[i].amount = amountPerItem[i];
  // }

  const summarized = toCarting.map((value) => value.price * amountPerItem);
  // console.log("This is carting name " + summarized);
  // console.log("This is AMOUNTPERITEM " + amountPerItem);

  // for (let i = 0; i < toCarting.length; i++) {
  //   Total += priceInCart[i] * amountPerItem[i];
  // }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        ...toCarting,
        //{ id: "c1", name: "Sushi", amount: 2, price: 12.99 },
        //{ id: "c2", name: "Snitzel", amount: 2, price: 12.99 },
      ].map((item, index) => (
        <li>
          {` ${item.name}---${item.price} x ${item.amount} = ${(all =
            item.price * item.amount)}`}
        </li>
      ))}
    </ul>
  );

  //console.log("This is TOTAL == " + Total);

  return (
    <Modal passingButtonFn={props.buttonFn}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${Total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.buttonFn}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
