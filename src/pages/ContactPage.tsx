import { motion } from 'motion/react';
import { QuotationForm } from '../components/features/QuotationForm';
import { CONTACT_INFO } from '../config/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-white"
    >
      <div className="container-custom py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <span className="text-[var(--accent-secondary)] font-bold uppercase tracking-widest text-sm mb-4 block">Hablemos</span>
              <h1 className="text-5xl font-bold text-[var(--accent-primary)] mb-6">¿Necesitas una solución confiable?</h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                Estamos listos para asesorarte y diseñar la solución tecnológica que mejor se adapte a tu organización.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50/50 rounded-sm flex items-center justify-center text-[var(--accent-primary)] shrink-0 shadow-sm border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[var(--navy-deep)] uppercase tracking-wider text-sm">Dirección Central</p>
                  <p className="text-[var(--text-secondary)]">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50/50 rounded-sm flex items-center justify-center text-[var(--accent-primary)] shrink-0 shadow-sm border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[var(--navy-deep)] uppercase tracking-wider text-sm">Teléfono / WhatsApp</p>
                  {CONTACT_INFO.phones.map(p => <p key={p} className="text-[var(--text-secondary)]">{p}</p>)}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50/50 rounded-sm flex items-center justify-center text-[var(--accent-primary)] shrink-0 shadow-sm border border-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[var(--navy-deep)] uppercase tracking-wider text-sm">Correos Oficiales</p>
                  {CONTACT_INFO.emails.map(e => <p key={e} className="text-[var(--text-secondary)]">{e}</p>)}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50/50 rounded-sm flex items-center justify-center text-[var(--accent-primary)] shrink-0 shadow-sm border border-blue-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[var(--navy-deep)] uppercase tracking-wider text-sm">Disponibilidad</p>
                  <p className="text-[var(--text-secondary)]">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-t-[var(--accent-primary)] rounded-sm ring-1 ring-gray-100">
            <QuotationForm standalone={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
