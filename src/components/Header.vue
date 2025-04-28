<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="header-container">
    <div class="nav-container">
      <div class="logo-container">
        <img src="../assets/logo.svg" alt="Logo" />
      </div>
      <div class="navNCart-container">
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
    <nav class="nav-desktop">
            <a href="#">Shop</a>
            <a href="#">FAQ</a>
            <a href="#">Professionals</a>
            <a href="#">Blog</a>
            <button class="cta-button">Get Educational Kits</button>
    </nav>
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
.navNCart-container {
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
  top: 140px; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1000;
  padding: 0px auto;
  box-sizing: border-box;
  overflow-y: auto;
}

.mobile-menu-content {
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
  gap: 24px; 
  margin-bottom: 32px; 
}

.mobile-nav a {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.mobile-nav a:hover {
  color: #3B5998; 
}

.mobile-menu-contact {
  margin-top: auto; 
  padding-top: 32px;
  border-top: 1px solid #eee; 
}

.mobile-menu-contact a {
  color: #000;
  font-size: 16px;
  text-decoration: none;
}

.nav-desktop {
  display: none;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
    gap: 24px;
    align-items: center;
  }
  .mobile-menu {
    display: none;
  }
}
</style>
