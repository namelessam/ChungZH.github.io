(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{396:function(e,t,r){"use strict";r.r(t);var s=r(2),o=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Powershell 源代码仓库🔗 "),r("a",{attrs:{href:"https://github.com/PowerShell/PowerShell",target:"_blank",rel:"noopener noreferrer"}},[e._v("🎉🎉🎉Powershell/Powershell"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("众所周知，Powershell 是微软开发的新一代的 shell。在微软的大力扶植下，已经成长为了一个成熟的 shell。而大部分人为了解决终端丑的问题，都选择了使用 Linux shell 这条路。而 "),r("code",[e._v("WSL")]),e._v(" 的推出更促进了这一点。")]),e._v(" "),r("p",[e._v("虽然使用 Linux shell 是一个不错的选择，但我们也可以在 Windows 的 shell 上下功夫。")]),e._v(" "),r("p",[e._v("对了，为什么不是美化 "),r("code",[e._v("CMD")]),e._v(" 呢？答案很简单，微软都抛弃的东西，我们还是也抛弃了吧。")]),e._v(" "),r("h2",{attrs:{id:"开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始")]),e._v(" "),r("p",[e._v("默认的 Powershell 是这样的：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://chungzhblog-photo.oss-cn-shenzhen.aliyuncs.com/%E5%8D%9A%E5%AE%A2/%E6%9E%81%E5%AE%A2%E6%94%BB%E7%95%A5/20/Powershell1.png",alt:"丑陋的 Powershell"}})]),e._v(" "),r("p",[e._v("但我们要把它改成这样：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://chungzhblog-photo.oss-cn-shenzhen.aliyuncs.com/%E5%8D%9A%E5%AE%A2/%E6%9E%81%E5%AE%A2%E6%94%BB%E7%95%A5/20/Powershell2.png",alt:"帅气的 Powershell"}})]),e._v(" "),r("p",[e._v("wow~简直能和使用 "),r("code",[e._v("oh-my-zsh")]),e._v(" 的终端媲美了！！！")]),e._v(" "),r("p",[e._v("话不多说，咱们开始。")]),e._v(" "),r("p",[e._v("首先我们了解一个工具 🌟"),r("a",{attrs:{href:"https://github.com/JanDeDobbeleer/oh-my-posh",target:"_blank",rel:"noopener noreferrer"}},[e._v("oh-my-posh"),r("OutboundLink")],1),e._v("。关于它的介绍可以看"),r("a",{attrs:{href:"https://web.okjike.com/post-detail/5c1b25c05158130011810bfd/originalPost",target:"_blank",rel:"noopener noreferrer"}},[e._v("我在即刻的推荐文"),r("OutboundLink")],1),e._v("。总之，这个工具就是用来美化 Powershell 的。上图就是用了 oh-my-posh 后的效果。")]),e._v(" "),r("h3",{attrs:{id:"预备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#预备","aria-hidden":"true"}},[e._v("#")]),e._v(" 预备")]),e._v(" "),r("p",[e._v("为了获得更完美的体验，我们可以先安装几个 "),r("code",[e._v("Powerline")]),e._v(" 字体。可以在 "),r("a",{attrs:{href:"https://github.com/powerline/fonts",target:"_blank",rel:"noopener noreferrer"}},[e._v("powerline/fonts"),r("OutboundLink")],1),e._v(" 中下载。下载过程不赘述。")]),e._v(" "),r("p",[e._v("下载好 Powerline 字体后，需要把终端的字体改成你刚刚下载的 Powerline 字体。")]),e._v(" "),r("p",[e._v("对了，由于默认的 Powershell 终端改字体比较麻烦，我们可以使用终端模拟器。大家可以使用 "),r("a",{attrs:{href:"https://github.com/Eugeny/terminus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eugeny/terminus"),r("OutboundLink")],1),e._v(" 这个工具。安装好后在 Settings 页面修改字体就行了。大家可以自己摸索。")]),e._v(" "),r("h3",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),r("p",[e._v("好了，先来安装一下 "),r("code",[e._v("oh-my-posh")]),e._v("。往 Powershell 狂输以下命令：")]),e._v(" "),r("div",{staticClass:"language-powershell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-powershell"}},[r("code",[e._v("Install"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Module posh"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("git "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Scope CurrentUser\nInstall"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Module oh"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("my"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("posh "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Scope CurrentUser\n")])])]),r("p",[e._v("这样就安装好了 "),r("code",[e._v("posh-git")]),e._v(" 和 "),r("code",[e._v("oh-my-posh")]),e._v(" 这两个插件了。")]),e._v(" "),r("h3",{attrs:{id:"使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),r("div",{staticClass:"language-powershell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-powershell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("Import-Module")]),e._v(" oh"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("my"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("posh\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("Import-Module")]),e._v(" posh"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("git\n")])])]),r("p",[e._v("输入如上命令即可。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://chungzhblog-photo.oss-cn-shenzhen.aliyuncs.com/%E5%8D%9A%E5%AE%A2/%E6%9E%81%E5%AE%A2%E6%94%BB%E7%95%A5/20/Powershell3.png",alt:"成果"}})]),e._v(" "),r("blockquote",[r("p",[e._v("upd：oh-my-posh 默认提供了许多主题，大家可以自行切换。方法是："),r("code",[e._v("Set-Theme 主题名")]),e._v("。主题有"),r("a",{attrs:{href:"https://github.com/JanDeDobbeleer/oh-my-posh#themes",target:"_blank",rel:"noopener noreferrer"}},[e._v("这些"),r("OutboundLink")],1),e._v("。大家可以自己玩玩。")])]),e._v(" "),r("p",[e._v("好了，取得了这样的成果，或许你以为已经成功了。但是——你只要重启一次终端，你就会发现问题了。")]),e._v(" "),r("p",[r("strong",[e._v("为什么重启之后终端又复原了呢？？？")])]),e._v(" "),r("p",[e._v("这是因为打开的时候必须要输入 "),r("code",[e._v("Import-Module")]),e._v(" 那两行命令才能启用插件。")]),e._v(" "),r("p",[e._v("那么我们可以设置一个脚本，让他每次打开 Powershell 就自动输入那两行命令。")]),e._v(" "),r("p",[e._v("好了，明确了目标，我们就开始行动吧。")]),e._v(" "),r("p",[e._v("首先输入：")]),e._v(" "),r("div",{staticClass:"language-powershell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-powershell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("New-Item")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$profile")]),e._v("\n")])])]),r("p",[r("img",{attrs:{src:"https://chungzhblog-photo.oss-cn-shenzhen.aliyuncs.com/%E5%8D%9A%E5%AE%A2/%E6%9E%81%E5%AE%A2%E6%94%BB%E7%95%A5/20/Powershell4.png",alt:"结果"}})]),e._v(" "),r("p",[e._v("好了，打开这个文件——相信大家如果仔细看信息就能发现这个文件在哪里了。然后在这个文件中粘贴以下命令：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Import-Module oh-my-posh\nImport-Module posh-git\n")])])]),r("p",[e._v("就可以每次打开 Powershell 都自动用上 oh-my-posh 了。")]),e._v(" "),r("h2",{attrs:{id:"福利"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#福利","aria-hidden":"true"}},[e._v("#")]),e._v(" 福利")]),e._v(" "),r("p",[e._v("我还写了一个脚本"),r("a",{attrs:{href:"https://github.com/ChungZH/MyScript/blob/master/installOhMyPosh.bat",target:"_blank",rel:"noopener noreferrer"}},[e._v("在这里"),r("OutboundLink")],1),e._v("，使用这个脚本就能能帮你从安装 oh-my-posh 直到输入 "),r("code",[e._v("New-Item $profile")]),e._v(" 了。安装字体和修改 "),r("code",[e._v("Microsoft.Powershell_profile.ps1")]),e._v(" 的任务留给大家。")]),e._v(" "),r("p",[e._v("之所以最后才放福利，是因为希望让大家都能自己动手，享受过程。")]),e._v(" "),r("p",[e._v("所以，")]),e._v(" "),r("p",[e._v("Enjoy it ☕~")])])},[],!1,null,null,null);t.default=o.exports}}]);