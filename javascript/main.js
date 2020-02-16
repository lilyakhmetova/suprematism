let blackRectangleAnimation = anime({
  targets: '.blackrectangle',
  translateX: 400,
  rotate: 180,
  backgroundColor: '#fff',
  borderRadius: ['0%', '50%'],
  autoplay: false,
  duration: 2000,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true
})

let blackRectangle = document.querySelector('.blackrectangle')
blackRectangle.onclick = blackRectangleAnimation.play


let yellowRectangleAnimation = anime({
  targets: '.yellowrectangle',
  width: '80%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  autoplay: false,
  duration: 3000,
  loop: true
});

let yellowRectangle = document.querySelector('.yellowrectangle')
yellowRectangle.onclick = yellowRectangleAnimation.play

let blackCircleAnimation = anime({
  targets: '.blackcircle',
  keyframes: [
    {translateY: -40},
    {translateX: -250},
    {translateY: -100},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  autoplay: false,
  loop: true
});

let blackCircle = document.querySelector('.blackcircle')
blackCircle.onclick = blackCircleAnimation.play
