(this.webpackJsonpaio=this.webpackJsonpaio||[]).push([[8],{168:function(e,t){},220:function(e,t,a){"use strict";a.r(t);var n=a(30),l=a(35),o=a(38),r=a(0),c=a.n(r);t.default=function(){var e=Object(r.useState)(["DOCX","TXT","HTML","MD"]),t=Object(o.a)(e,2),d=t[0],i=(t[1],Object(r.useState)(["PDF","DOCX","MD","HTML"])),m=Object(o.a)(i,2),s=m[0],u=(m[1],Object(r.useState)(!1)),f=Object(o.a)(u,2),p=f[0],v=f[1],h=Object(r.useState)(!1),b=Object(o.a)(h,2),E=b[0],w=b[1],y=Object(r.useState)(null),T=Object(o.a)(y,2),N=T[0],C=T[1],g=Object(r.useState)({from:"",to:""}),k=Object(o.a)(g,2),x=k[0],O=k[1],M=function(e){O(Object(l.a)(Object(l.a)({},x),{},Object(n.a)({},e.target.name,e.target.value)))};return c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"level"},c.a.createElement("div",{className:"level-left"},c.a.createElement("div",{className:"level-item"},c.a.createElement("p",{className:"subtitle is-5"},c.a.createElement("strong",null,"From"))),c.a.createElement("div",{className:"level-item"},c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control has-icons-left"},c.a.createElement("div",{className:"select is-rounded"},c.a.createElement("select",{name:"from",onChange:M},c.a.createElement("option",{defaultValue:!0},"Original File Types"),d.map((function(e,t){return c.a.createElement("option",{key:t},e)})))),c.a.createElement("div",{className:"icon is-small is-left"},c.a.createElement("i",{className:"fas fa-globe"})))))),c.a.createElement("div",{className:"level-right"},c.a.createElement("div",{className:"level-item"},c.a.createElement("p",{className:"subtitle is-5"},c.a.createElement("strong",null,"To"))),c.a.createElement("div",{className:"field shift"},c.a.createElement("div",{className:"control has-icons-left"},c.a.createElement("div",{className:"select is-rounded"},c.a.createElement("select",{name:"to",onChange:M},c.a.createElement("option",{defaultValue:!0},"New File Types"),s.map((function(e,t){return c.a.createElement("option",{key:t},e)})))),c.a.createElement("div",{className:"icon is-small is-left"},c.a.createElement("i",{className:"fas fa-globe"})))))),c.a.createElement("div",{className:"level is-mobile"},c.a.createElement("div",{className:"level-item has-text-centered"},c.a.createElement("div",{className:"file is-dark has-name is-boxed"},c.a.createElement("label",{className:"file-label"},c.a.createElement("input",{className:"file-input",type:"file",name:"image",accept:"*.docx,*.pdf,*.html,*.txt,*.ppt",onChange:function(e){C(e.target.files[0])}}),c.a.createElement("span",{className:"file-cta"},c.a.createElement("span",{className:"file-icon"},c.a.createElement("i",{className:"fas fa-upload"})),c.a.createElement("span",{className:"file-label"},"Choose a file\u2026")),c.a.createElement("span",{className:"file-name"},null===N?null:N.name))))),c.a.createElement("div",{className:"level has-centered"},p?c.a.createElement("div",{className:"columns level-item has-centered"},c.a.createElement("div",{className:"column is-two-thirds"},c.a.createElement("progress",{className:"progress is-dark",max:"100"},"30%"))):c.a.createElement("div",{className:"level-item has-centered"},c.a.createElement("button",{className:"button is-dark is-rounded",onClick:function(e){if(e.preventDefault(),null!==N)if(N.size>112582912)alert("File Size must be less then 11mb.");else{if(""===x.from)return console.log(x),void alert("'From' file type is not selected!");if(""!==x.to){if(w(!1),v(!0),"DOCX"===x.from){if("DOCX"===x.to)return alert("To and from type is same"),void v(!1);console.log("object")}if("HTML"===x.from){if("HTML"===x.to)return void alert("To and from type is same");console.log("time")}if("TXT"===x.from){if("TXT"===x.to)return void alert("To and from type is same");console.log("time")}if("MD"===x.from){if("MD"===x.to)return void alert("To and from type is same");console.log("time")}setTimeout((function(){v(!1),w(!0)}),2e3)}else alert("'To' file type is not selected")}else alert("Please first select file and types")}},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-dice-d20"})),c.a.createElement("span",null,"Convert")))),c.a.createElement("div",{className:"has-centered"},E?c.a.createElement("div",{className:"has-centered"},c.a.createElement("div",{className:"container level-item has-centered"},c.a.createElement("p",null,"Your converted file is ready to download!")),c.a.createElement("br",null),c.a.createElement("div",{className:"container level-item has-centered"},c.a.createElement("button",{className:"button is-dark is-outlined",id:"dl",onClick:function(){"HTML"===x.from&&("DOCX"===x.to&&function(e,t){var a=new FileReader;a.readAsText(e),a.onloadend=function(){var n=a.result,l="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(n+"   <>By AIO </>"),o=document.createElement("a");document.body.appendChild(o),o.href=l,o.download=e.name.split(".")[0]+".docx",o.click(),document.body.removeChild(o),t(!1)}}(N,w),"PDF"===x.to&&function(e,t){var a=new FileReader;a.readAsText(e),a.onloadend=function(){var e=a.result,n=document.createElement("rd");n.setAttribute("id","render"),n.innerHTML=e;var l=window.open("","PRINT","height=500,width=600");l.document.write(n.innerHTML),l.document.close(),l.focus(),l.print(),t(!1)}}(N,w),"MD"===x.to&&function(e,t){var n=new FileReader;n.readAsText(e),n.onloadend=function(){var l=n.result,o=(new(a(77).Converter)).makeMd(l),r="data:text/markdown,"+encodeURIComponent(o),c=document.createElement("a");document.body.appendChild(c),c.href=r,c.download=e.name.split(".")[0]+".md",c.click(),document.body.removeChild(c),t(!1)}}(N,w)),"TXT"===x.from&&("DOCX"===x.to&&function(e,t){var a=new FileReader;a.readAsText(e),a.onloadend=function(){var n=a.result,l="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(n+"   <>By AIO </>"),o=document.createElement("a");document.body.appendChild(o),o.href=l,o.download=e.name.split(".")[0]+".doc",o.click(),document.body.removeChild(o),t(!1)}}(N,w),"PDF"===x.to&&function(e,t){var a=new FileReader;a.readAsText(e),a.onloadend=function(){var n=a.result,l=document.createElement("rd");l.setAttribute("id","render"),l.innerHTML=n;var o=window.open("","PRINT","height=500,width=600");o.document.write("<html><head><title>"+e.name.split(".")[0]+"</title><style>img{display: block;margin: 0 auto;} .container{padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;text-align-justify;}</style>"),o.document.write("</head><body class='container'>"),o.document.write(l.innerHTML),o.document.write("</body></html>"),o.document.close(),o.focus(),o.print(),t(!1)}}(N,w),"MD"===x.to&&function(e,t){var a=new FileReader;a.readAsText(e),a.onloadend=function(){var n=a.result,l="data:text/markdown;charset=utf-8,"+encodeURIComponent(n+" \n**By AIO**"),o=document.createElement("a");document.body.appendChild(o),o.href=l,o.download=e.name.split(".")[0]+".md",o.click(),document.body.removeChild(o),t(!1)}}(N,w),"HTML"===x.to&&function(e,t){var a=new FileReader;a.readAsText(e),a.onloadend=function(){var n=a.result,l='<!doctype><html><head>\n    <meta charset="UTF-8">\n    <meta name="description" content="'.concat(n.substr(0,40),'">\n    <meta name="keywords" content="').concat(n.substr(0,20),'">\n    <meta name="author" content="AIO">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>').concat(n.substr(0,10),'</title>\n    </head><body style="color:#212121;background-color:#fafafa;word-wrap:break-word;margin:10 10 10 10"><div>').concat(n,"</div></body></html>"),o="data:text/html;charset=utf-8,"+encodeURIComponent(l),r=document.createElement("a");document.body.appendChild(r),r.href=o,r.download=e.name.split(".")[0]+".html",r.click(),document.body.removeChild(r),t(!1)}}(N,w)),"DOCX"===x.from&&("PDF"===x.to&&function(e,t){var n=a(64),l=new FileReader;l.readAsArrayBuffer(e),l.onloadend=function(){var a=l.result;n.convertToHtml({arrayBuffer:a}).then((function(a){var n=a.value,l=document.createElement("rd");l.setAttribute("id","render"),l.innerHTML=n;var o=window.open("","PRINT","height=500,width=600");o.document.write("<html><head><title>"+e.name.split(".")[0]+"</title><style>img{display: block;margin: 0 auto;} .container{padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;text-align-justify;}</style>"),o.document.write("</head><body class='container'>"),o.document.write(l.innerHTML),o.document.write("</body></html>"),o.document.close(),o.focus(),o.print(),t(!1)})).done()}}(N,w),"MD"===x.to&&function(e,t){var n=a(64),l=new FileReader;l.readAsArrayBuffer(e),l.onloadend=function(){var a=l.result;n.convertToMarkdown({arrayBuffer:a}).then((function(a){var n=a.value,l="data:text/markdown;charset=utf-8,"+encodeURIComponent(n),o=document.createElement("a");document.body.appendChild(o),o.href=l,o.download=e.name.split(".")[0]+".md",o.click(),document.body.removeChild(o),t(!1)})).done()}}(N,w),"HTML"===x.to&&function(e,t){var n=a(64),l=new FileReader;l.readAsArrayBuffer(e),l.onloadend=function(){var a=l.result;n.convertToHtml({arrayBuffer:a}).then((function(a){var n=a.value,l="data:text/html;charset=utf-8,"+encodeURIComponent(n),o=document.createElement("a");document.body.appendChild(o),o.href=l,o.download=e.name.split(".")[0]+".html",o.click(),document.body.removeChild(o),t(!1)})).done()}}(N,w)),"MD"===x.from&&("PDF"===x.to&&function(e,t){var n=new FileReader;n.readAsText(e),n.onloadend=function(){var e=n.result,l=(new(a(77).Converter)).makeHtml(e),o=document.createElement("rd");o.setAttribute("id","render"),o.innerHTML=l;var r=window.open("","PRINT","height=500,width=600");r.document.write(o.innerHTML),r.document.close(),r.focus(),r.print(),t(!0)}}(N,w),"HTML"===x.to&&function(e,t){var n=new FileReader;n.readAsText(e),n.onloadend=function(){var l=n.result,o=(new(a(77).Converter)).makeHtml(l),r="data:text/html;charset=utf-8,"+encodeURIComponent(o),c=document.createElement("a");document.body.appendChild(c),c.href=r,c.download=e.name.split(".")[0]+".html",c.click(),document.body.removeChild(c),t(!1)}}(N,w),"DOCX"===x.to&&function(e,t){var a=new FileReader;a.readAsText(e),a.onloadend=function(){var n=a.result,l="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(n),o=document.createElement("a");document.body.appendChild(o),o.href=l,o.download=e.name.split(".")[0]+".docx",o.click(),document.body.removeChild(o),t(!1)}}(N,w))}},c.a.createElement("span",{className:"icon is-small"},c.a.createElement("i",{className:"fas fa-download"}))))):null),c.a.createElement("br",null))}}}]);
//# sourceMappingURL=8.fd8cfe23.chunk.js.map