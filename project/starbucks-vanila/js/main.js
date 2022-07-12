// INPUT창
const searchEl = document.querySelector('header .search')
const searchInput = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
  searchInput.focus();
})

searchInput.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
})

searchInput.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
})

// BADGES
const badgeEl = document.querySelector('header .badges')

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
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300))

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

