import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>

    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>

    {controls.map(control => {
      return <BuildControl
        label={control.label}
        type={control.type}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]} />
    })}

    <button className={classes.OrderButton}
      disabled={!props.purchasable}>Order Now!</button>
  </div>
);

export default buildControls;