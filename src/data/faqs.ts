// FAQ items — render on-page AND power FAQPage JSON-LD.
// The first item does double duty as SEO + repositioning ("not a venue").

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Is Forrester Fields a wedding venue?',
    a: 'No — Forrester Fields is a wedding and event planning and coordination service. I am not a venue you rent; I am the planner who coordinates your celebration at the venue of your choice, anywhere in Walton County and the east-metro Atlanta area.',
  },
  {
    q: 'What areas do you serve?',
    a: 'I am based in Loganville, GA and serve Walton County, Monroe, Snellville, Grayson, Conyers, Covington and the greater east-metro Atlanta area.',
  },
  {
    q: 'How much does a wedding coordinator cost?',
    a: 'I publish my pricing openly: day-of coordination from $400, month-of coordination $1,500, and full planning at 10% of your budget (minimum $4,000). A reception point person ($250) and hourly consulting ($30/hr) are also available.',
  },
  {
    q: 'What is the difference between day-of and month-of coordination?',
    a: 'Day-of coordination ($400) means I lead your rehearsal and run the ceremony on the big day. Month-of coordination ($1,500) begins about a month out — I take over your existing plans, tie up loose ends, and manage the rehearsal, ceremony, and full day so you can relax.',
  },
  {
    q: 'Do you only plan weddings?',
    a: 'Weddings are my heart, but I plan and coordinate all kinds of celebrations — anniversaries, showers, birthdays, and special events.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'The sooner the better, especially for full planning. For month-of coordination, a first planning meeting three to six months before the wedding is ideal.',
  },
];
