

function Itemcard({key, id, data, cart, setItem}){
    let indidata = data[id-1];




    return (<div className="grow min-h-80 border-2 min-w-80 flex flex-col items-center p-3 bg-white justify-between">
        <img className = "h-40 w-50" src={indidata.image}></img>
        <div className="text-pretty w-80">{indidata.title}</div>
        <div>${indidata.price}</div>
        <div>
            <button onClick={()=> setItem(id, cart[id]+1)} className="bg-red-400 text-white w-5 rounded-t-md">+</button>
            <div className="flex w-5 justify-center align-middle">{cart[id]}</div>
            <button onClick={()=> setItem(id, cart[id]-1)} className="bg-red-400 text-white w-5 rounded-b-md">-</button>
        </div>
    </div>)
}

export default Itemcard;