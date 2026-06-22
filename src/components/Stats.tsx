import { Building2, Headset, House, Users } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="flex gap-4 items-center">
          <House size={50}/>
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              100+
            </h2>
            <p>Properties Managed</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Users size={50} />
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              200+
            </h2>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Building2 size={50} />
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              10+
            </h2>
            <p>Years Experience</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Headset size={50} />
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              24/7
            </h2>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}