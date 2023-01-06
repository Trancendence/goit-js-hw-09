const t=document.querySelector("button.change-color"),e=document.querySelector("body");document.querySelector("button.stop");t.addEventListener("click",(o=>{t.attr("disabled",!0),setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}),1e3)}));
//# sourceMappingURL=01-color-switcher.910ec32f.js.map
