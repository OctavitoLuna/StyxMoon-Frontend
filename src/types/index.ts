export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Partner {
  name: string;
  category: 'Infrastructure' | 'Communication' | 'Security';
  description?: string;
}

export interface Client {
  name: string;
  category: 'Public' | 'Health/Education' | 'Private/Social';
}
