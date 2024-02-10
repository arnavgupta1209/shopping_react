import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (<>
    <Navigation />
    <div className="maincontainerdiv flex min-w-full">
      <div className="border-4 border-black flex rounded grow ">
        <div></div>
        <div></div>
      </div>
      <div className="border-4 border-black rounded grow "></div>
    </div>
    <footer></footer>
  </>);
}

export default Home;