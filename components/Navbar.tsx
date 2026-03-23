import { Link } from "react-router-dom";

const Navbar = () => {
  return (
     <nav className="bg-[#D9D9D9]/5 backdrop-blur-xs flex flex-row justify-between pr-4 pl-6 py-2 rounded-2xl items-center border border-white/10">
                  <div className="flex flex-row gap-2.5">
                    <img src="/Logo.png" />
                    <Link to="/" className="text-2xl font-extrabold text-white hover:text-gray-300 transition">Dustsilver</Link> 
                </div>
              <div className="flex flex-row gap-5 items-center">
                <Link to="/locations" className="text-2xl font-extrabold cursor-pointer hover:text-silver-100 transition">Locations</Link>

                <Link to="/download" className="text-2xl font-extrabold cursor-pointer hover:text-silver-100 transition">Download</Link>
                <a href="https://github.com/abinnovator/Pokemon-Dust-Silver" target="_blank"><img src="/github-brands-solid-full (2).svg" width={44.91} height={44.91} alt="GitHub" /></a>
                <a href="https://ko-fi.com/abinnovator" target="_blank"><img src="kofi.png" className="max-w-[125px] max-h-[66px]" alt="Ko-fi" /></a>
              </div>
            </nav>
  )
}

export default Navbar