import { Building2, Headset, House, Users } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-[#0c3638] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="flex gap-4 items-center">
          <House size={50}/>
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              100+
            </h2>
            <p className="text-2xl font-bold">Properties Managed</p>
            <p>Across Mombasa & Diani</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Users size={50} />
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              200+
            </h2>
            <p className="text-2xl font-bold">Happy Clients</p>
            <p>Satisfied homeowners and investors</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Building2 size={50} />
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              10+
            </h2>
            <p className="text-2xl font-bold">Years Experience</p>
            <p>Local market expertise you can rely on</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Headset size={50} />
          <div>
            <h2 className="text-5xl font-bold text-amber-400">
              24/7
            </h2>
            <p className="text-2xl font-bold">Support</p>
            <p>We're here whenever you need us</p>
          </div>
        </div>
      </div>
    </section>
  );
}