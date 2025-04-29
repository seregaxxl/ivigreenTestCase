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
    width: 375px;
    background-color: white;
    padding: 8px 16px;
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
    border: 1px solid #3E468F;
    color: #3E468F;
    border-radius: 35px;
    height: 70px;
    padding: 0;
    margin-bottom: 10px;

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
  </style>
  