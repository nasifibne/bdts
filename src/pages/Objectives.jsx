import Layout, { PageHead } from '../components/Layout.jsx';

const SPECIFIC = [
  'Review tourism sector challenges, opportunities and development priorities.',
  'Promote policy dialogue and institutional coordination among stakeholders.',
  'Mobilize tourism investment and encourage infrastructure development.',
  'Strengthen tourism business promotion, market development and destination marketing.',
  'Advance sustainable, community-based and heritage tourism.',
  'Promote skills development, innovation and digital transformation.',
  'Integrate tourism, culture, heritage and the creative economy.',
  'Develop actionable policy recommendations for sustainable and inclusive tourism growth.'
];
const OUTCOMES = [
  'Consensus on national tourism development priorities.',
  'Actionable policy recommendations for the Government.',
  'Identification and promotion of potential tourism investment projects.',
  'Stronger public-private and development partner collaboration.',
  'Improved tourism business opportunities and destination marketing.',
  'Greater emphasis on sustainable and community-based tourism.',
  'Enhanced integration of tourism, culture, heritage and creative industries.',
  'Publication of three strategic deliverables: the Declaration, the Investment Opportunities Book and the Policy Reform White Paper.'
];

export default function Objectives() {
  return (
    <Layout page="objectives.html">
      <PageHead crumb="Objectives & Expected Outcomes" eyebrow="Our Purpose">
        Objectives &amp; <em>Expected Outcomes</em>
      </PageHead>
      <section className="pbody">
        <div className="wrap">
          <p className="gen">
            <b>General objective:</b> To establish a national platform for policy dialogue, strategic collaboration and
            investment promotion aimed at accelerating sustainable tourism development in Bangladesh.
          </p>
          <div className="ob">
            <div>
              <h3>Specific objectives</h3>
              <ol>
                {SPECIFIC.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3>Expected outcomes</h3>
              <ul>
                {OUTCOMES.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="gen" style={{ marginTop: 44 }}>
            <b>Long-term vision:</b> BDTS will aim to become the country’s premier annual tourism policy and investment
            forum, connecting tourism with investment, culture, heritage, creative industries, skills, technology,
            environmental conservation and community entrepreneurship, and positioning Bangladesh as a competitive,
            sustainable and culturally vibrant destination.
          </p>
        </div>
      </section>
    </Layout>
  );
}
