(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{62:function(t,e,r){"use strict";r.r(e);var o=r(2),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("Windows 10 下，Telegram 客户端会把中文用宋体显示，难看极了。。这几天看见一篇 Spencer 大佬的文章 "),r("a",{attrs:{href:"https://sspai.com/post/58542",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 FontMod 为 Win32 应用程序自定义字体"),r("OutboundLink")],1),t._v("，于是决定试一下。")]),t._v(" "),r("blockquote",[r("p",[t._v("FontMod 就是字体外挂，"),r("strong",[t._v("通过 DLL 注入的方法")]),t._v("将应用程序的字体渲染部分强行修改为我们希望的字体 —— 比如将「中易宋体」替换为「微软雅黑」。经过测试，FontMod 能够有效修改使用 GDI 渲染引擎的 Win32 应用程序，以及一些基于 Qt 的应用程序。")]),t._v(" "),r("p",[t._v("—— SpencerWoo 《使用 FontMod 为 Win32 应用程序自定义字体》")])]),t._v(" "),r("p",[t._v("Telegram Desktop 就是使用 Qt 开发的，这方法也许能行！")]),t._v(" "),r("h2",{attrs:{id:"解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),r("p",[t._v("在 "),r("a",{attrs:{href:"https://github.com/ysc3839/FontMod",target:"_blank",rel:"noopener noreferrer"}},[t._v("FontMod"),r("OutboundLink")],1),t._v(" 的 "),r("a",{attrs:{href:"https://github.com/ysc3839/FontMod/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Releases"),r("OutboundLink")],1),t._v(" 页面下载最新版本的 "),r("code",[t._v("FontMod.dll")]),t._v(" 文件，改名为 "),r("code",[t._v("winmm.dll")]),t._v("，再放到 Telegram 的安装目录里。重启一下 Telegram 客户端，成功！")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/ChungZH/picgo-upload/master/tg.png",alt:""}})]),t._v(" "),r("p",[t._v("哇，爽爽爽！")]),t._v(" "),r("h2",{attrs:{id:"扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),r("p",[t._v("想知道 FontMod 的更多骚操作，请见"),r("a",{attrs:{href:"https://github.com/ysc3839/FontMod/blob/master/README.zh_CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("鼠年大吉！")]),t._v(" "),r("p",[t._v("ChungZH")]),t._v(" "),r("p",[t._v("2020 - 1 - 25 @ 广东 - 佛山")]),t._v(" "),r("p",[t._v("#EOF")]),t._v(" "),r("Vssue",{attrs:{title:"telegram-desktop-font"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);