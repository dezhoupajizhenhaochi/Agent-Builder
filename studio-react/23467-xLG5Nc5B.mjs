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
	add: () => import("./add-XTIHMJSN.mjs"),
	"add-image": () => import("./add-image-GkdYWg8j.mjs"),
	"align-center": () => import("./align-center-Ddwc16A1.mjs"),
	"align-left": () => import("./align-left-Dm6PIUeO.mjs"),
	"align-right": () => import("./align-right-BfC07bP7.mjs"),
	"arrow-circle-up": () => import("./arrow-circle-up-mdwhxBkv.mjs"),
	"arrow-down-md": () => import("./arrow-down-md-_Gk7mm0I.mjs"),
	"arrow-down-sm": () => import("./arrow-down-sm-CEspcCRT.mjs"),
	"arrow-left-md": () => import("./arrow-left-md-BTAFARan.mjs"),
	"arrow-left-sm": () => import("./arrow-left-sm-Bkofmw-W.mjs"),
	"arrow-right-md": () => import("./arrow-right-md-CqPejwJP.mjs"),
	"arrow-right-sm": () => import("./arrow-right-sm-hSjpcYYR.mjs"),
	"arrow-undo-up-left": () => import("./arrow-undo-up-left-DqyXF9yO.mjs"),
	"arrow-undo-up-right": () => import("./arrow-undo-up-right-BTdG4pHE.mjs"),
	"arrow-up-md": () => import("./arrow-up-md-B_syKrub.mjs"),
	"arrow-up-sm": () => import("./arrow-up-sm-DvDrSOSZ.mjs"),
	atom: () => import("./selects.js").then((e) => e.a),
	"atom-02": () => import("./atom-02-DHmqgHNp.mjs"),
	attachment: () => import("./attachment-Bzab47Fe.mjs"),
	bell: () => import("./bell-BvT1g5V2.mjs"),
	"book-open-01": () => import("./book-open-01-C_hFVblt.mjs"),
	bookmark: () => import("./bookmark-I14il9IG.mjs"),
	brackets: () => import("./brackets-CsT3T9xr.mjs"),
	chart: () => import("./chart-CO70PQv2.mjs"),
	"chart-pie": () => import("./chart-pie-CSaslgCG.mjs"),
	"chat-circle": () => import("./chat-circle-D0d-Ch-I.mjs"),
	check: () => import("./selects.js").then((e) => e.p).then((e) => e.check_namespaceObject),
	"check-circle": () => import("./selects.js").then((e) => e.s),
	"chevron-down-md": () => import("./chevron-down-md-CMGnHBT2.mjs"),
	"chevron-down-sm": () => import("./selects.js").then((e) => e.c).then((e) => e.chevron_down_sm_namespaceObject),
	"chevron-left-md": () => import("./chevron-left-md-CyNivFeI.mjs"),
	"chevron-left-sm": () => import("./chevron-left-sm-CXssLiLK.mjs"),
	"chevron-right-md": () => import("./chevron-right-md-wheNBOqM.mjs"),
	"chevron-right-sm": () => import("./chevron-right-sm-B6Ohpbeg.mjs"),
	"chevron-up-md": () => import("./chevron-up-md-B9NOrmkF.mjs"),
	"chevron-up-sm": () => import("./selects.js").then((e) => e.l),
	close: () => import("./close-D8GzkOJu.mjs").then((e) => e.n),
	code: () => import("./code-DsBu9jq3.mjs"),
	command: () => import("./command-DX6Rz4J-.mjs"),
	"compass-round-1": () => import("./compass-round-1-C7tWZGLz.mjs"),
	copy: () => import("./selects.js").then((e) => e.f),
	"corner-down-left": () => import("./corner-down-left-0iHittw0.mjs"),
	"corner-down-right": () => import("./corner-down-right-DLaGfZyL.mjs"),
	database: () => import("./database-CXQMgx-d.mjs"),
	"date-calendar": () => import("./date-calendar-CY9qpnbm.mjs"),
	dislike: () => import("./dislike-DirJJt6q.mjs"),
	document: () => import("./document-BAwNj33H.mjs"),
	"down-up": () => import("./down-up-DXPl-rOB.mjs"),
	download: () => import("./selects.js").then((e) => e.d),
	drag: () => import("./drag-CTtKfZ8L.mjs"),
	edit: () => import("./edit-Dp0cMdrB.mjs"),
	"emoji-profile": () => import("./emoji-profile-BSOzx0Ux.mjs"),
	end: () => import("./end-BDSyyx9G.mjs"),
	error: () => import("./error-BkoRqtAl.mjs"),
	"exit-full-screen": () => import("./exit-full-screen-Dk-GeyFC.mjs"),
	expand: () => import("./expand-CwmVQa0m.mjs"),
	face: () => import("./face-DfWg5xtq.mjs"),
	file: () => import("./file-FcXweY46.mjs"),
	"file-attachment": () => import("./file-attachment-C8-LSkcZ.mjs"),
	"file-check": () => import("./selects.js").then((e) => e.i),
	filter: () => import("./filter-CTZZ0CSI.mjs"),
	folder: () => import("./folder-Bk1CGEjH.mjs"),
	"folder-upload-1": () => import("./folder-upload-1-o8zK4xrQ.mjs"),
	"folder-upload-1-1": () => import("./folder-upload-1-1-B1u87OXM.mjs"),
	"full-screen": () => import("./full-screen-ek8UvsSR.mjs"),
	gift: () => import("./gift-DJU5P2sU.mjs"),
	globe: () => import("./globe-9zOGK6aZ.mjs"),
	grid: () => import("./grid-0_tDPBql.mjs"),
	headphones: () => import("./headphones-D69MwOrY.mjs"),
	help: () => import("./help-DPepojAv.mjs"),
	history: () => import("./history-DuH82gww.mjs"),
	home: () => import("./home-Bat-OBxG.mjs"),
	image: () => import("./image-C8TheF2s.mjs"),
	indent: () => import("./indent-BlJ3xuyr.mjs"),
	info: () => import("./info-D3w-175a.mjs"),
	interface: () => import("./interface-C6VMc_Xj.mjs"),
	key: () => import("./key-D8usUhgE.mjs"),
	lark: () => import("./lark-DAqHGb35.mjs"),
	"left-right": () => import("./left-right-DP9n8vvz.mjs"),
	like: () => import("./like-xT8nv9u_.mjs"),
	link: () => import("./link-D_QJXKlI.mjs"),
	"link-break": () => import("./link-break-DJkXolwj.mjs"),
	list: () => import("./list-NrogLZw2.mjs"),
	loading: () => import("./42938-D4jBSEU2.mjs").then((e) => e.t).then((e) => e.loading_namespaceObject),
	"loading-progress": () => import("./selects.js").then((e) => e.u),
	"log-in": () => import("./log-in-DXHXBCqg.mjs"),
	"log-out": () => import("./log-out-4IZq_ffX.mjs"),
	"logo-agentkit": () => import("./logo-agentkit-CXBxgYHS.mjs"),
	"logo-arkclaw": () => import("./logo-arkclaw-CU11EP_A.mjs"),
	"logo-arkclaw-inverse": () => import("./logo-arkclaw-inverse-C6ySUIC8.mjs"),
	"logo-bytedance": () => import("./logo-bytedance-VzYP_uj0.mjs"),
	"logo-bytedance-icon": () => import("./logo-bytedance-icon-BUkcYL4u.mjs"),
	"logo-bytedance-icon-inverse": () => import("./logo-bytedance-icon-inverse-BCZ0LKBg.mjs"),
	"logo-bytedance-inverse": () => import("./logo-bytedance-inverse-DIEZbPkj.mjs"),
	"logo-byteplus": () => import("./logo-byteplus-LsmDJqZ7.mjs"),
	"logo-byteplus-icon": () => import("./logo-byteplus-icon-CSa1xOAq.mjs"),
	"logo-byteplus-icon-inverse": () => import("./logo-byteplus-icon-inverse-B_221blX.mjs"),
	"logo-byteplus-inverse": () => import("./logo-byteplus-inverse-zEAeH_oY.mjs"),
	"logo-capcut": () => import("./logo-capcut-C2_7j9KT.mjs"),
	"logo-capcut-inverse": () => import("./logo-capcut-inverse-CXOahvHx.mjs"),
	"logo-chatgpt-icon": () => import("./logo-chatgpt-icon-CSasAMwf.mjs"),
	"logo-deepseek-icon": () => import("./logo-deepseek-icon-CHGusXTy.mjs"),
	"logo-doubao-llm": () => import("./logo-doubao-llm-Ca_O1QMG.mjs"),
	"logo-doubao-llm-icon": () => import("./logo-doubao-llm-icon-CIul2ugb.mjs"),
	"logo-douyin": () => import("./logo-douyin-DjazvKdB.mjs"),
	"logo-douyin-group": () => import("./logo-douyin-group-DHHslI63.mjs"),
	"logo-douyin-group-icon": () => import("./logo-douyin-group-icon-B0lj6-de.mjs"),
	"logo-douyin-group-icon-inverse": () => import("./logo-douyin-group-icon-inverse-BWtq-nA0.mjs"),
	"logo-douyin-group-inverse": () => import("./logo-douyin-group-inverse-0pzzQH5v.mjs"),
	"logo-douyin-icon": () => import("./logo-douyin-icon-DMbScqQR.mjs"),
	"logo-douyin-icon-inverse": () => import("./logo-douyin-icon-inverse-BDub68rQ.mjs"),
	"logo-douyin-inverse": () => import("./logo-douyin-inverse-BD7_Mq7z.mjs"),
	"logo-dreamina": () => import("./logo-dreamina-BO-a9t4K.mjs"),
	"logo-dreamina-inverse": () => import("./logo-dreamina-inverse-DRRQLJLQ.mjs"),
	"logo-feilian": () => import("./logo-feilian-k8ZtQkMK.mjs"),
	"logo-feilian-icon": () => import("./logo-feilian-icon-uJ_JKVuc.mjs"),
	"logo-gemini-icon": () => import("./logo-gemini-icon-C5TFXQQA.mjs"),
	"logo-jianying": () => import("./logo-jianying-CM0Nmv70.mjs"),
	"logo-jianying-icon": () => import("./logo-jianying-icon-Dis2gWeZ.mjs"),
	"logo-jianying-icon-inverse": () => import("./logo-jianying-icon-inverse-7QONpTS5.mjs"),
	"logo-jianying-inverse": () => import("./logo-jianying-inverse-DoioGexC.mjs"),
	"logo-jimeng-ai": () => import("./logo-jimeng-ai-CccVtfYe.mjs"),
	"logo-jimeng-ai-inverse": () => import("./logo-jimeng-ai-inverse-B13u2eWr.mjs"),
	"logo-jimeng-icon": () => import("./logo-jimeng-icon-Da4QqmXG.mjs"),
	"logo-jimeng-icon-inverse": () => import("./logo-jimeng-icon-inverse-CsdYf_98.mjs"),
	"logo-tiktok": () => import("./logo-tiktok-CtE9unNW.mjs"),
	"logo-tiktok-icon": () => import("./logo-tiktok-icon-6zSHXNEZ.mjs"),
	"logo-tiktok-icon-inverse": () => import("./logo-tiktok-icon-inverse-vvJCwUBc.mjs"),
	"logo-tiktok-inverse": () => import("./logo-tiktok-inverse-BG_aXsiM.mjs"),
	"logo-toutiao": () => import("./logo-toutiao-BhP7HTad.mjs"),
	"logo-toutiao-icon": () => import("./logo-toutiao-icon-CqiijoBV.mjs"),
	"logo-toutiao-icon-inverse": () => import("./logo-toutiao-icon-inverse-CUffHWaJ.mjs"),
	"logo-toutiao-inverse": () => import("./logo-toutiao-inverse-BJMpF2wL.mjs"),
	"logo-trae": () => import("./logo-trae-yyhO4he6.mjs"),
	"logo-trae-icon": () => import("./logo-trae-icon-B3wLHr1Q.mjs"),
	"logo-trae-inverse": () => import("./logo-trae-inverse-Cqh9srLL.mjs"),
	"logo-vaka": () => import("./logo-vaka-CIevAx6D.mjs"),
	"logo-vaka-icon": () => import("./logo-vaka-icon-DgSV40IW.mjs"),
	"logo-vaka-inverse": () => import("./logo-vaka-inverse-BQ8r5PCz.mjs"),
	"logo-viking": () => import("./logo-viking-8zlUAvoy.mjs"),
	"logo-viking-icon": () => import("./logo-viking-icon-CkLDlMEL.mjs"),
	"logo-viking-inverse": () => import("./logo-viking-inverse-DOmV1JQR.mjs"),
	"logo-volcano-engine": () => import("./logo-volcano-engine-CGZIUXpL.mjs"),
	"logo-volcano-engine-cn": () => import("./logo-volcano-engine-cn-AN_Cjb9m.mjs"),
	"logo-volcano-engine-cn-inverse": () => import("./logo-volcano-engine-cn-inverse-RDH2i02v.mjs"),
	"logo-volcano-engine-icon": () => import("./logo-volcano-engine-icon-zX9Ny4Ny.mjs"),
	"logo-volcano-engine-icon-inverse": () => import("./logo-volcano-engine-icon-inverse-_xgfo--f.mjs"),
	"logo-volcano-engine-inverse": () => import("./logo-volcano-engine-inverse-Ab5X3Rzu.mjs"),
	"logo-volcengine-ark": () => import("./logo-volcengine-ark-Dc6g2JgL.mjs"),
	"logo-volcengine-ark-icon": () => import("./logo-volcengine-ark-icon-w6ri6MC5.mjs"),
	"logo-volcengine-translate": () => import("./logo-volcengine-translate-bDEi1PSO.mjs"),
	"logo-volcengine-translate-icon": () => import("./logo-volcengine-translate-icon-D9qxfu7G.mjs"),
	"logo-volcengine-voice": () => import("./logo-volcengine-voice-DpxzkKuX.mjs"),
	"logo-volcengine-voice-icon": () => import("./logo-volcengine-voice-icon-DJIGdB46.mjs"),
	"logo-xingtu": () => import("./logo-xingtu-BoxKkBk_.mjs"),
	"logo-xingtu-icon": () => import("./logo-xingtu-icon-D8XdO23F.mjs"),
	"logo-xingtu-icon-inverse": () => import("./logo-xingtu-icon-inverse-XpvcVYh1.mjs"),
	"logo-xingtu-inverse": () => import("./logo-xingtu-inverse-B_w6SPYw.mjs"),
	mail: () => import("./mail-kVZ0NmkW.mjs"),
	menu: () => import("./menu-BOvhXSQs.mjs"),
	"menu-align-left": () => import("./menu-align-left-17jJjmmk.mjs"),
	"merge-request": () => import("./merge-request-COwvEKXW.mjs"),
	message: () => import("./message-CqvbOklL.mjs"),
	"message-circle-plus": () => import("./message-circle-plus-Cip-wcQX.mjs"),
	"message-circle-text": () => import("./message-circle-text-Cgpv42Gt.mjs"),
	microphone: () => import("./microphone-Dl5bMod5.mjs"),
	minus: () => import("./minus-C7qYa_KF.mjs"),
	monitor: () => import("./monitor-CQg9f3na.mjs"),
	moon: () => import("./moon-BQn_gg5M.mjs"),
	"more-horizontal": () => import("./more-horizontal-BP_cDXkf.mjs"),
	"more-vertical": () => import("./more-vertical-CKwz6JXR.mjs"),
	music: () => import("./music-YFADBpjW.mjs"),
	"open-new-window": () => import("./selects.js").then((e) => e.r),
	pause: () => import("./pause-6Ck2c6QN.mjs"),
	"picture-in-picture": () => import("./picture-in-picture-d76JUU-9.mjs"),
	"pie-chart-01": () => import("./pie-chart-01-C3CeQxIv.mjs"),
	"pie-chart-03": () => import("./pie-chart-03-BDdygT-P.mjs"),
	"play-square": () => import("./play-square-DlsKYSfX.mjs"),
	plugin: () => import("./plugin-CDeaauqW.mjs"),
	podcast: () => import("./podcast-BDFDWH45.mjs"),
	popup: () => import("./popup-DC6qERJs.mjs"),
	preview: () => import("./preview-riMqZniB.mjs"),
	push: () => import("./push-DRq8pf8K.mjs"),
	refresh: () => import("./refresh-CiXvPoAT.mjs"),
	robot: () => import("./robot-B6MPmor4.mjs"),
	search: () => import("./selects.js").then((e) => e.n),
	settings: () => import("./settings-Bdlztvl7.mjs"),
	"settings-slider-ver": () => import("./settings-slider-ver-VsEmIQl2.mjs"),
	share: () => import("./share-CuYsjsbX.mjs"),
	shrink: () => import("./shrink-CI57GS2g.mjs"),
	"sidebar-simple-left-square-1": () => import("./sidebar-simple-left-square-1-CMEcWhTm.mjs"),
	"sidebar-simple-right-square": () => import("./sidebar-simple-right-square-D0e3drpX.mjs"),
	skill: () => import("./skill-DBTi3Mr5.mjs"),
	"square-grid-circle-1": () => import("./square-grid-circle-1-f8jVXSPw.mjs"),
	star: () => import("./star-BL74KD9k.mjs"),
	"star-filled": () => import("./star-filled-BpzAgGOp.mjs"),
	success: () => import("./success-BBUm-dMj.mjs"),
	sun: () => import("./sun-DViM_Qk3.mjs"),
	sync: () => import("./sync-DwZFoTC3.mjs"),
	telescope: () => import("./telescope-XzYP-Yfi.mjs"),
	terminal: () => import("./terminal-Bx1XApZj.mjs"),
	"thumb-down-filled": () => import("./thumb-down-filled-BBcR6o4K.mjs"),
	"thumb-up-filled": () => import("./thumb-up-filled-DAhAsQRn.mjs"),
	"time-clock": () => import("./time-clock-CPbOaRzA.mjs"),
	tool: () => import("./selects.js").then((e) => e.t),
	"trash-03": () => import("./trash-03-uO-4k-yE.mjs"),
	"type-audio-state-default": () => import("./type-audio-state-default-DQC_Q8Cv.mjs"),
	"type-audio-state-disable": () => import("./type-audio-state-disable-CLB9IE5N.mjs"),
	"type-chart-state-default": () => import("./type-chart-state-default-CN8ODKZZ.mjs"),
	"type-chart-state-disable": () => import("./type-chart-state-disable-tt2rAkpT.mjs"),
	"type-code-state-default": () => import("./type-code-state-default-CSHKKiDG.mjs"),
	"type-code-state-disable": () => import("./type-code-state-disable-09GjksQZ.mjs"),
	"type-excel-state-default": () => import("./type-excel-state-default-CBW8vmyj.mjs"),
	"type-excel-state-disable": () => import("./type-excel-state-disable-BhtiQoYi.mjs"),
	"type-html-state-default": () => import("./type-html-state-default-DR1QE8Ut.mjs"),
	"type-html-state-disable": () => import("./type-html-state-disable-BFkB2vul.mjs"),
	"type-image-state-default": () => import("./type-image-state-default-CL8CdY5h.mjs"),
	"type-image-state-disable": () => import("./type-image-state-disable-CsNNm7v1.mjs"),
	"type-md-state-default": () => import("./type-md-state-default-CI6MxLzo.mjs"),
	"type-md-state-disable": () => import("./type-md-state-disable-nNJ0ZjlJ.mjs"),
	"type-mind-state-default": () => import("./type-mind-state-default-D-gumRr-.mjs"),
	"type-mind-state-disable": () => import("./type-mind-state-disable-BY9CcICk.mjs"),
	"type-multi-dimensional-table-state-default": () => import("./type-multi-dimensional-table-state-default-BkjWbecC.mjs"),
	"type-multi-dimensional-table-state-disable": () => import("./type-multi-dimensional-table-state-disable-D0fw-l_8.mjs"),
	"type-pdf-state-default": () => import("./type-pdf-state-default-CbIr-DBv.mjs"),
	"type-pdf-state-disable": () => import("./type-pdf-state-disable-1cd2iAET.mjs"),
	"type-ppt-state-default": () => import("./type-ppt-state-default-DNUcQh3p.mjs"),
	"type-ppt-state-disable": () => import("./type-ppt-state-disable-C6lLssMK.mjs"),
	"type-video-state-default": () => import("./type-video-state-default-DpVUTPnu.mjs"),
	"type-video-state-disable": () => import("./type-video-state-disable-DVcpHBIu.mjs"),
	"type-word-state-default": () => import("./type-word-state-default-wUk4Kh0Y.mjs"),
	"type-word-state-disable": () => import("./type-word-state-disable-BElrQfIQ.mjs"),
	"type-zip-state-default": () => import("./type-zip-state-default-xbhdCBKz.mjs"),
	"type-zip-state-disable": () => import("./type-zip-state-disable-CyoI9nX8.mjs"),
	"unfold-less": () => import("./unfold-less-CNxINh8Z.mjs"),
	"unfold-more": () => import("./unfold-more-DgaikV2Z.mjs"),
	"unknown-file": () => import("./unknown-file-AogVAFkN.mjs"),
	"unknown-file-disabled": () => import("./unknown-file-disabled-BC8RMpfE.mjs"),
	upload: () => import("./upload-LDecgZFb.mjs"),
	"upload-video": () => import("./upload-video-B2bbD4k5.mjs"),
	user: () => import("./user-LKlaN2Fr.mjs"),
	"user-02": () => import("./user-02-DmlRiN6V.mjs"),
	"user-filled": () => import("./user-filled-09pnTZHr.mjs"),
	vector: () => import("./vector-Dj0PgVo3.mjs"),
	voice: () => import("./voice-DR_-u1uw.mjs"),
	volume: () => import("./volume-b69F7P-f.mjs"),
	"volume-max": () => import("./volume-max-CYUxKm8j.mjs"),
	warning: () => import("./warning-ClMQt5cA.mjs"),
	"x-circle": () => import("./selects.js").then((e) => e.o),
	"zoom-in": () => import("./zoom-in-CCjY9BTn.mjs"),
	"zoom-out": () => import("./zoom-out-D6hQ7lK9.mjs")
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
export { g as a, o as c, b as i, s as l, j as n, v as o, N as r, _ as s, x as t, l as u };
