(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9mJ8":function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("fXoL");let s=(()=>{class t{transform(t){return"M"===t?"assets/images/avatars/boy.png":"F"===t?"assets/images/avatars/girl.png":void 0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Ib({name:"avatarPatient",type:t,pure:!0}),t})()},BvRl:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("fXoL");let s=(()=>{class t{transform(t){switch(t){case 2:return"Spence";default:return"Test no identificado"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Ib({name:"nombreTest",type:t,pure:!0}),t})()},FTq6:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("fXoL");let s=(()=>{class t{transform(t,e){for(var r=0;r<e.length;r++)if(t===e[r].id_admin)return`${e[r].nombre}  ${e[r].ap_paterno}`;return"Psicologo no registrado"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Ib({name:"psicNombre",type:t,pure:!0}),t})()},PCNd:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("ofXK"),s=r("fXoL");let i=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[n.b],n.b]}),t})()},ZtlR:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("AytR"),s=r("fXoL"),i=r("tk/3");let o=(()=>{class t{constructor(t){this._http=t,this.baseUrl=n.a.baseUrl}getTest(t){return this._http.get(`${this.baseUrl}/test/${t}`).toPromise()}getTests(){return this._http.get(this.baseUrl+"/test/all").toPromise()}postTest(t,e){return this._http.post(this.baseUrl+"/test/",[t,e]).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(i.b))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},i3MN:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("AytR"),s=r("tk/3"),i=r("fXoL");let o=(()=>{class t{constructor(t){this._http=t,this.baseUrl=n.a.baseUrl}postHistorial(t,e,r,n){return this._http.post(this.baseUrl+"/historial",{id_test:t,id_paciente:e,id_admin:r,f_asignacion:n},{headers:this.headers}).toPromise()}getHistorial(t){return this._http.get(`${this.baseUrl}/historial/${t}`).toPromise()}get headers(){let t=new s.d;return t=t.set("Content-Type","application/json"),t}updateHistorial(t,e,r,n){return this._http.post(`${this.baseUrl}/historial/${r}`,{puntaje:t,fecha_fin:e,historial_id:r,patient_id:n},{headers:this.headers}).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(s.b))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},wd7m:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("AytR"),s=r("tk/3"),i=r("fXoL");let o=(()=>{class t{constructor(t){this._http=t,this.baseUrl=n.a.baseUrl}getPatients(){return this._http.get(this.baseUrl+"/patient/all").toPromise()}getPatient(t=""){return this._http.get(`${this.baseUrl}/patient/${t}`).toPromise()}deletePatient(t){return this._http.delete(`${this.baseUrl}/patient/${t}`).toPromise()}getCarer(t){return this._http.get(`${this.baseUrl}/cuidador/${t}`).toPromise()}get headers(){let t=new s.d;return t=t.set("Content-Type","application/json"),t}addExpediente(t,e,r){return this._http.post(this.baseUrl+"/expediente",{expediente:t,id_admin:e,disponible:r},{headers:this.headers}).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(s.b))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},z6cu:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("HDdC");function s(t,e){return new n.a(e?r=>e.schedule(i,0,{error:t,subscriber:r}):e=>e.error(t))}function i({error:t,subscriber:e}){e.error(t)}}}]);