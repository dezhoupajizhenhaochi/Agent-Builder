import { n as e } from "./rolldown-runtime-Dqa2HsxW.mjs";
//#region node_modules/@ve-design/react/node_modules/@ve-design/web/dist/icons/registry.js
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
function l(e) {
	return i().iconRegistry.get(e);
}
function u(e) {
	return i().iconRegistry.has(e);
}
//#endregion
//#region node_modules/@ve-design/react/node_modules/@ve-design/web/dist/rslib-runtime.js
var d = {};
d.d = (e, t) => {
	for (var n in t) d.o(t, n) && !d.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), d.r = (e) => {
	"u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
};
//#endregion
//#region node_modules/@ve-design/react/node_modules/@ve-design/web/dist/23467.js
var f = /* @__PURE__ */ e({
	getBuiltInIconNames: () => C,
	isBuiltInIconName: () => S,
	loadAllIcons: () => E,
	loadIcon: () => w,
	loadIcons: () => T,
	loader_namespaceObject: () => p
}), p = {};
d.r(p), d.d(p, {
	getBuiltInIconNames: () => C,
	isBuiltInIconName: () => S,
	loadAllIcons: () => E,
	loadIcon: () => w,
	loadIcons: () => T
});
var m = /* @__PURE__ */ "add.add-image.align-center.align-left.align-right.arrow-circle-up.arrow-down-md.arrow-down-sm.arrow-left-md.arrow-left-sm.arrow-right-md.arrow-right-sm.arrow-undo-up-left.arrow-undo-up-right.arrow-up-md.arrow-up-sm.atom.atom-02.attachment.bell.book-open-01.bookmark.brackets.chart.chart-pie.chat-circle.check.check-circle.chevron-down-md.chevron-down-sm.chevron-left-md.chevron-left-sm.chevron-right-md.chevron-right-sm.chevron-up-md.chevron-up-sm.close.code.command.compass-round-1.copy.corner-down-left.corner-down-right.database.date-calendar.dislike.document.down-up.download.drag.edit.emoji-profile.end.error.exit-full-screen.expand.face.file.file-attachment.file-check.filter.folder.folder-upload-1.folder-upload-1-1.full-screen.gift.globe.grid.headphones.help.history.home.image.indent.info.interface.key.lark.left-right.like.link.link-break.list.loading.loading-progress.log-in.log-out.logo-agentkit.logo-arkclaw.logo-arkclaw-inverse.logo-bytedance.logo-bytedance-icon.logo-bytedance-icon-inverse.logo-bytedance-inverse.logo-byteplus.logo-byteplus-icon.logo-byteplus-icon-inverse.logo-byteplus-inverse.logo-capcut.logo-capcut-inverse.logo-chatgpt-icon.logo-deepseek-icon.logo-doubao-llm.logo-doubao-llm-icon.logo-douyin.logo-douyin-group.logo-douyin-group-icon.logo-douyin-group-icon-inverse.logo-douyin-group-inverse.logo-douyin-icon.logo-douyin-icon-inverse.logo-douyin-inverse.logo-dreamina.logo-dreamina-inverse.logo-feilian.logo-feilian-icon.logo-gemini-icon.logo-jianying.logo-jianying-icon.logo-jianying-icon-inverse.logo-jianying-inverse.logo-jimeng-ai.logo-jimeng-ai-inverse.logo-jimeng-icon.logo-jimeng-icon-inverse.logo-tiktok.logo-tiktok-icon.logo-tiktok-icon-inverse.logo-tiktok-inverse.logo-toutiao.logo-toutiao-icon.logo-toutiao-icon-inverse.logo-toutiao-inverse.logo-trae.logo-trae-icon.logo-trae-inverse.logo-vaka.logo-vaka-icon.logo-vaka-inverse.logo-viking.logo-viking-icon.logo-viking-inverse.logo-volcano-engine.logo-volcano-engine-cn.logo-volcano-engine-cn-inverse.logo-volcano-engine-icon.logo-volcano-engine-icon-inverse.logo-volcano-engine-inverse.logo-volcengine-ark.logo-volcengine-ark-icon.logo-volcengine-translate.logo-volcengine-translate-icon.logo-volcengine-voice.logo-volcengine-voice-icon.logo-xingtu.logo-xingtu-icon.logo-xingtu-icon-inverse.logo-xingtu-inverse.mail.menu.menu-align-left.merge-request.message.message-circle-plus.message-circle-text.microphone.minus.monitor.moon.more-horizontal.more-vertical.music.open-new-window.pause.picture-in-picture.pie-chart-01.pie-chart-03.play-square.plugin.podcast.popup.preview.push.refresh.robot.search.settings.settings-slider-ver.share.shrink.sidebar-simple-left-square-1.sidebar-simple-right-square.skill.square-grid-circle-1.star.star-filled.success.sun.sync.telescope.terminal.thumb-down-filled.thumb-up-filled.time-clock.tool.trash-03.type-audio-state-default.type-audio-state-disable.type-chart-state-default.type-chart-state-disable.type-code-state-default.type-code-state-disable.type-excel-state-default.type-excel-state-disable.type-html-state-default.type-html-state-disable.type-image-state-default.type-image-state-disable.type-md-state-default.type-md-state-disable.type-mind-state-default.type-mind-state-disable.type-multi-dimensional-table-state-default.type-multi-dimensional-table-state-disable.type-pdf-state-default.type-pdf-state-disable.type-ppt-state-default.type-ppt-state-disable.type-video-state-default.type-video-state-disable.type-word-state-default.type-word-state-disable.type-zip-state-default.type-zip-state-disable.unfold-less.unfold-more.unknown-file.unknown-file-disabled.upload.upload-video.user.user-02.user-filled.vector.voice.volume.volume-max.warning.x-circle.zoom-in.zoom-out".split("."), h = new Set(m), g = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), v = {
	add: () => import("./add-C6G9LbHF.mjs"),
	"add-image": () => import("./add-image-SgiY0Sx1.mjs"),
	"align-center": () => import("./align-center-3iQ-ep9K.mjs"),
	"align-left": () => import("./align-left-BzW4nmBb.mjs"),
	"align-right": () => import("./align-right-ioJ5b7HZ.mjs"),
	"arrow-circle-up": () => import("./arrow-circle-up-RpNgJtyW.mjs"),
	"arrow-down-md": () => import("./arrow-down-md-Nb7he7tu.mjs"),
	"arrow-down-sm": () => import("./arrow-down-sm-DoVNu46x.mjs"),
	"arrow-left-md": () => import("./arrow-left-md-DMsDX8ZQ.mjs"),
	"arrow-left-sm": () => import("./arrow-left-sm-CG9fvG6K.mjs"),
	"arrow-right-md": () => import("./arrow-right-md-DQIQ3WoA.mjs"),
	"arrow-right-sm": () => import("./arrow-right-sm-DCd4UR0z.mjs"),
	"arrow-undo-up-left": () => import("./arrow-undo-up-left-z56GPQGA.mjs"),
	"arrow-undo-up-right": () => import("./arrow-undo-up-right-DBX0LyK6.mjs"),
	"arrow-up-md": () => import("./arrow-up-md-BJVRV1pU.mjs"),
	"arrow-up-sm": () => import("./arrow-up-sm-DCTE7UAp.mjs"),
	atom: () => import("./selects.js").then((e) => e._),
	"atom-02": () => import("./atom-02-BPHVS7kQ.mjs"),
	attachment: () => import("./attachment-r3wSnK1Y.mjs"),
	bell: () => import("./bell-DQZpUSJW.mjs"),
	"book-open-01": () => import("./book-open-01-9ZPQAN1S.mjs"),
	bookmark: () => import("./bookmark-BTgMdPf_.mjs"),
	brackets: () => import("./brackets-BcU3SLa8.mjs"),
	chart: () => import("./chart-Bb9scTdy.mjs"),
	"chart-pie": () => import("./chart-pie-CyCo3UhX.mjs"),
	"chat-circle": () => import("./chat-circle-O5qoqHMe.mjs"),
	check: () => import("./selects.js").then((e) => e.T).then((e) => e.check_namespaceObject),
	"check-circle": () => import("./selects.js").then((e) => e.y),
	"chevron-down-md": () => import("./chevron-down-md-CxTmWV6f.mjs"),
	"chevron-down-sm": () => import("./selects.js").then((e) => e.b).then((e) => e.chevron_down_sm_namespaceObject),
	"chevron-left-md": () => import("./chevron-left-md-BRJAyhWF.mjs"),
	"chevron-left-sm": () => import("./chevron-left-sm-PqCac2fX.mjs"),
	"chevron-right-md": () => import("./chevron-right-md-cx9zDxKn.mjs"),
	"chevron-right-sm": () => import("./chevron-right-sm-CXlO2rHA.mjs"),
	"chevron-up-md": () => import("./chevron-up-md-ClaeL3Fe.mjs"),
	"chevron-up-sm": () => import("./selects.js").then((e) => e.x),
	close: () => import("./close-CPqhf02g.mjs").then((e) => e.n),
	code: () => import("./code-DMPJdBHg.mjs"),
	command: () => import("./command-AM3bxAAJ.mjs"),
	"compass-round-1": () => import("./compass-round-1-DflvOSfl.mjs"),
	copy: () => import("./selects.js").then((e) => e.w),
	"corner-down-left": () => import("./corner-down-left-Ctf5Mnc0.mjs"),
	"corner-down-right": () => import("./corner-down-right-BBTWFxZa.mjs"),
	database: () => import("./database-BrIZApDN.mjs"),
	"date-calendar": () => import("./date-calendar-vzzOr6xZ.mjs"),
	dislike: () => import("./dislike-yShphL_Z.mjs"),
	document: () => import("./document-C_wNFyJ2.mjs"),
	"down-up": () => import("./down-up-PFNxEs8M.mjs"),
	download: () => import("./selects.js").then((e) => e.C),
	drag: () => import("./drag-BGhyIuUR.mjs"),
	edit: () => import("./edit-JETdpPDY.mjs"),
	"emoji-profile": () => import("./emoji-profile-CupwlHQ8.mjs"),
	end: () => import("./end-C-2SVedM.mjs"),
	error: () => import("./error-BQOS_6vi.mjs"),
	"exit-full-screen": () => import("./exit-full-screen-F1Ge-I8h.mjs"),
	expand: () => import("./expand-DlkocpkB.mjs"),
	face: () => import("./face-DVRCQLoi.mjs"),
	file: () => import("./file-BFePW7Kp.mjs"),
	"file-attachment": () => import("./file-attachment-BhmOMez4.mjs"),
	"file-check": () => import("./selects.js").then((e) => e.g),
	filter: () => import("./filter-BJDXfdfx.mjs"),
	folder: () => import("./folder-DlY1-mjn.mjs"),
	"folder-upload-1": () => import("./folder-upload-1-CK_nwZkr.mjs"),
	"folder-upload-1-1": () => import("./folder-upload-1-1-DAoe59wp.mjs"),
	"full-screen": () => import("./full-screen-Bqc0aRm6.mjs"),
	gift: () => import("./gift-W6fn5uyy.mjs"),
	globe: () => import("./globe-BNO8fNxy.mjs"),
	grid: () => import("./grid-D7nhVd9_.mjs"),
	headphones: () => import("./headphones-CnRDKZuS.mjs"),
	help: () => import("./help-BQMpWbCO.mjs"),
	history: () => import("./history-Ds7-pItN.mjs"),
	home: () => import("./home-eEJsH6cX.mjs"),
	image: () => import("./image-Dvc7O294.mjs"),
	indent: () => import("./indent-bgtntwmU.mjs"),
	info: () => import("./info-CRZkdvuH.mjs"),
	interface: () => import("./interface-CE8l7xb-.mjs"),
	key: () => import("./key-5ViA30Kh.mjs"),
	lark: () => import("./lark-B6qKLPFp.mjs"),
	"left-right": () => import("./left-right-Di9t6J4t.mjs"),
	like: () => import("./like-Z3Hc_XHi.mjs"),
	link: () => import("./link-BWbo7PHW.mjs"),
	"link-break": () => import("./link-break-CWgA3BHh.mjs"),
	list: () => import("./list-CX5ldifn.mjs"),
	loading: () => import("./42938-DOrk_OY2.mjs").then((e) => e.t).then((e) => e.loading_namespaceObject),
	"loading-progress": () => import("./selects.js").then((e) => e.S),
	"log-in": () => import("./log-in-elvGrA5e.mjs"),
	"log-out": () => import("./log-out-D1lkE9RU.mjs"),
	"logo-agentkit": () => import("./logo-agentkit-SC-x6i-P.mjs"),
	"logo-arkclaw": () => import("./logo-arkclaw-CDguI2bZ.mjs"),
	"logo-arkclaw-inverse": () => import("./logo-arkclaw-inverse-uD3l9jbk.mjs"),
	"logo-bytedance": () => import("./logo-bytedance-B_bQFirX.mjs"),
	"logo-bytedance-icon": () => import("./logo-bytedance-icon-Beika3i9.mjs"),
	"logo-bytedance-icon-inverse": () => import("./logo-bytedance-icon-inverse-oV2fQ9tk.mjs"),
	"logo-bytedance-inverse": () => import("./logo-bytedance-inverse-CDAiUY0P.mjs"),
	"logo-byteplus": () => import("./logo-byteplus-D9wSJI-d.mjs"),
	"logo-byteplus-icon": () => import("./logo-byteplus-icon-CqEOzbyz.mjs"),
	"logo-byteplus-icon-inverse": () => import("./logo-byteplus-icon-inverse-09RFRkrC.mjs"),
	"logo-byteplus-inverse": () => import("./logo-byteplus-inverse-CMNUHGVG.mjs"),
	"logo-capcut": () => import("./logo-capcut-CLJPU-p8.mjs"),
	"logo-capcut-inverse": () => import("./logo-capcut-inverse-B-MyctP8.mjs"),
	"logo-chatgpt-icon": () => import("./logo-chatgpt-icon-CCGv7gu7.mjs"),
	"logo-deepseek-icon": () => import("./logo-deepseek-icon-DTu1o-oC.mjs"),
	"logo-doubao-llm": () => import("./logo-doubao-llm-FtE0qUqI.mjs"),
	"logo-doubao-llm-icon": () => import("./logo-doubao-llm-icon-BPYCKNPF.mjs"),
	"logo-douyin": () => import("./logo-douyin-C8yALU0V.mjs"),
	"logo-douyin-group": () => import("./logo-douyin-group-D5PhjI1-.mjs"),
	"logo-douyin-group-icon": () => import("./logo-douyin-group-icon-CEXBnM7w.mjs"),
	"logo-douyin-group-icon-inverse": () => import("./logo-douyin-group-icon-inverse-CvcTegsO.mjs"),
	"logo-douyin-group-inverse": () => import("./logo-douyin-group-inverse-BL8F0vQB.mjs"),
	"logo-douyin-icon": () => import("./logo-douyin-icon-rjIaDgXY.mjs"),
	"logo-douyin-icon-inverse": () => import("./logo-douyin-icon-inverse-DFBRU1w-.mjs"),
	"logo-douyin-inverse": () => import("./logo-douyin-inverse-RPHr0Skt.mjs"),
	"logo-dreamina": () => import("./logo-dreamina-CbH2yBNr.mjs"),
	"logo-dreamina-inverse": () => import("./logo-dreamina-inverse-D8S5jNhJ.mjs"),
	"logo-feilian": () => import("./logo-feilian-B_vVBiX6.mjs"),
	"logo-feilian-icon": () => import("./logo-feilian-icon-BxjKcJPh.mjs"),
	"logo-gemini-icon": () => import("./logo-gemini-icon-BOYmvJtj.mjs"),
	"logo-jianying": () => import("./logo-jianying-Bk4l7FKm.mjs"),
	"logo-jianying-icon": () => import("./logo-jianying-icon-OXJR563p.mjs"),
	"logo-jianying-icon-inverse": () => import("./logo-jianying-icon-inverse-VxgFUH5d.mjs"),
	"logo-jianying-inverse": () => import("./logo-jianying-inverse-CVooSAnf.mjs"),
	"logo-jimeng-ai": () => import("./logo-jimeng-ai-QQiOG694.mjs"),
	"logo-jimeng-ai-inverse": () => import("./logo-jimeng-ai-inverse-CFuyN21l.mjs"),
	"logo-jimeng-icon": () => import("./logo-jimeng-icon-Dhj5_9OZ.mjs"),
	"logo-jimeng-icon-inverse": () => import("./logo-jimeng-icon-inverse-CKabN5nt.mjs"),
	"logo-tiktok": () => import("./logo-tiktok-K5GNgFmn.mjs"),
	"logo-tiktok-icon": () => import("./logo-tiktok-icon-CeUAIAGX.mjs"),
	"logo-tiktok-icon-inverse": () => import("./logo-tiktok-icon-inverse-CJEESE3P.mjs"),
	"logo-tiktok-inverse": () => import("./logo-tiktok-inverse-zV9gZGln.mjs"),
	"logo-toutiao": () => import("./logo-toutiao-DxtY60FO.mjs"),
	"logo-toutiao-icon": () => import("./logo-toutiao-icon-CmRB25-x.mjs"),
	"logo-toutiao-icon-inverse": () => import("./logo-toutiao-icon-inverse-QqdtXzHj.mjs"),
	"logo-toutiao-inverse": () => import("./logo-toutiao-inverse-B5RqT4iw.mjs"),
	"logo-trae": () => import("./logo-trae-B3hbV-gg.mjs"),
	"logo-trae-icon": () => import("./logo-trae-icon-DDfnV4OG.mjs"),
	"logo-trae-inverse": () => import("./logo-trae-inverse-W2pi-r_T.mjs"),
	"logo-vaka": () => import("./logo-vaka-DxS3Q-Cs.mjs"),
	"logo-vaka-icon": () => import("./logo-vaka-icon-rHeFGee0.mjs"),
	"logo-vaka-inverse": () => import("./logo-vaka-inverse-CkbPfJ6M.mjs"),
	"logo-viking": () => import("./logo-viking-CbSa_hoN.mjs"),
	"logo-viking-icon": () => import("./logo-viking-icon-j04fA4hK.mjs"),
	"logo-viking-inverse": () => import("./logo-viking-inverse-T4tHDYPL.mjs"),
	"logo-volcano-engine": () => import("./logo-volcano-engine-BbyKt_lG.mjs"),
	"logo-volcano-engine-cn": () => import("./logo-volcano-engine-cn-CBVhwZ2I.mjs"),
	"logo-volcano-engine-cn-inverse": () => import("./logo-volcano-engine-cn-inverse-CJh7QBV2.mjs"),
	"logo-volcano-engine-icon": () => import("./logo-volcano-engine-icon-Dbla1iES.mjs"),
	"logo-volcano-engine-icon-inverse": () => import("./logo-volcano-engine-icon-inverse-CHOnbQFK.mjs"),
	"logo-volcano-engine-inverse": () => import("./logo-volcano-engine-inverse-DLQAQeSG.mjs"),
	"logo-volcengine-ark": () => import("./logo-volcengine-ark-geP9_zeW.mjs"),
	"logo-volcengine-ark-icon": () => import("./logo-volcengine-ark-icon-CdRlwawC.mjs"),
	"logo-volcengine-translate": () => import("./logo-volcengine-translate-1tMwV0FS.mjs"),
	"logo-volcengine-translate-icon": () => import("./logo-volcengine-translate-icon-ChtogNdx.mjs"),
	"logo-volcengine-voice": () => import("./logo-volcengine-voice-yiaNu-l9.mjs"),
	"logo-volcengine-voice-icon": () => import("./logo-volcengine-voice-icon-BxRgD1fP.mjs"),
	"logo-xingtu": () => import("./logo-xingtu-JkcqVJaU.mjs"),
	"logo-xingtu-icon": () => import("./logo-xingtu-icon-Csuz8WvK.mjs"),
	"logo-xingtu-icon-inverse": () => import("./logo-xingtu-icon-inverse-gqI5cHWe.mjs"),
	"logo-xingtu-inverse": () => import("./logo-xingtu-inverse-Cs8FYK1X.mjs"),
	mail: () => import("./mail-DZ3lDWLP.mjs"),
	menu: () => import("./menu-CfaqmYu9.mjs"),
	"menu-align-left": () => import("./menu-align-left-HiPzIlFM.mjs"),
	"merge-request": () => import("./merge-request-D6VLaQas.mjs"),
	message: () => import("./message-B_PHEhd3.mjs"),
	"message-circle-plus": () => import("./message-circle-plus-r1YBXyek.mjs"),
	"message-circle-text": () => import("./message-circle-text-DcEORsw3.mjs"),
	microphone: () => import("./microphone-CSWyTkb9.mjs"),
	minus: () => import("./minus-D5RUX9Fj.mjs"),
	monitor: () => import("./monitor-0zsWfCyN.mjs"),
	moon: () => import("./moon-BoZeZAvX.mjs"),
	"more-horizontal": () => import("./more-horizontal-DX0ACPY2.mjs"),
	"more-vertical": () => import("./more-vertical-5qa0Mmrg.mjs"),
	music: () => import("./music-xjThhq_E.mjs"),
	"open-new-window": () => import("./selects.js").then((e) => e.h),
	pause: () => import("./pause-Dwu6R5Cq.mjs"),
	"picture-in-picture": () => import("./picture-in-picture-6_g8DtPl.mjs"),
	"pie-chart-01": () => import("./pie-chart-01-DfAMq1YO.mjs"),
	"pie-chart-03": () => import("./pie-chart-03-B7a9Ol6_.mjs"),
	"play-square": () => import("./play-square-C9_gx-eF.mjs"),
	plugin: () => import("./plugin-DXWvbCTY.mjs"),
	podcast: () => import("./podcast-Cnuj9n-R.mjs"),
	popup: () => import("./popup-CpH-BS50.mjs"),
	preview: () => import("./preview-DeLCs5ZH.mjs"),
	push: () => import("./push-CCfAL60t.mjs"),
	refresh: () => import("./refresh-Bd4BAzS9.mjs"),
	robot: () => import("./robot-Bbt4DAp5.mjs"),
	search: () => import("./selects.js").then((e) => e.m),
	settings: () => import("./settings-24OhI-ID.mjs"),
	"settings-slider-ver": () => import("./settings-slider-ver-D42AbhWx.mjs"),
	share: () => import("./share-CtuM1UG7.mjs"),
	shrink: () => import("./shrink-D4orhk0G.mjs"),
	"sidebar-simple-left-square-1": () => import("./sidebar-simple-left-square-1-jpw__fX0.mjs"),
	"sidebar-simple-right-square": () => import("./sidebar-simple-right-square-DBLT2X3d.mjs"),
	skill: () => import("./skill-BBunoCK5.mjs"),
	"square-grid-circle-1": () => import("./square-grid-circle-1-Cq8Fvjov.mjs"),
	star: () => import("./star-2dAd5XxO.mjs"),
	"star-filled": () => import("./star-filled-CPdrhl1P.mjs"),
	success: () => import("./success-xboXqjrN.mjs"),
	sun: () => import("./sun-C3xTqv9M.mjs"),
	sync: () => import("./sync-CaPrQJwC.mjs"),
	telescope: () => import("./telescope-GoJeaqP2.mjs"),
	terminal: () => import("./terminal-2GiDIKiv.mjs"),
	"thumb-down-filled": () => import("./thumb-down-filled-GBZaB3ml.mjs"),
	"thumb-up-filled": () => import("./thumb-up-filled-DkYWNQks.mjs"),
	"time-clock": () => import("./time-clock-B_Pq7K0G.mjs"),
	tool: () => import("./selects.js").then((e) => e.p),
	"trash-03": () => import("./trash-03-ljXDFYgj.mjs"),
	"type-audio-state-default": () => import("./type-audio-state-default-C9YSvb15.mjs"),
	"type-audio-state-disable": () => import("./type-audio-state-disable-CK3ufqDW.mjs"),
	"type-chart-state-default": () => import("./type-chart-state-default-CL4VsRRI.mjs"),
	"type-chart-state-disable": () => import("./type-chart-state-disable-Cd-whqTb.mjs"),
	"type-code-state-default": () => import("./type-code-state-default-BJzypoI1.mjs"),
	"type-code-state-disable": () => import("./type-code-state-disable-BjVSERnW.mjs"),
	"type-excel-state-default": () => import("./type-excel-state-default-BtkWFwzx.mjs"),
	"type-excel-state-disable": () => import("./type-excel-state-disable-Au8h1Ip8.mjs"),
	"type-html-state-default": () => import("./type-html-state-default-Cjjnu79b.mjs"),
	"type-html-state-disable": () => import("./type-html-state-disable-DVedPlu8.mjs"),
	"type-image-state-default": () => import("./type-image-state-default-C2c07hBq.mjs"),
	"type-image-state-disable": () => import("./type-image-state-disable-DPHfKKly.mjs"),
	"type-md-state-default": () => import("./type-md-state-default-CJMSIb4e.mjs"),
	"type-md-state-disable": () => import("./type-md-state-disable-NrCSsYAG.mjs"),
	"type-mind-state-default": () => import("./type-mind-state-default-HNRCDT06.mjs"),
	"type-mind-state-disable": () => import("./type-mind-state-disable-DB7MjXsV.mjs"),
	"type-multi-dimensional-table-state-default": () => import("./type-multi-dimensional-table-state-default-BTCj_ieu.mjs"),
	"type-multi-dimensional-table-state-disable": () => import("./type-multi-dimensional-table-state-disable-2SD298Sa.mjs"),
	"type-pdf-state-default": () => import("./type-pdf-state-default-KRjL_IWv.mjs"),
	"type-pdf-state-disable": () => import("./type-pdf-state-disable-BZq8VspG.mjs"),
	"type-ppt-state-default": () => import("./type-ppt-state-default-fo4V9W15.mjs"),
	"type-ppt-state-disable": () => import("./type-ppt-state-disable-gYlHArRa.mjs"),
	"type-video-state-default": () => import("./type-video-state-default-AYCGFR8Z.mjs"),
	"type-video-state-disable": () => import("./type-video-state-disable-DfZ8PY7S.mjs"),
	"type-word-state-default": () => import("./type-word-state-default-BtWv2eEj.mjs"),
	"type-word-state-disable": () => import("./type-word-state-disable-B6e7_e46.mjs"),
	"type-zip-state-default": () => import("./type-zip-state-default-CLWg8e5m.mjs"),
	"type-zip-state-disable": () => import("./type-zip-state-disable-B5cId5Es.mjs"),
	"unfold-less": () => import("./unfold-less-CzW9Rlmw.mjs"),
	"unfold-more": () => import("./unfold-more-DTtJHbee.mjs"),
	"unknown-file": () => import("./unknown-file-C5y4XJFT.mjs"),
	"unknown-file-disabled": () => import("./unknown-file-disabled-CVi6hTgu.mjs"),
	upload: () => import("./upload-Bj1tzH64.mjs"),
	"upload-video": () => import("./upload-video-DFDmbFyC.mjs"),
	user: () => import("./user-DooYGyWB.mjs"),
	"user-02": () => import("./user-02-C1XvbT1-.mjs"),
	"user-filled": () => import("./user-filled-BbM-OW-k.mjs"),
	vector: () => import("./vector-7VcvsIXb.mjs"),
	voice: () => import("./voice-BV9Gqrqt.mjs"),
	volume: () => import("./volume-DH59dQtd.mjs"),
	"volume-max": () => import("./volume-max-Cu70w9eF.mjs"),
	warning: () => import("./warning-zHmAQb9r.mjs"),
	"x-circle": () => import("./selects.js").then((e) => e.v),
	"zoom-in": () => import("./zoom-in-C9WcGFI0.mjs"),
	"zoom-out": () => import("./zoom-out-D6bgbYWM.mjs")
};
function y(e, t) {
	if (!e || typeof e != "object") return !1;
	let n = e;
	return n.name === t && typeof n.svg == "string";
}
function b(e, t) {
	return Object.values(e).find((e) => y(e, t));
}
function x(e) {
	return v[e]();
}
function S(e) {
	return h.has(e);
}
function C() {
	return m;
}
function w(e) {
	let t = _.get(e);
	if (t) return u(e) || c(t), Promise.resolve(t);
	let n = l(e);
	if (n) return _.set(e, n), Promise.resolve(n);
	let r = g.get(e);
	return r || (r = x(e).then((t) => {
		let n = b(t, e) ?? l(e);
		if (!n) throw Error(`Built-in icon "${e}" failed to register.`);
		_.set(e, n);
	}).catch((t) => {
		throw g.delete(e), t;
	}), g.set(e, r)), r.then(() => {
		let t = _.get(e) ?? l(e);
		if (!t) throw Error(`Built-in icon "${e}" failed to load.`);
		return t;
	});
}
function T(e) {
	return Promise.all(e.map((e) => w(e)));
}
function E() {
	return T(m);
}
//#endregion
export { s as a, d as i, S as n, l as o, w as r, c as s, f as t };
