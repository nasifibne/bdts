// All site copy that appears in more than one place, or in lists, lives here.
// Edit this file to update sessions, contacts, partners, passes or photos.

// Resolved to an absolute URL so it also works inside CSS custom properties
// (url() in a var() resolves against the stylesheet, not the page).
export const img = name => new URL(`${import.meta.env.BASE_URL}img/${name}`, document.baseURI).href;

export const EVENT_START = '2027-01-18T09:00:00+06:00';
export const REG_MAIL = 'bdtourismsummit@gmail.com';
// Set this to a Google Apps Script / Formspree / backend URL to receive
// registrations as JSON. Left empty, the form falls back to opening an email.
export const FORM_ENDPOINT = '';

export const NAV = [
  { label: 'About', hash: 'about' },
  { label: 'Sessions', hash: 'congress' },
  { label: 'Delegates', page: 'delegates.html' },
  { label: 'Objectives', page: 'objectives.html' },
  { label: 'Agenda', hash: 'agenda' },
  { label: 'Call for Papers', hash: 'papers' },
  { label: 'Partners', hash: 'partners' },
  { label: 'Passes', hash: 'passes' },
  { label: 'FAQ', page: 'faq.html' }
];

export const SESSIONS = [
  { t: 'Tourism Policy and Governance', k: 'Policy & Governance' },
  { t: 'Tourism Investment and Infrastructure Development', k: 'Investment & Infrastructure' },
  { t: 'Sustainable Tourism and Community Development', k: 'Sustainable Tourism & Community' },
  { t: 'Skills Development, Innovation and Digital Transformation', k: 'Skills, Innovation & Digital' },
  {
    t: 'Tourism Business Promotion, Market Development and Destination Marketing',
    k: 'Business Promotion & Destination Marketing'
  },
  { t: 'Tourism, Culture, Heritage and the Creative Economy', k: 'Culture, Heritage & Creative Economy' }
];

export const STATS = [
  { from: 300, to: 400, label: 'Delegates' },
  { to: 2, label: 'Days' },
  { to: 6, label: 'Thematic Sessions' },
  { to: 3, label: 'Strategic Deliverables' }
];

export const DELIVERABLES = [
  {
    no: 'I',
    bg: 'deliverable-declaration.jpg',
    t: 'Bangladesh Tourism Development Declaration 2027',
    p: 'A long-term national vision and strategic framework for sustainable, inclusive and investment-driven tourism.'
  },
  {
    no: 'II',
    bg: 'deliverable-investment.jpg',
    t: 'Tourism Investment Opportunities Book – Top Projects',
    p: 'Projects across destination infrastructure, hotels and resorts, eco-tourism, river cruises, heritage and community-based tourism.'
  },
  {
    no: 'III',
    bg: 'deliverable-whitepaper.jpg',
    t: 'Tourism-Related Policy Reform White Paper',
    p: 'Actionable recommendations for the Government, Parliament and development partners.'
  }
];

export const MOSAIC = [
  ['m1-investment-panel.jpg', 'Panellists seated on stage during the investment opportunities in tourism session', 'Investment panel'],
  ['m2-panel-discussion.jpg', 'Six panellists seated on stage under the 1st Bangladesh Tourism Development Summit 2023 backdrop', 'Panel discussion'],
  ['m3-hall.jpg', 'The conference hall full of delegates, with the stage in the distance', 'The hall'],
  ['m4-publication.jpg', 'Panellists holding the summit publication', 'Panellists with the publication'],
  ['m5-podium.jpg', 'A speaker addressing the hall from the podium', 'Speaker at the podium'],
  ['m6-participants.jpg', 'Young participants and guests posing together after a session', 'Participants']
];

export const REEL = [
  ['r1-group.jpg', 'Group photograph of delegates and organisers', 'Group photograph'],
  ['r2-panel.jpg', 'Panellists seated on stage', 'Panel session'],
  ['r3-publication.jpg', 'Panellists holding the summit publication', 'Publication launch'],
  ['r4-investment-panel.jpg', 'Panel discussion on investment opportunities in tourism', 'Investment panel'],
  ['r5-panel-podium.jpg', 'Panellists seated on stage beside the podium', 'Panel session'],
  ['r6-audience.jpg', 'Audience seated in the conference hall', 'The audience'],
  ['r7-panel.jpg', 'Panel discussion on stage', 'Panel session'],
  ['r8-participants.jpg', 'Participants and officials posing together', 'Participants']
];

export const PARTNERS = [
  { role: 'Organizer', logos: [['logo-parjatan-bichitra.jpg', 'Parjatan Bichitra logo']] },
  {
    role: 'Patron & Collaboration',
    logos: [
      ['logo-mocat.jpg', 'Ministry of Civil Aviation and Tourism, Bangladesh logo'],
      ['logo-btb.jpg', 'Bangladesh Tourism Board logo'],
      ['logo-bpc.jpg', 'Bangladesh Parjatan Corporation logo']
    ]
  }
];

export const PASSES = [
  { name: 'Visitor Pass', price: 'Price TBA', perks: ['Benefits to be announced'] },
  { name: 'Congress Pass', price: 'Price TBA', perks: ['Benefits to be announced'], feat: true },
  { name: 'VIP Pass', price: 'Price TBA', perks: ['Benefits to be announced'] }
];

export const ATTENDEE_TYPES = [
  'Government Ministry / Agency',
  'Development Partner / International Organization',
  'Private Sector',
  'Cultural, Heritage & Creative Economy',
  'Academia / Research',
  'Community Representative',
  'Investor',
  'Media',
  'Student',
  'Other'
];

export const PASS_OPTIONS = ['Visitor Pass', 'Congress Pass', 'VIP Pass', 'Exhibitor', 'Speaker / Sponsor enquiry'];

export const DELEGATES = [
  ['Government Ministries and Agencies', 'Policymakers shaping national tourism strategy.'],
  ['Development Partners and International Organizations', 'Partners supporting sustainable tourism growth.'],
  ['Private Sector', 'Hospitality, travel, aviation and investors.'],
  ['Cultural, Heritage and Creative Economy Institutions', 'Custodians of Bangladesh’s living culture.'],
  ['Academia and Research Institutions', 'Evidence and research for policy.'],
  ['Community Representatives', 'Voices from local tourism communities.']
];

export const FAQS = [
  [
    'When and where is BDTS 2027?',
    'The two-day summit takes place on 18–19 January 2027. Venue: Hotel InterContinental Dhaka & Crowne Plaza Dhaka Airport.'
  ],
  [
    'Who can attend?',
    'Government ministries and agencies, development partners, the private sector, cultural and creative institutions, academia and community representatives. Around 300–400 delegates are expected.'
  ],
  [
    'What will the summit produce?',
    'A Summit Declaration, a Tourism Investment Opportunities Book, a Policy Reform White Paper and a comprehensive Summit Report.'
  ]
];
