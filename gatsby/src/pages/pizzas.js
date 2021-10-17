import { graphql } from 'gatsby';
import React from 'react';
import Nav from '../components/Nav';
import PizzaList from '../components/PizzaList';

export default function PizzasPage({ data }) {
  return (
    <div>
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
        topping {
          topping
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
