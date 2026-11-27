import { useRef } from 'react';

// <details> with a smooth height animation, ported from the original site.
export default function FaqItem({ q, a }) {
  const dRef = useRef(null);
  const aRef = useRef(null);
  const run = useRef(null);

  const toggle = e => {
    e.preventDefault();
    const d = dRef.current;
    const ans = aRef.current;
    run.current?.cancel();
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!d.open) {
      d.open = true;
      if (reduce) return;
      const h1 = ans.offsetHeight;
      run.current = ans.animate([{ height: '0px' }, { height: `${h1}px` }], {
        duration: 340,
        easing: 'cubic-bezier(.2,.7,.2,1)'
      });
    } else {
      if (reduce) {
        d.open = false;
        return;
      }
      const h0 = ans.offsetHeight;
      run.current = ans.animate([{ height: `${h0}px` }, { height: '0px' }], { duration: 280, easing: 'ease' });
      run.current.onfinish = () => {
        d.open = false;
        run.current = null;
      };
    }
  };

  return (
    <details ref={dRef}>
      <summary onClick={toggle}>
        {q}
        <span className="ic" />
      </summary>
      <div className="ans" ref={aRef}>
        <p>{a}</p>
      </div>
    </details>
  );
}
