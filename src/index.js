import './style.css';

document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
  
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY });
  
  
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1 });
  
  });

window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.content .loading').classList.add('hide');
  }, 1200);

  setTimeout(function() {
    document.querySelector('.content .loading').classList.add('d-none');
    document.querySelector('.content figure').classList.remove('d-none');
  }, 1500);

  setTimeout(function() {
    document.querySelector('.content figure').classList.remove('hide');
    document.querySelector('.content figure').classList.add('show');
  }, 2000);
});