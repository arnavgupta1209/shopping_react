import {Link} from 'react-router-dom';

function Navigation() {
  let listcss = " mx-4 text-lg py-2 ";
  return (
    <>
    <ul className="flex justify-start min-w-full bg-red-500 text-white pl-0 ">
      <li className={"text-2xl px-4 bg-red-400 py-2 ml-0"}>Vithikala</li>
      <li className={listcss}><Link to="/">Home</Link></li>
      <li className={listcss}><Link to="shop">Shop</Link></li>
    </ul>
    </>
  );
}

export default Navigation;