// Location landing pages. Loganville (home base) ships in Phase 1.
// Phase 2 adds Monroe/Walton County, Snellville, Grayson, Conyers, Covington —
// each needs genuinely unique copy (no templated duplication) to stay SEO-clean.

export interface Location {
  slug: string; // full page path slug, e.g. "wedding-coordinator-loganville-ga"
  city: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  /** Local context paragraph — distinct per city */
  localNote: string;
  nearby: string[];
}

export const locations: Location[] = [
  {
    slug: 'wedding-coordinator-loganville-ga',
    city: 'Loganville',
    title: 'Wedding Coordinator in Loganville, GA',
    metaDescription:
      'Local, owner-led wedding & event coordinator based in Loganville, GA. Day-of, month-of & full planning at your venue. Transparent pricing from $400.',
    h1: 'Wedding & Event Coordinator in Loganville, GA',
    intro: [
      'Forrester Fields is a wedding and event planner based right here in Loganville, Georgia — not a venue, but the person who makes your day at <em>your</em> venue run beautifully.',
      'From a backyard celebration off Highway 78 to a church ceremony in town or a reception across Walton and Gwinnett counties, I handle the timeline, the vendors, and the hundred little details so you and your family can simply enjoy the moment.',
    ],
    localNote:
      'Being based in Loganville means I know the area — the roads, the seasons, the local florists, photographers, and DJs — and I can be on-site for walkthroughs and rehearsals without travel fees eating into your budget.',
    nearby: ['Loganville', 'Grayson', 'Between', 'Walton County', 'east Gwinnett'],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
