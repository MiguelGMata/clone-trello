import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../../assets/images/1.png';
import image2 from '../../../assets/images/2.png';
import image3 from '../../../assets/images/3.png';
import image4 from '../../../assets/images/4.png';
import image5 from '../../../assets/images/5.png';

require('./_slider.scss')

const CarouselContainer = () => {
  return (
    <Carousel className="center" fade={true} pause={false}>
      <Carousel.Item interval={4000}>
        <img
          id="img"
          className="d-block w-80"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-80"
          src={image2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-80"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-80"
          src={image4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-80"
          src={image5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
/**
 *       <Carousel.Caption>
          <h3>Titre</h3>
        </Carousel.Caption>
 */