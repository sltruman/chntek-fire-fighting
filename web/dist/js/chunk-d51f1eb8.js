(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d51f1eb8"],{"2d42":function(t,i,e){"use strict";e.r(i);var a={name:"alert",data:function(){return{alertList:[{name:"设备A",location:"湖大三号厨房",time:"2019-10-10 10:24:00"},{name:"设备B",location:"湖大四号厨房",time:"2019-10-10 10:24:00"},{name:"设备C",location:"湖大五号厨房",time:"2019-10-10 10:24:00"}],rotate:!1,timer:null,mode:"history"}},methods:{goto:function(t){this.$router.push({name:"detail",params:t})},switchDate:function(){var t=this;this.rotate=!0,this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.rotate=!1}),300)}}},s=(e("93b8"),e("2877")),n=Object(s.a)(a,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"alert"},[e("h4",[t._v("告警列表-"+t._s("current"==t.mode?"当天":"历史"))]),e("ul",t._l(t.alertList,(function(i){return e("li",{key:i.name,staticClass:"alert-message",on:{click:function(e){return t.goto(i)}}},[e("div",{staticClass:"display-flex"},[e("div",{staticClass:"iconfont iconjinggao alert-logo"}),e("div",{staticClass:"flex_1"},[e("p",[t._v(t._s(i.name))]),e("p",[t._v(t._s(i.location))]),e("p",{staticClass:"text-right time"},[t._v(t._s(i.time))])])])])})),0),e("md-button",{staticClass:"md-fab md-clean switchDate",class:{"rotate-go":t.rotate}},[e("i",{staticClass:"iconfont icon iconhistory",on:{click:t.switchDate}})])],1)}),[],!1,null,"0f7449b2",null);i.default=n.exports},"40ba":function(t,i,e){},"93b8":function(t,i,e){"use strict";e("40ba")}}]);