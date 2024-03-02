import Navigation from "./Navigation";
import Itemcard from "./Itemcard";

function Shop({data, cart, setItem}) {
    let cards = (<></>);
    if (data != null){
        cards = (<>
        {
            data.map((element) => <Itemcard key = {element.id} id = {element.id} data={data} cart = {cart} setItem={setItem}/>)
        }</>);
    }
    return (<>
        <Navigation data = {data} cart = {cart}/>
        <div className=" grow flex min-w-full flex-wrap ">
            {cards}
        </div>
    </>)
}

export default Shop;