import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,c as o,a as p,f as t,w as c,b as s,e as r,o as i,d as l}from"./app-BE3eNaZf.js";const y={},u=s("h1",{id:"",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#"},[s("span")])],-1),d=s("h3",{id:"程序员思维",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#程序员思维"},[s("span",null,"程序员思维")])],-1),v=s("p",null,"学习编程，语法本身并不难，真正困难的是如何应用它来解决现实世界的问题。你要开始像程序员那样思考。一般来讲，这种思考包括了解你程序运行的目的，为达到该目的应选定的代码类型，以及如何使这些代码协同运行，并把一个任务拆分为一个个代码逻辑。",-1),m=s("h3",{id:"实现一个猜数字游戏",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#实现一个猜数字游戏"},[s("span",null,"实现一个猜数字游戏")])],-1),b=s("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#FFFFFF",color:"#000000"}},[s("pre",{class:"shiki light-plus vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#800000"}}," <h1>"),s("span",{style:{color:"#000000"}},"猜数字游戏"),s("span",{style:{color:"#800000"}},"</h1>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#800000"}},"    <p>"),s("span",{style:{color:"#000000"}},"我已经想好了一个1到100之间的数字。你能猜到吗？"),s("span",{style:{color:"#800000"}},"</p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#800000"}},"    <input"),s("span",{style:{color:"#E50000"}}," type"),s("span",{style:{color:"#000000"}},"="),s("span",{style:{color:"#0000FF"}},'"text"'),s("span",{style:{color:"#E50000"}}," id"),s("span",{style:{color:"#000000"}},"="),s("span",{style:{color:"#0000FF"}},'"guessField"'),s("span",{style:{color:"#E50000"}}," placeholder"),s("span",{style:{color:"#000000"}},"="),s("span",{style:{color:"#0000FF"}},'"输入你的猜测"'),s("span",{style:{color:"#800000"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#800000"}},"    <button"),s("span",{style:{color:"#E50000"}}," id"),s("span",{style:{color:"#000000"}},"="),s("span",{style:{color:"#0000FF"}},'"guessButton"'),s("span",{style:{color:"#800000"}},">"),s("span",{style:{color:"#000000"}},"猜"),s("span",{style:{color:"#800000"}},"</button>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#800000"}},"    <button"),s("span",{style:{color:"#E50000"}}," id"),s("span",{style:{color:"#000000"}},"="),s("span",{style:{color:"#0000FF"}},'"resetButton"'),s("span",{style:{color:"#800000"}},">"),s("span",{style:{color:"#000000"}},"重置"),s("span",{style:{color:"#800000"}},"</button>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#800000"}},"    <p"),s("span",{style:{color:"#E50000"}}," id"),s("span",{style:{color:"#000000"}},"="),s("span",{style:{color:"#0000FF"}},'"result"'),s("span",{style:{color:"#800000"}},"></p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#800000"}},"    <p"),s("span",{style:{color:"#E50000"}}," id"),s("span",{style:{color:"#000000"}},"="),s("span",{style:{color:"#0000FF"}},'"history"'),s("span",{style:{color:"#800000"}},"></p>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),F=s("div",{class:"language-javascript line-numbers-mode","data-highlighter":"shiki","data-ext":"javascript","data-title":"javascript",style:{"background-color":"#FFFFFF",color:"#000000"}},[s("pre",{class:"shiki light-plus vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"// 生成1到100之间的随机数")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"var"),s("span",{style:{color:"#001080"}}," randomNumber"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#001080"}},"Math"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"floor"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#001080"}},"Math"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"random"),s("span",{style:{color:"#000000"}},"() * "),s("span",{style:{color:"#098658"}},"100"),s("span",{style:{color:"#000000"}},") + "),s("span",{style:{color:"#098658"}},"1"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"//querySelector 选择元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"var"),s("span",{style:{color:"#001080"}}," guesses"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#001080"}},"document"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"querySelector"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#A31515"}},"'#history'"),s("span",{style:{color:"#000000"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"var"),s("span",{style:{color:"#001080"}}," lastResult"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#001080"}},"document"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"querySelector"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#A31515"}},"'#result'"),s("span",{style:{color:"#000000"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"var"),s("span",{style:{color:"#001080"}}," guessSubmit"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#001080"}},"document"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"querySelector"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#A31515"}},"'#guessField'"),s("span",{style:{color:"#000000"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"var"),s("span",{style:{color:"#001080"}}," guessButton"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#001080"}},"document"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"querySelector"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#A31515"}},"'#guessButton'"),s("span",{style:{color:"#000000"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"var"),s("span",{style:{color:"#001080"}}," resetButton"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#001080"}},"document"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"querySelector"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#A31515"}},"'#resetButton'"),s("span",{style:{color:"#000000"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"// 处理用户猜测")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"guessButton"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"addEventListener"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#A31515"}},"'click'"),s("span",{style:{color:"#000000"}},", "),s("span",{style:{color:"#0000FF"}},"function"),s("span",{style:{color:"#000000"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"    var"),s("span",{style:{color:"#001080"}}," userGuess"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#795E26"}},"Number"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#001080"}},"guessSubmit"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"value"),s("span",{style:{color:"#000000"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"    //清空输入框")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    guessSubmit"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"value"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},'""')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AF00DB"}},"    if"),s("span",{style:{color:"#000000"}}," ("),s("span",{style:{color:"#001080"}},"userGuess"),s("span",{style:{color:"#000000"}}," < "),s("span",{style:{color:"#098658"}},"1"),s("span",{style:{color:"#000000"}}," || "),s("span",{style:{color:"#001080"}},"userGuess"),s("span",{style:{color:"#000000"}}," > "),s("span",{style:{color:"#098658"}},"100"),s("span",{style:{color:"#000000"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"        lastResult"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"textContent"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"'请输入1到100之间的数字。'"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"    } "),s("span",{style:{color:"#AF00DB"}},"else"),s("span",{style:{color:"#000000"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AF00DB"}},"        if"),s("span",{style:{color:"#000000"}}," ("),s("span",{style:{color:"#001080"}},"userGuess"),s("span",{style:{color:"#000000"}}," === "),s("span",{style:{color:"#001080"}},"randomNumber"),s("span",{style:{color:"#000000"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"            lastResult"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"textContent"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"'恭喜你，猜对了！'"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"            lastResult"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"style"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"backgroundColor"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"'green'"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#795E26"}},"            setGameOver"),s("span",{style:{color:"#000000"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"        } "),s("span",{style:{color:"#AF00DB"}},"else"),s("span",{style:{color:"#AF00DB"}}," if"),s("span",{style:{color:"#000000"}}," ("),s("span",{style:{color:"#001080"}},"userGuess"),s("span",{style:{color:"#000000"}}," < "),s("span",{style:{color:"#001080"}},"randomNumber"),s("span",{style:{color:"#000000"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"            lastResult"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"textContent"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"'太小了，再试试！'"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"        } "),s("span",{style:{color:"#AF00DB"}},"else"),s("span",{style:{color:"#AF00DB"}}," if"),s("span",{style:{color:"#000000"}}," ("),s("span",{style:{color:"#001080"}},"userGuess"),s("span",{style:{color:"#000000"}}," > "),s("span",{style:{color:"#001080"}},"randomNumber"),s("span",{style:{color:"#000000"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"            lastResult"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"textContent"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"'太大了，再试试！'"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"        guesses"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"textContent"),s("span",{style:{color:"#000000"}}," +=  "),s("span",{style:{color:"#001080"}},"userGuess"),s("span",{style:{color:"#000000"}}," + "),s("span",{style:{color:"#A31515"}},"' '"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"});")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"// 监听重置游戏按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"resetButton"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"addEventListener"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#A31515"}},"'click'"),s("span",{style:{color:"#000000"}},", "),s("span",{style:{color:"#0000FF"}},"function"),s("span",{style:{color:"#000000"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#795E26"}},"    resetGame"),s("span",{style:{color:"#000000"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"//结束游戏")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"function"),s("span",{style:{color:"#795E26"}}," setGameOver"),s("span",{style:{color:"#000000"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    guessButton"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"disabled"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#0000FF"}},"true"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    resetButton"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"disabled"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#0000FF"}},"false"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    lastResult"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"style"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"color"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"'white'"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"//重置游戏")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"function"),s("span",{style:{color:"#795E26"}}," resetGame"),s("span",{style:{color:"#000000"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    resetButton"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"disabled"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#0000FF"}},"true"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    guessButton"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"disabled"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#0000FF"}},"false"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    guessSubmit"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"value"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"''"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    lastResult"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"textContent"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"''"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    guesses"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#001080"}},"textContent"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#A31515"}},"''"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#001080"}},"    randomNumber"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#001080"}},"Math"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"floor"),s("span",{style:{color:"#000000"}},"("),s("span",{style:{color:"#001080"}},"Math"),s("span",{style:{color:"#000000"}},"."),s("span",{style:{color:"#795E26"}},"random"),s("span",{style:{color:"#000000"}},"() * "),s("span",{style:{color:"#098658"}},"100"),s("span",{style:{color:"#000000"}},") + "),s("span",{style:{color:"#098658"}},"1"),s("span",{style:{color:"#000000"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=r(`<h3 id="任务拆解" tabindex="-1"><a class="header-anchor" href="#任务拆解"><span>任务拆解</span></a></h3><ol><li>随机生成一个 1 到 100 之间的自然数。</li><li>记录玩家当前的轮数。从 1 开始。</li><li>为玩家提供一种猜测数字的方法。</li><li>一旦有结果提交，先将其记录下来，以便用户可以看到他们先前的猜测。</li><li>然后检查它是否正确。</li><li>如果正确:</li></ol><ul><li>显示祝贺消息。</li><li>阻止玩家继续猜测。</li><li>显示控件允许玩家重新开始游戏。</li></ul><ol start="7"><li>如果出错，并且玩家有剩余轮次：</li></ol><ul><li>告诉玩家他们错了。</li><li>允许他们输入另一个猜测。</li></ul><ol start="8"><li>显示控件允许玩家重新开始游戏。</li><li>一旦游戏重启，确保游戏的逻辑和 UI 完全重置，然后返回步骤 1。</li></ol><h3 id="把步骤变为代码" tabindex="-1"><a class="header-anchor" href="#把步骤变为代码"><span>把步骤变为代码</span></a></h3><h4 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>html</span></a></h4><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#FFFFFF;color:#000000;"><pre class="shiki light-plus vp-code"><code><span class="line"><span style="color:#800000;">&lt;h1&gt;</span><span style="color:#000000;">猜数字游戏</span><span style="color:#800000;">&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;p&gt;</span><span style="color:#000000;">我已经想好了一个1到100之间的数字。你能猜到吗？</span><span style="color:#800000;">&lt;/p&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;input</span><span style="color:#E50000;"> type</span><span style="color:#000000;">=</span><span style="color:#0000FF;">&quot;text&quot;</span><span style="color:#E50000;"> id</span><span style="color:#000000;">=</span><span style="color:#0000FF;">&quot;guessField&quot;</span><span style="color:#E50000;"> placeholder</span><span style="color:#000000;">=</span><span style="color:#0000FF;">&quot;输入你的猜测&quot;</span><span style="color:#800000;">&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;button</span><span style="color:#E50000;"> id</span><span style="color:#000000;">=</span><span style="color:#0000FF;">&quot;guessButton&quot;</span><span style="color:#800000;">&gt;</span><span style="color:#000000;">猜</span><span style="color:#800000;">&lt;/button&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;button</span><span style="color:#E50000;"> id</span><span style="color:#000000;">=</span><span style="color:#0000FF;">&quot;resetButton&quot;</span><span style="color:#800000;">&gt;</span><span style="color:#000000;">重置</span><span style="color:#800000;">&lt;/button&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;p</span><span style="color:#E50000;"> id</span><span style="color:#000000;">=</span><span style="color:#0000FF;">&quot;result&quot;</span><span style="color:#800000;">&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;p</span><span style="color:#E50000;"> id</span><span style="color:#000000;">=</span><span style="color:#0000FF;">&quot;history&quot;</span><span style="color:#800000;">&gt;&lt;/p&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>javascript</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="background-color:#FFFFFF;color:#000000;"><pre class="shiki light-plus vp-code"><code><span class="line"><span style="color:#008000;">// 生成1到100之间的随机数</span></span>
<span class="line"><span style="color:#0000FF;">var</span><span style="color:#001080;"> randomNumber</span><span style="color:#000000;"> = </span><span style="color:#001080;">Math</span><span style="color:#000000;">.</span><span style="color:#795E26;">floor</span><span style="color:#000000;">(</span><span style="color:#001080;">Math</span><span style="color:#000000;">.</span><span style="color:#795E26;">random</span><span style="color:#000000;">() * </span><span style="color:#098658;">100</span><span style="color:#000000;">) + </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#008000;">//querySelector 选择元素</span></span>
<span class="line"><span style="color:#0000FF;">var</span><span style="color:#001080;"> guesses</span><span style="color:#000000;"> = </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">querySelector</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#history&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#0000FF;">var</span><span style="color:#001080;"> lastResult</span><span style="color:#000000;"> = </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">querySelector</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#result&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#0000FF;">var</span><span style="color:#001080;"> guessSubmit</span><span style="color:#000000;"> = </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">querySelector</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#guessField&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#0000FF;">var</span><span style="color:#001080;"> guessButton</span><span style="color:#000000;"> = </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">querySelector</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#guessButton&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#0000FF;">var</span><span style="color:#001080;"> resetButton</span><span style="color:#000000;"> = </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">querySelector</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#resetButton&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">// 处理用户猜测</span></span>
<span class="line"><span style="color:#001080;">guessButton</span><span style="color:#000000;">.</span><span style="color:#795E26;">addEventListener</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;click&#39;</span><span style="color:#000000;">, </span><span style="color:#0000FF;">function</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#0000FF;">    var</span><span style="color:#001080;"> userGuess</span><span style="color:#000000;"> = </span><span style="color:#795E26;">Number</span><span style="color:#000000;">(</span><span style="color:#001080;">guessSubmit</span><span style="color:#000000;">.</span><span style="color:#001080;">value</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#008000;">    //清空输入框</span></span>
<span class="line"><span style="color:#001080;">    guessSubmit</span><span style="color:#000000;">.</span><span style="color:#001080;">value</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&quot;&quot;</span></span>
<span class="line"><span style="color:#AF00DB;">    if</span><span style="color:#000000;"> (</span><span style="color:#001080;">userGuess</span><span style="color:#000000;"> &lt; </span><span style="color:#098658;">1</span><span style="color:#000000;"> || </span><span style="color:#001080;">userGuess</span><span style="color:#000000;"> &gt; </span><span style="color:#098658;">100</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#001080;">        lastResult</span><span style="color:#000000;">.</span><span style="color:#001080;">textContent</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;请输入1到100之间的数字。&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    } </span><span style="color:#AF00DB;">else</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#AF00DB;">        if</span><span style="color:#000000;"> (</span><span style="color:#001080;">userGuess</span><span style="color:#000000;"> === </span><span style="color:#001080;">randomNumber</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#001080;">            lastResult</span><span style="color:#000000;">.</span><span style="color:#001080;">textContent</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;恭喜你，猜对了！&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#001080;">            lastResult</span><span style="color:#000000;">.</span><span style="color:#001080;">style</span><span style="color:#000000;">.</span><span style="color:#001080;">backgroundColor</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;green&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#795E26;">            setGameOver</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        } </span><span style="color:#AF00DB;">else</span><span style="color:#AF00DB;"> if</span><span style="color:#000000;"> (</span><span style="color:#001080;">userGuess</span><span style="color:#000000;"> &lt; </span><span style="color:#001080;">randomNumber</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#001080;">            lastResult</span><span style="color:#000000;">.</span><span style="color:#001080;">textContent</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;太小了，再试试！&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        } </span><span style="color:#AF00DB;">else</span><span style="color:#AF00DB;"> if</span><span style="color:#000000;"> (</span><span style="color:#001080;">userGuess</span><span style="color:#000000;"> &gt; </span><span style="color:#001080;">randomNumber</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#001080;">            lastResult</span><span style="color:#000000;">.</span><span style="color:#001080;">textContent</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;太大了，再试试！&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#001080;">        guesses</span><span style="color:#000000;">.</span><span style="color:#001080;">textContent</span><span style="color:#000000;"> +=  </span><span style="color:#001080;">userGuess</span><span style="color:#000000;"> + </span><span style="color:#A31515;">&#39; &#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">// 监听重置游戏按钮</span></span>
<span class="line"><span style="color:#001080;">resetButton</span><span style="color:#000000;">.</span><span style="color:#795E26;">addEventListener</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;click&#39;</span><span style="color:#000000;">, </span><span style="color:#0000FF;">function</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#795E26;">    resetGame</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">});</span></span>
<span class="line"><span style="color:#008000;">//结束游戏</span></span>
<span class="line"><span style="color:#0000FF;">function</span><span style="color:#795E26;"> setGameOver</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#001080;">    guessButton</span><span style="color:#000000;">.</span><span style="color:#001080;">disabled</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">true</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#001080;">    resetButton</span><span style="color:#000000;">.</span><span style="color:#001080;">disabled</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">false</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#001080;">    lastResult</span><span style="color:#000000;">.</span><span style="color:#001080;">style</span><span style="color:#000000;">.</span><span style="color:#001080;">color</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;white&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#008000;">//重置游戏</span></span>
<span class="line"><span style="color:#0000FF;">function</span><span style="color:#795E26;"> resetGame</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#001080;">    resetButton</span><span style="color:#000000;">.</span><span style="color:#001080;">disabled</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">true</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#001080;">    guessButton</span><span style="color:#000000;">.</span><span style="color:#001080;">disabled</span><span style="color:#000000;"> = </span><span style="color:#0000FF;">false</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#001080;">    guessSubmit</span><span style="color:#000000;">.</span><span style="color:#001080;">value</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#001080;">    lastResult</span><span style="color:#000000;">.</span><span style="color:#001080;">textContent</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#001080;">    guesses</span><span style="color:#000000;">.</span><span style="color:#001080;">textContent</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;&#39;</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#001080;">    randomNumber</span><span style="color:#000000;"> = </span><span style="color:#001080;">Math</span><span style="color:#000000;">.</span><span style="color:#795E26;">floor</span><span style="color:#000000;">(</span><span style="color:#001080;">Math</span><span style="color:#000000;">.</span><span style="color:#795E26;">random</span><span style="color:#000000;">() * </span><span style="color:#098658;">100</span><span style="color:#000000;">) + </span><span style="color:#098658;">1</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function g(A,E){const n=e("CodeDemo");return i(),o("div",null,[u,d,v,p(" more "),m,t(n,{id:"code-demo-13",type:"normal",title:"%E7%8C%9C%E6%95%B0%E5%AD%97",code:"eJylVUtP20AQ/isr95BQUEyubZJDUculD6lcfXHshbg469Rep0WABOXRIIISChSJUkElUAsqD7VUhEf6ZxrbyYm/0LEdJ5sQgkqdHKydmW++mW9mPc6laFrlHnAoloomnPymvXZsHazbpZKdK8R4OBMIgieWSdi5Zev0h3NRsGd+Wrvlyvl8pTRVKe1HrdxxtL+/crZYWz9xNmZ9hD9T7yrl7epMGTDBwSquX11uxfhMgKeQjEkRHcvguMBR/JYKHFJkeB8xsWE8UbAqw0lGFSWc0lQZ62Cq/l6x5nYBFrK4VH8tClyAlzQp1QgD8cg7AAfwjPG+uZOzjg1MG86190tO+bDdP9NwNVUgmmDqqJtSikE1faxh4/q4V2JWNCRdyVBoL88jZ3XLzhXbu1XbKNib59AzgWRFHekikbX0czOdxDqKo2ciTUWGVU3Tw96rbw73oPsIQHpQL4o+FAjPvzaxPjaEVSwBC1SbWrAX96y5Gedk24f1OoINQJQ1yUxjQiMtIeHQvXoFoR4AdENU0aAvvYK7RfktaQR5eYbMZFrpGtXUuDXSl+HWSN+tEcooeAvVwM0LdfuGrJ1ZpzjvrH6zc6f1kSJMjogoy4+zgPYUuoMJBhxJVaTRUB8aNolEFY2AGOP+LLhcTAPrg248MPFVDDM9iWRF1cRuctef5+3SnLN37o+1/WXeP77mD1ACBz/PqgyjcDNJDEXRxASTNeHPRZ2R+zR1jLhrNqARKMRVJ1Q9OvVT37jBoTrTSYRVA7OorTTi8XjL5LYQ6E7Cnj6wPm7CTl9d5t2r4ugMLpary+kgdQcEg46pOJIUpdERXTOJPKCpMPSANaJjTNoDQfRBMY1fZEGKoPNMTe39vGMZ1s6+dVzwqOet+aXq0Rr828romDHxPxl3vt6SsflavwFaUHrjiBmdXhRCDcEFMtnYEefTslX87t+M/ofBzi/UPhwKhFmpf9oUL85VxVPEy8TzzsWK/XnLTyCQIKhVvwCAXVFZMcSkimVoCtVNXK+ApcZ4DIsgQd3l2khJwSC9SSkUu72APvA8WzlDjCmipa6utG4gztLqtP+hQJib5yHw6CQ0Y77TBwbawE3+BacULOU="},{default:c(()=>[b,F]),_:1}),h])}const x=a(y,[["render",g],["__file","1.html.vue"]]),q=JSON.parse('{"path":"/posts/javascript/1.html","title":"第一个Javascript程序","lang":"zh-CN","frontmatter":{"title":"第一个Javascript程序","description":"程序员思维 学习编程，语法本身并不难，真正困难的是如何应用它来解决现实世界的问题。你要开始像程序员那样思考。一般来讲，这种思考包括了解你程序运行的目的，为达到该目的应选定的代码类型，以及如何使这些代码协同运行，并把一个任务拆分为一个个代码逻辑。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/javascript/1.html"}],["meta",{"property":"og:site_name","content":"cv blog"}],["meta",{"property":"og:title","content":"第一个Javascript程序"}],["meta",{"property":"og:description","content":"程序员思维 学习编程，语法本身并不难，真正困难的是如何应用它来解决现实世界的问题。你要开始像程序员那样思考。一般来讲，这种思考包括了解你程序运行的目的，为达到该目的应选定的代码类型，以及如何使这些代码协同运行，并把一个任务拆分为一个个代码逻辑。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-09T17:33:51.000Z"}],["meta",{"property":"article:author","content":"cv"}],["meta",{"property":"article:modified_time","content":"2024-06-09T17:33:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第一个Javascript程序\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-09T17:33:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cv\\",\\"url\\":\\"https://github.com/lwflsq\\"}]}"]]},"headers":[{"level":3,"title":"程序员思维","slug":"程序员思维","link":"#程序员思维","children":[]},{"level":3,"title":"实现一个猜数字游戏","slug":"实现一个猜数字游戏","link":"#实现一个猜数字游戏","children":[]},{"level":3,"title":"任务拆解","slug":"任务拆解","link":"#任务拆解","children":[]},{"level":3,"title":"把步骤变为代码","slug":"把步骤变为代码","link":"#把步骤变为代码","children":[]}],"git":{"createdTime":1717954431000,"updatedTime":1717954431000,"contributors":[{"name":"普通市民梁生","email":"1874764803@qq.com","commits":1}]},"readingTime":{"minutes":2.65,"words":794},"filePathRelative":"posts/javascript/1.md","localizedDate":"2024年6月9日","excerpt":"\\n<h3>程序员思维</h3>\\n<p>学习编程，语法本身并不难，真正困难的是如何应用它来解决现实世界的问题。你要开始像程序员那样思考。一般来讲，这种思考包括了解你程序运行的目的，为达到该目的应选定的代码类型，以及如何使这些代码协同运行，并把一个任务拆分为一个个代码逻辑。</p>\\n","autoDesc":true}');export{x as comp,q as data};