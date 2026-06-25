// Real Facebook recommendations from the current site (shown as on-site excerpts;
// full reviews live on the Facebook page). Names/dates are genuine — do not invent more.

export interface Testimonial {
  name: string;
  date: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Marcie Forrester Kennedy',
    date: 'March 2025',
    quote: 'Forrester Fields is SPECIAL! If you are looking for a unique setting…',
  },
  {
    name: 'Mary Rowe Echevarria',
    date: 'February 2025',
    quote: 'Where will you host that next big family reunion? Whether it’s a wedding…',
  },
  {
    name: 'Juan Hernandez',
    date: 'January 2025',
    quote: 'This is the place for your next event.',
  },
];
