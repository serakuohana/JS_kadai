
let menu = document.getElementsByTagName('h2');

function show(){
  let hideContent = this.nextElementSibling;
  hideContent.classList.toggle('hide');
};

for(let i = 0; i < menu.length; i++){
  menu[i].addEventListener('click', show)
}
