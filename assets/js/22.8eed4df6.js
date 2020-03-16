(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{267:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("Vuepress 是 Evan You 编写的一个 Vue 驱动的静态网站生成器，一般用于创建文档网站、博客网站。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress 官方文档网站"),a("OutboundLink")],1),t._v(" · "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress GitHub 仓库地址"),a("OutboundLink")],1),t._v(" · "),a("a",{attrs:{href:"https://github.com/ulivz/awesome-vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-vuepress 关于 Vuepress 的一些好东西"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("本文将主要介绍创建 Vuepress 网站、使用 Git 管理、使用 CI 等方面的内容。")]),t._v(" "),a("blockquote",[a("p",[t._v("提示：我使用的是 Windows 系统，在其他平台上终端命令可能略有不同，请自行变通！")])]),t._v(" "),a("h2",{attrs:{id:"前期准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[t._v("#")]),t._v(" 前期准备")]),t._v(" "),a("p",[t._v("请事先安装好 yarn、Git 等软件。本文不介绍安装这些前期准备的方法，请自行查阅文档，锻炼阅读文档能力。")]),t._v(" "),a("h2",{attrs:{id:"下载-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-vuepress"}},[t._v("#")]),t._v(" 下载 Vuepress")]),t._v(" "),a("p",[t._v("首先我们创建一个文件夹，用于存放 Vuepress。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" vuepress-blog\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vuepress-blog\n")])])]),a("p",[t._v("然后往里面安装 Vuepress：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress@next "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Vuepress 1.x 版本")]),t._v("\n")])])]),a("p",[t._v("再修改一下 "),a("code",[t._v("package.json")]),t._v("，添加以下内容：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blog:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"blog:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"安装主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装主题"}},[t._v("#")]),t._v(" 安装主题")]),t._v(" "),a("p",[t._v("Vuepress 的主题有很多，可以在 "),a("a",{attrs:{href:"https://github.com/ulivz/awesome-vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-vuepress 关于 Vuepress 的一些好东西"),a("OutboundLink")],1),t._v(" 挑选一个你喜欢的主题，或者直接在 GitHub 搜索也可以。这里我使用 "),a("a",{attrs:{href:"https://github.com/meteorlxy/vuepress-theme-meteorlxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-meteorlxy"),a("OutboundLink")],1),t._v(" 作为例子。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-theme-meteorlxy@next\n")])])]),a("p",[t._v("ok，现在你已经安装好主题了。")]),t._v(" "),a("h2",{attrs:{id:"熟悉-vuepress-目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熟悉-vuepress-目录结构"}},[t._v("#")]),t._v(" 熟悉 Vuepress 目录结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),a("ul",[a("li",[a("code",[t._v("docs/.vuepress")]),t._v(": 用于存放全局的配置、组件、静态资源等。")]),t._v(" "),a("li",[a("code",[t._v("docs/.vuepress/components")]),t._v(": 该目录中的 Vue 组件将会被自动注册为全局组件。")]),t._v(" "),a("li",[a("code",[t._v("docs/.vuepress/theme")]),t._v(": 用于存放本地主题。")]),t._v(" "),a("li",[a("code",[t._v("docs/.vuepress/styles")]),t._v(": 用于存放样式相关的文件。")]),t._v(" "),a("li",[a("code",[t._v("docs/.vuepress/styles/index.styl")]),t._v(": 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。")]),t._v(" "),a("li",[a("code",[t._v("docs/.vuepress/styles/palette.styl")]),t._v(": 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。")]),t._v(" "),a("li",[a("code",[t._v("docs/.vuepress/public")]),t._v(": 静态资源目录。")]),t._v(" "),a("li",[a("code",[t._v("docs/.vuepress/config.js")]),t._v(": 配置文件的入口文件，也可以是 "),a("code",[t._v("YML")]),t._v(" 或 "),a("code",[t._v("toml")]),t._v("。")])]),t._v(" "),a("p",[t._v("大概就是这些，还有一些更高级的配置这里就没写了。相信有兴趣做更高级自定义的话都会自己去看 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress 官方文档网站"),a("OutboundLink")],1),t._v(" 了~")]),t._v(" "),a("h2",{attrs:{id:"配置-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-vuepress"}},[t._v("#")]),t._v(" 配置 Vuepress")]),t._v(" "),a("p",[t._v("首先创建 "),a("code",[t._v("docs")]),t._v(" 目录、"),a("code",[t._v("docs/.vuepress")]),t._v(" 目录：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs/.vuepress\n")])])]),a("p",[t._v("然后进入 "),a("code",[t._v(".vuepress")]),t._v(" 文件夹，创建一个 "),a("code",[t._v("config.js")]),t._v(" 配置文件。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("config.js")]),t._v(" 中粘贴以下内容：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网站 Title")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网站描述")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is my blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 网站语言")]),t._v("\n  locales"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-CN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用的主题")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-meteorlxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主题配置")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 个人信息（没有或不想设置的，删掉对应字段即可）")]),t._v("\n    personalInfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 昵称")]),t._v("\n      nickname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meteorlxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 个人简介")]),t._v("\n      description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Happy Coding<br/>Happy Life'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 电子邮箱")]),t._v("\n      email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meteor.lxy@foxmail.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所在地")]),t._v("\n      location"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Xi\\'an City, China'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组织")]),t._v("\n      organization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Xi\\'an Jiao Tong University'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 头像")]),t._v("\n      avatar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.meteorlxy.cn/assets/img/avatar.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 社交平台帐号信息")]),t._v("\n      sns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Github 帐号和链接")]),t._v("\n        github"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meteorlxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/meteorlxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Facebook 帐号和链接")]),t._v("\n        facebook"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meteorlxy.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.facebook.com/meteorlxy.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// LinkedIn 帐号和链接")]),t._v("\n        linkedin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meteorlxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.linkedin.com/in/meteorlxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Twitter 帐号和链接")]),t._v("\n        twitter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meteorlxy_cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://twitter.com/meteorlxy_cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新浪微博 帐号和链接")]),t._v("\n        weibo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@焦炭君_Meteor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://weibo.com/u/2039655434'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 知乎 帐号和链接")]),t._v("\n        zhihu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meteorlxy.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.zhihu.com/people/meteorlxy.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 豆瓣 帐号和链接")]),t._v("\n        douban"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'159342708'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.douban.com/people/159342708'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上方 header 的背景，可以使用图片，或者随机变化的图案")]),t._v("\n    headerBackground"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效")]),t._v("\n      url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/assets/img/bg.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为纯色背景")]),t._v("\n      useGeo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示文章的最近更新时间")]),t._v("\n    lastUpdated"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶部导航栏内容")]),t._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Posts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/posts/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 评论配置，参考下方 [页面评论] 章节")]),t._v("\n    comments"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meteorlxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-meteorlxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MY_CLIENT_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      clientSecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MY_CLIENT_SECRET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("blockquote",[a("p",[t._v("注意：这是 "),a("code",[t._v("meteorlxy")]),t._v(" 主题的默认配置，其他主题请查看主题文档。")])]),t._v(" "),a("p",[t._v("然后直接按照 "),a("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("meteorlxy 主题文档"),a("OutboundLink")],1),t._v("进行配置即可。")]),t._v(" "),a("h2",{attrs:{id:"配置-ci-和-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-ci-和-git"}},[t._v("#")]),t._v(" 配置 CI 和 Git")]),t._v(" "),a("blockquote",[a("p",[t._v("持续集成（英语：Continuous integration，缩写 CI）是一种软件工程流程，是将所有软件工程师对于软件的工作副本持续集成到共享主线（mainline）的一种举措。")])]),t._v(" "),a("p",[a("strong",[t._v("👷 这里我们所使用的持续集成平台是 Travis CI.")])]),t._v(" "),a("h3",{attrs:{id:"开启-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-ci"}},[t._v("#")]),t._v(" 开启 CI")]),t._v(" "),a("p",[t._v("首先，在 "),a("a",{attrs:{href:"https://github.com/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create a new repository"),a("OutboundLink")],1),t._v(" 里创建一个项目，项目名是 "),a("code",[t._v("GitHub 用户名.github.io")]),t._v("，然后到 "),a("a",{attrs:{href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI"),a("OutboundLink")],1),t._v(" 官网，用 GitHub 账户直接关联登录，并允许 Travis CI 查看自己的公有仓库。")]),t._v(" "),a("p",[t._v("然后我们到 "),a("a",{attrs:{href:"https://travis-ci.org/account/repositories",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI 账户页面"),a("OutboundLink")],1),t._v("开启博客仓库的 CI，如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chungzhblog-photo.oss-cn-shenzhen.aliyuncs.com/%E5%8D%9A%E5%AE%A2/CODE/create-vuepress-blog-and-use-git-manger/ci1.png",alt:"OpenCI"}})]),t._v(" "),a("h3",{attrs:{id:"添加变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加变量"}},[t._v("#")]),t._v(" 添加变量")]),t._v(" "),a("p",[t._v("我们要设置三个变量："),a("code",[t._v("GIT_NAME")]),t._v("、"),a("code",[t._v("GIT_EMAIL")]),t._v("、"),a("code",[t._v("GITHUB_TOKEN")]),t._v("，分别是 "),a("code",[t._v("git")]),t._v(" 用户名、"),a("code",[t._v("git")]),t._v(" 用户邮箱和 GitHub token。")]),t._v(" "),a("p",[t._v("其中前两项的值可以在本地查看：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对应 GIT_NAME")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对应 GIT_EMAIL")]),t._v("\n")])])]),a("p",[t._v("第三项 GitHub token 要在 GitHub 申请：")]),t._v(" "),a("ul",[a("li",[t._v("访问 "),a("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 账户设置 > Tokens"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("生成新 Token: Generate new token")]),t._v(" "),a("li",[t._v("填入 Token 描述，并给予 Token 第一项 "),a("code",[t._v("repo")]),t._v(" 的全部权限")]),t._v(" "),a("li",[t._v("将生成的 Token 复制，保存（生成 Token 的页面只有一次机会看见，请保存妥当。）")])]),t._v(" "),a("p",[t._v("在 Travis CI 仓库配置中，将三个变量填入设置（位于 "),a("code",[t._v("Settings > Environment Variables")]),t._v(" 处并保存：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chungzhblog-photo.oss-cn-shenzhen.aliyuncs.com/%E5%8D%9A%E5%AE%A2/CODE/create-vuepress-blog-and-use-git-manger/ci2.png",alt:""}})]),t._v(" "),a("p",[t._v("然后在博客根目录里创建一个 "),a("code",[t._v(".travis.yml")]),t._v("，并粘贴一下内容进去：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sudo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" required\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vuepress\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("before_install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" export TZ='Asia/Shanghai'\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn install\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn blog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(' echo "chungzh.cn" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" docs/.vuepress/dist/CNAME "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 这里 "chungzh.cn" 改成你自己的域名，如果没有，删掉这行就行了')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GIT_NAME\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GIT_EMAIL\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target-branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vuepress\n")])])]),a("p",[t._v("然后我们新建一个 "),a("code",[t._v(".gititnore")]),t._v(" 文件，粘贴以下内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".DS_Store\nThumbs.db\ndb.json\n*.log\nnode_modules/\ndocs/.vuepress/dist/\n")])])]),a("p",[t._v("好，现在输入以下命令，创建一个 Git 项目：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b vuepress\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":tada: Init repo"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:ChungZH/ChungZH.github.io.git "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里改成你自己的项目地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin vuepress\n")])])]),a("p",[t._v("push 上去后，CI 应该就会开始了。静待片刻即可。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("ChungZH")]),t._v(" "),a("p",[t._v("2019 - 3 - 2 / 广东 - 佛山")]),t._v(" "),a("p",[t._v("#EOF 😘")]),t._v(" "),a("Vssue",{attrs:{title:"create-vuepress-blog-and-use-git-manger-it"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);