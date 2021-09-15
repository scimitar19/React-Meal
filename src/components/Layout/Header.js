import React, { Fragment } from "react";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  //console.log("Logged From Header " + props.cartAmount);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          passingButtonFn={props.buttonFn}
          passingDownCartAmount={props.cartAmount}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
