import Header from "./components/Layout/Header";
import React, { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

let passedAmount = 1;

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);
  const [currentMeal, setMeal] = useState("");

  const showMe = (param) => {
    //const mealsFromApp = param;
    setMeal(param);
    console.log(param);
    console.log("FROM APP");

    // console.log(arr);
    // console.log("FROMAPPPPP");
    // arr.push(mealsFromApp);
    // setMeal(arr);
  };

  // const amountFromApp = (param) => {
  //   const amount = param;
  //   //  console.log("This is amount from APP " + amount);
  //   passedAmount = amount;
  // };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && (
        <Cart
          buttonFn={hideCartHandler}
          mealAppToCart={showMe()}
          amountAppToCart={passedAmount}
        />
      )}
      <Header buttonFn={showCartHandler} cartAmount={cartAmount} />
      <main>
        <Meals dataUp={showMe} /*dataAmount3={amountFromApp}*/ />
      </main>
    </Fragment>
  );
}

export default App;
