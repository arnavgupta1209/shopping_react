import {Link} from 'react-router-dom';
import { useState } from 'react';
import CartElement from './CartElement';


function Navigation({data, cart}) {
  const [isopen, setIsOpen] = useState(false);


  console.log(data);
  let price = 0;
  if(data != null){
    for (let i = 1; i < cart.length; i++){
      let itemprice = data[i-1]["price"];
      price = price + itemprice*cart[i];
    }
    price = price.toFixed(2);
  }

  const drop_down = data != null ? cart.map((element, index) => (<CartElement key = {index} product = {data[index-1]} num = {element}/>))   :   (<></>); 

  return (
    <>
    <ul className="flex justify-start min-w-full bg-red-500 text-white pl-0 sticky  top-0 z-40">
      <li className={"text-2xl px-4 bg-red-400 py-2 ml-0"}>Shoprify</li>
      <li className={" mx-4 text-lg py-2 "}><Link to="/">Home</Link></li>
      <li className={" mx-4 text-lg py-2 "}><Link to="/shop">Shop</Link></li>
      <li className={" mx-4 text-lg py-2 relative"} onClick={()=>setIsOpen(!isopen)}>
        Cart: ${price}
        <div className={"absolute top-12  bg-red-500 w-96 h-max min-h-10 max-h-96 overflow-y-scroll	" + (isopen ? "block" : "hidden")}>
          <div className='flex flex-col'>{drop_down}</div>
        </div>
      </li>
    </ul>
    
    </>
  );
}

export default Navigation;