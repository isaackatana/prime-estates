import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href="tel:+254700000000"
        className="flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-4 text-white shadow-xl transition hover:scale-105"
      >
        <Phone size={20} />
        <span>Call Us</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl bg-green-500 px-5 py-4 text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}