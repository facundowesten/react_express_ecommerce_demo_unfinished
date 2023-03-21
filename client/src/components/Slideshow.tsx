import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Slideshow = () => {
  return (

      <Carousel>
        <Carousel.Item className="mh-100">
            <img
              className="d-block w-100 carousel-image"
              src="/images/1.jpg"
              alt="Nike"
            />
        </Carousel.Item>
        <Carousel.Item className="mh-100">
            <img
              className="d-block w-100 carousel-image"
              src="/images/2.jpg"
              alt="Adidas"
            />
        </Carousel.Item>
        <Carousel.Item className="mh-100">
          <LinkContainer to="/">
            <img
              className="d-block w-100 carousel-image"
              src="/images/3.jpg"
              alt="Penalty"
            />
          </LinkContainer>
        </Carousel.Item>
      </Carousel>
  );
};

export default Slideshow;
