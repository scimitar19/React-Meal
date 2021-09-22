import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

import React, { useState } from "react";
let INP1 = [];

let INP2 = [];

const MealItemForm = (props) => {
  const [currentValue, setValue] = useState(1);

  INP2 = [...[props.passedMeals]];

  for (let al = 0; al < props.passedMeals.length; al++) {
    INP2[al] = [];
  }
  // console.log(INP2);

  const listening = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    /////////////////////////////////////////////
    for (let input = 1; input <= INP2.length; input++) {
      if (props.inputFromAM === input) {
        INP1 = currentValue;
        console.log("passed THIS IS INPUT " + input);

        // console.log("This is INP1 = " + INP1);
      }
    }
    /////////////////////////////////////
    let KOLICINA = INP1;

    props.amountData(KOLICINA);
    //console.log(KOLICINA);
    console.log("Ovo je kolicina");
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.inputFromAM,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          onChange: listening,
          value: currentValue,
        }}
      />

      <button onClick={props.NameOfMeals}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
