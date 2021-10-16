import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas">Pizzas Menu</Link>
      </li>
      <li>
        <Link to="">LOGO</Link>
      </li>
      <li>
        <Link to="/slicemasters">Slice Masters</Link>
      </li>
      <li>
        <Link to="/order"> Order Now</Link>
      </li>
    </ul>
  );
}
