import { Link } from 'gatsby';
import React from 'react';

function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.topping.map((top) => ` ${top.topping} |`)}</p>
    </div>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <div>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizzas.id} pizza={pizza} />
      ))}
    </div>
  );
}
