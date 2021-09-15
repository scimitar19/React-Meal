import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price}`;
  //<<<-----------------------------------------------///////////
  const gettingAmount = (listener) => {
    const amount = listener;
    //mealAmount = amount;
    props.dataAmount1(amount);
    // console.log(amount);
    // console.log("LLLLLLLLLLLLLLLLL");
  };
  //<<<------------------------------------------/////////////

  const buttonFn = (event) => {
    event.preventDefault();

    const nameOfMeal = {
      name: props.name,
      price: props.price,
      amount: props.KOLICINA, ///////////////////////
      InputID: props.inputID,
    };

    console.log("^^^^^^^^^^^^^^^^");
    props.gettingUp(nameOfMeal);
    console.log(nameOfMeal);
    console.log("^^MEAL-ITEM^^^");
  };
  //<<<<<<<<<<-------------------------------------/////////////
  // const listenerUp = () => {
  //   //console.log("I 'M LOGGED FROM MEALITEM.js");
  //   props.listenerToMealItem(listenerUp);
  // };
  //<<<<<<<<<<-------------------------------------/////////////

  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          inputFromAM={props.inputID}
          amountData={gettingAmount}
          NameOfMeals={buttonFn}
          // FnForMIF={listenerUp}
          passedMeals={props.toMealItemForm}
        />
      </div>
    </li>
  );
};
export default MealItem;
