import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = (props) => {
  const showMeFromMeals = (param) => {
    const mealsFromMeals = param;
    props.dataUp(mealsFromMeals);
    //console.log("Logged from Meals.js " + mealsFromMeals);
  };

  const showMeAmount = (param) => {
    //console.log("Logged from Meals.js " + param);
    const amount = param;
    // props.dataAmount3(amount);
    return amount;
  };
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals dataAmount2={showMeAmount} dataUp={showMeFromMeals} />
    </Fragment>
  );
};

export default Meals;
