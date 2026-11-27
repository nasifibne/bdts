import { useRef, useState } from 'react';
import { ATTENDEE_TYPES, PASS_OPTIONS, SESSIONS, FORM_ENDPOINT, REG_MAIL } from '../data.js';

const endpoint = () => (typeof window !== 'undefined' && window.BDTS_FORM_ENDPOINT) || FORM_ENDPOINT;

function check(el) {
  const v = el.type === 'checkbox' ? el.checked : el.value.trim();
  if (!v) {
    if (el.type === 'checkbox') return 'Please tick this box to continue.';
    return el.tagName === 'SELECT' ? 'Please choose an option.' : 'This field is required.';
  }
  if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())) return 'Please enter a valid email address.';
  if (el.type === 'tel' && el.value.replace(/\D/g, '').length < 7) return 'Please enter a valid phone number.';
  return null;
}

export default function RegisterForm({ pass, onPassChange }) {
  const form = useRef(null);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(null);

  const clear = e => {
    const n = e.target.name;
    if (errors[n]) setErrors(({ [n]: _, ...rest }) => rest);
    setMsg('');
  };

  const err = name => (errors[name] ? <small className="err">{errors[name]}</small> : null);
  const cls = name => (errors[name] ? 'invalid' : undefined);

  const finish = text => {
    setDone(text);
    setTimeout(() => document.getElementById('ok')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
  };

  const submit = e => {
    e.preventDefault();
    const f = form.current;
    const found = {};
    let first = null;
    f.querySelectorAll('[required]').forEach(el => {
      const t = check(el);
      if (t) {
        found[el.name] = t;
        first ||= el;
      }
    });
    setErrors(found);
    if (first) {
      setMsg('Please fix the highlighted fields and try again.');
      first.focus();
      return;
    }

    const o = {};
    new FormData(f).forEach((v, k) => {
      o[k] = o[k] ? `${o[k]}, ${v}` : v;
    });

    const url = endpoint();
    if (url) {
      setSending(true);
      fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(o) })
        .then(r => {
          if (!r.ok) throw new Error(String(r.status));
          finish('We have received your details and will email you shortly.');
        })
        .catch(() => {
          setSending(false);
          setMsg(`Sorry, we could not send your registration. Please check your connection and try again, or email ${REG_MAIL}.`);
        });
      return;
    }

    const body = Object.keys(o)
      .map(k => `${k}: ${o[k]}`)
      .join('\n');
    const subject = `BDTS 2027 registration — ${o.first || ''} ${o.last || ''}`;
    window.location.href = `mailto:${REG_MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    finish(
      `Your email app has opened with your registration details. Please press Send to complete your registration. If nothing opened, email ${REG_MAIL}.`
    );
  };

  if (done) {
    return (
      <div>
        <div className="ok" id="ok" style={{ display: 'block' }}>
          <h3>Thank you for registering!</h3>
          <p>{done}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form ref={form} noValidate onSubmit={submit} onInput={clear} onChange={clear}>
        <div className={`formmsg${msg ? ' show' : ''}`} role="alert">{msg}</div>
        <div className="fg">
          <label>First name *<input name="first" required autoComplete="given-name" className={cls('first')} />{err('first')}</label>
          <label>Last name *<input name="last" required autoComplete="family-name" className={cls('last')} />{err('last')}</label>
          <label>Email *<input type="email" name="email" required autoComplete="email" className={cls('email')} />{err('email')}</label>
          <label>Phone / WhatsApp *<input type="tel" name="phone" required autoComplete="tel" className={cls('phone')} />{err('phone')}</label>
          <label>Organization *<input name="org" required autoComplete="organization" className={cls('org')} />{err('org')}</label>
          <label>Job title *<input name="title" required autoComplete="organization-title" className={cls('title')} />{err('title')}</label>
          <label>Country *<input name="country" defaultValue="Bangladesh" required className={cls('country')} />{err('country')}</label>
          <label>City<input name="city" /></label>
          <label>
            Attendee type *
            <select name="type" required defaultValue="" className={cls('type')}>
              <option value="">Select…</option>
              {ATTENDEE_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
            {err('type')}
          </label>
          <label>
            Pass type *
            <select name="pass" required value={pass} onChange={e => onPassChange(e.target.value)} className={cls('pass')}>
              <option value="">Select…</option>
              {PASS_OPTIONS.map(t => <option key={t}>{t}</option>)}
            </select>
            {err('pass')}
          </label>
          <fieldset className="full ticks">
            <legend>Areas of interest</legend>
            {SESSIONS.map(s => (
              <label className="tick" key={s.k}>
                <input type="checkbox" name="interest" value={s.k} />
                <span>{s.k}</span>
              </label>
            ))}
          </fieldset>
          <label className="full">Message<textarea name="msg" rows="3" /></label>
          <label className="check full">
            <input type="checkbox" name="terms" required className={cls('terms')} /> I agree to the terms &amp; conditions and privacy policy. *
            {err('terms')}
          </label>
          <label className="check full"><input type="checkbox" name="news" /> Send me summit news and updates.</label>
          <div className="full">
            <button className="btn" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Submit registration'}</button>
          </div>
        </div>
      </form>
    </div>
  );
}
