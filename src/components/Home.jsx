import Navigation from "./Navigation";


function Home() {
  return (<>
    <Navigation />
    <div className="maincontainerdiv flex min-w-full grow">
      <div className=" flex grow flex-col">
        <div className="bg-red-600 grow"></div>
        <div className="bg-red-400 grow-[2]"></div>
      </div>
      <div className=" grow bg-red-200"></div>
    </div>
    <footer className="grow min-w-full bg-red-500 flex justify-center text-white">Hi! This was made by Arnav!</footer>
  </>);
}

export default Home;

