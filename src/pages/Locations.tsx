import { Link } from "react-router-dom";
import {
  Button,
} from "../../components/ui/button";
import { FlippingCard } from "../../components/ui/flipping-card";
interface CardData {
  id: string
  front: {
    imageSrc: string
    imageAlt: string
    title: string
    description: string
  }
  back: {
    description: string
    buttonText: string
  }
}
const cardsData: CardData[] = [
  {
    id: "pallet-town",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/7/7b/Pallet_Town_HGSS.png",
      imageAlt: "Pallet Town",
      title: "Pallet Town",
      description: "A quiet town where a new Trainer's journey begins. Home to Professor Oak's Pokémon Research Laboratory.",
    },
    back: {
      description: "Pallet Town (マサラタウン, Masara Town) is a small, peaceful town in southwestern Kanto. It is the hometown of the player character and their rival, as well as Professor Oak.",
      buttonText: "Explore",
    },
  },
  {
    id: "route-1",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/thumb/1/1b/Kanto_Route_1_HGSS.png/300px-Kanto_Route_1_HGSS.png",
      imageAlt: "Route 1",
      title: "Route 1",
      description: "The very first route of any Trainer's journey, connecting Pallet Town to Viridian City through tall grass.",
    },
    back: {
      description: "Route 1 (1番道路) runs north from Pallet Town to Viridian City. Wild Pidgey and Rattata roam the tall grass, making it the first taste of Pokémon encounters for new Trainers.",
      buttonText: "Explore",
    },
  },
  {
    id: "route-2",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/thumb/c/c0/Kanto_Route_2_HGSS.png/320px-Kanto_Route_2_HGSS.png",
      imageAlt: "Route 2",
      title: "Route 2",
      description: "A forested route north of Viridian City, split by Viridian Forest and leading toward Pewter City.",
    },
    back: {
      description: "Route 2 (2番道路) connects Viridian City to Pewter City via Viridian Forest. The route is split into two sections and is home to Pidgey, Rattata, and Caterpie in the surrounding grass.",
      buttonText: "Explore",
    },
  },
  {
    id: "viridian-city",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/b/bd/Viridian_City_HGSS.png",
      imageAlt: "Viridian City",
      title: "Viridian City",
      description: "The first city on the Trainer's journey, nestled at the foot of the mountains. Home to the final Gym Badge.",
    },
    back: {
      description: "Viridian City (トキワシティ, Tokiwa City) is the first major city in Kanto. Its Gym Leader, Giovanni, is the last faced before the Pokémon League — and the secret boss of Team Rocket.",
      buttonText: "Explore",
    },
  },
  {
    id: "pewter-city",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/thumb/a/ac/Pewter_City_HGSS.png/225px-Pewter_City_HGSS.png",
      imageAlt: "Pewter City",
      title: "Pewter City",
      description: "A rugged city surrounded by mountains, home to Brock and the first Gym Badge — the Boulder Badge.",
    },
    back: {
      description: "Pewter City (ニビシティ, Nibi City) is the first Gym city in Kanto. Gym Leader Brock specialises in Rock-type Pokémon, and the city also houses the impressive Pewter Museum of Science.",
      buttonText: "Explore",
    },
  },
  {
    id: "route-4",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/b/b5/Kanto_Route_4_HGSS.png",
      imageAlt: "Route 4",
      title: "Route 4",
      description: "A wide route east of Mt. Moon, stretching toward Cerulean City with open land on both sides.",
    },
    back: {
      description: "Route 4 (4番道路) connects Mt. Moon to Cerulean City. It is one of the wider routes in Kanto and is notable for the Move Tutor located near the Cerulean City entrance who teaches Mega Punch and Mega Kick.",
      buttonText: "Explore",
    },
  },
  {
    id: "mt-moon",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/f/f6/Mt_Moon_1F_HGSS.png",
      imageAlt: "Mt. Moon",
      title: "Mt. Moon",
      description: "A vast mountain cave filled with Zubat and Clefairy, rumored to be a landing site for mysterious Moon Stones.",
    },
    back: {
      description: "Mt. Moon (おつきみやま) is a large cave connecting Route 3 and Route 4. It is home to Clefairy and is a hotspot for Team Rocket, who seek the rare Moon Stones hidden within.",
      buttonText: "Explore",
    },
  },
  {
    id: "cerulean-city",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/thumb/8/8f/Cerulean_City_HGSS.png/1024px-Cerulean_City_HGSS.png",
      imageAlt: "Cerulean City",
      title: "Cerulean City",
      description: "A beautiful city beside a lake, home to Misty and the Cascade Badge at the Cerulean Gym.",
    },
    back: {
      description: "Cerulean City (ハナダシティ, Hanada City) sits in northern Kanto near a large lake. Gym Leader Misty specialises in Water-type Pokémon. The city is also close to the famous Cerulean Cave.",
      buttonText: "Explore",
    },
  },
  {
    id: "route-9",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/a/ab/Kanto_Route_9_HGSS.png",
      imageAlt: "Route 9",
      title: "Route 9",
      description: "A long winding route east of Cerulean City, cutting through rocky terrain toward the Power Plant area.",
    },
    back: {
      description: "Route 9 (9番道路) stretches east from Cerulean City through hilly terrain. It is home to a variety of Pokémon including Oddish, Bellsprout, and Ekans, and connects to Route 10 to the south.",
      buttonText: "Explore",
    },
  },
  {
    id: "route-10",
    front: {
      imageSrc: "https://archives.bulbagarden.net/media/upload/2/28/Kanto_Route_10_HGSS.png",
      imageAlt: "Route 10",
      title: "Route 10",
      description: "A route running alongside the Rock Tunnel, home to the Kanto Power Plant and wild Voltorb.",
    },
    back: {
      description: "Route 10 (10番道路) runs south toward Lavender Town and is divided by Rock Tunnel. It borders the Kanto Power Plant to the north, where legendary Pokémon Zapdos can be found.",
      buttonText: "Explore",
    },
  },
]
export function FlippingCardDemo() {
  return (
    <div className="flex gap-4">
      {cardsData.map((card) => (
        <FlippingCard
          key={card.id}
          width={300}
          frontContent={<GenericCardFront data={card.front} />}
          backContent={<GenericCardBack data={card.back} />}
        />
      ))}
    </div>
  )
}
interface GenericCardFrontProps {
  data: CardData["front"]
}
function GenericCardFront({ data }: GenericCardFrontProps) {
  return (
    <div className="flex h-full w-full flex-col p-4">
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="h-auto min-h-0 w-full flex-grow rounded-md object-cover"
      />
      <div className="p-2">
        <h3 className="mt-2 text-base font-semibold">{data.title}</h3>
        <p className="text-muted-foreground mt-2 text-[13.5px]">
          {data.description}
        </p>
      </div>
    </div>
  )
}
interface GenericCardBackProps {
  data: CardData["back"]
}
function GenericCardBack({ data }: GenericCardBackProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <p className="text-muted-foreground mt-2 text-center text-[13.5px]">
        {data.description}
      </p>
      <button className="bg-foreground text-background mt-6 flex h-8 w-min items-center justify-center rounded-md px-4 py-2 text-[13.5px] whitespace-nowrap">
        {data.buttonText}
      </button>
    </div>
  )
}


function Locations() {
  return (
    <div className="bg-[#1F2326] min-h-screen">
      {/* Container with relative positioning to hold the background overlay */}

        
        {/* Everything inside must be z-10 to sit on top of the background */}
        <div className=' w-screen font-montserrat text-white'>
          <div className="py-7 px-24">
            <nav className="bg-[#D9D9D9]/5 backdrop-blur-xs flex flex-row justify-between pr-4 pl-6 py-2 rounded-2xl items-center border border-white/10">
              <Link to="/" className="text-2xl font-extrabold text-white hover:text-gray-300 transition">Dustsilver</Link>
              <div className="flex flex-row gap-5 items-center">
                <Link to="/" className="text-2xl font-extrabold cursor-pointer hover:text-silver-100 transition">Home</Link>
                <a href="https://github.com/abinnovator/Pokemon-Dust-Silver" target="_blank"><img src="/github-brands-solid-full (2).svg" width={44.91} height={44.91} alt="GitHub" /></a>
                <a href="https://ko-fi.com/abinnovator" target="_blank"><img src="kofi.png" className="max-w-[125px] max-h-[66px]" alt="Ko-fi" /></a>
              </div>
            </nav>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-7 text-white pt-28 px-24">
          <div className="grid gap-4 grid-cols-4">
      {cardsData.map((card) => (
        <FlippingCard
          key={card.id}
          width={300}
          frontContent={<GenericCardFront data={card.front} />}
          backContent={<GenericCardBack data={card.back} />}
        />
      ))}
    </div>
        </div>
     

      
    </div>
  );
}

export default Locations;
