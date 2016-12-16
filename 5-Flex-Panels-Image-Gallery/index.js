
const panels = document.querySelectorAll('.panel');

function toggleOpen (){
  console.log('hello');
  this.classList.toggle('open');
}

function toggleActive(e){
  // console.log(e.propertyName);
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
  // this.classList.toggle('open-active');   don't use because there are multiple transition end events being fired
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
