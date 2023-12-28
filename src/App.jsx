import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App= () =>{
  return(  
  <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-container bg-gray-300 min-h-screen">
        <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
        <button>
            <MoonIcon fill="#000"/>
        </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex items-center gap-4 px-4 mt-8">
            <span className="rounded-full border-2 inline-block h-5 w-5"></span>
            <input  className="w-full text-gray-400 outline-none"
            type="text" placeholder="Create a new todo.."/>
        </form>
        </header>
        <main className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-md  ">
            <article className="flex gap-4 py-4 border-b-2 border-b-gray-300 px-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
              <p className="text-gray-600 text-grow">Complete online Javascript curse in bluuweb</p>
              <button className="ml-auto flex-none"><CrossIcon/></button>
            </article>
            <article className="flex gap-4 py-4 border-b-2 border-b-gray-300 px-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
              <p className="text-gray-600 text-grow">Complete online Javascript curse in bluuweb</p>
              <button className="ml-auto flex-none"><CrossIcon/></button>
            </article>
            <article className="flex gap-4 py-4 border-b-2 border-b-gray-300 px-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
              <p className="text-gray-600 text-grow">Complete online Javascript curse in bluuweb</p>
              <button className="ml-auto flex-none"><CrossIcon/></button>
            </article>
            <article className="flex gap-4 py-4 border-b-2 border-b-gray-300 px-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
              <p className="text-gray-600 text-grow">Complete online Javascript curse in bluuweb</p>
              <button className="ml-auto flex-none"><CrossIcon/></button>
            </article>
            <article className="flex gap-4 py-4 border-b-2 border-b-gray-300 px-4">
              <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
              <p className="text-gray-600 text-grow">Complete online Javascript curse in bluuweb</p>
              <button className="ml-auto flex-none"><CrossIcon/></button>
            </article>
            </div>
            <section className="py-4 px-4 flex justify-contet-between">
               <span className="text-gray-400">items left</span>
               <button className="text-gray-400">Clear Completed</button>
            </section>
        </main>

        <section className="container mx-auto px-4 mt-8">
            <div className="bg-white p-4 rounded-md flex justify-center gap-4">
            <button className=" text-blue-900">All </button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
            </div>
        </section>

        <section>
          <p className="text-center">Drag and drop to reorder list</p>
        </section>
  
  </div>
  
)
}; 

export default App;
