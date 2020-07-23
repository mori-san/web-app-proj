(this["webpackJsonpweb-app-proj"]=this["webpackJsonpweb-app-proj"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/heart.c4b75db6.svg"},45:function(e,t,a){e.exports=a.p+"static/media/timeline.3a1408c9.svg"},46:function(e,t,a){e.exports=a.p+"static/media/tick.e8c5d072.svg"},48:function(e,t,a){e.exports=a(82)},53:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n,r,l,o,c,i,s,m,u,p,h,d=a(0),b=a.n(d),v=a(41),E=a.n(v),f=(a(53),a(5)),w=a(11),g=a(14),y=a(13),T=a(19),j=a(4),x=a(12),k=a(22),O=a(23),N=(a(30),a(3)),D=(n=function e(){Object(f.a)(this,e),Object(k.a)(this,"goToGitHubRepository",r,this)},r=Object(O.a)(n.prototype,"goToGitHubRepository",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){window.open("https://github.com/mori-san/web-app-proj")}}}),n),H=a(26),S=a.n(H),C=a(42),I=a(55),B=(l=function e(){Object(f.a)(this,e),Object(k.a)(this,"weatherData",o,this),Object(k.a)(this,"getWeatherForecast",c,this),this.weatherData={forecast:"",relativeHumidity:{high:0,low:0},temperature:{high:0,low:0},wind:{direction:"",speed:{high:0,low:0}},periods:[{regions:{central:"",east:"",north:"",south:"",west:""},time:{end:new Date,start:new Date}}],timestamp:new Date,updateTimestamp:new Date,validPeriod:{end:new Date,start:new Date}}},o=Object(O.a)(l.prototype,"weatherData",[N.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=Object(O.a)(l.prototype,"getWeatherForecast",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(C.a)(S.a.mark((function t(){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.get("https://api.data.gov.sg/v1/environment/24-hour-weather-forecast");case 3:a=t.sent,console.log(a),a.data.items.forEach((function(t){t.periods.forEach((function(t,a){e.weatherData.periods.splice(a,0,t)})),e.weatherData.forecast=t.general.forecast,e.weatherData.relativeHumidity=t.general.relative_humidity,e.weatherData.temperature=t.general.temperature,e.weatherData.wind.direction=t.general.wind.direction,e.weatherData.wind.speed=t.general.wind.speed,e.weatherData.timestamp=t.timestamp,e.weatherData.updateTimestamp=t.update_timestamp,e.weatherData.validPeriod=t.valid_period})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))}}),l),F={homepageState:new D,aboutmeState:new function e(){Object(f.a)(this,e)},sampleState:new B},A=(a(72),a(73),Object(x.a)(i=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"Header"},b.a.createElement("div",{className:"Header-box"},b.a.createElement("div",{className:"Header-text-logo"},"morisan"),b.a.createElement("div",{className:"Header-links-box"},b.a.createElement(T.b,{exact:!0,className:"Header-link",activeClassName:"Header-link-selected",to:"/homepage"},"Home"),b.a.createElement(T.b,{exact:!0,className:"Header-link",activeClassName:"Header-link-selected",to:"/aboutme"},"About Me"),b.a.createElement(T.b,{exact:!0,className:"Header-link",activeClassName:"Header-link-selected",to:"/sample"},"Sample"))))}}]),a}(d.Component))||i),W=Object(j.g)(A),G=(a(78),a(47)),M=a(1),R=a(20),z=a(44),J=a.n(z),P=a(45),_=a.n(P),L=a(46),$=a.n(L),q=Object(x.a)(s=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(w.a)(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"Homepage"},b.a.createElement("div",{className:"Homepage-box"},b.a.createElement("div",{className:"Homepage-title"},b.a.createElement("p",null,"\u201cA self-taught person looks at the big picture with an open mind, they explore everything."),b.a.createElement("p",null,"They investigate themselves uncovering what is no longer taught, and experience supports it.\u201d"),b.a.createElement("p",{style:{fontSize:"12px"}},"\u2015 Efrat Cybulkiewicz")),b.a.createElement(G.a,null,b.a.createElement(M.a,null,b.a.createElement(M.a.Img,{variant:"top",src:J.a}),b.a.createElement(M.a.Body,null,b.a.createElement(M.a.Title,null,'"Give your best everyday!"'),b.a.createElement(M.a.Text,null,"\u300c\u6bce\u65e5\u9811\u5f35\u3063\u3066\u3044\u307e\u3059\uff01\u300d"))),b.a.createElement(M.a,null,b.a.createElement(M.a.Img,{variant:"top",src:_.a}),b.a.createElement(M.a.Body,null,b.a.createElement(M.a.Title,null,'"The only time you should look back, is to see how far you\'ve come."'),b.a.createElement(M.a.Text,null,"\u300c\u4eba\u751f\u3067\u904e\u53bb\u3092\u632f\u308a\u8fd4\u308b\u3079\u304d\u552f\u4e00\u306e\u6642\u306f\u3001\u81ea\u5206\u304c\u3069\u308c\u3060\u3051\u6210\u9577\u3057\u305f\u304b\u3092\u78ba\u304b\u3081\u308b\u6642\u3060\u3002\u300d"))),b.a.createElement(M.a,null,b.a.createElement(M.a.Img,{variant:"top",src:$.a}),b.a.createElement(M.a.Body,null,b.a.createElement(M.a.Title,null,'"I will persist until I succeed."'),b.a.createElement(M.a.Text,null,"\u300c\u6210\u529f\u3059\u308b\u307e\u3067\u3084\u308a\u7d9a\u3051\u308b\u304b\u3089\u3044\u3064\u304b\u304d\u3063\u3068\u6210\u529f\u3059\u308b\u3002\u300d")))),b.a.createElement(M.a,{className:"text-center"},b.a.createElement(M.a.Header,null,"GitHub"),b.a.createElement(M.a.Body,null,b.a.createElement(M.a.Title,null,"My Repository"),b.a.createElement(M.a.Text,null,"https://github.com/mori-san/web-app-proj"),b.a.createElement(R.a,{variant:"primary",onClick:this.props.state.goToGitHubRepository},"Go now"))),b.a.createElement(R.a,{className:"backtotop-button",variant:"outline-secondary",onClick:this.scrollToTop},"\u2191 Back to Top")))}}]),a}(d.Component))||s,K=(a(79),Object(x.a)(m=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(w.a)(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"Aboutme"},b.a.createElement("div",{className:"Aboutme-box"},b.a.createElement(M.a,{className:"text-center"},b.a.createElement(M.a.Header,{as:"h5"},"My Journey as a Self-Taught Front End Web Developer"),b.a.createElement(M.a.Body,null,b.a.createElement(M.a.Title,null,"Introduction"),b.a.createElement(M.a.Text,null,"I\u2019m a full-time front end developer with 2 years of working experience in the tech industry."),b.a.createElement(M.a.Text,null,"Before getting here, I was in the media industry."),b.a.createElement(M.a.Text,null,"To be honest, it wasn't easy to switch career even though I have a computer engineering certificate."),b.a.createElement(M.a.Text,null,"Many firms are seeking for fresh graduate or experienced candidate, as a self-learner, I have to work even harder to get a chance."),b.a.createElement(M.a.Text,null,"Learning every day is something that grabs a lot of benefits for me."),b.a.createElement(M.a.Text,null,"By giving my best everyday, the day came where I landed my first developer job."),b.a.createElement(M.a.Text,null,"I have learned a lot from work since then, and the sense of achievement kept me motivated to strive even harder."),b.a.createElement(M.a.Text,null,"In a nutshell, never give up!"),b.a.createElement(M.a.Text,null,"Thanks for reading!"))),b.a.createElement(R.a,{className:"backtotop-button",variant:"outline-secondary",onClick:this.scrollToTop},"\u2191 Back to Top")))}}]),a}(d.Component))||m),Q=(a(80),Object(x.a)(u=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.props.state.getWeatherForecast()}},{key:"render",value:function(){return b.a.createElement("div",{className:"Sample"},b.a.createElement("div",{className:"Sample-box"},b.a.createElement("div",{className:"Sample-title"},"REST API"),b.a.createElement(M.a,{className:"text-center"},b.a.createElement(M.a.Header,null,"24-hour Weather Forecast"),b.a.createElement(M.a.Body,null,b.a.createElement(M.a.Title,null,"Singapore"),b.a.createElement("div",{className:"Sample-weather"},b.a.createElement("div",{className:"Sample-weather-left"},b.a.createElement(M.a.Text,null,this.props.state.weatherData.forecast),b.a.createElement(M.a.Text,null,"Temperature: ",this.props.state.weatherData.temperature.low," ","- ",this.props.state.weatherData.temperature.high,"\xb0C")),b.a.createElement("div",{className:"Sample-weather-right"},b.a.createElement(M.a.Text,null,"Wind: ",this.props.state.weatherData.wind.direction," ",this.props.state.weatherData.wind.speed.low," -"," ",this.props.state.weatherData.wind.speed.high," km/h"),b.a.createElement(M.a.Text,null,"Humidity:"," ",this.props.state.weatherData.relativeHumidity.low," -"," ",this.props.state.weatherData.relativeHumidity.high," %"))),b.a.createElement(M.a.Text,null,"GET https://api.data.gov.sg/v1/environment/24-hour-weather-forecast"),b.a.createElement(M.a.Text,null,"Retrieve the latest 24 hour weather forecast"))),b.a.createElement(R.a,{className:"backtotop-button",variant:"outline-secondary",onClick:this.scrollToTop},"\u2191 Back to Top")))}}]),a}(d.Component))||u),U=(a(81),Object(x.a)(p=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"Footer"},b.a.createElement("div",{className:"Footer-box"},b.a.createElement("div",{className:"Footer-left"},"morisan"),b.a.createElement("div",{className:"Footer-center"},"Thanks for visiting! Stay safe! :)"),b.a.createElement("div",{className:"Footer-right"})))}}]),a}(d.Component))||p),V=Object(j.g)(U),X=Object(x.a)(h=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return b.a.createElement(T.a,{basename:"/web-app-proj"},b.a.createElement("div",{className:"App"},b.a.createElement(b.a.Fragment,null,b.a.createElement(W,null),b.a.createElement(j.d,null,b.a.createElement(j.b,{exact:!0,path:"/",render:function(){return b.a.createElement(j.a,{to:"/homepage"})}}),b.a.createElement(j.b,{path:"/homepage",render:function(){return b.a.createElement(q,{state:F.homepageState})}}),b.a.createElement(j.b,{path:"/aboutme",render:function(){return b.a.createElement(K,{state:F.aboutmeState})}}),b.a.createElement(j.b,{path:"/sample",render:function(){return b.a.createElement(Q,{state:F.sampleState})}}),b.a.createElement(j.b,{render:function(){return b.a.createElement(j.a,{to:"/homepage"})}})),b.a.createElement(V,null))))}}]),a}(d.Component))||h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));E.a.render(b.a.createElement(b.a.StrictMode,null,b.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.984d841d.chunk.js.map