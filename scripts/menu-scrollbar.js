var s="appear-scroll 0.3s ease-in-out both",i="disappear-scroll 0.3s ease-in-out both",e=document.querySelector(".menu"),m=document.querySelector(".header__toggler"),l=e.querySelector(".menu__scroll-icon--position-top"),o=e.querySelector(".menu__scroll-icon--position-bottom"),c=document.querySelector(".search-form__input"),r,t=()=>e.scrollHeight>e.clientHeight,a=p=>{if(t()!==r){let y=t()?s:i;p.style.setProperty("--scroll-icon-animation",y),r=t()}},n=()=>{setTimeout(()=>a(o),300)},u=()=>{a(o)},d=()=>{e.scrollTop>0?l.style.setProperty("--scroll-icon-animation",s):l.style.setProperty("--scroll-icon-animation",i),e.scrollHeight-e.clientHeight>e.scrollTop?o.style.setProperty("--scroll-icon-animation",s):o.style.setProperty("--scroll-icon-animation",i)},h=()=>{r=t(),l.style.setProperty("--scroll-icon-animation","disappear 0s both"),t()?o.style.setProperty("--scroll-icon-animation","appear 0s both"):o.style.setProperty("--scroll-icon-animation","disappear 0s both"),window.addEventListener("resize",u),e.addEventListener("scroll",d),m.addEventListener("click",n),c.addEventListener("click",n),c.addEventListener("input",n)};export{h as init};
