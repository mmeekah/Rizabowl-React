import React, { Component } from "react";
import items from "./data";
const ProductContext = React.createContext();
//<ProductContext.Provider vale={'hello'}

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0
    // breakfast: false,
    //pets: false
  };
  //getData{

  componentDidMount() {
    //this.getData
    let products = this.formatData(items);
    let featuredProducts = products.filter(
      product => product.featured === true
    );
    this.setState({
      products,
      featuredProducts,
      sortedProducts: products,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let product = { ...item.fields, images, id };
      return product;
    });
    return tempItems;
  }

  getProduct = slug => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find(product => product.slug === slug);
    return product;
  };

  render() {
    return (
      <ProductContext.Provider
        value={{ ...this.state, getProduct: this.getProduct }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {value => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}

export { ProductProvider, ProductConsumer, ProductContext };
