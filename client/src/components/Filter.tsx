import React from "react";
import "./Filter.css";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
export const Filter = ({filtersState, sortState} : {filtersState: Function, sortState: Function}) => {
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        
        if(e.target.checked){
            filtersState((prevState) => ({...prevState, [name]: [...prevState[name], value]}));
        }
        else {
            filtersState((prevState) => ({...prevState, [name]: prevState[name].filter((item) => item !== value)}));
        }
        
        
    }

    const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        sortState(e.target.value);
    }


  return (
    <div className="filter">
      <div className="filter-title">Filter </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Brands</Accordion.Header>
          <Accordion.Body className="filter-category-items">
            <div className="filter-item d-flex flex-column filter-checkboxes">
              <Form.Check
                type="checkbox"
                label="Nike"
                name="brand"
                value="nike"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="checkbox"
                label="Adidas"
                name="brand"
                value="adidas"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="checkbox"
                label="Puma"
                name="brand"
                value="puma"
                onChange={handleFilterChange}

              />
              <Form.Check
                type="checkbox"
                label="Reebok"
                name="brand"
                value="reebok"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="checkbox"
                label="Penalty"
                name="brand"
                value="penalty"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="checkbox"
                label="New Balance"
                name="brand"
                value="new balance"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="checkbox"
                label="Under Armour"
                name="brand"
                value="under armour"
                onChange={handleFilterChange}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Type</Accordion.Header>
          <Accordion.Body className="filter-category-items">
            <div className="filter-item d-flex flex-column filter-checkboxes">
              <Form.Check
                type="checkbox"
                label="Womens"
                name="type"
                value="womens"
                onChange={handleFilterChange}
              />
                <Form.Check
                type="checkbox"
                label="Mens"
                name="type"
                value="mens"
                onChange={handleFilterChange}
                />
                <Form.Check
                type="checkbox"
                label="Kids"
                name="type"
                value="kids"
                onChange={handleFilterChange}
                />
              
            </div>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
      <div className="sort-by">
          <span className="sort-by-text">Sort By:</span>
        <Form.Select aria-label="Sort By" onChange={handleSortByChange}>
          <option value={"newest"}>Newest Items</option>
          <option value={"price_ascending"}>Price (asc)</option>
          <option value={"price-descending"}>Price (desc)</option>
        </Form.Select>
        </div>
    </div>
  );
};
