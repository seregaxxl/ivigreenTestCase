<script setup lang="ts">
import Header from './views/Header.vue'
import FirstView from './views/FirstView.vue'
import WhyIviGreen from './views/WhyIviGreen.vue'
import Carousel from './views/FirstCarousel.vue'
import InDemand from './views/InDemand.vue'
import BestSellersCarousel from './views/BestSellersCarousel.vue'
import Testimonials from './views/Testimonials.vue'
import Includes from './views/Includes.vue'
import SendEmail from './views/SendEmail.vue'
import Footer from './views/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <main>
    <FirstView />
    <WhyIviGreen />
    <Carousel />
    <InDemand />
    <BestSellersCarousel />
    <Testimonials />
    <Includes />
    <SendEmail />
    <Footer />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 0;
}
main {
  padding-top: 72px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
