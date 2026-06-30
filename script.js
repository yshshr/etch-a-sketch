const container = document.querySelector('#container');
for(let i = 0; i < 16 * 16; i++){
  const div = document.createElement('div');
  div.classList.add('square-div');
  container.appendChild(div);
}

function mouseOverOutHandler(squarediv){
  squarediv.addEventListener('mouseover', e=>{
    const target = e.target;
    target.classList.toggle('squarediv-over');
  });
  squarediv.addEventListener('mouseout', e=>{
    const target = e.target;
    target.classList.toggle('squarediv-over');
    if(target.style.backgroundColor){
      target.style.opacity = Number(target.style.opacity) + 0.1;
    }else{
      target.style.backgroundColor = `rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`;
      target.style.opacity = 0.3;
    }
  });
}

function randomRgbValue(){
  return Math.floor(Math.random() * 256);
}

const squares = document.querySelectorAll('.square-div');
squares.forEach(mouseOverOutHandler);

const btn = document.querySelector('#recreate');
btn.addEventListener('click', e=>{
  const grids = Number(prompt('新画板每边的方格数，最大100',64));
  if(grids>100) {
    alert('最大方格数只能为100');
    return;
  }
  container.replaceChildren();
  for(let i=0; i<grids * grids; i++){
    const div = document.createElement('div');
    div.classList.add('square-div');
    div.style.width = `${100 / grids}%`;
    container.appendChild(div);
  }
  const squares = document.querySelectorAll('.square-div');
  squares.forEach(mouseOverOutHandler);
});