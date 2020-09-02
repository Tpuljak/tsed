(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{880:function(t,s,e){"use strict";e.r(s);var a=e(43),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"iprovider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iprovider"}},[t._v("#")]),t._v(" IProvider "),e("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { IProvider } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/di"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.0/packages/di/src/interfaces/IProvider.ts#L0-L0"}},[t._v("/packages/di/src/interfaces/IProvider.ts")])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" IProvider<T"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * An injection token. "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Typically an instance of `"),e("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("` or `InjectionToken`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but can be `"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    provide"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),e("a",{pre:!0,attrs:{href:"/api/di/class/Provider.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Provider")])]),t._v(" type\n     */\n    type?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/ProviderType.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("ProviderType")])]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Instance build by the injector\n     */\n    instance?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Define dependencies to build the provider\n     */\n    deps?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Class to instantiate for the `token`.\n     */\n    useClass?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<T>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Provide a function to build the provider\n     */\n    useFactory?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Provide an async function to build the provider\n     */\n    useAsyncFactory?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Provide predefined value\n     */\n    useValue?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),e("a",{pre:!0,attrs:{href:"/api/di/decorators/Scope.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Scope")])]),t._v(" used by the injector to build the provider.\n     */\n    scope?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/ProviderScope.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("ProviderScope")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of resolvers which will be used to resolve missing Symbol/Class when injector invoke a Class. This property allow external DI usage.\n     */\n    resolvers?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/IDIResolver.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("IDIResolver")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     */\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),e("h2",{attrs:{id:"members"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("provide"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("An injection token. (Typically an instance of "),e("code",[t._v("Type")]),t._v(" or "),e("code",[t._v("InjectionToken")]),t._v(", but can be "),e("code",[t._v("any")]),t._v(").")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("type?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/ProviderType.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("ProviderType")])]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Provider type")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("instance?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Instance build by the injector")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("deps?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Define dependencies to build the provider")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("useClass?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<T>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Class to instantiate for the "),e("code",[t._v("token")]),t._v(".")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("useFactory?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Provide a function to build the provider")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("useAsyncFactory?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Provide an async function to build the provider")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("useValue?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Provide predefined value")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("scope?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/ProviderScope.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("ProviderScope")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("Scope used by the injector to build the provider.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("resolvers?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/di/interfaces/IDIResolver.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("IDIResolver")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("A list of resolvers which will be used to resolve missing Symbol/Class when injector invoke a Class. This property allow external DI usage.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);