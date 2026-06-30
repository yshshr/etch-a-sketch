const container = document.querySelector('#container');
for(let i = 0; i < 16 * 16; i++){
  const div = document.createElement('div');
  div.classList.add('square-div');
  container.appendChild(div);
}

const squares = document.querySelectorAll('.square-div');
squares.forEach(squarediv => {
  squarediv.addEventListener('mouseover', e=>{
    const target = e.target;
    target.classList.toggle('squarediv-over');
  });
  squarediv.addEventListener('mouseout', e=>{
    const target = e.target;
    target.classList.toggle('squarediv-over');
  });
});