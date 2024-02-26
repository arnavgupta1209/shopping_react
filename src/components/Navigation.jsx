import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation(props) {

  let counter = (<></>);
  if (props.shop === "true"){
    counter = (
      <li className={" mx-4 text-lg py-2 "}>Price: {props.price}$</li>
    )
  }


  return (
    <>
    <ul className="flex justify-start min-w-full bg-red-500 text-white pl-0 static top-0">
      <li className={"text-2xl px-4 bg-red-400 py-2 ml-0"}>Shoprify</li>
      <li className={" mx-4 text-lg py-2 "}><Link to="/">Home</Link></li>
      <li className={" mx-4 text-lg py-2 "}><Link to="/shop">Shop</Link></li>
      {counter}
    </ul>
    </>
  );
}

Navigation.propTypes = {
  shop : PropTypes.string,
  price : PropTypes.number,
};

Navigation.defaultProps = {
  shop : "false",
  price : 0,
};


export default Navigation;