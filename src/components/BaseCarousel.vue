<template>
    <div class="carousel" @touchstart="startTouch" @touchmove="moveTouch">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <slot />
      </div>
      <button class="arrow left" @click="prev()" v-if="length > 1"><img :src="leftarrow" alt="leftarrow"></button>
      <button class="arrow right" @click="next()" v-if="length > 1"><img :src="rightarrow" alt="rightarrow"></button>
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
  import { useCarousel } from '../composables/useCarousel'
  import rightarrow from '../assets/images/carousel/rightarrow.svg'
  import leftarrow from '../assets/images/carousel/leftarrow.svg'
  
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
  
  const { currentIndex, startTouch, moveTouch, goTo, next, prev } = useCarousel(props.length)
  </script>
  
<style scoped>
  .carousel {
    overflow: hidden;
    max-width: 343px;
    width: 100%;
    position: relative;
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

  .arrow {
  display: none;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #32cd7a;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}

@media (min-width: 768px) {
  .dots {
    display: none;
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel {
    max-width: 100%;
  }
}
@media (min-width: 1024px) {
  .arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}
}
@media (min-width: 1440px) {
  
}
</style>
  