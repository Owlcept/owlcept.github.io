function reveal(){
  var items = document.querySelectorAll(
  /* This is for common CSS animations */
    ".notion-column-list:nth-of-type(8) > .notion-column> .notion-callout");
  for(const el of items){
    var winH = window.innerHeight;
    var eleTop = el.getBoundingClientRect().top;
    var elevis = 150;
    if (eleTop < winH - elevis && eleTop > 100){
      el.classList.add("active");
    } else{
      //el.classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

function anima(){
  // This is for Anime JS
  var items = ['.notion-root > div[class^="notion-callout bg-brown"] > .notion-callout__content']
  for (const el of items){
    document.querySelector(el).addEventListener("mouseover",function() {cc(el)} , {once:true});
  }
}

function cc(el){
  return anime({
    targets: el,
    color: ['rgb(255, 255, 255)','#0D3B66'],
    translateX: 150,
    direction: 'alternate',
    duration: 1000,
    easing: 'easeInOutSine'
  });
}
