/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e,b as s,c as r}from"./chunk-189e092f.js";class a{render(){return t("div",{class:"app-home"},t("p",null,"Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",t("a",{href:"https://stenciljs.com"},"stenciljs.com")," to get started."),t("stencil-route-link",{url:"/profile/stencil"},t("button",null,"Profile page")))}static get is(){return"app-home"}static get style(){return".app-home{padding:10px}button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}"}}class i{constructor(){this.unsubscribe=(()=>{}),this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=e(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){if(!s(t))return t.preventDefault(),this.history.push(this.getUrl(this.url))}getUrl(t){return"/"==t.charAt(0)&&"/"==this.root.charAt(this.root.length-1)?this.root.slice(0,this.root.length-1)+t:this.root+t}render(){let e={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(e.class[this.anchorClass]=!0),"a"===this.custom&&(e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex})),t(this.custom,Object.assign({},e),t("slot",null))}static get is(){return"stencil-route-link"}static get properties(){return{activeClass:{type:String,attr:"active-class"},anchorClass:{type:String,attr:"anchor-class"},anchorRole:{type:String,attr:"anchor-role"},anchorTabIndex:{type:String,attr:"anchor-tab-index"},anchorTitle:{type:String,attr:"anchor-title"},custom:{type:String,attr:"custom"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},history:{type:"Any",attr:"history"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{state:!0},root:{type:String,attr:"root"},strict:{type:Boolean,attr:"strict"},url:{type:String,attr:"url"},urlMatch:{type:String,attr:"url-match"}}}}r.injectProps(i,["history","location","root"]);export{a as AppHome,i as StencilRouteLink};