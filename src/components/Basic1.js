import React, { useState } from 'react';

const Basic1 = () => {
  const [product, setProduct] = useState({ name: '', price: '' });

  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </form>
      <h1>hello {product.name},</h1>
      <p>you have {product.price}</p>
    </>
  );
};

export default Basic1;
