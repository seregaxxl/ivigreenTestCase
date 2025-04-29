<template>
    <section class="firstScreen">
      <div class="firstScreen-container">
        <div class="firstScreen-text">
          <h1 class="firstScreen-title">
            SOCIAL-EMOTIONAL LEARNING TOOLKITS AND SOFT SKILLS FOR EDUCATORS
          </h1>
          <div class="firstScreen-subtitle">
            Fostering emotional intelligence and progressive mindset in teen students
          </div>
          <button class="desktop-button">
          Show all kits
        </button>
        </div>
  
        <div class="firstScreen-grid">
            <div class="grid-item rounded-top-right white"><p class="desktop-p">Engaging activities for classroom and home use</p></div>
            <div class="grid-item rounded-top-left green"></div>
            <div class="grid-item rounded-top-left">
                <img src="../assets/images/firstScreen/student.png" alt="Student" />
            </div>

            <div ref="wideRef" class="grid-item photo wide rounded-top-left rounded-bottom-right ">
                <img src="../assets/images/firstScreen/kid.png" alt="Kid" />
            </div>
            <div class="grid-item rounded-bottom-left white"><p class="desktop-p">Comprehensive guidelines for educators</p></div>

            <div class="grid-item rounded-top-left green"></div>
            <div class="grid-item circle white"><p class="desktop-p">Ready-to-use materials for SEL classes</p></div>
            <div class="grid-item rounded-top-left green"></div>
        </div>
        <ul class="firstScreen-list">
          <li>Engaging activities for classroom and home use</li>
          <li>Ready-to-use materials for SEL classes</li>
          <li>Comprehensive guidelines for educators</li>
        </ul>
        <button class="firstScreen-button">
          Show all kits
        </button>
      </div>
    </section>
  </template>

  <script setup lang="ts">
  import { onMounted, ref, nextTick } from 'vue'

    const wideRef = ref<HTMLElement | null>(null)

    function setRadius() {
  if (wideRef.value) {
    const width = wideRef.value.offsetWidth
    wideRef.value.style.setProperty('--quater-width-radius', width / 4 + 'px')
  }
}

    onMounted(() => {
      nextTick(() => {
        if (wideRef.value) {
          const img = wideRef.value.querySelector('img')
          if (img && !img.complete) {
            img.addEventListener('load', setRadius)
          } else {
            setRadius()
          }
        }
      })
    })

  </script>
  
  <style scoped>
  .desktop-button, .desktop-p {
    display: none;
  }
  .firstScreen {
    background-color: #3E468F; 
    padding: 48px 16px 48px 16px;
    color: white;
  }
  
  .firstScreen-container {
    max-width: 480px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .firstScreen-title {
    text-align: left;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: block;
  }
  
  .firstScreen-subtitle {
    text-indent: 0;
    text-align-last: left;
    font-size: 16px;
    margin-bottom: 24px;
    font-weight: 500;
  }
  
  .firstScreen-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    margin-bottom: 24px;
  }
  
  .grid-item {
    width: 100%;
    aspect-ratio: 1/1;
    background-color: #f0f0f0;
    overflow: hidden;
    border-radius: 0;
  }
  
  .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .wide {
    grid-column: span 2;
    aspect-ratio: 2/1;

    }
    
  .white {
    background: white;
  }
  
  .green {
    background: #32CD7A;
  }
  
  .circle {
    background: white;
    border-radius: 50%;
  }
  .firstScreen-grid .wide{
      border-top-left-radius: var(--quater-width-radius);
      border-bottom-right-radius: var(--quater-width-radius);
    }
  .rounded-top-left {
    border-top-left-radius: 50%;
  }

  .rounded-top-right {
    border-top-right-radius: 50%;
  }

  .rounded-bottom-left {
    border-bottom-left-radius: 50%;
  }

  .rounded-bottom-right {
    border-bottom-right-radius: 50%;
  }
  
  .firstScreen-list {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 24px;
    text-align: left;
  }
  
  .firstScreen-list li {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  
  .firstScreen-button {
    background: #32CD7A;
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding: auto;
    border: none;
    width: 343px;
    height: 56px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease; 
    transform: translateY(0);
  }
  
  .firstScreen-button:hover {
    background: #16a34a;
    transform: translateY(3px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
}
  
  @media (min-width: 768px) {
    .desktop-p {
      display: inline;
      font-size: 8px;
      font-weight: 400;
      text-align: center;
      color: #2C2C2C;
    }
    .desktop-button {
      display: block;
      background: #32CD7A;
    color: white;
    font-size: 5px;
    font-weight: 700;
    padding: auto;
    border: none;
    width: 343px;
    height: 56px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease; 
    transform: translateY(0);
    }
    .desktop-button:hover {
    background: #16a34a;
    transform: translateY(3px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
}

    .firstScreen-title {
      font-size: 20px;
    }
    .firstScreen-subtitle {
      font-size: 14px;
    }
    .firstScreen-grid{
      margin-left: 6.32%;
    }
    .grid-item {
      max-width: 200px;
      display: flex;            
      justify-content: center;
      align-items: center;  
    }
    .firstScreen-container {
      max-width: 1200px;
      min-width: 768px;
      width: 100vw;
      flex-direction: row;
      padding: 0 10% 0 10%;
    }
    .firstScreen-list, .firstScreen-button {
      display: none;
    }
    .firstScreen-grid .wide{
      border-top-left-radius: var(--quater-width-radius);
      border-bottom-right-radius: var(--quater-width-radius);
      max-width: 400px;
    }
    .firstScreen-text {
      max-width: 509px;
    }
  }
  @media (min-width: 1024px) {
    .desktop-p {
      font-size: 10px;
    }
    .desktop-button {
    font-size: 12px;
    }
    .firstScreen-title {
      font-size: 30px;
    }
    .firstScreen-subtitle {
      font-size: 21px;
    }
  }
  @media (min-width: 1440px){
    .desktop-p {
      font-size: 16px;
    }
    .desktop-button {
      font-size: 16px;
    }
    .firstScreen-title {
      font-size: 40px;
    }
    .firstScreen-subtitle {
      font-size: 28px;
    }
    .firstScreen-container{
      padding: 0;
    }
  }
  </style>
  