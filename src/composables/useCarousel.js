import { ref } from 'vue'

export function useCarousel(itemsLength) {
  const currentIndex = ref(0)
  let startX = 0

  function startTouch(event) {
    startX = event.touches[0].clientX
  }

  function moveTouch(event) {
    if (!startX) return

    const currentX = event.touches[0].clientX
    const diff = startX - currentX

    if (diff > 50) {
      next()
      startX = 0
    } else if (diff < -50) {
      prev()
      startX = 0
    }
  }

  function next() {
    if (currentIndex.value < itemsLength - 1) {
      currentIndex.value++
    }
  }

  function prev() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  function goTo(index) {
    currentIndex.value = index
  }

  return {
    currentIndex,
    startTouch,
    moveTouch,
    next,
    prev,
    goTo,
  }
}
