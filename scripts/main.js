var c={MENU_CONTENT:300,SCROLL_ICON:300},r={MENU_CONTENT:"--animation-menu-content",SCROLL_ICON:"--animation-scroll-icon"},o={MenuContent:{SHOW:`show-menu-content ${c.MENU_CONTENT/1e3}s ease-in-out both`,HIDE:`hide-menu-content ${c.MENU_CONTENT/1e3}s ease-in-out both`},ScrollIcon:{SHOW:`show-scroll-icon ${c.SCROLL_ICON/1e3}s ease-in-out both`,HIDE:`hide-scroll-icon ${c.SCROLL_ICON/1e3}s ease-in-out both`}};var l=e=>e.scrollHeight>e.clientHeight,L=e=>window.getComputedStyle(e).opacity==="1";var m=document.querySelector(".header__wrapper"),n=m.querySelector(".menu"),V=n.querySelector(".menu__scroll-icon--position-top"),_=n.querySelector(".menu__scroll-icon--position-bottom"),E=e=>{if(l(n)!==L(e)){let t=l(n)?o.ScrollIcon.SHOW:o.ScrollIcon.HIDE;e.style.setProperty(r.SCROLL_ICON,t)}},C=()=>{let e=m.classList.contains("header__wrapper--closed")?o.MenuContent.SHOW:o.MenuContent.HIDE;m.style.setProperty(r.MENU_CONTENT,e),setTimeout(()=>E(_),c.MENU_CONTENT)},v=()=>{let e=n.scrollTop>0?o.ScrollIcon.SHOW:o.ScrollIcon.HIDE;V.style.setProperty(r.SCROLL_ICON,e);let t=n.scrollHeight-n.clientHeight>n.scrollTop?o.ScrollIcon.SHOW:o.ScrollIcon.HIDE;_.style.setProperty(r.SCROLL_ICON,t)},f=()=>{E(_)};var g=document.querySelector(".header__wrapper"),z=g.querySelector(".header__toggler"),y=()=>{C(),g.classList.toggle("header__wrapper--closed"),g.classList.toggle("header__wrapper--opened")},j=()=>y(),w=()=>{z.addEventListener("click",j)};var M=document.querySelector(".header__wrapper"),O=M.querySelector(".search-form__input"),k=()=>{M.classList.contains("header__wrapper--closed")&&y()},N=()=>{O.addEventListener("click",k),O.addEventListener("input",k)};var u=document.querySelector(".menu"),K=u.querySelector(".menu__scroll-icon--position-top"),F=u.querySelector(".menu__scroll-icon--position-bottom"),T=()=>{K.style.opacity=0,F.style.opacity=l(u)?1:0,u.addEventListener("scroll",v)};var G=document.querySelectorAll(".menu__link[data-counter]"),J=document.querySelectorAll(".menu__link--type-project"),Q=e=>`
  <div class="menu__counter">
    <div class="menu__count-number">${e}</div>
    <span class="visually-hidden">\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439</span>
  </div>
`,X=(e,t)=>{let i=document.createElement("div");i.innerHTML=Q(e),t.appendChild(i.firstElementChild)},q=()=>{G.forEach(e=>{X(e.dataset.counter,e)}),J.forEach(e=>{e.style.setProperty("--icon-color",e.dataset.bookmarkColor)})};var Y=new Map([["status-online",{color:"rgba(34, 197, 94, 1)",text:"\u0412 \u0441\u0435\u0442\u0438"}],["status-dont-disturb",{color:"rgb(197, 34, 34)",text:"\u041D\u0435 \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u044C"}]]),H=document.querySelector(".header__wrapper"),W=H.querySelector(".status-menu"),Z=W.querySelector(".status-menu__current"),b=W.querySelector(".status-menu__toggler"),s=document.querySelector(".status-menu__popup"),ee=()=>{let e=H.getBoundingClientRect(),t=s.getBoundingClientRect(),i=window.screen.width,p=t.left-e.left,d=i-p-24;s.style.maxWidth=`${d}px`},x=e=>{let t=Y.get(e.target.id);b.style.setProperty("--icon-color",t.color),Z.textContent=t.text},I=e=>{e.target.closest(".status-menu__popup")||h()},R=e=>{e.key==="Escape"&&h()},te=e=>{e.stopPropagation(),h()};function h(){s.classList.toggle("status-menu__popup--is-opened"),s.classList.toggle("status-menu__popup--is-closed"),s.classList.contains("status-menu__popup--is-opened")?(document.addEventListener("click",I),document.addEventListener("keydown",R),s.addEventListener("change",x)):(document.removeEventListener("click",I),document.removeEventListener("keydown",R),s.removeEventListener("change",x))}var P=()=>{ee(),b.addEventListener("click",te)};var U=document.querySelector(".header__wrapper"),oe=U.querySelector(".user-menu"),A=oe.querySelector(".user-menu__toggler"),a=document.querySelector(".user-menu__popup"),ne=()=>{let e=U.getBoundingClientRect(),t=a.getBoundingClientRect(),i=e.width,p=e.right-t.right,d=i-p-24;a.style.maxWidth=`${d}px`},D=e=>{e.target.closest(".user-menu__popup")||S()},B=e=>{e.key==="Escape"&&S()},se=e=>{e.stopPropagation(),S()};function S(){a.classList.toggle("user-menu__popup--is-opened"),a.classList.toggle("user-menu__popup--is-closed"),a.classList.contains("user-menu__popup--is-opened")?(document.addEventListener("click",D),document.addEventListener("keydown",B)):(document.removeEventListener("click",D),document.removeEventListener("keydown",B))}var $=()=>{A.addEventListener("click",ne,{once:!0}),A.addEventListener("click",se)};w();N();T();q();P();$();window.addEventListener("resize",f);
