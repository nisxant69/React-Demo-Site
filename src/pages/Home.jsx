import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../components/Product"

function Home(){
    return(
        <>
        <Navbar text="sign"/>
        <section className="text-gray-600 body-font h-screen flex bg-gray-900 bg-svg-constellation-gray-100 relative">
  <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
    <div className="lg:w-2/3 w-full animate-fade-in-down">
      {/* Change the heading text */}
      <h1 className="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
        Hello, I'm John.
      </h1>
      {/* Change the subheading text */}
      <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
        I’m here to assist <span className="border-b-4 border-green-400 -mb-20" />with your questions.
      </h1>
      {/* Change the paragraph text */}
      <p className="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
        I am a Web developer. I'm here to provide information and answer your queries to the best of my abilities.</p>
      {/* Update the button texts and links */}
      <a className="uppercase rounded-sm bg-red-400 font-bold text-white px-8 py-4 mx-auto mr-4 hidden md:inline" href="#contact-form">Contact Me</a>
      <a className="uppercase rounded-sm bg-green-400 font-bold text-white px-8 py-4 mx-auto hidden md:inline" href="#about-me">About Me</a>
    </div>
  </div>
  <a href="#about-me" className="absolute block mx-auto text-xl md:mt-96 bottom-0 left-1/2 -ml-10 mt-80">
    <svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.1716 29.1716C22.7337 27.6095 25.2663 27.6095 26.8284 29.1716L40 42.3431L53.1716 29.1716C54.7337 27.6095 57.2663 27.6095 58.8284 29.1716C60.3905 30.7337 60.3905 33.2663 58.8284 34.8284L42.8284 50.8284C41.2663 52.3905 38.7337 52.3905 37.1716 50.8284L21.1716 34.8284C19.6095 33.2663 19.6095 30.7337 21.1716 29.1716Z" fill="#FFFFFF" />
    </svg>
  </a>
        </section>
        <Product/>
        <Footer/>
        </>
    )
}
export default Home