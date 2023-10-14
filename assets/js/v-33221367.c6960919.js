"use strict";(self.webpackChunklearning_docs_2_x=self.webpackChunklearning_docs_2_x||[]).push([[4429],{8515:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-33221367",path:"/go/go-basics/02-type.html",title:"类型",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.变量",slug:"_1-变量",children:[{level:3,title:"定义",slug:"定义",children:[]},{level:3,title:"简短模式",slug:"简短模式",children:[]}]}],filePathRelative:"go/go-basics/02-type.md",git:{updatedTime:1658130428e3,contributors:[{name:"wangming",email:"wangming@ttg.cn",commits:1}]}}},1770:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h1><h2 id="_1-变量" tabindex="-1"><a class="header-anchor" href="#_1-变量" aria-hidden="true">#</a> 1.变量</h2><p>变量是一段或者多段用来存储数据的内存</p><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>关键字<code>var</code>用来定义变量，和C不同，类型被放在变量名后。另外运行时内存分配操作会确保变量自动初始化为二进制零值，避免出现不可预测行为。如显式提供初始化值，可以省略变量类型，由编译器推断</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> x <span class="token builtin">int</span> \t\t<span class="token comment">// 初始化为0</span>\n<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token boolean">false</span>\t<span class="token comment">// 自动推断为bool类型</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可一次定义多个变量，包括用不同的初始值定义不同类型。</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> x<span class="token punctuation">,</span>y <span class="token builtin">int</span>\t\t\t\t<span class="token comment">// 相同类型的多个变量</span>\n<span class="token keyword">var</span> a<span class="token punctuation">,</span> s <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span>\t<span class="token comment">// 不同类型的初始化值</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>依照惯例，建议以组方式整理多行变量定义。</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>\n\tx<span class="token punctuation">,</span>y <span class="token builtin">int</span>\n    a<span class="token punctuation">,</span>s <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="简短模式" tabindex="-1"><a class="header-anchor" href="#简短模式" aria-hidden="true">#</a> 简短模式</h3><p>除了关键字<code>var</code> 外，还可以使用更加简短的变量定义和初始化语法。</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    x <span class="token operator">:=</span> <span class="token number">100</span>\n    a<span class="token punctuation">,</span> s<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;abc&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>只是要注意，简短模式有些限制：</p><ul><li>定义变量，同时显示初始化。</li><li>不能提供数据类型。</li><li>只能用在函数内部。</li></ul>',15),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])}}]);