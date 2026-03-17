import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

function App() {
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
              <h1 className="text-2xl font-extrabold text-white">Dustsilver</h1>
              <div className="flex flex-row gap-5 items-center">
                <h1 className="text-2xl font-extrabold cursor-pointer hover:text-silver-100 transition">Download</h1>
                <a href="https://github.com/abinnovator/Pokemon-Dust-Silver" target="_blank"><img src="/github-brands-solid-full (2).svg" width={44.91} height={44.91} alt="GitHub" /></a>
                <a href="https://ko-fi.com/abinnovator" target="_blank"><img src="kofi.png" className="max-w-[125px] max-h-[66px]" alt="Ko-fi" /></a>
              </div>
            </nav>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-7 text-white pt-28 px-24">
          <h1 className="text-6xl font-extrabold max-w-4xl">
            Your open-source all region pokemon game!
          </h1>
          <p className="max-w-2xl text-[20px]">Play Kanto (Japan), Unova (NYC), Kalos (France), Galar (UK), and Paldea (Spain) all in the same 2d game!</p>
        </div>
      </main>
      {/* <div className="pt-9 px-24 text-white">
        <h1 className="font-extrabold text-[32px] pb-5">Latest News</h1>
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          <Card className="col-span-2 row-span-2 bg-gradient-to-br from-blue-600 to-blue-900 border-blue-400/30">
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
              <p className="text-sm text-purple-50">Trading System</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-900 border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-white text-lg">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-50">5K+ players</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-900 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-white text-lg">Achievement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-50">1M downloads</p>
            </CardContent>
          </Card>

          <Card className="col-span-2 bg-gradient-to-br from-orange-600 to-orange-900 border-orange-400/30">
            <CardHeader>
              <CardTitle className="text-white">Development Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-orange-50">Check out what's coming next in our GitHub discussions</p>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </div>
  );
}

export default App;