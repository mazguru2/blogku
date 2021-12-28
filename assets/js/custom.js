var splash = document.querySelector('.splash');
var splashSession=sessionStorage.getItem('splashSession');
document.addEventListener('DOMContentLoaded',function(){
  splashSession===null&&(splashSession=sessionStorage.setItem('splashSession',!0),
  splash.classList.remove('d-none'),setTimeout(function(){
    splash.classList.add('d-none')},3e3))
  })