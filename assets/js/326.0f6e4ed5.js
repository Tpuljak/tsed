(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{762:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registry"}},[t._v("#")]),t._v(" Registry "),a("Badge",{attrs:{text:"Class",type:"class"}}),t._v(" "),a("Badge",{attrs:{text:"private",title:"private",type:"private"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Registry } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/core"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.0/packages/core/src/class/Registry.ts#L0-L0"}},[t._v("/packages/core/src/class/Registry.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Registry<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" O> "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Map<"),a("a",{pre:!0,attrs:{href:"/api/core/class/RegistryKey.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RegistryKey")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" T> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[t._v('/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;T&gt;<span class="token punctuation">}</span> _class\n * @param <span class="token punctuation">{</span><a href="/api/core/class/RegistryHook.html"><span class="token">RegistryHook</span></a>&lt;T&gt;<span class="token punctuation">}</span> options\n */\n<span class="token keyword">constructor</span><span class="token punctuation">(</span>_class<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;T&gt;<span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/core/class/RegistryHook.html"><span class="token">RegistryHook</span></a>&lt;T&gt;<span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a specified element <span class="token keyword">from</span> a Map object.\n * @param key <a href="/api/common/mvc/decorators/Required.html"><span class="token">Required</span></a>. The key of the element to return <span class="token keyword">from</span> the Map object.\n * @returns <span class="token punctuation">{</span>T<span class="token punctuation">}</span> <a href="/api/common/mvc/decorators/method/Returns.html"><span class="token">Returns</span></a> the element associated with the specified key or undefined if the key can\'t be found in the Map object.\n */\n<span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> T | undefined<span class="token punctuation">;</span>\n/**\n *\n * @param key\n */\n<span class="token function">createIfNotExists</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> T<span class="token punctuation">;</span>\n/**\n * The <span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a <span class="token keyword">boolean</span> indicating whether an element with the specified key exists or not.\n * @param key\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span>\n */\n<span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method adds or updates an element with a specified key and value to a Map object.\n * @param key <a href="/api/common/mvc/decorators/Required.html"><span class="token">Required</span></a>. The key of the element to add to the Map object.\n * @param metadata <a href="/api/common/mvc/decorators/Required.html"><span class="token">Required</span></a>. The value of the element to add to the Map object.\n * @returns <span class="token punctuation">{</span>Registry<span class="token punctuation">}</span>\n */\n<span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a><span class="token punctuation">,</span> metadata<span class="token punctuation">:</span> T<span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n/**\n *\n * @param target\n * @param options\n */\n<span class="token function">merge</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a><span class="token punctuation">,</span> options<span class="token punctuation">:</span> Partial&lt;O&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method removes the specified element <span class="token keyword">from</span> a Map object.\n * @param key <a href="/api/common/mvc/decorators/Required.html"><span class="token">Required</span></a>. The key of the element to remove <span class="token keyword">from</span> the Map object.\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span> <a href="/api/common/mvc/decorators/method/Returns.html"><span class="token">Returns</span></a> true if an element in the Map object existed and has been removed<span class="token punctuation">,</span> or false if the element does not exist.\n */\n<span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/class/RegistryKey.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RegistryKey")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[a("code",[t._v('<a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a>')])]),t._v(" "),a("td",[t._v("Required. The key of the element to return from the Map object.")])])])]),t._v(" "),a("p",[t._v("The get() method returns a specified element from a Map object.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIfNotExists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/class/RegistryKey.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RegistryKey")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/class/RegistryKey.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RegistryKey")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("p",[t._v("The has() method returns a boolean indicating whether an element with the specified key exists or not.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/class/RegistryKey.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RegistryKey")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[a("code",[t._v('<a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a>')])]),t._v(" "),a("td",[t._v("Required. The key of the element to add to the Map object.  metadata")])])])]),t._v(" "),a("p",[t._v("The set() method adds or updates an element with a specified key and value to a Map object.")])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/class/RegistryKey.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RegistryKey")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Partial<O>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),a("hr"),t._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/class/RegistryKey.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("RegistryKey")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[a("code",[t._v('<a href="/api/core/class/RegistryKey.html"><span class="token">RegistryKey</span></a>')])]),t._v(" "),a("td",[t._v("Required. The key of the element to remove from the Map object.")])])])]),t._v(" "),a("p",[t._v("The delete() method removes the specified element from a Map object.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);