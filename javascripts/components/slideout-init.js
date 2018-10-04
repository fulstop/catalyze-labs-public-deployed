document.addEventListener('DOMContentLoaded', ()=>{

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

  document.querySelector('.slideout-toggle').addEventListener('click', function() {
    slideout.toggle();
  });

  const slide = document.querySelector('nav#menu');
  const slideoutItems = slide.querySelectorAll('.underlined');

  slideoutItems.forEach((el)=>{
    el.addEventListener('click', (e)=>{
      slideout.close();
    });
  });

});
