(window["webpackJsonpfusion-api"]=window["webpackJsonpfusion-api"]||[]).push([[0],{16:function(e,t,r){e.exports=r(40)},39:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(15),s=r.n(c),i=r(2),o=r.n(i),u=r(3),p=r(5),l=r(4),h=r.n(l),m=(r(39),function(){var e=Object(a.useState)({fetching:!1,error:!1}),t=Object(p.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)([]),i=Object(p.a)(s,2),l=i[0],m=i[1];Object(a.useEffect)((function(){d()}),[]);var d=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({fetching:!0,error:!1}),t="Bearer ".concat("Krf2BtNVN3f1CN0cdtGHzMrsvQafeY8HSP-dOQrz5lDiWTbsdb32xk-xci1koyKO0rRfNXWSGoI-4BHYyJsMUAWt4xfgArTa9cMHSxrgc7JQdhU3WHf9qchNPSA0X3Yx"),"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Ice%20Cream%20Shop&location=Alpharetta%2C%20GA&limit=5",e.prev=3,e.next=6,h.a.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Ice%20Cream%20Shop&location=Alpharetta%2C%20GA&limit=5",{headers:{Authorization:t}});case 6:return r=e.sent,e.next=9,Promise.all(r.data.businesses.map(function(){var e=Object(u.a)(o.a.mark((function e(r){var a,n,c,s,i,u,p,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.id,n=r.name,c=r.image_url,s=r.location,i=s.address1,u=s.city,p="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/".concat(a,"/reviews"),e.next=5,h.a.get(p,{headers:{Authorization:t}});case 5:return l=e.sent,e.abrupt("return",{name:n,image_url:c,address1:i,city:u,review:l.data.reviews[0].text,reviewer:l.data.reviews[0].user.name});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:a=e.sent,m(a),c({fetching:!1,error:!1}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),c({fetching:!1,error:!0});case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}();return r.fetching?n.a.createElement("p",{style:{textAlign:"center"}},"Fetching Data..."):r.error?n.a.createElement("p",{style:{textAlign:"center"}},"There was an error while retreiving the data!"):n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Top Five Ice Cream Shops in Alpharetta"),l.map((function(e){var t=e.name,r=e.address1,a=e.city,c=e.review,s=e.reviewer;return n.a.createElement("div",{className:"card",key:t},n.a.createElement("div",{className:"card-body"},n.a.createElement("span",{className:"card-title"},t),n.a.createElement("h5",{className:"card-address"},"".concat(r,", ").concat(a)," "),n.a.createElement("p",null,c),n.a.createElement("span",null,s)))})))});s.a.render(n.a.createElement(m,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b507650a.chunk.js.map