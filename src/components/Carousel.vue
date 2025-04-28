<template>
    <section class="carousel-section">
      <div
        class="carousel"
        @touchstart="startTouch"
        @touchmove="moveTouch"
      >
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div v-for="(item, index) in items" :key="index" class="carousel-item">
            <img :src="item.image" alt="Item" class="carousel-image" />
          </div>
        </div>
      </div>
  
      <div class="dots">
        <span
          v-for="(item, index) in items"
          :key="index"
          :class="['dot', { active: index === currentIndex }]"
          @click="goTo(index)"
        />
      </div>
    </section>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import img1 from '../assets/images/carousel/carouselimg1.png'
    import img2 from '../assets/images/carousel/carouselimg2.png'
    import img3 from '../assets/images/carousel/carouselimg3.png'
    import img4 from '../assets/images/carousel/carouselimg4.png'
    import img5 from '../assets/images/carousel/carouselimg5.png'
  
    const items = ref([
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
    ])
  
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
    if (currentIndex.value < items.value.length - 1) {
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
  </script>
  
  <style scoped>
  .carousel-section {
    padding: 40px 16px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: center;
  }
  
  .carousel {
    width: 100%;
    overflow: hidden;
    max-width: 343px;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .carousel-item {
    min-width: 100%;
    text-align: center;
  }
  
  .carousel-image {
    height: 480px;
    width: 343px;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: 16px;
  }
  
  .item-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  
  .item-description {
    font-size: 14px;
    color: #555;
  }
  
  .dots {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    justify-content: center;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    background: #d3d3d3;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .dot.active {
    background: #32CD7A;
  }
  </style>
  