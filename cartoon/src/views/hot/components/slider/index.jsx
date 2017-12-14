import React, {Component} from 'react';

import Slider from './Slider/Slider';

const IMAGE_DATA = [
  {
    src: 'https://static.manmanapp.com/Banner/5a167613f05d3.webp-conj',
    alt: 'images-1',
  },
  {
    src: 'https://static.manmanapp.com/Banner/5a1f6cb02e258.webp-conj',
    alt: 'images-2',
  },
  {
    src: 'https://static.manmanapp.com/Banner/5a1f6cfc85d88.webp-conj',
    alt: 'images-3',
  },
  {
    src: 'https://static.manmanapp.com/Banner/5a1f6cb02e258.webp-conj',
    alt: 'images-4'
  },
  {
    src: 'https://static.manmanapp.com/Banner/5a16763473716.webp-conj',
    alt: 'images-5'
  }
];
export default class slider extends Component {
  render () {
    return (
      <div>
        <Slider
          items={IMAGE_DATA}
          speed={1.2}
          delay={2.1}
          pause={false}
          autoplay={true}
          dots={true}
          arrows={false}
        />
      </div>
    )
  }
}
