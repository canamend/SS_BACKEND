(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AMsP:function(t,i,e){"use strict";e.r(i),e.d(i,"PatientModule",function(){return $});var n=e("ofXK"),s=e("tyNb"),a=e("mrSG"),c=e("fXoL"),r=e("wd7m"),o=e("ifH6"),b=e("i3MN"),u=e("BvRl"),l=e("FTq6");function h(t,i){1&t&&c.Kb(0,"loading-overlay")}function d(t,i){if(1&t){const t=c.Pb();c.Ob(0,"tr",11),c.Vb("click",function(){c.ic(t);const i=c.Xb().$implicit;return c.Xb(2).onAnswerTest(i.id_test,i.id_historial,i.id_paciente)}),c.Ob(1,"td",12),c.rc(2),c.Yb(3,"nombreTest"),c.Nb(),c.Ob(4,"td",12),c.rc(5),c.Yb(6,"date"),c.Nb(),c.Nb()}if(2&t){const t=c.Xb().$implicit;c.zb(2),c.tc(" Test de ",c.Zb(3,2,t.id_test)," "),c.zb(3),c.tc(" ",c.Zb(6,4,t.f_asignacion)," ")}}function p(t,i){if(1&t&&(c.Mb(0),c.pc(1,d,7,6,"tr",10),c.Lb()),2&t){const t=i.$implicit;c.zb(1),c.dc("ngIf",null===t.puntaje)}}function g(t,i){if(1&t){const t=c.Pb();c.Mb(0),c.Ob(1,"td",19),c.rc(2),c.Yb(3,"psicNombre"),c.Nb(),c.Ob(4,"button",20),c.Vb("click",function(){c.ic(t);const i=c.Xb(2).$implicit;return c.Xb(2).score(i.id_test,i.id_historial,i.id_paciente)}),c.rc(5,"Ver resultados"),c.Nb(),c.Lb()}if(2&t){const t=c.Xb(2).$implicit,i=c.Xb(2);c.zb(2),c.tc(" ",c.ac(3,1,t.id_admin,i.admins)," ")}}function f(t,i){if(1&t&&(c.Ob(0,"tr",14),c.Ob(1,"td",15),c.rc(2),c.Yb(3,"nombreTest"),c.Kb(4,"span"),c.Nb(),c.Ob(5,"td",16),c.rc(6),c.Nb(),c.Ob(7,"td",17),c.rc(8),c.Yb(9,"date"),c.Nb(),c.Ob(10,"td",18),c.rc(11),c.Yb(12,"date"),c.Nb(),c.pc(13,g,6,4,"ng-container",0),c.Nb()),2&t){const t=c.Xb().$implicit,i=c.Xb(2);c.zb(2),c.tc(" Test de ",c.Zb(3,5,t.id_test)," "),c.zb(4),c.tc(" ",t.puntaje," "),c.zb(2),c.sc(c.Zb(9,7,t.f_asignacion)),c.zb(3),c.sc(c.Zb(12,9,t.f_fin)),c.zb(2),c.dc("ngIf",i.admins)}}function m(t,i){if(1&t&&(c.Mb(0),c.pc(1,f,14,11,"tr",13),c.Lb()),2&t){const t=i.$implicit;c.zb(1),c.dc("ngIf",null!==t.puntaje)}}function v(t,i){if(1&t&&(c.Ob(0,"div",2),c.Ob(1,"div",3),c.Ob(2,"h1"),c.rc(3),c.Nb(),c.Ob(4,"h2"),c.rc(5,"No. Expediente: "),c.Ob(6,"span"),c.rc(7),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"section"),c.Ob(9,"div",4),c.Ob(10,"table",5),c.Ob(11,"caption",6),c.rc(12," Pendientes del paciente "),c.Nb(),c.Ob(13,"thead"),c.Ob(14,"th",7),c.rc(15,"Evaluaci\xf3n"),c.Nb(),c.Ob(16,"th",7),c.rc(17,"Fecha"),c.Nb(),c.Nb(),c.Ob(18,"tbody"),c.pc(19,p,2,1,"ng-container",8),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(20,"section",9),c.Ob(21,"table",5),c.Ob(22,"caption",6),c.rc(23," Historial de evaluaciones "),c.Nb(),c.Ob(24,"thead"),c.Ob(25,"th",7),c.rc(26,"Test"),c.Nb(),c.Ob(27,"th",7),c.rc(28,"Puntaje"),c.Nb(),c.Ob(29,"th",7),c.rc(30,"Fecha de asignaci\xf3n"),c.Nb(),c.Ob(31,"th",7),c.rc(32,"Fecha de resoluci\xf3n"),c.Nb(),c.Ob(33,"th",7),c.rc(34,"Psic\xf3logo"),c.Nb(),c.Nb(),c.Ob(35,"tbody"),c.pc(36,m,2,1,"ng-container",8),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t){const t=c.Xb();c.zb(3),c.uc("",t.patient.nombre," ",t.patient.ap_paterno," ",t.patient.ap_materno,""),c.zb(4),c.tc(" ",t.patient.no_expediente," "),c.zb(12),c.dc("ngForOf",t.historial),c.zb(17),c.dc("ngForOf",t.historial)}}let O=(()=>{class t{constructor(t,i,e,n){this.router=t,this.patientService=i,this.adminService=e,this.historialService=n}ngOnInit(){this.fetchData()}fetchData(){return Object(a.a)(this,void 0,void 0,function*(){try{this.isLoading=!0,this.patient=yield this.patientService.getPatient(),this.historial=yield this.historialService.getHistorial(this.patient.id_paciente),this.admins=yield this.adminService.getAdmins(),this.isLoading=!1}catch(t){this.isLoading=!1,this.router.navigate(["/auth/login"])}})}onAnswerTest(t,i,e){this.router.navigate(["/patient/test/"+t,{id_hist:i,id_pac:e}])}score(t,i,e){this.router.navigate(["/patient/results/"+t,{id_hist:i,id_pac:e}])}}return t.\u0275fac=function(i){return new(i||t)(c.Jb(s.b),c.Jb(r.a),c.Jb(o.a),c.Jb(b.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-home-patient"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,"info-patient"],[1,"container-tasks","patient"],[1,"table"],[1,"title"],[1,"table-head"],[4,"ngFor","ngForOf"],[1,"history-test"],["class","table-row task",3,"click",4,"ngIf"],[1,"table-row","task",3,"click"],[1,"table-column"],["class","table-row info",4,"ngIf"],[1,"table-row","info"],["data-th","Test:",1,"table-column"],["data-th","Puntaje:",1,"table-column"],["data-th","Fecha de asignaci\xf3n:",1,"table-column"],["data-th","Fecha de resoluci\xf3n:",1,"table-column"],["data-th","Psic\xf3logo:",1,"table-column"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){1&t&&(c.pc(0,h,1,0,"loading-overlay",0),c.pc(1,v,37,6,"div",1)),2&t&&(c.dc("ngIf",i.isLoading),c.zb(1),c.dc("ngIf",i.patient))},directives:[n.k,n.j],pipes:[u.a,n.d,l.a],styles:[""]}),t})();var N=e("GNJl"),y=e("9mJ8");function w(t,i){1&t&&c.Kb(0,"img",10)}function _(t,i){1&t&&c.Kb(0,"img",11)}let k=(()=>{class t{constructor(t,i,e){this.patientService=t,this.router=i,this.auth=e,this.menuActive=!1}ngOnInit(){this.getGender()}getGender(){return Object(a.a)(this,void 0,void 0,function*(){const{genero:t}=yield this.patientService.getPatient();this.gender=t})}onClickMenu(){this.menuActive=!this.menuActive;let t=document.querySelector(".navbar-menu");this.menuActive?(t.classList.remove("hidden"),t.classList.add("show")):(t.classList.remove("show"),t.classList.add("hidden"))}closeMenu(){let t=document.querySelector(".navbar-menu");t.classList.remove("show"),t.classList.add("hidden"),this.menuActive=!1}cerrarSesion(){this.auth.removeToken(),this.router.navigate(["/auth/login"])}}return t.\u0275fac=function(i){return new(i||t)(c.Jb(r.a),c.Jb(s.b),c.Jb(N.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-header-patient"]],decls:19,vars:8,consts:[[1,"navbar"],[1,"menu-hamburguer",3,"click"],["class","img","src","assets/images/icons/menu.svg","alt","menu",4,"ngIf"],["class","img","src","assets/images/icons/close.svg","alt","menu",4,"ngIf"],[1,"avatar-container","responsive"],["alt","avatar",1,"img",3,"src"],[1,"navbar-menu"],["routerLinkActive","navbar-link-active","routerLink","/patient/home",1,"navbar-link"],["routerLinkActive","navbar-link-active",1,"navbar-link",3,"click"],[1,"avatar-container","no-responsive"],["src","assets/images/icons/menu.svg","alt","menu",1,"img"],["src","assets/images/icons/close.svg","alt","menu",1,"img"]],template:function(t,i){1&t&&(c.Ob(0,"header"),c.Ob(1,"nav",0),c.Ob(2,"figure",1),c.Vb("click",function(){return i.onClickMenu()}),c.pc(3,w,1,0,"img",2),c.pc(4,_,1,0,"img",3),c.Nb(),c.Ob(5,"figure",4),c.Kb(6,"img",5),c.Yb(7,"avatarPatient"),c.Nb(),c.Ob(8,"ul",6),c.Ob(9,"li"),c.Ob(10,"a",7),c.rc(11,"Inicio"),c.Nb(),c.Nb(),c.Ob(12,"li"),c.Ob(13,"a",8),c.Vb("click",function(){return i.cerrarSesion()}),c.rc(14,"Cerrar Sesi\xf3n"),c.Nb(),c.Nb(),c.Ob(15,"li"),c.Ob(16,"figure",9),c.Kb(17,"img",5),c.Yb(18,"avatarPatient"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.zb(3),c.dc("ngIf",!i.menuActive),c.zb(1),c.dc("ngIf",i.menuActive),c.zb(2),c.dc("src",c.Zb(7,4,i.gender),c.jc),c.zb(11),c.dc("src",c.Zb(18,6,i.gender),c.jc))},directives:[n.k,s.d,s.c],pipes:[y.a],styles:[""]}),t})(),z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Db({type:t,selectors:[["app-layout"]],decls:2,vars:0,template:function(t,i){1&t&&(c.Kb(0,"app-header-patient"),c.Kb(1,"router-outlet"))},directives:[k,s.f],styles:[""]}),t})();var S=e("PSD3"),I=e.n(S),L=e("ZtlR");function A(t,i){1&t&&c.Kb(0,"loading-overlay")}const j=function(t){return{"answer-image-primary":t}};function P(t,i){if(1&t){const t=c.Pb();c.Ob(0,"div",16),c.Ob(1,"figure",17),c.Ob(2,"img",18),c.Vb("click",function(){c.ic(t);const e=i.index,n=i.$implicit;return c.Xb(3).checkAnswer(e,n.puntos)}),c.Nb(),c.Nb(),c.Ob(3,"p",19),c.rc(4),c.Nb(),c.Nb()}if(2&t){const t=i.$implicit,e=i.index,n=c.Xb(3);c.zb(1),c.dc("ngClass",c.fc(4,j,n.opcionActivaAux===e)),c.zb(1),c.dc("src","assets/images/answers/"+t.url_imagen,c.jc)("alt",t.opcion),c.zb(2),c.tc(" ",t.opcion," ")}}function D(t,i){if(1&t){const t=c.Pb();c.Ob(0,"div",6),c.Ob(1,"h2",7),c.rc(2),c.Nb(),c.Ob(3,"div",8),c.Ob(4,"h3",9),c.rc(5),c.Nb(),c.Ob(6,"figure",10),c.Kb(7,"img",11),c.Nb(),c.Nb(),c.Ob(8,"div",12),c.pc(9,P,5,6,"div",13),c.Ob(10,"div",14),c.Ob(11,"input",15),c.Vb("click",function(){return c.ic(t),c.Xb(2).siguiente()}),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&t){const t=c.Xb(2);c.zb(2),c.tc(" ",t.test.nombre," "),c.zb(3),c.tc(" ",t.questions[t.con].nombre," "),c.zb(2),c.ec("src","assets/images/questions/",t.questions[t.con].id_pregunta,".jpg",c.jc),c.zb(2),c.dc("ngForOf",t.answers[t.questions[t.con].tipo_respuestas])}}function F(t,i){if(1&t){const t=c.Pb();c.Ob(0,"div",20),c.Ob(1,"input",21),c.Vb("click",function(){return c.ic(t),c.Xb(2).concluir()}),c.Nb(),c.Nb()}}function X(t,i){if(1&t&&(c.Ob(0,"div",2),c.Ob(1,"p",3),c.rc(2,"Selecciona la frecuencia con la que te ocurren las siguientes situaciones. No hay respuestas buenas ni malas."),c.Nb(),c.pc(3,D,12,4,"div",4),c.pc(4,F,2,0,"ng-template",null,5,c.qc),c.Nb()),2&t){const t=c.hc(5),i=c.Xb();c.zb(3),c.dc("ngIf",i.questions[i.con])("ngIfElse",t)}}function J(t,i){if(1&t&&(c.Ob(0,"tr",10),c.Ob(1,"td",11),c.rc(2," Ataques de p\xe1nico y Agorafobia "),c.Kb(3,"span"),c.Nb(),c.Ob(4,"td",12),c.rc(5),c.Nb(),c.Nb()),2&t){const t=c.Xb().$implicit;c.zb(5),c.tc(" ",t.puntaje," ")}}function T(t,i){if(1&t&&(c.Mb(0),c.pc(1,J,6,1,"tr",9),c.Lb()),2&t){const t=i.$implicit;c.zb(1),c.dc("ngIf",null!==t.puntaje)}}function q(t,i){if(1&t&&(c.Ob(0,"div",1),c.Ob(1,"div",2),c.Ob(2,"h1"),c.rc(3),c.Nb(),c.Ob(4,"h2"),c.rc(5,"No. Expediente: "),c.Ob(6,"span"),c.rc(7),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"div"),c.Ob(9,"h3",3),c.rc(10," TEST: Test de Spence "),c.Nb(),c.Ob(11,"h3",3),c.rc(12," Puntaje: 80 "),c.Nb(),c.Ob(13,"h3",3),c.rc(14," Fecha de asignaci\xf3n: 8 ago. 2021 "),c.Nb(),c.Ob(15,"h3",3),c.rc(16," Fecha de resoluci\xf3n: 28 ago. 2021 "),c.Nb(),c.Ob(17,"h3",3),c.rc(18," Psic\xf3logo: David Tlahuapa"),c.Nb(),c.Nb(),c.Ob(19,"section",4),c.Ob(20,"table",5),c.Ob(21,"caption",6),c.rc(22," Detalle de puntuaci\xf3n: "),c.Nb(),c.Ob(23,"thead"),c.Ob(24,"th",7),c.rc(25,"Pregunta"),c.Nb(),c.Ob(26,"th",7),c.rc(27,"Puntaje"),c.Nb(),c.Nb(),c.Ob(28,"tbody"),c.pc(29,T,2,1,"ng-container",8),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t){const t=c.Xb();c.zb(3),c.uc("",t.patient.nombre," ",t.patient.ap_paterno," ",t.patient.ap_materno,""),c.zb(4),c.tc(" ",t.patient.no_expediente," "),c.zb(22),c.dc("ngForOf",t.historial)}}const x=[{path:"",component:z,children:[{path:"home",component:O},{path:"test/:id_test",component:(()=>{class t{constructor(t,i,e,n){this.router=t,this.activatedRoute=i,this.testService=e,this.historialService=n,this.con=0,this.opcionActiva="",this.currentDate=new Date}ngOnInit(){this.activatedRoute.params.subscribe(({id_test:t})=>this.id_test=t),this.fetchData(),this.final=0,this.id_historial=Number(this.activatedRoute.snapshot.paramMap.get("id_hist")),this.id_paciente=Number(this.activatedRoute.snapshot.paramMap.get("id_pac"));const t=this.currentDate.getDate(),i=this.currentDate.getMonth(),e=this.currentDate.getFullYear();this.mySQLDateString=e+"-"+(i+1)+"-"+t+"T05:00:00.000Z"}fetchData(){return Object(a.a)(this,void 0,void 0,function*(){try{this.isLoading=!0,this.test=yield this.testService.getTest(this.id_test),this.questions=this.test.questions,this.answers=this.test.answers,this.isLoading=!1}catch(t){this.isLoading=!1,this.router.navigate(["/auth/login"])}})}checkAnswer(t,i){this.score=i,this.opcionActivaAux=t,this.opcionActiva=t.toString()}siguiente(){this.opcionActiva.length>0&&(this.con<this.questions.length&&(this.con++,this.final+=this.score),this.opcionActiva="",this.opcionActivaAux=""),console.log(this.final)}concluir(){return Object(a.a)(this,void 0,void 0,function*(){try{this.isLoading=!0,yield this.historialService.updateHistorial(this.final,this.mySQLDateString,this.id_historial,this.id_paciente),this.isLoading=!1,I.a.fire({position:"top-right",icon:"success",text:"Test registrado con \xe9xito",timer:2e3,showConfirmButton:!1}),this.router.navigate(["/patient/home"])}catch(t){this.isLoading=!1,this.router.navigate(["/patient/home"]),I.a.fire({position:"top-right",title:"Ha ocurrido un error, int\xe9ntalo m\xe1s tarde.",icon:"error",timer:2e3,showConfirmButton:!1})}})}}return t.\u0275fac=function(i){return new(i||t)(c.Jb(s.b),c.Jb(s.a),c.Jb(L.a),c.Jb(b.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-test"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container test-container",4,"ngIf"],[1,"container","test-container"],[1,"test-intructions"],["class","test-content",4,"ngIf","ngIfElse"],["finalizar",""],[1,"test-content"],[1,"test-name","title"],[1,"test-question-container"],[1,"question-text"],[1,"question-image-container"],["alt","",1,"img",3,"src"],[1,"container-answers"],["class","container-answer",4,"ngFor","ngForOf"],[1,"button-next-container"],["type","button","value","Siguiente",1,"btn","btn-primary","btn-submit",3,"click"],[1,"container-answer"],[1,"answer-image",3,"ngClass"],[1,"img",3,"src","alt","click"],[1,"answer-text"],[1,"button-end-container"],["type","button","value","Finalizar",1,"btn","btn-primary","btn-submit",3,"click"]],template:function(t,i){1&t&&(c.pc(0,A,1,0,"loading-overlay",0),c.pc(1,X,6,2,"div",1)),2&t&&(c.dc("ngIf",i.isLoading),c.zb(1),c.dc("ngIf",i.test))},directives:[n.k,n.j,n.i],encapsulation:2}),t})()},{path:"results/:id_results",component:(()=>{class t{constructor(t,i,e,n){this.router=t,this.patientService=i,this.adminService=e,this.historialService=n}ngOnInit(){this.fetchData()}fetchData(){return Object(a.a)(this,void 0,void 0,function*(){try{this.isLoading=!0,this.patient=yield this.patientService.getPatient(),this.historial=yield this.historialService.getHistorial(this.patient.id_paciente),this.admins=yield this.adminService.getAdmins(),this.isLoading=!1}catch(t){this.isLoading=!1,this.router.navigate(["/auth/login"])}})}}return t.\u0275fac=function(i){return new(i||t)(c.Jb(s.b),c.Jb(r.a),c.Jb(o.a),c.Jb(b.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-results"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"info-patient"],[1,"form-control"],[1,"history-test"],[1,"table"],[1,"title"],[1,"table-head"],[4,"ngFor","ngForOf"],["class","table-row info",4,"ngIf"],[1,"table-row","info"],["data-th","Test:",1,"table-column"],["data-th","Puntaje:",1,"table-column"]],template:function(t,i){1&t&&c.pc(0,q,30,5,"div",0),2&t&&c.dc("ngIf",i.patient)},directives:[n.k,n.j],styles:[""]}),t})()},{path:"**",pathMatch:"full",redirectTo:"home"}]}];let M=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[s.e.forChild(x)],s.e]}),t})();var K=e("PCNd");let $=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},providers:[y.a],imports:[[n.b,M,K.a]]}),t})()}}]);