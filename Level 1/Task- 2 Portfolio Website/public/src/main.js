document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#home"),
    smooth: true,
  });

  function loadingWrapper() {
    const loadingAnimation = gsap.timeline();

    loadingAnimation.to("#loader", {
      y: -1000,
      duration: 1,
      delay: 2,
    }).to("#green", {
      y:-1000,
      duration: 0.5,
      height: 0,
      
    }).from("#leftanimate", {
      x: 1000,
      duration: 1,
      opacity: 1,
      // delay: ,
    }).to("#home", {
      top: 0,
      opacity: 1,
      duration: 0.5,
      // delay: -0.5,
    });

    loadingAnimation.add(() => {
      // Ensure loader is completely out of view and home is visible
      document.querySelector("#loadingAnimator").style.display = "none";
    });
  }

  loadingWrapper();
});


////// projects 
