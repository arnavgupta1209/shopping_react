import {Link} from 'react-router-dom';
import { useState } from 'react';


function Navigation({data, cart}) {
  const [isopen, setIsOpen] = useState(false);


  console.log(data);
  let price = 0;
  if(data != null){
    for (let i = 1; i < cart.length; i++){
      let itemprice = data[i-1]["price"];
      price = price + itemprice*cart[i];
    }
  }

  return (
    <>
    <ul className="flex justify-start min-w-full bg-red-500 text-white pl-0 static top-0">
      <li className={"text-2xl px-4 bg-red-400 py-2 ml-0"}>Shoprify</li>
      <li className={" mx-4 text-lg py-2 "}><Link to="/">Home</Link></li>
      <li className={" mx-4 text-lg py-2 "}><Link to="/shop">Shop</Link></li>
      <li className={" mx-4 text-lg py-2 relative"} onClick={()=>setIsOpen(!isopen)}>
        Cart: ${price}
        <div className={"absolute top-10  bg-red-500 w-96 h-max min-h-10 max-h-96 " + (isopen ? "block" : "hidden")}>
          
        </div>
      </li>
    </ul>
    
    </>
  );
}

export default Navigation;