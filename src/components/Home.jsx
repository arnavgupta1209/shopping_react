import Navigation from "./Navigation";


function Home() {
  return (<>
    <Navigation />
    <div className="maincontainerdiv flex min-w-full grow">
      <div className="border-4 border-black flex rounded grow ">
        <div></div>
        <div></div>
      </div>
      <div className="border-4 border-black rounded grow "></div>
    </div>
    <footer className="grow">Hi! This was made by Arnav!</footer>
  </>);
}

export default Home;