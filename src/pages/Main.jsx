import React from "react";
import data from "./data";
import Product from "./Product";
import { useState } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

function Main(props) {
  const { products, onAdd } = props;

  return (
    <div>
      <div>
        <div className="drop">
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#fashion">Fashion</NavDropdown.Item>
            <NavDropdown.Item href="#mobile">Mobile</NavDropdown.Item>
            <NavDropdown.Item href="#grocery">Grocery</NavDropdown.Item>
            <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>

      <ul>
        <li>
          <div id="fashion">
            <h1 className="name1">Fashion</h1>
            {data
              .filter((product) => product.title === "fashion")
              .map((filteredproduct) => (
                <Product
                  key={filteredproduct.id}
                  filteredproduct={filteredproduct}
                  onAdd={onAdd}
                ></Product>
              ))}
          </div>
        </li>

        <li>
          <div id="mobile">
            <ul>
              <li>
                <h1 className="name1">Mobile</h1>
              </li>

              <li>
                {data
                  .filter((product) => product.title === "mobile")
                  .map((filteredproduct) => (
                    <Product
                      key={filteredproduct.id}
                      filteredproduct={filteredproduct}
                      onAdd={onAdd}
                    ></Product>
                  ))}
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div id="grocery">
            <ul>
              <li>
                <h1 className="name1">Grocery</h1>
              </li>

              <li>
                {data
                  .filter((product) => product.title === "grocery")
                  .map((filteredproduct) => (
                    <Product
                      key={filteredproduct.id}
                      filteredproduct={filteredproduct}
                      onAdd={onAdd}
                    ></Product>
                  ))}
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div id="electronics">
            <ul>
              <li>
                <h1 className="name1">Electronics</h1>
              </li>
              <li>
                {data
                  .filter((product) => product.title === "electronics")
                  .map((filteredproduct) => (
                    <Product
                      key={filteredproduct.id}
                      filteredproduct={filteredproduct}
                      onAdd={onAdd}
                    ></Product>
                  ))}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Main;
