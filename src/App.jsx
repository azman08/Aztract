import Demo from "./components/Demo";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <div className="box" />
        </div>

        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
          <Hero />
          <Demo />
        </div>
      </main>
    </>
  );
}

export default App;
