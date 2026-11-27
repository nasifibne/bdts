import Layout, { PageHead } from '../components/Layout.jsx';
import { DELEGATES } from '../data.js';

const ROMAN = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.'];

export default function Delegates() {
  return (
    <Layout page="delegates.html">
      <PageHead crumb="Who will be in the room" eyebrow="Delegates">
        Who will be in the room
      </PageHead>
      <section className="pbody">
        <div className="wrap">
          <div className="ledger" style={{ marginTop: 0 }}>
            {DELEGATES.map(([h, p], i) => (
              <div key={h}>
                <i>{ROMAN[i]}</i>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
