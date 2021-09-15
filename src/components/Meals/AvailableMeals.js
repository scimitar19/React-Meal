import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
//import Clicking from "./Clicking.js";
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
//let UPDATED = [];
const AvailableMeals = (props) => {
  //const [currentArray, setArray] = useState(DUMMY_MEALS);
  let AMOUNT = [3, 4];
  const Updated = [...DUMMY_MEALS];
  Updated.map((value, index) => (value.amount = AMOUNT[index]));

  const showMeAmount = (listener) => {
    let amount = listener;
    props.dataAmount2(amount);
    // AMOUNT.push(amount);
    // console.log(amount);
    // console.log("fffffffffffffffffffffffff");
    //////////////////////////------------------------------/////////////////////////

    // for (let i = 0; i < DUMMY_MEALS.length; i++) {
    //   DUMMY_MEALS[i].amount = AMOUNT[i];
    //   if (DUMMY_MEALS[i].amount === undefined) {
    //     DUMMY_MEALS[i].amount = 1;
    //   }
    // }

    shoo();
  };
  ////////

  const shoo = () => {
    console.log(AMOUNT[0]);
    console.log("ggggNO 1 IN AMOUNTggggggggg");
    console.log("___________________");
    console.log("!!!FROMAVAILABLE!!!");
    console.log(Updated);
    console.log("^^FROMAVAILABLE^^");
    console.log("Sushi " + Updated[0].amount);
    console.log("Snicla " + Updated[1].amount);
  };

  ////////////////////////////------------------------------/////////////////////////

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
