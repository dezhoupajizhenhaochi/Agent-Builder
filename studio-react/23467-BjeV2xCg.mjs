//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, a) => (a = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), u = Symbol.for("ve-design.iconRegistryState");
function d() {
	return {
		iconRegistry: /* @__PURE__ */ new Map(),
		changeListeners: /* @__PURE__ */ new Set()
	};
}
function f() {
	return "u" > typeof customElements ? customElements : globalThis;
}
function p() {
	let e = f();
	return e[u] ??= d();
}
function m(e) {
	let t = e.name.trim(), n = e.svg.trim().match(/<svg\b[\s\S]*?<\/svg>/i)?.[0];
	if (!t) throw Error("Icon name is required.");
	if (!n) throw Error(`Icon "${t}" must provide complete <svg> markup.`);
	return {
		name: t,
		svg: n
	};
}
function h(e) {
	for (let t of p().changeListeners) t(e);
}
function g(e) {
	return p().changeListeners.add(e), () => {
		p().changeListeners.delete(e);
	};
}
function _(e, t = {}) {
	let n = m(e), { iconRegistry: r } = p(), i = r.get(n.name);
	return i && !t.override ? i : (r.set(n.name, n), h([n.name]), n);
}
function v(e) {
	return p().iconRegistry.get(e);
}
function y(e) {
	return p().iconRegistry.has(e);
}
//#endregion
//#region node_modules/@ve-design/web/dist/rslib-runtime.js
var b = {};
b.d = (e, t) => {
	for (var n in t) b.o(t, n) && !b.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), b.r = (e) => {
	"u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
};
//#endregion
//#region node_modules/@ve-design/web/dist/23467.js
var x = /* @__PURE__ */ s({
	getBuiltInIconNames: () => M,
	isBuiltInIconName: () => j,
	loadAllIcons: () => F,
	loadIcon: () => N,
	loadIcons: () => P,
	loader_namespaceObject: () => S
}), S = {};
b.r(S), b.d(S, {
	getBuiltInIconNames: () => M,
	isBuiltInIconName: () => j,
	loadAllIcons: () => F,
	loadIcon: () => N,
	loadIcons: () => P
});
var C = /* @__PURE__ */ "add.add-image.align-center.align-left.align-right.arrow-circle-up.arrow-down-md.arrow-down-sm.arrow-left-md.arrow-left-sm.arrow-right-md.arrow-right-sm.arrow-undo-up-left.arrow-undo-up-right.arrow-up-md.arrow-up-sm.atom.atom-02.attachment.bell.book-open-01.bookmark.brackets.chart.chart-pie.chat-circle.check.check-circle.chevron-down-md.chevron-down-sm.chevron-left-md.chevron-left-sm.chevron-right-md.chevron-right-sm.chevron-up-md.chevron-up-sm.close.code.command.compass-round-1.copy.corner-down-left.corner-down-right.database.date-calendar.dislike.document.down-up.download.drag.edit.emoji-profile.end.error.exit-full-screen.expand.face.file.file-attachment.file-check.filter.folder.folder-upload-1.folder-upload-1-1.full-screen.gift.globe.grid.headphones.help.history.home.image.indent.info.interface.key.lark.left-right.like.link.link-break.list.loading.loading-progress.log-in.log-out.logo-agentkit.logo-arkclaw.logo-arkclaw-inverse.logo-bytedance.logo-bytedance-icon.logo-bytedance-icon-inverse.logo-bytedance-inverse.logo-byteplus.logo-byteplus-icon.logo-byteplus-icon-inverse.logo-byteplus-inverse.logo-capcut.logo-capcut-inverse.logo-chatgpt-icon.logo-deepseek-icon.logo-doubao-llm.logo-doubao-llm-icon.logo-douyin.logo-douyin-group.logo-douyin-group-icon.logo-douyin-group-icon-inverse.logo-douyin-group-inverse.logo-douyin-icon.logo-douyin-icon-inverse.logo-douyin-inverse.logo-dreamina.logo-dreamina-inverse.logo-feilian.logo-feilian-icon.logo-gemini-icon.logo-jianying.logo-jianying-icon.logo-jianying-icon-inverse.logo-jianying-inverse.logo-jimeng-ai.logo-jimeng-ai-inverse.logo-jimeng-icon.logo-jimeng-icon-inverse.logo-tiktok.logo-tiktok-icon.logo-tiktok-icon-inverse.logo-tiktok-inverse.logo-toutiao.logo-toutiao-icon.logo-toutiao-icon-inverse.logo-toutiao-inverse.logo-trae.logo-trae-icon.logo-trae-inverse.logo-vaka.logo-vaka-icon.logo-vaka-inverse.logo-viking.logo-viking-icon.logo-viking-inverse.logo-volcano-engine.logo-volcano-engine-cn.logo-volcano-engine-cn-inverse.logo-volcano-engine-icon.logo-volcano-engine-icon-inverse.logo-volcano-engine-inverse.logo-volcengine-ark.logo-volcengine-ark-icon.logo-volcengine-translate.logo-volcengine-translate-icon.logo-volcengine-voice.logo-volcengine-voice-icon.logo-xingtu.logo-xingtu-icon.logo-xingtu-icon-inverse.logo-xingtu-inverse.mail.menu.menu-align-left.merge-request.message.message-circle-plus.message-circle-text.microphone.minus.monitor.moon.more-horizontal.more-vertical.music.open-new-window.pause.picture-in-picture.pie-chart-01.pie-chart-03.play-square.plugin.podcast.popup.preview.push.refresh.robot.search.settings.settings-slider-ver.share.shrink.sidebar-simple-left-square-1.sidebar-simple-right-square.skill.square-grid-circle-1.star.star-filled.success.sun.sync.telescope.terminal.thumb-down-filled.thumb-up-filled.time-clock.tool.trash-03.type-audio-state-default.type-audio-state-disable.type-chart-state-default.type-chart-state-disable.type-code-state-default.type-code-state-disable.type-excel-state-default.type-excel-state-disable.type-html-state-default.type-html-state-disable.type-image-state-default.type-image-state-disable.type-md-state-default.type-md-state-disable.type-mind-state-default.type-mind-state-disable.type-multi-dimensional-table-state-default.type-multi-dimensional-table-state-disable.type-pdf-state-default.type-pdf-state-disable.type-ppt-state-default.type-ppt-state-disable.type-video-state-default.type-video-state-disable.type-word-state-default.type-word-state-disable.type-zip-state-default.type-zip-state-disable.unfold-less.unfold-more.unknown-file.unknown-file-disabled.upload.upload-video.user.user-02.user-filled.vector.voice.volume.volume-max.warning.x-circle.zoom-in.zoom-out".split("."), w = new Set(C), T = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), D = {
	add: () => import("./add-CQgb3oRD.mjs"),
	"add-image": () => import("./add-image-DDqfa29o.mjs"),
	"align-center": () => import("./align-center-QzI54EQ5.mjs"),
	"align-left": () => import("./align-left-UBR2SeRj.mjs"),
	"align-right": () => import("./align-right-CGAle-Af.mjs"),
	"arrow-circle-up": () => import("./arrow-circle-up-BsQjqlSi.mjs"),
	"arrow-down-md": () => import("./arrow-down-md-B1fJtG8K.mjs"),
	"arrow-down-sm": () => import("./arrow-down-sm-ChiVtTEx.mjs"),
	"arrow-left-md": () => import("./arrow-left-md-C-UVX67t.mjs"),
	"arrow-left-sm": () => import("./arrow-left-sm-AwUbMUBs.mjs"),
	"arrow-right-md": () => import("./arrow-right-md-Dy05tfF_.mjs"),
	"arrow-right-sm": () => import("./arrow-right-sm-QFwgus4I.mjs"),
	"arrow-undo-up-left": () => import("./arrow-undo-up-left-DhIc3aJc.mjs"),
	"arrow-undo-up-right": () => import("./arrow-undo-up-right-Uk5Ipw6V.mjs"),
	"arrow-up-md": () => import("./arrow-up-md-B3_jZksY.mjs"),
	"arrow-up-sm": () => import("./arrow-up-sm-Dr5X8Kxa.mjs"),
	atom: () => import("./atom-3-iN4jkP.mjs"),
	"atom-02": () => import("./atom-02-C4tmVB4q.mjs"),
	attachment: () => import("./attachment-B6ySwybL.mjs"),
	bell: () => import("./bell-B-Pnzaf2.mjs"),
	"book-open-01": () => import("./book-open-01-DiO8VXTO.mjs"),
	bookmark: () => import("./bookmark-BsVI3lOv.mjs"),
	brackets: () => import("./brackets-BIDuC93c.mjs"),
	chart: () => import("./chart-3oGBcfeo.mjs"),
	"chart-pie": () => import("./chart-pie-COJWimF4.mjs"),
	"chat-circle": () => import("./chat-circle-BbDJjZTb.mjs"),
	check: () => import("./selects.js").then((e) => e.i).then((e) => e.check_namespaceObject),
	"check-circle": () => import("./check-circle-DbDbjqsD.mjs"),
	"chevron-down-md": () => import("./chevron-down-md-BWle4QZQ.mjs"),
	"chevron-down-sm": () => import("./selects.js").then((e) => e.a).then((e) => e.chevron_down_sm_namespaceObject),
	"chevron-left-md": () => import("./chevron-left-md-B10Qdf2s.mjs"),
	"chevron-left-sm": () => import("./chevron-left-sm-Bh3v8Pus.mjs"),
	"chevron-right-md": () => import("./chevron-right-md-DKo8lQ8t.mjs"),
	"chevron-right-sm": () => import("./chevron-right-sm-wYeBJP3H.mjs"),
	"chevron-up-md": () => import("./chevron-up-md-DtbSsIaM.mjs"),
	"chevron-up-sm": () => import("./selects.js").then((e) => e.o),
	close: () => import("./close-BGLOLIw1.mjs").then((e) => e.n),
	code: () => import("./code-B1qFex7t.mjs"),
	command: () => import("./command-BaeVK0wF.mjs"),
	"compass-round-1": () => import("./compass-round-1-CxKhXWhj.mjs"),
	copy: () => import("./selects.js").then((e) => e.n),
	"corner-down-left": () => import("./corner-down-left-BFbSvbLz.mjs"),
	"corner-down-right": () => import("./corner-down-right-rxJQFVBZ.mjs"),
	database: () => import("./database-CcOJcBft.mjs"),
	"date-calendar": () => import("./date-calendar-CvelcQ1Y.mjs"),
	dislike: () => import("./dislike-3KMXG_DD.mjs"),
	document: () => import("./document-DXJ-U9rX.mjs"),
	"down-up": () => import("./down-up-BPpitOLB.mjs"),
	download: () => import("./selects.js").then((e) => e.t),
	drag: () => import("./drag-Bie2RSFC.mjs"),
	edit: () => import("./edit-D0MLki3F.mjs"),
	"emoji-profile": () => import("./emoji-profile-DxmckZmx.mjs"),
	end: () => import("./end-pIZuzRI-.mjs"),
	error: () => import("./error-DGBooDqK.mjs"),
	"exit-full-screen": () => import("./exit-full-screen-CmUerc9y.mjs"),
	expand: () => import("./expand-DmsO1Yi6.mjs"),
	face: () => import("./face-2Mwl1D5t.mjs"),
	file: () => import("./file-Dk3s-DlB.mjs"),
	"file-attachment": () => import("./file-attachment-B2uWw9sC.mjs"),
	"file-check": () => import("./file-check-BHq5x1eO.mjs"),
	filter: () => import("./filter-wluBcV4l.mjs"),
	folder: () => import("./folder-Bqk5kHgg.mjs"),
	"folder-upload-1": () => import("./folder-upload-1-e9pvZ85i.mjs"),
	"folder-upload-1-1": () => import("./folder-upload-1-1-sr_pbnZG.mjs"),
	"full-screen": () => import("./full-screen-eRkTJkZg.mjs"),
	gift: () => import("./gift-CTmEYU5D.mjs"),
	globe: () => import("./globe-NTd7qcF6.mjs"),
	grid: () => import("./grid-Dx-Wlz7M.mjs"),
	headphones: () => import("./headphones-BLBNQQUA.mjs"),
	help: () => import("./help-CzmdoVoi.mjs"),
	history: () => import("./history-CCdvoNxZ.mjs"),
	home: () => import("./home-Du9wfYxs.mjs"),
	image: () => import("./image-XH-9XZ_w.mjs"),
	indent: () => import("./indent-DJ7E4Dt3.mjs"),
	info: () => import("./info-DFsamKXR.mjs"),
	interface: () => import("./interface-DAb_E9fv.mjs"),
	key: () => import("./key-DmN-LNHm.mjs"),
	lark: () => import("./lark-GKMTredA.mjs"),
	"left-right": () => import("./left-right-Cpjxh5jl.mjs"),
	like: () => import("./like-DVfAherQ.mjs"),
	link: () => import("./link-DSNCYiTM.mjs"),
	"link-break": () => import("./link-break-B1dTUKLu.mjs"),
	list: () => import("./list-CXoyxCJr.mjs"),
	loading: () => import("./42938-CX6JNQ4u.mjs").then((e) => e.t).then((e) => e.loading_namespaceObject),
	"loading-progress": () => import("./selects.js").then((e) => e.r),
	"log-in": () => import("./log-in-DMvRIe84.mjs"),
	"log-out": () => import("./log-out-D4FABHuM.mjs"),
	"logo-agentkit": () => import("./logo-agentkit-Bsp8IkBG.mjs"),
	"logo-arkclaw": () => import("./logo-arkclaw-jiRAM9t9.mjs"),
	"logo-arkclaw-inverse": () => import("./logo-arkclaw-inverse-B51NslVV.mjs"),
	"logo-bytedance": () => import("./logo-bytedance-DBJpWLlX.mjs"),
	"logo-bytedance-icon": () => import("./logo-bytedance-icon-YVCauaIA.mjs"),
	"logo-bytedance-icon-inverse": () => import("./logo-bytedance-icon-inverse-C93RADsF.mjs"),
	"logo-bytedance-inverse": () => import("./logo-bytedance-inverse-C0_tzz4L.mjs"),
	"logo-byteplus": () => import("./logo-byteplus-BTIjWfOG.mjs"),
	"logo-byteplus-icon": () => import("./logo-byteplus-icon-BDRQjAhp.mjs"),
	"logo-byteplus-icon-inverse": () => import("./logo-byteplus-icon-inverse-Dm6-LFUi.mjs"),
	"logo-byteplus-inverse": () => import("./logo-byteplus-inverse-BoSXD1B4.mjs"),
	"logo-capcut": () => import("./logo-capcut-CbbpbtDt.mjs"),
	"logo-capcut-inverse": () => import("./logo-capcut-inverse-dgFAqKZx.mjs"),
	"logo-chatgpt-icon": () => import("./logo-chatgpt-icon-y9znnfXz.mjs"),
	"logo-deepseek-icon": () => import("./logo-deepseek-icon-BWlv6_qs.mjs"),
	"logo-doubao-llm": () => import("./logo-doubao-llm-Cpa7biQv.mjs"),
	"logo-doubao-llm-icon": () => import("./logo-doubao-llm-icon-DN0nkRMd.mjs"),
	"logo-douyin": () => import("./logo-douyin-DeQVETIZ.mjs"),
	"logo-douyin-group": () => import("./logo-douyin-group-KMRT02Df.mjs"),
	"logo-douyin-group-icon": () => import("./logo-douyin-group-icon-B35kZl_j.mjs"),
	"logo-douyin-group-icon-inverse": () => import("./logo-douyin-group-icon-inverse-JZcc2-mU.mjs"),
	"logo-douyin-group-inverse": () => import("./logo-douyin-group-inverse-ZmuBwXlU.mjs"),
	"logo-douyin-icon": () => import("./logo-douyin-icon-DNeoAHEx.mjs"),
	"logo-douyin-icon-inverse": () => import("./logo-douyin-icon-inverse-O1g-sWX5.mjs"),
	"logo-douyin-inverse": () => import("./logo-douyin-inverse-Bag6k5HS.mjs"),
	"logo-dreamina": () => import("./logo-dreamina-KMVklhbq.mjs"),
	"logo-dreamina-inverse": () => import("./logo-dreamina-inverse-C-tgkzdz.mjs"),
	"logo-feilian": () => import("./logo-feilian-CBlXBFpM.mjs"),
	"logo-feilian-icon": () => import("./logo-feilian-icon-DwXm8HQF.mjs"),
	"logo-gemini-icon": () => import("./logo-gemini-icon-BpxYZiyp.mjs"),
	"logo-jianying": () => import("./logo-jianying-Ct2zSm_R.mjs"),
	"logo-jianying-icon": () => import("./logo-jianying-icon-C8bTR3MC.mjs"),
	"logo-jianying-icon-inverse": () => import("./logo-jianying-icon-inverse-FuAnfE13.mjs"),
	"logo-jianying-inverse": () => import("./logo-jianying-inverse-BUPaexH-.mjs"),
	"logo-jimeng-ai": () => import("./logo-jimeng-ai-Bdf5pRZA.mjs"),
	"logo-jimeng-ai-inverse": () => import("./logo-jimeng-ai-inverse-DLENRvMd.mjs"),
	"logo-jimeng-icon": () => import("./logo-jimeng-icon-ftjHJqTu.mjs"),
	"logo-jimeng-icon-inverse": () => import("./logo-jimeng-icon-inverse-BHLleeVW.mjs"),
	"logo-tiktok": () => import("./logo-tiktok-Djfou9Rn.mjs"),
	"logo-tiktok-icon": () => import("./logo-tiktok-icon-B7Sxo1ec.mjs"),
	"logo-tiktok-icon-inverse": () => import("./logo-tiktok-icon-inverse-CwTVLKAI.mjs"),
	"logo-tiktok-inverse": () => import("./logo-tiktok-inverse-BjVtqpQZ.mjs"),
	"logo-toutiao": () => import("./logo-toutiao-j4pKJSyg.mjs"),
	"logo-toutiao-icon": () => import("./logo-toutiao-icon-Bf8ACszk.mjs"),
	"logo-toutiao-icon-inverse": () => import("./logo-toutiao-icon-inverse-DTGfRcDr.mjs"),
	"logo-toutiao-inverse": () => import("./logo-toutiao-inverse-CZU10Zjo.mjs"),
	"logo-trae": () => import("./logo-trae-Dfmz93Hn.mjs"),
	"logo-trae-icon": () => import("./logo-trae-icon-BGW3aJdP.mjs"),
	"logo-trae-inverse": () => import("./logo-trae-inverse-DwLq4KSS.mjs"),
	"logo-vaka": () => import("./logo-vaka-KmwrPmME.mjs"),
	"logo-vaka-icon": () => import("./logo-vaka-icon-DTIugion.mjs"),
	"logo-vaka-inverse": () => import("./logo-vaka-inverse-Cj58Q6ZM.mjs"),
	"logo-viking": () => import("./logo-viking-DPr8oxrj.mjs"),
	"logo-viking-icon": () => import("./logo-viking-icon-BBI5k8Q1.mjs"),
	"logo-viking-inverse": () => import("./logo-viking-inverse-Da9m-gAD.mjs"),
	"logo-volcano-engine": () => import("./logo-volcano-engine-DVAvwnsh.mjs"),
	"logo-volcano-engine-cn": () => import("./logo-volcano-engine-cn-uMjElQFc.mjs"),
	"logo-volcano-engine-cn-inverse": () => import("./logo-volcano-engine-cn-inverse-Fmd9t9O2.mjs"),
	"logo-volcano-engine-icon": () => import("./logo-volcano-engine-icon-pXvvc48Q.mjs"),
	"logo-volcano-engine-icon-inverse": () => import("./logo-volcano-engine-icon-inverse-QqQ6N1aX.mjs"),
	"logo-volcano-engine-inverse": () => import("./logo-volcano-engine-inverse-BEB4svsl.mjs"),
	"logo-volcengine-ark": () => import("./logo-volcengine-ark-BCrqbjzG.mjs"),
	"logo-volcengine-ark-icon": () => import("./logo-volcengine-ark-icon-BUBDU229.mjs"),
	"logo-volcengine-translate": () => import("./logo-volcengine-translate-DtbadTDW.mjs"),
	"logo-volcengine-translate-icon": () => import("./logo-volcengine-translate-icon-B2ki89Nx.mjs"),
	"logo-volcengine-voice": () => import("./logo-volcengine-voice-D5shSxpw.mjs"),
	"logo-volcengine-voice-icon": () => import("./logo-volcengine-voice-icon-BucNU_h1.mjs"),
	"logo-xingtu": () => import("./logo-xingtu-B82gCMRU.mjs"),
	"logo-xingtu-icon": () => import("./logo-xingtu-icon-0h9oMWjP.mjs"),
	"logo-xingtu-icon-inverse": () => import("./logo-xingtu-icon-inverse-CXMrP3qp.mjs"),
	"logo-xingtu-inverse": () => import("./logo-xingtu-inverse-D-u5HBvo.mjs"),
	mail: () => import("./mail-rRYRvdLz.mjs"),
	menu: () => import("./menu-7_ZIrZi4.mjs"),
	"menu-align-left": () => import("./menu-align-left-K4H666vx.mjs"),
	"merge-request": () => import("./merge-request-D20XZ0ML.mjs"),
	message: () => import("./message-Blelu8NR.mjs"),
	"message-circle-plus": () => import("./message-circle-plus-DDVFc0FH.mjs"),
	"message-circle-text": () => import("./message-circle-text-DQs8a3Xp.mjs"),
	microphone: () => import("./microphone-BZQ-QoSW.mjs"),
	minus: () => import("./minus-CJ0_8lE7.mjs"),
	monitor: () => import("./monitor-BqDeJl4L.mjs"),
	moon: () => import("./moon-q0qvyJJH.mjs"),
	"more-horizontal": () => import("./more-horizontal-EwDSh3f9.mjs"),
	"more-vertical": () => import("./more-vertical-CvyNTLWZ.mjs"),
	music: () => import("./music-BzqOpHy9.mjs"),
	"open-new-window": () => import("./open-new-window-Cyyam_YO.mjs"),
	pause: () => import("./pause-CRuWwKuA.mjs"),
	"picture-in-picture": () => import("./picture-in-picture-B0dC6lgz.mjs"),
	"pie-chart-01": () => import("./pie-chart-01-CtpKuUM6.mjs"),
	"pie-chart-03": () => import("./pie-chart-03-C98LrpDg.mjs"),
	"play-square": () => import("./play-square-B8fQK7Wk.mjs"),
	plugin: () => import("./plugin-0vGNnut5.mjs"),
	podcast: () => import("./podcast-5EZncJSG.mjs"),
	popup: () => import("./popup-CsKrQh4t.mjs"),
	preview: () => import("./preview-C6n6i7yL.mjs"),
	push: () => import("./push-9etIHZWi.mjs"),
	refresh: () => import("./refresh-DdBZX_fw.mjs"),
	robot: () => import("./robot-IkkqQ2hS.mjs"),
	search: () => import("./search-Cwn2AINv.mjs"),
	settings: () => import("./settings-CqBS0aTw.mjs"),
	"settings-slider-ver": () => import("./settings-slider-ver-DSxiuCG7.mjs"),
	share: () => import("./share-B_eiAMRc.mjs"),
	shrink: () => import("./shrink-CtDhU5sc.mjs"),
	"sidebar-simple-left-square-1": () => import("./sidebar-simple-left-square-1-CDVhU4Ng.mjs"),
	"sidebar-simple-right-square": () => import("./sidebar-simple-right-square-BPm3uRyj.mjs"),
	skill: () => import("./skill-C_kpC_Vi.mjs"),
	"square-grid-circle-1": () => import("./square-grid-circle-1-BUsSjT9t.mjs"),
	star: () => import("./star-D0lMTVSb.mjs"),
	"star-filled": () => import("./star-filled-DrSVMl3J.mjs"),
	success: () => import("./success-BAcCEHM2.mjs"),
	sun: () => import("./sun-C4Y0Jzl3.mjs"),
	sync: () => import("./sync-Va2n-KmZ.mjs"),
	telescope: () => import("./telescope-BiDmeEWL.mjs"),
	terminal: () => import("./terminal-Bz-IpLIj.mjs"),
	"thumb-down-filled": () => import("./thumb-down-filled-tGLqlG2w.mjs"),
	"thumb-up-filled": () => import("./thumb-up-filled-Cg2-K_wI.mjs"),
	"time-clock": () => import("./time-clock-H-dIS2lO.mjs"),
	tool: () => import("./tool-c4b8zyAz.mjs"),
	"trash-03": () => import("./trash-03-CDcztiie.mjs"),
	"type-audio-state-default": () => import("./type-audio-state-default-DRDIrKjK.mjs"),
	"type-audio-state-disable": () => import("./type-audio-state-disable-BsC-QOm5.mjs"),
	"type-chart-state-default": () => import("./type-chart-state-default-BsF7gnA6.mjs"),
	"type-chart-state-disable": () => import("./type-chart-state-disable-CD6siFcs.mjs"),
	"type-code-state-default": () => import("./type-code-state-default-DAMw3k5N.mjs"),
	"type-code-state-disable": () => import("./type-code-state-disable-BQUQndUx.mjs"),
	"type-excel-state-default": () => import("./type-excel-state-default-CKs94G6g.mjs"),
	"type-excel-state-disable": () => import("./type-excel-state-disable-BZgfnNez.mjs"),
	"type-html-state-default": () => import("./type-html-state-default-DPX7Sr2u.mjs"),
	"type-html-state-disable": () => import("./type-html-state-disable-pyumC0G9.mjs"),
	"type-image-state-default": () => import("./type-image-state-default-xmWMAj4m.mjs"),
	"type-image-state-disable": () => import("./type-image-state-disable-Ds_RvXsv.mjs"),
	"type-md-state-default": () => import("./type-md-state-default-BYgJSj6Y.mjs"),
	"type-md-state-disable": () => import("./type-md-state-disable-CXZiA0Bd.mjs"),
	"type-mind-state-default": () => import("./type-mind-state-default-DXekAgpv.mjs"),
	"type-mind-state-disable": () => import("./type-mind-state-disable-DvNKETUb.mjs"),
	"type-multi-dimensional-table-state-default": () => import("./type-multi-dimensional-table-state-default-NMg1Yu7L.mjs"),
	"type-multi-dimensional-table-state-disable": () => import("./type-multi-dimensional-table-state-disable-BTU3kWv8.mjs"),
	"type-pdf-state-default": () => import("./type-pdf-state-default-D2dgHVg2.mjs"),
	"type-pdf-state-disable": () => import("./type-pdf-state-disable-CTqTgHPx.mjs"),
	"type-ppt-state-default": () => import("./type-ppt-state-default-C1Qk59Er.mjs"),
	"type-ppt-state-disable": () => import("./type-ppt-state-disable-Cx3CoDUD.mjs"),
	"type-video-state-default": () => import("./type-video-state-default-BM-RYI62.mjs"),
	"type-video-state-disable": () => import("./type-video-state-disable-hQHgRk3U.mjs"),
	"type-word-state-default": () => import("./type-word-state-default-DGChAcda.mjs"),
	"type-word-state-disable": () => import("./type-word-state-disable-DaSEccBB.mjs"),
	"type-zip-state-default": () => import("./type-zip-state-default-ClR7J_KD.mjs"),
	"type-zip-state-disable": () => import("./type-zip-state-disable-CAgNm6k1.mjs"),
	"unfold-less": () => import("./unfold-less-B7VARmdh.mjs"),
	"unfold-more": () => import("./unfold-more-CKINel94.mjs"),
	"unknown-file": () => import("./unknown-file-wICmUR2g.mjs"),
	"unknown-file-disabled": () => import("./unknown-file-disabled-wUCFjpWV.mjs"),
	upload: () => import("./upload-Bcajjtiz.mjs"),
	"upload-video": () => import("./upload-video-BPP8Mr1d.mjs"),
	user: () => import("./user-DaDIHzB3.mjs"),
	"user-02": () => import("./user-02-C517GlNK.mjs"),
	"user-filled": () => import("./user-filled-CwoDQFao.mjs"),
	vector: () => import("./vector-CQfSIQIi.mjs"),
	voice: () => import("./voice-NhX_q5WI.mjs"),
	volume: () => import("./volume-AwtaLG_f.mjs"),
	"volume-max": () => import("./volume-max-Cn0QQd6w.mjs"),
	warning: () => import("./warning-wYyy36rM.mjs"),
	"x-circle": () => import("./x-circle-f20yzu2Y.mjs"),
	"zoom-in": () => import("./zoom-in-BBpyj0nE.mjs"),
	"zoom-out": () => import("./zoom-out-B4LcCZbC.mjs")
};
function O(e, t) {
	if (!e || typeof e != "object") return !1;
	let n = e;
	return n.name === t && typeof n.svg == "string";
}
function k(e, t) {
	return Object.values(e).find((e) => O(e, t));
}
function A(e) {
	return D[e]();
}
function j(e) {
	return w.has(e);
}
function M() {
	return C;
}
function N(e) {
	let t = E.get(e);
	if (t) return y(e) || _(t), Promise.resolve(t);
	let n = v(e);
	if (n) return E.set(e, n), Promise.resolve(n);
	let r = T.get(e);
	return r || (r = A(e).then((t) => {
		let n = k(t, e) ?? v(e);
		if (!n) throw Error(`Built-in icon "${e}" failed to register.`);
		E.set(e, n);
	}).catch((t) => {
		throw T.delete(e), t;
	}), T.set(e, r)), r.then(() => {
		let t = E.get(e) ?? v(e);
		if (!t) throw Error(`Built-in icon "${e}" failed to load.`);
		return t;
	});
}
function P(e) {
	return Promise.all(e.map((e) => N(e)));
}
function F() {
	return P(C);
}
//#endregion
export { _ as a, l as c, v as i, b as n, o, g as r, s, x as t };
