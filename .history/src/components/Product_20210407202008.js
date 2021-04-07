import React, { Component } from "react";
import Product2 from "./Product2";
class Product extends Component {
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <Product2 />
          <Product2 />
          <Product2 />
          <Product2 />
        </div>
      </section>
    );
  }
}

export default Product;
