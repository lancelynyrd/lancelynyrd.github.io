(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"Lt/c":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("7lBf"),b=u("InIh"),i=function(){function l(l,n){this.pc=l,this.philgo=n,this.showDislike=!1,this.error=new o.m,this.loading=!0}return l.prototype.ngOnInit=function(){},l.prototype.doInit=function(l){var n=this;this.philgo.postGet(l,"view").subscribe(function(l){if(!l.idx)return n.error.emit({code:991,message:"Post not found!"}),n.loading=!1;l.show=!0,l.showComment=!!l.comments,l.content=n.pc.hookImg(l.content),l.safe_content=n.pc.safeHtml(l.content),n.callbackPost&&n.callbackPost(l,n.extra),console.log(l),n.post=l,n.loading=!1},function(l){n.pc.error(l),n.error.emit(l),n.loading=!1})},l}(),e=function(){function l(l){this.activatedRoute=l,this.idx=""}return l.prototype.ngOnInit=function(){var l=this;this.activatedRoute.paramMap.subscribe(function(n){l.idx=n.get("idx"),l.PhilgoPostViewComponent.doInit(l.idx)})},l.prototype.callbackPost=function(l,n){l.editUrl="post/update/"+l.idx,l.viewUrl="post/view/"+l.idx},l}(),a=function(){return function(){}}(),p=u("pMnS"),s=u("tnmA"),c=u("dDrH"),r=u("oBZk"),g=u("ZZ/e"),m=u("Xqnl"),f=u("2MiI"),d=u("OaWH"),x=u("gUVx"),h=u("P8t4"),w=u("ZYCi"),I=u("YYJB"),k=u("Ai5B"),v=u("eBCJ"),O=u("Ip0R"),P=u("YqA2"),J=u("Xh/C"),L=u("uheI"),j=u("G6cl"),y=u("Hm0F"),C=u("EG5k"),V=u("EWxR"),F=u("8Po1"),D=o.nb({encapsulation:0,styles:[[".m-0[_ngcontent-%COMP%]{margin:0}"]],data:{}});function R(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,0,"hr",[["style","margin: 0;"]],null,null,null,null,null))],null,null)}function Z(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-philgo-buttons",[],null,null,null,x.b,x.a)),o.ob(1,114688,null,0,h.a,[w.m,I.a,t.a,b.a],{root:[0,"root"],postOrComment:[1,"postOrComment"],isOnView:[2,"isOnView"],showDislike:[3,"showDislike"]},null)],function(l,n){var u=n.component;l(n,1,0,u.post,u.post,!0,u.showDislike)},null)}function q(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-comment-list",[],null,null,null,k.b,k.a)),o.ob(1,114688,null,0,v.a,[t.a,b.a],{post:[0,"post"],comments:[1,"comments"],showDislike:[2,"showDislike"]},null)],function(l,n){var u=n.component;l(n,1,0,u.post,u.post.comments,u.showDislike)},null)}function B(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,2,"div",[["class","pb-3"]],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,q)),o.ob(2,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.post.comments&&u.post.comments.length)},null)}function E(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,2,"div",[["style","padding: 0 .75em 1em .75em ;"]],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,1,"app-comment-box",[],null,null,null,P.b,P.a)),o.ob(2,114688,null,0,J.a,[b.a,t.a],{root:[0,"root"],parent:[1,"parent"]},null)],function(l,n){var u=n.component;l(n,2,0,u.post,u.post)},null)}function H(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),o.pb(1,0,null,null,1,"app-post-content",[],null,null,null,L.b,L.a)),o.ob(2,114688,null,0,j.a,[t.a],{post:[0,"post"]},null),(l()(),o.gb(16777216,null,null,1,null,R)),o.ob(4,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,Z)),o.ob(6,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,B)),o.ob(8,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,E)),o.ob(10,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,u.post),l(n,4,0,u.philgo.isLoggedIn()||u.post.comments),l(n,6,0,u.philgo.isLoggedIn()||u.post.comments||u.post.viewUrl&&u.pc.isWeb),l(n,8,0,u.post.showComment),l(n,10,0,(!u.post.replyTo||u.post.replyTo===u.post.idx)&&!u.post.commentInUpdate&&u.philgo.isLoggedIn())},null)}function X(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,5,"ion-card",[["data-role","post"]],null,null,null,r.Z,r.g)),o.ob(1,49152,null,0,g.l,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,1,"app-post-header",[],null,null,null,y.b,y.a)),o.ob(3,114688,null,0,C.a,[t.a,b.a],{post:[0,"post"],isOnView:[1,"isOnView"]},null),(l()(),o.gb(16777216,null,0,1,null,H)),o.ob(5,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.post,!0),l(n,5,0,u.post.show)},null)}function Y(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-post-skeleton",[],null,null,null,V.b,V.a)),o.ob(1,114688,null,0,F.a,[],{noOfLoadingPosts:[0,"noOfLoadingPosts"]},null)],function(l,n){l(n,1,0,1)},null)}function K(l){return o.Jb(0,[(l()(),o.gb(0,null,null,0,null,Y))],null,null)}function M(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,8,"ion-card",[],null,null,null,r.Z,r.g)),o.ob(1,49152,null,0,g.l,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,6,"ion-card-content",[],null,null,null,r.V,r.h)),o.ob(3,49152,null,0,g.m,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,4,"div",[["style","text-align: center; word-wrap: normal;"]],null,null,null,null,null)),(l()(),o.pb(5,0,null,null,1,"ion-icon",[["name","sad"],["style","font-size: 100px;"]],null,null,null,r.cb,r.n)),o.ob(6,49152,null,0,g.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.pb(7,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),o.Hb(8,null,[""," "]))],function(l,n){l(n,6,0,"sad")},function(l,n){l(n,8,0,n.component.pc.t("postNotFound"))})}function N(l){return o.Jb(0,[(l()(),o.gb(16777216,null,null,1,null,X)),o.ob(1,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,K)),o.ob(3,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,null,1,null,M)),o.ob(5,16384,null,0,O.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,!u.loading&&u.post&&u.post.idx),l(n,3,0,u.loading),l(n,5,0,!u.post&&!u.loading)},null)}var U=o.nb({encapsulation:0,styles:[[""]],data:{}});function A(l){return o.Jb(0,[o.Fb(402653184,1,{PhilgoPostViewComponent:0}),(l()(),o.pb(1,0,null,null,3,"ion-header",[],null,null,null,r.bb,r.m)),o.ob(2,49152,null,0,g.A,[o.h,o.k],null,null),(l()(),o.pb(3,0,null,0,1,"app-header",[],null,null,null,m.b,m.a)),o.ob(4,114688,null,0,f.a,[d.a],{title:[0,"title"]},null),(l()(),o.pb(5,0,null,null,4,"ion-content",[],null,null,null,r.ab,r.l)),o.ob(6,49152,null,0,g.t,[o.h,o.k],null,null),(l()(),o.pb(7,0,null,0,2,"div",[["class","wide-max-width"]],null,null,null,null,null)),(l()(),o.pb(8,0,null,null,1,"app-philgo-post-view",[],null,null,null,N,D)),o.ob(9,114688,[[1,4]],0,i,[t.a,b.a],{callbackPost:[0,"callbackPost"]},null)],function(l,n){var u=n.component;l(n,4,0,"Post View"),l(n,9,0,u.callbackPost)},null)}function G(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-view",[],null,null,null,A,U)),o.ob(1,114688,null,0,e,[w.a],null,null)],function(l,n){l(n,1,0)},null)}var Q=o.lb("app-view",e,G,{},{},[]),S=u("gIcY"),T=u("t/Na"),W=u("7bHZ"),z=u("ZYjt"),_=u("WinS"),$=u("lLEl"),ll=u("Q7sa"),nl=u("kL+j"),ul=u("dEXi");u.d(n,"ViewPageModuleNgFactory",function(){return ol});var ol=o.mb(a,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[p.a,s.a,c.a,Q]],[3,o.j],o.x]),o.xb(4608,O.l,O.k,[o.u,[2,O.t]]),o.xb(4608,S.m,S.m,[]),o.xb(4608,g.b,g.b,[o.z,o.g]),o.xb(4608,g.Fb,g.Fb,[g.b,o.j,o.q,O.c]),o.xb(4608,g.Kb,g.Kb,[g.b,o.j,o.q,O.c]),o.xb(5120,o.d,function(l,n,u,o){return[g.Rb(l,n),g.Rb(u,o)]},[g.Qb,O.c,g.Qb,O.c]),o.xb(4608,T.m,T.s,[O.c,o.B,T.q]),o.xb(4608,T.t,T.t,[T.m,T.r]),o.xb(5120,T.a,function(l){return[l]},[T.t]),o.xb(4608,T.p,T.p,[]),o.xb(6144,T.n,null,[T.p]),o.xb(4608,T.l,T.l,[T.n]),o.xb(6144,T.b,null,[T.l]),o.xb(4608,T.g,T.o,[T.b,o.q]),o.xb(4608,T.c,T.c,[T.g]),o.xb(4608,W.a,W.a,[g.Fb]),o.xb(4608,t.a,t.a,[z.b,g.Pb,b.a,W.a]),o.xb(4608,I.a,I.a,[g.Kb]),o.xb(1073742336,O.b,O.b,[]),o.xb(1073742336,S.k,S.k,[]),o.xb(1073742336,S.b,S.b,[]),o.xb(1073742336,g.Cb,g.Cb,[]),o.xb(1073742336,w.o,w.o,[[2,w.u],[2,w.m]]),o.xb(1073742336,_.a,_.a,[d.a]),o.xb(1073742336,$.a,$.a,[]),o.xb(1073742336,ll.a,ll.a,[]),o.xb(1073742336,T.e,T.e,[]),o.xb(1073742336,T.d,T.d,[]),o.xb(1073742336,nl.a,nl.a,[]),o.xb(1073742336,ul.a,ul.a,[]),o.xb(1073742336,a,a,[]),o.xb(256,g.Qb,void 0,[]),o.xb(256,T.q,"XSRF-TOKEN",[]),o.xb(256,T.r,"X-XSRF-TOKEN",[]),o.xb(1024,w.k,function(){return[[{path:"",component:e}]]},[])])})}}]);