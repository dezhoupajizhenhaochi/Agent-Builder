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
function v(e, t = {}) {
	for (let n of e) _(n, t);
}
function y(e) {
	return p().iconRegistry.get(e);
}
function b(e) {
	return p().iconRegistry.has(e);
}
//#endregion
//#region node_modules/@ve-design/web/dist/rslib-runtime.js
var x = {};
x.d = (e, t) => {
	for (var n in t) x.o(t, n) && !x.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, x.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), x.r = (e) => {
	"u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
};
//#endregion
//#region node_modules/@ve-design/web/dist/23467.js
var S = /* @__PURE__ */ s({
	getBuiltInIconNames: () => N,
	isBuiltInIconName: () => M,
	loadAllIcons: () => I,
	loadIcon: () => P,
	loadIcons: () => F,
	loader_namespaceObject: () => C
}), C = {};
x.r(C), x.d(C, {
	getBuiltInIconNames: () => N,
	isBuiltInIconName: () => M,
	loadAllIcons: () => I,
	loadIcon: () => P,
	loadIcons: () => F
});
var w = /* @__PURE__ */ "add.add-image.align-center.align-left.align-right.arrow-circle-up.arrow-down-md.arrow-down-sm.arrow-left-md.arrow-left-sm.arrow-right-md.arrow-right-sm.arrow-undo-up-left.arrow-undo-up-right.arrow-up-md.arrow-up-sm.atom.atom-02.attachment.bell.book-open-01.bookmark.brackets.chart.chart-pie.chat-circle.check.check-circle.chevron-down-md.chevron-down-sm.chevron-left-md.chevron-left-sm.chevron-right-md.chevron-right-sm.chevron-up-md.chevron-up-sm.close.code.command.compass-round-1.copy.corner-down-left.corner-down-right.database.date-calendar.dislike.document.down-up.download.drag.edit.emoji-profile.end.error.exit-full-screen.expand.face.file.file-attachment.file-check.filter.folder.folder-upload-1.folder-upload-1-1.full-screen.gift.globe.grid.headphones.help.history.home.image.indent.info.interface.key.lark.left-right.like.link.link-break.list.loading.loading-progress.log-in.log-out.logo-agentkit.logo-arkclaw.logo-arkclaw-inverse.logo-bytedance.logo-bytedance-icon.logo-bytedance-icon-inverse.logo-bytedance-inverse.logo-byteplus.logo-byteplus-icon.logo-byteplus-icon-inverse.logo-byteplus-inverse.logo-capcut.logo-capcut-inverse.logo-chatgpt-icon.logo-deepseek-icon.logo-doubao-llm.logo-doubao-llm-icon.logo-douyin.logo-douyin-group.logo-douyin-group-icon.logo-douyin-group-icon-inverse.logo-douyin-group-inverse.logo-douyin-icon.logo-douyin-icon-inverse.logo-douyin-inverse.logo-dreamina.logo-dreamina-inverse.logo-feilian.logo-feilian-icon.logo-gemini-icon.logo-jianying.logo-jianying-icon.logo-jianying-icon-inverse.logo-jianying-inverse.logo-jimeng-ai.logo-jimeng-ai-inverse.logo-jimeng-icon.logo-jimeng-icon-inverse.logo-tiktok.logo-tiktok-icon.logo-tiktok-icon-inverse.logo-tiktok-inverse.logo-toutiao.logo-toutiao-icon.logo-toutiao-icon-inverse.logo-toutiao-inverse.logo-trae.logo-trae-icon.logo-trae-inverse.logo-vaka.logo-vaka-icon.logo-vaka-inverse.logo-viking.logo-viking-icon.logo-viking-inverse.logo-volcano-engine.logo-volcano-engine-cn.logo-volcano-engine-cn-inverse.logo-volcano-engine-icon.logo-volcano-engine-icon-inverse.logo-volcano-engine-inverse.logo-volcengine-ark.logo-volcengine-ark-icon.logo-volcengine-translate.logo-volcengine-translate-icon.logo-volcengine-voice.logo-volcengine-voice-icon.logo-xingtu.logo-xingtu-icon.logo-xingtu-icon-inverse.logo-xingtu-inverse.mail.menu.menu-align-left.merge-request.message.message-circle-plus.message-circle-text.microphone.minus.monitor.moon.more-horizontal.more-vertical.music.open-new-window.pause.picture-in-picture.pie-chart-01.pie-chart-03.play-square.plugin.podcast.popup.preview.push.refresh.robot.search.settings.settings-slider-ver.share.shrink.sidebar-simple-left-square-1.sidebar-simple-right-square.skill.square-grid-circle-1.star.star-filled.success.sun.sync.telescope.terminal.thumb-down-filled.thumb-up-filled.time-clock.tool.trash-03.type-audio-state-default.type-audio-state-disable.type-chart-state-default.type-chart-state-disable.type-code-state-default.type-code-state-disable.type-excel-state-default.type-excel-state-disable.type-html-state-default.type-html-state-disable.type-image-state-default.type-image-state-disable.type-md-state-default.type-md-state-disable.type-mind-state-default.type-mind-state-disable.type-multi-dimensional-table-state-default.type-multi-dimensional-table-state-disable.type-pdf-state-default.type-pdf-state-disable.type-ppt-state-default.type-ppt-state-disable.type-video-state-default.type-video-state-disable.type-word-state-default.type-word-state-disable.type-zip-state-default.type-zip-state-disable.unfold-less.unfold-more.unknown-file.unknown-file-disabled.upload.upload-video.user.user-02.user-filled.vector.voice.volume.volume-max.warning.x-circle.zoom-in.zoom-out".split("."), T = new Set(w), E = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), O = {
	add: () => import("./add-Dg9zPBaK.mjs"),
	"add-image": () => import("./add-image-BBJNVw0e.mjs"),
	"align-center": () => import("./align-center-DkOvl4ce.mjs"),
	"align-left": () => import("./align-left-DP8KEs6q.mjs"),
	"align-right": () => import("./align-right-_l0FV-l8.mjs"),
	"arrow-circle-up": () => import("./arrow-circle-up-DbYVh5JI.mjs"),
	"arrow-down-md": () => import("./arrow-down-md-DypVPxzJ.mjs"),
	"arrow-down-sm": () => import("./arrow-down-sm-BjRfU4D1.mjs"),
	"arrow-left-md": () => import("./arrow-left-md-DNY9vtNb.mjs"),
	"arrow-left-sm": () => import("./arrow-left-sm-5oSvRbq8.mjs"),
	"arrow-right-md": () => import("./arrow-right-md-CIlZfwl6.mjs"),
	"arrow-right-sm": () => import("./arrow-right-sm-CbU8zzeU.mjs"),
	"arrow-undo-up-left": () => import("./arrow-undo-up-left-CWKxEEXh.mjs"),
	"arrow-undo-up-right": () => import("./arrow-undo-up-right-B4H_rqW5.mjs"),
	"arrow-up-md": () => import("./selects.js").then((e) => e.p),
	"arrow-up-sm": () => import("./arrow-up-sm--mj0gqxv.mjs"),
	atom: () => import("./selects.js").then((e) => e.f),
	"atom-02": () => import("./atom-02-BIwog3yc.mjs"),
	attachment: () => import("./selects.js").then((e) => e.d),
	bell: () => import("./bell-DOPQ-bZI.mjs"),
	"book-open-01": () => import("./book-open-01-BBBhgFl5.mjs"),
	bookmark: () => import("./bookmark-DM8uez4Y.mjs"),
	brackets: () => import("./brackets-DtdROyz-.mjs"),
	chart: () => import("./chart-73QZcM56.mjs"),
	"chart-pie": () => import("./chart-pie-DzAxc_ys.mjs"),
	"chat-circle": () => import("./chat-circle-CebuDc3x.mjs"),
	check: () => import("./selects.js").then((e) => e.x).then((e) => e.check_namespaceObject),
	"check-circle": () => import("./selects.js").then((e) => e.h),
	"chevron-down-md": () => import("./selects.js").then((e) => e.u),
	"chevron-down-sm": () => import("./selects.js").then((e) => e.g).then((e) => e.chevron_down_sm_namespaceObject),
	"chevron-left-md": () => import("./chevron-left-md-fCyfg8NK.mjs"),
	"chevron-left-sm": () => import("./chevron-left-sm-C2nGDmox.mjs"),
	"chevron-right-md": () => import("./chevron-right-md-aACf6m9j.mjs"),
	"chevron-right-sm": () => import("./chevron-right-sm-DnBBtJTl.mjs"),
	"chevron-up-md": () => import("./chevron-up-md-B1-tbOOd.mjs"),
	"chevron-up-sm": () => import("./selects.js").then((e) => e._),
	close: () => import("./close-SPk98HCC.mjs").then((e) => e.n),
	code: () => import("./code-CRrz-ZW1.mjs"),
	command: () => import("./command-DQDcv0Gu.mjs"),
	"compass-round-1": () => import("./compass-round-1-E15PWOsP.mjs"),
	copy: () => import("./selects.js").then((e) => e.b),
	"corner-down-left": () => import("./corner-down-left-Bdzgwet-.mjs"),
	"corner-down-right": () => import("./corner-down-right-D99UzLYZ.mjs"),
	database: () => import("./database-Cql2BJel.mjs"),
	"date-calendar": () => import("./date-calendar-DuhIa-Zr.mjs"),
	dislike: () => import("./dislike-CIj_0B9W.mjs"),
	document: () => import("./document-Dz4qUKpN.mjs"),
	"down-up": () => import("./down-up-Co4uWcMh.mjs"),
	download: () => import("./selects.js").then((e) => e.y),
	drag: () => import("./drag-DWDTUprz.mjs"),
	edit: () => import("./edit-BDpTr_BM.mjs"),
	"emoji-profile": () => import("./emoji-profile-_c7dSoib.mjs"),
	end: () => import("./end-mQw_DlHr.mjs"),
	error: () => import("./error-DRv5_NbX.mjs"),
	"exit-full-screen": () => import("./selects.js").then((e) => e.l),
	expand: () => import("./expand-CZvwBoAu.mjs"),
	face: () => import("./face-Cor3on67.mjs"),
	file: () => import("./selects.js").then((e) => e.c),
	"file-attachment": () => import("./file-attachment-09NWIXjR.mjs"),
	"file-check": () => import("./selects.js").then((e) => e.s),
	filter: () => import("./filter-BmXI97r-.mjs"),
	folder: () => import("./folder-C--s5lDj.mjs"),
	"folder-upload-1": () => import("./folder-upload-1-DrM9LboE.mjs"),
	"folder-upload-1-1": () => import("./folder-upload-1-1-DAOXoO7Q.mjs"),
	"full-screen": () => import("./selects.js").then((e) => e.o),
	gift: () => import("./gift-8bwUac1j.mjs"),
	globe: () => import("./globe-DHqVvUYI.mjs"),
	grid: () => import("./grid-mgQBXd6e.mjs"),
	headphones: () => import("./headphones-iAHpZb5P.mjs"),
	help: () => import("./help-DHaZYqjL.mjs"),
	history: () => import("./history-BUens-gb.mjs"),
	home: () => import("./home-hythW0gJ.mjs"),
	image: () => import("./selects.js").then((e) => e.a),
	indent: () => import("./indent-DvS2lzpH.mjs"),
	info: () => import("./info-CKDKSuCA.mjs"),
	interface: () => import("./interface-ClNDU-q2.mjs"),
	key: () => import("./key-BNr_b8dh.mjs"),
	lark: () => import("./lark-CYR7tsIh.mjs"),
	"left-right": () => import("./left-right-itg27o5J.mjs"),
	like: () => import("./like-DiBFF0cz.mjs"),
	link: () => import("./link-Dl29AQD4.mjs"),
	"link-break": () => import("./link-break-dvLFHAv6.mjs"),
	list: () => import("./list-k1cg3_Nt.mjs"),
	loading: () => import("./42938-C_pXs4_-.mjs").then((e) => e.t).then((e) => e.loading_namespaceObject),
	"loading-progress": () => import("./selects.js").then((e) => e.v),
	"log-in": () => import("./log-in-BZ4Afifp.mjs"),
	"log-out": () => import("./log-out-D6vafQW0.mjs"),
	"logo-agentkit": () => import("./logo-agentkit-C0W0IjQz.mjs"),
	"logo-arkclaw": () => import("./logo-arkclaw-DEtdnzAn.mjs"),
	"logo-arkclaw-inverse": () => import("./logo-arkclaw-inverse-JoxaFyX_.mjs"),
	"logo-bytedance": () => import("./logo-bytedance-CHYzPTur.mjs"),
	"logo-bytedance-icon": () => import("./logo-bytedance-icon-DlD01YXc.mjs"),
	"logo-bytedance-icon-inverse": () => import("./logo-bytedance-icon-inverse-5wNYMNEy.mjs"),
	"logo-bytedance-inverse": () => import("./logo-bytedance-inverse-CwU-jsOz.mjs"),
	"logo-byteplus": () => import("./logo-byteplus-xxwN-A8K.mjs"),
	"logo-byteplus-icon": () => import("./logo-byteplus-icon-PP_WKAej.mjs"),
	"logo-byteplus-icon-inverse": () => import("./logo-byteplus-icon-inverse-nOCsbdkf.mjs"),
	"logo-byteplus-inverse": () => import("./logo-byteplus-inverse-CTEVOR5d.mjs"),
	"logo-capcut": () => import("./logo-capcut-CD00a7FW.mjs"),
	"logo-capcut-inverse": () => import("./logo-capcut-inverse-gESa-EjS.mjs"),
	"logo-chatgpt-icon": () => import("./logo-chatgpt-icon-DDSNZ5Wb.mjs"),
	"logo-deepseek-icon": () => import("./logo-deepseek-icon-Csad0IkI.mjs"),
	"logo-doubao-llm": () => import("./logo-doubao-llm-CzGQYaY7.mjs"),
	"logo-doubao-llm-icon": () => import("./logo-doubao-llm-icon-Csx_VR3R.mjs"),
	"logo-douyin": () => import("./logo-douyin-BCiC8s-U.mjs"),
	"logo-douyin-group": () => import("./logo-douyin-group-DRIaFZcv.mjs"),
	"logo-douyin-group-icon": () => import("./logo-douyin-group-icon-GIza_WPL.mjs"),
	"logo-douyin-group-icon-inverse": () => import("./logo-douyin-group-icon-inverse-DodvBUrY.mjs"),
	"logo-douyin-group-inverse": () => import("./logo-douyin-group-inverse-DLRfxFnn.mjs"),
	"logo-douyin-icon": () => import("./logo-douyin-icon-C5wP9VFv.mjs"),
	"logo-douyin-icon-inverse": () => import("./logo-douyin-icon-inverse-R8JiElrn.mjs"),
	"logo-douyin-inverse": () => import("./logo-douyin-inverse-B5Qo-QMQ.mjs"),
	"logo-dreamina": () => import("./logo-dreamina-CIymnE5e.mjs"),
	"logo-dreamina-inverse": () => import("./logo-dreamina-inverse-CCFKIcMS.mjs"),
	"logo-feilian": () => import("./logo-feilian-7-18VpaV.mjs"),
	"logo-feilian-icon": () => import("./logo-feilian-icon-DowQp-It.mjs"),
	"logo-gemini-icon": () => import("./logo-gemini-icon-DtJ2Dxql.mjs"),
	"logo-jianying": () => import("./logo-jianying-BHSxMmvE.mjs"),
	"logo-jianying-icon": () => import("./logo-jianying-icon-D7vn4ka7.mjs"),
	"logo-jianying-icon-inverse": () => import("./logo-jianying-icon-inverse-D7Od3L3b.mjs"),
	"logo-jianying-inverse": () => import("./logo-jianying-inverse-NoFLnB4m.mjs"),
	"logo-jimeng-ai": () => import("./logo-jimeng-ai-Dpg47k7r.mjs"),
	"logo-jimeng-ai-inverse": () => import("./logo-jimeng-ai-inverse-XJ9W7SYE.mjs"),
	"logo-jimeng-icon": () => import("./logo-jimeng-icon-Dw5cWLCN.mjs"),
	"logo-jimeng-icon-inverse": () => import("./logo-jimeng-icon-inverse-9YZnlGBO.mjs"),
	"logo-tiktok": () => import("./logo-tiktok-COeSf1eD.mjs"),
	"logo-tiktok-icon": () => import("./logo-tiktok-icon-C9uFnBAn.mjs"),
	"logo-tiktok-icon-inverse": () => import("./logo-tiktok-icon-inverse-BZ4ub3OO.mjs"),
	"logo-tiktok-inverse": () => import("./logo-tiktok-inverse-BYPJuFby.mjs"),
	"logo-toutiao": () => import("./logo-toutiao-DtEhUF85.mjs"),
	"logo-toutiao-icon": () => import("./logo-toutiao-icon-DV9cy3nB.mjs"),
	"logo-toutiao-icon-inverse": () => import("./logo-toutiao-icon-inverse-CCycCght.mjs"),
	"logo-toutiao-inverse": () => import("./logo-toutiao-inverse-DYuAnQw2.mjs"),
	"logo-trae": () => import("./logo-trae-BCm3KIJw.mjs"),
	"logo-trae-icon": () => import("./logo-trae-icon-CL95S-ip.mjs"),
	"logo-trae-inverse": () => import("./logo-trae-inverse-CPDht0BC.mjs"),
	"logo-vaka": () => import("./logo-vaka-DcfgYECT.mjs"),
	"logo-vaka-icon": () => import("./logo-vaka-icon-B5KOvq0W.mjs"),
	"logo-vaka-inverse": () => import("./logo-vaka-inverse-C__tz0oz.mjs"),
	"logo-viking": () => import("./logo-viking-CI9b2TAE.mjs"),
	"logo-viking-icon": () => import("./logo-viking-icon-rZ-mDvan.mjs"),
	"logo-viking-inverse": () => import("./logo-viking-inverse-CJC_cVq6.mjs"),
	"logo-volcano-engine": () => import("./logo-volcano-engine-DXEOnY02.mjs"),
	"logo-volcano-engine-cn": () => import("./logo-volcano-engine-cn-CLaNwiFL.mjs"),
	"logo-volcano-engine-cn-inverse": () => import("./logo-volcano-engine-cn-inverse-D-TXRT-Y.mjs"),
	"logo-volcano-engine-icon": () => import("./logo-volcano-engine-icon-B31mUovA.mjs"),
	"logo-volcano-engine-icon-inverse": () => import("./logo-volcano-engine-icon-inverse-vYyXTY8E.mjs"),
	"logo-volcano-engine-inverse": () => import("./logo-volcano-engine-inverse-D-tAKPUd.mjs"),
	"logo-volcengine-ark": () => import("./logo-volcengine-ark-VCpXBSqx.mjs"),
	"logo-volcengine-ark-icon": () => import("./logo-volcengine-ark-icon-CXNMM4CR.mjs"),
	"logo-volcengine-translate": () => import("./logo-volcengine-translate--SWMpr1M.mjs"),
	"logo-volcengine-translate-icon": () => import("./logo-volcengine-translate-icon-BnRSAeZQ.mjs"),
	"logo-volcengine-voice": () => import("./logo-volcengine-voice-DPVyIo3t.mjs"),
	"logo-volcengine-voice-icon": () => import("./logo-volcengine-voice-icon-DlymHeVm.mjs"),
	"logo-xingtu": () => import("./logo-xingtu-DRfgDnZz.mjs"),
	"logo-xingtu-icon": () => import("./logo-xingtu-icon-Cx-yiEZc.mjs"),
	"logo-xingtu-icon-inverse": () => import("./logo-xingtu-icon-inverse-xocD2MDh.mjs"),
	"logo-xingtu-inverse": () => import("./logo-xingtu-inverse-DXURwo9F.mjs"),
	mail: () => import("./mail-CgfXnf7P.mjs"),
	menu: () => import("./menu-D1VDH_8n.mjs"),
	"menu-align-left": () => import("./menu-align-left-CdsH34Ui.mjs"),
	"merge-request": () => import("./merge-request-D-1dYa3a.mjs"),
	message: () => import("./message-C9RC6vcj.mjs"),
	"message-circle-plus": () => import("./message-circle-plus-L2iebPKU.mjs"),
	"message-circle-text": () => import("./message-circle-text-BqzEKM8Q.mjs"),
	microphone: () => import("./microphone-BlUW-IvP.mjs"),
	minus: () => import("./minus-DPeNfFI-.mjs"),
	monitor: () => import("./monitor-DpKERQhd.mjs"),
	moon: () => import("./moon-B5aTh--c.mjs"),
	"more-horizontal": () => import("./more-horizontal-DM5lXVrp.mjs"),
	"more-vertical": () => import("./more-vertical-CaSkTQQQ.mjs"),
	music: () => import("./music-CScUC11r.mjs"),
	"open-new-window": () => import("./selects.js").then((e) => e.i),
	pause: () => import("./pause-ePHIsKRy.mjs"),
	"picture-in-picture": () => import("./picture-in-picture-DORcsNBY.mjs"),
	"pie-chart-01": () => import("./pie-chart-01-72PDk-YO.mjs"),
	"pie-chart-03": () => import("./pie-chart-03-CjwjoEmQ.mjs"),
	"play-square": () => import("./play-square-BH5pnj8r.mjs"),
	plugin: () => import("./plugin-Ci2IuIA0.mjs"),
	podcast: () => import("./podcast-Cvw7Lu4d.mjs"),
	popup: () => import("./popup-n-LTRo_e.mjs"),
	preview: () => import("./preview-B35FuB5a.mjs"),
	push: () => import("./push-D-fakW4J.mjs"),
	refresh: () => import("./refresh-DAjw1equ.mjs"),
	robot: () => import("./robot-D61-VrzD.mjs"),
	search: () => import("./selects.js").then((e) => e.r),
	settings: () => import("./settings-CTKOTi76.mjs"),
	"settings-slider-ver": () => import("./settings-slider-ver-hDOl-PF3.mjs"),
	share: () => import("./share-_9nXFHB2.mjs"),
	shrink: () => import("./shrink-CXOjZOGN.mjs"),
	"sidebar-simple-left-square-1": () => import("./sidebar-simple-left-square-1-DFNHXG28.mjs"),
	"sidebar-simple-right-square": () => import("./sidebar-simple-right-square-Dcingbn5.mjs"),
	skill: () => import("./skill-bI0z01Xe.mjs"),
	"square-grid-circle-1": () => import("./square-grid-circle-1-BaqaTTKb.mjs"),
	star: () => import("./star-BF6F-xQF.mjs"),
	"star-filled": () => import("./star-filled-BQr6kV1p.mjs"),
	success: () => import("./success-DKJ0nOP2.mjs"),
	sun: () => import("./sun-5PiGoXBE.mjs"),
	sync: () => import("./sync-HdcIBk4a.mjs"),
	telescope: () => import("./telescope-EqUZh_86.mjs"),
	terminal: () => import("./terminal-BqVnaPCj.mjs"),
	"thumb-down-filled": () => import("./thumb-down-filled-C0Km4fqv.mjs"),
	"thumb-up-filled": () => import("./thumb-up-filled-_t8fplAt.mjs"),
	"time-clock": () => import("./time-clock-nzNO3qLJ.mjs"),
	tool: () => import("./selects.js").then((e) => e.n),
	"trash-03": () => import("./trash-03-CEstDIru.mjs"),
	"type-audio-state-default": () => import("./type-audio-state-default-Dn-MpRrm.mjs"),
	"type-audio-state-disable": () => import("./type-audio-state-disable-DDTW8lMq.mjs"),
	"type-chart-state-default": () => import("./type-chart-state-default-g_vFtyxV.mjs"),
	"type-chart-state-disable": () => import("./type-chart-state-disable-DlQFxVG1.mjs"),
	"type-code-state-default": () => import("./type-code-state-default-4gdm0TSa.mjs"),
	"type-code-state-disable": () => import("./type-code-state-disable-HB3GFqYR.mjs"),
	"type-excel-state-default": () => import("./type-excel-state-default-DYjgUTao.mjs"),
	"type-excel-state-disable": () => import("./type-excel-state-disable-BhLGlH8t.mjs"),
	"type-html-state-default": () => import("./type-html-state-default-CV5Ua-mk.mjs"),
	"type-html-state-disable": () => import("./type-html-state-disable-BYKuR0zq.mjs"),
	"type-image-state-default": () => import("./type-image-state-default-DsWSLPTB.mjs"),
	"type-image-state-disable": () => import("./type-image-state-disable-BIZDl2OF.mjs"),
	"type-md-state-default": () => import("./type-md-state-default-CDNKBOLn.mjs"),
	"type-md-state-disable": () => import("./type-md-state-disable-CBEWMzFO.mjs"),
	"type-mind-state-default": () => import("./type-mind-state-default-CDX6PiCf.mjs"),
	"type-mind-state-disable": () => import("./type-mind-state-disable-sMROFQ8W.mjs"),
	"type-multi-dimensional-table-state-default": () => import("./type-multi-dimensional-table-state-default-CgMzNor-.mjs"),
	"type-multi-dimensional-table-state-disable": () => import("./type-multi-dimensional-table-state-disable-DbW8Qrs6.mjs"),
	"type-pdf-state-default": () => import("./type-pdf-state-default-r_WaqQ4C.mjs"),
	"type-pdf-state-disable": () => import("./type-pdf-state-disable-OKirXf65.mjs"),
	"type-ppt-state-default": () => import("./type-ppt-state-default-Cyme0hb6.mjs"),
	"type-ppt-state-disable": () => import("./type-ppt-state-disable-DnRUM5l7.mjs"),
	"type-video-state-default": () => import("./type-video-state-default-DpZS-ZKZ.mjs"),
	"type-video-state-disable": () => import("./type-video-state-disable-B_qHIE2Z.mjs"),
	"type-word-state-default": () => import("./type-word-state-default-CbgVGdYg.mjs"),
	"type-word-state-disable": () => import("./type-word-state-disable-BtUuiRp9.mjs"),
	"type-zip-state-default": () => import("./type-zip-state-default-R5JBiJx4.mjs"),
	"type-zip-state-disable": () => import("./type-zip-state-disable-DkXWIoi2.mjs"),
	"unfold-less": () => import("./unfold-less-Bvt7D9Wd.mjs"),
	"unfold-more": () => import("./unfold-more-DaNUIg6E.mjs"),
	"unknown-file": () => import("./unknown-file-BuwJ7P-c.mjs"),
	"unknown-file-disabled": () => import("./unknown-file-disabled-CvPfrO3v.mjs"),
	upload: () => import("./upload-CxMGmQA8.mjs"),
	"upload-video": () => import("./upload-video-Cui4b8ck.mjs"),
	user: () => import("./user-DpQBBC3e.mjs"),
	"user-02": () => import("./user-02-D3BNBc4a.mjs"),
	"user-filled": () => import("./user-filled-D-qQX5FY.mjs"),
	vector: () => import("./vector-BjrFEwxV.mjs"),
	voice: () => import("./voice-C8yi4Nxf.mjs"),
	volume: () => import("./volume-CA3vLStK.mjs"),
	"volume-max": () => import("./volume-max-C_Sp0Oj7.mjs"),
	warning: () => import("./selects.js").then((e) => e.t),
	"x-circle": () => import("./selects.js").then((e) => e.m),
	"zoom-in": () => import("./zoom-in-h2qWzwNQ.mjs"),
	"zoom-out": () => import("./zoom-out-BDIl1hD3.mjs")
};
function k(e, t) {
	if (!e || typeof e != "object") return !1;
	let n = e;
	return n.name === t && typeof n.svg == "string";
}
function A(e, t) {
	return Object.values(e).find((e) => k(e, t));
}
function j(e) {
	return O[e]();
}
function M(e) {
	return T.has(e);
}
function N() {
	return w;
}
function P(e) {
	let t = D.get(e);
	if (t) return b(e) || _(t), Promise.resolve(t);
	let n = y(e);
	if (n) return D.set(e, n), Promise.resolve(n);
	let r = E.get(e);
	return r || (r = j(e).then((t) => {
		let n = A(t, e) ?? y(e);
		if (!n) throw Error(`Built-in icon "${e}" failed to register.`);
		D.set(e, n);
	}).catch((t) => {
		throw E.delete(e), t;
	}), E.set(e, r)), r.then(() => {
		let t = D.get(e) ?? y(e);
		if (!t) throw Error(`Built-in icon "${e}" failed to load.`);
		return t;
	});
}
function F(e) {
	return Promise.all(e.map((e) => P(e)));
}
function I() {
	return F(w);
}
//#endregion
export { g as a, v as c, l as d, x as i, o as l, M as n, y as o, P as r, _ as s, S as t, s as u };
