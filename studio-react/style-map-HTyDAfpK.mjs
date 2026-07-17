import { a as e, f as t, i as n, o as r } from "./unsafe-svg-BFm0oi37.mjs";
//#region node_modules/lit-html/directives/class-map.js
var i = n(class extends e {
	constructor(e) {
		if (super(e), e.type !== r.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
	}
	update(e, [n]) {
		if (this.st === void 0) {
			this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e) => e !== "")));
			for (let e in n) n[e] && !this.nt?.has(e) && this.st.add(e);
			return this.render(n);
		}
		let r = e.element.classList;
		for (let e of this.st) e in n || (r.remove(e), this.st.delete(e));
		for (let e in n) {
			let t = !!n[e];
			t === this.st.has(e) || this.nt?.has(e) || (t ? (r.add(e), this.st.add(e)) : (r.remove(e), this.st.delete(e)));
		}
		return t;
	}
}), a = "important", o = " !important", s = n(class extends e {
	constructor(e) {
		if (super(e), e.type !== r.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return Object.keys(e).reduce((t, n) => {
			let r = e[n];
			return r == null ? t : t + `${n = n.includes("-") ? n : n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
		}, "");
	}
	update(e, [n]) {
		let { style: r } = e.element;
		if (this.ft === void 0) return this.ft = new Set(Object.keys(n)), this.render(n);
		for (let e of this.ft) n[e] ?? (this.ft.delete(e), e.includes("-") ? r.removeProperty(e) : r[e] = null);
		for (let e in n) {
			let t = n[e];
			if (t != null) {
				this.ft.add(e);
				let n = typeof t == "string" && t.endsWith(o);
				e.includes("-") || n ? r.setProperty(e, n ? t.slice(0, -11) : t, n ? a : "") : r[e] = t;
			}
		}
		return t;
	}
});
//#endregion
export { i as n, s as t };
