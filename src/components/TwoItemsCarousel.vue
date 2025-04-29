<template>
    <div class="container">
        <div class="carousel" @touchstart="startTouch" @touchmove="moveTouch">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * (100 + gapInPercentage)}%)` }"
      >
        <slot />
      </div>
    </div>
    <button class="arrow left" @click="prev" v-if="length > 1">
        <img :src="leftarrow" alt="leftarrow" />
      </button>
      <button class="arrow right" @click="next(1)" v-if="length > 1">
        <img :src="rightarrow" alt="rightarrow" />
      </button>
    </div>

  </template>
  
  <script setup>
  import { useCarousel } from '../composables/useCarousel'
  import rightarrow from '../assets/images/carousel/rightarrow.svg'
  import leftarrow from '../assets/images/carousel/leftarrow.svg'
  
  const props = defineProps({
    length: {
      type: Number,
      required: true,
    },
  })

const gap = 25 
const containerWidth = 953 

const gapInPercentage = (gap / containerWidth) * 100
  const { currentIndex, startTouch, moveTouch, goTo, next, prev } = useCarousel(props.length)
  </script>
  
  <style scoped>
  .container {
    min-width: 1160px;
    position: relative;
  }
  .carousel {
    margin: auto;
    overflow: hidden;
    width: 953px;
    position: relative;
  }
  
  .carousel-track {
    gap: 25px;
    display: flex;
    transition: transform 0.3s ease;
  }
  .arrow {
    width: 80px;
    height: 80px;
    position: absolute;
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    background: #32cd7a;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1001;
    align-items: center; 
    justify-content: center;
  }
  
  .arrow.left {
    left: -100px;
  }
  
  .arrow.right {
    right: -100px;
  }

  </style>
  