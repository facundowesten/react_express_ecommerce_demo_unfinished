import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Slideshow from '../components/Slideshow';
import { ProductCard } from "../components/ProductCard";
import {SectionDivider} from "../components/SectionDivider";
import { ProductsContainer } from '../components/ProductsContainer';
import { Container } from "react-bootstrap";
import { CategoryBlock } from "../components/CategoryBlock";


const Home = () => {

  const [items, setitems] = useState([])

  
  return (
    <div>
      <Navbar />
      <Slideshow />
      <SectionDivider position={"left"} text="New Items"/>
      <ProductsContainer>
        
      </ProductsContainer>
      <Container className="d-flex flex-column justify-content-between flex-md-row">
        <CategoryBlock  backgroundImagePath="./images/shoes.jpg" categoryName="SHOES"/>
        <CategoryBlock  backgroundImagePath="./images/jerseys.jpg" categoryName="JERSEYS"/>
        <CategoryBlock  backgroundImagePath="./images/accesories.jpg" categoryName="ACCESORIES"/>
      </Container>
      <SectionDivider position={"center"} text="Popular Items"/>
      
    </div>
  );
};

export default Home;
