import { NavLink, Service, Partner, Client } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Experiencia', href: '/experiencia' },
  { label: 'Contacto', href: '/contacto' },
];

export const SERVICES: Service[] = [
  {
    id: 'software',
    title: 'Desarrollo de Software y Sistemas',
    description: 'Creamos soluciones digitales a medida para automatizar y optimizar tus procesos. Desde facturación e inventarios hasta gestión de pacientes y repositorios documentales.',
    icon: 'code'
  },
  {
    id: 'infrastructure',
    title: 'Redes e Infraestructura',
    description: 'Diseñamos e implementamos cableado estructurado, fibra óptica, redes WiFi de alta densidad y administración de servidores bajo estándares internacionales.',
    icon: 'server'
  },
  {
    id: 'cloud',
    title: 'Servicios en la nube',
    description: 'Migración y gestión de servicios cloud: plataformas de videoconferencia, hosting, dominios y herramientas colaborativas seguras y escalables.',
    icon: 'cloud'
  },
  {
    id: 'security',
    title: 'Seguridad digital',
    description: 'Protección de activos críticos mediante certificados SSL, firewalls, auditorías de sistemas y soluciones integrales de ciberseguridad.',
    icon: 'shield'
  },
  {
    id: 'support',
    title: 'Soporte técnico',
    description: 'Mantenimiento preventivo y correctivo de hardware y software con atención presencial y remota para asegurar la continuidad de tus operaciones.',
    icon: 'wrench'
  }
];

export const PARTNERS: Partner[] = [
  // Infrastructure
  { name: 'DELL', category: 'Infrastructure' },
  { name: 'HP', category: 'Infrastructure' },
  { name: 'LENOVO', category: 'Infrastructure' },
  { name: 'Cisco', category: 'Infrastructure' },
  { name: 'Aruba', category: 'Infrastructure' },
  { name: 'Huawei', category: 'Infrastructure' },
  { name: 'Linksys', category: 'Infrastructure' },
  { name: 'TP-Link', category: 'Infrastructure' },
  { name: 'Samsung', category: 'Infrastructure' },
  { name: 'Epson', category: 'Infrastructure' },
  { name: 'Logitech', category: 'Infrastructure' },
  { name: 'Canon', category: 'Infrastructure' },
  // Communication
  { name: 'Zoom', category: 'Communication', description: 'Socio Estratégico Autorizado' },
  { name: 'Microsoft 365', category: 'Communication' },
  { name: 'Google Workspace', category: 'Communication' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Poly', category: 'Communication' },
  // Security
  { name: 'ESET', category: 'Security' },
  { name: 'DigiCert Inc.', category: 'Security' },
  { name: 'Kaspersky', category: 'Security' },
  { name: 'Fortinet', category: 'Security' },
  { name: 'Bitdefender', category: 'Security' },
  { name: 'Sophos', category: 'Security' },
];

export const CLIENTS: Client[] = [
  { name: 'Procuraduría General del Estado', category: 'Public' },
  { name: 'Ministerio de la Presidencia', category: 'Public' },
  { name: 'Servicio de Impuestos Nacionales (SIN)', category: 'Public' },
  { name: 'Ministerio Público', category: 'Public' },
  { name: 'Policía Boliviana', category: 'Public' },
  { name: 'Armada Boliviana', category: 'Public' },
  { name: 'AISEM', category: 'Health/Education' },
  { name: 'ASUSS', category: 'Health/Education' },
  { name: 'UMSA', category: 'Health/Education' },
  { name: 'EPCORO', category: 'Health/Education' },
  { name: 'Lotería Nacional', category: 'Health/Education' },
  { name: 'ONG Aldeas Infantiles SOS', category: 'Private/Social' },
  { name: 'Sociedad Católica San José', category: 'Private/Social' },
  { name: 'Fundación CEMSE', category: 'Private/Social' },
];

export const CONTACT_INFO = {
  address: 'Calle Casimiro Corrales Nro 1237, Edificio CASSO piso 02 oficina 5, La Paz - Bolivia',
  phones: ['+591 67044191'],
  emails: ['contacto@styxmoon.com', 'alejandralv.uni@gmail.com'],
  hours: 'Lunes a Viernes: 08:30 – 18:30',
  whatsapp: '59167044191',
  whatsappMsg: 'Hola StyxMoon, vengo de su sitio web y me gustaría recibir información sobre sus servicios tecnológicos.'
};
