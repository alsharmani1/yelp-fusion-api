(window["webpackJsonpfusion-api"]=window["webpackJsonpfusion-api"]||[]).push([[0],{16:function(e,a,t){e.exports=t(39)},39:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(15),s=t.n(c),i=t(2),o=t.n(i),l=t(3),m=t(5),u=t(4),p=t.n(u),d=function(){var e=Object(r.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],s=Object(r.useState)([]),i=Object(m.a)(s,2),u=i[0],d=i[1];Object(r.useEffect)((function(){h()}),[]);var h=function(){var e=Object(l.a)(o.a.mark((function e(){var a,t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),a="Bearer ".concat("Krf2BtNVN3f1CN0cdtGHzMrsvQafeY8HSP-dOQrz5lDiWTbsdb32xk-xci1koyKO0rRfNXWSGoI-4BHYyJsMUAWt4xfgArTa9cMHSxrgc7JQdhU3WHf9qchNPSA0X3Yx"),"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Ice%20Cream%20Shop&location=Alpharetta%2C%20GA&limit=5",e.next=5,p.a.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Ice%20Cream%20Shop&location=Alpharetta%2C%20GA&limit=5",{headers:{Authorization:a}});case 5:if(!(t=e.sent)){e.next=12;break}return e.next=9,Promise.all(t.data.businesses.map(function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n,c,s,i,l,m,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.name,c=t.image_url,s=t.location,i=s.address1,l=s.city,m="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/".concat(r,"/reviews"),e.next=5,p.a.get(m,{headers:{Authorization:a}});case 5:return u=e.sent,e.abrupt("return",{name:n,image_url:c,address1:i,city:l,review:u.data.reviews[0].text,reviewer:u.data.reviews[0].user.name});case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));case 9:r=e.sent,d(r),c(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?n.a.createElement("div",{className:"container"},n.a.createElement("p",{style:{textAlign:"center"}},"Fetching Data...")):u.map((function(e){var a=e.name,t=e.image_url,r=e.address1,c=e.city,s=e.review,i=e.reviewer;return n.a.createElement("div",{key:a,className:"container"},n.a.createElement("div",{className:"card mb-2"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:t,className:"card-img",alt:"",style:{maxHeight:250,maxWidth:250}})),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},a),n.a.createElement("h5",{className:"card-title"},"".concat(r,", ").concat(c)," "),n.a.createElement("p",null,s),n.a.createElement("span",null,i))))))}))};s.a.render(n.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ea46866d.chunk.js.map