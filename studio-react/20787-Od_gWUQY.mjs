import { c as e, h as t, l as n, n as r, p as i, t as a, u as o } from "./unsafe-svg-BFm0oi37.mjs";
import { a as s, o as c } from "./23467-DdRlTjfC.mjs";
//#region node_modules/@ve-design/react/node_modules/@ve-design/web/dist/78928.js
var l = class extends n {
	static dependencies;
	static shadowRootOptions = {
		...n.shadowRootOptions,
		delegatesFocus: !0
	};
};
function u(e) {
	try {
		Object.defineProperty(e, "vePackageVersion", {
			configurable: !0,
			value: "0.0.5"
		});
	} catch {}
}
function d(e, t, n) {
	if (!("u" < typeof customElements) && !customElements.get(e) && !n.has(e)) {
		n.add(e);
		for (let [e, r] of Object.entries(t.dependencies ?? {})) d(e, r, n);
		customElements.get(e) || (u(t), customElements.define(e, t));
	}
}
function f(e, t) {
	d(e, t, /* @__PURE__ */ new Set());
}
var p = t`
  :host {
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]) {
    display: none !important;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    display: table;
    max-width: 100%;
    padding: 0;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  :host {
    --ve-scrollbar-size: 6px;
    --ve-scrollbar-radius: 999px;
    --ve-scrollbar-thumb-color: var(--color-border-strong, #b8b7c3);
    --ve-scrollbar-thumb-background: color-mix(
      in srgb,
      var(--ve-scrollbar-thumb-color) 50%,
      transparent
    );
    --ve-scrollbar-track-color: transparent;
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-scrollbar-thumb-background: var(--ve-scrollbar-thumb-color);
    }
  }

  :host *,
  :host *::before,
  :host *::after {
    scrollbar-width: thin;
    scrollbar-color: var(--ve-scrollbar-thumb-background)
      var(--ve-scrollbar-track-color);
  }

  :host *::-webkit-scrollbar {
    inline-size: var(--ve-scrollbar-size);
    block-size: var(--ve-scrollbar-size);
  }

  :host *::-webkit-scrollbar-thumb {
    border-radius: var(--ve-scrollbar-radius);
    background: var(--ve-scrollbar-thumb-background);
  }

  :host *::-webkit-scrollbar-track,
  :host *::-webkit-scrollbar-corner {
    background: var(--ve-scrollbar-track-color);
  }
`, m = [
	p,
	t`
  :host {
    --ve-icon-size: 1.15em;
    --ve-icon-stroke-width: 1.5;
  }
`,
	t`
    :host {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      color: inherit;
      line-height: 0;
      vertical-align: -0.125em;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-icon {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-icon-size);
      block-size: var(--ve-icon-size);
      color: inherit;
      line-height: 0;
    }

    .ve-icon svg {
      display: block;
      flex: none;
      inline-size: 100%;
      block-size: 100%;
      color: inherit;
      overflow: visible;
    }

    .ve-icon svg [stroke] {
      stroke-width: var(--ve-icon-stroke-width);
    }
  `
];
function h(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function g(e) {
	var t = h(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function _(e) {
	if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (e === null ? "null" : typeof e));
	return e;
}
function v(e, t, n) {
	typeof t == "symbol" && (t = t.description, t = t ? "[" + t + "]" : "");
	try {
		Object.defineProperty(e, "name", {
			configurable: !0,
			value: n ? n + " " + t : t
		});
	} catch {}
	return e;
}
function y(e, t, n, r, i, a) {
	var o = Symbol.metadata || Symbol.for("Symbol.metadata"), s = Object.defineProperty, c = Object.create, l, u = [c(null), c(null)], d = t.length, f;
	function p(t, n, r) {
		return function(i, a) {
			n && (a = i, i = e);
			for (var o = 0; o < t.length; o++) a = t[o].apply(i, r ? [a] : []);
			return r ? a : i;
		};
	}
	function m(e, t, n, r) {
		if (typeof e != "function" && (r || e !== void 0)) throw TypeError(t + " must " + (n || "be") + " a function" + (r ? "" : " or undefined"));
		return e;
	}
	function h(e, t, n, r, i, a, o, c, d, h, g) {
		function _(e) {
			if (!g(e)) throw TypeError("Attempted to access private element on non-instance");
		}
		var y = [].concat(t[0]), b = t[3], x = !o, S = i === 1, C = i === 3, w = i === 4, T = i === 2;
		function E(t, n, r) {
			return function(i, a) {
				return n && (a = i, i = e), r && r(i), desc[t].call(i, a);
			};
		}
		var D = {}, O = [], k = C ? "get" : w || S ? "set" : "value";
		if (!x && (d ? (h || S ? D = {
			get: v(function() {
				return b(this);
			}, r, "get"),
			set: function(e) {
				t[4](this, e);
			}
		} : D[k] = b, h || v(D[k], r, T ? "" : k)) : h || (D = Object.getOwnPropertyDescriptor(e, r)), !h && !d)) {
			if (f = u[+c][r], f && (f ^ i) !== 7) throw Error("Decorating two elements with the same name (" + D[k].name + ") is not supported yet");
			u[+c][r] = i < 3 ? 1 : i;
		}
		for (var A = e, j = y.length - 1; j >= 0; j -= n ? 2 : 1) {
			var M = m(y[j], "A decorator", "be", !0), N = n ? y[j - 1] : void 0, P = {}, F = {
				kind: [
					"field",
					"accessor",
					"method",
					"getter",
					"setter",
					"class"
				][i],
				name: r,
				metadata: l,
				addInitializer: (function(e, t) {
					if (e.v) throw TypeError("attempted to call addInitializer after decoration was finished");
					m(t, "An initializer", "be", !0), a.push(t);
				}).bind(null, P)
			};
			if (x) {
				f = M.call(N, A, F), P.v = 1, m(f, "class decorators", "return") && (A = f);
				continue;
			}
			if (F.static = c, F.private = d, f = F.access = { has: d ? g.bind() : function(e) {
				return r in e;
			} }, w || (f.get = d ? T ? function(e) {
				return _(e), D.value;
			} : E("get", 0, _) : function(e) {
				return e[r];
			}), !T && !C && (f.set = d ? E("set", 0, _) : function(e, t) {
				e[r] = t;
			}), A = M.call(N, S ? {
				get: D.get,
				set: D.set
			} : D[k], F), P.v = 1, S) {
				if (typeof A == "object" && A) (f = m(A.get, "accessor.get")) && (D.get = f), (f = m(A.set, "accessor.set")) && (D.set = f), (f = m(A.init, "accessor.init")) && O.unshift(f);
				else if (A !== void 0) throw TypeError("accessor decorators must return an object with get, set, or init properties or undefined");
			} else m(A, (h ? "field" : "method") + " decorators", "return") && (h ? O.unshift(A) : D[k] = A);
		}
		return i < 2 && o.push(p(O, c, 1), p(a, c, 0)), !h && !x && (d ? S ? o.splice(-1, 0, E("get", c), E("set", c)) : o.push(T ? D[k] : m.call.bind(D[k])) : s(e, r, D)), A;
	}
	function y() {
		var t = [], r, a, o = function(e) {
			e && t.push(p(e));
		}, s = function(o, s) {
			for (var c = 0; c < n.length; c++) {
				var l = n[c], u = l[1], d = 7 & u;
				if ((8 & u) == o && !d == s) {
					var f = l[2], p = !!l[3], m = 16 & u;
					h(o ? e : e.prototype, l, m, p ? "#" + f : g(f), d, d < 2 ? [] : o ? a ||= [] : r ||= [], t, !!o, p, s, o && p ? function(t) {
						return _(t) === e;
					} : i);
				}
			}
		};
		return s(8, 0), s(0, 0), s(8, 1), s(0, 1), o(r), o(a), t;
	}
	function b(e) {
		return s(e, o, {
			configurable: !0,
			enumerable: !0,
			value: l
		});
	}
	return a !== void 0 && (l = a[o]), l = c(l ?? null), f = y(), d || b(e), {
		e: f,
		get c() {
			var n = [];
			return d && [b(e = h(e, [t], r, e.name, 5, n)), p(n, 1)];
		}
	};
}
var b, x, S, C, w, T, E, D, O, k, A, j, M = "ve-icon";
b = e({
	type: String,
	reflect: !0
}), x = e({ attribute: !1 }), S = e({ type: String }), C = e({ reflect: !0 });
var N = class extends l {
	static {
		({e: [w, T, E, D, O, k, A, j]} = y(this, [], [
			[
				b,
				1,
				"name"
			],
			[
				x,
				1,
				"definition"
			],
			[
				S,
				1,
				"label"
			],
			[
				C,
				1,
				"size"
			]
		]));
	}
	static styles = m;
	#e = (() => {
		let e = w(this, "");
		return T(this), e;
	})();
	get name() {
		return this.#e;
	}
	set name(e) {
		this.#e = e;
	}
	#t = (() => {
		let e = E(this, void 0);
		return D(this), e;
	})();
	get definition() {
		return this.#t;
	}
	set definition(e) {
		this.#t = e;
	}
	#n = (() => {
		let e = O(this, "");
		return k(this), e;
	})();
	get label() {
		return this.#n;
	}
	set label(e) {
		this.#n = e;
	}
	#r = (() => {
		let e = A(this, "");
		return j(this), e;
	})();
	get size() {
		return this.#r;
	}
	set size(e) {
		this.#r = e;
	}
	removeIconRegistryChangeListener = null;
	connectedCallback() {
		super.connectedCallback(), this.removeIconRegistryChangeListener = s((e) => {
			this.name && e.includes(this.name) && this.requestUpdate();
		}), this.loadCurrentIcon();
	}
	disconnectedCallback() {
		this.removeIconRegistryChangeListener?.(), this.removeIconRegistryChangeListener = null, super.disconnectedCallback();
	}
	updated(e) {
		super.updated(e), (e.has("name") || e.has("definition")) && this.loadCurrentIcon();
	}
	loadCurrentIcon() {
		if (this.definition) return;
		let e = (this.name ?? "").trim();
		!e || c(e) || import("./23467-DdRlTjfC.mjs").then((e) => e.t).then((e) => e.loader_namespaceObject).then(({ isBuiltInIconName: t, loadIcon: n }) => {
			if (!((this.name ?? "").trim() !== e || c(e) || !t(e))) return n(e);
		}).catch(() => {});
	}
	get resolvedIcon() {
		return this.definition ? this.definition : this.name ? c(this.name) : void 0;
	}
	get normalizedSize() {
		if (typeof this.size == "number") return Number.isFinite(this.size) ? `${this.size}px` : void 0;
		let e = (this.size ?? "").trim();
		if (e) return /^\d+(\.\d+)?$/.test(e) ? `${e}px` : e;
	}
	get iconStyle() {
		let e = this.normalizedSize;
		return e ? `--ve-icon-size: ${e};` : void 0;
	}
	render() {
		let e = this.resolvedIcon;
		if (!e) return o;
		let t = (this.label ?? "").trim();
		return i`
      <span
        class="ve-icon"
        part="icon"
        style=${r(this.iconStyle)}
        role=${r(t ? "img" : void 0)}
        aria-label=${r(t || void 0)}
        aria-hidden=${r(t ? void 0 : "true")}
      >
        ${a(e.svg)}
      </span>
    `;
	}
};
//#endregion
//#region node_modules/@ve-design/react/node_modules/@ve-design/web/dist/20787.js
function P() {
	f(M, N);
}
P();
//#endregion
export { p as a, l as i, M as n, f as o, N as r, P as t };
