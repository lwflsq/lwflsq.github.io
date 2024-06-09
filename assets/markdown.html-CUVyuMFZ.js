import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,c as m,a as u,f as o,w as a,n as g,g as f,b as e,d as n,e as i,o as k}from"./app-BE3eNaZf.js";const b={},w=e("p",null,"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.",-1),v=e("p",null,"You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.",-1),y=i('<h2 id="markdown-introduction" tabindex="-1"><a class="header-anchor" href="#markdown-introduction"><span>Markdown Introduction</span></a></h2><p>If you are a new learner and don&#39;t know how to write Markdown, please read <a href="https://theme-hope.vuejs.press/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown Intro</a> and <a href="https://theme-hope.vuejs.press/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown Demo</a>.</p><h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config"><span>Markdown Config</span></a></h2><p>VuePress introduce configuration for each markdown page using Frontmatter.</p><div class="hint-container important"><p class="hint-container-title">Frontmatter</p><p>Frontmatter is an important concept in VuePress. If you don&#39;t know it, you need to read <a href="https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter Introduction</a>.</p></div><h2 id="markdown-extension" tabindex="-1"><a class="header-anchor" href="#markdown-extension"><span>Markdown Extension</span></a></h2><p>The Markdown content in VuePress will be parsed by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a>, which supports <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">syntax extensions</a> via markdown-it plugins.</p><h3 id="vuepress-enhancement" tabindex="-1"><a class="header-anchor" href="#vuepress-enhancement"><span>VuePress Enhancement</span></a></h3><p>To enrich document writing, VuePress has extended Markdown syntax.</p><p>For these extensions, please read <a href="https://theme-hope.vuejs.press/basic/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">Markdown extensions in VuePress</a>.</p><h3 id="theme-enhancement" tabindex="-1"><a class="header-anchor" href="#theme-enhancement"><span>Theme Enhancement</span></a></h3><p>By using <a href="https://md-enhance.vuejs.press/" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-md-enhance</code></a>, the theme extends more Markdown syntax and provides richer writing functions.</p><h4 id="code-tabs" tabindex="-1"><a class="header-anchor" href="#code-tabs"><span>Code Tabs</span></a></h4>',13),_=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#FFFFFF",color:"#000000"}},[e("pre",{class:"shiki light-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#795E26"}},"pnpm"),e("span",{style:{color:"#A31515"}}," add"),e("span",{style:{color:"#0000FF"}}," -D"),e("span",{style:{color:"#A31515"}}," vuepress-theme-hope")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),x=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#FFFFFF",color:"#000000"}},[e("pre",{class:"shiki light-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#795E26"}},"yarn"),e("span",{style:{color:"#A31515"}}," add"),e("span",{style:{color:"#0000FF"}}," -D"),e("span",{style:{color:"#A31515"}}," vuepress-theme-hope")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"background-color":"#FFFFFF",color:"#000000"}},[e("pre",{class:"shiki light-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#795E26"}},"npm"),e("span",{style:{color:"#A31515"}}," i"),e("span",{style:{color:"#0000FF"}}," -D"),e("span",{style:{color:"#A31515"}}," vuepress-theme-hope")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),V=e("ul",null,[e("li",null,[e("a",{href:"https://theme-hope.vuejs.press/guide/markdown/code/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},"View Detail")])],-1),F=e("h4",{id:"tabs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tabs"},[e("span",null,"Tabs")])],-1),M=e("p",null,"Apple",-1),P=e("p",null,"Banana",-1),D=e("p",null,"Orange",-1),A=i('<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/content/tabs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote"><span>Footnote</span></a></h4><p>This text has footnote[^first].</p><p>[^first]: This is footnote content</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/content/footnote.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="include-files" tabindex="-1"><a class="header-anchor" href="#include-files"><span>Include files</span></a></h4><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/content/include.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="tex" tabindex="-1"><a class="header-anchor" href="#tex"><span>TeX</span></a></h4><p>$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/tex.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist"><span>Tasklist</span></a></h4><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li></ul><p><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/tasklist.html" target="_blank" rel="noopener noreferrer">View Detail</a></p><h4 id="image-enhancement" tabindex="-1"><a class="header-anchor" href="#image-enhancement"><span>Image Enhancement</span></a></h4><p>Support setting color scheme and size.</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/image.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript"><span>Superscript and Subscript</span></a></h4><p>19<sup>th</sup> H<sub>2</sub>O</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/sup-sub.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>Component</span></a></h4>',20),T=i('<ul><li><a href="https://theme-hope.vuejs.press/guide/component/grammar.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="hint-box-and-gfm-alerts" tabindex="-1"><a class="header-anchor" href="#hint-box-and-gfm-alerts"><span>Hint box and GFM alerts</span></a></h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="hint-container info"><p class="hint-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#markdown-extension">link</a>.</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#FFFFFF;color:#000000;"><pre class="shiki light-plus vp-code"><code><span class="line"><span style="color:#0000FF;">const</span><span style="color:#0070C1;"> a</span><span style="color:#000000;"> = </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">Custom Title</p><p>A custom tip container</p></div><div class="hint-container warning"><p class="hint-container-title">Custom Title</p><p>A custom warning container</p></div><div class="hint-container caution"><p class="hint-container-title">Custom Title</p><p>A custom caution container</p></div><details class="hint-container details"><summary>Custom Title</summary><p>A custom details container</p></details><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html" target="_blank" rel="noopener noreferrer">GitHub Alert</a></li><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/hint.html" target="_blank" rel="noopener noreferrer">Hint boxes</a></li></ul><h4 id="align" tabindex="-1"><a class="header-anchor" href="#align"><span>Align</span></a></h4><div style="text-align:center;"><p>I am center</p></div><div style="text-align:right;"><p>I am right align</p></div><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/align.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs"><span>Attrs</span></a></h4><p>A <strong id="word">word</strong> having id.</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/attrs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="mark" tabindex="-1"><a class="header-anchor" href="#mark"><span>Mark</span></a></h4><p>You can mark <mark>important words</mark> .</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/mark.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="spoiler" tabindex="-1"><a class="header-anchor" href="#spoiler"><span>Spoiler</span></a></h4><p>VuePress Theme Hope is <span class="spoiler" tabindex="-1">powerful</span>.</p><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/spoiler.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize"><span>Stylize</span></a></h4>',23),C=i('<ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/stylize.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="reveal-js" tabindex="-1"><a class="header-anchor" href="#reveal-js"><span>Reveal.js</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html" width="100%" height="400"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/content/revealjs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="chart-js" tabindex="-1"><a class="header-anchor" href="#chart-js"><span>Chart.js</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/chartjs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart"><span>Flowchart</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>PlantUML</span></a></h4><img src="https://www.plantuml.com/plantuml/svg/ZP51JWCn34NtESM_0DAmxG8r2B42XE04QSPJedhYa3YgUljc0emqOW5UE9Br_xUUio_gijQPZUNW2JTtk9V33hRg1qKDtccGY3Vwh5JK6CUAKhsdKgRAyAwGCMZLN8kvf_oossP8IgCnn8LGP2QSGXmX4oONkER_f3n-AnVXCKjDUBv0pX7i3iHzl48yoH6xtfsgyoTqpgvPYaKIReTXW8QPoZhVPFH3FBoym_Q8LKHn_6FPZs9vlv1jbCQIePT46-ejyIjJkoWo9NBjsej_trhxdoi0" alt=""><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/plantuml.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo"><span>Code Demo</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/demo.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="playground" tabindex="-1"><a class="header-anchor" href="#playground"><span>Playground</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="kotlin-playground" tabindex="-1"><a class="header-anchor" href="#kotlin-playground"><span>Kotlin Playground</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/kotlin-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="sandpack-playground" tabindex="-1"><a class="header-anchor" href="#sandpack-playground"><span>Sandpack Playground</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/sandpack.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="vue-playground" tabindex="-1"><a class="header-anchor" href="#vue-playground"><span>Vue Playground</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/guide/markdown/code/vue-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul>',37);function E(S,z){const l=s("CodeTabs"),h=s("Tabs"),p=s("VPCard"),d=s("Badge");return k(),m("div",null,[w,v,u(" more "),y,o(l,{id:"48",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:a(({value:t,isActive:r})=>[n("pnpm")]),title1:a(({value:t,isActive:r})=>[n("yarn")]),title2:a(({value:t,isActive:r})=>[n("npm")]),tab0:a(({value:t,isActive:r})=>[_]),tab1:a(({value:t,isActive:r})=>[x]),tab2:a(({value:t,isActive:r})=>[j]),_:1}),V,F,o(h,{id:"69",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:a(({value:t,isActive:r})=>[n("apple")]),title1:a(({value:t,isActive:r})=>[n("banana")]),title2:a(({value:t,isActive:r})=>[n("orange")]),tab0:a(({value:t,isActive:r})=>[M]),tab1:a(({value:t,isActive:r})=>[P]),tab2:a(({value:t,isActive:r})=>[D]),_:1}),A,o(p,g(f({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16),T,e("p",null,[n("Donate Mr.Hope a cup of coffee. "),o(d,{type:"tip"},{default:a(()=>[n("Recommended")]),_:1})]),C])}const H=c(b,[["render",E],["__file","markdown.html.vue"]]),N=JSON.parse('{"path":"/en/demo/markdown.html","title":"Markdown Enhance","lang":"en-US","frontmatter":{"title":"Markdown Enhance","icon":"fab fa-markdown","order":2,"category":["Guide"],"tag":["Markdown"],"description":"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily. You should create and write Markdown files, so that VueP...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/en/demo/markdown.html"}],["meta",{"property":"og:site_name","content":"cv blog"}],["meta",{"property":"og:title","content":"Markdown Enhance"}],["meta",{"property":"og:description","content":"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily. You should create and write Markdown files, so that VueP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-01T08:18:38.000Z"}],["meta",{"property":"article:author","content":"cv"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2024-06-01T08:18:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown Enhance\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T08:18:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cv\\",\\"url\\":\\"https://github.com/lwflsq\\"}]}"]]},"headers":[{"level":2,"title":"Markdown Introduction","slug":"markdown-introduction","link":"#markdown-introduction","children":[]},{"level":2,"title":"Markdown Config","slug":"markdown-config","link":"#markdown-config","children":[]},{"level":2,"title":"Markdown Extension","slug":"markdown-extension","link":"#markdown-extension","children":[{"level":3,"title":"VuePress Enhancement","slug":"vuepress-enhancement","link":"#vuepress-enhancement","children":[]},{"level":3,"title":"Theme Enhancement","slug":"theme-enhancement","link":"#theme-enhancement","children":[]}]}],"git":{"createdTime":1717229918000,"updatedTime":1717229918000,"contributors":[{"name":"普通市民梁生","email":"1874764803@qq.com","commits":1}]},"readingTime":{"minutes":2.67,"words":801},"filePathRelative":"en/demo/markdown.md","localizedDate":"June 1, 2024","excerpt":"<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\\n","autoDesc":true}');export{H as comp,N as data};
