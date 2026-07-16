import { _ as e, a as t, c as n, f as r, g as i, m as a, n as o, o as s, p as c, r as l, s as u } from "./20787-DAItmzdR.mjs";
import { t as d } from "./query-BYu9q8lA.mjs";
import { n as f } from "./42938-CX6JNQ4u.mjs";
//#region node_modules/@ve-design/web/dist/68533.js
var p = [
	u,
	e`
  :host {
    --ve-button-gap: var(--space-xxxs);

    --ve-button-height-small: var(--height-small);
    --ve-button-height-default: var(--height-default);
    --ve-button-height-large: var(--height-large);

    --ve-button-padding-inline-small: var(--space-xxs);
    --ve-button-padding-inline-default: var(--space-xs);
    --ve-button-padding-inline-large: var(--space-xs);

    --ve-button-radius-default: var(--radius-md);
    --ve-button-radius-round: var(--radius-full);
    --ve-button-radius-circle: var(--radius-full);

    --ve-button-font-size-small: var(--text-body-sm);
    --ve-button-font-size-default: var(--text-body);
    --ve-button-font-size-large: var(--text-body);
    --ve-button-font-weight: var(--font-weight-normal);

    --ve-button-background-primary: var(--color-bg-primary);
    --ve-button-text-primary: var(--color-text-foreground);
    --ve-button-border-primary: transparent;

    --ve-button-background-secondary: var(--color-bg-secondary);
    --ve-button-text-secondary: var(--color-text-primary);
    --ve-button-border-secondary: transparent;

    --ve-button-background-outline: transparent;
    --ve-button-text-outline: var(--color-text-primary);
    --ve-button-border-outline: var(--color-border-strong);
    --ve-button-border-outline-hover: var(--color-border-interactive);
    --ve-button-border-outline-pressed: var(--color-border-interactive-active);

    --ve-button-background-text: transparent;
    --ve-button-text-text: var(--color-text-accent);
    --ve-button-border-text: transparent;

    --ve-button-status-surface-success: var(--color-bg-success);
    --ve-button-status-surface-warning: var(--color-bg-warning);
    --ve-button-status-surface-danger: var(--color-bg-danger);

    --ve-button-status-surface-secondary-success: var(
      --color-bg-success-secondary
    );
    --ve-button-status-surface-secondary-warning: var(
      --color-bg-warning-secondary
    );
    --ve-button-status-surface-secondary-danger: var(
      --color-bg-danger-secondary
    );

    --ve-button-status-text-success: var(--color-text-success);
    --ve-button-status-text-warning: var(--color-text-warning);
    --ve-button-status-text-danger: var(--color-text-danger);

    --ve-button-status-border-success: var(--color-border-success);
    --ve-button-status-border-warning: var(--color-border-warning);
    --ve-button-status-border-danger: var(--color-border-danger);

    --ve-button-loading-icon-size: var(--ve-button-current-font-size);
    --ve-button-disabled-opacity: var(--state-disabled-ratio);
    --ve-button-press-transform: translateY(0.4px) scale(0.995);

    --ve-button-current-height: var(--ve-button-height-default);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-default);
    --ve-button-current-radius: var(--ve-button-radius-default);
    --ve-button-current-font-size: var(--ve-button-font-size-default);

    --ve-button-current-background: var(--ve-button-background-primary);
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-background) var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-background) var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-text: var(--ve-button-text-primary);
    --ve-button-current-text-hover: var(--ve-button-current-text);
    --ve-button-current-text-pressed: var(--ve-button-current-text);
    --ve-button-current-border: var(--ve-button-border-primary);
    --ve-button-current-border-hover: color-mix(
      in srgb,
      var(--ve-button-current-border) var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-border-pressed: color-mix(
      in srgb,
      var(--ve-button-current-border) var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-solid-ratio);
    --ve-button-current-hover-mix: var(--state-hover-solid-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-solid-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-solid-mix);

    --ve-button-current-status-surface: transparent;
    --ve-button-current-status-surface-secondary: transparent;
    --ve-button-current-status-text: currentColor;
    --ve-button-current-status-border: currentColor;
  }

  :host([type='secondary']) {
    --ve-button-current-background: var(--ve-button-background-secondary);
    --ve-button-current-text: var(--ve-button-text-secondary);
    --ve-button-current-border: var(--ve-button-border-secondary);
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([type='outline']),
  :host([type='outline-filled']) {
    --ve-button-current-background: var(--ve-button-background-outline);
    --ve-button-current-text: var(--ve-button-text-outline);
    --ve-button-current-border: var(--ve-button-border-outline);
    --ve-button-current-border-hover: var(--ve-button-border-outline-hover);
    --ve-button-current-border-pressed: var(--ve-button-border-outline-pressed);
    --ve-button-current-border-width: var(--stroke-weight-base);

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([type='outline']) {
    --ve-button-current-background-hover: var(--ve-button-current-background);
    --ve-button-current-background-pressed: var(
      --ve-button-current-background
    );
  }

  :host([type='outline-filled']) {
    --ve-button-current-border-hover: var(--ve-button-current-border);
    --ve-button-current-border-pressed: var(--ve-button-current-border);
  }

  :host([type='text']) {
    --ve-button-current-background: var(--ve-button-background-text);
    --ve-button-current-text: var(--ve-button-text-text);
    --ve-button-current-border: var(--ve-button-border-text);
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([size='small']) {
    --ve-button-current-height: var(--ve-button-height-small);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-small);
    --ve-button-current-font-size: var(--ve-button-font-size-small);
  }

  :host([size='large']) {
    --ve-button-current-height: var(--ve-button-height-large);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-large);
    --ve-button-current-font-size: var(--ve-button-font-size-large);
  }

  :host([shape='round']) {
    --ve-button-current-radius: var(--ve-button-radius-round);
  }

  :host([shape='circle']) {
    --ve-button-current-radius: var(--ve-button-radius-circle);
    --ve-button-current-padding-inline: 0px;
  }

  :host([status='success']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-success);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-success
    );
    --ve-button-current-status-text: var(--ve-button-status-text-success);
    --ve-button-current-status-border: var(--ve-button-status-border-success);
  }

  :host([status='warning']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-warning);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-warning
    );
    --ve-button-current-status-text: var(--ve-button-status-text-warning);
    --ve-button-current-status-border: var(--ve-button-status-border-warning);
  }

  :host([status='danger']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-danger);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-danger
    );
    --ve-button-current-status-text: var(--ve-button-status-text-danger);
    --ve-button-current-status-border: var(--ve-button-status-border-danger);
  }

  :host([status='success'][type='primary']),
  :host([status='warning'][type='primary']),
  :host([status='danger'][type='primary']) {
    --ve-button-current-background: var(--ve-button-current-status-surface);
    --ve-button-current-text: var(--ve-button-text-primary);
  }

  :host([status='success'][type='secondary']),
  :host([status='warning'][type='secondary']),
  :host([status='danger'][type='secondary']) {
    --ve-button-current-background: var(
      --ve-button-current-status-surface-secondary
    );
    --ve-button-current-text: var(--ve-button-current-status-text);
  }

  :host([status='success'][type='outline']),
  :host([status='warning'][type='outline']),
  :host([status='danger'][type='outline']),
  :host([status='success'][type='outline-filled']),
  :host([status='warning'][type='outline-filled']),
  :host([status='danger'][type='outline-filled']) {
    --ve-button-current-text: var(--ve-button-current-status-text);
    --ve-button-current-border: var(--ve-button-current-status-border);
    --ve-button-current-text-hover: var(--ve-button-current-status-text);
    --ve-button-current-text-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-text)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-border-hover: var(--ve-button-current-text-hover);
    --ve-button-current-border-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-border)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
  }

  :host([status='success'][type='outline-filled']),
  :host([status='warning'][type='outline-filled']),
  :host([status='danger'][type='outline-filled']) {
    --ve-button-current-border-hover: var(--ve-button-current-border);
    --ve-button-current-border-pressed: var(--ve-button-current-border);
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
  }

  :host([status='success'][type='text']),
  :host([status='warning'][type='text']),
  :host([status='danger'][type='text']) {
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-text: var(--ve-button-current-status-text);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-button-current-background-hover: var(--ve-button-current-background);
      --ve-button-current-background-pressed: var(
        --ve-button-current-background
      );
      --ve-button-current-border-hover: var(--ve-button-current-border);
      --ve-button-current-border-pressed: var(--ve-button-current-border);
    }

    :host([status='success'][type='outline']),
    :host([status='warning'][type='outline']),
    :host([status='danger'][type='outline']),
    :host([status='success'][type='outline-filled']),
    :host([status='warning'][type='outline-filled']),
    :host([status='danger'][type='outline-filled']) {
      --ve-button-current-text-pressed: var(--ve-button-current-status-text);
      --ve-button-current-border-pressed: var(
        --ve-button-current-status-border
      );
    }

    :host([status='success'][type='outline-filled']),
    :host([status='warning'][type='outline-filled']),
    :host([status='danger'][type='outline-filled']) {
      --ve-button-current-background-hover: var(
        --ve-button-current-status-surface-secondary
      );
      --ve-button-current-background-pressed: var(
        --ve-button-current-status-surface-secondary
      );
    }

    :host([status='success'][type='text']),
    :host([status='warning'][type='text']),
    :host([status='danger'][type='text']) {
      --ve-button-current-background-hover: var(
        --ve-button-current-status-surface-secondary
      );
      --ve-button-current-background-pressed: var(
        --ve-button-current-status-surface-secondary
      );
    }
  }
`,
	e`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    :host([loading]) {
      cursor: wait;
    }

    :host([long]) {
      display: flex;
      width: 100%;
    }

    .ve-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ve-button-gap);
      appearance: none;
      box-sizing: border-box;
      margin: 0;
      min-inline-size: fit-content;
      block-size: var(--ve-button-current-height);
      padding-block: 0;
      padding-inline: var(--ve-button-current-padding-inline);
      border-style: solid;
      border-width: var(--ve-button-current-border-width);
      border-color: var(--ve-button-current-border);
      border-radius: var(--ve-button-current-radius);
      background: var(--ve-button-current-background);
      color: var(--ve-button-current-text);
      font-family: var(--font-sans);
      font-size: var(--ve-button-current-font-size);
      font-weight: var(--ve-button-font-weight);
      line-height: 1;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;
      transition:
        background-color 160ms ease,
        border-color 160ms ease,
        color 160ms ease,
        transform 90ms ease-out,
        opacity 160ms ease,
        box-shadow 160ms ease;
    }

    :host([long]) .ve-btn {
      width: 100%;
    }

    .ve-btn--compact {
      inline-size: var(--ve-button-current-height);
      min-inline-size: var(--ve-button-current-height);
      padding-inline: 0;
    }

    :host([shape='circle']) .ve-btn {
      inline-size: var(--ve-button-current-height);
    }

    .ve-btn:focus-visible {
      outline: none;
      box-shadow: 0 0 0 var(--stroke-2)
        color-mix(in srgb, currentColor 24%, transparent);
    }

    :host(:not([disabled]):not([loading])) .ve-btn:hover {
      background: var(--ve-button-current-background-hover);
      border-color: var(--ve-button-current-border-hover);
      color: var(--ve-button-current-text-hover);
    }

    :host(:not([disabled]):not([loading])) .ve-btn:active {
      background: var(--ve-button-current-background-pressed);
      border-color: var(--ve-button-current-border-pressed);
      color: var(--ve-button-current-text-pressed);
      transform: var(--ve-button-press-transform);
    }

    :host([disabled]) .ve-btn {
      opacity: var(--ve-button-disabled-opacity);
      cursor: not-allowed;
      pointer-events: none;
    }

    :host([loading]) .ve-btn {
      cursor: wait;
      pointer-events: none;
    }

    .ve-btn-content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ve-button-gap);
    }

    .ve-btn-loading-icon {
      --ve-icon-size: var(--ve-button-loading-icon-size);

      animation: ve-button-spin 0.8s linear infinite;
      flex: none;
    }

    @keyframes ve-button-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-btn {
        transition: none;
      }

      .ve-btn-loading-icon {
        animation: none;
      }
    }

    @supports not (color: color-mix(in srgb, red, blue)) {
      .ve-btn:focus-visible {
        box-shadow: 0 0 0 var(--stroke-2) currentColor;
      }
    }
  `
];
function m(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function h(e) {
	var t = m(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function g(e) {
	if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (e === null ? "null" : typeof e));
	return e;
}
function ee(e, t, n) {
	typeof t == "symbol" && (t = t.description, t = t ? "[" + t + "]" : "");
	try {
		Object.defineProperty(e, "name", {
			configurable: !0,
			value: n ? n + " " + t : t
		});
	} catch {}
	return e;
}
function _(e, t, n, r, i, a) {
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
	function _(e, t, n, r, i, a, o, c, d, h, g) {
		function _(e) {
			if (!g(e)) throw TypeError("Attempted to access private element on non-instance");
		}
		var v = [].concat(t[0]), y = t[3], b = !o, x = i === 1, S = i === 3, C = i === 4, w = i === 2;
		function T(t, n, r) {
			return function(i, a) {
				return n && (a = i, i = e), r && r(i), desc[t].call(i, a);
			};
		}
		var E = {}, D = [], O = S ? "get" : C || x ? "set" : "value";
		if (!b && (d ? (h || x ? E = {
			get: ee(function() {
				return y(this);
			}, r, "get"),
			set: function(e) {
				t[4](this, e);
			}
		} : E[O] = y, h || ee(E[O], r, w ? "" : O)) : h || (E = Object.getOwnPropertyDescriptor(e, r)), !h && !d)) {
			if (f = u[+c][r], f && (f ^ i) !== 7) throw Error("Decorating two elements with the same name (" + E[O].name + ") is not supported yet");
			u[+c][r] = i < 3 ? 1 : i;
		}
		for (var k = e, A = v.length - 1; A >= 0; A -= n ? 2 : 1) {
			var j = m(v[A], "A decorator", "be", !0), M = n ? v[A - 1] : void 0, N = {}, P = {
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
				}).bind(null, N)
			};
			if (b) {
				f = j.call(M, k, P), N.v = 1, m(f, "class decorators", "return") && (k = f);
				continue;
			}
			if (P.static = c, P.private = d, f = P.access = { has: d ? g.bind() : function(e) {
				return r in e;
			} }, C || (f.get = d ? w ? function(e) {
				return _(e), E.value;
			} : T("get", 0, _) : function(e) {
				return e[r];
			}), !w && !S && (f.set = d ? T("set", 0, _) : function(e, t) {
				e[r] = t;
			}), k = j.call(M, x ? {
				get: E.get,
				set: E.set
			} : E[O], P), N.v = 1, x) {
				if (typeof k == "object" && k) (f = m(k.get, "accessor.get")) && (E.get = f), (f = m(k.set, "accessor.set")) && (E.set = f), (f = m(k.init, "accessor.init")) && D.unshift(f);
				else if (k !== void 0) throw TypeError("accessor decorators must return an object with get, set, or init properties or undefined");
			} else m(k, (h ? "field" : "method") + " decorators", "return") && (h ? D.unshift(k) : E[O] = k);
		}
		return i < 2 && o.push(p(D, c, 1), p(a, c, 0)), !h && !b && (d ? x ? o.splice(-1, 0, T("get", c), T("set", c)) : o.push(w ? E[O] : m.call.bind(E[O])) : s(e, r, E)), k;
	}
	function v() {
		var t = [], r, a, o = function(e) {
			e && t.push(p(e));
		}, s = function(o, s) {
			for (var c = 0; c < n.length; c++) {
				var l = n[c], u = l[1], d = 7 & u;
				if ((8 & u) == o && !d == s) {
					var f = l[2], p = !!l[3], m = 16 & u;
					_(o ? e : e.prototype, l, m, p ? "#" + f : h(f), d, d < 2 ? [] : o ? a ||= [] : r ||= [], t, !!o, p, s, o && p ? function(t) {
						return g(t) === e;
					} : i);
				}
			}
		};
		return s(8, 0), s(0, 0), s(8, 1), s(0, 1), o(r), o(a), t;
	}
	function y(e) {
		return s(e, o, {
			configurable: !0,
			enumerable: !0,
			value: l
		});
	}
	return a !== void 0 && (l = a[o]), l = c(l ?? null), f = v(), d || y(e), {
		e: f,
		get c() {
			var n = [];
			return d && [y(e = _(e, [t], r, e.name, 5, n)), p(n, 1)];
		}
	};
}
var v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, te, ne, $, re, ie = "ve-button", ae = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
], oe = /^[^\p{L}\p{N}\p{Script=Han}]{1,2}$/u;
v = c({
	type: String,
	reflect: !0,
	useDefault: !0
}), y = c({
	type: String,
	reflect: !0,
	useDefault: !0
}), b = c({
	type: String,
	reflect: !0,
	useDefault: !0
}), x = c({
	type: String,
	reflect: !0,
	useDefault: !0
}), S = c({
	type: Boolean,
	reflect: !0
}), C = c({
	type: Boolean,
	reflect: !0
}), w = c({
	type: Boolean,
	reflect: !0
}), T = c({ type: String }), E = c({ type: String }), D = d(".ve-btn"), O = d(".ve-btn-content"), k = d("slot"), A = r();
var se = class extends s {
	static {
		({e: [j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, te, ne, $, re]} = _(this, [], [
			[
				v,
				1,
				"type"
			],
			[
				y,
				1,
				"size"
			],
			[
				b,
				1,
				"shape"
			],
			[
				x,
				1,
				"status"
			],
			[
				S,
				1,
				"disabled"
			],
			[
				C,
				1,
				"loading"
			],
			[
				w,
				1,
				"long"
			],
			[
				T,
				1,
				"href"
			],
			[
				E,
				1,
				"target"
			],
			[
				D,
				1,
				"controlElement"
			],
			[
				O,
				1,
				"contentElement"
			],
			[
				k,
				1,
				"defaultSlot"
			],
			[
				A,
				1,
				"compact"
			]
		]));
	}
	static styles = p;
	static dependencies = { [o]: l };
	static get observedAttributes() {
		return [.../* @__PURE__ */ new Set([...super.observedAttributes, ...ae])];
	}
	#e = (() => {
		let e = j(this, "primary");
		return M(this), e;
	})();
	get type() {
		return this.#e;
	}
	set type(e) {
		this.#e = e;
	}
	#t = (() => {
		let e = N(this, "default");
		return P(this), e;
	})();
	get size() {
		return this.#t;
	}
	set size(e) {
		this.#t = e;
	}
	#n = (() => {
		let e = F(this, "default");
		return I(this), e;
	})();
	get shape() {
		return this.#n;
	}
	set shape(e) {
		this.#n = e;
	}
	#r = (() => {
		let e = L(this, "default");
		return R(this), e;
	})();
	get status() {
		return this.#r;
	}
	set status(e) {
		this.#r = e;
	}
	#i = (() => {
		let e = z(this, !1);
		return B(this), e;
	})();
	get disabled() {
		return this.#i;
	}
	set disabled(e) {
		this.#i = e;
	}
	#a = (() => {
		let e = V(this, !1);
		return H(this), e;
	})();
	get loading() {
		return this.#a;
	}
	set loading(e) {
		this.#a = e;
	}
	#o = (() => {
		let e = U(this, !1);
		return W(this), e;
	})();
	get long() {
		return this.#o;
	}
	set long(e) {
		this.#o = e;
	}
	#s = (() => {
		let e = G(this, "");
		return K(this), e;
	})();
	get href() {
		return this.#s;
	}
	set href(e) {
		this.#s = e;
	}
	#c = (() => {
		let e = q(this, "_self");
		return J(this), e;
	})();
	get target() {
		return this.#c;
	}
	set target(e) {
		this.#c = e;
	}
	#l = (() => {
		let e = Y(this, null);
		return X(this), e;
	})();
	get controlElement() {
		return this.#l;
	}
	set controlElement(e) {
		this.#l = e;
	}
	#u = (() => {
		let e = Z(this, null);
		return Q(this), e;
	})();
	get contentElement() {
		return this.#u;
	}
	set contentElement(e) {
		this.#u = e;
	}
	#d = (() => {
		let e = te(this, null);
		return ne(this), e;
	})();
	get defaultSlot() {
		return this.#d;
	}
	set defaultSlot(e) {
		this.#d = e;
	}
	#f = (() => {
		let e = $(this, !1);
		return re(this), e;
	})();
	get compact() {
		return this.#f;
	}
	set compact(e) {
		this.#f = e;
	}
	contentResizeObserver = null;
	observedContentElement = null;
	constructor() {
		super(), this.addEventListener("click", this.handleHostClick, { capture: !0 });
	}
	get isLinkMode() {
		return (this.href ?? "").trim().length > 0;
	}
	get isUnavailable() {
		return this.disabled || this.loading;
	}
	get controlAriaLabel() {
		return this.getAttribute("aria-label") ?? void 0;
	}
	get controlAriaLabelledby() {
		return this.getAttribute("aria-labelledby") ?? void 0;
	}
	get controlAriaDescribedby() {
		return this.getAttribute("aria-describedby") ?? void 0;
	}
	focus(e) {
		this.controlElement?.focus(e);
	}
	click() {
		this.isUnavailable || this.controlElement?.click();
	}
	firstUpdated(e) {
		super.firstUpdated(e), this.contentResizeObserver = new ResizeObserver(() => {
			this.syncCompactState();
		}), this.observeContentElement(), this.syncCompactState();
	}
	updated(e) {
		super.updated(e), this.observeContentElement(), this.syncCompactState();
	}
	disconnectedCallback() {
		this.contentResizeObserver?.disconnect(), this.observedContentElement = null, super.disconnectedCallback();
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), t !== n && ae.includes(e) && this.requestUpdate();
	}
	handleHostClick(e) {
		this.isUnavailable && (e.preventDefault(), e.stopImmediatePropagation());
	}
	handleClick(e) {
		this.isUnavailable && (e.preventDefault(), e.stopPropagation());
	}
	handleSlotChange() {
		this.syncCompactState();
	}
	observeContentElement() {
		this.contentResizeObserver && this.observedContentElement !== this.contentElement && (this.observedContentElement && this.contentResizeObserver.unobserve(this.observedContentElement), this.contentElement && this.contentResizeObserver.observe(this.contentElement), this.observedContentElement = this.contentElement);
	}
	syncCompactState() {
		this.compact = this.shouldRenderCompactSquare();
	}
	shouldRenderCompactSquare() {
		if (this.shape !== "default" || this.long || this.loading) return !1;
		let e = this.controlElement, t = this.contentElement;
		if (!e || !t || !this.hasCompactContent()) return !1;
		let n = t.getBoundingClientRect().width, r = e.getBoundingClientRect().height;
		return n > 0 && r > 0 && n <= r;
	}
	hasCompactContent() {
		let e = (this.defaultSlot?.assignedNodes({ flatten: !0 }) ?? []).filter((e) => e.nodeType === Node.TEXT_NODE ? (e.textContent?.trim().length ?? 0) > 0 : e.nodeType === Node.ELEMENT_NODE);
		return e.length > 0 && e.every((e) => this.isCompactContentNode(e));
	}
	isCompactContentNode(e) {
		if (e.nodeType === Node.TEXT_NODE) return this.isCompactText(e.textContent ?? "");
		if (e.nodeType !== Node.ELEMENT_NODE) return !1;
		let t = e, n = t.textContent?.trim() ?? "", r = t.tagName.toLowerCase(), i = r === "svg" || r === "img" || r.includes("icon");
		return t.getAttribute("aria-hidden") === "true" || t.getAttribute("role") === "presentation" || t.getAttribute("role"), i && n.length === 0 ? !0 : n.length !== 0 && this.isCompactText(n);
	}
	isCompactText(e) {
		return oe.test(e.trim());
	}
	renderContent() {
		return i`
      ${this.loading ? i`<ve-icon
            class="ve-btn-loading-icon"
            part="spinner"
            .definition=${f}
          ></ve-icon>` : a}
      <span class="ve-btn-content" part="content">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
    `;
	}
	render() {
		let e = this.compact ? "ve-btn ve-btn--compact" : "ve-btn";
		return this.isLinkMode ? i`
        <a
          class=${e}
          part="control"
          href=${t(this.isUnavailable ? void 0 : this.href)}
          target=${t(this.isUnavailable ? void 0 : this.target)}
          rel=${t(!this.isUnavailable && this.target === "_blank" ? "noreferrer noopener" : void 0)}
          aria-label=${t(this.controlAriaLabel)}
          aria-labelledby=${t(this.controlAriaLabelledby)}
          aria-describedby=${t(this.controlAriaDescribedby)}
          aria-disabled=${t(this.isUnavailable ? "true" : void 0)}
          aria-busy=${t(this.loading ? "true" : void 0)}
          tabindex=${t(this.isUnavailable ? "-1" : void 0)}
          @click=${this.handleClick}
        >
          ${this.renderContent()}
        </a>
      ` : i`
      <button
        class=${e}
        part="control"
        type="button"
        ?disabled=${this.isUnavailable}
        aria-label=${t(this.controlAriaLabel)}
        aria-labelledby=${t(this.controlAriaLabelledby)}
        aria-describedby=${t(this.controlAriaDescribedby)}
        aria-busy=${t(this.loading ? "true" : void 0)}
        @click=${this.handleClick}
      >
        ${this.renderContent()}
      </button>
    `;
	}
};
//#endregion
//#region node_modules/@ve-design/web/dist/ve-button.js
n(ie, se);
//#endregion
export { ie as VE_BUTTON_TAG, se as VeButtonElement };
