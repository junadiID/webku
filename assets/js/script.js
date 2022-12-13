
// ini untuk hamburger

  function addtogle() {
   var hamburger = document.querySelector(".hamburger");
   
   hamburger.style.cssText ="-webkit-transition: all 2s ease-in;";
   hamburger.classList.toggle("block");
   navMenu.classList.toggle("hidden");
   navMenu.style.cssText ="-webkit-transition: all 10s ease-in;"
}



// scrol navbar fix
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixeNav = header.offsetTop;

  if(window.pageYOffset > fixeNav){
    header.classList.add("navbar-fixed");
    header.style.cssText ="-webkit-transition: all 0.5s ease-in-out;";
  } else {
        setTimeout(function(){
        header.classList.remove('navbar-fixed');
        header.style.cssText.remove ="-webkit-transition: all 0.5s ease-in-out;";
        }, 500);
     
  }


}


// blob js start
var radius = 8;
TweenMax.staggerFromTo('.blob', 4, {
cycle: {
  attr: function (i) {
    var r = i * 90;
    return {
      transform: 'rotate(' + r + ') translate(' + radius + ',0.1) rotate(' + (-r) + ')'
    }
  }
}
}, {
cycle: {
  attr: function (i) {
    var r = i * 90 + 360;
    return {
      transform: 'rotate(' + r + ') translate(' + radius + ',0.1) rotate(' + (-r) + ')'
    }
  }
},
ease: Linear.easeNone,
repeat: -1
});

// animasi text
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 500
  });