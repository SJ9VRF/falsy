
document.addEventListener("click", function(e){
  const t = e.target.closest("[data-copy]");
  if(!t) return;
  navigator.clipboard.writeText(t.getAttribute("data-copy")).then(()=>{
    const old = t.textContent;
    t.textContent = "Copied";
    setTimeout(()=>t.textContent = old, 1200);
  });
});
