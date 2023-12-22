import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

function Products() {
  // Use the useContext hook to get the products and addItem function from the context
  const { products, addItem } = useContext(ProductContext);

  return (
    <div className="products">
      {products.map(product => (
        <div className="product" key={product.id}>
          <h2>{product.title}</h2>
          <button onClick={() => addItem(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductContext;
