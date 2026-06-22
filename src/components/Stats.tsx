import { Building2, Headset, House, Users } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <House />
          <h2 className="text-5xl font-bold text-amber-400">
            100+
          </h2>
          <p>Properties Managed</p>
        </div>

        <div>
          <Users />
          <h2 className="text-5xl font-bold text-amber-400">
            200+
          </h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <Building2 />
          <h2 className="text-5xl font-bold text-amber-400">
            10+
          </h2>
          <p>Years Experience</p>
        </div>

        <div>
          <Headset />
          <h2 className="text-5xl font-bold text-amber-400">
            24/7
          </h2>
          <p>Support</p>
        </div>
      </div>
    </section>
  );
}