

function CartElement({ key, product, num }) {
    if (num === 0) {
      return (<></>);
    }

  return (
    <div className="p-2 bg-red-400 m-2 rounded flex text-sm h-28 items-center">
        <img src={product.image} className="max-h-20 max-w-20 bg-white p-2 rounded grow"></img>
        <div className="flex flex-col size-min p-2">
            <h1 className=" truncate flex max-w-52">{product.title}</h1>
            <p>${product.price} X {num}: ${product.price*num}</p>
        </div>
    </div>
  );
}

export default CartElement;