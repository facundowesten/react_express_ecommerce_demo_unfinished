import React, { useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/Navbar'
import { ProductsList } from '../components/ProductsList'
import { ProductCard } from '../components/ProductCard'
import "./ProductsPage.css"
import { Filter } from '../components/Filter'
import { useLocation } from 'react-router-dom'


const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setfilters] = useState({
    brand: [],
    type: []
  })
  const [sortBy, setsortBy] = useState("newest");

  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  
  useEffect(() => {
    console.log(`${process.env.REACT_APP_API_URL}/product/`);
    fetch(`${process.env.REACT_APP_API_URL}/product/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
      setProducts(data);
      setFilteredProducts(data);
    })
  }, [category]);

  
  return (
    <div>
    <NavbarComponent />
    <Container onClick={() => {console.log(filters)}}>
      <div className='products-list-page-container'>
        <Filter filtersState={setfilters} sortState={setsortBy}/>
    <ProductsList>
      
      {products.length > 0 ? products.map((product) => (
        <ProductCard product={product}/>
        
      )) : <div>loading...</div>}

    </ProductsList>
    </div>
    </Container>
    </div>
  )
}

export default ProductList