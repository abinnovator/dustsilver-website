import { FlippingCard } from "../../components/ui/flipping-card";
import Navbar from "../../components/Navbar";
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
  // ... (remaining card definitions unchanged) 
];
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
      {/* Background overlay – same technique as other pages */}
      <main className="relative h-screen w-screen overflow-hidden bg-cover bg-center 
                       before:content-[''] before:absolute before:inset-0 
                       before:bg-[url(/hero_new.png)] before:bg-cover before:bg-center 
                       before:opacity-20 before:z-0">
        {/* Navbar */}
        <div className='relative z-10 w-screen font-montserrat text-white'>
          <div className="py-7 px-24">
            <Navbar />
          </div>
        </div>

        {/* Cards grid */}
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
      </main>
    </div>
  );
}

export default Locations;
