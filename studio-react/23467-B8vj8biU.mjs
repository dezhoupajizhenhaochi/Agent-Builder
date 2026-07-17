import { n as e } from "./rolldown-runtime-Dqa2HsxW.mjs";
//#region node_modules/@ve-design/web/dist/icons/registry.js
var t = Symbol.for("ve-design.iconRegistryState");
function n() {
	return {
		iconRegistry: /* @__PURE__ */ new Map(),
		changeListeners: /* @__PURE__ */ new Set()
	};
}
function r() {
	return "u" > typeof customElements ? customElements : globalThis;
}
function i() {
	let e = r();
	return e[t] ??= n();
}
function a(e) {
	let t = e.name.trim(), n = e.svg.trim().match(/<svg\b[\s\S]*?<\/svg>/i)?.[0];
	if (!t) throw Error("Icon name is required.");
	if (!n) throw Error(`Icon "${t}" must provide complete <svg> markup.`);
	return {
		name: t,
		svg: n
	};
}
function o(e) {
	for (let t of i().changeListeners) t(e);
}
function s(e) {
	return i().changeListeners.add(e), () => {
		i().changeListeners.delete(e);
	};
}
function c(e, t = {}) {
	let n = a(e), { iconRegistry: r } = i(), s = r.get(n.name);
	return s && !t.override ? s : (r.set(n.name, n), o([n.name]), n);
}
function l(e, t = {}) {
	for (let n of e) c(n, t);
}
function u(e) {
	return i().iconRegistry.get(e);
}
function d(e) {
	return i().iconRegistry.has(e);
}
//#endregion
//#region node_modules/@ve-design/web/dist/rslib-runtime.js
var f = {};
f.d = (e, t) => {
	for (var n in t) f.o(t, n) && !f.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), f.r = (e) => {
	"u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
};
//#endregion
//#region node_modules/@ve-design/web/dist/23467.js
var p = /* @__PURE__ */ e({
	getBuiltInIconNames: () => w,
	isBuiltInIconName: () => C,
	loadAllIcons: () => D,
	loadIcon: () => T,
	loadIcons: () => E,
	loader_namespaceObject: () => m
}), m = {};
f.r(m), f.d(m, {
	getBuiltInIconNames: () => w,
	isBuiltInIconName: () => C,
	loadAllIcons: () => D,
	loadIcon: () => T,
	loadIcons: () => E
});
var h = /* @__PURE__ */ "add.add-image.align-center.align-left.align-right.arrow-circle-up.arrow-down-md.arrow-down-sm.arrow-left-md.arrow-left-sm.arrow-right-md.arrow-right-sm.arrow-undo-up-left.arrow-undo-up-right.arrow-up-md.arrow-up-sm.atom.atom-02.attachment.bell.book-open-01.bookmark.brackets.chart.chart-pie.chat-circle.check.check-circle.chevron-down-md.chevron-down-sm.chevron-left-md.chevron-left-sm.chevron-right-md.chevron-right-sm.chevron-up-md.chevron-up-sm.close.code.command.compass-round-1.copy.corner-down-left.corner-down-right.database.date-calendar.dislike.document.down-up.download.drag.edit.emoji-profile.end.error.exit-full-screen.expand.face.file.file-attachment.file-check.filter.folder.folder-upload-1.folder-upload-1-1.full-screen.gift.globe.grid.headphones.help.history.home.image.indent.info.interface.key.lark.left-right.like.link.link-break.list.loading.loading-progress.log-in.log-out.logo-agentkit.logo-arkclaw.logo-arkclaw-inverse.logo-bytedance.logo-bytedance-icon.logo-bytedance-icon-inverse.logo-bytedance-inverse.logo-byteplus.logo-byteplus-icon.logo-byteplus-icon-inverse.logo-byteplus-inverse.logo-capcut.logo-capcut-inverse.logo-chatgpt-icon.logo-deepseek-icon.logo-doubao-llm.logo-doubao-llm-icon.logo-douyin.logo-douyin-group.logo-douyin-group-icon.logo-douyin-group-icon-inverse.logo-douyin-group-inverse.logo-douyin-icon.logo-douyin-icon-inverse.logo-douyin-inverse.logo-dreamina.logo-dreamina-inverse.logo-feilian.logo-feilian-icon.logo-gemini-icon.logo-jianying.logo-jianying-icon.logo-jianying-icon-inverse.logo-jianying-inverse.logo-jimeng-ai.logo-jimeng-ai-inverse.logo-jimeng-icon.logo-jimeng-icon-inverse.logo-tiktok.logo-tiktok-icon.logo-tiktok-icon-inverse.logo-tiktok-inverse.logo-toutiao.logo-toutiao-icon.logo-toutiao-icon-inverse.logo-toutiao-inverse.logo-trae.logo-trae-icon.logo-trae-inverse.logo-vaka.logo-vaka-icon.logo-vaka-inverse.logo-viking.logo-viking-icon.logo-viking-inverse.logo-volcano-engine.logo-volcano-engine-cn.logo-volcano-engine-cn-inverse.logo-volcano-engine-icon.logo-volcano-engine-icon-inverse.logo-volcano-engine-inverse.logo-volcengine-ark.logo-volcengine-ark-icon.logo-volcengine-translate.logo-volcengine-translate-icon.logo-volcengine-voice.logo-volcengine-voice-icon.logo-xingtu.logo-xingtu-icon.logo-xingtu-icon-inverse.logo-xingtu-inverse.mail.menu.menu-align-left.merge-request.message.message-circle-plus.message-circle-text.microphone.minus.monitor.moon.more-horizontal.more-vertical.music.open-new-window.pause.picture-in-picture.pie-chart-01.pie-chart-03.play-square.plugin.podcast.popup.preview.push.refresh.robot.search.settings.settings-slider-ver.share.shrink.sidebar-simple-left-square-1.sidebar-simple-right-square.skill.square-grid-circle-1.star.star-filled.success.sun.sync.telescope.terminal.thumb-down-filled.thumb-up-filled.time-clock.tool.trash-03.type-audio-state-default.type-audio-state-disable.type-chart-state-default.type-chart-state-disable.type-code-state-default.type-code-state-disable.type-excel-state-default.type-excel-state-disable.type-html-state-default.type-html-state-disable.type-image-state-default.type-image-state-disable.type-md-state-default.type-md-state-disable.type-mind-state-default.type-mind-state-disable.type-multi-dimensional-table-state-default.type-multi-dimensional-table-state-disable.type-pdf-state-default.type-pdf-state-disable.type-ppt-state-default.type-ppt-state-disable.type-video-state-default.type-video-state-disable.type-word-state-default.type-word-state-disable.type-zip-state-default.type-zip-state-disable.unfold-less.unfold-more.unknown-file.unknown-file-disabled.upload.upload-video.user.user-02.user-filled.vector.voice.volume.volume-max.warning.x-circle.zoom-in.zoom-out".split("."), g = new Set(h), _ = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), y = {
	add: () => import("./add-BU7tVsK_.mjs"),
	"add-image": () => import("./add-image-BFYEZERz.mjs"),
	"align-center": () => import("./align-center-AeFh-QiV.mjs"),
	"align-left": () => import("./align-left-B-zP8uaW.mjs"),
	"align-right": () => import("./align-right-C5koaphF.mjs"),
	"arrow-circle-up": () => import("./arrow-circle-up-CmD_jG5S.mjs"),
	"arrow-down-md": () => import("./arrow-down-md-B-ijbkqk.mjs"),
	"arrow-down-sm": () => import("./arrow-down-sm-BVTMAjXT.mjs"),
	"arrow-left-md": () => import("./arrow-left-md-DB0fQ6jl.mjs"),
	"arrow-left-sm": () => import("./arrow-left-sm-CXcip3j1.mjs"),
	"arrow-right-md": () => import("./arrow-right-md-BocrOqkY.mjs"),
	"arrow-right-sm": () => import("./arrow-right-sm-CLMq9nod.mjs"),
	"arrow-undo-up-left": () => import("./arrow-undo-up-left-WePnUuIN.mjs"),
	"arrow-undo-up-right": () => import("./arrow-undo-up-right-DfJTHGMn.mjs"),
	"arrow-up-md": () => import("./selects.js").then((e) => e.t),
	"arrow-up-sm": () => import("./arrow-up-sm-Q6InkAj2.mjs"),
	atom: () => import("./atom-hEQARxPl.mjs"),
	"atom-02": () => import("./atom-02-bUGzIpTm.mjs"),
	attachment: () => import("./selects.js").then((e) => e.s),
	bell: () => import("./bell-BEUf1-3G.mjs"),
	"book-open-01": () => import("./book-open-01-qELsgge-.mjs"),
	bookmark: () => import("./bookmark-OAPhL-K_.mjs"),
	brackets: () => import("./brackets-Dt0RRUkZ.mjs"),
	chart: () => import("./chart-qXXYfmCg.mjs"),
	"chart-pie": () => import("./chart-pie-ChhUHYrB.mjs"),
	"chat-circle": () => import("./chat-circle-jPUckzfn.mjs"),
	check: () => import("./selects.js").then((e) => e.c).then((e) => e.check_namespaceObject),
	"check-circle": () => import("./check-circle-Ccz28trN.mjs"),
	"chevron-down-md": () => import("./selects.js").then((e) => e.l),
	"chevron-down-sm": () => import("./chevron-down-sm-CiespUHK.mjs"),
	"chevron-left-md": () => import("./chevron-left-md-DHAsgS_g.mjs"),
	"chevron-left-sm": () => import("./chevron-left-sm-CUdq4pnC.mjs"),
	"chevron-right-md": () => import("./chevron-right-md-DotGQDP2.mjs"),
	"chevron-right-sm": () => import("./chevron-right-sm-C9SxzWOU.mjs"),
	"chevron-up-md": () => import("./selects.js").then((e) => e.u),
	"chevron-up-sm": () => import("./chevron-up-sm-DsfN89Vk.mjs"),
	close: () => import("./selects.js").then((e) => e.f),
	code: () => import("./code-Dnt3DGsp.mjs"),
	command: () => import("./command-BxP7E0Q7.mjs"),
	"compass-round-1": () => import("./compass-round-1-mwigwDGq.mjs"),
	copy: () => import("./copy-CmnDsCPi.mjs"),
	"corner-down-left": () => import("./corner-down-left-CsMUMy_y.mjs"),
	"corner-down-right": () => import("./corner-down-right-CJTBoEj2.mjs"),
	database: () => import("./database-Cv9ElQpT.mjs"),
	"date-calendar": () => import("./date-calendar-Ca9bGGWE.mjs"),
	dislike: () => import("./dislike-IsqinD8a.mjs"),
	document: () => import("./document-CPMF2TQf.mjs"),
	"down-up": () => import("./down-up-Bmg8ntS5.mjs"),
	download: () => import("./download-CbMqUL3W.mjs"),
	drag: () => import("./drag-BF_orpK9.mjs"),
	edit: () => import("./edit-CeqCIhuW.mjs"),
	"emoji-profile": () => import("./emoji-profile-BKLZ1R8o.mjs"),
	end: () => import("./end-De7-J199.mjs"),
	error: () => import("./error-CTJttQHQ.mjs"),
	"exit-full-screen": () => import("./selects.js").then((e) => e.r),
	expand: () => import("./expand-BmuwMByv.mjs"),
	face: () => import("./face-BAfqr7aT.mjs"),
	file: () => import("./selects.js").then((e) => e.a),
	"file-attachment": () => import("./file-attachment-LJxeivs7.mjs"),
	"file-check": () => import("./file-check-Bv6kmlmE.mjs"),
	filter: () => import("./filter-QyimbAyV.mjs"),
	folder: () => import("./folder-BhgEaGxg.mjs"),
	"folder-upload-1": () => import("./folder-upload-1-BYVzbcOh.mjs"),
	"folder-upload-1-1": () => import("./folder-upload-1-1-DJ3XRRgB.mjs"),
	"full-screen": () => import("./selects.js").then((e) => e.n),
	gift: () => import("./gift-ClZwB2tf.mjs"),
	globe: () => import("./globe-Dcx0uegt.mjs"),
	grid: () => import("./grid-zC2S68wh.mjs"),
	headphones: () => import("./headphones-CwU7Dwf_.mjs"),
	help: () => import("./help-DH-vq_II.mjs"),
	history: () => import("./history-qhI5gMdc.mjs"),
	home: () => import("./home-BLG74-Hh.mjs"),
	image: () => import("./selects.js").then((e) => e.o),
	indent: () => import("./indent-snfI2VfJ.mjs"),
	info: () => import("./info-BB_W4X7p.mjs"),
	interface: () => import("./interface-BX0DbOHv.mjs"),
	key: () => import("./key-Do9TZ2mU.mjs"),
	lark: () => import("./lark-Co35uwp0.mjs"),
	"left-right": () => import("./left-right-UAnzvubO.mjs"),
	like: () => import("./like-CtzByVT2.mjs"),
	link: () => import("./link-CouD-Bob.mjs"),
	"link-break": () => import("./link-break-tr8MvGEr.mjs"),
	list: () => import("./list-DN87mGQE.mjs"),
	loading: () => import("./selects.js").then((e) => e.d).then((e) => e.loading_namespaceObject),
	"loading-progress": () => import("./loading-progress-CgxDjhZ6.mjs"),
	"log-in": () => import("./log-in-D-ClFBbq.mjs"),
	"log-out": () => import("./log-out-BWrq8Qm0.mjs"),
	"logo-agentkit": () => import("./logo-agentkit-jwNkGf6_.mjs"),
	"logo-arkclaw": () => import("./logo-arkclaw-S7ANg-Mq.mjs"),
	"logo-arkclaw-inverse": () => import("./logo-arkclaw-inverse-D8ajwDKT.mjs"),
	"logo-bytedance": () => import("./logo-bytedance-BS_SPt_t.mjs"),
	"logo-bytedance-icon": () => import("./logo-bytedance-icon-CI2r6A_8.mjs"),
	"logo-bytedance-icon-inverse": () => import("./logo-bytedance-icon-inverse-DY5BZBsA.mjs"),
	"logo-bytedance-inverse": () => import("./logo-bytedance-inverse-DsvFdxKU.mjs"),
	"logo-byteplus": () => import("./logo-byteplus-D0KeWgl5.mjs"),
	"logo-byteplus-icon": () => import("./logo-byteplus-icon-B5BYNc1l.mjs"),
	"logo-byteplus-icon-inverse": () => import("./logo-byteplus-icon-inverse-Bf-f2j7F.mjs"),
	"logo-byteplus-inverse": () => import("./logo-byteplus-inverse-CsgzzOWt.mjs"),
	"logo-capcut": () => import("./logo-capcut-C8M-dXxN.mjs"),
	"logo-capcut-inverse": () => import("./logo-capcut-inverse-BeoS5iYA.mjs"),
	"logo-chatgpt-icon": () => import("./logo-chatgpt-icon-DUbcpLdM.mjs"),
	"logo-deepseek-icon": () => import("./logo-deepseek-icon-Caui-tL-.mjs"),
	"logo-doubao-llm": () => import("./logo-doubao-llm-DBtYiCGd.mjs"),
	"logo-doubao-llm-icon": () => import("./logo-doubao-llm-icon-bXQBFRaw.mjs"),
	"logo-douyin": () => import("./logo-douyin-pYI7FSAg.mjs"),
	"logo-douyin-group": () => import("./logo-douyin-group-JUcyvQsa.mjs"),
	"logo-douyin-group-icon": () => import("./logo-douyin-group-icon-CjNmGiUd.mjs"),
	"logo-douyin-group-icon-inverse": () => import("./logo-douyin-group-icon-inverse-D-q8jp3W.mjs"),
	"logo-douyin-group-inverse": () => import("./logo-douyin-group-inverse-D_7xyCIa.mjs"),
	"logo-douyin-icon": () => import("./logo-douyin-icon-C_z23FBD.mjs"),
	"logo-douyin-icon-inverse": () => import("./logo-douyin-icon-inverse-C-Zk60TJ.mjs"),
	"logo-douyin-inverse": () => import("./logo-douyin-inverse-Dsvl6J7X.mjs"),
	"logo-dreamina": () => import("./logo-dreamina-D_BuPCMq.mjs"),
	"logo-dreamina-inverse": () => import("./logo-dreamina-inverse-t4R85Mpa.mjs"),
	"logo-feilian": () => import("./logo-feilian-DrX347Nw.mjs"),
	"logo-feilian-icon": () => import("./logo-feilian-icon-xjDGKX1C.mjs"),
	"logo-gemini-icon": () => import("./logo-gemini-icon-zo07a8mw.mjs"),
	"logo-jianying": () => import("./logo-jianying-B9nSHfAb.mjs"),
	"logo-jianying-icon": () => import("./logo-jianying-icon-B37J_V8b.mjs"),
	"logo-jianying-icon-inverse": () => import("./logo-jianying-icon-inverse-DW0GzGXQ.mjs"),
	"logo-jianying-inverse": () => import("./logo-jianying-inverse-W8RXPVtn.mjs"),
	"logo-jimeng-ai": () => import("./logo-jimeng-ai-LJtfadt8.mjs"),
	"logo-jimeng-ai-inverse": () => import("./logo-jimeng-ai-inverse-z49PxC2s.mjs"),
	"logo-jimeng-icon": () => import("./logo-jimeng-icon-C6pgSxaM.mjs"),
	"logo-jimeng-icon-inverse": () => import("./logo-jimeng-icon-inverse-BOMLWV-K.mjs"),
	"logo-tiktok": () => import("./logo-tiktok-B4pupUZf.mjs"),
	"logo-tiktok-icon": () => import("./logo-tiktok-icon-oXXobKFH.mjs"),
	"logo-tiktok-icon-inverse": () => import("./logo-tiktok-icon-inverse-C_1xZ49l.mjs"),
	"logo-tiktok-inverse": () => import("./logo-tiktok-inverse-CZ3X7Yqt.mjs"),
	"logo-toutiao": () => import("./logo-toutiao-CGUnJ5YL.mjs"),
	"logo-toutiao-icon": () => import("./logo-toutiao-icon-rtnvynvf.mjs"),
	"logo-toutiao-icon-inverse": () => import("./logo-toutiao-icon-inverse-CLdcEkBn.mjs"),
	"logo-toutiao-inverse": () => import("./logo-toutiao-inverse-DC7DhxXt.mjs"),
	"logo-trae": () => import("./logo-trae-5Oy-gHpS.mjs"),
	"logo-trae-icon": () => import("./logo-trae-icon-tDxphNzg.mjs"),
	"logo-trae-inverse": () => import("./logo-trae-inverse-BI1QnC5w.mjs"),
	"logo-vaka": () => import("./logo-vaka-BMVaAwWm.mjs"),
	"logo-vaka-icon": () => import("./logo-vaka-icon-BcfJKlvh.mjs"),
	"logo-vaka-inverse": () => import("./logo-vaka-inverse-DATD1aP4.mjs"),
	"logo-viking": () => import("./logo-viking-BhrQ80aa.mjs"),
	"logo-viking-icon": () => import("./logo-viking-icon-BjNe2KtL.mjs"),
	"logo-viking-inverse": () => import("./logo-viking-inverse-CQ04g1TN.mjs"),
	"logo-volcano-engine": () => import("./logo-volcano-engine-CrFNu09X.mjs"),
	"logo-volcano-engine-cn": () => import("./logo-volcano-engine-cn-CRRTFbcu.mjs"),
	"logo-volcano-engine-cn-inverse": () => import("./logo-volcano-engine-cn-inverse-CmdzfHyU.mjs"),
	"logo-volcano-engine-icon": () => import("./logo-volcano-engine-icon-DHllcyeb.mjs"),
	"logo-volcano-engine-icon-inverse": () => import("./logo-volcano-engine-icon-inverse-C4qN--zG.mjs"),
	"logo-volcano-engine-inverse": () => import("./logo-volcano-engine-inverse-CqANwrcI.mjs"),
	"logo-volcengine-ark": () => import("./logo-volcengine-ark-6Uwb9trU.mjs"),
	"logo-volcengine-ark-icon": () => import("./logo-volcengine-ark-icon-9VfTHjcR.mjs"),
	"logo-volcengine-translate": () => import("./logo-volcengine-translate-DjqRlqAm.mjs"),
	"logo-volcengine-translate-icon": () => import("./logo-volcengine-translate-icon-BNp5z_Pn.mjs"),
	"logo-volcengine-voice": () => import("./logo-volcengine-voice-CG3xk9KD.mjs"),
	"logo-volcengine-voice-icon": () => import("./logo-volcengine-voice-icon-CObNaI9L.mjs"),
	"logo-xingtu": () => import("./logo-xingtu-CK4-Imvc.mjs"),
	"logo-xingtu-icon": () => import("./logo-xingtu-icon-ch9EiQLD.mjs"),
	"logo-xingtu-icon-inverse": () => import("./logo-xingtu-icon-inverse-BXH7L_bH.mjs"),
	"logo-xingtu-inverse": () => import("./logo-xingtu-inverse-kvlQfn5f.mjs"),
	mail: () => import("./mail-ChpyX36O.mjs"),
	menu: () => import("./menu-fC--4j_J.mjs"),
	"menu-align-left": () => import("./menu-align-left-BdKZWmDJ.mjs"),
	"merge-request": () => import("./merge-request-82m_0uFV.mjs"),
	message: () => import("./message-BxAWG1su.mjs"),
	"message-circle-plus": () => import("./message-circle-plus-DopquQ7F.mjs"),
	"message-circle-text": () => import("./message-circle-text-BL9P6H9t.mjs"),
	microphone: () => import("./microphone-CPXDpGZY.mjs"),
	minus: () => import("./minus-C_CEdYih.mjs"),
	monitor: () => import("./monitor-CHeJwg66.mjs"),
	moon: () => import("./moon-BQA3Ty_b.mjs"),
	"more-horizontal": () => import("./more-horizontal-M9Dh2bgo.mjs"),
	"more-vertical": () => import("./more-vertical-pFF8LjQD.mjs"),
	music: () => import("./music-By1HrTdp.mjs"),
	"open-new-window": () => import("./open-new-window-DYKCtJxK.mjs"),
	pause: () => import("./pause-B9aFmtlg.mjs"),
	"picture-in-picture": () => import("./picture-in-picture-Dk-dsGIB.mjs"),
	"pie-chart-01": () => import("./pie-chart-01-NOMas4Yh.mjs"),
	"pie-chart-03": () => import("./pie-chart-03-D5SSb1eq.mjs"),
	"play-square": () => import("./play-square-6YOQKnG9.mjs"),
	plugin: () => import("./plugin-DQWkBAKf.mjs"),
	podcast: () => import("./podcast-WjJI4_-M.mjs"),
	popup: () => import("./popup-CJcWe2K_.mjs"),
	preview: () => import("./preview-CYEgQzCC.mjs"),
	push: () => import("./push-PtLqknsN.mjs"),
	refresh: () => import("./refresh-cnyi2i4V.mjs"),
	robot: () => import("./robot-B_VILa8c.mjs"),
	search: () => import("./search-BkCTSt_w.mjs"),
	settings: () => import("./settings-N1Pvoost.mjs"),
	"settings-slider-ver": () => import("./settings-slider-ver-B2mHyYNk.mjs"),
	share: () => import("./share-BoLINcID.mjs"),
	shrink: () => import("./shrink-DrCaWyhP.mjs"),
	"sidebar-simple-left-square-1": () => import("./sidebar-simple-left-square-1-smeqOpD4.mjs"),
	"sidebar-simple-right-square": () => import("./sidebar-simple-right-square-DkMsnzWC.mjs"),
	skill: () => import("./skill-Dapk_siC.mjs"),
	"square-grid-circle-1": () => import("./square-grid-circle-1-BcbmILXH.mjs"),
	star: () => import("./star-CREWJQJF.mjs"),
	"star-filled": () => import("./star-filled-DpU7zJzn.mjs"),
	success: () => import("./success-DSyGekV7.mjs"),
	sun: () => import("./sun-C_ns_fqE.mjs"),
	sync: () => import("./sync-Bt5byBzd.mjs"),
	telescope: () => import("./telescope-BYhDtIQm.mjs"),
	terminal: () => import("./terminal-jBxkZN7l.mjs"),
	"thumb-down-filled": () => import("./thumb-down-filled-_PXo59gY.mjs"),
	"thumb-up-filled": () => import("./thumb-up-filled-BDEcCAJ2.mjs"),
	"time-clock": () => import("./time-clock-DqWHAW3T.mjs"),
	tool: () => import("./tool-U2BunSfy.mjs"),
	"trash-03": () => import("./trash-03-Cq_tiKrO.mjs"),
	"type-audio-state-default": () => import("./type-audio-state-default-DRUclRXP.mjs"),
	"type-audio-state-disable": () => import("./type-audio-state-disable-BStzjqJK.mjs"),
	"type-chart-state-default": () => import("./type-chart-state-default-DKa5dZg2.mjs"),
	"type-chart-state-disable": () => import("./type-chart-state-disable-Os77sK8M.mjs"),
	"type-code-state-default": () => import("./type-code-state-default-BrmWilU-.mjs"),
	"type-code-state-disable": () => import("./type-code-state-disable-DcyKeFfK.mjs"),
	"type-excel-state-default": () => import("./type-excel-state-default-D2eBlAna.mjs"),
	"type-excel-state-disable": () => import("./type-excel-state-disable-JugWiQJ6.mjs"),
	"type-html-state-default": () => import("./type-html-state-default-DVtoY8rq.mjs"),
	"type-html-state-disable": () => import("./type-html-state-disable-TxrevCF8.mjs"),
	"type-image-state-default": () => import("./type-image-state-default-CKi7SghI.mjs"),
	"type-image-state-disable": () => import("./type-image-state-disable-DW6mIN-d.mjs"),
	"type-md-state-default": () => import("./type-md-state-default-BFYp7J31.mjs"),
	"type-md-state-disable": () => import("./type-md-state-disable-CZePd-Ez.mjs"),
	"type-mind-state-default": () => import("./type-mind-state-default-Cg5_6TIV.mjs"),
	"type-mind-state-disable": () => import("./type-mind-state-disable-KgPdWgSE.mjs"),
	"type-multi-dimensional-table-state-default": () => import("./type-multi-dimensional-table-state-default-CMDkQKeB.mjs"),
	"type-multi-dimensional-table-state-disable": () => import("./type-multi-dimensional-table-state-disable-dnZJDuhg.mjs"),
	"type-pdf-state-default": () => import("./type-pdf-state-default-Dmk-Oji1.mjs"),
	"type-pdf-state-disable": () => import("./type-pdf-state-disable-DXs8SWMC.mjs"),
	"type-ppt-state-default": () => import("./type-ppt-state-default-DI6B4n6Y.mjs"),
	"type-ppt-state-disable": () => import("./type-ppt-state-disable-BYC_Tg9h.mjs"),
	"type-video-state-default": () => import("./type-video-state-default-C9ZxBy83.mjs"),
	"type-video-state-disable": () => import("./type-video-state-disable-CZ9xDQfn.mjs"),
	"type-word-state-default": () => import("./type-word-state-default-DSL4hNCl.mjs"),
	"type-word-state-disable": () => import("./type-word-state-disable-Bt60mmV_.mjs"),
	"type-zip-state-default": () => import("./type-zip-state-default-Domc4Eku.mjs"),
	"type-zip-state-disable": () => import("./type-zip-state-disable-CoIh4K4N.mjs"),
	"unfold-less": () => import("./unfold-less-CL4ltmOl.mjs"),
	"unfold-more": () => import("./unfold-more-D5pqNqT8.mjs"),
	"unknown-file": () => import("./unknown-file-DLPjHDHY.mjs"),
	"unknown-file-disabled": () => import("./unknown-file-disabled-DoX95bGD.mjs"),
	upload: () => import("./upload-jHs3kpvr.mjs"),
	"upload-video": () => import("./upload-video-CMK3PIY0.mjs"),
	user: () => import("./user-RGuMgzlD.mjs"),
	"user-02": () => import("./user-02-CxzotBcc.mjs"),
	"user-filled": () => import("./user-filled-CTrTcf_x.mjs"),
	vector: () => import("./vector-Dj220Eio.mjs"),
	voice: () => import("./voice-DKltfobQ.mjs"),
	volume: () => import("./volume-CjDxuLD4.mjs"),
	"volume-max": () => import("./volume-max-BqKLVHta.mjs"),
	warning: () => import("./selects.js").then((e) => e.i),
	"x-circle": () => import("./x-circle-Bf_adxJ3.mjs"),
	"zoom-in": () => import("./zoom-in-yoBt95T9.mjs"),
	"zoom-out": () => import("./zoom-out-Dx43k39d.mjs")
};
function b(e, t) {
	if (!e || typeof e != "object") return !1;
	let n = e;
	return n.name === t && typeof n.svg == "string";
}
function x(e, t) {
	return Object.values(e).find((e) => b(e, t));
}
function S(e) {
	return y[e]();
}
function C(e) {
	return g.has(e);
}
function w() {
	return h;
}
function T(e) {
	let t = v.get(e);
	if (t) return d(e) || c(t), Promise.resolve(t);
	let n = u(e);
	if (n) return v.set(e, n), Promise.resolve(n);
	let r = _.get(e);
	return r || (r = S(e).then((t) => {
		let n = x(t, e) ?? u(e);
		if (!n) throw Error(`Built-in icon "${e}" failed to register.`);
		v.set(e, n);
	}).catch((t) => {
		throw _.delete(e), t;
	}), _.set(e, r)), r.then(() => {
		let t = v.get(e) ?? u(e);
		if (!t) throw Error(`Built-in icon "${e}" failed to load.`);
		return t;
	});
}
function E(e) {
	return Promise.all(e.map((e) => T(e)));
}
function D() {
	return E(h);
}
//#endregion
export { c as a, u as i, f as n, l as o, s as r, p as t };
