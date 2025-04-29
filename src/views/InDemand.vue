<script setup>
import icon1 from '../assets/images/inDemandScreen/Icon(1).svg'
import icon2 from '../assets/images/inDemandScreen/icon(2).svg'
import icon3 from '../assets/images/inDemandScreen/icon(3).svg'
import icon4 from '../assets/images/inDemandScreen/icon(4).svg'
import icon5 from '../assets/images/inDemandScreen/icon(5).svg'
</script>

<template>
    <section class="indemand-section">
      <h2 class="title">THE MOST IN-DEMAND TOPICS</h2>
      <ul class="topics">
        <li class="topic">
          <span class="icon">
            <img :src="icon1" alt="Icon 1" />
          </span>
          <span class="text">Relationships</span>
        </li>
        <li class="topic">
          <span class="icon">
            <img :src="icon2" alt="Icon 2" />
          </span>
          <span class="text">Skills development</span>
        </li>
        <li class="topic">
          <span class="icon">
            <img :src="icon3" alt="Icon 3" />
          </span>
          <span class="text">Growth mindset</span>
        </li>
        <li class="topic">
          <span class="icon">
            <img :src="icon4" alt="Icon 4" />
          </span>
          <span class="text">Emotional intelligence</span>
        </li>
        <li class="topic">
          <span class="icon">
            <img :src="icon5" alt="Icon 5" />
          </span>
          <span class="text">Self-esteem and confidence</span>
        </li>
      </ul>
    </section>
  </template>
  
  <style scoped>
  .indemand-section {
    margin: auto;
    width: 375px;
    background-color: white;
    padding: 8px 16px;
    border-radius: 10px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .title {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .topics {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  
  .topic {
    display: flex;
    align-items: center;
    border: 1px solid #3E468F;
    color: #3E468F;
    border-radius: 35px;
    height: 70px;
    padding: 0;
  }
  
  .icon {
    width: 70px;
    height: 70px;
    background-color: #3E468F;
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: -1px;
  }
  
  .text { 
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
  }


  @media (min-width: 1440px) {
    .indemand-section {
        width: 100%;
        max-width: 1200px;
        padding: 20px;
    }
    
    .topics {
        display: grid;
        grid-template-columns: repeat(6, auto); 
        gap: 20px;
        justify-content: center;
        max-width: 1200px;
        margin-bottom: 100px;
    }
    
    .topic:nth-child(1) {
        grid-column: 1 / 3; 
    }
    .topic:nth-child(2) {
        grid-column: 3 / 5; 
    }
    .topic:nth-child(3) {
        grid-column: 5 / 7; 
    }
    
    .topic:nth-child(4) {
        grid-column: 2 / 4; 
    }
    .topic:nth-child(5) {
        grid-column: 4 / 6; 
    }
    
    .topic {
        height: 90px;
        border-radius: 45px;
        width: 100%;
        max-width: 565px; 
        justify-self: center;

    }
    .text {
      white-space: nowrap;
      text-align: center;
      font-size: 28px;
    }
    .icon {
      height: 90px;
      width: 90px;
    }
}

  </style>
  