

function Itemcard({key, id, data, cart, setItem}){
    let indidata = data[id-1];




    return (<div className="grow min-h-80 border-2 min-w-80 flex flex-col items-center p-2 bg-white">
        <img className = "h-40 w-60" src={indidata.image}></img>
        <div className="text-wrap w-80">{indidata.title}</div>
        <div>${indidata.price}</div>
        <div>
            <button onClick={()=> setItem(id, cart[id]+1)}>+</button>
            <div>{cart[id]}</div>
            <button onClick={()=> setItem(id, cart[id]-1)}>-</button>
        </div>
    </div>)
}

export default Itemcard;