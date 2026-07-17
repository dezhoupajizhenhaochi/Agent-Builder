import { a as e, o as t } from "./23467-B15YFJSu.mjs";
//#region node_modules/@lit/reactive-element/css-tag.js
var n = globalThis, r = n.ShadowRoot && (n.ShadyCSS === void 0 || n.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, i = Symbol(), a = /* @__PURE__ */ new WeakMap(), o = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (r && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = a.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && a.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, s = (e) => new o(typeof e == "string" ? e : e + "", void 0, i), c = (e, ...t) => new o(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, i), l = (e, t) => {
	if (r) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let r of t) {
		let t = document.createElement("style"), i = n.litNonce;
		i !== void 0 && t.setAttribute("nonce", i), t.textContent = r.cssText, e.appendChild(t);
	}
}, u = r ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return s(t);
})(e) : e, { is: d, defineProperty: f, getOwnPropertyDescriptor: p, getOwnPropertyNames: m, getOwnPropertySymbols: h, getPrototypeOf: g } = Object, _ = globalThis, v = _.trustedTypes, y = v ? v.emptyScript : "", b = _.reactiveElementPolyfillSupport, x = (e, t) => e, S = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? y : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, C = (e, t) => !d(e, t), w = {
	attribute: !0,
	type: String,
	converter: S,
	reflect: !1,
	useDefault: !1,
	hasChanged: C
};
Symbol.metadata ??= Symbol("metadata"), _.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var T = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = w) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && f(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = p(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? w;
	}
	static _$Ei() {
		if (this.hasOwnProperty(x("elementProperties"))) return;
		let e = g(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(x("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(x("properties"))) {
			let e = this.properties, t = [...m(e), ...h(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(u(e));
		} else e !== void 0 && t.push(u(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return l(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? S : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? S : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? C)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
T.elementStyles = [], T.shadowRootOptions = { mode: "open" }, T[x("elementProperties")] = /* @__PURE__ */ new Map(), T[x("finalized")] = /* @__PURE__ */ new Map(), b?.({ ReactiveElement: T }), (_.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
var E = globalThis, D = (e) => e, O = E.trustedTypes, k = O ? O.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, A = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, M = "?" + j, N = `<${M}>`, P = document, F = () => P.createComment(""), I = (e) => e === null || typeof e != "object" && typeof e != "function", L = Array.isArray, ee = (e) => L(e) || typeof e?.[Symbol.iterator] == "function", R = "[ 	\n\f\r]", z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, te = /-->/g, ne = />/g, B = RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), re = /'/g, ie = /"/g, ae = /^(?:script|style|textarea|title)$/i, oe = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), V = Symbol.for("lit-noChange"), H = Symbol.for("lit-nothing"), se = /* @__PURE__ */ new WeakMap(), U = P.createTreeWalker(P, 129);
function ce(e, t) {
	if (!L(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return k === void 0 ? t : k.createHTML(t);
}
var le = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = z;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === z ? c[1] === "!--" ? o = te : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = B) : (ae.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = B) : o = ne : o === B ? c[0] === ">" ? (o = i ?? z, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? B : c[3] === "\"" ? ie : re) : o === ie || o === re ? o = B : o === te || o === ne ? o = z : (o = B, i = void 0);
		let d = o === B && e[t + 1].startsWith("/>") ? " " : "";
		a += o === z ? n + N : l >= 0 ? (r.push(s), n.slice(0, l) + A + n.slice(l) + j + d) : n + j + (l === -2 ? t : d);
	}
	return [ce(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, W = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = le(t, n);
		if (this.el = e.createElement(l, r), U.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = U.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(A)) {
					let t = u[o++], n = i.getAttribute(e).split(j), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? de : r[1] === "?" ? fe : r[1] === "@" ? pe : q
					}), i.removeAttribute(e);
				} else e.startsWith(j) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (ae.test(i.tagName)) {
					let e = i.textContent.split(j), t = e.length - 1;
					if (t > 0) {
						i.textContent = O ? O.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], F()), U.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], F());
					}
				}
			} else if (i.nodeType === 8) if (i.data === M) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(j, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += j.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = P.createElement("template");
		return n.innerHTML = e, n;
	}
};
function G(e, t, n = e, r) {
	if (t === V) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = I(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = G(e, i._$AS(e, t.values), i, r)), t;
}
var ue = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? P).importNode(t, !0);
		U.currentNode = r;
		let i = U.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new K(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new me(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = U.nextNode(), a++);
		}
		return U.currentNode = P, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, K = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = H, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = G(this, e, t), I(e) ? e === H || e == null || e === "" ? (this._$AH !== H && this._$AR(), this._$AH = H) : e !== this._$AH && e !== V && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ee(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== H && I(this._$AH) ? this._$AA.nextSibling.data = e : this.T(P.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = W.createElement(ce(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new ue(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = se.get(e.strings);
		return t === void 0 && se.set(e.strings, t = new W(e)), t;
	}
	k(t) {
		L(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(F()), this.O(F()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = D(e).nextSibling;
			D(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, q = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = H, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = H;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = G(this, e, t, 0), a = !I(e) || e !== this._$AH && e !== V, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = G(this, r[n + o], t, o), s === V && (s = this._$AH[o]), a ||= !I(s) || s !== this._$AH[o], s === H ? e = H : e !== H && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === H ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, de = class extends q {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === H ? void 0 : e;
	}
}, fe = class extends q {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== H);
	}
}, pe = class extends q {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = G(this, e, t, 0) ?? H) === V) return;
		let n = this._$AH, r = e === H && n !== H || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== H && (n === H || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, me = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		G(this, e);
	}
}, he = {
	M: A,
	P: j,
	A: M,
	C: 1,
	L: le,
	R: ue,
	D: ee,
	V: G,
	I: K,
	H: q,
	N: fe,
	U: pe,
	B: de,
	F: me
}, ge = E.litHtmlPolyfillSupport;
ge?.(W, K), (E.litHtmlVersions ??= []).push("3.3.3");
var _e = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new K(t.insertBefore(F(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, J = globalThis, Y = class extends T {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = _e(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return V;
	}
};
Y._$litElement$ = !0, Y.finalized = !0, J.litElementHydrateSupport?.({ LitElement: Y });
var ve = J.litElementPolyfillSupport;
ve?.({ LitElement: Y }), (J.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region node_modules/@lit/reactive-element/decorators/property.js
var ye = {
	attribute: !0,
	type: String,
	converter: S,
	reflect: !1,
	hasChanged: C
}, be = (e = ye, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function X(e) {
	return (t, n) => typeof n == "object" ? be(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
function xe(e) {
	return X({
		...e,
		state: !0,
		attribute: !1
	});
}
//#endregion
//#region node_modules/lit-html/directive.js
var Se = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Z = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Ce = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, we = class extends Y {
	static dependencies;
	static shadowRootOptions = {
		...Y.shadowRootOptions,
		delegatesFocus: !0
	};
};
function Te(e) {
	try {
		Object.defineProperty(e, "vePackageVersion", {
			configurable: !0,
			value: "0.0.5"
		});
	} catch {}
}
function Ee(e, t, n) {
	if (!("u" < typeof customElements) && !customElements.get(e) && !n.has(e)) {
		n.add(e);
		for (let [e, r] of Object.entries(t.dependencies ?? {})) Ee(e, r, n);
		customElements.get(e) || (Te(t), customElements.define(e, t));
	}
}
function De(e, t) {
	Ee(e, t, /* @__PURE__ */ new Set());
}
var Oe = c`
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
`, Q = class extends Ce {
	constructor(e) {
		if (super(e), this.it = H, e.type !== Se.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === H || e == null) return this._t = void 0, this.it = e;
		if (e === V) return e;
		if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
		if (e === this.it) return this._t;
		this.it = e;
		let t = [e];
		return t.raw = t, this._t = {
			_$litType$: this.constructor.resultType,
			strings: t,
			values: []
		};
	}
};
Q.directiveName = "unsafeHTML", Q.resultType = 1;
var ke = Z(Q), $ = (e) => e ?? H, Ae = class extends Q {};
Ae.directiveName = "unsafeSVG", Ae.resultType = 2;
var je = Z(Ae), Me = [
	Oe,
	c`
  :host {
    --ve-icon-size: 1.15em;
    --ve-icon-stroke-width: 1.5;
  }
`,
	c`
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
function Ne(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Pe(e) {
	var t = Ne(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function Fe(e) {
	if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (e === null ? "null" : typeof e));
	return e;
}
function Ie(e, t, n) {
	typeof t == "symbol" && (t = t.description, t = t ? "[" + t + "]" : "");
	try {
		Object.defineProperty(e, "name", {
			configurable: !0,
			value: n ? n + " " + t : t
		});
	} catch {}
	return e;
}
function Le(e, t, n, r, i, a) {
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
			get: Ie(function() {
				return y(this);
			}, r, "get"),
			set: function(e) {
				t[4](this, e);
			}
		} : E[O] = y, h || Ie(E[O], r, w ? "" : O)) : h || (E = Object.getOwnPropertyDescriptor(e, r)), !h && !d)) {
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
					h(o ? e : e.prototype, l, m, p ? "#" + f : Pe(f), d, d < 2 ? [] : o ? a ||= [] : r ||= [], t, !!o, p, s, o && p ? function(t) {
						return Fe(t) === e;
					} : i);
				}
			}
		};
		return s(8, 0), s(0, 0), s(8, 1), s(0, 1), o(r), o(a), t;
	}
	function _(e) {
		return s(e, o, {
			configurable: !0,
			enumerable: !0,
			value: l
		});
	}
	return a !== void 0 && (l = a[o]), l = c(l ?? null), f = g(), d || _(e), {
		e: f,
		get c() {
			var n = [];
			return d && [_(e = h(e, [t], r, e.name, 5, n)), p(n, 1)];
		}
	};
}
var Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe = "ve-icon";
Re = X({
	type: String,
	reflect: !0
}), ze = X({ attribute: !1 }), Be = X({ type: String }), Ve = X({ reflect: !0 });
var Ze = class extends we {
	static {
		({e: [He, Ue, We, Ge, Ke, qe, Je, Ye]} = Le(this, [], [
			[
				Re,
				1,
				"name"
			],
			[
				ze,
				1,
				"definition"
			],
			[
				Be,
				1,
				"label"
			],
			[
				Ve,
				1,
				"size"
			]
		]));
	}
	static styles = Me;
	#e = (() => {
		let e = He(this, "");
		return Ue(this), e;
	})();
	get name() {
		return this.#e;
	}
	set name(e) {
		this.#e = e;
	}
	#t = (() => {
		let e = We(this, void 0);
		return Ge(this), e;
	})();
	get definition() {
		return this.#t;
	}
	set definition(e) {
		this.#t = e;
	}
	#n = (() => {
		let e = Ke(this, "");
		return qe(this), e;
	})();
	get label() {
		return this.#n;
	}
	set label(e) {
		this.#n = e;
	}
	#r = (() => {
		let e = Je(this, "");
		return Ye(this), e;
	})();
	get size() {
		return this.#r;
	}
	set size(e) {
		this.#r = e;
	}
	removeIconRegistryChangeListener = null;
	connectedCallback() {
		super.connectedCallback(), this.removeIconRegistryChangeListener = e((e) => {
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
		!e || t(e) || import("./23467-B15YFJSu.mjs").then((e) => e.t).then((e) => e.loader_namespaceObject).then(({ isBuiltInIconName: n, loadIcon: r }) => {
			if (!((this.name ?? "").trim() !== e || t(e) || !n(e))) return r(e);
		}).catch(() => {});
	}
	get resolvedIcon() {
		return this.definition ? this.definition : this.name ? t(this.name) : void 0;
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
		if (!e) return H;
		let t = (this.label ?? "").trim();
		return oe`
      <span
        class="ve-icon"
        part="icon"
        style=${$(this.iconStyle)}
        role=${$(t ? "img" : void 0)}
        aria-label=${$(t || void 0)}
        aria-hidden=${$(t ? void 0 : "true")}
      >
        ${je(e.svg)}
      </span>
    `;
	}
};
//#endregion
//#region node_modules/@ve-design/web/dist/20787.js
function Qe() {
	De(Xe, Ze);
}
Qe();
//#endregion
export { V as _, $ as a, c as b, Oe as c, Ce as d, Se as f, _e as g, H as h, je as i, De as l, X as m, Xe as n, ke as o, xe as p, Ze as r, we as s, Qe as t, Z as u, oe as v, he as y };
