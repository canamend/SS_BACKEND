(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9mJ8":function(t,r,e){"use strict";e.d(r,"a",function(){return n});var s=e("fXoL");let n=(()=>{class t{transform(t){return"M"===t?"assets/images/avatars/boy.png":"F"===t?"assets/images/avatars/girl.png":void 0}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=s.Ib({name:"avatarPatient",type:t,pure:!0}),t})()},BvRl:function(t,r,e){"use strict";e.d(r,"a",function(){return n});var s=e("fXoL");let n=(()=>{class t{transform(t){switch(t){case 0:return"Zarit";case 2:return"Spence";default:return"Test no identificado"}}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=s.Ib({name:"nombreTest",type:t,pure:!0}),t})()},FTq6:function(t,r,e){"use strict";e.d(r,"a",function(){return n});var s=e("fXoL");let n=(()=>{class t{transform(t,r){for(var e=0;e<r.length;e++)if(t===r[e].id_admin)return`${r[e].nombre}  ${r[e].ap_paterno}`;return"Psicologo no registrado"}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=s.Ib({name:"psicNombre",type:t,pure:!0}),t})()},PCNd:function(t,r,e){"use strict";e.d(r,"a",function(){return i});var s=e("ofXK"),n=e("fXoL");let i=(()=>{class t{}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(r){return new(r||t)},imports:[[s.b],s.b]}),t})()},ZtlR:function(t,r,e){"use strict";e.d(r,"a",function(){return o});var s=e("AytR"),n=e("fXoL"),i=e("tk/3");let o=(()=>{class t{constructor(t){this._http=t,this.baseUrl=s.a.baseUrl}getTest(t){return this._http.get(`${this.baseUrl}/test/${t}`).toPromise()}getTests(){return this._http.get(this.baseUrl+"/test/all").toPromise()}postTest(t){return this._http.post(this.baseUrl+"/test/",t).toPromise()}postPreguntas(t,r){return this._http.post(`${this.baseUrl}/test/${r}`,t).toPromise()}}return t.\u0275fac=function(r){return new(r||t)(n.Sb(i.b))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},i3MN:function(t,r,e){"use strict";e.d(r,"a",function(){return o});var s=e("AytR"),n=e("tk/3"),i=e("fXoL");let o=(()=>{class t{constructor(t){this._http=t,this.baseUrl=s.a.baseUrl}postHistorial(t,r,e,s){return this._http.post(this.baseUrl+"/historial",{id_test:t,id_paciente:r,id_admin:e,f_asignacion:s},{headers:this.headers}).toPromise()}getHistorial(t){return this._http.get(`${this.baseUrl}/historial/${t}`).toPromise()}get headers(){let t=new n.d;return t=t.set("Content-Type","application/json"),t}updateHistorial(t,r,e,s,n,i,o,a,u,c){return this._http.post(`${this.baseUrl}/historial/${e}`,{puntaje:t,fecha_fin:r,historial_id:e,patient_id:s,p1:n,p2:i,p3:o,p4:a,p5:u,p6:c},{headers:this.headers}).toPromise()}}return t.\u0275fac=function(r){return new(r||t)(i.Sb(n.b))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},z6cu:function(t,r,e){"use strict";e.d(r,"a",function(){return n});var s=e("HDdC");function n(t,r){return new s.a(r?e=>r.schedule(i,0,{error:t,subscriber:e}):r=>r.error(t))}function i({error:t,subscriber:r}){r.error(t)}}}]);