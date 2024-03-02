import Home from './Home';
import Shop from './Shop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect,useState } from 'react';

function Router() {
    const [data, setData] = useState(null);
    const [cart, setCart] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

    function setItem(id, amount){
        if (amount < 0) {return;}
        let new_cart = [...cart];
        new_cart[id] = amount;
        setCart(new_cart);
    }



    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
        
    }, []);


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home data = {data} cart = {cart} setItem = {setItem}/>
        },
        {
            path: '/shop',
            element: <Shop data = {data} cart = {cart} setItem = {setItem}/>
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Router;