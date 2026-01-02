
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  stars: number;
}
