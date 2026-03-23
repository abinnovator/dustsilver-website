import { Link } from "react-router-dom";
import {
  Button,
} from "../../components/ui/button";

function Download() {
  return (
    <div className="bg-[#1F2326] min-h-screen">
      {/* Container with relative positioning to hold the background overlay */}
      <main className="relative h-screen w-screen overflow-hidden bg-cover bg-center 
                       before:content-[''] before:absolute before:inset-0 
                       before:bg-[url(/image.png)] before:bg-cover before:bg-center 
                       before:opacity-20 before:z-0">
        
        {/* Everything inside must be z-10 to sit on top of the background */}
        <div className='relative z-10 w-screen font-montserrat text-white'>
          <div className="py-7 px-24">
            <nav className="bg-[#D9D9D9]/5 backdrop-blur-xs flex flex-row justify-between pr-4 pl-6 py-2 rounded-2xl items-center border border-white/10">
              <div className="flex flex-row gap-2.5">
                  <img src="/Logo.png" />
                  <Link to="/" className="text-2xl font-extrabold text-white hover:text-gray-300 transition">Dustsilver</Link> 
              </div>
              <div className="flex flex-row gap-5 items-center">
                <Link to="/" className="text-2xl font-extrabold cursor-pointer hover:text-silver-100 transition">Home</Link>
                <a href="https://github.com/abinnovator/Pokemon-Dust-Silver" target="_blank"><img src="/github-brands-solid-full (2).svg" width={44.91} height={44.91} alt="GitHub" /></a>
                <a href="https://ko-fi.com/abinnovator" target="_blank"><img src="kofi.png" className="max-w-[125px] max-h-[66px]" alt="Ko-fi" /></a>
              </div>
            </nav>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-7 text-white pt-28 px-24 justify-center items-center">
          <h1 className="text-6xl font-extrabold max-w-4xl text-center">
            Download Alpha v1 for windows
          </h1>
          <a href="/dustsilver_alphav2.zip" download={true}><Button className="cursor-pointer p-0 bg-white text-black"><span className="text-[20px] py-24 px-9">Download Latest</span></Button></a>
        </div>
      </main>

      
    </div>
  );
}

export default Download;
