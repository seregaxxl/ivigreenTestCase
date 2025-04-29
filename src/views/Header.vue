<script setup lang="ts">
import { ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const isVisible = ref(true)

let lastScrollY = window.scrollY

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function handleScroll() {
  const currentScrollY = window.scrollY
  isVisible.value = currentScrollY < lastScrollY || currentScrollY < 10
  if (currentScrollY > lastScrollY && isOpen.value) {
    isOpen.value = false
  }
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header-container" :class="{ 'hidden-header': !isVisible }">
    <div class="nav-container">
      <div class="logo-container">
        <img src="../assets/logo.svg" alt="Logo" />
      </div>
      <nav class="nav-desktop">
            <a href="#">Products</a>
            <a href="#">About Ivi Green</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
    </nav>
      <div class="nav-n-cart-container">
          <button class="cart">
            <img src="../assets/basket.svg" alt="">
            <span class="cart-count">0</span>
          </button>
        <button @click="toggleMenu" class="hamburger-container">
          <div :class="{ 'hamburger': true, 'active': isOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <div v-if="isOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <nav class="mobile-nav">
            <a href="#">Products</a>
            <a href="#">About Ivi Green</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
          </nav>
          <div class="mobile-menu-contact">
            <a href="mailto:hello@ivigreen.com">hello@ivigreen.com</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
header{
  display: block !important;
}
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001; 
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.hidden-header {
  transform: translateY(-100%);
}
.nav-container {
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; 
  .logo-container {
    display: flex;
    align-items: center;
    img {
      width: 56px; 
      height: 56px; 
    }
  }
}
.nav-n-cart-container {
    display: flex;
    gap: 15px; 
    align-items: center;
}
.cart {
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    img {
      width: 22px;
      height: 22px;
    }
}
.cart-count {
    position: absolute;
    top: 8px;
    right: 6px;
    background-color: #32CD7A;
    color: white;
    border-radius: 50%;
    width: 26px; 
    height: 26px;
    font-size: 16px;
    font-weight: bold;
    line-height: 160%;
}
.hamburger {
  width: 40px;
  height: 40px;
  background-color: #3B5998; 
  border-radius: 8px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px; 
  padding: 8px;
  box-sizing: border-box;
}
.hamburger span {
    width: 24px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
}
.hamburger.active span:first-child {
  transform: translateY(4px) rotate(-45deg); 
}
.hamburger.active span:nth-child(2) {
  display: none; 
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-4px) rotate(45deg); 
}
.basket {
  width: 40px;
  height: 40px;
} 
.basket img {
  width: 100%;
  height: 100%;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
.mobile-menu {
  position: fixed;
  top: 72px; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1000;
  padding: 0 auto;
  box-sizing: border-box;
  overflow-y: auto;
}

.mobile-menu-content {
  padding-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mobile-nav a {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  padding-bottom: 48px;
  font-size: 20px;
  background-color: transparent ;
}


.mobile-menu-contact {
  margin-top: auto; 
  margin-bottom: 54px;
}

.mobile-menu-contact a {
  color: #3E468F;
  font-size: 16px;
  text-decoration: none;

}

.nav-desktop {
  display: none;
  font-size: 20px;
  a {
    color: #2C2C2C;
    background-color: transparent ;
  }
  a:hover{
      background-color: transparent ;
  }
}

@media (min-width: 768px) {
  .header-container{
    width: 100vw;
  }
  .nav-desktop {
    width: 70%;
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between
  }
  .mobile-menu {
    display: none;
  }
  .hamburger-container {
    display: none;
  }
}
</style>
