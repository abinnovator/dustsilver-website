import React from "react";
import updates from "../data/upcoming-updates.json";

interface Update {
  title: string;
  date: string; // ISO date string
  description: string;
}

const UpcomingUpdates: React.FC = () => {
  const upcoming: Update[] = updates as Update[];

  return (
    <section className="pt-9 px-24 text-white">
      <h2 className="font-extrabold text-[32px] pb-5">Upcoming Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {upcoming.map((item, idx) => (
          <div key={idx} className="rounded-lg border border-white/20 p-4 hover:bg-white/5 transition">
            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{new Date(item.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</p>
            <p className="text-gray-200">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingUpdates;
