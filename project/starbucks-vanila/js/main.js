// BADGES
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

// 윈도우는 브라우저에 하나의 창이라고 생각하면된다.
// lodash라는 자바스크립트 라이브러리를 사용하는것이다.
// throttle을 통해 함수가 한번에 계속 실행되는것을 막고 초단위로 끊어서 하기위해 사용하는것이다.
// _.throttle(함수, 시간)
// gsap이라는 라이브러리를 통해 애니메이션 처리가 가능해진다.
// gsap은 css에 애니메이션 속성들을 사용할수 잇게 해준다.
// gsap.to(요소, 지속시간, 옵션)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none'
    // 현재 이상태는 실제 요소가 그 위치가 잇고 시각 적으로만 사라진것이다.
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 버튼 보이기
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 0,
    })
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    })
  }
}, 300))


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

// visual
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) *.7,
    opacity: 1
  })
})

// NOTICE
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});


new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween:10,
  centeredSlides:true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 제어
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide')
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide')
  }
})

// floating
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, dleay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5),
  {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, dleay)
  })
}


floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


// find store
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 작성
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})


// AWARDS
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next'
  }
})




