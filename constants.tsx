
import { Service, Project, Testimonial } from './types';

// The logo provided by the user
export const USER_LOGO = "https://storage.googleapis.com/static.premade.ai/api/v1/projects/5b6f3a74-d450-48e2-9d7a-43c7b8c7b8c7/assets/logo.png"; 

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Bespoke Installation',
    description: 'Precision fitting of high-end kitchen systems from the world\'s leading luxury brands like Bulthaup and Poggenpohl.',
    icon: 'Hammer'
  },
  {
    id: '2',
    title: 'Custom Joinery',
    description: 'Specialist craftsmanship for unique cabinetry adjustments and custom finishing touches in timber and stone.',
    icon: 'Maximize'
  },
  {
    id: '3',
    title: 'Appliance Integration',
    description: 'Seamless integration of premium appliances including Sub-Zero, Wolf, Gaggenau, and Miele.',
    icon: 'Cpu'
  },
  {
    id: '4',
    title: 'Project Management',
    description: 'End-to-end coordination of all trades to ensure a flawless and stress-free installation process for New Zealand homes.',
    icon: 'Calendar'
  }
];

export interface RichProject extends Project {
  brief: string;
  solution: string;
}

export const PORTFOLIO: RichProject[] = [
  {
    id: 'p1',
    title: 'Parnell Modern Estate',
    location: 'Auckland',
    imageUrl: 'https://images.unsplash.com/photo-1565182999561-18d7dc63c391?auto=format&fit=crop&q=80&w=1200',
    category: 'Modern Minimalist',
    brief: 'The client required a seamless, high-gloss finish for a sprawling open-plan living area overlooking the harbour.',
    solution: 'Installed a handleless Italian cabinetry system with integrated Sub-Zero refrigeration and custom waterfall marble islands.'
  },
  {
    id: 'p2',
    title: 'Fendalton Heritage Villa',
    location: 'Christchurch',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    category: 'Traditional Bespoke',
    brief: 'A sensitive restoration of a historic villa kitchen requiring period-accurate craftsmanship and modern utility.',
    solution: 'Hand-fitted bespoke Shaker cabinetry with traditional timber joinery and a refurbished AGA cooker as the centerpiece.'
  },
  {
    id: 'p3',
    title: 'Queenstown Alpine Retreat',
    location: 'Otago',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
    category: 'Architectural Minimalist',
    brief: 'A strict "hidden" aesthetic where appliances and storage were to be completely invisible against raw concrete walls.',
    solution: 'Engineered a series of pocket doors and integrated panels that conceal a full chef\'s kitchen within a minimalist timber wall.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    location: 'Remuera, Auckland',
    text: 'Adrian is an absolute perfectionist. He noticed a 2mm discrepancy in the flooring and adjusted the entire cabinetry run to ensure it was visually perfect. You simply don\'t find this level of care anymore.',
    stars: 5
  },
  {
    id: 't2',
    name: 'David R.',
    location: 'Wanaka',
    text: 'Our kitchen installer pulled out at the last minute. Adrian stepped in and handled the entire Gaggenau integration with such professionalism. The results are stunning.',
    stars: 5
  },
  {
    id: 't3',
    name: 'Emma & John L.',
    location: 'Wadestown, Wellington',
    text: 'A true craftsman. Adrian treated our home with immense respect and his attention to the fine details of the joinery was incredible.',
    stars: 5
  }
];
