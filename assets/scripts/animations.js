export function ripple(el, e) {
   let ripple;
   if (el.querySelectorAll('.ripple').length == 0) {
      ripple = document.createElement('span');
      ripple.classList.add('ripple');
      el.prepend(ripple);
   }
   ripple = el.querySelector('.ripple');
   ripple.classList.remove('ripple-animate');
   let d = Math.max(el.offsetWidth, el.offsetHeight);
   ripple.style.width = `${d}px`;
   ripple.style.height = `${d}px`;
   ripple.style.top = `${e.pageY - offset(el).top - ripple.clientHeight / 2}px`;
   ripple.style.left = `${e.pageX - offset(el).left - ripple.clientWidth / 2}px`;
   ripple.classList.add('ripple-animate');
}
