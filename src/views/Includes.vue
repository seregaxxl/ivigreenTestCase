<script setup>
import icon1 from '../assets/images/includes/Icon(1).svg'
import icon2 from '../assets/images/includes/Icon(2).svg'
import icon3 from '../assets/images/includes/Icon(3).svg'
import icon4 from '../assets/images/includes/Icon(4).svg'
import icon5 from '../assets/images/includes/Icon.svg'
let title = 'What\'s included in our educational kits?'.toUpperCase()
import arrow from '../assets/images/bestSellersCarousel/icons/arrow.svg'
</script>

<template>
    <section class="includes-section">
      <h2 class="title">{{title}}</h2>
      <ul class="topics">
        <li class="topic">
          <span class="icon">
            <img :src="icon1" alt="Icon 1" />
          </span>
          <span class="text">Presentations for classroom demonstrations</span>
        </li>
        <li class="topic">
          <span class="icon">
            <img :src="icon2" alt="Icon 2" />
          </span>
          <span class="text">Instructional guides for educators</span>
        </li>
        <li class="topic">
          <span class="icon">
            <img :src="icon3" alt="Icon 3" />
          </span>
          <span class="text">Printable handouts for in-class activities</span>
        </li>
        <li class="topic">
          <span class="icon">
            <img :src="icon4" alt="Icon 4" />
          </span>
          <span class="text">Handouts for homework and self-reflection</span>
        </li>
        <li class="topic">
          <span class="icon">
            <img :src="icon5" alt="Icon 5" />
          </span>
          <span class="text">Recommended books and video resources for further study</span>
        </li>
      </ul>
      <img src="../assets/images/includes/img.png" alt="books" class="image" />
      <div class="button-container">
        <button class="show-all">
            <span class="button-text">Show all kits</span> <img :src="arrow" alt="arrow">
        </button>
      </div>
    </section>
  </template>
  
  <style scoped>
  .includes-section {
    width: 375px;
    background-color: #E8E8ED;
    padding: 48px 16px;
    border-radius: 10px;
    margin: 0;
    border: none;
  }
  
  .title {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .topics {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .topic {
    display: flex;
    align-items: center;
    color: #2C2C2C;
    background: white;
    border-radius: 20px;
    height: 86px;
    padding: 8px 8px;
    margin-bottom: 10px;

  }
  
  .icon {
    min-width: 70px;
    height: 70px;
    background-color: #3E468F;
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .text { 
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    font-style: bold;
  }
  .image {
    width: 100%;
    height: auto;
    margin-top: 24px;
    border-radius: 20px;
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
  .show-all {
    display: flex;
    justify-content: center;
    align-items: center;
        margin-top: 26px;
        color: #2C2C2C;
        img{
            filter: invert(1);
        }
        .button-text {
            color: #2C2C2C;
            font-size: 16px;
            font-weight: 700;
            margin-right: 8px;
        }
    }
  </style>
  