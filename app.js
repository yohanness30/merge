const buttonOne = document.querySelector('.b1');
const buttonTwo = document.querySelector('.b2');
const buttonThree = document.querySelector('.b3');

buttonOne.addEventListener('click', () => {
  if(buttonOne.innerHTML === 'Subscribe'){
    buttonOne.innerHTML = 'Subscribed';
    buttonOne.classList.add('show');
  } else {
    buttonOne.innerHTML = 'Subscribe';
    buttonOne.classList.remove('show');
  }
})
buttonTwo.addEventListener('click', () => {
  if(buttonTwo.innerHTML === 'Follow'){
    buttonTwo.innerHTML = 'Followed';
    buttonTwo.classList.add('show');
  } else {
    buttonTwo.innerHTML = 'Follow';
    buttonTwo.classList.remove('show');
  }
})
buttonThree.addEventListener('click', () => {
  if(buttonThree.innerHTML === 'Donate'){
    buttonThree.innerHTML = 'Donated';
    buttonThree.classList.add('show');
  } else {
    buttonThree.innerHTML = 'Donate';
    buttonThree.classList.remove('show');
  }
})