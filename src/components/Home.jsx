import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (<>
    <Navigation />
    <div className="maincontainerdiv bg-red">
      <div className="smallerdiv"></div>
      <div className="smallerdiv"></div>
    </div>
  </>);
}

export default Home;