import React from 'react';
import classnames from 'classnames';


const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete}) => {
  return (
    <article className={ classnames ('Grocery', {starred, purchased})}>
      <h3>{name}</h3>
      { quantity ? <p className="Grocery-quantity">Quantity: {quantity}</p> : null}
      { notes ? <p className="Grocery-notes">{notes}</p> : null}
      { purchased ? <button onClick={ onPurchase } className="Grocery-purchased">Unpurchase</button> : <button className="Grocery-purchased">Purchase</button>}
      { starred ? <button onClick= { onStar } className="Grocery-starred">Unstar</button> : <button className="Grocery-starred">Star</button>}
      <button className="remove-button" onClick={ onDelete }>Remove</button>
    </article>
  );
};

export default Grocery;
