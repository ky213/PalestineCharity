// import {} from './dom.js';
import './animations.js';
document.addEventListener('DOMContentLoaded', function(e) {
   /*
      Show page
    */
   window.setTimeout(() => {
      // document.querySelector('.container').style.opacity = '1';
      // document.querySelector('.container').style.visibility = 'visible';
      // document.querySelector('.preload').style.height = '0';
      // document.querySelector('.preload').style.visibility = 'hidden';
   }, 2000);
   /*
      Add ripple anitmion to button
    */
   document.querySelectorAll('.ripple-container').forEach(el => {
      el.addEventListener('click', function(e) {
         ripple(el, e)
      }, false);
   });
});
