function Pricing(){
    return(
        <div id="pricing" className="py-20 md:px-20 lg:px-20 bg-black">
  <div className="container mx-auto px-4">
    <div className="mb-12 text-center">
      <h3 className="text-purple-400" data-aos="fade-down">Pricing Plans</h3>
      <h2 className="text-white text-[30px] font-bold" data-aos="fade-down">
        Choose Your Perfect Package
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-400" data-aos="fade-down">
        Select from our carefully curated photography packages designed to
        meet your specific needs and budget.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Basic Package Card */}
      <div className="relative bg-[#1A1A1A] border-gray-800 p-6 rounded-xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">
            Basic Package
          </h3>
          <div className="mt-4 text-center">
            <span className="text-4xl text-violet-400 font-bold">
              ₹499
            </span>
            <span className="text-gray-400">/session</span>
          </div>
        </div>
        <div className="mt-6">
          <ul className="mb-8 space-y-4">
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">2 Hour Photo Session</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">50 Digital Images</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Online Gallery</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Basic Editing</span>
            </li>
          </ul>
          <span className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </span>
        </div>
      </div>
      {/* Premium Package Card */}
      <div className="relative bg-violet-900/20 backdrop-blur-lg rounded-2xl border-2 border-violet-500 hover:transform hover:-translate-y-2 transition-all duration-300">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-white text-sm font-semibold">
          Most Popular
        </div>
        <div className="text-center p-6">
          <h3 className="text-2xl font-bold text-white">
            Premium Package
          </h3>
          <div className="mt-4 text-center">
            <span className="text-4xl text-violet-400 font-bold">
              ₹899
            </span>
            <span className="text-gray-400">/session</span>
          </div>
        </div>
        <div className="px-4 pb-8">
          <ul className="mb-8 space-y-4">
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">4 Hour Photo Session</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">100 Digital Images</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Online Gallery</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Advanced Editing</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Print Release</span>
            </li>
          </ul>
          <span className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </span>
        </div>
      </div>
      {/* Professional Package Card */}
      <div className="relative bg-[#1A1A1A] border-gray-800 p-6 rounded-xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">
            Professional Package
          </h3>
          <div className="mt-4 text-center">
            <span className="text-3xl text-violet-400 font-bold">
              ₹1499
            </span>
            <span className="text-gray-400">/session</span>
          </div>
        </div>
        <div className="mt-6">
          <ul className="mb-8 space-y-4">
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Full Day Coverage</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Unlimited Images</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Premium Online Gallery</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Premium Editing</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9 12l2 2 4-4" /></svg>
              <span className="text-white">Photo Album</span>
            </li>
          </ul>
          <span className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
            Choose Plan
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Pricing