import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout.jsx';
import RegisterForm from '../components/RegisterForm.jsx';
import Lightbox from '../components/Lightbox.jsx';
import SplitText from '../components/reactbits/SplitText.jsx';
import ShinyText from '../components/reactbits/ShinyText.jsx';
import CountUp from '../components/reactbits/CountUp.jsx';
import {
  img,
  EVENT_START,
  SESSIONS,
  STATS,
  DELIVERABLES,
  MOSAIC,
  REEL,
  PARTNERS,
  PASSES
} from '../data.js';

// WebGL background: loaded on its own so the rest of the page doesn't wait for it.
const Threads = lazy(() => import('../components/reactbits/Threads.jsx'));

const GOLD = [198 / 255, 161 / 255, 91 / 255];
const pad = n => String(n).padStart(2, '0');

function Hero() {
  return (
    <section className="hero">
      <div className="split">
        <div className="hcopy">
          <img className="mark" alt="2nd Bangladesh Tourism Summit 2027" src={img('summit-mark.png')} />
          <div className="eyebrow">
            <ShinyText text="2nd Edition · National Summit" color="#16745B" shineColor="#C6A15B" speed={3} delay={2} />
          </div>
          <SplitText
            tag="h1"
            className="hero-title"
            text="Bangladesh Tourism Summit 2027"
            splitType="words"
            wordsClass="split-word w++"
            mask
            delay={110}
            duration={1.1}
            trigger="load"
            textAlign="left"
          />
          <div className="meta">
            <span className="chip">18–19 January 2027</span>
            <span className="chip">Two-Day National Summit · InterContinental Dhaka &amp; Crowne Plaza Dhaka Airport</span>
          </div>
          <p className="quote">
            “Transforming Tourism for Sustainable and Inclusive Growth, Investment, Employment and the Creative Economy”
          </p>
          <p className="sub">Connecting Policy, Investment, Culture, Heritage and Sustainable Tourism Development.</p>
          <div className="cta">
            <a className="btn gold" href="#register">Get your Pass</a>
            <a className="btn ghost" href="#about">More Information</a>
          </div>
        </div>
        <div className="frame">
          <figure
            className="photo"
            style={{ '--photo': `url(${img('hero-1st-summit.jpg')})`, '--pos': '72% 40%' }}
            role="img"
            aria-label="A speaker addressing delegates at the 1st Bangladesh Tourism Development Summit, 2023"
          >
            <figcaption className="tag">
              <span>
                <b>From the 1st Summit</b>Bangladesh Tourism Development Summit · 2023
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function About({ onPhoto }) {
  return (
    <section id="about">
      <div className="wrap two">
        <div>
          <div className="eyebrow">Policy Context</div>
          <h2>
            A national platform for tourism <em>policy and investment</em>
          </h2>
          <p className="lead">
            Bangladesh has immense potential to become a leading tourism destination in South Asia, with its cultural
            heritage, diverse landscapes, archaeological treasures, rivers, biodiversity and vibrant communities. Tourism
            connects hospitality, transport, aviation, agriculture, handicrafts, culture and local entrepreneurship.
          </p>
          <p className="lead">
            BDTS brings together policymakers, development partners, industry leaders, investors, academics, cultural
            professionals and community representatives to discuss, formulate and recommend strategic actions for the
            sustainable development of Bangladesh’s tourism sector.
          </p>
          <p style={{ marginTop: 26 }}>
            <a className="btn" href="#congress">More Information</a>
          </p>
        </div>
        <div className="aside">
          <div className="stats">
            {STATS.map(s => (
              <div className="stat" key={s.label}>
                <b>
                  {s.from ? (
                    <>
                      <CountUp to={s.from} duration={1.6} />–<CountUp to={s.to} duration={1.8} />
                    </>
                  ) : (
                    <CountUp to={s.to} duration={1.2} />
                  )}
                </b>
                {s.label}
              </div>
            ))}
          </div>
          <figure
            className="fp"
            onClick={() => onPhoto(img('about-delegates.jpg'), 'Delegates, officials and young participants gathered in front of the 1st BDTS stage backdrop')}
          >
            <div className="im">
              <img
                src={img('about-delegates.jpg')}
                alt="Delegates, officials and young participants gathered in front of the 1st BDTS stage backdrop"
                loading="lazy"
              />
            </div>
            <figcaption>Delegates and organisers · 1st BDTS, 2023</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Sessions() {
  const [cur, setCur] = useState(0);
  const [shown, setShown] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (cur === shown) return undefined;
    setOut(true);
    const t = setTimeout(() => {
      setShown(cur);
      setOut(false);
    }, 180);
    return () => clearTimeout(t);
  }, [cur, shown]);

  return (
    <section id="congress" className="forest">
      <div className="wrap">
        <div className="eyebrow">Plenary Programme</div>
        <h2>
          Six Thematic <em>Plenary Sessions</em>
        </h2>
        <p className="lead">
          A highly participatory and interactive summit with keynote addresses, six thematic plenary sessions, B2B and B2G
          networking, and the adoption of recommendations for the Government of Bangladesh.
        </p>
        <div className="idx">
          <div className="rows">
            {SESSIONS.map((s, i) => (
              <button
                key={s.t}
                type="button"
                className={`row${i === cur ? ' on' : ''}`}
                onMouseEnter={() => setCur(i)}
                onFocus={() => setCur(i)}
                onClick={() => setCur(i)}
              >
                <span className="n">{pad(i + 1)}</span>
                <span>
                  <h3>Session {i + 1}</h3>
                  <span className="t">{s.t}</span>
                  <span className="trk">Thematic area · {s.k}</span>
                </span>
                <span className="ar">→</span>
              </button>
            ))}
          </div>
          <aside className="pv" aria-live="polite">
            <div className={`swap${out ? ' out' : ''}`}>
              <div className="lab">Session {shown + 1}</div>
              <div className="tx">{SESSIONS[shown].t}</div>
            </div>
            <div className={`swap big${out ? ' out' : ''}`}>{pad(shown + 1)}</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Format() {
  return (
    <section id="format">
      <div className="wrap">
        <div className="eyebrow">Summit Structure</div>
        <h2>
          Two days, one <em>national conversation</em>
        </h2>
        <div className="bento">
          <div className="bx b-key">
            <div className="big" aria-hidden="true">02</div>
            <div>
              <h3>Keynote Addresses</h3>
              <p>Leaders setting the vision for tourism.</p>
              <a className="go" href="#agenda">View the agenda</a>
            </div>
          </div>
          <div className="bx b-open"><span className="k">01</span><h3>Opening Ceremony</h3><p>The official launch of BDTS 2027.</p></div>
          <div className="bx b-pl"><span className="k">03</span><h3>Thematic Plenary Sessions</h3><p>Six sessions on policy, investment, sustainability, skills, promotion and culture.</p></div>
          <div className="bx b-net"><span className="k">04</span><h3>B2B and B2G Networking</h3><p>Connect business-to-business and business-to-government.</p></div>
          <div className="bx b-close"><span className="k">05</span><h3>Closing Session</h3><p>Adoption of the summit’s recommendations.</p></div>
          <div className="bx b-award">
            <div>
              <h3>Bangladesh Tourism Award Ceremony 2027</h3>
              <p>Recognizing excellence in tourism.</p>
            </div>
            <span className="k" style={{ position: 'static', color: '#f1cfa4' }}>06</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  const end = new Date(EVENT_START).getTime();
  const calc = () => {
    const t = Math.max(0, end - Date.now());
    return [Math.floor(t / 864e5), Math.floor((t % 864e5) / 36e5), Math.floor((t % 36e5) / 6e4), Math.floor((t % 6e4) / 1e3)];
  };
  const [v, setV] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setV(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="band">
      <div className="band-bg" aria-hidden="true">
        <Suspense fallback={null}>
          <Threads color={GOLD} amplitude={1.1} distance={0.2} lineCount={36} thickness={0.5} speed={0.25} opacity={0.32} brightness={1.1} angle={8} />
        </Suspense>
      </div>
      <div className="wrap">
        <h3>TIME TO REIMAGINE</h3>
        <div className="count" role="timer" aria-label="Time until the summit opens">
          {['days', 'hours', 'minutes', 'seconds'].map((u, i) => (
            <div key={u}>
              <b>{pad(v[i])}</b>
              <small>{u}</small>
            </div>
          ))}
        </div>
        <p>18–19 January 2027 | InterContinental Dhaka &amp; Crowne Plaza Dhaka Airport</p>
      </div>
    </div>
  );
}

function Deliverables() {
  return (
    <section id="deliverables" className="mist">
      <div className="wrap">
        <div className="eyebrow">Summit Outputs</div>
        <h2>
          Three Strategic <em>Deliverables</em>
        </h2>
        <p className="lead">BDTS aims to be a high-level national policy and investment summit, not simply a conference.</p>
        <div className="dl">
          {DELIVERABLES.map((d, i) => (
            <div className="dc" key={d.no} style={{ '--bg': `url(${img(d.bg)})` }}>
              <span className="no">{d.no}</span>
              {i === 0 ? (
                <div>
                  <h3>{d.t}</h3>
                  <p>{d.p}</p>
                </div>
              ) : (
                <>
                  <h3>{d.t}</h3>
                  <p>{d.p}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Papers() {
  return (
    <section className="sand" id="papers">
      <div className="wrap papers">
        <div>
          <div className="eyebrow">Call for Papers</div>
          <h2>Submit your abstract or research paper</h2>
          <p>
            Researchers, academics, practitioners, policymakers, cultural professionals and students are invited to submit
            abstracts and research papers under the six thematic areas of the Summit.
          </p>
          <p style={{ marginTop: 26 }}>
            <a className="btn" href="mailto:bdtourismsummit@gmail.com?subject=BDTS%202027%20Call%20for%20Papers">
              Email your abstract
            </a>
          </p>
        </div>
        <div className="tracks">
          <h3>Submit under any of the six thematic areas</h3>
          <ol>
            {SESSIONS.map((s, i) => (
              <li key={s.t}>
                <span>{pad(i + 1)}</span>
                {s.t}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Agenda() {
  return (
    <section id="agenda">
      <div className="wrap">
        <div className="eyebrow">Programme</div>
        <h2>Agenda</h2>
        <div className="notice">
          <b>Detailed programme to be announced</b>The two-day programme for 18–19 January 2027 — opening ceremony,
          keynote addresses, six thematic plenary sessions, B2B and B2G networking and the closing session — will be
          published here soon.
        </div>
      </div>
    </section>
  );
}

function Highlights({ onPhoto }) {
  const reel = useRef(null);
  const step = d => reel.current?.scrollBy({ left: d * reel.current.clientWidth * 0.8, behavior: 'smooth' });
  return (
    <section className="mist">
      <div className="wrap">
        <div className="eyebrow">Highlights</div>
        <h2>Relive the best moments from the 1st BDTS</h2>
        <p className="lead" style={{ marginTop: 8 }}>
          Photographs from the 1st Bangladesh Tourism Development Summit, 2023.
        </p>
        <div className="mosaic">
          {MOSAIC.map(([f, alt, cap], i) => (
            <figure className={`m m${i + 1}`} key={f} onClick={() => onPhoto(img(f), alt)}>
              <div className="im">
                <img src={img(f)} alt={alt} loading="lazy" />
              </div>
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
        <div className="reelhead">
          <h3>More from the 1st summit</h3>
          <div className="rb">
            <button type="button" className="rbtn" aria-label="Previous photos" onClick={() => step(-1)}>←</button>
            <button type="button" className="rbtn" aria-label="Next photos" onClick={() => step(1)}>→</button>
          </div>
        </div>
        <div className="reel" ref={reel}>
          {REEL.map(([f, alt, cap]) => (
            <figure className="r" key={f} onClick={() => onPhoto(img(f), alt)}>
              <div className="im">
                <img src={img(f)} alt={alt} loading="lazy" />
              </div>
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section id="speakers">
      <div className="wrap">
        <div className="eyebrow">Speakers</div>
        <h2>
          Meet BDTS 2027 <em>Top Speakers</em>
        </h2>
        <div className="notice">
          <b>Speakers to be announced</b>Our keynote and panel speakers will be revealed here soon.
        </div>
        <p style={{ marginTop: 34 }}>
          <a className="btn" href="#register">Get your Pass</a>
        </p>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="mist partners" id="partners">
      <div className="wrap">
        <div className="eyebrow">Partners &amp; Patrons</div>
        <h2>Partners</h2>
        {PARTNERS.map(g => (
          <div key={g.role}>
            <h3>{g.role}</h3>
            <div className="logos">
              {g.logos.map(([f, alt]) => (
                <div className="lt" key={f}>
                  <img src={img(f)} alt={alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="notice">
          <b>More partners to be announced</b>Industry, destination and institutional partners for 2027 will be announced
          soon.
        </div>
      </div>
    </section>
  );
}

function Passes() {
  const [pass, setPass] = useState('');
  const pick = name => {
    setPass(name);
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section id="passes" className="sand">
      <div className="wrap">
        <div className="eyebrow">Delegate Passes</div>
        <h2>Choose your Pass</h2>
        <p className="lead">Select a pass and it will be carried straight into the registration form below.</p>
        <div className="passes no-rv">
          {PASSES.map(p => (
            <button
              type="button"
              key={p.name}
              className={`pass${p.feat ? ' feat' : ''}${pass === p.name ? ' sel' : ''}`}
              onClick={() => pick(p.name)}
              aria-pressed={pass === p.name}
            >
              <h3>{p.name}</h3>
              <div className="price">{p.price}</div>
              <ul>
                {p.perks.map(x => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <span className="pick">Select this pass</span>
            </button>
          ))}
        </div>
        <div className="regbox" id="register">
          <div className="regside">
            <div className="eyebrow">Registration</div>
            <h2>Register for BDTS 2027</h2>
            <span className={`sel-chip${pass ? ' has' : ''}`}>{pass ? `Selected: ${pass}` : 'No pass selected yet'}</span>
          </div>
          <RegisterForm pass={pass} onPassChange={setPass} />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [photo, setPhoto] = useState(null);
  const onPhoto = (src, alt) => setPhoto({ src, alt });
  return (
    <Layout page="index.html">
      <Hero />
      <About onPhoto={onPhoto} />
      <Sessions />
      <Format />
      <Countdown />
      <Deliverables />
      <Papers />
      <Agenda />
      <Highlights onPhoto={onPhoto} />
      <Speakers />
      <Partners />
      <Passes />
      <Lightbox photo={photo} onClose={() => setPhoto(null)} />
    </Layout>
  );
}
