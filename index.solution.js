```javascript
// app/product/[...id].js

export default function ProductDetails({ params }) {
  const productId = params?.id?.join('.'); //Handle potential arrays
  console.log("productId", productId);
  return (
    <div>Product details for ID: {productId}</div>
  );
}
```