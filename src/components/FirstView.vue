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
        </div>
  
        <div class="firstScreen-grid">
            <div class="grid-item rounded-top-right white"></div>
            <div class="grid-item rounded-top-left green"></div>
            <div class="grid-item rounded-top-left">
                <img src="../assets/images/firstScreen/student.png" alt="Student" />
            </div>

            <div class="grid-item photo wide rounded-top-left rounded-bottom-right ">
                <img src="../assets/images/firstScreen/kid.png" alt="Kid" />
            </div>
            <div class="grid-item rounded-bottom-left white"></div>

            <div class="grid-item rounded-top-left green"></div>
            <div class="grid-item circle white"></div>
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
  </script>
  
  <style scoped>
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

  .rounded-top-left {
  border-top-left-radius: 60px;
}

.rounded-top-right {
  border-top-right-radius: 60px;
}

.rounded-bottom-left {
  border-bottom-left-radius: 60px;
}

.rounded-bottom-right {
  border-bottom-right-radius: 60px;
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
    .firstScreen-title {
      font-size: 32px;
    }
  
    .firstScreen-subtitle {
      font-size: 18px;
    }
  }
  </style>
  