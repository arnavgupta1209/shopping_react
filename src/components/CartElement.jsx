

function CartElement({ key, product, num }) {
    if (num === 0) {
      return (<></>);
    }

  return (
    <div className="p-2 bg-red-400 m-2 rounded">
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
}

export default CartElement;