import { graphql } from 'gatsby';
import React from 'react';
import Nav from '../components/Nav';
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingFilter';

export default function PizzasPage({ data }) {
  return (
    <div>
      <ToppingsFilter />
      <PizzaList pizzas={data.pizzas.nodes} />
    </div>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          name
          id
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
