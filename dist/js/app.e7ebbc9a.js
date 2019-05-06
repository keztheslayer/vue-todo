(function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],u=0,h=[];u<a.length;u++)r=a[u],n[r]&&h.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 col-12 mx-auto"},[s("div",{staticClass:"todo"},[s("h1",{staticClass:"todo__title"},[t._v("Todo-list on Vue.js")]),t._l(t.list,function(e,i){return s("div",{key:i,attrs:{isChecked:e.isChecked}},[s("div",{staticClass:"todo__list-item",class:e.isChecked?"todo__list-item_state_finished":""},[s("div",{staticClass:"todo__list-item-wrapper"},[s("label",{staticClass:"todo__label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"item.isChecked"}],staticClass:"todo__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isChecked)?t._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(s){var i=e.isChecked,n=s.target,o=!!n.checked;if(Array.isArray(i)){var r=null,a=t._i(i,r);n.checked?a<0&&t.$set(e,"isChecked",i.concat([r])):a>-1&&t.$set(e,"isChecked",i.slice(0,a).concat(i.slice(a+1)))}else t.$set(e,"isChecked",o)}}}),s("span",{staticClass:"todo__list-item-text"},[t._v(t._s(e.text))])]),s("button",{staticClass:"close todo__remove-btn",attrs:{type:"button"},on:{click:function(e){return t.remove(i)}}},[s("span",[t._v("×")])])]),i<t.list.length-1?s("hr"):t._e()])])}),s("form",{staticClass:"todo__add",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],staticClass:"todo__add-input",attrs:{type:"text",placeholder:"Type something here...",required:""},domProps:{value:t.newItem},on:{input:function(e){e.target.composing||(t.newItem=e.target.value)}}}),s("input",{staticClass:"btn btn-primary btn-sm todo__add-btn",attrs:{type:"submit",value:"Add",disabled:!t.newItem.length}})]),s("hr"),s("div",{staticClass:"todo__counters"},[s("div",{staticClass:"todo__counter"},[t._v("Total: "+t._s(t.total))]),s("button",{staticClass:"btn btn-primary btn-sm todo__clean-btn",on:{click:t.clean}},[t._v("Remove all finished tasks")]),s("div",{staticClass:"todo__counter"},[t._v("Finished: "+t._s(t.finished))])])],2)])])])},o=[],r=(s("ac6a"),"todo-storage"),a={data:function(){return{list:[{text:"Add something",isChecked:!1},{text:"Remove this",isChecked:!1},{text:"This task is already finished",isChecked:!0}],newItem:""}},created:function(){this.list=JSON.parse(localStorage.getItem(r)||this.list)},computed:{total:function(){return this.list.length},finished:function(){var t=0;return this.list.forEach(function(e){e.isChecked&&t++}),t}},methods:{add:function(){var t=this.newItem;t&&(this.list.push({text:t,isChecked:!1}),localStorage.setItem(r,JSON.stringify(this.list))),this.newItem=""},remove:function(t){this.list.splice(t,1),localStorage.setItem(r,JSON.stringify(this.list))},clean:function(){this.list=this.list.filter(function(t){return!t.isChecked})},saveToLocal:function(){localStorage.setItem("list",this.list)}}},c=a,l=(s("7c55"),s("2877")),d=Object(l["a"])(c,n,o,!1,null,null,null),u=d.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(u)}}).$mount("#to-do-app")},"5c48":function(t,e,s){},"7c55":function(t,e,s){"use strict";var i=s("5c48"),n=s.n(i);n.a}});
//# sourceMappingURL=app.e7ebbc9a.js.map