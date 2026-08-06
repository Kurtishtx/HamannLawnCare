import { useEffect, useRef } from 'react';

// Google Places (New) address autocomplete — same behavior as the app's
// PropertiesAdd.html: type a street address, pick from the dropdown, and it
// auto-fills the street + city/state/zip fields. Works on any <form> that has
// inputs named address / city / state / zip (uncontrolled).
// Key comes from NEXT_PUBLIC_GOOGLE_MAPS_KEY (set in Vercel + .env.local). If it
// is missing, autocomplete quietly stays off and the address field works normally.
const PKEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '';

export function useAddressAutocomplete<T extends HTMLElement = HTMLFormElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !PKEY) return;
    const input = root.querySelector<HTMLInputElement>('input[name="address"]');
    if (!input) return;

    input.setAttribute('autocomplete', 'off');

    const dd = document.createElement('div');
    dd.style.cssText =
      'position:fixed;z-index:2147483000;background:#fff;border:1px solid #ccc;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.25);max-height:300px;overflow:auto;display:none;font-family:inherit;';
    document.body.appendChild(dd);

    const ddPos = () => {
      const r = input.getBoundingClientRect();
      dd.style.left = r.left + 'px';
      dd.style.top = r.bottom + 2 + 'px';
      dd.style.width = r.width + 'px';
    };

    const setVal = (name: string, v: string) => {
      const el = root.querySelector<HTMLInputElement>(`[name="${name}"]`);
      if (el && v) {
        el.value = v;
        try { el.dispatchEvent(new Event('input', { bubbles: true })); } catch {}
        try { el.dispatchEvent(new Event('change', { bubbles: true })); } catch {}
      }
    };

    const fill = (placeId: string) => {
      fetch('https://places.googleapis.com/v1/places/' + placeId, {
        headers: { 'X-Goog-Api-Key': PKEY, 'X-Goog-FieldMask': 'addressComponents' },
      })
        .then((r) => r.json())
        .then((p: any) => {
          const c: Record<string, any> = {};
          (p.addressComponents || []).forEach((x: any) => { c[x.types[0]] = x; });
          const g = (t: string, short?: boolean) => (c[t] ? (short ? c[t].shortText : c[t].longText) : '');
          const street = (g('street_number') + ' ' + g('route')).trim();
          if (street) { input.value = street; try { input.dispatchEvent(new Event('input', { bubbles: true })); } catch {} }
          const city = g('locality') || g('sublocality') || g('postal_town') || g('administrative_area_level_3');
          setVal('city', city);
          setVal('zip', g('postal_code'));
          setVal('state', g('administrative_area_level_1', true));
        })
        .catch(() => {});
    };

    const showList = (sugg: any[]) => {
      if (!sugg || !sugg.length) { dd.style.display = 'none'; return; }
      dd.innerHTML = '';
      sugg.slice(0, 6).forEach((s: any) => {
        const pp = s.placePrediction;
        if (!pp || !pp.placeId) return;
        const it = document.createElement('div');
        it.textContent = (pp.text && pp.text.text) || '';
        it.style.cssText = 'padding:11px 13px;cursor:pointer;font-size:14px;color:#333;border-bottom:1px solid #eee;';
        it.onmouseenter = () => { it.style.background = '#f3eefa'; };
        it.onmouseleave = () => { it.style.background = '#fff'; };
        it.onclick = () => { dd.style.display = 'none'; fill(pp.placeId); };
        dd.appendChild(it);
      });
      ddPos();
      dd.style.display = 'block';
    };

    let t: ReturnType<typeof setTimeout> | null = null;
    const search = () => {
      const q = input.value.trim();
      if (q.length < 3) { dd.style.display = 'none'; return; }
      fetch('https://places.googleapis.com/v1/places:autocomplete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': PKEY },
        body: JSON.stringify({ input: q, includedRegionCodes: ['us'] }),
      })
        .then((r) => r.json())
        .then((j: any) => showList(j && j.suggestions))
        .catch(() => { dd.style.display = 'none'; });
    };

    const onInput = () => { if (t) clearTimeout(t); t = setTimeout(search, 300); };
    const onKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape') dd.style.display = 'none'; };
    const onDocClick = (e: MouseEvent) => { if (e.target !== input && !dd.contains(e.target as Node)) dd.style.display = 'none'; };
    const onReposition = () => { if (dd.style.display === 'block') ddPos(); };

    input.addEventListener('input', onInput);
    input.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onDocClick);
    window.addEventListener('resize', onReposition);
    window.addEventListener('scroll', onReposition, true);

    return () => {
      if (t) clearTimeout(t);
      input.removeEventListener('input', onInput);
      input.removeEventListener('keydown', onKeydown);
      document.removeEventListener('click', onDocClick);
      window.removeEventListener('resize', onReposition);
      window.removeEventListener('scroll', onReposition, true);
      dd.remove();
    };
  }, []);

  return ref;
}
