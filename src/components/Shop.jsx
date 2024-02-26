import Navigation from "./Navigation";
import { useState } from "react";


function Shop() {

    const [price, setPrice] = useState(0);
    
    

    return (<>
        <Navigation shop="true" price = {price}/>
        <div className="maincontainerdiv grow">
            <h1>Shop</h1>
        </div>
    </>)
}

export default Shop;