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
	add: () => import("./add-Qa22ufOk.mjs"),
	"add-image": () => import("./add-image-oOFyDrJu.mjs"),
	"align-center": () => import("./align-center-o9Xy2fk_.mjs"),
	"align-left": () => import("./align-left-DWg-SPTs.mjs"),
	"align-right": () => import("./align-right-DcgtKnf6.mjs"),
	"arrow-circle-up": () => import("./arrow-circle-up-Sildfn2R.mjs"),
	"arrow-down-md": () => import("./arrow-down-md-XU8I_a3U.mjs"),
	"arrow-down-sm": () => import("./arrow-down-sm-ZyRRMNF_.mjs"),
	"arrow-left-md": () => import("./arrow-left-md-DwQ2NfyJ.mjs"),
	"arrow-left-sm": () => import("./arrow-left-sm-CewLBQIA.mjs"),
	"arrow-right-md": () => import("./arrow-right-md-BrTP4kqr.mjs"),
	"arrow-right-sm": () => import("./arrow-right-sm-BlKXii9s.mjs"),
	"arrow-undo-up-left": () => import("./arrow-undo-up-left-NciqKcxo.mjs"),
	"arrow-undo-up-right": () => import("./arrow-undo-up-right-BxC_zTnV.mjs"),
	"arrow-up-md": () => import("./arrow-up-md-Cp8QbnCs.mjs"),
	"arrow-up-sm": () => import("./arrow-up-sm-B5iCo0DH.mjs"),
	atom: () => import("./atom--hUEFVV9.mjs"),
	"atom-02": () => import("./atom-02-DQbiozIX.mjs"),
	attachment: () => import("./attachment-D4CPBYyR.mjs"),
	bell: () => import("./bell-4vEI9U2g.mjs"),
	"book-open-01": () => import("./book-open-01-C23YcTh2.mjs"),
	bookmark: () => import("./bookmark-Bmj50-wM.mjs"),
	brackets: () => import("./brackets-Bzs1yxaQ.mjs"),
	chart: () => import("./chart-C_qPaaFb.mjs"),
	"chart-pie": () => import("./chart-pie-CV3X3_Xj.mjs"),
	"chat-circle": () => import("./chat-circle-DtBLS1Za.mjs"),
	check: () => import("./76270-tWhiFSvh.mjs").then((e) => e.t).then((e) => e.check_namespaceObject),
	"check-circle": () => import("./check-circle-Blt4rtKR.mjs"),
	"chevron-down-md": () => import("./chevron-down-md-SA0uEChu.mjs"),
	"chevron-down-sm": () => import("./67641-CnB_xD3N.mjs").then((e) => e.t).then((e) => e.chevron_down_sm_namespaceObject),
	"chevron-left-md": () => import("./chevron-left-md-Dlg3jlT9.mjs"),
	"chevron-left-sm": () => import("./chevron-left-sm-CbzEtrzf.mjs"),
	"chevron-right-md": () => import("./chevron-right-md-BO37Hvpa.mjs"),
	"chevron-right-sm": () => import("./chevron-right-sm-C1lDcjK8.mjs"),
	"chevron-up-md": () => import("./chevron-up-md-CcMPn-Ba.mjs"),
	"chevron-up-sm": () => import("./chevron-up-sm-CEwvAerR.mjs").then((e) => e.n),
	close: () => import("./close-Cw12Gpne.mjs").then((e) => e.n),
	code: () => import("./code-BnpkcE4k.mjs"),
	command: () => import("./command-B_Rm3L66.mjs"),
	"compass-round-1": () => import("./compass-round-1-Cy4B2m_Z.mjs"),
	copy: () => import("./copy-DwAusVZn.mjs"),
	"corner-down-left": () => import("./corner-down-left-BJdvlo6_.mjs"),
	"corner-down-right": () => import("./corner-down-right-Ceuk41Fn.mjs"),
	database: () => import("./database-CidG_ZxG.mjs"),
	"date-calendar": () => import("./date-calendar-BMHM177b.mjs"),
	dislike: () => import("./dislike-D_9Pnj4x.mjs"),
	document: () => import("./document-Bw1xVupM.mjs"),
	"down-up": () => import("./down-up-CuQZKXUj.mjs"),
	download: () => import("./download-CF6XofiB.mjs"),
	drag: () => import("./drag-CC8VX_sN.mjs"),
	edit: () => import("./edit-BRblPcgY.mjs"),
	"emoji-profile": () => import("./emoji-profile-BY14csxk.mjs"),
	end: () => import("./end-CwMS3wcx.mjs"),
	error: () => import("./error-DBsL2LI3.mjs"),
	"exit-full-screen": () => import("./exit-full-screen-BXCEdXiE.mjs"),
	expand: () => import("./expand-BhoREt6q.mjs"),
	face: () => import("./face-Bd5c6WGV.mjs"),
	file: () => import("./file-LID81ixu.mjs"),
	"file-attachment": () => import("./file-attachment-f07xGj6A.mjs"),
	"file-check": () => import("./file-check-CPxminX6.mjs"),
	filter: () => import("./filter-CmfGS4TF.mjs"),
	folder: () => import("./folder-DpNmXIkq.mjs"),
	"folder-upload-1": () => import("./folder-upload-1-DZ1sGw9Q.mjs"),
	"folder-upload-1-1": () => import("./folder-upload-1-1-ZjxIAydw.mjs"),
	"full-screen": () => import("./full-screen-RThj8WQ6.mjs"),
	gift: () => import("./gift-M6zYksZw.mjs"),
	globe: () => import("./globe-C2EtSJ8T.mjs"),
	grid: () => import("./grid-DZacmXck.mjs"),
	headphones: () => import("./headphones-DOayiy6P.mjs"),
	help: () => import("./help-DaadNAnE.mjs"),
	history: () => import("./history-CrmRSqdQ.mjs"),
	home: () => import("./home-DGYanhoF.mjs"),
	image: () => import("./image-CZR2ZYcl.mjs"),
	indent: () => import("./indent-CySYbfBa.mjs"),
	info: () => import("./info-BiH7Azyj.mjs"),
	interface: () => import("./interface-wlISyMOB.mjs"),
	key: () => import("./key-OBCUBkgx.mjs"),
	lark: () => import("./lark-BXShdZ4j.mjs"),
	"left-right": () => import("./left-right-CerrZ0Sh.mjs"),
	like: () => import("./like-D0isRSqh.mjs"),
	link: () => import("./link-CHJYaSOG.mjs"),
	"link-break": () => import("./link-break-pYqZd0yn.mjs"),
	list: () => import("./list-CiUzWwSm.mjs"),
	loading: () => import("./42938-B_F1O8a6.mjs").then((e) => e.loading_namespaceObject),
	"loading-progress": () => import("./loading-progress-1RAzFcg-.mjs").then((e) => e.n),
	"log-in": () => import("./log-in-CDPFY6H6.mjs"),
	"log-out": () => import("./log-out-VR9eb5jV.mjs"),
	"logo-agentkit": () => import("./logo-agentkit-BBi4qI22.mjs"),
	"logo-arkclaw": () => import("./logo-arkclaw-O0qnI2Tr.mjs"),
	"logo-arkclaw-inverse": () => import("./logo-arkclaw-inverse-CW2LZmka.mjs"),
	"logo-bytedance": () => import("./logo-bytedance-BJ2L8SFY.mjs"),
	"logo-bytedance-icon": () => import("./logo-bytedance-icon-DC91nzY1.mjs"),
	"logo-bytedance-icon-inverse": () => import("./logo-bytedance-icon-inverse-CGkmAIpW.mjs"),
	"logo-bytedance-inverse": () => import("./logo-bytedance-inverse-D6Y_FOSy.mjs"),
	"logo-byteplus": () => import("./logo-byteplus-BPJAv-WH.mjs"),
	"logo-byteplus-icon": () => import("./logo-byteplus-icon-CkAsrt9D.mjs"),
	"logo-byteplus-icon-inverse": () => import("./logo-byteplus-icon-inverse-CRMxltZY.mjs"),
	"logo-byteplus-inverse": () => import("./logo-byteplus-inverse-4phtxgzo.mjs"),
	"logo-capcut": () => import("./logo-capcut-CRexwEXt.mjs"),
	"logo-capcut-inverse": () => import("./logo-capcut-inverse-BEb4KKsP.mjs"),
	"logo-chatgpt-icon": () => import("./logo-chatgpt-icon-Cd1h7xfp.mjs"),
	"logo-deepseek-icon": () => import("./logo-deepseek-icon-Bysaz8TW.mjs"),
	"logo-doubao-llm": () => import("./logo-doubao-llm-BNvQQSkn.mjs"),
	"logo-doubao-llm-icon": () => import("./logo-doubao-llm-icon-tDwNS-q8.mjs"),
	"logo-douyin": () => import("./logo-douyin-Bzp-XQIt.mjs"),
	"logo-douyin-group": () => import("./logo-douyin-group-Bsw6rG9X.mjs"),
	"logo-douyin-group-icon": () => import("./logo-douyin-group-icon-D5CpJYUX.mjs"),
	"logo-douyin-group-icon-inverse": () => import("./logo-douyin-group-icon-inverse-ClW42vMe.mjs"),
	"logo-douyin-group-inverse": () => import("./logo-douyin-group-inverse-X1SBEgCt.mjs"),
	"logo-douyin-icon": () => import("./logo-douyin-icon-BJV4QM7N.mjs"),
	"logo-douyin-icon-inverse": () => import("./logo-douyin-icon-inverse-B30iTsRe.mjs"),
	"logo-douyin-inverse": () => import("./logo-douyin-inverse-CW7TSIxV.mjs"),
	"logo-dreamina": () => import("./logo-dreamina-C04awywL.mjs"),
	"logo-dreamina-inverse": () => import("./logo-dreamina-inverse-BUvGXRyA.mjs"),
	"logo-feilian": () => import("./logo-feilian-Ck6UWBn-.mjs"),
	"logo-feilian-icon": () => import("./logo-feilian-icon-BpyWoeWe.mjs"),
	"logo-gemini-icon": () => import("./logo-gemini-icon-Cv9fAzTh.mjs"),
	"logo-jianying": () => import("./logo-jianying-D2ZYjBr_.mjs"),
	"logo-jianying-icon": () => import("./logo-jianying-icon-UvQ36dpE.mjs"),
	"logo-jianying-icon-inverse": () => import("./logo-jianying-icon-inverse-CNMqMm-a.mjs"),
	"logo-jianying-inverse": () => import("./logo-jianying-inverse-BtJJ1Aak.mjs"),
	"logo-jimeng-ai": () => import("./logo-jimeng-ai-WS2lp_Tk.mjs"),
	"logo-jimeng-ai-inverse": () => import("./logo-jimeng-ai-inverse-Cd3HeSJV.mjs"),
	"logo-jimeng-icon": () => import("./logo-jimeng-icon-DbyxdyQh.mjs"),
	"logo-jimeng-icon-inverse": () => import("./logo-jimeng-icon-inverse-CAIS_jGT.mjs"),
	"logo-tiktok": () => import("./logo-tiktok-0FoKApY7.mjs"),
	"logo-tiktok-icon": () => import("./logo-tiktok-icon-4_T3NDJF.mjs"),
	"logo-tiktok-icon-inverse": () => import("./logo-tiktok-icon-inverse-CY1n6CNb.mjs"),
	"logo-tiktok-inverse": () => import("./logo-tiktok-inverse-BPpzahDz.mjs"),
	"logo-toutiao": () => import("./logo-toutiao-BEEb3ViJ.mjs"),
	"logo-toutiao-icon": () => import("./logo-toutiao-icon-BKgjGTz4.mjs"),
	"logo-toutiao-icon-inverse": () => import("./logo-toutiao-icon-inverse-Dy2s8Kln.mjs"),
	"logo-toutiao-inverse": () => import("./logo-toutiao-inverse-3-2gXT6h.mjs"),
	"logo-trae": () => import("./logo-trae-I7r4b4f1.mjs"),
	"logo-trae-icon": () => import("./logo-trae-icon-jWkcBOiz.mjs"),
	"logo-trae-inverse": () => import("./logo-trae-inverse-DMNbyM72.mjs"),
	"logo-vaka": () => import("./logo-vaka-VjINpER8.mjs"),
	"logo-vaka-icon": () => import("./logo-vaka-icon-H4_3wu1q.mjs"),
	"logo-vaka-inverse": () => import("./logo-vaka-inverse-BtS8e7NL.mjs"),
	"logo-viking": () => import("./logo-viking-Cj4x4LIh.mjs"),
	"logo-viking-icon": () => import("./logo-viking-icon-9k671Aed.mjs"),
	"logo-viking-inverse": () => import("./logo-viking-inverse-pjQDFMtF.mjs"),
	"logo-volcano-engine": () => import("./logo-volcano-engine-DUBXXpWK.mjs"),
	"logo-volcano-engine-cn": () => import("./logo-volcano-engine-cn-BOcEOUvF.mjs"),
	"logo-volcano-engine-cn-inverse": () => import("./logo-volcano-engine-cn-inverse-oldsDUUf.mjs"),
	"logo-volcano-engine-icon": () => import("./logo-volcano-engine-icon-BfpWj8IH.mjs"),
	"logo-volcano-engine-icon-inverse": () => import("./logo-volcano-engine-icon-inverse-DWdt2jtG.mjs"),
	"logo-volcano-engine-inverse": () => import("./logo-volcano-engine-inverse-CEOGm79T.mjs"),
	"logo-volcengine-ark": () => import("./logo-volcengine-ark-Cz2ELONa.mjs"),
	"logo-volcengine-ark-icon": () => import("./logo-volcengine-ark-icon-BjpEizaX.mjs"),
	"logo-volcengine-translate": () => import("./logo-volcengine-translate-BDX8wOWL.mjs"),
	"logo-volcengine-translate-icon": () => import("./logo-volcengine-translate-icon-B-uXz-05.mjs"),
	"logo-volcengine-voice": () => import("./logo-volcengine-voice-DOFocILf.mjs"),
	"logo-volcengine-voice-icon": () => import("./logo-volcengine-voice-icon-BhTP5gat.mjs"),
	"logo-xingtu": () => import("./logo-xingtu-BMcoP-0W.mjs"),
	"logo-xingtu-icon": () => import("./logo-xingtu-icon-C-c1g5D5.mjs"),
	"logo-xingtu-icon-inverse": () => import("./logo-xingtu-icon-inverse-CPMa3MLS.mjs"),
	"logo-xingtu-inverse": () => import("./logo-xingtu-inverse-DU3_FyqL.mjs"),
	mail: () => import("./mail-UR7OMAYJ.mjs"),
	menu: () => import("./menu-BadSNE__.mjs"),
	"menu-align-left": () => import("./menu-align-left-BTLkADMM.mjs"),
	"merge-request": () => import("./merge-request-CZX7qpUp.mjs"),
	message: () => import("./message-B_89nwWU.mjs"),
	"message-circle-plus": () => import("./message-circle-plus-H--U9ktv.mjs"),
	"message-circle-text": () => import("./message-circle-text-BJBY3g3B.mjs"),
	microphone: () => import("./microphone-DeaGh_bF.mjs"),
	minus: () => import("./minus-Byw8krx_.mjs"),
	monitor: () => import("./monitor-6DG2tm49.mjs"),
	moon: () => import("./moon-t6w5VJUd.mjs"),
	"more-horizontal": () => import("./more-horizontal-CQKJbgiy.mjs"),
	"more-vertical": () => import("./more-vertical-Bi77oMJH.mjs"),
	music: () => import("./music-BE3DvWWA.mjs"),
	"open-new-window": () => import("./open-new-window-Tdictm6l.mjs"),
	pause: () => import("./pause-C39NtkJc.mjs"),
	"picture-in-picture": () => import("./picture-in-picture-B0v1mmQY.mjs"),
	"pie-chart-01": () => import("./pie-chart-01-Cm7D1BMW.mjs"),
	"pie-chart-03": () => import("./pie-chart-03-CHyYtPXx.mjs"),
	"play-square": () => import("./play-square-BgNb0GVV.mjs"),
	plugin: () => import("./plugin-YQ-qJ-0l.mjs"),
	podcast: () => import("./podcast-DDpRxq35.mjs"),
	popup: () => import("./popup-CBgHRG-K.mjs"),
	preview: () => import("./preview-DCBAnhaH.mjs"),
	push: () => import("./push-BQVaewS4.mjs"),
	refresh: () => import("./refresh-Cu0Hrzkw.mjs"),
	robot: () => import("./robot-dhnQ0jXk.mjs"),
	search: () => import("./search-ZbmhTRGU.mjs"),
	settings: () => import("./settings-CCi3oin8.mjs"),
	"settings-slider-ver": () => import("./settings-slider-ver-BeYxqEC7.mjs"),
	share: () => import("./share-DwI1qsLw.mjs"),
	shrink: () => import("./shrink-DVyCncGX.mjs"),
	"sidebar-simple-left-square-1": () => import("./sidebar-simple-left-square-1-B7Lkh0CB.mjs"),
	"sidebar-simple-right-square": () => import("./sidebar-simple-right-square-DpwEkYj9.mjs"),
	skill: () => import("./skill-DS4KqVw5.mjs"),
	"square-grid-circle-1": () => import("./square-grid-circle-1-CmoCUYNd.mjs"),
	star: () => import("./star-B4Kr9oj8.mjs"),
	"star-filled": () => import("./star-filled-jcJ51IbS.mjs"),
	success: () => import("./success-C-JZefSR.mjs"),
	sun: () => import("./sun-Pm4oYDDZ.mjs"),
	sync: () => import("./sync-Ba9vI6-B.mjs"),
	telescope: () => import("./telescope-Dx4OaQCx.mjs"),
	terminal: () => import("./terminal-308qCCQa.mjs"),
	"thumb-down-filled": () => import("./thumb-down-filled-DB6Woo87.mjs"),
	"thumb-up-filled": () => import("./thumb-up-filled-B3g4Svdt.mjs"),
	"time-clock": () => import("./time-clock-B2JbKvmi.mjs"),
	tool: () => import("./tool-BKPs0ykZ.mjs"),
	"trash-03": () => import("./trash-03-DypD6vVq.mjs"),
	"type-audio-state-default": () => import("./type-audio-state-default-Cv17Fs16.mjs"),
	"type-audio-state-disable": () => import("./type-audio-state-disable-B-MVBUVM.mjs"),
	"type-chart-state-default": () => import("./type-chart-state-default-BK3CNB_3.mjs"),
	"type-chart-state-disable": () => import("./type-chart-state-disable-DVnxjM9i.mjs"),
	"type-code-state-default": () => import("./type-code-state-default-D-_yby8i.mjs"),
	"type-code-state-disable": () => import("./type-code-state-disable-Deg8M2kO.mjs"),
	"type-excel-state-default": () => import("./type-excel-state-default-DXxGtK_Y.mjs"),
	"type-excel-state-disable": () => import("./type-excel-state-disable-Bwl1hKrv.mjs"),
	"type-html-state-default": () => import("./type-html-state-default-D9hnvsb4.mjs"),
	"type-html-state-disable": () => import("./type-html-state-disable-B36A5r28.mjs"),
	"type-image-state-default": () => import("./type-image-state-default-D32pRRBl.mjs"),
	"type-image-state-disable": () => import("./type-image-state-disable-CH1svLXf.mjs"),
	"type-md-state-default": () => import("./type-md-state-default-BIxCbUUl.mjs"),
	"type-md-state-disable": () => import("./type-md-state-disable-CUMmBIr7.mjs"),
	"type-mind-state-default": () => import("./type-mind-state-default-Fvuxx03H.mjs"),
	"type-mind-state-disable": () => import("./type-mind-state-disable-BXcCAW0x.mjs"),
	"type-multi-dimensional-table-state-default": () => import("./type-multi-dimensional-table-state-default-BZpVQ1j_.mjs"),
	"type-multi-dimensional-table-state-disable": () => import("./type-multi-dimensional-table-state-disable-BCjnU9_a.mjs"),
	"type-pdf-state-default": () => import("./type-pdf-state-default-MenATjY3.mjs"),
	"type-pdf-state-disable": () => import("./type-pdf-state-disable-sbzHY8VE.mjs"),
	"type-ppt-state-default": () => import("./type-ppt-state-default-DwRGUsrG.mjs"),
	"type-ppt-state-disable": () => import("./type-ppt-state-disable-ChBRVOLJ.mjs"),
	"type-video-state-default": () => import("./type-video-state-default-CWf7pFCh.mjs"),
	"type-video-state-disable": () => import("./type-video-state-disable-ChHbYO_r.mjs"),
	"type-word-state-default": () => import("./type-word-state-default-CJ_C2XzG.mjs"),
	"type-word-state-disable": () => import("./type-word-state-disable-D_g2e9UZ.mjs"),
	"type-zip-state-default": () => import("./type-zip-state-default-DdLu_uDW.mjs"),
	"type-zip-state-disable": () => import("./type-zip-state-disable-MJXq1Nfy.mjs"),
	"unfold-less": () => import("./unfold-less-CQ3Z04_J.mjs"),
	"unfold-more": () => import("./unfold-more-BnKtzOsx.mjs"),
	"unknown-file": () => import("./unknown-file-CYKit1V9.mjs"),
	"unknown-file-disabled": () => import("./unknown-file-disabled-DvsAPO75.mjs"),
	upload: () => import("./upload-Dgmfbyq7.mjs"),
	"upload-video": () => import("./upload-video-DZXEi5jU.mjs"),
	user: () => import("./user-BiPuSKM3.mjs"),
	"user-02": () => import("./user-02-CpJFSiid.mjs"),
	"user-filled": () => import("./user-filled-D-xNN17Q.mjs"),
	vector: () => import("./vector-DUCS58ne.mjs"),
	voice: () => import("./voice-m8a9qOir.mjs"),
	volume: () => import("./volume-CiwUjCVJ.mjs"),
	"volume-max": () => import("./volume-max-BfDvemDu.mjs"),
	warning: () => import("./warning-CrdLLq4m.mjs"),
	"x-circle": () => import("./x-circle-DicFpY5F.mjs"),
	"zoom-in": () => import("./zoom-in-CGe2lG1f.mjs"),
	"zoom-out": () => import("./zoom-out-DS68Bdww.mjs")
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
