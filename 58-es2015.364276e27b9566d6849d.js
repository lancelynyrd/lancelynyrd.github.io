(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{GEuc:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_menu",function(){return d}),i.d(e,"ion_menu_button",function(){return w}),i.d(e,"ion_menu_controller",function(){return O}),i.d(e,"ion_menu_toggle",function(){return k});var n=i("YrOr"),s=i("TJLY"),a=i("KSOA"),o=i("EQwm"),r=i("9foO");class d{constructor(t){Object(n.m)(this,t),this.lastOnEnd=0,this.blocker=r.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(n.e)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(n.d)(this,"ionWillOpen",7),this.ionWillClose=Object(n.d)(this,"ionWillClose",7),this.ionDidOpen=Object(n.d)(this,"ionDidOpen",7),this.ionDidClose=Object(n.d)(this,"ionDidClose",7),this.ionMenuChange=Object(n.d)(this,"ionMenuChange",7),this.lazyMenuCtrl=Object(n.l)(this,"ion-menu-controller")}typeChanged(t,e){const i=this.contentEl;i&&(void 0!==e&&i.classList.remove(`menu-content-${e}`),i.classList.add(`menu-content-${t}`),i.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=Object(o.h)(this.side)}swipeGestureChanged(){this.updateState()}async componentWillLoad(){void 0===this.type&&(this.type=s.b.get("menuType","ios"===this.mode?"reveal":"overlay"));const t=this.menuCtrl=await this.lazyMenuCtrl.componentOnReady().then(t=>t._getInstance()),e=this.el.parentNode,n=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]");n&&n.tagName?(this.contentEl=n,n.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),this.gesture=(await Promise.resolve().then(i.bind(null,"9foO"))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}componentDidUnload(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return this.menuCtrl._setOpen(this,t,e)}async _setOpen(t,e=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,e),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await this.menuCtrl._createAnimation(this.type,this))}async startAnimation(t,e){const i=this.animation.reverse(!t);e?await i.playAsync():i.playSync()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&l(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():Object(o.b)(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void Object(o.b)(!1,"isAnimating has to be true");const e=h(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(e/this.width)}onEnd(t){if(!this.isAnimating||!this.animation)return void Object(o.b)(!1,"isAnimating has to be true");const e=this._isOpen,i=this.isEndSide,n=h(t.deltaX,e,i),s=this.width,a=n/s,r=t.velocityX,d=s/2,l=r>=0&&(r>.2||t.deltaX>d),c=r<=0&&(r<-.2||t.deltaX<-d),u=e?i?l:c:i?c:l;let m=!e&&u;e&&!u&&(m=!0);const p=(u?1-a:a)*s;let b=0;if(p>5){const t=p/Math.abs(r);b=Math.min(t,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(()=>this.afterAnimation(m),{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(u,a,b)}beforeAnimation(t){Object(o.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(c),this.backdropEl&&this.backdropEl.classList.add(u),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){Object(o.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(m),this.ionDidOpen.emit()):(this.el.classList.remove(c),this.contentEl&&this.contentEl.classList.remove(m),this.backdropEl&&this.backdropEl.classList.remove(u),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),Object(o.b)(!this.isAnimating,"can not be animating")}forceClosing(){Object(o.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)}render(){const{isEndSide:t,type:e,disabled:i,mode:s,isPaneVisible:a}=this;return Object(n.i)(n.a,{role:"navigation",class:{[s]:!0,[`menu-type-${e}`]:!0,"menu-enabled":!i,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":a}},Object(n.i)("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},Object(n.i)("slot",null)),Object(n.i)("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}get el(){return Object(n.f)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}static get style(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}"}}const h=(t,e,i)=>Math.max(0,e!==i?-t:t),l=(t,e,i,n)=>i?e>=t.innerWidth-n:e<=n,c="show-menu",u="show-backdrop",m="menu-content-open",p=t=>{const e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)},b=async t=>{const e=await p(document);e&&await e.get(t)&&e.toggle(t)},g=async t=>{const e=await p(document);if(e){const i=await e.get(t);if(i&&await i.isActive())return!0}return!1};class w{constructor(t){Object(n.m)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.setVisibility=async()=>{this.visible=await g(this.menu)},this.onClick=async()=>{await b(this.menu)}}async componentDidLoad(){await this.setVisibility()}async visibilityChanged(){await this.setVisibility()}render(){const{color:t,disabled:e}=this,i=Object(n.e)(this),o=s.b.get("menuIcon","menu"),r=this.autoHide&&!this.visible,d={type:this.type};return Object(n.i)(n.a,{onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":r?"true":null,class:Object.assign({[i]:!0},Object(a.a)(t),{button:!0,"menu-button-hidden":r,"menu-button-disabled":e,"ion-activatable":!0,"ion-focusable":!0})},Object(n.i)("button",Object.assign({},d,{disabled:this.disabled,class:"button-native"}),Object(n.i)("slot",null,Object(n.i)("ion-icon",{icon:o,mode:i,lazy:!1})),"md"===i&&Object(n.i)("ion-ripple-effect",{type:"unbounded"})))}static get style(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"}}const y=t=>Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300)),v=(t,e,i)=>{let n,s;const a=i.width+8;i.isEndSide?(n=a+"px",s="0px"):(n=-a+"px",s="0px");const o=(new t).addElement(i.menuInnerEl).fromTo("translateX",n,s),r=(new t).addElement(i.backdropEl).fromTo("opacity",.01,.32);return y(t).then(t=>t.add(o).add(r))},f=(t,e,i)=>{let n,s;const a=i.width;i.isEndSide?(n=-a+"px",s=a+"px"):(n=a+"px",s=-a+"px");const o=(new t).addElement(i.menuInnerEl).fromTo("translateX",s,"0px"),r=(new t).addElement(i.contentEl).fromTo("translateX","0px",n),d=(new t).addElement(i.backdropEl).fromTo("opacity",.01,.32);return y(t).then(t=>t.add(o).add(d).add(r))},x=(t,e,i)=>{const n=i.width*(i.isEndSide?-1:1)+"px",s=(new t).addElement(i.contentEl).fromTo("translateX","0px",n);return y(t).then(t=>t.add(s))};class O{constructor(t){Object(n.m)(this,t),this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",x),this.registerAnimation("push",f),this.registerAnimation("overlay",v)}async open(t){const e=await this.get(t);return!!e&&e.open()}async close(t){const e=await(void 0!==t?this.get(t):this.getOpen());return void 0!==e&&e.close()}async toggle(t){const e=await this.get(t);return!!e&&e.toggle()}async enable(t,e){const i=await this.get(e);return i&&(i.disabled=!t),i}async swipeGesture(t,e){const i=await this.get(e);return i&&(i.swipeGesture=t),i}async isOpen(t){if(null!=t){const e=await this.get(t);return void 0!==e&&e.isOpen()}return void 0!==await this.getOpen()}async isEnabled(t){const e=await this.get(t);return!!e&&!e.disabled}async get(t){return await this.waitUntilReady(),"start"===t||"end"===t?this.find(e=>e.side===t&&!e.disabled)||this.find(e=>e.side===t):null!=t?this.find(e=>e.menuId===t):this.find(t=>!t.disabled)||(this.menus.length>0?this.menus[0].el:void 0)}async getOpen(){return await this.waitUntilReady(),this.getOpenSync()}async getMenus(){return await this.waitUntilReady(),this.getMenusSync()}async isAnimating(){return await this.waitUntilReady(),this.isAnimatingSync()}async registerAnimation(t,e){this.menuAnimations.set(t,e)}_getInstance(){return Promise.resolve(this)}_register(t){const e=this.menus;e.indexOf(t)<0&&(t.disabled||this._setActiveMenu(t),e.push(t))}_unregister(t){const e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)}_setActiveMenu(t){const e=t.side;this.menus.filter(i=>i.side===e&&i!==t).forEach(t=>t.disabled=!0)}async _setOpen(t,e,i){if(this.isAnimatingSync())return!1;if(e){const e=await this.getOpen();e&&t.el!==e&&await e.setOpen(!1,!1)}return t._setOpen(e,i)}async _createAnimation(t,e){const n=this.menuAnimations.get(t);if(!n)throw new Error("animation not registered");const a=await i.e(2).then(i.bind(null,"UGhQ")).then(t=>t.create(n,null,e));return s.b.getBoolean("animated",!0)||a.duration(0),a}getOpenSync(){return this.find(t=>t._isOpen)}getMenusSync(){return this.menus.map(t=>t.el)}isAnimatingSync(){return this.menus.some(t=>t.isAnimating)}find(t){const e=this.menus.find(t);if(void 0!==e)return e.el}waitUntilReady(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(t=>t.componentOnReady()))}static get style(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}}class k{constructor(t){Object(n.m)(this,t),this.visible=!1,this.autoHide=!0,this.setVisibility=async()=>{this.visible=await g(this.menu)},this.onClick=async()=>{await b(this.menu)}}async componentDidLoad(){await this.setVisibility()}async visibilityChanged(){await this.setVisibility()}render(){const t=Object(n.e)(this),e=this.autoHide&&!this.visible;return Object(n.i)(n.a,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[t]:!0,"menu-toggle-hidden":e}},Object(n.i)("slot",null))}static get style(){return":host(.menu-toggle-hidden){display:none}"}}}}]);