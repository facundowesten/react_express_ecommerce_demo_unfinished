import React, {useState} from "react";
import "./ProductCard.css";
import { Badge, Button, Container } from "react-bootstrap";

export const ProductCard = ({
  product
}: {
  product: {
    name: string;
    price: number;
    brand: string;
    category: string;
    type: string;
    isNew: boolean;
  }
}) => {

  const { name, price, brand, category, type, isNew } = product;

  return (
      <div className={"card border-primary card-structure product-card product-card-container"} >
        <div className="product-card-top">
          <div>
            {isNew ? <div className="product-badge bg-primary">New</div> : null}
          </div>
          <div className="brand-logo-container">
            {brand === "adidas" ? (
              <img className="brand-logo" src="/images/adidas.png" />
            ) : null}
          </div>
        </div>
        <img
          src="https://templofutbol.vtexassets.com/arquivos/ids/15313396-500-auto?v=1762957791&width=500&height=auto&aspect=true"
          alt="River Jersey"
          className="product-image"
        />
        <div className="product-card-body">
          <div className="product-card-title">
            River Plate Adidas Jersey Away 2022/23
          </div>

          <div className="price">{16} $</div>
        </div>
        

      
      <div className={"card-bottom "}>

<Button className="product-button text-white" size="lg" variant="primary">View Product</Button>
</div>
</div>

  );
};
