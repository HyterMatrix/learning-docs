"use strict";(self.webpackChunklearning_docs_2_x=self.webpackChunklearning_docs_2_x||[]).push([[9053],{8597:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-ecbed12a",path:"/python/python-basics/01-var.html",title:"第一章 变量",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 什么是变量",slug:"_1-什么是变量",children:[]},{level:2,title:"2. 变量的基本使用",slug:"_2-变量的基本使用",children:[]},{level:2,title:"3. 变量的三大组成部分",slug:"_3-变量的三大组成部分",children:[]},{level:2,title:"4. 变量的命名规范",slug:"_4-变量的命名规范",children:[]},{level:2,title:"5. 变量名风格",slug:"_5-变量名风格",children:[]},{level:2,title:"6. 变量值的三个特征",slug:"_6-变量值的三个特征",children:[]},{level:2,title:"7. is与==",slug:"_7-is与",children:[]},{level:2,title:"8. 小整数池",slug:"_8-小整数池",children:[]},{level:2,title:"9. 垃圾回收机制之引用计数",slug:"_9-垃圾回收机制之引用计数",children:[]},{level:2,title:"10. 常量",slug:"_10-常量",children:[{level:3,title:"什么是常量？",slug:"什么是常量",children:[]},{level:3,title:"为什么要有常量？",slug:"为什么要有常量",children:[]},{level:3,title:"怎么使用常量？",slug:"怎么使用常量",children:[]}]}],filePathRelative:"python/python-basics/01-var.md",git:{updatedTime:1658130428e3,contributors:[{name:"wangming",email:"wangming@ttg.cn",commits:1}]}}},7898:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="第一章-变量" tabindex="-1"><a class="header-anchor" href="#第一章-变量" aria-hidden="true">#</a> 第一章 变量</h1><h2 id="_1-什么是变量" tabindex="-1"><a class="header-anchor" href="#_1-什么是变量" aria-hidden="true">#</a> 1. 什么是变量</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>变量就是可以变化的量，量指的是事物的状态，比如人的年龄、性别，游戏角色的等级、金钱等等\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-变量的基本使用" tabindex="-1"><a class="header-anchor" href="#_2-变量的基本使用" aria-hidden="true">#</a> 2. 变量的基本使用</h2><p>原则：先定义，后引用</p><p>定义变量示范如下</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&#39;Jason&#39;</span> <span class="token comment"># 记下人的名字为&#39;Jason&#39;</span>\nsex <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span>    <span class="token comment"># 记下人的性别为男性</span>\nage <span class="token operator">=</span> <span class="token number">18</span>      <span class="token comment"># 记下人的年龄为18岁</span>\nsalary <span class="token operator">=</span> <span class="token number">30000.1</span>  <span class="token comment"># 记下人的薪资为30000.1元</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>解释器执行到变量定义的代码时会申请内存空间存放变量值，然后将变量值的内存地址绑定给变量名。</p><p>通过变量名即可引用到对应的值</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 通过变量名即可引用到值，我们可以结合print()功能将其打印出来</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token comment"># 通过变量名age找到值18，然后执行print(18),输出：18</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_3-变量的三大组成部分" tabindex="-1"><a class="header-anchor" href="#_3-变量的三大组成部分" aria-hidden="true">#</a> 3. 变量的三大组成部分</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>变量名 <span class="token operator">=</span> 值\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>变量名：相当于与门牌号，指向值所存在的内存地址，是访问到值的唯一方式。</p><p>=：为赋值符号，用来将变量值的内存地址绑定给吧变量名。</p><p>值：就是我们存储的数据，反应的是事物的状态。</p><h2 id="_4-变量的命名规范" tabindex="-1"><a class="header-anchor" href="#_4-变量的命名规范" aria-hidden="true">#</a> 4. 变量的命名规范</h2><p>变量名的命名应该<code>见名知意</code></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 如果我们要存储的数据18代表的是一个人的年龄，那么变量名推荐命名为age</span>\nage <span class="token operator">=</span> <span class="token number">18</span> \n<span class="token comment"># 如果我们要存储的数据18代表的是一个人的等级，那么变量名推荐命名为level</span>\nlevel <span class="token operator">=</span> <span class="token number">18</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其他详细规范如下</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 命名规范</span>\n 变量名只能是 字母、数字或下划线的任意组合\n<span class="token number">2.</span> 变量名的第一个字符不能是数字\n<span class="token number">3.</span> 关键字不能声明为变量名，常用关键字如下\n<span class="token punctuation">[</span><span class="token string">&#39;and&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;as&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;assert&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;break&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;continue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;def&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;del&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;elif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;else&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;except&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;exec&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;finally&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;for&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;from&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;global&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;if&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lambda&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;not&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;or&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;print&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;raise&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;try&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;while&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;with&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yield&#39;</span><span class="token punctuation">]</span>\n\n<span class="token comment"># 错误示范如下：</span>\n<span class="token operator">*</span>a<span class="token operator">=</span><span class="token number">123</span>\n$b<span class="token operator">=</span><span class="token number">456</span>\nc$<span class="token operator">=</span><span class="token number">789</span>\n2_name<span class="token operator">=</span><span class="token string">&#39;lili&#39;</span>\n<span class="token number">123</span><span class="token operator">=</span><span class="token string">&#39;lili&#39;</span>\n<span class="token keyword">and</span><span class="token operator">=</span><span class="token number">123</span>\n年龄<span class="token operator">=</span><span class="token number">18</span> <span class="token comment"># 强烈建议不要使用中文命名</span>\n\n<span class="token comment"># 正确示范如下</span>\nage_of_jason<span class="token operator">=</span><span class="token number">31</span>\npage1<span class="token operator">=</span><span class="token string">&#39;首页&#39;</span>\n_class<span class="token operator">=</span><span class="token string">&#39;终极一班&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_5-变量名风格" tabindex="-1"><a class="header-anchor" href="#_5-变量名风格" aria-hidden="true">#</a> 5. 变量名风格</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 风格一：驼峰体</span>\nAgeOfTony <span class="token operator">=</span> <span class="token number">56</span> \nNumberOfStudents <span class="token operator">=</span> <span class="token number">80</span>\n<span class="token comment"># 风格二：纯小写下划线(在python中，变量名的命名推荐使用该风格)</span>\nage_of_tony <span class="token operator">=</span> <span class="token number">56</span> \nnumber_of_students <span class="token operator">=</span> <span class="token number">80</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_6-变量值的三个特征" tabindex="-1"><a class="header-anchor" href="#_6-变量值的三个特征" aria-hidden="true">#</a> 6. 变量值的三个特征</h2><p>变量的值具备三大特性</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#1、id</span>\n反应的是变量在内存中的唯一编号，内存地址不同<span class="token builtin">id</span>肯定不同\n\n<span class="token comment">#2、type</span>\n变量值的类型\n\n<span class="token comment">#3、value</span>\n变量值\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>查看变量值三大特性的方式如下，我们将会在运算符中用到变量值的三大特性</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x<span class="token operator">=</span><span class="token string">&#39;Info Tony:18&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">id</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">type</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>x\n<span class="token number">4376607152</span>，<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span><span class="token string">&#39;Info Tony:18&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_7-is与" tabindex="-1"><a class="header-anchor" href="#_7-is与" aria-hidden="true">#</a> 7. is与==</h2><p>is：比较左右两个变量值的身份（id）是否相等</p><p>==：比较左右两个变量的值是否相等</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token string">&#39;info: Egon: 18&#39;</span>\ny <span class="token operator">=</span> <span class="token string">&#39;info: Egon: 18&#39;</span>\n\nx <span class="token operator">==</span> y <span class="token operator">//</span> <span class="token boolean">True</span>\nx <span class="token keyword">is</span> y <span class="token operator">//</span> <span class="token boolean">False</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>值相等的情况下，id可能不同，两块不同的内存的空间，可以存放相同的值。</p><h2 id="_8-小整数池" tabindex="-1"><a class="header-anchor" href="#_8-小整数池" aria-hidden="true">#</a> 8. 小整数池</h2><p>范围：[-5, 256]</p><p>从python解释器启动的那一刻开始，就会在内存中事先申请好一些列的内存空间存放好常用的整数【交互模式下】</p><p>在pycharm中，每次运行是所有代码都加载都内存中，属于一个整体，所以这个时候会有一个大整数对象池，即处于一个代码块的大整数是同一个对象。我们只需要记住这是一种优化机制，至于范围到底多大，无需细究。</p><h2 id="_9-垃圾回收机制之引用计数" tabindex="-1"><a class="header-anchor" href="#_9-垃圾回收机制之引用计数" aria-hidden="true">#</a> 9. 垃圾回收机制之引用计数</h2><h2 id="_10-常量" tabindex="-1"><a class="header-anchor" href="#_10-常量" aria-hidden="true">#</a> 10. 常量</h2><h3 id="什么是常量" tabindex="-1"><a class="header-anchor" href="#什么是常量" aria-hidden="true">#</a> 什么是常量？</h3><p>常量指在程序运行过程中不会改变的量</p><h3 id="为什么要有常量" tabindex="-1"><a class="header-anchor" href="#为什么要有常量" aria-hidden="true">#</a> 为什么要有常量？</h3><p>在程序运行过程中，有些值是固定的、不应该被改变，比如圆周率 3.141592653...</p><h3 id="怎么使用常量" tabindex="-1"><a class="header-anchor" href="#怎么使用常量" aria-hidden="true">#</a> 怎么使用常量？</h3><p>在Python中没有一个专门的语法定义常量，约定俗成是用全部大写的变量名表示常量。如：PI=3.14159。所以单从语法层面去讲，常量的使用与变量完全一致。</p>',44),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])}}]);