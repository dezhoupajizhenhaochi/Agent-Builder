import { _ as e, c as t, f as n, g as r, i, m as a, n as o, o as s, p as c, r as l, s as u } from "./20787-Deummg9m.mjs";
import { t as d } from "./query-BYu9q8lA.mjs";
import { n as f, t as p } from "./style-map-BqTvafk4.mjs";
import { t as m } from "./close-C-vMo1sY.mjs";
//#region node_modules/@ve-design/web/dist/ve-input.js
var h = [
	u,
	e`
  :host {
    --ve-input-font-family: var(--font-sans);
    --ve-input-font-weight: var(--font-weight-normal);
    --ve-input-line-height-default: var(--line-height-body);
    --ve-input-transition-duration: var(--motion-fast);
    --ve-input-transition-timing: var(--ease-standard);

    --ve-input-height-small: var(--height-small);
    --ve-input-height-default: var(--height-default);
    --ve-input-height-large: var(--height-large);

    --ve-input-font-size-small: var(--text-body-sm);
    --ve-input-font-size-default: var(--text-body);
    --ve-input-font-size-large: var(--text-body);

    --ve-input-padding-inline-small: var(--space-xxs);
    --ve-input-padding-inline-default: var(--space-xxs);
    --ve-input-padding-inline-large: var(--space-xxs);
    --ve-input-padding-block-small: var(--space-xxxs);
    --ve-input-padding-block-default: var(--space-xxxs);
    --ve-input-padding-block-large: var(--space-xxxs);

    --ve-input-radius: var(--radius-md);
    --ve-input-border-width: var(--stroke-weight-base);

    --ve-input-bg: var(--color-bg-base);
    --ve-input-bg-hover: var(--color-bg-base);
    --ve-input-bg-focus: var(--color-bg-base);

    --ve-input-border-color: var(--color-border-strong);
    --ve-input-border-color-hover: var(--color-border-interactive);
    --ve-input-border-color-focus: var(--color-border-interactive);
    --ve-input-shadow-focus-strong-color: rgb(
      from var(--color-border-interactive) r g b / 25%
    );
    --ve-input-shadow-focus-soft-color: rgb(
      from var(--color-border-interactive) r g b / 10%
    );
    --ve-input-shadow-focus:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-shadow-focus-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-shadow-focus-soft-color);
    --ve-input-focus-ring-color: var(--ve-input-shadow-focus-strong-color);
    --ve-input-focus-shadow-size: var(--stroke-weight-bold);

    --ve-input-status-error-bg: var(--color-bg-danger-secondary);
    --ve-input-status-error-bg-hover: color-mix(
      in srgb,
      var(--ve-input-status-error-bg) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-input-status-error-border: var(--color-border-danger);
    --ve-input-status-error-border-hover: var(--color-text-danger);
    --ve-input-status-error-border-focus: var(--color-text-danger);
    --ve-input-status-error-shadow-strong-color: rgb(
      from var(--color-text-danger) r g b / 25%
    );
    --ve-input-status-error-shadow-soft-color: rgb(
      from var(--color-text-danger) r g b / 10%
    );
    --ve-input-status-error-shadow-focus:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-error-shadow-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-error-shadow-soft-color);

    --ve-input-status-warning-bg: var(--color-bg-warning-secondary);
    --ve-input-status-warning-bg-hover: color-mix(
      in srgb,
      var(--ve-input-status-warning-bg) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-input-status-warning-border: var(--color-border-warning);
    --ve-input-status-warning-border-hover: var(--color-text-warning);
    --ve-input-status-warning-border-focus: var(--color-text-warning);
    --ve-input-status-warning-shadow-strong-color: rgb(
      from var(--color-text-warning) r g b / 25%
    );
    --ve-input-status-warning-shadow-soft-color: rgb(
      from var(--color-text-warning) r g b / 10%
    );
    --ve-input-status-warning-shadow-focus:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-warning-shadow-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-warning-shadow-soft-color);

    --ve-input-status-success-bg: var(--color-bg-success-secondary);
    --ve-input-status-success-bg-hover: color-mix(
      in srgb,
      var(--ve-input-status-success-bg) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-input-status-success-border: var(--color-border-success);
    --ve-input-status-success-border-hover: var(--color-text-success);
    --ve-input-status-success-border-focus: var(--color-text-success);
    --ve-input-status-success-shadow-strong-color: rgb(
      from var(--color-text-success) r g b / 25%
    );
    --ve-input-status-success-shadow-soft-color: rgb(
      from var(--color-text-success) r g b / 10%
    );
    --ve-input-status-success-shadow-focus:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-success-shadow-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-success-shadow-soft-color);

    --ve-input-disabled-bg: var(--color-bg-control);
    --ve-input-disabled-border-color: var(--color-border-default);
    --ve-input-disabled-text: var(--color-text-disable);
    --ve-input-disabled-opacity: var(--state-disabled-ratio);

    --ve-input-text-color: var(--color-text-primary);
    --ve-input-placeholder-color: var(--color-text-disable);

    --ve-input-prefix-color: var(--color-text-tertiary);
    --ve-input-suffix-color: var(--color-text-tertiary);
    --ve-input-affix-gap: var(--space-xxxs);

    --ve-input-icon-size: var(--text-caption);
    --ve-input-action-size: calc(var(--height-small) - var(--space-xxs));
    --ve-input-icon-color: var(--color-text-secondary);
    --ve-input-icon-hover-bg: color-mix(
      in srgb,
      var(--ve-input-bg) var(--state-pressed-subtle-ratio),
      var(--state-pressed-subtle-mix)
    );

    --ve-input-word-limit-color: var(--color-text-tertiary);
    --ve-input-word-limit-error-color: var(--color-text-danger);
    --ve-input-word-limit-font-size: var(--text-caption);

    --ve-input-textarea-padding-inline: var(--space-xs);
    --ve-input-textarea-padding-block: var(--space-xxxs);
    --ve-input-textarea-word-limit-offset-inline: var(--space-xs);
    --ve-input-textarea-word-limit-offset-block: var(--space-xxs);
    --ve-input-textarea-clear-offset-inline: var(--space-xs);
    --ve-input-textarea-clear-offset-block: var(--space-xs);
    --ve-input-current-height: var(--ve-input-height-default);
    --ve-input-current-font-size: var(--ve-input-font-size-default);
    --ve-input-current-line-height: var(--ve-input-line-height-default);
    --ve-input-current-padding-inline: var(--ve-input-padding-inline-default);
    --ve-input-current-padding-block: var(--ve-input-padding-block-default);
  }

  :host([size='small']) {
    --ve-input-current-height: var(--ve-input-height-small);
    --ve-input-current-font-size: var(--ve-input-font-size-small);
    --ve-input-current-padding-inline: var(--ve-input-padding-inline-small);
    --ve-input-current-padding-block: var(--ve-input-padding-block-small);
  }

  :host([size='large']) {
    --ve-input-current-height: var(--ve-input-height-large);
    --ve-input-current-font-size: var(--ve-input-font-size-large);
    --ve-input-current-padding-inline: var(--ve-input-padding-inline-large);
    --ve-input-current-padding-block: var(--ve-input-padding-block-large);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-input-status-error-bg-hover: var(--ve-input-status-error-bg);
      --ve-input-status-warning-bg-hover: var(--ve-input-status-warning-bg);
      --ve-input-status-success-bg-hover: var(--ve-input-status-success-bg);
      --ve-input-icon-hover-bg: var(--ve-input-bg);
    }
  }
`,
	e`
    :host {
      display: inline-flex;
      inline-size: 100%;
      vertical-align: top;
      box-sizing: border-box;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-input-wrapper {
      position: relative;
      display: inline-flex;
      align-items: center;
      inline-size: 100%;
      min-inline-size: 0;
      block-size: var(--ve-input-current-height);
      box-sizing: border-box;
      padding-inline: var(--ve-input-current-padding-inline);
      border: var(--ve-input-border-width) solid var(--ve-input-border-color);
      border-radius: var(--ve-input-radius);
      background: var(--ve-input-bg);
      color: var(--ve-input-text-color);
      font-family: var(--ve-input-font-family);
      font-size: var(--ve-input-current-font-size);
      font-weight: var(--ve-input-font-weight);
      line-height: var(--ve-input-current-line-height);
      transition:
        border-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        background-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        box-shadow var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing);
    }

    .ve-input-wrapper--auto-width {
      inline-size: auto;
      max-inline-size: 100%;
      overflow: hidden;
    }

    .ve-input-wrapper:not(.ve-input-wrapper--disabled):hover {
      border-color: var(--ve-input-border-color-hover);
      background: var(--ve-input-bg-hover);
    }

    .ve-input-wrapper:not(.ve-input-wrapper--disabled):focus-within {
      border-color: var(--ve-input-border-color-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-shadow-focus);
    }

    .ve-input-wrapper--error {
      background: var(--ve-input-status-error-bg);
      border-color: var(--ve-input-status-error-border);
    }

    .ve-input-wrapper--error:not(.ve-input-wrapper--disabled):hover {
      background: var(--ve-input-status-error-bg-hover);
      border-color: var(--ve-input-status-error-border-hover);
    }

    .ve-input-wrapper--error:not(.ve-input-wrapper--disabled):focus-within {
      border-color: var(--ve-input-status-error-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-error-shadow-focus);
    }

    .ve-input-wrapper--warning {
      background: var(--ve-input-status-warning-bg);
      border-color: var(--ve-input-status-warning-border);
    }

    .ve-input-wrapper--warning:not(.ve-input-wrapper--disabled):hover {
      background: var(--ve-input-status-warning-bg-hover);
      border-color: var(--ve-input-status-warning-border-hover);
    }

    .ve-input-wrapper--warning:not(.ve-input-wrapper--disabled):focus-within {
      border-color: var(--ve-input-status-warning-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-warning-shadow-focus);
    }

    .ve-input-wrapper--success {
      background: var(--ve-input-status-success-bg);
      border-color: var(--ve-input-status-success-border);
    }

    .ve-input-wrapper--success:not(.ve-input-wrapper--disabled):hover {
      background: var(--ve-input-status-success-bg-hover);
      border-color: var(--ve-input-status-success-border-hover);
    }

    .ve-input-wrapper--success:not(.ve-input-wrapper--disabled):focus-within {
      border-color: var(--ve-input-status-success-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-success-shadow-focus);
    }

    .ve-input-wrapper--disabled,
    .ve-input-wrapper--disabled:hover,
    .ve-input-wrapper--disabled:focus-within {
      background: var(--ve-input-disabled-bg);
      border-color: var(--ve-input-disabled-border-color);
      color: var(--ve-input-disabled-text);
      box-shadow: none;
      cursor: not-allowed;
    }

    .ve-input-control {
      inline-size: 100%;
      min-inline-size: 0;
      border: none;
      outline: none;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: inherit;
      padding: 0;
      margin: 0;
      flex: 1 1 auto;
      box-sizing: border-box;
      appearance: none;
      -webkit-tap-highlight-color: transparent;
    }

    .ve-input-control::placeholder {
      color: var(--ve-input-placeholder-color);
    }

    .ve-input-control:disabled {
      color: var(--ve-input-disabled-text);
      -webkit-text-fill-color: var(--ve-input-disabled-text);
      cursor: not-allowed;
    }

    .ve-input-wrapper--disabled .ve-input-control::placeholder {
      color: var(--ve-input-disabled-text);
    }

    .ve-input-field {
      padding-block: var(--ve-input-current-padding-block);
      padding-inline: 0;
      line-height: var(--ve-input-current-line-height);
      text-overflow: ellipsis;
    }

    .ve-input-wrapper--auto-width .ve-input-field {
      flex: 1 1 auto;
      max-inline-size: 100%;
    }

    .ve-input-prefix,
    .ve-input-suffix {
      display: inline-flex;
      align-items: center;
      block-size: 100%;
      white-space: nowrap;
      color: var(--ve-input-prefix-color);
      user-select: none;
      flex: none;
    }

    .ve-input-wrapper--has-prefix > .ve-input-field {
      padding-inline-start: var(--ve-input-affix-gap);
    }

    .ve-input-suffix {
      color: var(--ve-input-suffix-color);
    }

    .ve-input-word-limit {
      font-size: var(--ve-input-word-limit-font-size);
      color: var(--ve-input-word-limit-color);
      font-variant-numeric: tabular-nums;
      padding-inline-start: var(--space-xxs);
    }

    .ve-input-word-limit--error {
      color: var(--ve-input-word-limit-error-color);
    }

    .ve-input-clear {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-input-action-size);
      block-size: var(--ve-input-action-size);
      border: none;
      border-radius: var(--radius-full);
      background: transparent;
      color: var(--ve-input-icon-color);
      cursor: pointer;
      padding: 0;
      margin-inline-start: 0;
      flex: none;
      visibility: hidden;
      transition:
        color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        background-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing);
    }

    .ve-input-wrapper:hover .ve-input-clear,
    .ve-input-wrapper:focus-within .ve-input-clear {
      visibility: visible;
    }

    .ve-input-clear:hover {
      background: var(--ve-input-icon-hover-bg);
    }

    .ve-input-clear:focus-visible {
      outline: none;
      box-shadow: 0 0 0 var(--ve-input-focus-shadow-size)
        var(--ve-input-focus-ring-color);
    }

    .ve-input-clear ve-icon {
      --ve-icon-size: var(--ve-input-icon-size);

      display: inline-flex;
      flex: none;
    }

    .ve-input-mirror {
      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;
      white-space: pre;
      visibility: hidden;
      pointer-events: none;
      user-select: none;
      font: inherit;
      letter-spacing: inherit;
      text-transform: inherit;
      text-indent: inherit;
    }

    .ve-textarea-wrapper {
      position: relative;
      display: inline-block;
      inline-size: 100%;
      vertical-align: top;
      box-sizing: border-box;
    }

    .ve-textarea-wrapper--word-limit-outside {
      display: inline-flex;
      flex-direction: column;
      align-items: stretch;
    }

    .ve-input-textarea {
      display: block;
      inline-size: 100%;
      min-block-size: var(--ve-input-current-height);
      box-sizing: border-box;
      border: var(--ve-input-border-width) solid var(--ve-input-border-color);
      border-radius: var(--ve-input-radius);
      padding: var(--ve-input-textarea-padding-block)
        var(--ve-input-textarea-padding-inline);
      background: var(--ve-input-bg);
      color: var(--ve-input-text-color);
      font-family: var(--ve-input-font-family);
      font-size: var(--ve-input-current-font-size);
      font-weight: var(--ve-input-font-weight);
      line-height: var(--ve-input-line-height-default);
      outline: none;
      resize: vertical;
      transition:
        border-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        background-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        box-shadow var(--ve-input-transition-duration)
          var(--ve-input-transition-timing);
    }

    .ve-input-textarea::placeholder {
      color: var(--ve-input-placeholder-color);
    }

    .ve-input-textarea:not(:disabled):hover {
      border-color: var(--ve-input-border-color-hover);
      background: var(--ve-input-bg-hover);
    }

    .ve-input-textarea:not(:disabled):focus {
      border-color: var(--ve-input-border-color-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-shadow-focus);
    }

    .ve-textarea-wrapper--error .ve-input-textarea {
      background: var(--ve-input-status-error-bg);
      border-color: var(--ve-input-status-error-border);
    }

    .ve-textarea-wrapper--error .ve-input-textarea:not(:disabled):hover {
      background: var(--ve-input-status-error-bg-hover);
      border-color: var(--ve-input-status-error-border-hover);
    }

    .ve-textarea-wrapper--error .ve-input-textarea:not(:disabled):focus {
      border-color: var(--ve-input-status-error-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-error-shadow-focus);
    }

    .ve-textarea-wrapper--warning .ve-input-textarea {
      background: var(--ve-input-status-warning-bg);
      border-color: var(--ve-input-status-warning-border);
    }

    .ve-textarea-wrapper--warning .ve-input-textarea:not(:disabled):hover {
      background: var(--ve-input-status-warning-bg-hover);
      border-color: var(--ve-input-status-warning-border-hover);
    }

    .ve-textarea-wrapper--warning .ve-input-textarea:not(:disabled):focus {
      border-color: var(--ve-input-status-warning-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-warning-shadow-focus);
    }

    .ve-textarea-wrapper--success .ve-input-textarea {
      background: var(--ve-input-status-success-bg);
      border-color: var(--ve-input-status-success-border);
    }

    .ve-textarea-wrapper--success .ve-input-textarea:not(:disabled):hover {
      background: var(--ve-input-status-success-bg-hover);
      border-color: var(--ve-input-status-success-border-hover);
    }

    .ve-textarea-wrapper--success .ve-input-textarea:not(:disabled):focus {
      border-color: var(--ve-input-status-success-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-success-shadow-focus);
    }

    .ve-textarea-wrapper--disabled .ve-input-textarea,
    .ve-textarea-wrapper--disabled .ve-input-textarea:hover,
    .ve-textarea-wrapper--disabled .ve-input-textarea:focus {
      background: var(--ve-input-disabled-bg);
      border-color: var(--ve-input-disabled-border-color);
      color: var(--ve-input-disabled-text);
      box-shadow: none;
      cursor: not-allowed;
      resize: none;
    }

    .ve-textarea-wrapper--disabled .ve-input-textarea::placeholder {
      color: var(--ve-input-disabled-text);
    }

    .ve-textarea-wrapper--clearable .ve-input-textarea {
      padding-inline-end: calc(
        var(--ve-input-textarea-padding-inline) + var(--ve-input-action-size) +
          var(--space-xxs)
      );
    }

    .ve-input-clear--textarea {
      position: absolute;
      inset-inline-end: var(--ve-input-textarea-clear-offset-inline);
      inset-block-start: var(--ve-input-textarea-clear-offset-block);
      margin-inline-start: 0;
      display: none;
      visibility: visible;
    }

    .ve-textarea-wrapper:hover .ve-input-clear--textarea,
    .ve-textarea-wrapper:focus-within .ve-input-clear--textarea {
      display: inline-flex;
    }

    .ve-textarea-word-limit {
      position: absolute;
      inset-inline-end: var(--ve-input-textarea-word-limit-offset-inline);
      inset-block-end: var(--ve-input-textarea-word-limit-offset-block);
      font-size: var(--ve-input-word-limit-font-size);
      line-height: var(--ve-input-line-height-default);
      color: var(--ve-input-word-limit-color);
      font-variant-numeric: tabular-nums;
      user-select: none;
      white-space: nowrap;
    }

    .ve-textarea-wrapper--clearable .ve-textarea-word-limit {
      inset-inline-end: calc(
        var(--ve-input-textarea-word-limit-offset-inline) +
          var(--ve-input-action-size) + var(--space-xxs)
      );
    }

    .ve-textarea-word-limit--outside {
      position: static;
      align-self: flex-end;
      margin-block-start: var(--space-xxxs);
    }

    .ve-textarea-word-limit--error {
      color: var(--ve-input-word-limit-error-color);
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-input-wrapper,
      .ve-input-textarea,
      .ve-input-clear {
        transition: none;
      }
    }
  `
];
function g(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function _(e) {
	var t = g(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function v(e) {
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
	function g() {
		var t = [], r, a, o = function(e) {
			e && t.push(p(e));
		}, s = function(o, s) {
			for (var c = 0; c < n.length; c++) {
				var l = n[c], u = l[1], d = 7 & u;
				if ((8 & u) == o && !d == s) {
					var f = l[2], p = !!l[3], m = 16 & u;
					h(o ? e : e.prototype, l, m, p ? "#" + f : _(f), d, d < 2 ? [] : o ? a ||= [] : r ||= [], t, !!o, p, s, o && p ? function(t) {
						return v(t) === e;
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
	return a !== void 0 && (l = a[o]), l = c(l ?? null), f = g(), d || y(e), {
		e: f,
		get c() {
			var n = [];
			return d && [y(e = h(e, [t], r, e.name, 5, n)), p(n, 1)];
		}
	};
}
var b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, te, ne, re, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, ie, ae, oe, se, Z, ce, le, ue, de, fe, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee = "ve-input", De = [
	"aria-label",
	"aria-labelledby",
	"aria-describedby"
], Oe = "Clear";
function Q(e) {
	return typeof e == "object" && !!e;
}
function ke(e) {
	return e ? e.assignedNodes({ flatten: !0 }).some(Ae) : !1;
}
function Ae(e) {
	return e.nodeType === Node.ELEMENT_NODE || e.nodeType === Node.TEXT_NODE && !!e.textContent?.trim().length;
}
function $(e) {
	if (!(typeof e != "number" || !Number.isFinite(e) || e <= 0)) return Math.floor(e);
}
function je(e) {
	if (e === void 0) return;
	if (typeof e == "number") return Number.isFinite(e) ? `${e}px` : void 0;
	let t = e.trim();
	if (t) return /^-?\d+(\.\d+)?$/.test(t) ? `${t}px` : t;
}
function Me(e, t) {
	let n = Array.from(e);
	return n.length <= t ? e : n.slice(0, t).join("");
}
function Ne(e) {
	return Array.from(e).length;
}
b = c({ type: String }), x = c({
	type: String,
	attribute: "default-value"
}), S = c({
	type: String,
	reflect: !0,
	useDefault: !0
}), C = c({ type: String }), w = c({
	type: String,
	reflect: !0,
	useDefault: !0
}), T = c({
	type: String,
	reflect: !0,
	useDefault: !0
}), E = c({
	type: Boolean,
	reflect: !0
}), D = c({
	type: Boolean,
	reflect: !0
}), O = c({
	attribute: "max-length",
	converter: {
		fromAttribute(e) {
			if (e === null) return;
			let t = e.trim();
			if (t) {
				try {
					let e = JSON.parse(t);
					if (typeof e == "number") return $(e);
					if (Q(e)) {
						let t = $(e.length);
						return t ? {
							length: t,
							errorOnly: !0 === e.errorOnly
						} : void 0;
					}
				} catch {}
				return $(Number(t));
			}
		},
		toAttribute(e) {
			return e === void 0 ? null : typeof e == "number" ? String(e) : JSON.stringify(e);
		}
	}
}), k = c({
	type: String,
	attribute: "word-limit",
	reflect: !0,
	useDefault: !0
}), A = c({
	type: Number,
	reflect: !0,
	useDefault: !0
}), j = c({
	attribute: "auto-size",
	converter: {
		fromAttribute(e) {
			if (e === null) return !1;
			let t = e.trim();
			if (!t || t === "true") return !0;
			if (t === "false") return !1;
			try {
				let e = JSON.parse(t);
				if (typeof e == "boolean") return e;
				if (Q(e)) {
					let t = $(e.minRows), n = $(e.maxRows);
					return {
						...t === void 0 ? {} : { minRows: t },
						...n === void 0 ? {} : { maxRows: n }
					};
				}
			} catch {}
			return !0;
		},
		toAttribute(e) {
			return !1 === e ? null : !0 === e ? "" : JSON.stringify(e);
		}
	}
}), M = c({
	attribute: "auto-width",
	converter: {
		fromAttribute(e) {
			if (e === null) return !1;
			let t = e.trim();
			if (!t || t === "true") return !0;
			if (t === "false") return !1;
			try {
				let e = JSON.parse(t);
				if (typeof e == "boolean") return e;
				if (Q(e)) {
					let t = typeof e.minWidth == "number" || typeof e.minWidth == "string" ? e.minWidth : void 0, n = typeof e.maxWidth == "number" || typeof e.maxWidth == "string" ? e.maxWidth : void 0;
					return {
						...t === void 0 ? {} : { minWidth: t },
						...n === void 0 ? {} : { maxWidth: n }
					};
				}
			} catch {}
			return !0;
		},
		toAttribute(e) {
			return !1 === e ? null : !0 === e ? "" : JSON.stringify(e);
		}
	}
}), N = d(".ve-input-control"), P = d(".ve-input-mirror"), te = d("slot[name=\"prefix\"]"), ne = d("slot[name=\"suffix\"]"), re = n(), F = n();
var Pe = class extends s {
	static {
		({e: [I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, ie, ae, oe, se, Z, ce, le, ue, de, fe, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te]} = y(this, [], [
			[
				b,
				1,
				"value"
			],
			[
				x,
				1,
				"defaultValue"
			],
			[
				S,
				1,
				"type"
			],
			[
				C,
				1,
				"placeholder"
			],
			[
				w,
				1,
				"size"
			],
			[
				T,
				1,
				"status"
			],
			[
				E,
				1,
				"disabled"
			],
			[
				D,
				1,
				"clearable"
			],
			[
				O,
				1,
				"maxLength"
			],
			[
				k,
				1,
				"wordLimit"
			],
			[
				A,
				1,
				"rows"
			],
			[
				j,
				1,
				"autoSize"
			],
			[
				M,
				1,
				"autoWidth"
			],
			[
				N,
				1,
				"controlElement"
			],
			[
				P,
				1,
				"mirrorElement"
			],
			[
				te,
				1,
				"prefixSlotElement"
			],
			[
				ne,
				1,
				"suffixSlotElement"
			],
			[
				re,
				1,
				"hasPrefixSlot"
			],
			[
				F,
				1,
				"hasSuffixSlot"
			]
		]));
	}
	static styles = h;
	static dependencies = { [o]: l };
	static get observedAttributes() {
		return [.../* @__PURE__ */ new Set([...super.observedAttributes, ...De])];
	}
	#e = (() => {
		let e = I(this, "");
		return L(this), e;
	})();
	get value() {
		return this.#e;
	}
	set value(e) {
		this.#e = e;
	}
	#t = (() => {
		let e = R(this, "");
		return z(this), e;
	})();
	get defaultValue() {
		return this.#t;
	}
	set defaultValue(e) {
		this.#t = e;
	}
	#n = (() => {
		let e = B(this, "text");
		return V(this), e;
	})();
	get type() {
		return this.#n;
	}
	set type(e) {
		this.#n = e;
	}
	#r = (() => {
		let e = H(this, "");
		return U(this), e;
	})();
	get placeholder() {
		return this.#r;
	}
	set placeholder(e) {
		this.#r = e;
	}
	#i = (() => {
		let e = W(this, "default");
		return G(this), e;
	})();
	get size() {
		return this.#i;
	}
	set size(e) {
		this.#i = e;
	}
	#a = (() => {
		let e = K(this, "default");
		return q(this), e;
	})();
	get status() {
		return this.#a;
	}
	set status(e) {
		this.#a = e;
	}
	#o = (() => {
		let e = J(this, !1);
		return Y(this), e;
	})();
	get disabled() {
		return this.#o;
	}
	set disabled(e) {
		this.#o = e;
	}
	#s = (() => {
		let e = X(this, !1);
		return ie(this), e;
	})();
	get clearable() {
		return this.#s;
	}
	set clearable(e) {
		this.#s = e;
	}
	#c = (() => {
		let e = ae(this, void 0);
		return oe(this), e;
	})();
	get maxLength() {
		return this.#c;
	}
	set maxLength(e) {
		this.#c = e;
	}
	#l = (() => {
		let e = se(this, "hidden");
		return Z(this), e;
	})();
	get wordLimit() {
		return this.#l;
	}
	set wordLimit(e) {
		this.#l = e;
	}
	#u = (() => {
		let e = ce(this, 2);
		return le(this), e;
	})();
	get rows() {
		return this.#u;
	}
	set rows(e) {
		this.#u = e;
	}
	#d = (() => {
		let e = ue(this, !1);
		return de(this), e;
	})();
	get autoSize() {
		return this.#d;
	}
	set autoSize(e) {
		this.#d = e;
	}
	#f = (() => {
		let e = fe(this, !1);
		return pe(this), e;
	})();
	get autoWidth() {
		return this.#f;
	}
	set autoWidth(e) {
		this.#f = e;
	}
	#p = (() => {
		let e = me(this, null);
		return he(this), e;
	})();
	get controlElement() {
		return this.#p;
	}
	set controlElement(e) {
		this.#p = e;
	}
	#m = (() => {
		let e = ge(this, null);
		return _e(this), e;
	})();
	get mirrorElement() {
		return this.#m;
	}
	set mirrorElement(e) {
		this.#m = e;
	}
	#h = (() => {
		let e = ve(this, null);
		return ye(this), e;
	})();
	get prefixSlotElement() {
		return this.#h;
	}
	set prefixSlotElement(e) {
		this.#h = e;
	}
	#g = (() => {
		let e = be(this, null);
		return xe(this), e;
	})();
	get suffixSlotElement() {
		return this.#g;
	}
	set suffixSlotElement(e) {
		this.#g = e;
	}
	#_ = (() => {
		let e = Se(this, !1);
		return Ce(this), e;
	})();
	get hasPrefixSlot() {
		return this.#_;
	}
	set hasPrefixSlot(e) {
		this.#_ = e;
	}
	#v = (() => {
		let e = we(this, !1);
		return Te(this), e;
	})();
	get hasSuffixSlot() {
		return this.#v;
	}
	set hasSuffixSlot(e) {
		this.#v = e;
	}
	autoWidthFrame = 0;
	textareaAutoSizeFrame = 0;
	cachedAutoWidthFontSignature = "";
	lightDomObserver = null;
	hasInitializedDefaultValue = !1;
	lastCommittedValue = "";
	isComposing = !1;
	lastWordCountValue = "";
	lastWordCount = 0;
	get controlAriaLabel() {
		return this.getAttribute("aria-label") ?? void 0;
	}
	get controlAriaLabelledby() {
		return this.getAttribute("aria-labelledby") ?? void 0;
	}
	get controlAriaDescribedby() {
		return this.getAttribute("aria-describedby") ?? void 0;
	}
	get normalizedSize() {
		return this.size === "small" || this.size === "large" ? this.size : "default";
	}
	get isTextarea() {
		return this.type === "textarea";
	}
	get resolvedMaxLengthConfig() {
		if (typeof this.maxLength == "number") {
			let e = $(this.maxLength);
			return e ? {
				length: e,
				errorOnly: !1
			} : void 0;
		}
		if (Q(this.maxLength)) {
			let e = $(this.maxLength.length);
			return e ? {
				length: e,
				errorOnly: !0 === this.maxLength.errorOnly
			} : void 0;
		}
	}
	get nativeMaxLength() {
		let e = this.resolvedMaxLengthConfig;
		if (!(!e || e.errorOnly)) return e.length;
	}
	get wordCount() {
		if (this.value === this.lastWordCountValue) return this.lastWordCount;
		let e = Ne(this.value);
		return this.lastWordCountValue = this.value, this.lastWordCount = e, e;
	}
	get hasLengthError() {
		let e = this.resolvedMaxLengthConfig;
		return !e || !e.errorOnly ? !1 : this.wordCount > e.length;
	}
	get mergedStatus() {
		return this.hasLengthError ? "error" : this.status === "error" || this.status === "warning" || this.status === "success" ? this.status : "default";
	}
	get hasPrefixContent() {
		return this.hasPrefixSlot;
	}
	get hasSuffixContent() {
		return !this.shouldShowWordLimitInInput && this.hasSuffixSlot;
	}
	get resolvedWordLimitMode() {
		return this.resolvedMaxLengthConfig ? this.isTextarea ? this.wordLimit : this.wordLimit === "hidden" ? "hidden" : "inside" : "hidden";
	}
	get shouldShowWordLimitInInput() {
		return !this.isTextarea && this.resolvedWordLimitMode === "inside";
	}
	get shouldShowWordLimitInsideTextarea() {
		return this.isTextarea && this.resolvedWordLimitMode === "inside";
	}
	get shouldShowWordLimitOutsideTextarea() {
		return this.isTextarea && this.resolvedWordLimitMode === "outside";
	}
	get resolvedWordLimitText() {
		let e = this.resolvedMaxLengthConfig?.length;
		return e ? `${this.wordCount}/${e}` : "";
	}
	get shouldShowClearButton() {
		return this.clearable && !this.disabled && this.value.length > 0;
	}
	get resolvedRows() {
		return !Number.isFinite(this.rows) || this.rows <= 0 ? 2 : Math.floor(this.rows);
	}
	get resolvedAutoWidthConfig() {
		return !this.autoWidth || this.isTextarea ? null : !0 === this.autoWidth ? {
			minWidth: 0,
			maxWidth: "100%"
		} : {
			minWidth: this.autoWidth.minWidth ?? 0,
			maxWidth: this.autoWidth.maxWidth ?? "100%"
		};
	}
	get nativeAriaInvalid() {
		return this.mergedStatus === "error" ? "true" : void 0;
	}
	focus(e) {
		this.controlElement?.focus(e);
	}
	blur() {
		this.controlElement?.blur();
	}
	connectedCallback() {
		super.connectedCallback(), this.lightDomObserver = new MutationObserver(() => {
			this.syncSlotState();
		}), this.lightDomObserver.observe(this, {
			childList: !0,
			subtree: !0,
			characterData: !0,
			attributes: !0,
			attributeFilter: ["slot"]
		}), this.hasInitializedDefaultValue ||= (!this.hasAttribute("value") && this.value.length === 0 && this.defaultValue && (this.value = this.applyMaxLengthConstraint(this.defaultValue)), !0), this.lastCommittedValue = this.value;
	}
	firstUpdated(e) {
		super.firstUpdated(e), this.syncSlotState(), this.syncControlValue(), this.scheduleAutoWidthUpdate(), this.scheduleTextareaAutoSizeUpdate();
	}
	updated(e) {
		if (super.updated(e), e.has("value") || e.has("maxLength")) {
			let e = this.applyMaxLengthConstraint(this.value);
			if (e !== this.value) {
				this.value = e;
				return;
			}
		}
		e.has("value") && this.syncControlValue(), (e.has("value") || e.has("placeholder") || e.has("autoWidth") || e.has("size") || e.has("type")) && this.scheduleAutoWidthUpdate(), (e.has("value") || e.has("autoSize") || e.has("rows") || e.has("type") || e.has("disabled")) && this.scheduleTextareaAutoSizeUpdate();
	}
	disconnectedCallback() {
		if (this.lightDomObserver?.disconnect(), this.lightDomObserver = null, "u" < typeof window) return void super.disconnectedCallback();
		this.autoWidthFrame &&= (window.cancelAnimationFrame(this.autoWidthFrame), 0), this.textareaAutoSizeFrame &&= (window.cancelAnimationFrame(this.textareaAutoSizeFrame), 0), super.disconnectedCallback();
	}
	attributeChangedCallback(e, t, n) {
		super.attributeChangedCallback(e, t, n), t !== n && De.includes(e) && this.requestUpdate();
	}
	applyMaxLengthConstraint(e) {
		let t = this.nativeMaxLength;
		return t ? Me(e, t) : e;
	}
	syncControlValue() {
		this.controlElement && this.controlElement.value !== this.value && (this.controlElement.value = this.value);
	}
	syncSlotState() {
		this.hasPrefixSlot = this.hasNamedSlotContent("prefix", this.prefixSlotElement), this.hasSuffixSlot = this.hasNamedSlotContent("suffix", this.suffixSlotElement);
	}
	hasNamedSlotContent(e, t) {
		return ke(t) ? !0 : Array.from(this.childNodes).some((t) => t instanceof HTMLElement && t.slot === e && Ae(t));
	}
	scheduleTextareaAutoSizeUpdate() {
		"u" < typeof window || (this.textareaAutoSizeFrame && window.cancelAnimationFrame(this.textareaAutoSizeFrame), this.textareaAutoSizeFrame = window.requestAnimationFrame(() => {
			this.textareaAutoSizeFrame = 0, this.updateTextareaAutoSize();
		}));
	}
	scheduleAutoWidthUpdate() {
		"u" < typeof window || (this.autoWidthFrame && window.cancelAnimationFrame(this.autoWidthFrame), this.autoWidthFrame = window.requestAnimationFrame(() => {
			this.autoWidthFrame = 0, this.updateAutoWidth();
		}));
	}
	updateTextareaAutoSize() {
		if (!this.isTextarea || "u" < typeof window || !(this.controlElement instanceof HTMLTextAreaElement)) return;
		let e = this.controlElement;
		if (!this.autoSize) {
			e.style.removeProperty("overflow-y"), e.style.removeProperty("height");
			return;
		}
		e.style.height = "auto";
		let t = window.getComputedStyle(e), n = Number.parseFloat(t.fontSize) || 14, r = Number.parseFloat(t.lineHeight), i = Number.isFinite(r) ? r : 1.5 * n, a = Number.parseFloat(t.paddingTop) || 0, o = Number.parseFloat(t.paddingBottom) || 0, s = Number.parseFloat(t.borderTopWidth) || 0, c = Number.parseFloat(t.borderBottomWidth) || 0, l = a + o + s + c, u = !0 === this.autoSize ? void 0 : this.autoSize, d = $(u?.minRows), f = $(u?.maxRows), p = d ? d * i + l : void 0, m = f ? f * i + l : void 0, h = e.scrollHeight;
		p !== void 0 && (h = Math.max(h, p));
		let g = "hidden";
		m !== void 0 && h > m && (h = m, g = "auto"), e.style.height = `${h}px`, e.style.overflowY = g;
	}
	updateAutoWidth() {
		if (!this.resolvedAutoWidthConfig || "u" < typeof window || this.isTextarea) {
			this.controlElement instanceof HTMLInputElement && (this.controlElement.style.removeProperty("width"), this.controlElement.style.removeProperty("min-width"), this.controlElement.style.removeProperty("max-width"));
			return;
		}
		if (!(this.controlElement instanceof HTMLInputElement) || !this.mirrorElement) return;
		let e = this.controlElement, t = this.mirrorElement, n = window.getComputedStyle(e), r = [
			n.font,
			n.letterSpacing,
			n.textIndent,
			n.textTransform
		].join("|");
		r !== this.cachedAutoWidthFontSignature && (this.cachedAutoWidthFontSignature = r, t.style.font = n.font, t.style.letterSpacing = n.letterSpacing, t.style.textIndent = n.textIndent, t.style.textTransform = n.textTransform), t.textContent = this.value || this.placeholder || "\xA0";
		let i = Math.ceil(t.getBoundingClientRect().width + 2);
		e.style.width = `${i}px`, e.style.minWidth = "0", e.style.maxWidth = "100%";
	}
	dispatchInputEvent(e) {
		this.dispatchEvent(new CustomEvent("ve-input", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	dispatchChangeEvent(e) {
		this.dispatchEvent(new CustomEvent("ve-change", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	handleInput(e) {
		let t = e.target;
		if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
		e.stopPropagation();
		let n = e.isComposing || this.isComposing ? t.value : this.applyMaxLengthConstraint(t.value);
		t.value !== n && (t.value = n);
		let r = this.value;
		this.value = n, r !== n && this.dispatchInputEvent({
			value: n,
			oldValue: r,
			source: "input",
			sourceEvent: e
		});
	}
	handleChange(e) {
		let t = e.target;
		if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
		e.stopPropagation();
		let n = this.applyMaxLengthConstraint(t.value);
		t.value !== n && (t.value = n), this.value = n, this.lastCommittedValue !== n && (this.dispatchChangeEvent({
			value: n,
			oldValue: this.lastCommittedValue,
			source: "input",
			sourceEvent: e
		}), this.lastCommittedValue = n);
	}
	handleClearClick(e) {
		e.stopPropagation();
		let t = this.value;
		this.value = "", this.syncControlValue(), t !== "" && this.dispatchInputEvent({
			value: "",
			oldValue: t,
			source: "clear",
			sourceEvent: e
		}), this.lastCommittedValue !== "" && (this.dispatchChangeEvent({
			value: "",
			oldValue: this.lastCommittedValue,
			source: "clear",
			sourceEvent: e
		}), this.lastCommittedValue = ""), this.controlElement?.focus();
	}
	handleKeepFocusMouseDown(e) {
		e.preventDefault();
	}
	isInteractiveEventPath(e) {
		let t = typeof e.composedPath == "function" ? e.composedPath() : [e.target];
		for (let n of t) {
			if (n === e.currentTarget || n === this) break;
			if (n instanceof HTMLElement && n.matches("a[href],button,input,textarea,select,summary,[role=\"button\"],[role=\"link\"],[role=\"menuitem\"],[role=\"option\"],[role=\"switch\"],[role=\"checkbox\"],[role=\"radio\"],[role=\"tab\"],[contenteditable=\"\"],[contenteditable=\"true\"],[tabindex]:not([tabindex=\"-1\"])")) return !0;
		}
		return !1;
	}
	handleWrapperMouseDown(e) {
		this.disabled || this.isInteractiveEventPath(e) || e.preventDefault();
	}
	handleWrapperClick(e) {
		this.disabled || this.isInteractiveEventPath(e) || this.controlElement?.focus();
	}
	handleCompositionStart() {
		this.isComposing = !0;
	}
	handleCompositionEnd(e) {
		this.isComposing = !1;
		let t = e.target;
		if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
		let n = this.applyMaxLengthConstraint(t.value);
		if (t.value === n && this.value === n) return;
		let r = this.value;
		t.value = n, this.value = n, this.dispatchInputEvent({
			value: n,
			oldValue: r,
			source: "input",
			sourceEvent: e
		});
	}
	handleSlotChange() {
		this.syncSlotState();
	}
	renderClearButton() {
		return this.shouldShowClearButton ? r`
      <button
        class=${f({
			"ve-input-clear": !0,
			"ve-input-clear--textarea": this.isTextarea
		})}
        part="clear"
        type="button"
        tabindex=${i(this.disabled ? "-1" : void 0)}
        aria-label=${Oe}
        @mousedown=${this.handleKeepFocusMouseDown}
        @click=${this.handleClearClick}
      >
        <ve-icon .definition=${m}></ve-icon>
      </button>
    ` : a;
	}
	renderPrefix() {
		return this.hasPrefixContent ? r`
      <span class="ve-input-prefix" part="prefix">
        <slot name="prefix" @slotchange=${this.handleSlotChange}></slot>
      </span>
    ` : a;
	}
	renderSuffix() {
		return this.shouldShowWordLimitInInput ? r`
        <span
          class=${f({
			"ve-input-suffix": !0,
			"ve-input-word-limit": !0,
			"ve-input-word-limit--error": this.hasLengthError
		})}
          part="word-limit"
        >
          ${this.resolvedWordLimitText}
        </span>
      ` : this.hasSuffixContent ? r`
      <span class="ve-input-suffix" part="suffix">
        <slot name="suffix" @slotchange=${this.handleSlotChange}></slot>
      </span>
    ` : a;
	}
	getInputWrapperStyles() {
		let e = {}, t = this.resolvedAutoWidthConfig;
		if (t) {
			e.width = "auto";
			let n = je(t.minWidth), r = je(t.maxWidth);
			n && (e.minWidth = n), r && (e.maxWidth = r);
		}
		return e;
	}
	getTextareaStyles() {
		let e = {};
		return (this.autoSize || this.disabled) && (e.resize = "none"), e;
	}
	renderControl() {
		return this.isTextarea ? r`
        <textarea
          class="ve-input-control ve-input-textarea"
          part="input"
          .value=${this.value}
          rows=${this.resolvedRows}
          style=${p(this.getTextareaStyles())}
          placeholder=${i(this.placeholder || void 0)}
          maxlength=${i(this.nativeMaxLength)}
          aria-label=${i(this.controlAriaLabel)}
          aria-labelledby=${i(this.controlAriaLabelledby)}
          aria-describedby=${i(this.controlAriaDescribedby)}
          aria-invalid=${i(this.nativeAriaInvalid)}
          ?disabled=${this.disabled}
          @input=${this.handleInput}
          @change=${this.handleChange}
          @compositionstart=${this.handleCompositionStart}
          @compositionend=${this.handleCompositionEnd}
        ></textarea>
      ` : r`
      <input
        class="ve-input-control ve-input-field"
        part="input"
        .value=${this.value}
        type="text"
        placeholder=${i(this.placeholder || void 0)}
        maxlength=${i(this.nativeMaxLength)}
        aria-label=${i(this.controlAriaLabel)}
        aria-labelledby=${i(this.controlAriaLabelledby)}
        aria-describedby=${i(this.controlAriaDescribedby)}
        aria-invalid=${i(this.nativeAriaInvalid)}
        ?disabled=${this.disabled}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @compositionstart=${this.handleCompositionStart}
        @compositionend=${this.handleCompositionEnd}
      />
    `;
	}
	render() {
		return this.isTextarea ? r`
        <div
          class=${f({
			"ve-textarea-wrapper": !0,
			[`ve-textarea-wrapper--${this.normalizedSize}`]: !0,
			"ve-textarea-wrapper--disabled": this.disabled,
			"ve-textarea-wrapper--error": this.mergedStatus === "error",
			"ve-textarea-wrapper--warning": this.mergedStatus === "warning",
			"ve-textarea-wrapper--success": this.mergedStatus === "success",
			"ve-textarea-wrapper--word-limit-outside": this.shouldShowWordLimitOutsideTextarea,
			"ve-textarea-wrapper--clearable": this.clearable
		})}
          style=${p(this.getInputWrapperStyles())}
          part="wrapper"
          @mousedown=${this.handleWrapperMouseDown}
          @click=${this.handleWrapperClick}
        >
          ${this.renderControl()} ${this.renderClearButton()}
          ${this.shouldShowWordLimitInsideTextarea ? r`
                <span
                  class=${f({
			"ve-textarea-word-limit": !0,
			"ve-textarea-word-limit--error": this.hasLengthError
		})}
                  part="word-limit"
                >
                  ${this.resolvedWordLimitText}
                </span>
              ` : a}
          ${this.shouldShowWordLimitOutsideTextarea ? r`
                <span
                  class=${f({
			"ve-textarea-word-limit": !0,
			"ve-textarea-word-limit--outside": !0,
			"ve-textarea-word-limit--error": this.hasLengthError
		})}
                  part="word-limit"
                >
                  ${this.resolvedWordLimitText}
                </span>
              ` : a}
        </div>
      ` : r`
      <div
        class=${f({
			"ve-input-wrapper": !0,
			[`ve-input-wrapper--${this.normalizedSize}`]: !0,
			"ve-input-wrapper--disabled": this.disabled,
			"ve-input-wrapper--error": this.mergedStatus === "error",
			"ve-input-wrapper--warning": this.mergedStatus === "warning",
			"ve-input-wrapper--success": this.mergedStatus === "success",
			"ve-input-wrapper--auto-width": this.resolvedAutoWidthConfig !== null,
			"ve-input-wrapper--has-prefix": this.hasPrefixContent,
			"ve-input-wrapper--clearable": this.clearable
		})}
        style=${p(this.getInputWrapperStyles())}
        part="wrapper"
        @mousedown=${this.handleWrapperMouseDown}
        @click=${this.handleWrapperClick}
      >
        ${this.renderPrefix()} ${this.renderControl()}
        ${this.renderClearButton()} ${this.renderSuffix()}
        ${this.resolvedAutoWidthConfig === null ? a : r`<span class="ve-input-mirror" aria-hidden="true"></span>`}
      </div>
    `;
	}
};
t(Ee, Pe);
//#endregion
export { Ee as VE_INPUT_TAG, Pe as VeInputElement };
