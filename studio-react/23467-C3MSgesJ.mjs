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
	add: () => import("./add-DvlNJHjQ.mjs"),
	"add-image": () => import("./add-image-Cud8Liuj.mjs"),
	"align-center": () => import("./align-center-BPEH_F2L.mjs"),
	"align-left": () => import("./align-left-V1sG-kfc.mjs"),
	"align-right": () => import("./align-right-AblJ8haT.mjs"),
	"arrow-circle-up": () => import("./arrow-circle-up-DkOkQA4N.mjs"),
	"arrow-down-md": () => import("./arrow-down-md-BkT3mniz.mjs"),
	"arrow-down-sm": () => import("./arrow-down-sm-DNCC66AQ.mjs"),
	"arrow-left-md": () => import("./arrow-left-md-BPqKJVB1.mjs"),
	"arrow-left-sm": () => import("./arrow-left-sm-B_s5oRgC.mjs"),
	"arrow-right-md": () => import("./arrow-right-md-DA1cluo5.mjs"),
	"arrow-right-sm": () => import("./arrow-right-sm-DOMh-hEZ.mjs"),
	"arrow-undo-up-left": () => import("./arrow-undo-up-left-ADyVVlFh.mjs"),
	"arrow-undo-up-right": () => import("./arrow-undo-up-right-B0CPzUe9.mjs"),
	"arrow-up-md": () => import("./arrow-up-md-B_aMM6BB.mjs"),
	"arrow-up-sm": () => import("./arrow-up-sm-IOEAhDB7.mjs"),
	atom: () => import("./atom-Bh49ioed.mjs"),
	"atom-02": () => import("./atom-02-BasBcUil.mjs"),
	attachment: () => import("./attachment-DhBd3r1X.mjs"),
	bell: () => import("./bell-BAZNxXD1.mjs"),
	"book-open-01": () => import("./book-open-01-B0S1_0k2.mjs"),
	bookmark: () => import("./bookmark-LnAKrbv3.mjs"),
	brackets: () => import("./brackets-Bmeg5__V.mjs"),
	chart: () => import("./chart-B7RMOOPT.mjs"),
	"chart-pie": () => import("./chart-pie-DWwz_zK2.mjs"),
	"chat-circle": () => import("./chat-circle-JqBLx08u.mjs"),
	check: () => import("./76270-ROgfq5zg.mjs").then((e) => e.t).then((e) => e.check_namespaceObject),
	"check-circle": () => import("./check-circle-BLgk-OAk.mjs"),
	"chevron-down-md": () => import("./chevron-down-md-CxIqKXTY.mjs"),
	"chevron-down-sm": () => import("./67641-Yd6KmUJU.mjs").then((e) => e.t).then((e) => e.chevron_down_sm_namespaceObject),
	"chevron-left-md": () => import("./chevron-left-md-BaMDgJR7.mjs"),
	"chevron-left-sm": () => import("./chevron-left-sm-BvpN-fQn.mjs"),
	"chevron-right-md": () => import("./chevron-right-md-DoZ40M3J.mjs"),
	"chevron-right-sm": () => import("./chevron-right-sm-bpm26qMH.mjs"),
	"chevron-up-md": () => import("./chevron-up-md-iPwdKVc5.mjs"),
	"chevron-up-sm": () => import("./chevron-up-sm-BvK6gIlu.mjs").then((e) => e.n),
	close: () => import("./close-BKUCEgoW.mjs").then((e) => e.n),
	code: () => import("./code-BYXHiE9J.mjs"),
	command: () => import("./command-C5RYSX0G.mjs"),
	"compass-round-1": () => import("./compass-round-1-D3rrj9bH.mjs"),
	copy: () => import("./copy-DJcakwlA.mjs"),
	"corner-down-left": () => import("./corner-down-left-CX3TbSUY.mjs"),
	"corner-down-right": () => import("./corner-down-right-DLplLCgj.mjs"),
	database: () => import("./database-Cl_1StWI.mjs"),
	"date-calendar": () => import("./date-calendar-DgV4IakO.mjs"),
	dislike: () => import("./dislike-D-U2og0q.mjs"),
	document: () => import("./document-C3ywiPT4.mjs"),
	"down-up": () => import("./down-up-QMaqc6Cy.mjs"),
	download: () => import("./download-BL_BVSbt.mjs"),
	drag: () => import("./drag-CmVEhF7w.mjs"),
	edit: () => import("./edit-CIGc9rWL.mjs"),
	"emoji-profile": () => import("./emoji-profile-0loEuDGT.mjs"),
	end: () => import("./end-DdM5sRz0.mjs"),
	error: () => import("./error-Bgf8_iFv.mjs"),
	"exit-full-screen": () => import("./exit-full-screen-BiwqTLiX.mjs"),
	expand: () => import("./expand-DFIh9VJi.mjs"),
	face: () => import("./face-UAs4_6S_.mjs"),
	file: () => import("./file-m2FreWIg.mjs"),
	"file-attachment": () => import("./file-attachment-D2xhPFC_.mjs"),
	"file-check": () => import("./file-check-C6FeUsTO.mjs"),
	filter: () => import("./filter-dp3jvYA5.mjs"),
	folder: () => import("./folder-BSSBGIF5.mjs"),
	"folder-upload-1": () => import("./folder-upload-1-cqja198y.mjs"),
	"folder-upload-1-1": () => import("./folder-upload-1-1-D5UA6Ime.mjs"),
	"full-screen": () => import("./full-screen-QRKJmksv.mjs"),
	gift: () => import("./gift-Bg948wq9.mjs"),
	globe: () => import("./globe-DJyZQh2y.mjs"),
	grid: () => import("./grid-mlC7sLUB.mjs"),
	headphones: () => import("./headphones-DJmM6JIw.mjs"),
	help: () => import("./help-BPdARzcY.mjs"),
	history: () => import("./history-COs6_3Qp.mjs"),
	home: () => import("./home-DjcWJ1yn.mjs"),
	image: () => import("./image-DjWXNcbv.mjs"),
	indent: () => import("./indent-bbujfSEg.mjs"),
	info: () => import("./info-DILnjCyJ.mjs"),
	interface: () => import("./interface-DBmlq-mC.mjs"),
	key: () => import("./key-BIM6bHnb.mjs"),
	lark: () => import("./lark-DXbxNA1e.mjs"),
	"left-right": () => import("./left-right--KaXngiw.mjs"),
	like: () => import("./like-CW1yj7BI.mjs"),
	link: () => import("./link-DAHhkei2.mjs"),
	"link-break": () => import("./link-break-RTogVrHn.mjs"),
	list: () => import("./list-yTHRBJuI.mjs"),
	loading: () => import("./42938-0pT3Gcub.mjs").then((e) => e.loading_namespaceObject),
	"loading-progress": () => import("./loading-progress-BlyBb5UU.mjs").then((e) => e.n),
	"log-in": () => import("./log-in-B0FHOx1w.mjs"),
	"log-out": () => import("./log-out-CBAnTCJZ.mjs"),
	"logo-agentkit": () => import("./logo-agentkit-W1TB_d_9.mjs"),
	"logo-arkclaw": () => import("./logo-arkclaw-Dm3x4mX-.mjs"),
	"logo-arkclaw-inverse": () => import("./logo-arkclaw-inverse-CnkbEFr7.mjs"),
	"logo-bytedance": () => import("./logo-bytedance-CrB6eby0.mjs"),
	"logo-bytedance-icon": () => import("./logo-bytedance-icon-B4QFMVvN.mjs"),
	"logo-bytedance-icon-inverse": () => import("./logo-bytedance-icon-inverse-ywbx5GIU.mjs"),
	"logo-bytedance-inverse": () => import("./logo-bytedance-inverse-CbL4jT71.mjs"),
	"logo-byteplus": () => import("./logo-byteplus-or5PVpgq.mjs"),
	"logo-byteplus-icon": () => import("./logo-byteplus-icon-Da48b2Lp.mjs"),
	"logo-byteplus-icon-inverse": () => import("./logo-byteplus-icon-inverse-N3Hw3Jvz.mjs"),
	"logo-byteplus-inverse": () => import("./logo-byteplus-inverse-BV3Do0bA.mjs"),
	"logo-capcut": () => import("./logo-capcut-DRlX5HQD.mjs"),
	"logo-capcut-inverse": () => import("./logo-capcut-inverse-D25qiXwS.mjs"),
	"logo-chatgpt-icon": () => import("./logo-chatgpt-icon-B79n8Jiq.mjs"),
	"logo-deepseek-icon": () => import("./logo-deepseek-icon-DVo148Ee.mjs"),
	"logo-doubao-llm": () => import("./logo-doubao-llm-xaCUa1EG.mjs"),
	"logo-doubao-llm-icon": () => import("./logo-doubao-llm-icon-C4aV7D6b.mjs"),
	"logo-douyin": () => import("./logo-douyin-B9-X7VSM.mjs"),
	"logo-douyin-group": () => import("./logo-douyin-group-bUGi0lln.mjs"),
	"logo-douyin-group-icon": () => import("./logo-douyin-group-icon-DNKxHYZt.mjs"),
	"logo-douyin-group-icon-inverse": () => import("./logo-douyin-group-icon-inverse-CXoXFfbH.mjs"),
	"logo-douyin-group-inverse": () => import("./logo-douyin-group-inverse-ROF5RmBm.mjs"),
	"logo-douyin-icon": () => import("./logo-douyin-icon-BI6Iv8Hq.mjs"),
	"logo-douyin-icon-inverse": () => import("./logo-douyin-icon-inverse-CMbL4OBi.mjs"),
	"logo-douyin-inverse": () => import("./logo-douyin-inverse-DSwUpm-L.mjs"),
	"logo-dreamina": () => import("./logo-dreamina-BciByHf4.mjs"),
	"logo-dreamina-inverse": () => import("./logo-dreamina-inverse-C44qKzrw.mjs"),
	"logo-feilian": () => import("./logo-feilian-BfijEIyi.mjs"),
	"logo-feilian-icon": () => import("./logo-feilian-icon-DhI3gmew.mjs"),
	"logo-gemini-icon": () => import("./logo-gemini-icon-DZ9TsWDE.mjs"),
	"logo-jianying": () => import("./logo-jianying-CIxK4hr5.mjs"),
	"logo-jianying-icon": () => import("./logo-jianying-icon-LFe374VH.mjs"),
	"logo-jianying-icon-inverse": () => import("./logo-jianying-icon-inverse-C3iituC9.mjs"),
	"logo-jianying-inverse": () => import("./logo-jianying-inverse-BsM24bRC.mjs"),
	"logo-jimeng-ai": () => import("./logo-jimeng-ai-Clflo4TN.mjs"),
	"logo-jimeng-ai-inverse": () => import("./logo-jimeng-ai-inverse-BXKKqYAM.mjs"),
	"logo-jimeng-icon": () => import("./logo-jimeng-icon-7DcWEXBz.mjs"),
	"logo-jimeng-icon-inverse": () => import("./logo-jimeng-icon-inverse-CAphJG64.mjs"),
	"logo-tiktok": () => import("./logo-tiktok-D0nBDZrw.mjs"),
	"logo-tiktok-icon": () => import("./logo-tiktok-icon-D-RyV_QD.mjs"),
	"logo-tiktok-icon-inverse": () => import("./logo-tiktok-icon-inverse-BqKf6pnD.mjs"),
	"logo-tiktok-inverse": () => import("./logo-tiktok-inverse-BB5Zz_YW.mjs"),
	"logo-toutiao": () => import("./logo-toutiao-B21CH2AC.mjs"),
	"logo-toutiao-icon": () => import("./logo-toutiao-icon-C0tfMOIs.mjs"),
	"logo-toutiao-icon-inverse": () => import("./logo-toutiao-icon-inverse-CCSE654B.mjs"),
	"logo-toutiao-inverse": () => import("./logo-toutiao-inverse-CTCs0WP1.mjs"),
	"logo-trae": () => import("./logo-trae-DBtR18_y.mjs"),
	"logo-trae-icon": () => import("./logo-trae-icon-4ooWBMwI.mjs"),
	"logo-trae-inverse": () => import("./logo-trae-inverse-CYI6xkRn.mjs"),
	"logo-vaka": () => import("./logo-vaka-B_bypXVO.mjs"),
	"logo-vaka-icon": () => import("./logo-vaka-icon-BtdiD2J9.mjs"),
	"logo-vaka-inverse": () => import("./logo-vaka-inverse-Swl4fChS.mjs"),
	"logo-viking": () => import("./logo-viking-DW8m5d6s.mjs"),
	"logo-viking-icon": () => import("./logo-viking-icon-DFUhMvSo.mjs"),
	"logo-viking-inverse": () => import("./logo-viking-inverse-CZ1qxRe_.mjs"),
	"logo-volcano-engine": () => import("./logo-volcano-engine-D780fSPK.mjs"),
	"logo-volcano-engine-cn": () => import("./logo-volcano-engine-cn-DpHGGpci.mjs"),
	"logo-volcano-engine-cn-inverse": () => import("./logo-volcano-engine-cn-inverse-DaICCKCW.mjs"),
	"logo-volcano-engine-icon": () => import("./logo-volcano-engine-icon-BOjFrU3U.mjs"),
	"logo-volcano-engine-icon-inverse": () => import("./logo-volcano-engine-icon-inverse-Bo2ogILR.mjs"),
	"logo-volcano-engine-inverse": () => import("./logo-volcano-engine-inverse-CjbX24tn.mjs"),
	"logo-volcengine-ark": () => import("./logo-volcengine-ark-D9Xz7UzO.mjs"),
	"logo-volcengine-ark-icon": () => import("./logo-volcengine-ark-icon-Y_O1vLlx.mjs"),
	"logo-volcengine-translate": () => import("./logo-volcengine-translate-DLrdTR3L.mjs"),
	"logo-volcengine-translate-icon": () => import("./logo-volcengine-translate-icon-BA9DCfuY.mjs"),
	"logo-volcengine-voice": () => import("./logo-volcengine-voice-B76uQaUy.mjs"),
	"logo-volcengine-voice-icon": () => import("./logo-volcengine-voice-icon-D6aIPkiC.mjs"),
	"logo-xingtu": () => import("./logo-xingtu-DxZNCeVv.mjs"),
	"logo-xingtu-icon": () => import("./logo-xingtu-icon-DoRAaQot.mjs"),
	"logo-xingtu-icon-inverse": () => import("./logo-xingtu-icon-inverse-CbWI8zzb.mjs"),
	"logo-xingtu-inverse": () => import("./logo-xingtu-inverse-CEqECR9j.mjs"),
	mail: () => import("./mail-Wop2aQ64.mjs"),
	menu: () => import("./menu-DmAELdH5.mjs"),
	"menu-align-left": () => import("./menu-align-left-CFOMUHVv.mjs"),
	"merge-request": () => import("./merge-request-sOW1dba1.mjs"),
	message: () => import("./message-CXoS_I9z.mjs"),
	"message-circle-plus": () => import("./message-circle-plus-YTVG73q_.mjs"),
	"message-circle-text": () => import("./message-circle-text-CcQb9LDS.mjs"),
	microphone: () => import("./microphone-4AcpXXF2.mjs"),
	minus: () => import("./minus-G6qJHfQn.mjs"),
	monitor: () => import("./monitor-DRp9Bt17.mjs"),
	moon: () => import("./moon-BkeXb86L.mjs"),
	"more-horizontal": () => import("./more-horizontal-yO557ZbQ.mjs"),
	"more-vertical": () => import("./more-vertical-BjSqhKAU.mjs"),
	music: () => import("./music-Cxzo6oWD.mjs"),
	"open-new-window": () => import("./open-new-window-DZNxvOx9.mjs"),
	pause: () => import("./pause-Bg-LfiBu.mjs"),
	"picture-in-picture": () => import("./picture-in-picture-OwRJY889.mjs"),
	"pie-chart-01": () => import("./pie-chart-01-BMT45NLg.mjs"),
	"pie-chart-03": () => import("./pie-chart-03-BCv-Dh-f.mjs"),
	"play-square": () => import("./play-square-RXpdRUgE.mjs"),
	plugin: () => import("./plugin-Bl-Px6E7.mjs"),
	podcast: () => import("./podcast-CnD86uOi.mjs"),
	popup: () => import("./popup-CmIxpcqi.mjs"),
	preview: () => import("./preview-BVhRcec8.mjs"),
	push: () => import("./push-Bc2zS_M5.mjs"),
	refresh: () => import("./refresh-B9OAcweg.mjs"),
	robot: () => import("./robot-DZKPOt2G.mjs"),
	search: () => import("./search-XSgMEepM.mjs"),
	settings: () => import("./settings-Blqb5H-G.mjs"),
	"settings-slider-ver": () => import("./settings-slider-ver-BWNaSUqr.mjs"),
	share: () => import("./share-CU9DdppA.mjs"),
	shrink: () => import("./shrink-CjJ_9gh2.mjs"),
	"sidebar-simple-left-square-1": () => import("./sidebar-simple-left-square-1-BOUuB3Lm.mjs"),
	"sidebar-simple-right-square": () => import("./sidebar-simple-right-square-CdlU8201.mjs"),
	skill: () => import("./skill-CofbqvMv.mjs"),
	"square-grid-circle-1": () => import("./square-grid-circle-1-Dub97TAR.mjs"),
	star: () => import("./star-BmfNMh--.mjs"),
	"star-filled": () => import("./star-filled-DA5oE-CM.mjs"),
	success: () => import("./success-Cp43AVDO.mjs"),
	sun: () => import("./sun-Dkchu1JS.mjs"),
	sync: () => import("./sync-ndYSeF3z.mjs"),
	telescope: () => import("./telescope-2WZYBETh.mjs"),
	terminal: () => import("./terminal-DHRr0gZi.mjs"),
	"thumb-down-filled": () => import("./thumb-down-filled-Mor2fxTH.mjs"),
	"thumb-up-filled": () => import("./thumb-up-filled-Bb1bzQXK.mjs"),
	"time-clock": () => import("./time-clock-CWM1Y2R4.mjs"),
	tool: () => import("./tool-BU7Lc7Py.mjs"),
	"trash-03": () => import("./trash-03-DP0ZqQ7l.mjs"),
	"type-audio-state-default": () => import("./type-audio-state-default-DscZzakM.mjs"),
	"type-audio-state-disable": () => import("./type-audio-state-disable-x1-U67oX.mjs"),
	"type-chart-state-default": () => import("./type-chart-state-default-gEyJNfFm.mjs"),
	"type-chart-state-disable": () => import("./type-chart-state-disable-BGrE61GV.mjs"),
	"type-code-state-default": () => import("./type-code-state-default-BZFL4kdy.mjs"),
	"type-code-state-disable": () => import("./type-code-state-disable-JemKMX3y.mjs"),
	"type-excel-state-default": () => import("./type-excel-state-default-B3B45Spx.mjs"),
	"type-excel-state-disable": () => import("./type-excel-state-disable-BQR9V2W1.mjs"),
	"type-html-state-default": () => import("./type-html-state-default-COGjMlrj.mjs"),
	"type-html-state-disable": () => import("./type-html-state-disable-Bu1B5yBN.mjs"),
	"type-image-state-default": () => import("./type-image-state-default-Bs4RvxLT.mjs"),
	"type-image-state-disable": () => import("./type-image-state-disable-sU7dhwxI.mjs"),
	"type-md-state-default": () => import("./type-md-state-default-Dfqr7DrG.mjs"),
	"type-md-state-disable": () => import("./type-md-state-disable-Da-vyLWO.mjs"),
	"type-mind-state-default": () => import("./type-mind-state-default-DGwBWzGf.mjs"),
	"type-mind-state-disable": () => import("./type-mind-state-disable-BhQOgifn.mjs"),
	"type-multi-dimensional-table-state-default": () => import("./type-multi-dimensional-table-state-default-DtVA2L4p.mjs"),
	"type-multi-dimensional-table-state-disable": () => import("./type-multi-dimensional-table-state-disable-DBi8PU4K.mjs"),
	"type-pdf-state-default": () => import("./type-pdf-state-default-DGqK8I42.mjs"),
	"type-pdf-state-disable": () => import("./type-pdf-state-disable-n1A6tEdO.mjs"),
	"type-ppt-state-default": () => import("./type-ppt-state-default-BgA3Q7Pv.mjs"),
	"type-ppt-state-disable": () => import("./type-ppt-state-disable-BHVi9bpM.mjs"),
	"type-video-state-default": () => import("./type-video-state-default-B7j3IQ3_.mjs"),
	"type-video-state-disable": () => import("./type-video-state-disable-COM_GHDb.mjs"),
	"type-word-state-default": () => import("./type-word-state-default-CMHnsFsC.mjs"),
	"type-word-state-disable": () => import("./type-word-state-disable-CLHeOiuR.mjs"),
	"type-zip-state-default": () => import("./type-zip-state-default-B92L-tWv.mjs"),
	"type-zip-state-disable": () => import("./type-zip-state-disable-3QKZL066.mjs"),
	"unfold-less": () => import("./unfold-less-D89VBdpc.mjs"),
	"unfold-more": () => import("./unfold-more-qJHqBAQo.mjs"),
	"unknown-file": () => import("./unknown-file-BSXT7ZK2.mjs"),
	"unknown-file-disabled": () => import("./unknown-file-disabled-CCvvImaq.mjs"),
	upload: () => import("./upload-Cr8zZjr6.mjs"),
	"upload-video": () => import("./upload-video-Cd9baopn.mjs"),
	user: () => import("./user-CnDO5plS.mjs"),
	"user-02": () => import("./user-02-CPCdzfzB.mjs"),
	"user-filled": () => import("./user-filled-BxQvZeGd.mjs"),
	vector: () => import("./vector-2GotOrXU.mjs"),
	voice: () => import("./voice-BhdFwgtk.mjs"),
	volume: () => import("./volume-CcqzB_xE.mjs"),
	"volume-max": () => import("./volume-max-C4hTqEpD.mjs"),
	warning: () => import("./warning-uEEP4NLX.mjs"),
	"x-circle": () => import("./x-circle-DQ0nmhDh.mjs"),
	"zoom-in": () => import("./zoom-in-DH0gvi0B.mjs"),
	"zoom-out": () => import("./zoom-out-D7KB5LBL.mjs")
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
