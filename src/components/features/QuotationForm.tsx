import React, { useState } from 'react';
import { CheckCircle2, Send, X } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../../config/constants';

interface QuotationFormProps {
  onClose?: () => void;
  standalone?: boolean;
}

export const QuotationForm = ({ onClose, standalone = false }: QuotationFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    city: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
        if (onClose) onClose();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2">¡Solicitud Enviada!</h3>
        <p className="text-[var(--text-secondary)]">Pronto uno de nuestros expertos se pondrá en contacto contigo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-[var(--accent-primary)]">Solicitar Cotización</h3>
        {onClose && (
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Nombre / Institución</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            placeholder="Ej: Ministerio de..."
            value={formState.name}
            onChange={(e) => setFormState({...formState, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Ciudad</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            placeholder="Ej: La Paz"
            value={formState.city}
            onChange={(e) => setFormState({...formState, city: e.target.value})}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Correo Corporativo</label>
          <input 
            type="email" 
            required
            className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            placeholder="email@empresa.com"
            value={formState.email}
            onChange={(e) => setFormState({...formState, email: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Servicio de interés</label>
          <select 
            required
            className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            value={formState.service}
            onChange={(e) => setFormState({...formState, service: e.target.value})}
          >
            <option value="">Seleccione un servicio</option>
            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700">Mensaje breve</label>
        <textarea 
          rows={4}
          className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
          placeholder="¿En qué podemos ayudarte?"
          value={formState.message}
          onChange={(e) => setFormState({...formState, message: e.target.value})}
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full py-4 text-lg shadow-lg shadow-blue-900/20 group">
        Enviar Solicitud
        <Send className="w-5 h-5 ml-2" />
      </button>

      <div className="text-center">
        <span className="text-gray-400 text-sm">O escríbenos directamente por</span>
        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-emerald-600 font-bold hover:underline"
        >
          WhatsApp
        </a>
      </div>
    </form>
  );
};
