import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (<>
    <Navigation />
    <div className="maincontainerdiv flex">
      <div className="smallerdiv flex">
        <div></div>
        <div></div>
      </div>
      <div className="smallerdiv"></div>
    </div>
    <footer></footer>
  </>);
}

export default Home;