const fs = require('fs');

const wrap = (id, stops, inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient></defs><rect width="96" height="96" rx="24" fill="url(#${id})"/>${inner}</svg>`;

const icons = {
  research: wrap('gRes',
    '<stop offset="0" stop-color="#4ade80"/><stop offset="1" stop-color="#059669"/>',
    '<g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"><circle cx="41" cy="41" r="16" stroke-width="6"/><line x1="53" y1="53" x2="68" y2="68" stroke-width="8"/><line x1="34" y1="38" x2="48" y2="38" stroke-width="4"/><line x1="34" y1="46" x2="44" y2="46" stroke-width="4"/></g>'),
  animate: wrap('gAni',
    '<stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#e11d48"/>',
    '<path d="M46 30 L70 48 L46 66 Z" fill="#fff"/><g stroke="#fff" stroke-width="6" stroke-linecap="round"><line x1="26" y1="40" x2="36" y2="40"/><line x1="26" y1="56" x2="36" y2="56"/><line x1="24" y1="48" x2="34" y2="48"/></g>'),
  playwright: wrap('gPw',
    '<stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#047857"/>',
    '<g fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M66 34 a20 20 0 1 0 4 14"/></g><path d="M66 26 L68 36 L57 33 Z" fill="#fff"/><path d="M42 39 L58 48 L42 57 Z" fill="#fff"/>'),
  brand: wrap('gBr',
    '<stop offset="0" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/>',
    '<g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"><rect x="26" y="26" width="44" height="32" rx="5" stroke-width="6"/><polyline points="34,48 43,40 50,45 62,34" stroke-width="5"/><line x1="48" y1="58" x2="48" y2="66" stroke-width="6"/><line x1="40" y1="70" x2="56" y2="70" stroke-width="6"/></g>')
};

const out = {};
for (const [name, svg] of Object.entries(icons)) {
  fs.writeFileSync('/tmp/newlogos/' + name + '.svg', svg);
  out[name] = 'data:image/svg+xml;base64,' + Buffer.from(svg, 'utf8').toString('base64');
}
fs.writeFileSync('/tmp/newlogos/datauris.json', JSON.stringify(out, null, 2));
console.log('done', Object.keys(out).join(','));
