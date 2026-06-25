// The 5 service tiers — descriptions kept verbatim from the original site.
// `price`/`priceNote` drive the visible transparent pricing (the #1 differentiator);
// `priceValue`/`priceUnit` drive the Service + Offer JSON-LD.

export interface Service {
  slug: string;
  name: string;
  /** Visible price label, e.g. "$400" or "10% of budget" */
  price: string;
  priceNote?: string;
  /** Numeric value for schema.org Offer/priceSpecification */
  priceValue: number;
  /** "" for flat, "HUR" (hour) for hourly, or note for percentage/minimum */
  priceUnit?: 'flat' | 'hour' | 'min';
  summary: string;
  description: string;
  /** When this tier is the right fit — powers the "Which service do I need?" helper */
  bestFor: string;
}

export const services: Service[] = [
  {
    slug: 'full-wedding-planning',
    name: 'Full Planner Services',
    price: '10% of budget',
    priceNote: 'minimum $4,000',
    priceValue: 4000,
    priceUnit: 'min',
    summary: 'Full access from engagement to your big day — up to one year of planning, online and in person.',
    description:
      'As your wedding budget grows, so does the amount of decisions and details necessary to make your day a success. This investment covers both online and in-person collaboration and grants you full access, up to one year, from engagement until the end of your wedding day.',
    bestFor: 'Couples who want a partner for the whole journey — vendors, budget, and timeline handled start to finish.',
  },
  {
    slug: 'month-of-coordination',
    name: 'Month of Planner / Coordinator Services',
    price: '$1,500',
    priceValue: 1500,
    priceUnit: 'flat',
    summary: 'We take the reins the final stretch so you can relax. Rehearsal & ceremony included.',
    description:
      'Includes full month access for planning, advising, and finalizing of existing wedding plans while tying up loose ends and ensuring that your wedding day goes smoothly. Rehearsal & Ceremony Included. First planning meeting is included and is recommended 3-6 months before the wedding day.',
    bestFor: "Couples who've planned it themselves but want a pro to finalize details and run the final weeks.",
  },
  {
    slug: 'day-of-wedding-coordination',
    name: 'Day of Coordinator Services',
    price: '$400',
    priceValue: 400,
    priceUnit: 'flat',
    summary: 'You plan it — we run it. Rehearsal led and the ceremony executed flawlessly.',
    description:
      'Includes planning and leading your ceremony rehearsal, and ensuring that your ceremony goes off without a hitch on the big day.',
    bestFor: 'Couples who have everything booked and just need someone to direct the day so they can be present.',
  },
  {
    slug: 'reception-coordination',
    name: 'Reception Point Person',
    price: '$250',
    priceNote: 'add-on · included with Full Planning',
    priceValue: 250,
    priceUnit: 'flat',
    summary: 'Seamless guest transition into the reception, with oversight through your grand exit.',
    description:
      'This is included with full planning services. It is an add on to Month of or Day of Services. Includes transition of your guests from ceremony to reception and full access until the bride and groom’s big exit to ensure things go smoothly and you and your guests have a wonderful, carefree time.',
    bestFor: 'Adding a dedicated hand to keep the reception flowing while you enjoy it.',
  },
  {
    slug: 'wedding-planning-consulting',
    name: 'Consulting / Extra On-site Services',
    price: '$30',
    priceNote: 'per hour',
    priceValue: 30,
    priceUnit: 'hour',
    summary: 'A-la-carte expert advice for DIY couples — online, on the phone, or on-site.',
    description:
      'Sometimes, you just want to talk to someone who has been there, done it, seen it, experienced it and learned from it! If you are planning your own wedding, but need a little help, I am happy to help you online or on the phone. This is also an add on to an existing customer needing consultation via extra site visits or planning services outside of the timeframe already booked.',
    bestFor: 'DIY couples who want a seasoned sounding board by the hour, or existing clients needing extra time.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
