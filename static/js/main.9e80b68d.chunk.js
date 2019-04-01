(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){},31:function(e,t,a){e.exports=a(81)},36:function(e,t,a){},44:function(e,t){},50:function(e,t){},55:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(23),i=a(0),l=a.n(i),r=a(20),c=a.n(r),o=a(3),s=a(4),u=a(6),d=a(5),m=a(7),h=a(8),p=(a(36),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("video",{className:"demoVideo",controls:!0},l.a.createElement("source",{src:this.props.video,type:"video/mp4"}),"Your browser does not support the video tag."))}}]),t}(i.Component)),f=a(2),b=(a(55),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"intro-wrapper"},l.a.createElement("h1",{id:"title"},l.a.createElement(f.a,{id:"intro.title",defaultMessage:"How it works"})),l.a.createElement("div",{id:"excel"}),l.a.createElement("div",{className:"arrowLeft"}),l.a.createElement("div",{id:"broswer"}),l.a.createElement("div",{className:"arrowRight"}),l.a.createElement("div",{id:"excel-with-content"}),l.a.createElement("h1",{id:"single-description"},l.a.createElement(f.a,{id:"intro.single",defaultMessage:"In single mode, input the product name, output the classification result and the accuracy."})),l.a.createElement("h1",{id:"batch-description"},l.a.createElement(f.a,{id:"intro.batch",defaultMessage:"In batch mode, input the csv file having only one column ITEM_NAME, output the sunburst diagram (data visualization) and user can download the classified file."})),l.a.createElement("h1",{id:"csv-description"},l.a.createElement(f.a,{id:"intro.csv",defaultMessage:""})))}}]),t}(i.Component)),g=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=(100*this.props.now).toFixed(2);return l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progressBar",style:{width:e+"%"}},l.a.createElement(f.a,{id:"single.progress",defaultMessage:"Accuracy      "}),l.a.createElement("span",null,e+"%")))}}]),t}(i.Component)),v=a(11),E=a.n(v),y=a(12),j=a(14),O=a(21);a(60),a(61);y.b.add(O.a);var C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={type:["","",""],prob:0},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this,a='https://taggie.tech./upload?productname="'+E()("#singleInput").val()+'"';E.a.ajax({url:a,type:"GET",dataType:"json",crossDomain:!0,success:function(e){var a={};0===e.code?(a.type=e.type.split("--"),a.prob=e.prob):(a.type=["","",""],a.prob=0,alert(e.message)),t.setState(a)}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"single-wrapper"},l.a.createElement("h1",{id:"singleTitle"},l.a.createElement(f.a,{id:"single.mode",defaultMessage:"Single Mode"})),l.a.createElement("div",{alt:"",id:"singleImg"}),l.a.createElement("div",null,l.a.createElement(f.a,{id:"single.input",defaultMessage:"Product Name"},function(e){return l.a.createElement("input",{id:"singleInput",placeholder:e})}),l.a.createElement("button",{id:"singleCommit",onClick:this.handleClick},l.a.createElement(f.a,{id:"single.start",defaultMessage:"Get Started!"}))),l.a.createElement("div",null,0!==this.state.type.length?l.a.createElement("div",{className:"typeGroup"},l.a.createElement("label",{id:"type1",className:"btn singleType"},l.a.createElement(j.a,{icon:"tags"}),this.state.type[0]),l.a.createElement("label",{id:"type2",className:"btn singleType"},l.a.createElement(j.a,{icon:"tags"}),this.state.type[1]),l.a.createElement("label",{id:"type3",className:"btn singleType"},l.a.createElement(j.a,{icon:"tags"}),this.state.type[2])):null),l.a.createElement("div",null,l.a.createElement(g,{now:this.state.prob})))}}]),t}(i.Component),w=a(27),M=a(28),x=(a(62),Object(f.d)({firstoption:{id:"file.modeSelect1",defaultMessage:"Efficiency Priority"},secondoption:{id:"file.modeSelect2",defaultMessage:"Precision Priority"}})),k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.intl.formatMessage;return l.a.createElement("select",{id:"modeSelect",value:this.props.mode,name:"mode",onChange:this.props.handleChange},l.a.createElement("option",{defaultValue:!0,value:"0"},e(x.firstoption)),l.a.createElement("option",{value:"1"},e(x.secondoption)))}}]),t}(i.Component),S=Object(f.e)(k),N=(a(63),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("select",{id:"encodingSelect",value:this.props.encoding,name:"encoding",onChange:this.props.handleChange},l.a.createElement("option",{defaultValue:!0,value:"gb18030"},"GB18030"),l.a.createElement("option",{value:"utf-8"},"UTF-8"))}}]),t}(i.Component)),T=(a(64),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"fileContainer"},l.a.createElement("input",{className:"fileInput",type:"file",name:"Upload",accept:".csv",id:"csvFileUpload",onChange:this.props.handleFileUpload}),l.a.createElement("label",{className:"fileInputLabel"},l.a.createElement(f.a,{id:"file.uploadCSV",defaultMessage:"Upload CSV"})),l.a.createElement(S,{handleChange:this.props.handleChange,mode:this.props.mode}),l.a.createElement(N,{handleChange:this.props.handleChange,encoding:this.props.encoding}))}}]),t}(i.Component)),I=a(9),V=(a(65),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this))).state={data:e.data},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.drawChart(this.state.data)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"partition",value:function(e){var t=I.c(e).sum(function(e){return e.value}).sort(function(e,t){return t.value-e.value});return I.f().size([2*Math.PI,t.height+1])(t)}},{key:"arcVisible",value:function(e){return e.y1<=3&&e.y0>=1&&e.x1>e.x0}},{key:"labelVisible",value:function(e){return e.y1<=3&&e.y0>=1&&(e.y1-e.y0)*(e.x1-e.x0)>.1}},{key:"labelTransform",value:function(e,t){var a=(e.x0+e.x1)/2*180/Math.PI,n=(e.y0+e.y1)/2*t;return"rotate(".concat(a-90,") translate(").concat(n,",0) rotate(").concat(a<180?0:180,")")}},{key:"drawChart",value:function(){var e=this,t=I.i(".sunburst"),a=parseInt(t.style("width")),n=parseInt(t.style("padding-top")),i=this.partition(this.state.data);i.each(function(e){return e.current=e});var l=I.h(I.g(I.e,this.state.data.children.length+1)),r=I.b(",d"),c=a/6-n,o=I.a().startAngle(function(e){return e.x0}).endAngle(function(e){return e.x1}).padAngle(function(e){return Math.min((e.x1-e.x0)/2,.005)}).padRadius(1.5*c).innerRadius(function(e){return e.y0*c}).outerRadius(function(e){return Math.max(e.y0*c,e.y1*c-1)}),s=function(t){h.datum(t.parent||i),i.each(function(e){return e.target={x0:2*Math.max(0,Math.min(1,(e.x0-t.x0)/(t.x1-t.x0)))*Math.PI,x1:2*Math.max(0,Math.min(1,(e.x1-t.x0)/(t.x1-t.x0)))*Math.PI,y0:Math.max(0,e.y0-t.depth),y1:Math.max(0,e.y1-t.depth)}});var a=u.transition().duration(750);d.transition(a).tween("data",function(e){var t=I.d(e.current,e.target);return function(a){return e.current=t(a)}}).filter(function(e){return this.getAttribute("fill-opacity")||this.arcVisible(e.target)}).attr("fill-opacity",function(t){return e.arcVisible(t.target)?t.children?.6:.4:0}).attrTween("d",function(e){return function(){return o(e.current)}}),m.filter(function(e){return this.getAttribute("fill-opacity")||this.labelVisible(e.target)}).transition(a).attr("fill-opacity",function(t){return+e.labelVisible(t.target)}).attrTween("transform",function(t){return function(){return e.labelTransform(t.current,c)}})},u=t.append("g").attr("transform","translate(".concat((a-n)/2,",").concat((a-n)/2,")")),d=u.selectAll("path").data(i.descendants().slice(1)).join("path").attr("fill",function(e){for(;e.depth>1;)e=e.parent;return l(e.data.name)}).attr("fill-opacity",function(t){return e.arcVisible(t.current)?t.children?.6:.4:0}).attr("d",function(e){return o(e.current)});d.filter(function(e){return e.children}).style("cursor","pointer").on("click",s),d.append("title").text(function(e){return"Type: ".concat(e.ancestors().map(function(e){return e.data.name}).reverse().join("-"),"\nNumebr: ").concat(r(e.value))});var m=u.append("g").attr("pointer-events","none").attr("text-anchor","middle").style("user-select","none").selectAll("text").data(i.descendants().slice(1)).join("text").attr("dy","0.35em").attr("fill-opacity",function(t){return+e.labelVisible(t.current)}).attr("transform",function(t){return e.labelTransform(t.current,c)}).text(function(e){return e.data.name}),h=u.append("circle").datum(i).attr("r",c).attr("fill","none").attr("pointer-events","all").on("click",s)}},{key:"render",value:function(){return l.a.createElement("svg",{className:"sunburst"})}}]),t}(i.Component)),A=(a(66),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("a",{id:"download",download:!0,href:this.props.href},l.a.createElement(f.a,{id:"file.download",defaultMessage:"Download"}))}}]),t}(i.Component)),D=(a(67),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("a",{id:"downloadExample",download:!0,href:this.props.href},l.a.createElement(f.a,{id:"file.downloadCSV",defaultMessage:"Download Example CSV"}))}}]),t}(i.Component)),P=(a(68),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={code:null,data:null,open:!1,href:null,mode:0,encoding:"gb18030"},a.handleFileUpload=a.handleFileUpload.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(w.a)({},a,n))}},{key:"handleFileUpload",value:function(e){E()(".spinner").show(400);var t=this,a=new FormData;a.append("file_test",e.target.files[0]),a.append("encoding",this.state.encoding),a.append("deal_type",this.state.mode),E.a.ajax({url:"https://taggie.tech./uploadfile",type:"POST",data:a,dataType:"json",crossDomain:!0,processData:!1,contentType:!1,success:function(e,a){e.results.name="",e.filename=e.filename.split("/").pop(),t.setState({code:e.code,data:e.results,href:"https://taggie.tech./download/"+e.filename}),E()(".spinner").hide(400),E()(".fileInput").val("")}})}},{key:"render",value:function(){var e=(new Date).getTime();return l.a.createElement("div",{className:"file-wrapper"},l.a.createElement("h1",{id:"fileTitle"},l.a.createElement(f.a,{id:"file.mode",defaultMessage:"Batch Mode"})),l.a.createElement("div",{alt:"",id:"fileImg"}),l.a.createElement(D,{href:"https://taggie.tech./download/demo.csv?time="+e}),l.a.createElement(T,{handleFileUpload:this.handleFileUpload,handleChange:this.handleChange,mode:this.state.mode,encoding:this.state.encoding}),l.a.createElement(M.a,{trigger:l.a.createElement("button",{className:"showCanvas"}," ",l.a.createElement(f.a,{id:"file.sunburst",defaultMessage:"Open Model"})),modal:!0,closeOnDocumentClick:!0},l.a.createElement("div",{className:"canvas"},0===this.state.code?l.a.createElement(V,{data:this.state.data}):l.a.createElement("div",null))),l.a.createElement(A,{href:this.state.href}))}}]),t}(i.Component)),U=(a(69),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"spinner"}),l.a.createElement(C,null),l.a.createElement(P,null))}}]),t}(i.Component)),F={en:{"nav.locale":"Chinese/English","nav.demoVideo":"Demo Video","nav.introdection":"Introduction","nav.tryItYourself":"Try it yourself!","intro.title":"How it works","intro.single":"In single mode, input the product name, output the classification result and the accuracy.","intro.batch":"In batch mode, input the csv file having only one column ITEM_NAME, output the sunburst diagram (data visualization) and user can download the classified file.","intro.csv":" ","file.mode":"Batch Mode","file.sunburst":"Open Model","file.downloadCSV":"Download Example CSV","file.uploadCSV":"Upload CSV","file.download":"Download","file.modeSelect1":"Efficiency Priority","file.modeSelect2":"Precision Priority","single.progress":"Accuracy      ","single.mode":"Single Mode","single.start":"Get Started!","single.input":"Product Name"},zh:{"nav.locale":"\u4e2d\u6587/\u82f1\u6587","nav.demoVideo":"\u6f14\u793a\u89c6\u9891","nav.introdection":"\u529f\u80fd\u4ecb\u7ecd","nav.tryItYourself":"\u5e94\u7528\u6a21\u5757","intro.title":"\u4f7f\u7528\u65b9\u6cd5","intro.single":"\u5355\u8f93\u5165\u6a21\u5f0f\uff1a\u8f93\u5165\u5546\u54c1\u540d\uff0c\u70b9\u51fb\u63d0\u4ea4\u6309\u94ae\uff0c\u7cfb\u7edf\u8fd4\u56de\u7c7b\u522b\u4ee5\u53ca\u53ef\u4fe1\u5ea6\u3002","intro.batch":"\u6279\u5904\u7406\u6a21\u5f0f\uff1a\u4e0a\u4f20csv\u6587\u4ef6\uff0c\u7cfb\u7edf\u8fd4\u56de\u53ef\u89c6\u5316\u7ed3\u679c\uff0c\u7528\u6237\u53ef\u4ee5\u70b9\u51fb\u4e0b\u8f7d\u6309\u94ae\u4e0b\u8f7d\u9884\u6d4b\u6587\u4ef6\u3002","intro.csv":"\u6ce8\uff1acsv\u6587\u4ef6\u53ea\u6709\u4e00\u5217\uff0c\u4e14\u5217\u540d\u4e3aITEM_NAME\uff1b\u5982\u679c\u9884\u6d4b\u6587\u4ef6\u51fa\u73b0\u4e71\u7801\uff0c\u8bf7\u5c06\u89e3\u7801\u4fee\u6539\u4e3agb18030\u3002","file.mode":"\u6279\u5904\u7406\u6a21\u5f0f","file.sunburst":"\u53ef\u89c6\u5316\u6a21\u578b","file.downloadCSV":"\u4e0b\u8f7d\u6d4b\u8bd5\u6587\u4ef6","file.uploadCSV":"\u4e0a\u4f20\u5f85\u5206\u7c7b\u6587\u4ef6","file.download":"\u9884\u6d4b\u7ed3\u679c\u4e0b\u8f7d","file.modeSelect1":"\u6548\u7387\u4f18\u5148","file.modeSelect2":"\u7cbe\u5ea6\u4f18\u5148","single.progress":"\u53ef\u4fe1\u5ea6      ","single.mode":"\u5355\u8f93\u5165\u6a21\u5f0f","single.start":"\u63d0\u4ea4","single.input":"\u8f93\u5165\u4ea7\u54c1\u540d\u79f0"}},B=a(19);a(79),a(80);y.b.add(O.a);var L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={locale:"en"},a.handleLocale=a.handleLocale.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleLocale",value:function(){"en"===this.state.locale?this.setState({locale:"zh"}):this.setState({locale:"en"},function(){console.log(F[this.state.locale])})}},{key:"render",value:function(){return l.a.createElement(f.b,{locale:this.state.locale,messages:F[this.state.locale]},l.a.createElement("div",null,l.a.createElement("h1",{className:"logo"},l.a.createElement(j.a,{icon:"tags"})," Taggie"),l.a.createElement("ul",{className:"menu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:this.handleLocale},l.a.createElement(f.a,{id:"nav.locale",defaultMessage:"Chinese/English"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#sectionOne",className:"active"},l.a.createElement(f.a,{id:"nav.demoVideo",defaultMessage:"Demo Video"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#sectionTwo"},l.a.createElement(f.a,{id:"nav.introdection",defaultMessage:"Introduction"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#sectionThree"},l.a.createElement(f.a,{id:"nav.tryItYourself",defaultMessage:"Try it yourself!"})))),l.a.createElement(B.SectionsContainer,{activeClass:"active",anchors:["sectionOne","sectionTwo","sectionThree"],arrowNavigation:!1,className:"SectionContainer",delay:700,navigation:!1,scrollBar:!1,sectionClassName:"Section",verticalAlign:!0},l.a.createElement(B.Section,null,l.a.createElement(p,{video:"https://taggie.tech./download/demo.mp4"})),l.a.createElement(B.Section,null,l.a.createElement(b,null)),l.a.createElement(B.Section,null,l.a.createElement(U,null)))))}}]),t}(i.Component),z=a(29),G=a.n(z),_=a(30),R=a.n(_);Object(f.c)([].concat(Object(n.a)(G.a),Object(n.a)(R.a))),c.a.render(l.a.createElement(L,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.9e80b68d.chunk.js.map