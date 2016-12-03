import React from 'react';
import cn from 'classnames';
import { Carousel } from 'react-bootstrap';

const _image = (
  <img className={cn('header-slide')} src="https://placeholdit.imgix.net/~text?txtsize=100&txt=1200%C3%97500&w=1200&h=500" />
);

const Slide = () => (
  <Carousel>
    <Carousel.Item>
      {_image}
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      {_image}
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Slide;
