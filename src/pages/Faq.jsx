import Layout, { PageHead } from '../components/Layout.jsx';
import FaqItem from '../components/FaqItem.jsx';
import { FAQS } from '../data.js';

export default function Faq() {
  return (
    <Layout page="faq.html">
      <PageHead crumb="FAQ" eyebrow="Questions">
        FAQ
      </PageHead>
      <section className="pbody">
        <div className="wrap faq">
          <div>
            {FAQS.map(([q, a]) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>
      <div className="wrap">
        <div className="contactbox">
          <h3>Contact</h3>
          <p>
            <a href="mailto:parjatanbichitra@gmail.com">parjatanbichitra@gmail.com</a>
          </p>
          <p>01819224593 · 01711698088, 01730450099</p>
          <p>Mohiuddin Helal, Chief Coordinator, BDTS 2027</p>
        </div>
      </div>
    </Layout>
  );
}
