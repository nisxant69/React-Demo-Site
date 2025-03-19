import { Link, useLocation } from "react-router-dom";

function Navbar({text}) {
  let {pathname} = useLocation()
  console.log(pathname)
  return (
    <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        {/* Logo */}
        <div className="relative flex items-center">
          <Link to="/">
            <img
              src="https://www.svgrepo.com/show/499831/target.svg"
              loading="lazy"
              width={32}
              height={32}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Menu */}
        <ul className="hidden items-center justify-center gap-6 md:flex">
          <li className="pt-1.5 text-sm font-medium text-slate-700">
            <Link to="/">Home</Link>
          </li>
          <li className="pt-1.5 text-sm font-medium text-slate-700">
            <Link to="/prices">Pricing</Link>
          </li>
          <li className="pt-1.5 text-sm font-medium text-slate-700">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="pt-1.5 text-sm font-medium text-slate-700">
            <Link to="/docs">Docs</Link>
          </li>
          <li className="pt-1.5 text-sm font-medium text-slate-700">
            <Link to="/details">Products</Link>
          </li>
        </ul>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Auth Buttons */}

        {text=="sign" ? "":""}
        <div className="hidden items-center justify-center gap-6 md:flex">
          {/* <Link to="/login" className="text-sm font-medium text-slate-700">
            Sign in
          </Link> */}
          {
            pathname !="/login" && (
          <Link
            to="/login"
            className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Sign up for free
          </Link>

            )
          }
        </div>

        {/* Mobile Menu Button */}
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-auto text-slate-900"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
