var t=document.querySelector(".header"),u=t.querySelector(".header__toggler"),p=t.querySelector(".search-form__input"),m=()=>{t.classList.toggle("header--closed"),t.classList.toggle("header--opened"),p.value=""},i=()=>{u.addEventListener("click",m)};var o=document.querySelector(".header"),r=o.querySelector(".search-form__input"),s=()=>{o.classList.contains("header--closed")&&(o.classList.remove("header--closed"),o.classList.add("header--opened"))},l=()=>{r.addEventListener("click",s),r.addEventListener("input",s)};var e=document.querySelector(".menu"),h=document.querySelector(".header__toggler"),y=e.querySelector(".menu__scroll-icon--position-top"),n=e.querySelector(".menu__scroll-icon--position-bottom"),g=()=>e.scrollHeight>e.clientHeight,c=a=>{a.style.display=g()?"block":"none"},S=()=>{c(n)},_=()=>{c(n)},L=()=>{y.style.display=e.scrollTop>0?"block":"none",n.style.display=e.scrollHeight-e.clientHeight>e.scrollTop?"block":"none"},d=()=>{c(n),window.addEventListener("resize",_),e.addEventListener("scroll",L),h.addEventListener("click",S)};i();l();d();