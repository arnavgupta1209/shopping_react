import Navigation from "./Navigation";


function Home({data, cart, setItem}) {
  return (<>
    <Navigation data = {data} cart = {cart}/>
    <div className=" flex min-w-full grow">
      <div className=" flex grow flex-col w-1/2">
        <div className="bg-red-600 grow-[2] text-white text-8xl text-nowrap overflow-visible relative z-0"><span className="absolute bg-red-500 bottom-0 p-3 shadow-lg pb-4">Shop Whenever, Wherever</span></div>
        <div className="bg-red-400 grow p-1 text-white">Welcome to Shoprify, where fashion meets convenience! Elevate your wardrobe with our curated collection of trendsetting clothing that effortlessly combines style and comfort. We believe that your clothing should not just be an outfit; it should be a statement that reflects your unique personality.</div>
      </div>
      <div className=" grow bg-red-200 w-1/2 flex flex-col"><img className="grow h-1/2" src="https://img.freepik.com/free-photo/portrait-happy-lady-sunglasses-standing-with-colorful-shopping-bags-hands-pink-background-young-woman-standing-white-shirt-denim-shorts_574295-1182.jpg?size=626&ext=jpg&ga=GA1.1.22345107.1710939050&semt=sph" alt="Product Image" /></div>
    </div>
    <footer className="grow min-w-full max-h-10 bg-red-500 flex justify-center text-white">Hi! This was made by Arnav!</footer>
  </>);
}

export default Home;
