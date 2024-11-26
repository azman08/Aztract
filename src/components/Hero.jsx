import Logo from "../assets/AT.png";
const Hero = () => {
  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-center gap-4 items-center w-full mb-10 pt-3">
          <img
            src={Logo}
            alt="logo"
            className="w-20 rounded-full object-contain"
          />

          <button
            type="button"
            onClick={() => window.open("https://github.com/azman08")}
            className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            Github
          </button>
        </nav>
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
          Sumamrize Articles with <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            AZTRACT
          </span>
        </h1>
        <p>An OPEN-AI CHAT-GPT4 alternative</p>
        <h2 className="mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl">
          Streamline your reading with Summarize, an open-source tool that
          converts lengthy articles into brief and clear summaries.
        </h2>
      </header>
    </>
  );
};

export default Hero;
