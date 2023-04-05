'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  section1.scrollIntoView({behavior: 'smooth'})
});

/*

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// Selecting elements
console.log(document.body);

const header = document.querySelector('.header');
document.getElementById('section--1')

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function() {
    message.remove();
  })

  ///////////////////////////////////////
// Styles, Attributes and Classes
  
// Styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.src);

// Non-standard
console.log(logo.getAttribute('src'))     // relative version instead of the asbolute result gotten from querySelector
console.log(logo.getAttribute('designer'))
logo.setAttribute('company', 'Bankist')

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j')
logo.classList.remove('c', 'j')
logo.classList.toggle('c')
logo.classList.contains('c')

// Don't use
logo.className = 'Pedro' //Overwrite all existing classes and keep only this one on the element

*/
