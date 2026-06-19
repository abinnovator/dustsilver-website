import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Download from "./pages/Download";
import Locations from "./pages/Locations";
import Navbar from '../components/Navbar'
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

function HomePage() {
  return (
    <div className="bg-[#1F2326] min-h-screen overflow-hidden">
      <main className="relative h-screen w-screen overflow-hidden bg-cover bg-center 
                       before:content-[''] before:absolute before:inset-0 
                       before:bg-[url(/hero_new.png)] before:bg-cover before:bg-center 
                       before:z-0">
        
        <div className='relative z-10 w-screen font-montserrat text-white'>
          <div className="">
            <Navbar />
          </div>
        </div>
        <div className="absolute inset-0  -left-2.5">
          <img src=".././public/pikachu_front.png" className="h-[442px] rotate-[-41deg]"/>
        </div>
        <div className="absolute inset-0  -left-2.5 top-[220px]">
          <img src=".././public/raichu_front.png" className="h-[442px] rotate-[-41deg]"/>
        </div>  
        <div className="absolute right-0">
          <img src=".././public/squirtle_shiny_front.png" className="h-[442px] rotate-[-41deg]"/>
        </div>
        <div className="absolute top-5   right-0">
          <img src=".././public/blastoise_front.png" className="h-[442px] rotate-[-41deg]"/>
        </div>  

        <div className="relative z-10 flex flex-col gap-7 text-white pt-28 justify-center items-center text-center">
          <h1 className="text-6xl font-extrabold max-w-4xl">
            Your open-source all region pokemon game!
          </h1>
          <p className="max-w-2xl text-[20px] text-center">Play Kanto (Japan), Unova (NYC), Kalos (France), Galar (UK), and Paldea (Spain) all in the same 2d game!</p>
          <Button className="bg-white max-w-[200px] text-black py-6 px-8">Download Latest</Button>
        </div>
      </main>
      <div className="pt-9 px-24 text-white">
        <h1 className="font-extrabold text-[32px] pb-5">Latest News</h1>
        <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
          <Card className="col-span-1 row-span-2 bg-gradient-to-br from-blue-600 to-blue-900 border-blue-400/30">
            <CardHeader>
              <CardTitle className="text-white">Major Update Released</CardTitle>
              <CardDescription className="text-blue-100">v2.0 is here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-blue-50">Massive performance improvements and new regions added!</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-900 border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-white text-lg">New Feature</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-50">Music System, battle statuses, type advantages, trainer battle sprites, pokemon healers.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-900 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-white text-lg">Achievement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-50">180 Hours</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<Download />} />
        <Route path="/locations" element={< Locations/>} />
      </Routes>
    </Router>
  );
}

export default App;