import { useEffect, useRef } from 'react';

export default function Lightbox({ photo, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (photo && !d.open) d.showModal?.();
    if (!photo && d.open) d.close();
  }, [photo]);

  return (
    <dialog
      id="lb"
      ref={ref}
      aria-label="Photo viewer"
      onClose={onClose}
      onClick={e => e.target === ref.current && onClose()}
    >
      <button type="button" id="lbx" aria-label="Close" onClick={onClose}>✕</button>
      {photo && <img src={photo.src} alt={photo.alt} />}
      <p>{photo?.alt}</p>
    </dialog>
  );
}
