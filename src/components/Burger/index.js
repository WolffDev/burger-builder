import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const burger = props => {
  let transformedingredients = Object.keys(props.ingredients)
    .map(igKey =>
      [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedingredients.length === 0) {
    transformedingredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
