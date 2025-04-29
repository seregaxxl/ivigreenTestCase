<template>
  <section class="carousel-section">
    <BaseCarousel :length="items.length">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="carousel-item"
      >
        <img :src="item.image" alt="Item" class="carousel-image" />
      </div>
    </BaseCarousel>
  </section>
</template>
  
  <script setup>
    import { ref } from 'vue'
    import BaseCarousel from '../components/BaseCarousel.vue'
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
  
  </script>
  

  <style scoped>
.carousel-section {
  padding: 40px 16px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
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
@media (min-width: 768px) {
  .carousel-image {
    margin: 0 auto;
    height: 550px;
    width: 70%;
    object-fit: cover;
    border-radius: 20px;
  }
}
</style>
  