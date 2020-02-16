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

let blueRectangleAnimation = anime({
  targets: '.bluerectangle',
  translateX: {
    value: 250,
    duration: 1000
  },
  translateY: {
    value: -250,
    duration: 1000
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 1.5,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 100,
  direction: 'alternate',
  autoplay: false,
  loop: true
});

let blueRectangle = document.querySelector('.bluerectangle')
blueRectangle.onclick = blueRectangleAnimation.play

let redRectangleAnimation = anime({
  targets: '.redrectangle',
  rotate: {
    value: 360,
    duration: 3000,
    easing: 'easeInOutSine'
  },
  delay: 100,
  direction: 'alternate',
  autoplay: false,
  loop: true
})

let redRectangle = document.querySelector('.redrectangle')
redRectangle.onclick = redRectangleAnimation.play

let pinkRectangleAnimation = anime({
  targets: '.pinkrectangle',
  rotate: {
    value: -360,
    duration: 5000,
    easing: 'easeInOutSine'
  },
  delay: 100,
  direction: 'alternate',
  autoplay: false,
  loop: true
})

let pinkRectangle = document.querySelector('.pinkrectangle')
pinkRectangle.onclick = pinkRectangleAnimation.play

let greenRectangleAnimation = anime({
  targets: '.greenrectangle',
  translateX: '-20vw',
  direction: 'alternate',
  loop: true,
  autoplay: false,
  easing: 'steps(5)'
})

let greenRectangle = document.querySelector('.greenrectangle')
greenRectangle.onclick = greenRectangleAnimation.play


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
