import { useState } from 'react';
import { Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pizza1 from '../assets/pizza1.png'
import pizza2 from '../assets/pizza2.png'
import pizza3 from '../assets/pizza3.png'
import pizza4 from '../assets/pizza4.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={pizza1} className='Carousel' alt='pizza1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pizza2} className='Carousel' alt='pizza2'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pizza3} className='Carousel' alt='pizza3'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pizza4} className='Carousel' alt='pizza4'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;