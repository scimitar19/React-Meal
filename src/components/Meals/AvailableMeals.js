import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";

import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    idForI: 1,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    idForI: 2,
  },
  /*
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    idForI: 3,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    idForI: 4,
  },
   */
];
let AMOUNT = [];

const AvailableMeals = (props) => {
  // const [currentAmount, setAmount] = useState(
  //   (AMOUNT = DUMMY_MEALS.map((value, index) => (AMOUNT[index] = [1])))
  // );

  const showMeAmount = (listener) => {
    let amount = listener;
    props.dataAmount2(amount);
    AMOUNT.push(amount);
    //setAmount(AMOUNT.push(amount));
    console.log("___________________");
    console.log("!!!FROMAVAILABLE!!!");
    console.log(AMOUNT);
    // AMOUNT.push(amount);
    console.log("^^FROMAVAILABLE^^");
  };
  ////////////////////

  ///////////////------------------------------////////////////////

  const Updated = [...DUMMY_MEALS];
  Updated.map((value, index) => (value.amount = AMOUNT[index]));
  ///----------------------TOCART

  const showMe = (param) => {
    const mealsFromAvailableMeals = param;
    props.dataUp(mealsFromAvailableMeals);
  };

  const passedMeals = DUMMY_MEALS; ///important

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {Updated.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              ////
              KOLICINA={meal.amount}
              inputID={meal.idForI}
              gettingUp={showMe}
              dataAmount1={showMeAmount}
              //  listenerToMealItem={listening1}
              toMealItemForm={passedMeals}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
