var e={MENU_CONTENT:300,SCROLL_ICON:300},i={MENU_CONTENT:"--animation-menu-content",SCROLL_ICON:"--animation-scroll-icon"},t={MenuContent:{SHOW:`show-menu-content ${e.MENU_CONTENT/1e3}s ease-in-out both`,HIDE:`hide-menu-content ${e.MENU_CONTENT/1e3}s ease-in-out both`},ScrollIcon:{SHOW:`show-scroll-icon ${e.SCROLL_ICON/1e3}s ease-in-out both`,HIDE:`hide-scroll-icon ${e.SCROLL_ICON/1e3}s ease-in-out both`}};var r=o=>o.scrollHeight>o.clientHeight,l=o=>window.getComputedStyle(o).opacity==="1";var c=document.querySelector(".header__wrapper"),n=c.querySelector(".menu"),I=n.querySelector(".menu__scroll-icon--position-top"),S=n.querySelector(".menu__scroll-icon--position-bottom"),h=o=>{if(r(n)!==l(o)){let _=r(n)?t.ScrollIcon.SHOW:t.ScrollIcon.HIDE;o.style.setProperty(i.SCROLL_ICON,_)}},a=()=>{let o=c.classList.contains("header__wrapper--closed")?t.MenuContent.SHOW:t.MenuContent.HIDE;c.style.setProperty(i.MENU_CONTENT,o),setTimeout(()=>h(S),e.MENU_CONTENT)};var s=document.querySelector(".header__wrapper"),g=s.querySelector(".header__toggler"),p=()=>{a(),s.classList.toggle("header__wrapper--closed"),s.classList.toggle("header__wrapper--opened")};var d=document.querySelector(".header__wrapper"),u=d.querySelector(".search-form__input"),m=()=>{d.classList.contains("header__wrapper--closed")&&p()},w=()=>{u.addEventListener("click",m),u.addEventListener("input",m)};export{w as init};
