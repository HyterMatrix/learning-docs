"use strict";(self.webpackChunklearning_docs_2_x=self.webpackChunklearning_docs_2_x||[]).push([[2917],{5407:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-4c900dcc",path:"/java/java-basics/05-interface-lambda-innerclass.html",title:"第五章 接口、lambda表达式和内部类",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"接口",slug:"接口",children:[{level:3,title:"接口概念",slug:"接口概念",children:[]},{level:3,title:"接口的特性",slug:"接口的特性",children:[]},{level:3,title:"接口与抽象类",slug:"接口与抽象类",children:[]},{level:3,title:"静态方法",slug:"静态方法",children:[]},{level:3,title:"默认方法",slug:"默认方法",children:[]},{level:3,title:"解决默认方法冲突",slug:"解决默认方法冲突",children:[]}]},{level:2,title:"接口示例",slug:"接口示例",children:[{level:3,title:"接口与回调",slug:"接口与回调",children:[]},{level:3,title:"COmparator接口",slug:"comparator接口",children:[]},{level:3,title:"对象克隆",slug:"对象克隆",children:[]}]},{level:2,title:"lambad表达式",slug:"lambad表达式",children:[{level:3,title:"为什么引入lambda表达式",slug:"为什么引入lambda表达式",children:[]},{level:3,title:"lambda表达式语法",slug:"lambda表达式语法",children:[]},{level:3,title:"函数式接口",slug:"函数式接口",children:[]},{level:3,title:"方法引用",slug:"方法引用",children:[]},{level:3,title:"构造器引用",slug:"构造器引用",children:[]},{level:3,title:"变量作用域",slug:"变量作用域",children:[]},{level:3,title:"处理lambda表达式",slug:"处理lambda表达式",children:[]}]},{level:2,title:"内部类",slug:"内部类",children:[{level:3,title:"使用内部类访问对象状态",slug:"使用内部类访问对象状态",children:[]},{level:3,title:"内部类的特殊语法规则",slug:"内部类的特殊语法规则",children:[]},{level:3,title:"内部类是否有用、必要和安全",slug:"内部类是否有用、必要和安全",children:[]},{level:3,title:"局部内部类",slug:"局部内部类",children:[]},{level:3,title:"由外部方法访问变量",slug:"由外部方法访问变量",children:[]},{level:3,title:"匿名内部类",slug:"匿名内部类",children:[]},{level:3,title:"静态内部类",slug:"静态内部类",children:[]}]},{level:2,title:"代理",slug:"代理",children:[]}],filePathRelative:"java/java-basics/05-interface-lambda-innerclass.md",git:{updatedTime:1658130428e3,contributors:[{name:"wangming",email:"wangming@ttg.cn",commits:1}]}}},2549:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const e=(0,s(6252).uE)('<h1 id="第五章-接口、lambda表达式和内部类" tabindex="-1"><a class="header-anchor" href="#第五章-接口、lambda表达式和内部类" aria-hidden="true">#</a> 第五章 接口、lambda表达式和内部类</h1><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><p>在Java程序设计语言中，接口不是类，而是对类的一组需求描述，这些类要遵从接口描述的统一格式进行定义。</p><h3 id="接口概念" tabindex="-1"><a class="header-anchor" href="#接口概念" aria-hidden="true">#</a> 接口概念</h3><h3 id="接口的特性" tabindex="-1"><a class="header-anchor" href="#接口的特性" aria-hidden="true">#</a> 接口的特性</h3><p>接口不是类，尤其不能使用new运算符实例化一个接口：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comparable</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ERROR</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然而，尽管不能构造接口的对象，却能声明接口的变量：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//OK</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>接下来，如同instanceof检查一个对象是不是属于某一个特定类一样，也可以使用instance检查一个对象是否实现了某个特定的接口：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>anobject intanceof <span class="token class-name">Comparable</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>与可以建立类的继承关系一样，接口也可以被扩展.这里允许存在多条从具有较高通用性的接口道较高专用性的接口的链。</p><h3 id="接口与抽象类" tabindex="-1"><a class="header-anchor" href="#接口与抽象类" aria-hidden="true">#</a> 接口与抽象类</h3><p>为什么要引入接口的概念而不是直接设计成抽象类,如，</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Comparable</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Object</span> other<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>然后，Employee类再直接扩展这个抽象类，并提供compareTo方法的实现</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Object</span> other<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>非常遗憾，使用抽象类表示通用属性存在这样一个问题：每个类智能扩展于一个类。假设Employee类已经扩展于一个类，例如Person，它就不能再像下面这样扩展第二个类了</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">,</span><span class="token class-name">Comarable</span> <span class="token comment">//Error</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>但是每个类可以像下面这样实现多个接口</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span> <span class="token comment">// ok</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>有的程序设计的语言允许一个类有多个超类，例如C++，我们将此特性称为多重继承。而java的设计者选择了不支持多继承，其主要原因是多继承会让语言本身变得非常复杂，效率也会降低。</p><p>实际上，接口可以提供多重继承的大多数好处，同时还能避免多重继承的复杂性和低效性。</p><h3 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h3><p>在Java SE 8中，允许接在接口中增加静态方法。理论上讲，没有任何理由认为这是不合法的。只是这有违于将接口作为抽象贵方的初衷。</p><p>目前为止，通常的做法都是将静态方法放在伴随类中。在标准库中，你会看到成对出现的接口和实用工具类，例如Collection/Collections或Path/Paths。</p><h3 id="默认方法" tabindex="-1"><a class="header-anchor" href="#默认方法" aria-hidden="true">#</a> 默认方法</h3><p>可以为接口方法提供一个默认实现。必须用<code>default</code>修饰符标记这样一个方法。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>\n    <span class="token keyword">default</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">T</span> other<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当然，这并没有太大的用处，因为Comparable的每个实际实现都要覆盖这个方法。不过有些情况下，默认方法可能很有用。例如，如果希望在发生鼠标点击事件时得到通知，就要实现一个包含5个方法的接口</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MouseListener</span><span class="token punctuation">{</span>\n    <span class="token keyword">void</span> <span class="token function">mouseClicked</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">void</span> <span class="token function">mousePressed</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">void</span> <span class="token function">mouseReleased</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">void</span> <span class="token function">mouseEntered</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">void</span> <span class="token function">mouseExited</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>大多数情况下，你只需要关心其中1、2个事件类型。在Java SE8 中可以把所有的方法声明为默认方法，这些默认方什么都不做。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MouseListener</span><span class="token punctuation">{</span>\n    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">mouseClicked</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">mousePressed</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">mouseReleased</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">mouseEntered</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">mouseExited</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="解决默认方法冲突" tabindex="-1"><a class="header-anchor" href="#解决默认方法冲突" aria-hidden="true">#</a> 解决默认方法冲突</h3><p>如果现在一个接口中奖一个方法定义为默认方法，然后又在超类或另一个接口中定义了同样的方法，那么</p><ol><li>超类优先。如果超类提供了一个具体的方法，同名而且有相同参数类型的默认方法会被忽略。</li><li>接口冲突。如果一个超接口提供了一个默认方法，另一个接口提供了一个同名而且参数类型相同的方法。必须覆盖这个方法来解决冲突。</li></ol><h2 id="接口示例" tabindex="-1"><a class="header-anchor" href="#接口示例" aria-hidden="true">#</a> 接口示例</h2><h3 id="接口与回调" tabindex="-1"><a class="header-anchor" href="#接口与回调" aria-hidden="true">#</a> 接口与回调</h3><h3 id="comparator接口" tabindex="-1"><a class="header-anchor" href="#comparator接口" aria-hidden="true">#</a> COmparator接口</h3><h3 id="对象克隆" tabindex="-1"><a class="header-anchor" href="#对象克隆" aria-hidden="true">#</a> 对象克隆</h3><h2 id="lambad表达式" tabindex="-1"><a class="header-anchor" href="#lambad表达式" aria-hidden="true">#</a> lambad表达式</h2><h3 id="为什么引入lambda表达式" tabindex="-1"><a class="header-anchor" href="#为什么引入lambda表达式" aria-hidden="true">#</a> 为什么引入lambda表达式</h3><p>lambda表达式是一个可传递的代码块，可以在以后执行一次货多次。</p><h3 id="lambda表达式语法" tabindex="-1"><a class="header-anchor" href="#lambda表达式语法" aria-hidden="true">#</a> lambda表达式语法</h3><h3 id="函数式接口" tabindex="-1"><a class="header-anchor" href="#函数式接口" aria-hidden="true">#</a> 函数式接口</h3><h3 id="方法引用" tabindex="-1"><a class="header-anchor" href="#方法引用" aria-hidden="true">#</a> 方法引用</h3><h3 id="构造器引用" tabindex="-1"><a class="header-anchor" href="#构造器引用" aria-hidden="true">#</a> 构造器引用</h3><h3 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h3><h3 id="处理lambda表达式" tabindex="-1"><a class="header-anchor" href="#处理lambda表达式" aria-hidden="true">#</a> 处理lambda表达式</h3><h2 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类" aria-hidden="true">#</a> 内部类</h2><p>内部类是定义在另一类中的类。为什么要使用内部类，主要原因是：</p><ol><li>内部类方法可以访问该类定义所在的作用域数据，包括私有数据。</li><li>内部类可以对同一个包中的其他类隐藏起来。</li><li>当想要定义一个回调函数且不想编写大量大妈时，使用<code>匿名（anonymous）</code>内部类比较便捷。</li></ol><h3 id="使用内部类访问对象状态" tabindex="-1"><a class="header-anchor" href="#使用内部类访问对象状态" aria-hidden="true">#</a> 使用内部类访问对象状态</h3><h3 id="内部类的特殊语法规则" tabindex="-1"><a class="header-anchor" href="#内部类的特殊语法规则" aria-hidden="true">#</a> 内部类的特殊语法规则</h3><h3 id="内部类是否有用、必要和安全" tabindex="-1"><a class="header-anchor" href="#内部类是否有用、必要和安全" aria-hidden="true">#</a> 内部类是否有用、必要和安全</h3><h3 id="局部内部类" tabindex="-1"><a class="header-anchor" href="#局部内部类" aria-hidden="true">#</a> 局部内部类</h3><p>如果仔细的阅读以下TalkingClock示例代码就会发现，TimePrinter这个类名字只在start方法中创建这个类型的对象时使用了一次。</p><p>当遇到这种情况时，可以在一个方法中定义局部类。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">class</span> <span class="token class-name">TimeParinter</span> <span class="token keyword">implements</span> <span class="token class-name">ActionListenter</span><span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;At the tone, the time is &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>beep<span class="token punctuation">)</span> <span class="token class-name">Toollkit</span><span class="token punctuation">.</span><span class="token function">getDefaultToolkit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">beep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token class-name">ActionListener</span> listener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimePrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Timer</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>局部类不能用public或private访问说明符进行声明。呀的作用域被限定在声明这个局部类的块中。</p><p>局部类有个有优势，即对外部世界可以完全地隐藏起来。即使TalkingClock类中的其他代码也不能访问他，除start方法之外，没有任何方法知道TimeParinter类的存在</p><h3 id="由外部方法访问变量" tabindex="-1"><a class="header-anchor" href="#由外部方法访问变量" aria-hidden="true">#</a> 由外部方法访问变量</h3><p>与其他内部类相比较，局部类还有一个优点。它们不仅能访问包含它们的外部类，还可以访问局部变量。不过，那些局部变量必须事实上为final。这说明，他们一旦赋值就绝不会改变。</p><p>下面是个典型的示例。这里，将TalkingClock构造器的参数interval和beep移至start方法中</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token keyword">int</span> interval<span class="token punctuation">,</span> booleam beep<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">class</span> <span class="token class-name">TimePriner</span> <span class="token keyword">implements</span> <span class="token class-name">ActionListener</span><span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span>\n           <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;At the tone, the time is &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>beep<span class="token punctuation">)</span> <span class="token class-name">Toollkit</span><span class="token punctuation">.</span><span class="token function">getDefaultToolkit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">beep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token class-name">ActionListener</span> listener <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimePrinter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Timer</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span>interval<span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="匿名内部类" tabindex="-1"><a class="header-anchor" href="#匿名内部类" aria-hidden="true">#</a> 匿名内部类</h3><h3 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h3><h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理" aria-hidden="true">#</a> 代理</h2>',68),p={},t=(0,s(3744).Z)(p,[["render",function(n,a){return e}]])}}]);