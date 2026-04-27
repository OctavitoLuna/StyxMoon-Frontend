import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../config/constants';

export const FloatWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.whatsappMsg)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 group flex items-center gap-3 overflow-hidden"
      aria-label="WhatsApp"
    >
      <div className="max-w-0 group-hover:max-w-xs transition-all duration-500 overflow-hidden whitespace-nowrap font-bold">
        Chatea con nosotros
      </div>
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};
