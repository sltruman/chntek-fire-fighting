(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2100d6"],{b5f3:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"启泰传感","left-arrow":t.getLeft()},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"right",fn:function(){return[a("van-popover",{attrs:{trigger:"click",actions:t.actions,placement:"bottom-end"},on:{select:t.onSelect},scopedSlots:t._u([{key:"reference",fn:function(){return[a("van-icon",{attrs:{name:"wap-nav",color:"#000000",size:"20"}})]},proxy:!0}]),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}})]},proxy:!0}])}),a("router-view"),a("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{replace:"",to:"/gmap",icon:"map-marked"}},[t._v("GIS模块")]),a("van-tabbar-item",{attrs:{replace:"",to:"/realtime",icon:"underway"}},[t._v("实时告警")]),a("van-tabbar-item",{attrs:{replace:"",to:"/history",icon:"browsing-history"}},[t._v("数据中心")])],1)],1)},n=[],r={name:"BasicLayout",created:function(){var t=localStorage.getItem("chntek-token");t||this.$router.push({path:"/login"}),this.actions=[{text:"版本1.1.0",disabled:!0},{text:"更新"},{text:"注销"}]},data:function(){return{active:0,activeKey:0,showPopover:!1,actions:[]}},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){},getLeft:function(){var t=this.$route.name;switch(t){case"home":case"gmap":case"history":case"realtime":return!1;default:return!0}},onSelect:function(t){switch(t.text){case"注销":window.cordova.plugins.backgroundMode.disable(),localStorage.clear(),this.$router.go(0);break;case"更新":alert("已是最新版本！");break}}}},c=r,i=a("2877"),s=Object(i["a"])(c,o,n,!1,null,"374a7bb7",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d2100d6.83ff9560.js.map