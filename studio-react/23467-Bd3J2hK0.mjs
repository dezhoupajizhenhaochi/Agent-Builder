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
	add: () => import("./add-DoQec_mA.mjs"),
	"add-image": () => import("./add-image-B2Xfhvy0.mjs"),
	"align-center": () => import("./align-center-Clowju8y.mjs"),
	"align-left": () => import("./align-left-3FC9WJjZ.mjs"),
	"align-right": () => import("./align-right-Cw1hlDTb.mjs"),
	"arrow-circle-up": () => import("./arrow-circle-up-yKK85hq1.mjs"),
	"arrow-down-md": () => import("./arrow-down-md-CgimIfIA.mjs"),
	"arrow-down-sm": () => import("./arrow-down-sm-CJXy1fhm.mjs"),
	"arrow-left-md": () => import("./arrow-left-md-K3-4Ugfo.mjs"),
	"arrow-left-sm": () => import("./arrow-left-sm-CZZmuXYv.mjs"),
	"arrow-right-md": () => import("./arrow-right-md-B_bJgHAf.mjs"),
	"arrow-right-sm": () => import("./arrow-right-sm-CSegvtZQ.mjs"),
	"arrow-undo-up-left": () => import("./arrow-undo-up-left-DUm02fZp.mjs"),
	"arrow-undo-up-right": () => import("./arrow-undo-up-right-D-QlCW9M.mjs"),
	"arrow-up-md": () => import("./arrow-up-md-5b4vB9is.mjs"),
	"arrow-up-sm": () => import("./arrow-up-sm-9IxRt-x5.mjs"),
	atom: () => import("./atom-DVWEMw1S.mjs"),
	"atom-02": () => import("./atom-02-Bk113UQK.mjs"),
	attachment: () => import("./attachment-CwZnua8-.mjs"),
	bell: () => import("./bell-BLAdwbIs.mjs"),
	"book-open-01": () => import("./book-open-01-R58a2VHd.mjs"),
	bookmark: () => import("./bookmark-DCZykDAl.mjs"),
	brackets: () => import("./brackets-CjjSBoZF.mjs"),
	chart: () => import("./chart-DnjD8rCj.mjs"),
	"chart-pie": () => import("./chart-pie-CPtQ39Ym.mjs"),
	"chat-circle": () => import("./chat-circle-DSMhNs-L.mjs"),
	check: () => import("./selects.js").then((e) => e.o).then((e) => e.check_namespaceObject),
	"check-circle": () => import("./check-circle-BCu_NDJZ.mjs"),
	"chevron-down-md": () => import("./chevron-down-md-B2v_sNEh.mjs"),
	"chevron-down-sm": () => import("./selects.js").then((e) => e.t).then((e) => e.chevron_down_sm_namespaceObject),
	"chevron-left-md": () => import("./chevron-left-md-DvXmVnUP.mjs"),
	"chevron-left-sm": () => import("./chevron-left-sm-J46a-L2i.mjs"),
	"chevron-right-md": () => import("./chevron-right-md-Cocn7aYg.mjs"),
	"chevron-right-sm": () => import("./chevron-right-sm-DfDBg6Ee.mjs"),
	"chevron-up-md": () => import("./chevron-up-md-CdAWIO30.mjs"),
	"chevron-up-sm": () => import("./selects.js").then((e) => e.n),
	close: () => import("./close-C-vMo1sY.mjs").then((e) => e.n),
	code: () => import("./code-BiveUK8g.mjs"),
	command: () => import("./command-9UUXzJJg.mjs"),
	"compass-round-1": () => import("./compass-round-1-fKPVUjEC.mjs"),
	copy: () => import("./selects.js").then((e) => e.a),
	"corner-down-left": () => import("./corner-down-left-DbktO603.mjs"),
	"corner-down-right": () => import("./corner-down-right-DEScns7T.mjs"),
	database: () => import("./database-DeQSJTEX.mjs"),
	"date-calendar": () => import("./date-calendar-rOf74_u-.mjs"),
	dislike: () => import("./dislike-DpzaCqbl.mjs"),
	document: () => import("./document-jDsPe6xW.mjs"),
	"down-up": () => import("./down-up-SAYFZU4m.mjs"),
	download: () => import("./selects.js").then((e) => e.i),
	drag: () => import("./drag-D6abtRag.mjs"),
	edit: () => import("./edit-DEmV2a7q.mjs"),
	"emoji-profile": () => import("./emoji-profile-DGYMJi5Z.mjs"),
	end: () => import("./end-Bp1W_Lba.mjs"),
	error: () => import("./error-fuZPxRt1.mjs"),
	"exit-full-screen": () => import("./exit-full-screen-CpkwrmOW.mjs"),
	expand: () => import("./expand-DmHGrdAA.mjs"),
	face: () => import("./face-C_JVb6VK.mjs"),
	file: () => import("./file-zt7QqJWu.mjs"),
	"file-attachment": () => import("./file-attachment-CAkk9nZ_.mjs"),
	"file-check": () => import("./file-check-q6-vmnjA.mjs"),
	filter: () => import("./filter-LeMeA7FL.mjs"),
	folder: () => import("./folder-DnTx3eji.mjs"),
	"folder-upload-1": () => import("./folder-upload-1-Ce9khWbN.mjs"),
	"folder-upload-1-1": () => import("./folder-upload-1-1-mb_6cBpD.mjs"),
	"full-screen": () => import("./full-screen-CmtrdifV.mjs"),
	gift: () => import("./gift-KrqFC7UV.mjs"),
	globe: () => import("./globe-CdYNtDXi.mjs"),
	grid: () => import("./grid-r5afV4my.mjs"),
	headphones: () => import("./headphones-rY5a5pzQ.mjs"),
	help: () => import("./help-9r-AcR5n.mjs"),
	history: () => import("./history-Bf9JmU4K.mjs"),
	home: () => import("./home-N_BSWc_q.mjs"),
	image: () => import("./image-QEmVhb8T.mjs"),
	indent: () => import("./indent-2Q_gUT1j.mjs"),
	info: () => import("./info-DOAFpOTT.mjs"),
	interface: () => import("./interface-DRezfPur.mjs"),
	key: () => import("./key-DHlzlNoT.mjs"),
	lark: () => import("./lark-ctFG4UPA.mjs"),
	"left-right": () => import("./left-right-DThuChaX.mjs"),
	like: () => import("./like-DRXZ1fpt.mjs"),
	link: () => import("./link-KkgGnKfe.mjs"),
	"link-break": () => import("./link-break-C2KUjvJX.mjs"),
	list: () => import("./list-Z4zeV1_i.mjs"),
	loading: () => import("./42938-J_Bs_E05.mjs").then((e) => e.t).then((e) => e.loading_namespaceObject),
	"loading-progress": () => import("./selects.js").then((e) => e.r),
	"log-in": () => import("./log-in-CsEZtj8B.mjs"),
	"log-out": () => import("./log-out-B7cL0K-m.mjs"),
	"logo-agentkit": () => import("./logo-agentkit-BUM2BvFw.mjs"),
	"logo-arkclaw": () => import("./logo-arkclaw-C-pO3vPm.mjs"),
	"logo-arkclaw-inverse": () => import("./logo-arkclaw-inverse-xWQVrtxN.mjs"),
	"logo-bytedance": () => import("./logo-bytedance-B3dWKDS1.mjs"),
	"logo-bytedance-icon": () => import("./logo-bytedance-icon-BSirLE5R.mjs"),
	"logo-bytedance-icon-inverse": () => import("./logo-bytedance-icon-inverse-u4nScHI_.mjs"),
	"logo-bytedance-inverse": () => import("./logo-bytedance-inverse-Cuh5i0NN.mjs"),
	"logo-byteplus": () => import("./logo-byteplus-BccTCq0l.mjs"),
	"logo-byteplus-icon": () => import("./logo-byteplus-icon-DNp2utdK.mjs"),
	"logo-byteplus-icon-inverse": () => import("./logo-byteplus-icon-inverse-PcVDndAR.mjs"),
	"logo-byteplus-inverse": () => import("./logo-byteplus-inverse-Vq-8uoJ5.mjs"),
	"logo-capcut": () => import("./logo-capcut-CVE_nhG0.mjs"),
	"logo-capcut-inverse": () => import("./logo-capcut-inverse-gSTmwAYG.mjs"),
	"logo-chatgpt-icon": () => import("./logo-chatgpt-icon-D-e-h41V.mjs"),
	"logo-deepseek-icon": () => import("./logo-deepseek-icon-DeR0eX_A.mjs"),
	"logo-doubao-llm": () => import("./logo-doubao-llm-BPGcwIxO.mjs"),
	"logo-doubao-llm-icon": () => import("./logo-doubao-llm-icon-Bthotckv.mjs"),
	"logo-douyin": () => import("./logo-douyin-D1iLJDtx.mjs"),
	"logo-douyin-group": () => import("./logo-douyin-group-CHk-nXhx.mjs"),
	"logo-douyin-group-icon": () => import("./logo-douyin-group-icon-VpyLMBM4.mjs"),
	"logo-douyin-group-icon-inverse": () => import("./logo-douyin-group-icon-inverse-DUQUHouZ.mjs"),
	"logo-douyin-group-inverse": () => import("./logo-douyin-group-inverse-B6ag-E_l.mjs"),
	"logo-douyin-icon": () => import("./logo-douyin-icon-nX91nqIa.mjs"),
	"logo-douyin-icon-inverse": () => import("./logo-douyin-icon-inverse-CkF2c9Jo.mjs"),
	"logo-douyin-inverse": () => import("./logo-douyin-inverse-zIumFEl7.mjs"),
	"logo-dreamina": () => import("./logo-dreamina-CXTQgca6.mjs"),
	"logo-dreamina-inverse": () => import("./logo-dreamina-inverse-B9Wcfafc.mjs"),
	"logo-feilian": () => import("./logo-feilian-BpMMx_MI.mjs"),
	"logo-feilian-icon": () => import("./logo-feilian-icon-COtKvCSP.mjs"),
	"logo-gemini-icon": () => import("./logo-gemini-icon-De2zCbqs.mjs"),
	"logo-jianying": () => import("./logo-jianying-COwF6QAB.mjs"),
	"logo-jianying-icon": () => import("./logo-jianying-icon-8cvLWY1n.mjs"),
	"logo-jianying-icon-inverse": () => import("./logo-jianying-icon-inverse-BTgiV0tK.mjs"),
	"logo-jianying-inverse": () => import("./logo-jianying-inverse-non4RPyu.mjs"),
	"logo-jimeng-ai": () => import("./logo-jimeng-ai-D3aWIUDz.mjs"),
	"logo-jimeng-ai-inverse": () => import("./logo-jimeng-ai-inverse-BFq7O4wf.mjs"),
	"logo-jimeng-icon": () => import("./logo-jimeng-icon-ejr_MNQP.mjs"),
	"logo-jimeng-icon-inverse": () => import("./logo-jimeng-icon-inverse-Dj8QDmZz.mjs"),
	"logo-tiktok": () => import("./logo-tiktok-DX37o_58.mjs"),
	"logo-tiktok-icon": () => import("./logo-tiktok-icon-Tf4zaZEs.mjs"),
	"logo-tiktok-icon-inverse": () => import("./logo-tiktok-icon-inverse-D34bi5_D.mjs"),
	"logo-tiktok-inverse": () => import("./logo-tiktok-inverse-C-WFfAHe.mjs"),
	"logo-toutiao": () => import("./logo-toutiao-Cy9fqtHO.mjs"),
	"logo-toutiao-icon": () => import("./logo-toutiao-icon-DXX1ye9j.mjs"),
	"logo-toutiao-icon-inverse": () => import("./logo-toutiao-icon-inverse-CggbH7m8.mjs"),
	"logo-toutiao-inverse": () => import("./logo-toutiao-inverse-BOPSSoLv.mjs"),
	"logo-trae": () => import("./logo-trae-AiVfc-89.mjs"),
	"logo-trae-icon": () => import("./logo-trae-icon-ZcqQaVGn.mjs"),
	"logo-trae-inverse": () => import("./logo-trae-inverse-UVFm8DET.mjs"),
	"logo-vaka": () => import("./logo-vaka-DfuH9w7T.mjs"),
	"logo-vaka-icon": () => import("./logo-vaka-icon-CLKMz_vo.mjs"),
	"logo-vaka-inverse": () => import("./logo-vaka-inverse-CbP8Zu2Y.mjs"),
	"logo-viking": () => import("./logo-viking-Bc7Az53v.mjs"),
	"logo-viking-icon": () => import("./logo-viking-icon-VAKPLYGp.mjs"),
	"logo-viking-inverse": () => import("./logo-viking-inverse-iryx3tA9.mjs"),
	"logo-volcano-engine": () => import("./logo-volcano-engine-3VLV8Mlg.mjs"),
	"logo-volcano-engine-cn": () => import("./logo-volcano-engine-cn-Bfd9S0R4.mjs"),
	"logo-volcano-engine-cn-inverse": () => import("./logo-volcano-engine-cn-inverse-Cs_oUMza.mjs"),
	"logo-volcano-engine-icon": () => import("./logo-volcano-engine-icon-DDIl6wDq.mjs"),
	"logo-volcano-engine-icon-inverse": () => import("./logo-volcano-engine-icon-inverse-CJJOnaOX.mjs"),
	"logo-volcano-engine-inverse": () => import("./logo-volcano-engine-inverse-CIKppB2T.mjs"),
	"logo-volcengine-ark": () => import("./logo-volcengine-ark-CIroLZD3.mjs"),
	"logo-volcengine-ark-icon": () => import("./logo-volcengine-ark-icon-D8k8P8dc.mjs"),
	"logo-volcengine-translate": () => import("./logo-volcengine-translate-BwtaSLNi.mjs"),
	"logo-volcengine-translate-icon": () => import("./logo-volcengine-translate-icon-BKW4Th4t.mjs"),
	"logo-volcengine-voice": () => import("./logo-volcengine-voice-CzEFr5Kc.mjs"),
	"logo-volcengine-voice-icon": () => import("./logo-volcengine-voice-icon-D9QfbTti.mjs"),
	"logo-xingtu": () => import("./logo-xingtu-DJNPIIGg.mjs"),
	"logo-xingtu-icon": () => import("./logo-xingtu-icon-DzUdgfS5.mjs"),
	"logo-xingtu-icon-inverse": () => import("./logo-xingtu-icon-inverse-C4xBhqrF.mjs"),
	"logo-xingtu-inverse": () => import("./logo-xingtu-inverse-D1rnpdIg.mjs"),
	mail: () => import("./mail-BhU_Dks_.mjs"),
	menu: () => import("./menu-S_fdlLjI.mjs"),
	"menu-align-left": () => import("./menu-align-left-CgjJDR__.mjs"),
	"merge-request": () => import("./merge-request-DX5W6-Ya.mjs"),
	message: () => import("./message-SRe05heJ.mjs"),
	"message-circle-plus": () => import("./message-circle-plus-CP19OLTW.mjs"),
	"message-circle-text": () => import("./message-circle-text-C22buxp1.mjs"),
	microphone: () => import("./microphone-Br6FdDYh.mjs"),
	minus: () => import("./minus-_rPu4KAS.mjs"),
	monitor: () => import("./monitor-CngQsSRJ.mjs"),
	moon: () => import("./moon-QJ59ReJ2.mjs"),
	"more-horizontal": () => import("./more-horizontal-M3opukxI.mjs"),
	"more-vertical": () => import("./more-vertical-BPunA_yJ.mjs"),
	music: () => import("./music-Cvy4RRW3.mjs"),
	"open-new-window": () => import("./open-new-window-CzpsPlR-.mjs"),
	pause: () => import("./pause-D17MInf-.mjs"),
	"picture-in-picture": () => import("./picture-in-picture-BeilBwl_.mjs"),
	"pie-chart-01": () => import("./pie-chart-01-C5x-q4B0.mjs"),
	"pie-chart-03": () => import("./pie-chart-03-DKnFUD3T.mjs"),
	"play-square": () => import("./play-square-DJemgrj5.mjs"),
	plugin: () => import("./plugin-DCKuDFTQ.mjs"),
	podcast: () => import("./podcast-CmrPNnYL.mjs"),
	popup: () => import("./popup-Q-OTjMZy.mjs"),
	preview: () => import("./preview-DXuz1Yb1.mjs"),
	push: () => import("./push-CH8NDgUE.mjs"),
	refresh: () => import("./refresh-Bq3mPZSE.mjs"),
	robot: () => import("./robot-BX29mvYr.mjs"),
	search: () => import("./search-9J8_k5tx.mjs"),
	settings: () => import("./settings-C-0ZYOmm.mjs"),
	"settings-slider-ver": () => import("./settings-slider-ver-C0feqKIE.mjs"),
	share: () => import("./share-P26nhvtD.mjs"),
	shrink: () => import("./shrink-CN74fNtR.mjs"),
	"sidebar-simple-left-square-1": () => import("./sidebar-simple-left-square-1-D6JwZzi2.mjs"),
	"sidebar-simple-right-square": () => import("./sidebar-simple-right-square-tCFlaiQT.mjs"),
	skill: () => import("./skill-Cz-XPkuR.mjs"),
	"square-grid-circle-1": () => import("./square-grid-circle-1-D36f-Md2.mjs"),
	star: () => import("./star-COF8DrfB.mjs"),
	"star-filled": () => import("./star-filled-QFWPDLqU.mjs"),
	success: () => import("./success-B_HEhPNt.mjs"),
	sun: () => import("./sun-hdp2kaWH.mjs"),
	sync: () => import("./sync-WBuXB1fQ.mjs"),
	telescope: () => import("./telescope-CRFWEOCp.mjs"),
	terminal: () => import("./terminal-CtFFHnEv.mjs"),
	"thumb-down-filled": () => import("./thumb-down-filled-B1gWXyBA.mjs"),
	"thumb-up-filled": () => import("./thumb-up-filled-tMtp6fRA.mjs"),
	"time-clock": () => import("./time-clock-B07RNmuk.mjs"),
	tool: () => import("./tool-aSONl6kE.mjs"),
	"trash-03": () => import("./trash-03-B3mkoyq5.mjs"),
	"type-audio-state-default": () => import("./type-audio-state-default-BrWynzGN.mjs"),
	"type-audio-state-disable": () => import("./type-audio-state-disable-K1rPaxVP.mjs"),
	"type-chart-state-default": () => import("./type-chart-state-default-BCHKUcya.mjs"),
	"type-chart-state-disable": () => import("./type-chart-state-disable-D5FaQQC8.mjs"),
	"type-code-state-default": () => import("./type-code-state-default-D7Ihmgc3.mjs"),
	"type-code-state-disable": () => import("./type-code-state-disable-DpmDIgk5.mjs"),
	"type-excel-state-default": () => import("./type-excel-state-default-DZcb-Zwa.mjs"),
	"type-excel-state-disable": () => import("./type-excel-state-disable-DWy7kJVZ.mjs"),
	"type-html-state-default": () => import("./type-html-state-default-BOd51xKX.mjs"),
	"type-html-state-disable": () => import("./type-html-state-disable-B0zpvNJn.mjs"),
	"type-image-state-default": () => import("./type-image-state-default-eU-Ev0M_.mjs"),
	"type-image-state-disable": () => import("./type-image-state-disable-YgksVmRn.mjs"),
	"type-md-state-default": () => import("./type-md-state-default-Dh9Qrt6V.mjs"),
	"type-md-state-disable": () => import("./type-md-state-disable-B65otAl8.mjs"),
	"type-mind-state-default": () => import("./type-mind-state-default-DeYIGb9m.mjs"),
	"type-mind-state-disable": () => import("./type-mind-state-disable-DKF0ju0v.mjs"),
	"type-multi-dimensional-table-state-default": () => import("./type-multi-dimensional-table-state-default-DMaGd2i6.mjs"),
	"type-multi-dimensional-table-state-disable": () => import("./type-multi-dimensional-table-state-disable-D5t3LPO6.mjs"),
	"type-pdf-state-default": () => import("./type-pdf-state-default-CQBAwq5E.mjs"),
	"type-pdf-state-disable": () => import("./type-pdf-state-disable-Np9ibSDi.mjs"),
	"type-ppt-state-default": () => import("./type-ppt-state-default-DqXOsEvv.mjs"),
	"type-ppt-state-disable": () => import("./type-ppt-state-disable-B1ipUevH.mjs"),
	"type-video-state-default": () => import("./type-video-state-default-BcSC1pkt.mjs"),
	"type-video-state-disable": () => import("./type-video-state-disable-CRK9yoeQ.mjs"),
	"type-word-state-default": () => import("./type-word-state-default-IFdlFUMU.mjs"),
	"type-word-state-disable": () => import("./type-word-state-disable-DN2aVkeY.mjs"),
	"type-zip-state-default": () => import("./type-zip-state-default-BIJpEZr3.mjs"),
	"type-zip-state-disable": () => import("./type-zip-state-disable-CcuLmcQc.mjs"),
	"unfold-less": () => import("./unfold-less-CLOcHoKg.mjs"),
	"unfold-more": () => import("./unfold-more-DZX9jUR1.mjs"),
	"unknown-file": () => import("./unknown-file-9OF9bEjX.mjs"),
	"unknown-file-disabled": () => import("./unknown-file-disabled-kAFyjLjW.mjs"),
	upload: () => import("./upload-BHHhL2oU.mjs"),
	"upload-video": () => import("./upload-video-CSwdptKX.mjs"),
	user: () => import("./user-CNAzxect.mjs"),
	"user-02": () => import("./user-02-B00eVIOr.mjs"),
	"user-filled": () => import("./user-filled-ojKWS5D-.mjs"),
	vector: () => import("./vector-DlQQ4TQ5.mjs"),
	voice: () => import("./voice-DxfIMgQd.mjs"),
	volume: () => import("./volume-CH0QqYhc.mjs"),
	"volume-max": () => import("./volume-max-BuMPXNJM.mjs"),
	warning: () => import("./warning-e_V_tQrZ.mjs"),
	"x-circle": () => import("./x-circle-B1MUCJyT.mjs"),
	"zoom-in": () => import("./zoom-in-BePXtQ58.mjs"),
	"zoom-out": () => import("./zoom-out-CYQEFrYb.mjs")
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
