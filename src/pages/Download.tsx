import { Link } from "react-router-dom";
import {
  Button,
} from "../../components/ui/button";
import Navbar from "../../components/Navbar";

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
            <Navbar />
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-7 text-white pt-28 px-24 justify-center items-center">
          <h1 className="text-6xl font-extrabold max-w-4xl text-center">
            Download Alpha v1 for windows
          </h1>
          <a href="/Alphav5.zip" download={true}><Button className="cursor-pointer p-0 bg-white text-black"><span className="text-[20px] py-24 px-9">Download Latest</span></Button></a>
        </div>
      </main>

      
    </div>
  );
}

export default Download;
