import { d as e, f as t, g as n, u as r } from "./20787-Dhb05CfP.mjs";
//#region node_modules/lit-html/directives/class-map.js
var i = r(class extends e {
	constructor(e) {
		if (super(e), e.type !== t.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
	}
	update(e, [t]) {
		if (this.st === void 0) {
			this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e) => e !== "")));
			for (let e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
			return this.render(t);
		}
		let r = e.element.classList;
		for (let e of this.st) e in t || (r.remove(e), this.st.delete(e));
		for (let e in t) {
			let n = !!t[e];
			n === this.st.has(e) || this.nt?.has(e) || (n ? (r.add(e), this.st.add(e)) : (r.remove(e), this.st.delete(e)));
		}
		return n;
	}
}), a = "important", o = " !important", s = r(class extends e {
	constructor(e) {
		if (super(e), e.type !== t.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return Object.keys(e).reduce((t, n) => {
			let r = e[n];
			return r == null ? t : t + `${n = n.includes("-") ? n : n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
		}, "");
	}
	update(e, [t]) {
		let { style: r } = e.element;
		if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
		for (let e of this.ft) t[e] ?? (this.ft.delete(e), e.includes("-") ? r.removeProperty(e) : r[e] = null);
		for (let e in t) {
			let n = t[e];
			if (n != null) {
				this.ft.add(e);
				let t = typeof n == "string" && n.endsWith(o);
				e.includes("-") || t ? r.setProperty(e, t ? n.slice(0, -11) : n, t ? a : "") : r[e] = n;
			}
		}
		return n;
	}
});
//#endregion
export { i as n, s as t };
