(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={section:"Section_section__3iyi0",title:"Section_title__zXMZK"}},10:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=a(4),i=a(5),u=a(6),s=a(9),d=a(8),m=a(7),b=a.n(m),p=a(1),v=a.n(p),g=function(e){var t=e.title,a=e.children;return r.a.createElement("section",{className:v.a.section},r.a.createElement("h1",{className:v.a.title},t),a)};g.propType={title:b.a.string};var f=g,k=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("button",{key:e.id,name:e.name,type:"button",onClick:a},e.name)})))},E=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,c=e.positivePercentage;return r.a.createElement("div",null,r.a.createElement("p",null,"Good:",t),r.a.createElement("p",null,"Neutral:",a),r.a.createElement("p",null,"Bad:",n),r.a.createElement("p",null,"Total:",o),r.a.createElement("p",null,"Positive FeedBack:",c,"%"))};E.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var h=E,F=function(e){var t=e.message;return r.a.createElement("p",null,t)},P=[{id:1,name:"good"},{id:2,name:"neutral"},{id:3,name:"bad"}],y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleFeedBack=function(t){return e.setState(Object(l.a)({},t.target.name,e.state[t.target.name]+1))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.floor(t/e.countTotalFeedback()*100)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"Please leave feedback"},r.a.createElement(k,{options:P,onLeaveFeedback:this.handleFeedBack})),r.a.createElement(f,{title:"Statistics"},0===this.countTotalFeedback()?r.a.createElement(F,{message:"No feedback given"}):r.a.createElement(h,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),a}(n.Component);c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8d09f526.chunk.js.map