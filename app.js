const buttonOne = document.querySelector('.b1');
const buttonTwo = document.querySelector('.b2');
const buttonThree = document.querySelector('.b3');

addEventListener('click', () => {
  if(buttonOne.innerHTML === 'Subscribe'){
    buttonOne.innerHTML = 'Subscribed';
    buttonOne.classList.add('show');
  } else {
    buttonOne.innerHTML = 'Subscribe';
    buttonOne.classList.remove('show');
  }
})
addEventListener('click', () => {
  if(buttonOne.innerHTML === 'Follow'){
    buttonOne.innerHTML = 'Followed';
    buttonOne.classList.add('show');
  } else {
    buttonOne.innerHTML = 'Follow';
    buttonOne.classList.remove('show');
  }
})
addEventListener('click', () => {
  if(buttonOne.innerHTML === 'Donate'){
    buttonOne.innerHTML = 'Donated';
    buttonOne.classList.add('show');
  } else {
    buttonOne.innerHTML = 'Donate';
    buttonOne.classList.remove('show');
  }
})