(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{213:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"react生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react生命周期"}},[t._v("#")]),t._v(" React生命周期")]),t._v(" "),a("h4",{attrs:{id:"_1、componentdidmount-组件挂载完成之后触发的生命周期-相当于vue的mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、componentdidmount-组件挂载完成之后触发的生命周期-相当于vue的mounted"}},[t._v("#")]),t._v(" 1、componentDidMount() // 组件挂载完成之后触发的生命周期 相当于vue的mounted")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改state的唯一方法")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @param 要修改的数据")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @param 修改完成之后的回调函数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            consloe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"_2、componentwillmount-组件挂载之前-相当于vue的beforemount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、componentwillmount-组件挂载之前-相当于vue的beforemount"}},[t._v("#")]),t._v(" 2、componentWillMount()  // 组件挂载之前 相当于vue的beforeMount")]),t._v(" "),a("h4",{attrs:{id:"_3、componentwillreceiveprops-nextprops-组件将要接收新的props-vue没有"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、componentwillreceiveprops-nextprops-组件将要接收新的props-vue没有"}},[t._v("#")]),t._v(" 3、componentWillReceiveProps(nextProps)  // 组件将要接收新的props vue没有")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 和props相关的唯一一个生命周期")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行完成之后，this.props指向新的props")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillReceiveProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 旧的props   this.props")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的props   nextProps")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_4、shouldcomponentupdate-nextprops-nextstate-通过返回值判断组件是否需要更新-用于react优化，vue没有-true更新，false不更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、shouldcomponentupdate-nextprops-nextstate-通过返回值判断组件是否需要更新-用于react优化，vue没有-true更新，false不更新"}},[t._v("#")]),t._v(" 4、shouldComponentUpdate(nextProps,nextState)  // 通过返回值判断组件是否需要更新,用于react优化，vue没有 true更新，false不更新")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldComponentUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nextState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 旧的props   this.props")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的props   nextProps")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 旧的State   this.state")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的state   nextState")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回值是Boolean  默认true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),a("h4",{attrs:{id:"_5、componentwillupdate-组件将要更新-相当于vue的beforeupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、componentwillupdate-组件将要更新-相当于vue的beforeupdate"}},[t._v("#")]),t._v(" 5、componentWillUpdate // 组件将要更新 相当于vue的beforeUpdate")]),t._v(" "),a("h4",{attrs:{id:"_6、componentdidupdate-组件更新完成-相当于vue的updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、componentdidupdate-组件更新完成-相当于vue的updated"}},[t._v("#")]),t._v(" 6、componentDidUpdate // 组件更新完成 相当于vue的updated")]),t._v(" "),a("h4",{attrs:{id:"_7、componentwillunmount-组件将要卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、componentwillunmount-组件将要卸载"}},[t._v("#")]),t._v(" 7、componentWillUnmount() // 组件将要卸载")]),t._v(" "),a("h4",{attrs:{id:"_8、unmountcomponentatnode-卸载组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、unmountcomponentatnode-卸载组件"}},[t._v("#")]),t._v(" 8、unmountComponentAtNode() // 卸载组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ReactDom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unmountComponentAtNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"_9、分为三个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、分为三个阶段"}},[t._v("#")]),t._v(" 9、分为三个阶段")]),t._v(" "),a("ol",[a("li",[t._v("实例化阶段")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("首次使用一个组件类时会有getDefaultProps\n对于组件类的所有后续应用没有getDefaultProps\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、getDefaultProps\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、getInitialState\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、componentWillMount\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("、render\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("、componentDidMount\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("更新阶段(存在期)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" componentWillReceiveProps \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" shouldComponentUpdate \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" componentWillUpdate \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" render \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" componentDidUpdate\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("销毁&清理期")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("componentWillUnmount\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);