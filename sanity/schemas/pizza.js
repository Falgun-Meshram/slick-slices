import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizza',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      inputComponent: PriceInput,
      validation: (Rule) => Rule.min(1000),
    },
    {
      name: 'topping',
      title: 'Topping',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'topping.0.topping',
      topping1: 'topping.1.topping',
      topping2: 'topping.2.topping',
      topping3: 'topping.3.topping',
    },
    prepare: ({ title, media, ...top }) => ({
      title,
      media,
      subtitle: Object.values(top).filter(Boolean).join(', '),
    }),
  },
};
