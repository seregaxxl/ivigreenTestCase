<template>
    <div class="carousel" @touchstart="startTouch" @touchmove="moveTouch">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <slot />
      </div>
    </div>
  
    <div class="dots" :class="{ inside: dotsPosition === 'inside' }">
      <span
        v-for="(_, index) in length"
        :key="index"
        :class="['dot', { active: index === currentIndex }]"
        @click="goTo(index)"
      />
    </div>
  </template>
  
  <script setup>
  import { toRefs } from 'vue'
  import { useCarousel } from '../composables/useCarousel'
  
  const props = defineProps({
    length: {
      type: Number,
      required: true,
    },
    inactiveColor: {
    type: String,
    default: '#32cd7a'
    },
    inactiveOpacity: {
    type: Number,
    default: 0.2
    },
    dotsPosition: {
    type: String,
    default: 'below',
    validator: val => ['below', 'inside'].includes(val),
  },
  })
  
  const { currentIndex, startTouch, moveTouch, goTo } = useCarousel(props.length)
  </script>
  
<style scoped>
  .carousel {
    overflow: hidden;
    max-width: 343px;
    width: 100%;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .dots {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  .dots:not(.inside) {
  margin-top: 16px;
  }
  .dots.inside {
    position: relative;
    bottom: 30px;
    left: 0;
    right: 0;
    z-index: 1002;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    background: v-bind(inactiveColor);
    opacity: v-bind(inactiveOpacity);
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .dot.active {
        background: #32cd7a;
    opacity: 1;
  }
</style>
  